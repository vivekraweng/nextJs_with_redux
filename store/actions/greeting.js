export const GREETING = 'GREETING';

export const sayHello = (message) => {
  return {
    type: GREETING,
    message
  };
};
