import bcrypt from 'bcryptjs';
import { Admin } from '../models/admin.mjs';
import { HttpError } from '../errors/HttpError.mjs';
import { generateToken } from '../utils/jwt.mjs';

export const loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      throw new HttpError(400, 'username and password required.');

    const admin = await Admin.findOne({ username });

    if (!admin) throw new HttpError(400, 'Invalid password or username.');

    const isCorrectPassword = await bcrypt.compare(password, admin.password);

    if (!isCorrectPassword)
      throw new HttpError(400, 'Invalid password or username.');

    const token = generateToken(admin.id, admin.username);

    res.status(200).json({ ok: true, token });
  } catch (err) {
    next(err);
  }
};

export const signupController = async (req, res, next) => {
  try {
    const { username, password, secret } = req.body;

    if (!secret || secret !== process.env.SECRET)
      throw new HttpError(400, 'You cannot create an admin.');

    if (!username || !password)
      throw new HttpError(400, 'username and password required.');

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      username,
      password: hashedPassword,
    });

    await admin.save();

    res.status(201).json({ ok: true });
  } catch (err) {
    next(err);
  }
};
