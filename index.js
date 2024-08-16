require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Admin } = require('./models');
const authMiddleware = require('./middlewares/authMiddleware');
const routes = require('./routes/Routes');
const app = express();
const PORT = process.env.PORT || 3000;
const { sequelize } = require('./models');

const createUploadsFolder = () => {
  const uploadPath = path.join(__dirname, 'uploads');
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }
};

createUploadsFolder();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.post('/api/upload', authMiddleware, upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('Nenhum arquivo enviado.');
  }

  const fileUrl = `http://localhost:3000/uploads/${req.file.filename}`;
  const adminId = req.user.id; 

  try {
    await Admin.update({ FOTO_PERFIL: fileUrl }, { where: { ID: adminId } });
    res.status(200).send({ url: fileUrl });
  } catch (error) {
    res.status(500).send('Erro ao atualizar a foto de perfil no banco de dados.');
  }
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/geocode', async (req, res) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?${req.url}&key=AIzaSyASFUEoFBam3Js9RkZ6Px9c3lCyOMz1NMg`
    );
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao fazer requisição para API do Google Geocoding', error);
    res.status(500).json({ error: 'Erro ao buscar dados da API do Google Geocoding' });
  }
});


app.use('/', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
