import { Building } from '../models/building.mjs';
import { HttpError } from '../errors/HttpError.mjs';
import { defaultBuildings } from '../constants/building.mjs';

export const getBuildings = async (req, res, next) => {
  try {
    const buildings = await Building.find();

    if (buildings.length === 0) {
      await Building.insertMany(defaultBuildings);
    }

    res.status(200).json({
      ok: true,
      buildings: buildings.map((building) => building.toJSON()),
    });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};

export const addBuilding = async (req, res, next) => {
  const { name, slug, description, image, subBuilding } = req.body;
  try {
    if (!name || !description || !image || !slug)
      throw new HttpError(400, '[name, description, image, slug] is required.');
    if (subBuilding && !Array.isArray(name))
      throw new HttpError(400, '[subBuilding] must be an array.');

    const data = { name, description, image };
    if (subBuilding) data.subBuilding = subBuilding;

    const building = await Building.create(data);
    await building.save();

    res.status(201).json({ ok: true, building });
  } catch (err) {
    next(err);
  }
};
