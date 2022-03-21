const imagePreview = document.querySelector('#imagePreview');
const imageSelector = document.querySelector('#imageSelector');
const width = document.querySelector('#widthText');
const height = document.querySelector('#heightText');
const radioOriginal = document.querySelector('#radioOriginal');
const radioBoth = document.querySelector('#radioBoth');
const radioWidth = document.querySelector('#radioWidth');
const radioHeight = document.querySelector('#radioHeight');
const submit = document.querySelector('#btnSubmit');
const resizeForm = document.querySelector('form');

let imageUrl = `/api/image?name=`;

const imageChosen = () => {
    imagePreview.setAttribute('src', `/api/image?name=${imageSelector.value}&width=50&height=50`);
    imagePreview.classList.remove('hide');
};

radioOriginal.addEventListener('change', () =>{
    if(radioOriginal.checked){
        if(!width.hasAttribute('disabled')){
            width.setAttribute('disabled','');
        }
        if(!height.hasAttribute('disabled')){
            height.setAttribute('disabled','');
        }
        imageUrl = `/api/image?name=${imageSelector.value}`;
    }
});

radioBoth.addEventListener('change', () =>{
    if(radioBoth.checked){
        if(width.hasAttribute('disabled')){
            width.removeAttribute('disabled');
        }
        if(height.hasAttribute('disabled')){
            height.removeAttribute('disabled');
        }
        imageUrl = `/api/image?name=${imageSelector.value}&width=${width.value}&height=${height.value}`;
    }
});

radioWidth.addEventListener('change', () =>{
    if(radioWidth.checked){
        if(width.hasAttribute('disabled')){
            width.removeAttribute('disabled');
        }
        if(!height.hasAttribute('disabled')){
            height.setAttribute('disabled','');
        }
        imageUrl = `/api/image?name=${imageSelector.value}&width=${width.value}`;
    }
});

radioHeight.addEventListener('change', () =>{
    if(radioHeight.checked){
        if(!width.hasAttribute('disabled')){
            width.setAttribute('disabled','');
        }
        if(height.hasAttribute('disabled')){
            height.removeAttribute('disabled');
        }
        imageUrl += `/api/image?name=${imageSelector.value}&height=${height.value}`; 
    }
})

imageSelector.addEventListener('change', imageChosen);

submit.addEventListener('click', () =>{
    console.log('submit fired')
    imageUrl = `/api/image?name=${imageSelector.value}&width=${width.value}&height=${height.value}`;
    location.href = imageUrl;
})

resizeForm.addEventListener('submit', (event) =>{
    event.preventDefault();
})