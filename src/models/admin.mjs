import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export const adminModel = mongoose.model('admin', AdminSchema);
