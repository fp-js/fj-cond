export default function (conditions) {
  return (...args) => {
    for (let condition of conditions) {
      if (condition[0].apply(null, args) === true) 
        return condition[1].apply(null, args);
    }
  };
}
