function Base(element, nameOfElement) {
    this.basis = element;
    this.nameOfElement = nameOfElement;

    const closeBtn = createCloseBtnHTML();
    this.basis.appendChild(closeBtn);
    console.log("In base");
    console.log("Name: " + nameOfElement);
    console.log("Element:" + element);

    closeBtn.addEventListener("click", showMethod.bind(this))
    return this.basis;
}

function showMethod() {
    this.show();
}

function createCloseBtnHTML() {
    const closeBtn = document.createElement("div");
    closeBtn.classList.add("close-btn");

    const closeIcon = document.createElement("span");
    closeIcon.classList.add("fa");
    closeIcon.classList.add("fa-close");
    closeBtn.appendChild(closeIcon);
    return closeBtn;
}

function showAutomatically() {
    this.basis.classList.remove("show");
    this.basis.classList.add("hide");
}

Base.prototype = {
    constructor: Base,
    show: function () {
        if (this.nameOfElement === "Toast") {
            if (this.basis.classList.contains("show")) {
                this.basis.classList.remove("show");
                this.basis.classList.add("hide");
                this.clearTimer();
            } else {
                this.basis.classList.remove("hide");
                this.basis.classList.add("show");
                this.basis.classList.add("showAlert");
                this.timer = setTimeout(showAutomatically.bind(this), 5000);
            }
        } else {
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
    },
    clearTimer: function () {
        clearTimeout(this.timer);
    }
}