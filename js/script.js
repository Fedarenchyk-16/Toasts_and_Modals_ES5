//MAIN APP

//TOAST

//TRIGGERS
const toastTriggerWarning = document.getElementById("toastTriggerWarning");
const toastTriggerInfo = document.getElementById("toastTriggerInfo");
const toastTriggerSuccess = document.getElementById("toastTriggerSuccess");
const toastTriggerError = document.getElementById("toastTriggerError");

//FOUNDATION OF TOAST
const toastElementWarning = document.getElementById("warning");
const toastElementInfo = document.getElementById("info");
const toastElementSuccess = document.getElementById("success");
const toastElementError = document.getElementById("error");

//CONFIG
const configToastWarning = {
    "type": "warning",
    "message": "Warning, its cold outside!"
}
const configToastInfo = {
    "type": "info",
    "message": "Info, its cold outside!"
}
const configToastSuccess = {
    "type": "success",
    "message": "Success, its cold outside!"
}
const configToastError = {
    "type": "error",
    "message": "Error, its cold outside!"
}

const toastW = new Toast(toastElementWarning, configToastWarning);
const toastI = new Toast(toastElementInfo, configToastInfo);
const toastS = new Toast(toastElementSuccess, configToastSuccess);
const toastE = new Toast(toastElementError, configToastError);

//MODAL

//TRIGGERS
const modalTrigger = document.getElementById("btn-modal");

//FOUNDATION OF MODAL
const modalElement = document.getElementById("foundation");

//CONFIG
const configModal = {
    person: {
        type: "text",
        required: true
    },
    daily_project_hours: {
        type: "password",
        required: true
    }
}

function onSubmit(data) {
    console.log(data);
}

const modal = new Modal(modalElement, configModal, onSubmit);

//LISTENERS
document.addEventListener("click", function (e) {
    console.log("click")
    if (e.target === toastTriggerWarning) {
        toastW.show();
    }
    if (e.target === toastTriggerInfo) {
        toastI.show();
    }
    if (e.target === toastTriggerSuccess) {
        toastS.show();
    }
    if (e.target === toastTriggerError) {
        toastE.show();
    }
    if (e.target === modalTrigger) {
        modal.show();
    }
}
);