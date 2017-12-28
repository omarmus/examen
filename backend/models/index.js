'use strict';

const { ModelHandler } = require('sequelize-handlers');
const apiRest = '/api-rest/';
const types = {
  'post': {
    params: '',
    function: 'create'
  },
  'get-single': {
    params: '/:id',
    function: 'get'
  },
  'get': {
    params: '',
    function: 'query'
  },
  'delete': {
    params: '/:id',
    function: 'remove'
  },
  'put': {
    params: '/:id',
    function: 'update'
  }
};

let models;

function filterModel (model) {
  let pos = model.indexOf('?');
  if (pos !== -1) {
    console.log('cut', model.substring(0, pos));
    return model.substring(0, pos);
  }
  return model;
}

function init (app, sequelize) {
  // Cargando los modelos manualmente
  const Hammer = require('./hammer')(sequelize);

  models = {
    hammers: Hammer
  };

  // Creando manejadores sequelize-handler para cada modelo
  let handlers = {
    hammers: new ModelHandler(Hammer)
  };

  app.all(`${apiRest}*`, function (req, res, next) {
    let method = req.method.toLowerCase();
    let type = method;
    let url = req.url.split('/');
    let object = filterModel(url[2]);
    let model = models[object];

    if (method === 'get' && url.length === 4) {
      type = 'get-single';
    }
    app[method](`${apiRest}` + object + types[type].params || '', handlers[object][types[type].function](model));

    next();
  });

  return models;
}
module.exports = {
  init
};
