function Base(element, nameOfElement) {
    this.basis = element;
    this.nameOfElement = nameOfElement;

    const closeBtn = createCloseBtnHTML();
    this.basis.appendChild(closeBtn);

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
        if (this.basis.classList.contains("showElement")) {
            this.basis.classList.remove("showElement");
            this.basis.classList.add("hideElement");
        } else {
            this.basis.classList.remove("hideElement");
            this.basis.classList.add("showElement");
        }
    },
    clearTimer: function () {
        clearTimeout(this.timer);
    }
}