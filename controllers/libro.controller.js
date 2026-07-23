const libroService = require('../services/libro.service');

async function getAll(req, res, next) {
  try {
    const libros = await libroService.listar();
    res.json(libros);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const libro = await libroService.obtenerPorId(req.params.id);
    res.json(libro);
  } catch (error) {
    next(error);
  }
}

async function create(req, res, next) {
  try {
    const libro = await libroService.crear(req.body);
    res.status(201).json(libro);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const libro = await libroService.actualizar(req.params.id, req.body);
    res.json(libro);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const result = await libroService.eliminar(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
