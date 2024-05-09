class CadastroPessoa {
  constructor(nome, idade, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }
  getNome() {
    return this.nome;
  }

  setNome(novoNome) {
    this.nome = novoNome;
  }

  getIdade() {
    return this.idade;
  }

  setIdade(novaIdade) {
    this.idade = novaIdade;
  }

  getCpf() {
    return this.cpf;
  }

  setCpf(novoCpf) {
    this.cpf = novoCpf;
  }
}

module.exports = CadastroPessoa; // Corrigido o nome da classe para CadastroPessoa
