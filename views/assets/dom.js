

const media_upload_post_add = document.querySelector('.media_upload_post_add')
const btn_upload_images = document.querySelector('.btn_upload_images')
const input_upload_images = document.querySelector('.input_upload_images')
const textarea_post_add = document.querySelector('.textarea_post_add')
const send_post_server = document.querySelector('.send_post_server')
const pop_create_add = document.querySelector('.pop_create_add')
const show_more_text = document.querySelector('.show_more_text')
const bowl_add_post = document.querySelector('.bowl_add_post')
const cancel = document.querySelector('.cancel')


bowl_add_post.addEventListener('click',()=>{
    pop_create_add.classList.add('active')
})

cancel.addEventListener('click',()=>{
    pop_create_add.classList.remove('active')
})
// pop add post info
let posts = []

let numID = 0
send_post_server.addEventListener('click',()=>{
    text = textarea_post_add.value
    let arr = text.split('\n')
    arr.length > 6 ? show_more_text.classList.add('show') : ''

    let contentValues = media_upload_post_add.innerHTML
    let addInfoPost ={
        text_content: text,
        media_content: contentValues,
    }

    console.log(contentValues);
    posts.push(addInfoPost)
    console.log(addInfoPost);
    console.log(posts);
    pop_create_add.classList.remove('active')
})


textarea_post_add.addEventListener("input", ()=>{
    let str = textarea_post_add.value
    let lines = (str.match(/\n/g) || '' || str.length >=49).length + 1
    textarea_post_add.style.height = `0px`;
    textarea_post_add.style.height = `${lines * 22 + 22}px`;

});










btn_upload_images.addEventListener('click',event=>{
    input_upload_images.addEventListener('change', event=>{

        let theFiles = input_upload_images.files
        // let firstimh = theFiles[0].name

        const file = theFiles[0]
        if(file){
            const reader = new FileReader()
            reader.addEventListener('load',(el)=>{
                let linkPath = el.target.result

                media_upload_post_add.innerHTML = `
                <div class="add_img_content">
                    <img src="${linkPath}">
                </div>
                `
const img = new Image();
img.onload = function() {
if(this.width >  this.height){
document.querySelector('.add_img_content img').style.width = '100%'
document.querySelector('.add_img_content img').style.maxHeight = '100%'
document.querySelector('.add_img_content img').style.height = '100%'
}

}
img.src = linkPath

            })

            reader.readAsDataURL(file)
        }
    })

})



const add_sempol_to_text = document.querySelectorAll('.add_sempol_to_text')


add_sempol_to_text.forEach(sempol=>{

    sempol.addEventListener('click',()=>{

        let dataKind = sempol.getAttribute('data-kind') 

        if(dataKind === "@"){
        textarea_post_add.value += ` ${dataKind} `
            
        }

        if(dataKind === "#"){
            
        textarea_post_add.value += ` ${dataKind} `
        }

        if(dataKind === "emoji"){
        textarea_post_add.value += ` ${dataKind} `
            
        }


    })
})

