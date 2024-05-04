const root = document.getElementById("root");

function createEl({ type = "div", content, attributes }) {
  const $el = document.createElement(type);

  if (content) $el.textContent = content;
  if (attributes)
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== "style" && typeof value !== "object")
        return $el.setAttribute(key, value);

      Object.entries(value).forEach(([styleKey, styleValue]) => {
        $el.style[styleKey] = styleValue;
      });
    });

  return $el;
}

function clearContent(container) {
  if (!container && container.nodeType !== 1) return;
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

/****************************************
 * 11.1
 ****************************************/

function PifagorTable(data, root) {
  this._root = root;
  this._data = data;
}

PifagorTable.prototype.createRow = function ({ data = [], type = "body" }) {
  const row = createEl({ type: "tr" });

  const rowFragment = new DocumentFragment();

  data.forEach((el, i) => {
    const ceil = this.createCeil({
      type: type === "body" ? (i === 0 ? "th" : "td") : "th",
      data: el,
    });

    rowFragment.append(ceil);
  });

  row.append(rowFragment);

  return row;
};

PifagorTable.prototype.createCeil = function ({ data = "", type = "td" }) {
  const ceil = createEl({ type });

  ceil.append(data);

  return ceil;
};

PifagorTable.prototype.createTable = function () {
  const table = createEl({
    type: "table",
    attributes: { class: "table" },
  });
  const tHead = createEl({ type: "thead" });
  const headRow = this.createRow({ data: ["", ...this._data], type: "head" });
  const tBody = createEl({ type: "tbody" });
  const bodyFragment = new DocumentFragment();

  // this code yoy can move to the callback and do it more flexible
  this._data.forEach((el) => {
    const bodyRow = this.createRow({
      data: [this._data[0], ...this._data].map((innerEl, i) =>
          i === 0 ? el : el * innerEl
      ),
    });
    bodyFragment.append(bodyRow);
  });

  tBody.append(bodyFragment);

  tHead.insertAdjacentElement("beforeend", headRow);
  table.insertAdjacentElement("beforeend", tHead);
  table.insertAdjacentElement("beforeend", tBody);

  return table;
};

PifagorTable.prototype.init = function () {
  const container = createEl({ attributes: { class: "container" } });
  container.insertAdjacentElement("beforeend", this.createTable());
  this._root.insertAdjacentElement("afterbegin", container);
};

const table = new PifagorTable(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    root
);
table.init();

/****************************************
 * 11.2
 ****************************************/

function Images(data, root) {
  this._data = data;
  this._root = root;
}

Images.prototype.createImage = function () {
  const index = Math.floor(Math.random() * this._data.length);
  return createEl({
    type: "img",
    attributes: {
      src: this._data[index],
      style: { width: "200px", height: "200px" },
    },
  });
};

Images.prototype.init = function () {
  const container = createEl({ attributes: { class: "container" } });
  container.insertAdjacentElement("beforeend", this.createImage());
  this._root.insertAdjacentElement("beforeend", container);
};

const images = ["./assets/cat1.jpeg", "./assets/cat2.jpeg"];
new Images(images, root).init();

/****************************************
 * 11.3
 ****************************************/

function Topic(data, root) {
  this._data = data;
  this._root = root;
  this._textColor = "black";
}

Topic.prototype.createPar = function () {
  const container = createEl({ attributes: { class: "container" } });
  const containerFragment = new DocumentFragment();

  this._data.forEach((el) => {
    const p = createEl({
      type: "p",
      content: el,
      attributes: { style: { color: this._textColor } },
    });
    containerFragment.append(p);
  });

  container.append(containerFragment);

  const btn = createEl({
    type: "button",
    content: "Change color",
    attributes: { class: "btn btn-primary" },
  });

  const self = this; // store 'this' reference for use inside event listener
  btn.addEventListener("click", function () {
    self._textColor = self._textColor === "black" ? "red" : "black";

    container.querySelectorAll("p").forEach((p) => {
      p.style.color = self._textColor;
    });
  });

  container.insertAdjacentElement("beforeend", btn);
  return container;
};

Topic.prototype.init = function () {
  const container = createEl({ attributes: { class: "container" } });
  container.insertAdjacentElement("beforeend", this.createPar());
  this._root.insertAdjacentElement("beforeend", container);
};

const text = [
  "Lorem ipsum.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, possimus.",
  "Lorem ipsum dolor sit amet.",
];

new Topic(text, root).init();