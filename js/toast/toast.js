
function Toast(toastElement, config) {
    this.toastElement = toastElement;
    this.config = config;

    this.base = Toast.superclass.constructor.call(this, this.toastElement, "Toast");
    createToast(this.config, this.base);
}

extend(Toast, Base);

const settingsArray = [
    {
        "icon": "fa-warning",
        "color": "#ffdb9b",
        "top": "10px"
    },

    {
        "icon": "fa-info-circle",
        "color": "#14bde3",
        "top": "80px"
    },
    {
        "icon": "fa-check",
        "color": "#49CD4B",
        "top": "150px"
    },
    {
        "icon": "fa-times",
        "color": "#ea7d7d",
        "top": "220px"
    }

]

function createToast(config, base) {
    if (config.type === "warning") {
        createElementsHTML(base, 0, config.message);
    } else if (config.type === "info") {
        createElementsHTML(base, 1, config.message);
    } else if (config.type === "success") {
        createElementsHTML(base, 2, config.message);
    } else {
        createElementsHTML(base, 3, config.message);
    }
}

function createElementsHTML(base, index, message) {

    base.style.top = settingsArray[index].top;
    base.classList.add("alert", "hide");

    base.style.background = settingsArray[index].color;

    const icon = document.createElement("i");
    icon.classList.add("fa");
    icon.classList.add(settingsArray[index].icon);
    base.appendChild(icon);

    const msg = document.createElement("span");
    msg.classList.add("msg");
    msg.innerText = message;
    base.appendChild(msg);
}
