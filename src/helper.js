const generateRandomNumber = (first, second) => {
  const min = Math.ceil(first);
  const max = Math.floor(second);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default generateRandomNumber;
