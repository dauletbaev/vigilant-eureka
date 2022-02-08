export const uploadController = async (req, res) => {
  const path = `/uploads/${req.file.filename}`;

  res.status(200).json({ ok: true, path });
};
