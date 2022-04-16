import { Base } from "../base/base.js";

export class Modal extends Base {

    constructor(modalElement, config, onSubmit) {

        super(modalElement);

        this.modalElement = modalElement;
        this.config = config;
        this.onSubmit = onSubmit;

        createModal.call(this);
    }

    show() {
        if (this.base.classList.contains("showModal")) {
            this.base.classList.remove("showModal");
            this.base.classList.add("hideModal");
            this.modal_overlay.classList.remove("modal__overlay")
        } else {
            this.base.classList.remove("hideModal");
            this.base.classList.add("showModal");
            this.modal_overlay.classList.add("modal__overlay")
        }
    }
}

function createModal() {
    this.base.classList.add("modal", "hideModal");

    //CREATE FORM(CONTAINER) ELEMENT
    const modal__item_container = document.createElement("form");
    modal__item_container.classList.add("modal__item_container");

    //CREATE TITLE
    const modal_title = document.createElement("span");
    modal_title.classList.add("modal-title");
    modal_title.innerText = "Modal window";

    modal__item_container.appendChild(modal_title);

    //CREATE INPUTS
    for (var key in this.config) {
        const input = document.createElement("input");

        input.type = this.config[key].type;
        input.setAttribute('required', '');
        input.id = "input_" + key;
        input.placeholder = key.split('_').join(' ');

        modal__item_container.appendChild(input);
    }

    //CREATE BUTTONS
    const modal_button = document.createElement("button");
    modal_button.classList.add("modal-button");
    modal_button.type = "submit";
    modal_button.innerText = "Submit";

    modal__item_container.appendChild(modal_button);

    this.base.appendChild(modal__item_container);

    //CREATE OVERLAY
    this.modal_overlay = document.createElement("div");
    this.modal_overlay.addEventListener("click", (e) => {
        this.show()
    });
    this.base.appendChild(this.modal_overlay);
    this.base.before(this.modal_overlay);

    modal_button.addEventListener('click', (e) => {
        console.log("werty")
        e.preventDefault();
        let data = {};
        for (var key in this.config) {
            let input = document.getElementById("input_" + key);
            data[key] = input.value;
            input.value = "";
        }
        this.show();
        this.onSubmit(data);
    })
}