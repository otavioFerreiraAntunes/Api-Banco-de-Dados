const sqlite3 = require('sqlite3').verbose();
const path = require('path');
// Definir o caminho para o arquivo do banco de dados SQLite
//__dirname=diretório atual do arquivo config.js
const dbPath = path.resolve(__dirname, './database.db');

// Criar uma conexão com o banco de dados SQLite
const db = new sqlite3.Database(dbPath, (erro) => {
    if (erro) {
        console.error('Erro ao conectar ao banco de dados:', erro);
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
});