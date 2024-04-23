function deepClone(data) {
  if (data === null || typeof data !== "object") {
    return data;
  }

  if (Array.isArray(data)) {
    const arrClone = [];

    for (let i = 0; i < data.length; i++) {
      arrClone[i] = deepClone(data[i]);
    }

    return arrClone;
  }

  if (typeof data === "object") {
    const objClone = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        objClone[key] = deepClone(data[key]);
      }
    }

    return objClone;
  }
}

const cloneUser = deepClone(user);
console.log(cloneUser);
console.log(cloneUser === user);

const user1 = { ...user };
console.log(user1.hobbies === user.hobbies);
console.log(cloneUser.hobbies === user.hobbies);
