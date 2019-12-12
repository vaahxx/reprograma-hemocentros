define({ "api": [
  {
    "type": "get",
    "url": "/hemocentros",
    "title": "Retorna a lista de hemocentros",
    "name": "ListarHemocentros",
    "group": "Hemocentros",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Retorna",
            "description": "<p>a lista de hemocentros.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/hemocentrosRoutes.js",
    "groupTitle": "Hemocentros"
  }
] });
