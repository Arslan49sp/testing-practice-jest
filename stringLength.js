const stringLength = (string) => {
  try {
    if (string.length >= 1 && string.length <= 10) return string.length;
  } catch (error) {
    console.log("String should be around 1 to 10 length");
  }
};

module.exports = stringLength;
