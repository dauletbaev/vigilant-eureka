import mongoose from 'mongoose';

const SubBuildingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  image: { type: String, required: false },
});

const BuildingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    subBuildings: { type: [SubBuildingSchema], required: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const options = {
  virtuals: true,
  transform: (_, ret) => {
    Reflect.deleteProperty(ret, '_id');
  },
};

SubBuildingSchema.set('toJSON', options);
BuildingSchema.set('toJSON', options);

export const Building = mongoose.model('building', BuildingSchema);
