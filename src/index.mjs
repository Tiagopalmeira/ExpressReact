import express from "express";
import cors from "cors";
import { CadastroPessoa } from "./CadastroPessoa.js";


const app = express();

app.use(express.json());
app.use(cors());

app.post('/CadastrarPessoa', (req, res) => {
  const { nome, idade, cpf } = req.body;
  const novaPessoa = new CadastroPessoa(nome, idade, cpf);

  res.status(201).json({
    mensagem: 'Cadastrado!',
    pessoa: novaPessoa,
    dadosRecebidos: { nome, idade, cpf }
  });
});

app.listen(3000, () => {
  console.log('Servidor OK! Rodando na porta 3000');
});
