require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // created_at e updated_at dentro de cada tabela do banco de dados
    underscored: true,
    underscoredAll: true,
  },
};
