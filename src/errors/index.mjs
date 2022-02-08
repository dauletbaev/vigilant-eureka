import { HttpError } from './HttpError.mjs';

export default async function (err, req, res, next) {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({ ok: false, message: err.message });
  }

  res.status(500).json({ ok: false, message: 'Internal server error.' });
}
