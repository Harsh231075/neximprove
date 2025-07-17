const express = require('express');
const app = express();
const customerRoutes = require('./routes/customerRoutes');
const branchRoutes = require('./routes/branchRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.static('public')); //  For swagger-ui.css

//  1. Swagger Spec Options (only structure/info/paths)
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Neximprove API',
      version: '1.0.0',
      description: 'Backend API for customer and branch management'
    },
    servers: [
      {
        url: process.env.Base_URL || 'http://localhost:4000/api',
      }
    ]
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

//  2. UI Customization (title, favicon, CSS)
const swaggerUiOptions = {
  customCssUrl: '/swagger-ui.css',
  customSiteTitle: 'Neximprove API Docs',
  customfavIcon: 'https://avatars.githubusercontent.com/u/6154722?s=200&v=4'
};

//  3. Swagger Middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));

// Routes
app.use('/api', customerRoutes);
app.use('/api', branchRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Neximprove API is Running!');
});

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
