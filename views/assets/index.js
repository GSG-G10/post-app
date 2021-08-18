const main = document.querySelector('main')

fetch('/getusers').then(getDB=>{
    return getDB.json()
}).then(data=>{
    console.log(data);
    sendPostsHome(data)
}).catch(console.error)


function sendPostsHome(data){
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement('div')
        let divText = document.createElement('div')
        let divImage = document.createElement('div')
        let divLikes = document.createElement('div')
        let spanText = document.createElement('span')
        let spanLikes = document.createElement('span')
        let imgPost = document.createElement('img')
        let imgLikes = document.createElement('img')
        div.classList.add('card_post')
        divText.classList.add('text_post')
        divImage.classList.add('image_post')
        divLikes.classList.add('count_likes')
        spanText.textContent = data[i].text
        spanLikes.textContent = data[i].likes
        imgPost.src = data[i].link_img
        imgLikes.src = './assets/icon/heart.svg'
        divText.appendChild(spanText)
        divImage.appendChild(imgPost)
        divImage.appendChild(divLikes)
        divLikes.appendChild(spanLikes)
        divLikes.appendChild(imgLikes)
        div.appendChild(divText)
        div.appendChild(divImage)
        main.appendChild(div)
    }
}
