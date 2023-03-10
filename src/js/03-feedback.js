
import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state"
const formData={}

const refs={
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('input', throttle(onInputChange,500));
refs.form.addEventListener('submit', onSubmit)
onPagaloading()
function onInputChange(evt) {
    formData[evt.target.name]=evt.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    // console.log(formData);
}

function onPagaloading() {
    const localStorageData = localStorage.getItem(STORAGE_KEY);
    // console.log("🚀 localStorageDat", localStorageData)
    // console.log(JSON.parse(localStorageData).email);
    
    if(localStorageData){
        
        if (JSON.parse(localStorageData).email){
            formData.email=JSON.parse(localStorageData).email
            refs.input.value=JSON.parse(localStorageData).email
        } 
    
        if (JSON.parse(localStorageData).message){
            formData.message=JSON.parse(localStorageData).message
            refs.textarea.value=JSON.parse(localStorageData).message
        } 
    }
    // if(localStorageData){
    //     formData.email=JSON.parse(localStorageData).email
    //     formData.message=JSON.parse(localStorageData).message
    //     refs.input.value=JSON.parse(localStorageData).email
    //     refs.textarea.value=JSON.parse(localStorageData).message
    // }
}

function onSubmit(evt) {
    const localStorageData = localStorage.getItem(STORAGE_KEY);
    const localStorageObj=JSON.parse(localStorageData);
    evt.preventDefault();
    evt.target.reset() ;
    console.log(localStorageObj);
    localStorage.removeItem(STORAGE_KEY);
    formData.email=''
    formData.message=''

}