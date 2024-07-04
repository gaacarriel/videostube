
# VideosTube

VideosTube é uma aplicação que lista videos do youtube, aqui você pode buscar pelo video que quiser, e ainda favoritar videos!




## Instalação

Clone este projeto em sua máquina:

```bash
  git clone https://github.com/seu-usuario/videostube.git .
```

Em seguida, crie um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:

```bash
  API_KEY=chave-da-api
  SECRET_KEY=chave-secreta
```

Instale as dependencias do projeto:

```bash
  npm install
```

Agora, execute o seguinte comando para construir e iniciar os contêineres:

```bash
  docker-compose up --build
```

Prontinho, seu projeto está rodando em: 
[http://localhost:3003/](http://localhost:3003/)