const max_len = 150;
const image_size = 270;

var textarea = document.querySelector(".news-form__textarea");
var charCount = document.querySelector(".news-form__char-count");
var inputFile = document.querySelector(".news-form__upload-img");
var imageName = document.querySelector(".news-form__uploaded-img-name");
var imageIcon = document.querySelector(".news-form__uploaded-img");
var xBt = document.querySelector(".news-form__del-img-bt");

const ERROR_IMAGE_SIZE = "Неверный размер изображения";
const ERROR_IMAGE_FORMAT = "Неверный формат изображения";
const ERROR_NO_IMAGE = "Добавьте изображение";
const ERROR_TEXT_LENGTH = "Превышен лимит символов";
const ERROR_EMPTY_TEXT = "Введите текст новости";

var errorFunctions = new Map();
errorFunctions.set(ERROR_IMAGE_SIZE, () => showErrorImageError(ERROR_IMAGE_SIZE));
errorFunctions.set(ERROR_IMAGE_FORMAT, () => showErrorImageError(ERROR_IMAGE_FORMAT));
errorFunctions.set(ERROR_NO_IMAGE, () => showErrorImageError(ERROR_NO_IMAGE));
errorFunctions.set(ERROR_EMPTY_TEXT, () => textarea.classList.add("news-form__textarea-red"));


let fileReader = new FileReader();
let image = new Image();
var errors = new Set();

errors.add(ERROR_EMPTY_TEXT);
errors.add(ERROR_NO_IMAGE);

textarea.onkeyup = () => {
    var len = textarea.value.length;
    charCount.innerHTML = `Символов: ${len}/${max_len}`;
    if (len > max_len) {
        errors.add(ERROR_TEXT_LENGTH);
        charCount.classList.add("red")
    }
    else if (len == 0) {
        errors.add(ERROR_EMPTY_TEXT);
    } else {
        errors.delete(ERROR_TEXT_LENGTH);
        errors.delete(ERROR_EMPTY_TEXT);
        charCount.classList.remove("red")
        textarea.classList.remove("news-form__textarea-red")
    }
};

inputFile.addEventListener("change", () => {
    let file = inputFile.files[0];
    if (file.type.search("image/+(jpeg|png)") != -1) {
        fileReader.readAsDataURL(file);
        let filename = file.name;
        if (file.name.length > 20) {
            filename = filename.slice(0, 20) + "..." + file.type.match("jpeg|png");
        }
        imageName.innerHTML = filename;
        clearImageError();
        errors.delete(ERROR_IMAGE_FORMAT);
    } else {
        showErrorImageError(ERROR_IMAGE_FORMAT);
    }
});

fileReader.addEventListener("load", (e) => {
    let url = e.target.result;
    image.src = url;
});

xBt.addEventListener("click", () => {
    errors.add(ERROR_NO_IMAGE);
    imageName.innerHTML = "";
    imageIcon.src = "";
    hideImageInfo();
});

image.addEventListener("load", () => {
    let w = image.width;
    let h = image.height;
    if (w != image_size || h != image_size)
        showErrorImageError(ERROR_IMAGE_SIZE);
    else {
        imageIcon.src = image.src;
        clearImageError();
        errors.delete(ERROR_IMAGE_SIZE);
        errors.delete(ERROR_NO_IMAGE);
    }
});

function clearImageError() {
    imageIcon.classList.remove("hidden");
    xBt.classList.remove("hidden");
    imageName.classList.remove("red");
}

function showErrorImageError(error) {
    errors.add(error);
    imageName.innerHTML = error;
    hideImageInfo();
}

function hideImageInfo(){
    imageName.classList.add("red");
    imageIcon.classList.add("hidden");
    xBt.classList.add("hidden");
}

function validate_form() {
    if (errors.size > 0) {
        for (var er of errors) {
            let f = errorFunctions.get(er);
            if (f) f();
        }
        return false;
    }
    return true
}