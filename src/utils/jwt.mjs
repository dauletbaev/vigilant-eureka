import jwt from 'jsonwebtoken';

export const generateToken = (id, username) => {
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '2h',
  });

  return token;
};

export const compareToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    return decodedToken;
  } catch (err) {
    return false;
  }
};
