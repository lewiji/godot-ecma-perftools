import Performance from "./Performance";

  export const measure = (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;
    const key = `${target.constructor.name}.${propertyKey}`;

    descriptor.value = function (...args) {
      Performance._instance.time(key);
      const result = originalMethod.apply(this, args);
      const time = Performance._instance.endTime(key);
      return result;
    }
  };
