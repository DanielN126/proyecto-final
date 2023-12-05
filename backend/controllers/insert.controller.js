const Insert = require("../models/insert.model");
const debug = require("debug")("app:insert-controller");
const controller = {};

controller.save = async (req, res, next) => {
  try {
    const { balance, ingresos, gastos, metaDeAhorro, evento } = req.body;
    const { identifier } = req.params;

    let insert = await Insert.findById(identifier);

    if (!insert) {
      insert = new Insert();
    }

    insert["balance"] = balance;
    insert["ingresos"] = ingresos;
    insert["gastos"] = gastos;
    insert["metaDeAhorro"] = metaDeAhorro;
    insert["evento"] = evento;

    const insertSaved = await insert.save();

    if (!insertSaved) {
      return res.status(509).json({ error: "Error creating Insert" });
    }
    return res.status(201).json(insertSaved);
  } catch (error) {
    next(error);
  }
};

controller.findAll = async (req, res, next) => {
  try {
    const inserts = await Insert.find({});
    return res.status(200).json({ inserts });
  } catch (error) {
    next(error);
  }
}

controller.findOneById = async (req, res, next) => {
  try {
    const { identifier } = req.params;

    const insert = await Insert.findOne({ _id: identifier });

    if (!insert) {
      return res.status(404).json({ error: "Insert not found" });
    }

    return res.status(200).json(insert);
  } catch (error) {
    next(error);
  }
}



module.exports = controller;
