export const loadLocalStore = () => {
  try {
    let s = localStorage.getItem("store");

    if (s === null) {
      return undefined;
    } else {
      return JSON.parse(s);
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveLocalStore = data => {
  try {
    let s = JSON.stringify(data);
    localStorage.setItem("store", s);
  } catch (error) {
    console.log(error);
  }
};
