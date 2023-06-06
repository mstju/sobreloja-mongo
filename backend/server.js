const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();

const app = express();
const port = 4000;
const MongoClient = mongodb.MongoClient;
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

app.post("/submit", async (req, res) => {
  try {
    const { confirmarSenha, ...dados } = req.body;
    const collection = client.db("bancotera").collection("colecaotera");
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dados.senha, saltRounds);
    dados.senha = hashedPassword;
    await collection.insertOne(dados);

    console.log("Dados armazenados com sucesso!");
    res.status(200).json({ message: "Dados armazenados com sucesso!" });
  } catch (error) {
    console.error("Erro ao armazenar os dados", error);
    ("");
    res.status(500).json({ error: "Erro ao armazenar os dados" });
  }
});

app.get("/users/all", async (req, res) => {
  try {
    await client.connect();
    const collection = client.db("bancotera").collection("colecaotera");
    const users = await collection.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar os usuários", error);
    res.status(500).json({ error: "Erro ao buscar os usuários" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
