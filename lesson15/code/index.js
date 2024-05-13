// // console.log(navigator.cookieEnabled);
//
// const key = "user name";
// const value = "Serhii";
//
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
//
// setCookie('user id', 'uuid12345');
// console.log(getCookie('user id'));
// deleteCookie('user id')
//
//
// function setCookie(key, value, daysToLive = 1) {
//   const date = new Date();
//   date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
//   const expires = "expires=" + date.toUTCString();
//   document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
//     value,
//   )}; ${expires}; path=/;`;
// }
//
// function deleteCookie(key) {
//     setCookie(key, null, null)
// }
//
// function getCookie(key) {
//     const cDecode = decodeURIComponent(document.cookie);
//     const cArray = cDecode.split('; ');
//
//     let result = null;
//
//     cArray.forEach( cookie => {
//         if (cookie.indexOf(cookie) === 0) {
//             result = cookie.substring(key.length + 1);
//         }
//     })
//
//     return result;
// }

/****************************************
 * storage
 ****************************************/

// localStorage.setItem('userName', 'Serhii');
// localStorage.setItem('hobbies', JSON.stringify(['shooting', 'coding']));
// console.log(localStorage);
// console.log(localStorage.getItem('userName'));
// console.log(JSON.parse(localStorage.getItem('hobbies')));
// localStorage.removeItem('userName');
// console.log(localStorage.key(0));
// console.log(localStorage.length);
// console.log(localStorage.hobbies);
// // localStorage.clear();
//
// for (const key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) {
//         console.log(localStorage[key])
//     }
// }
//
// for (const key of Object.keys(localStorage)) {
//     console.log(localStorage[key])
// }

/****************************************
 * event
 ****************************************/

// window.addEventListener('storage', (e) => {
//     console.log(e)
// })

/****************************************
 * todo
 ****************************************/

const form = document.forms.form;
const taskList = document.querySelector("[data-tasks]");
const clearTasksBtn = document.querySelector("[data-clear-tasks]");

let tasks = [];

if (localStorage.getItem("tasks")) {
  tasks = tasks.concat(JSON.parse(localStorage.getItem("tasks")));
}

function addTask(content) {
  const li = document.createElement("li");
  li.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center",
  );
  li.textContent = content;

  const removeBtn = document.createElement("span");
  removeBtn.classList.add("delete-icon");
  removeBtn.dataset.removeTask = "";

  const icon = document.createElement("i");
  icon.classList.add("bi", "bi-trash2-fill");

  removeBtn.addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
    tasks = tasks.filter((el) => {
      return el !== e.currentTarget.parentNode.textContent;
    });

    if (!tasks.length) {
      clearTasksBtn.classList.add("d-none");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  removeBtn.insertAdjacentElement("beforeend", icon);
  li.insertAdjacentElement("beforeend", removeBtn);
  taskList.insertAdjacentElement("beforeend", li);
}

if (tasks.length) {
  tasks.forEach((task) => {
    addTask(task);
  });
  clearTasksBtn.classList.remove("d-none");
}

form.elements.task.addEventListener("change", (e) => {
  if (e.currentTarget.value) tasks.push(e.currentTarget.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (tasks.length) {
    addTask(tasks[tasks.length - 1]);
    clearTasksBtn.classList.remove("d-none");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  form.elements.task.value = "";
});

clearTasksBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.add("d-none");
  localStorage.clear();
  tasks.length = 0;
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }
});

/****************************************
 * Index DB
 ****************************************/

class IndexedDBManager {
  constructor(databaseName, storeName) {
    this.databaseName = databaseName;
    this.storeName = storeName;
    this.db = null;
  }

  openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.databaseName, 1);

      request.onerror = (event) => {
        reject(`Error opening database: ${event.target.error}`);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        if (!this.db.objectStoreNames.contains(this.storeName)) {
          this.db.createObjectStore(this.storeName, {
            keyPath: "id",
            autoIncrement: true,
          });
        }
      };
    });
  }

  closeDatabase() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  addObject(data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], "readwrite");
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.add(data);

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        reject(`Error adding object: ${event.target.error}`);
      };
    });
  }

  getObjectById(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], "readonly");
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.get(id);

      request.onsuccess = (event) => {
        const result = event.target.result;
        if (result) {
          resolve(result);
        } else {
          reject(`Object with ID ${id} not found`);
        }
      };

      request.onerror = (event) => {
        reject(`Error getting object: ${event.target.error}`);
      };
    });
  }
}

// Example usage:
const dbManager = new IndexedDBManager("MyDatabase", "MyObjectStore");

dbManager
  .openDatabase()
  .then(() => {
    const data = { name: "John Doe", age: 30 };
    return dbManager.addObject(data);
  })
  .then((objectId) => {
    console.log(`Object added with ID: ${objectId}`);
    return dbManager.getObjectById(objectId);
  })
  .then((retrievedObject) => {
    console.log("Retrieved object:", retrievedObject);
    dbManager.closeDatabase();
  })
  .catch((error) => {
    console.error(error);
  });
