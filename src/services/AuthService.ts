import { storage } from './StorageService';

const SESSION_TOKEN = 'SESSION_TOKEN';

export const isAuthenticated = () => !!storage.get(SESSION_TOKEN);

export const setSessionToken = (token: string) =>
    storage.set(SESSION_TOKEN, token);

export const getSessionToken = () => storage.get(SESSION_TOKEN);

export const removeSessionToken = () => storage.delete(SESSION_TOKEN);