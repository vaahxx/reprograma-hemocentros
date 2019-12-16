define({ "api": [
  {
    "type": "get",
    "url": "/hemocentros/todos",
    "title": "",
    "group": "Hemocentros",
    "name": "GetAll__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hemocentros",
            "description": "<p>Lista de todos os hemocentros</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{\n   \"_id\": \"5ddb15d5aba7f004139b9f84\",\n   \"nome\": \"Hospital do ABC\",\n   \"endereco\": \"Avenida São João de Meriti 174\",\n   \"cidade\": \"São Paulo\",\n   \"horarioAtendimento\": \"9h às 17h\",\n   \"totalSangue\": 120\n},...]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hemocentrosRoutes.js",
    "groupTitle": "Hemocentros"
  },
  {
    "type": "get",
    "url": "/hemocentros/localidade:cidade",
    "title": "",
    "group": "Hemocentros",
    "name": "GetCidade__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hemocentros",
            "description": "<p>Lista de todos os hemocentros em determinada cidade</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{\n   \"_id\": \"5ddb15d5aba7f004139b9f84\",\n   \"nome\": \"Hospital do ABC\",\n   \"endereco\": \"Avenida São João de Meriti 174\",\n   \"cidade\": \"São Paulo\",\n   \"horarioAtendimento\": \"9h às 17h\",\n   \"totalSangue\": 120\n},...]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hemocentrosRoutes.js",
    "groupTitle": "Hemocentros"
  },
  {
    "type": "get",
    "url": "/hemocentros/",
    "title": "",
    "name": "GetInfo",
    "group": "Hemocentros__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "infos",
            "description": "<p>Informações sobre doação de sangue</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"cuidados pós-doação de sangue\": {\n      \"imediatamente após doar\": [\n         \"permanecer sentado por 15 minutos para evitar fraqueza, tontura e sensação de desmaio\",\n         \"aceitar o lanche e bebida oferecidos\"\n      ],\n      \"primeiras 4 horas\": [\n         \"aumentar a ingestão hídrica é muito importante para repor o volume de sangue doado\",\n         \"não retirar o curativo\",\n         \"não fumar\"\n      ],\n      \"até 12 horas\": [\n         \"não fazer exercício físico extenuante\",\n         \"não ingerir bebidas alcoólicas\"\n      ]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hemocentrosRoutes.js",
    "groupTitle": "Hemocentros__"
  },
  {
    "type": "get",
    "url": "/hemocentros/localidade/maisproximo",
    "title": "",
    "name": "GetNearest",
    "group": "Hemocentros__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hemocentro",
            "description": "<p>Hemocentro mais próximo do usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n   \"_id\": \"5df6547f2ea1c1400f2cf27b\",\n   \"nome\": \"Fundação Pró-Sangue Barueri\",\n   \"endereco\": \"Rua Ângela Mirella, 354\",\n   \"cidade\": \"Barueri\",\n   \"localizacao\": {\n      \"type\": \"Point\",\n      \"coordinates\": [\n         -46.8728181,\n         -23.4966131\n      ]\n   },\n   \"horarioAtendimento\": \"8h às 16h\",\n   \"totalSangue\": 98\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hemocentrosRoutes.js",
    "groupTitle": "Hemocentros__"
  },
  {
    "type": "delete",
    "url": "/hemocentros/:nome",
    "title": "",
    "name": "deleteHemocentro",
    "group": "Hemocentros__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "mensagem",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 Success\n{\n    \"mensagem\": \"Hemocentro removido com sucesso.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hemocentrosRoutes.js",
    "groupTitle": "Hemocentros__"
  },
  {
    "type": "post",
    "url": "/hemocentros/todos",
    "title": "",
    "name": "postHemocentro",
    "group": "Hemocentros__",
    "success": {
      "fields": {
        "Created 201": [
          {
            "group": "Created 201",
            "type": "JSON",
            "optional": false,
            "field": "mensagem",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 201 Created\n{\n   \"status\": true,\n   \"mensagem\": \"novo hemocentro incluido com sucesso\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hemocentrosRoutes.js",
    "groupTitle": "Hemocentros__"
  },
  {
    "type": "put",
    "url": "/hemocentros/:nome",
    "title": "",
    "name": "updateHemocentro",
    "group": "Hemocentros__",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "mensagem",
            "description": "<p>Mensagem de sucesso</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 Success\n{\n   \"mensagem\": \"Posto de coleta atualizado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/hemocentrosRoutes.js",
    "groupTitle": "Hemocentros__"
  }
] });
