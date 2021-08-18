const mediaUploadPostAdd = document.querySelector(".media_upload_post_add");
const btnUploaImages = document.querySelector(".btn_upload_images");
const inputUploadImages = document.querySelector(".input_upload_images");
const textareaPostAdd = document.querySelector(".textarea_post_add");
const sendPostServer = document.querySelector(".send_post_server");
const popCreateAdd = document.querySelector(".pop_create_add");
const showMoreText = document.querySelector(".show_more_text");
const bowlAddPost = document.querySelector(".bowl_add_post");
const cancel = document.querySelector(".cancel");
const logo = document.querySelector(".logo");
const darkMode = document.querySelector(".dark_mode");
const body = document.querySelector("body");
const form = document.querySelector("form");

textareaPostAdd.addEventListener("input", () => {
  if (textareaPostAdd.value === "" || textareaPostAdd.value.length >= 500) {
    sendPostServer.classList.remove("true");
  } else {
    sendPostServer.classList.add("true");
  }
});

darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

logo.addEventListener("click", () => {
  location.reload();
});

bowlAddPost.addEventListener("click", () => {
  popCreateAdd.classList.add("active");
});

cancel.addEventListener("click", () => {
  popCreateAdd.classList.remove("active");
});
// pop add post info
let posts = [];

let numID = 0;
sendPostServer.addEventListener("click", () => {
  popCreateAdd.classList.remove("active");
});

textareaPostAdd.addEventListener("input", () => {
  let str = textareaPostAdd.value;
  let lines = (str.match(/\n/g) || "" || str.length >= 49).length + 1;
  textareaPostAdd.style.height = `0px`;
  textareaPostAdd.style.height = `${lines * 22 + 22}px`;
});

btnUploaImages.addEventListener("click", (event) => {
  inputUploadImages.addEventListener("change", (event) => {
    let theFiles = inputUploadImages.files;
    const file = theFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", (el) => {
        let linkPath = el.target.result;
        mediaUploadPostAdd.innerHTML = `
                        <div class="add_img_content">
                            <img src="${linkPath}">
                        </div>
                     `;
        const img = new Image();
        img.onload = function () {
          if (this.width > this.height) {
            document.querySelector(".add_img_content img").style.width = "100%";
            document.querySelector(".add_img_content img").style.maxHeight =
              "100%";
            document.querySelector(".add_img_content img").style.height =
              "100%";
          }
        };
        img.src = linkPath;
      });
      reader.readAsDataURL(file);
    }
  });
});

const add_sempol_to_text = document.querySelectorAll(".add_sempol_to_text");
add_sempol_to_text.forEach((sempol) => {
  sempol.addEventListener("click", () => {
    let dataKind = sempol.getAttribute("data-kind");
    if (dataKind === "@") {
      textareaPostAdd.value += ` ${dataKind} `;
    }
    if (dataKind === "#") {
      textareaPostAdd.value += ` ${dataKind} `;
    }
    if (dataKind === "emoji") {
      textareaPostAdd.value += ` ${dataKind} `;
    }
  });
});
