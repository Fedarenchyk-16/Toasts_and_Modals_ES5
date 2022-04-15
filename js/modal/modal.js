function Modal(modalElement, config, onSubmit) {
    this.modalElement = modalElement;
    this.config = config;

    this.base = Modal.superclass.constructor.call(this, this.modalElement, "Modal");

    createModal.call(this, this.config, this.base, onSubmit);
}

extend(Modal, Base);

Modal.prototype.show = function () {
    console.log("in modal")
    if (this.basis.classList.contains("showModal")) {
        this.basis.classList.remove("showModal");
        this.basis.classList.add("hideModal");
        this.modal_overlay.classList.remove("modal__overlay")
    } else {
        this.basis.classList.remove("hideModal");
        this.basis.classList.add("showModal");
        this.modal_overlay.classList.add("modal__overlay")
    }
}

function overlayClick() {
    this.show();
}

function createModal(config, base, onSubmit) {
    base.classList.add("modal", "hideModal");

    //CREATE FORM(CONTAINER) ELEMENT
    const modal__item_container = document.createElement("form");
    modal__item_container.classList.add("modal__item_container")

    //CREATE TITLE
    const modal_title = document.createElement("span");
    modal_title.classList.add("modal-title");
    modal_title.innerText = "Modal window";

    modal__item_container.appendChild(modal_title);

    //CREATE INPUTS
    for (var key in config) {
        const input = document.createElement("input");

        input.type = config[key].type;
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


    base.appendChild(modal__item_container);

    //CREATE OVERLAY
    this.modal_overlay = document.createElement("div");
    this.modal_overlay.addEventListener("click", overlayClick.bind(this));
    base.appendChild(this.modal_overlay);
    base.before(this.modal_overlay);

    const onSubmitBtnClick = overlayClick.bind(this);

    modal_button.addEventListener("click", function (e) {
        e.preventDefault();
        let data = {};
        for (var key in config) {
            let input = document.getElementById("input_" + key);
            data[key] = input.value;
            input.value = "";
        }
        onSubmitBtnClick();
        onSubmit(data);
    });
}