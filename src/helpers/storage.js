const keyStorage = 'SIM-';
const KEYS = [
  'id',
  'username',
  'idmpleado',
];

export const storeTokens = (tokens) => {
  try {
    KEYS.forEach((key, index) => {
      localStorage.setItem(`${keyStorage}${key}`, String(tokens[key]));
      if (index === KEYS.length - 1) {
        return true
      }
    });
  } catch (err) {
    return err;
  }
};