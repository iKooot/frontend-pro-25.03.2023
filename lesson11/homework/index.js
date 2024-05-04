const root = document.getElementById("root");

class View {
  createEl({ type = "div", content, attributes }) {
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

  clearContent(container) {
    if (!container && container.nodeType !== 1) return;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
}

/****************************************
 * 11.1
 ****************************************/

class PifagorTable extends View {
  constructor(data, root) {
    super();
    this._root = root;
    this._data = data;
  }

  createRow({ data = [], type = "body" }) {
    const row = this.createEl({ type: "tr" });

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
  }

  createCeil({ data = "", type = "td" }) {
    const ceil = this.createEl({ type });

    ceil.append(data);

    return ceil;
  }

  createTable() {
    const table = this.createEl({
      type: "table",
      attributes: { class: "table" },
    });
    const tHead = this.createEl({ type: "thead" });
    const headRow = this.createRow({ data: ["", ...this._data], type: "head" });
    const tBody = this.createEl({ type: "tbody" });
    const bodyFragment = new DocumentFragment();

    // this code yoy can move to the callback and do it more flexible
    this._data.forEach((el) => {
      const bodyRow = this.createRow({
        data: [this._data[0], ...this._data].map((innerEl, i) =>
          i === 0 ? el : el * innerEl,
        ),
      });
      bodyFragment.append(bodyRow);
    });

    tBody.append(bodyFragment);

    tHead.insertAdjacentElement("beforeend", headRow);
    table.insertAdjacentElement("beforeend", tHead);
    table.insertAdjacentElement("beforeend", tBody);

    return table;
  }

  init() {
    const container = this.createEl({ attributes: { class: "container" } });
    container.insertAdjacentElement("beforeend", this.createTable());
    this._root.insertAdjacentElement("afterbegin", container);
  }
}

const table = new PifagorTable([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], root);
table.init();

/****************************************
 * 11.2
 ****************************************/

const images = ["./assets/cat1.jpeg", "./assets/cat2.jpeg"];

class Images extends View {
  constructor(data, root) {
    super();
    this._data = data;
    this._root = root;
  }

  createImage() {
    const index = Math.floor(Math.random() * this._data.length);
    return this.createEl({
      type: "img",
      attributes: {
        src: this._data[index],
        style: { width: "200px", height: "200px" },
      },
    });
  }

  init() {
    const container = this.createEl({ attributes: { class: "container" } });
    container.insertAdjacentElement("beforeend", this.createImage());
    this._root.insertAdjacentElement("beforeend", container);
  }
}

new Images(images, root).init();

/****************************************
 * 11.3
 ****************************************/

class Topic extends View {
  constructor(data, root) {
    super();
    this._data = data;
    this._root = root;
    this._textColor = "black";
  }

  createPar() {
    const container = this.createEl({ attributes: { class: "container" } });
    const containerFragment = new DocumentFragment();

    this._data.forEach((el) => {
      const p = this.createEl({
        type: "p",
        content: el,
        attributes: { style: { color: this._textColor } },
      });
      containerFragment.append(p);
    });

    container.append(containerFragment);

    const btn = this.createEl({
      type: "button",
      content: "Change color",
      attributes: { class: "btn btn-primary" },
    });

    btn.addEventListener('click', () => {
      this._textColor = this._textColor === 'black' ? 'red' : 'black';

      container.querySelectorAll('p').forEach(p => {
        p.style.color = this._textColor;
      });
    });

    container.insertAdjacentElement('beforeend', btn)
    return container;
  }

  init() {
    const container = this.createEl({ attributes: { class: "container" } });
    container.insertAdjacentElement("beforeend", this.createPar());
    this._root.insertAdjacentElement("beforeend", container);
  }
}

const text = [
  "Lorem ipsum.",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, possimus.",
  "Lorem ipsum dolor sit amet.",
];

new Topic(text, root).init();
