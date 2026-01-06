import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// ⚠️ NÃO usar localhost em Docker
const DB_HOST = process.env.DB_HOST || 'mysql';
const DB_USER = process.env.DB_USER || 'user';
const DB_PASSWORD = process.env.DB_PASSWORD || '123456';
const DB_NAME = process.env.DB_NAME || 'accessmanager';
const DB_PORT = process.env.DB_PORT || 3306;

let connection;

async function initDB() {
  while (true) {
    try {
      connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        port: DB_PORT,
      });

      console.log('✅ Conectado ao MySQL com sucesso!');
      break;
    } catch (err) {
      console.log('⏳ MySQL ainda não está pronto, tentando novamente...');
      await new Promise(res => setTimeout(res, 3000));
    }
  }
}

initDB();

// Rota teste
app.get('/', (req, res) => {
  res.json({ message: 'Backend rodando!' });
});

app.listen(3001, () => {
  console.log('🚀 Backend rodando na porta 3001');
});
