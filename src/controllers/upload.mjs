export const uploadController = async (req, res) => {
  const path = req.file.path.split('/');
  const fileBasePath = '/' + path.slice(Math.max(path.length - 3, 0)).join('/');

  res.status(200).json({ ok: true, path: fileBasePath });
};
