# Reprograma-DoeVida

##### API RESTful de conclusão do bootcamp Reprograma + Mercado Livre 
Este projeto tem como objetivo incentivar a doação de sangue por meio de informações sobre a coleta e localização de postos de doação (por cidade e mais próximo de uma coordenada específica).


```
DOCUMENTAÇÃO
https://reprograma-doevida.herokuapp.com/apidoc/
```

### Download + Instalação

Use o gerenciador de pacotes [npm](https://www.npmjs.com/get-npm) para instalar e iniciar o projeto.

```bash
git clone https://github.com/vaahxx/reprograma-hemocentros
cd reprograma-hemocentros
npm install
npm start
```

### Como usar?

1 - Abra o [postman](https://www.getpostman.com/downloads/)

2 - Importe o arquivo postman_collection.json

3 - A collection do projeto será importada com todas as rotas prontas 

4 - Além do localhost, também pode ser usado a [URL de deploy](https://reprograma-doevida.herokuapp.com/hemocentros) 


## Tecnologias Usadas
- Node.js
- Express.js
- MongoDB Atlas
> Dependências:
- Mongoose
- CORS
- Body-Parser
- Mongoose-Geojson-Schemas
> Dependências de Desenvolvimento:
- Nodemon
