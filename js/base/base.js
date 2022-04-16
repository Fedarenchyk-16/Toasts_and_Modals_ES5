export class Base {

    constructor(element) {
        this.base = element;

        const closeBtn = createCloseBtnHTML();
        this.base.appendChild(closeBtn);

        closeBtn.addEventListener("click", (e) => {
            this.show();
        });
    }

    show() {
        if (this.base.classList.contains("showElement")) {
            this.base.classList.remove("showElement");
            this.base.classList.add("hideElement");
        } else {
            this.base.classList.remove("hideElement");
            this.base.classList.add("showElement");
        }
    }
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