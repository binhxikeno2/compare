import { WebStorage } from 'redux-persist';

class Storage implements WebStorage {
  getItem = (key: string): Promise<string | null> => {
    return Promise.resolve(key);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setItem = (key: string, item: string): Promise<void> => {
    return new Promise(function (resolve) {
      resolve();
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem = (key: string): Promise<void> => {
    return Promise.resolve();
  };
}

export const storage = new Storage();
