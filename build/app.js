"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => { });
const imagePreview = (document.querySelector('#imagePreview'));
const imageSelector = (document.querySelector('#imageSelector'));
const width = (document.querySelector('#widthText'));
const height = (document.querySelector('#heightText'));
const radioOptions = (document.querySelectorAll('input[type="radio"]'));
const submit = (document.querySelector('#btnSubmit'));
let imageUrl = `/api/image?name=`;
const imageChosen = () => {
    imagePreview.setAttribute('src', `/api/image?name=${imageSelector.value}&width=50&height=50`);
    imagePreview.classList.remove('hide');
};
const optionChanged = (optionID, isSubmit) => {
    if (optionID == 'radioOriginal') {
        if (!width.hasAttribute('disabled')) {
            width.setAttribute('disabled', '');
        }
        if (!height.hasAttribute('disabled')) {
            height.setAttribute('disabled', '');
        }
        if (isSubmit) {
            imageUrl += imageSelector.value;
        }
    }
    else if (optionID == 'radioBoth') {
        if (width.hasAttribute('disabled')) {
            width.removeAttribute('disabled');
        }
        if (height.hasAttribute('disabled')) {
            height.removeAttribute('disabled');
        }
        if (isSubmit) {
            imageUrl += `${imageSelector.value}&width=${width.value}&height=${height.value}`;
        }
    }
    else if (optionID == 'radioWidth') {
        if (width.hasAttribute('disabled')) {
            width.removeAttribute('disabled');
        }
        if (!height.hasAttribute('disabled')) {
            height.setAttribute('disabled', '');
        }
        if (isSubmit) {
            imageUrl += `${imageSelector.value}&width=${width.value}`;
        }
    }
    else {
        if (!width.hasAttribute('disabled')) {
            width.setAttribute('disabled', '');
        }
        if (height.hasAttribute('disabled')) {
            height.removeAttribute('disabled');
        }
        if (isSubmit) {
            imageUrl += `${imageSelector.value}&height=${height.value}`;
        }
    }
};
for (let radioOption of radioOptions) {
    radioOption.addEventListener('change', () => {
        const optionSelected = (radioOption.getAttribute('id'));
        optionChanged(optionSelected, false);
    });
}
imageSelector.addEventListener('change', imageChosen);
submit.addEventListener('click', () => {
    console.log('submit fired');
    let optionSelected = '';
    for (let radioOption of radioOptions) {
        if (radioOption.hasAttribute('checked')) {
            optionSelected = (radioOption.getAttribute('id'));
        }
    }
    optionChanged(optionSelected, true);
    location.replace(imageUrl);
});
