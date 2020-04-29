export const storage = {
  set: (key: string, token: string) => localStorage.setItem(key, token),

  setObject: (key: string, token: object) => localStorage.setItem(key, JSON.stringify(token)),

  get: (key: string) => localStorage.getItem(key) || '',

  getObject: (key: string) => JSON.parse(localStorage.getItem(key) || '{}') ,

  delete: (key: string) => localStorage.removeItem(key),
};
