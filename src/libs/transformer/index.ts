import { instanceToPlain, plainToInstance } from 'class-transformer';
import { camelCase, isObject } from 'lodash';

export const classTransformer = () => {
  const toCamelCase = <T extends object | []>(instance: T) => {
    if (!instance && typeof instance !== 'object') {
      return instance;
    }

    if (isObject(instance) && !Array.isArray(instance)) {
      const objInstance = Object.fromEntries(
        Object.entries(instance).map(([key, val]) => [camelCase(key), typeof val === 'object' ? toCamelCase(val) : val])
      ) as T;

      return objInstance;
    } else {
      const instanceArray = instance?.map((item) => (typeof item === 'object' ? toCamelCase(item) : item)) as T;

      return instanceArray;
    }
  }

  return {
    toCamelCase,
    instanceToPlain,
    plainToInstance
  }
}

export const objectToInstance = <T extends object>(data = {}, instance: T): T => {
  Object.assign(instance, data);

  return data as T;
};