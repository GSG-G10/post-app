const main = document.querySelector('main')

fetch('/getusers').then(getDB=>{
    return getDB.json()
}).then(data=>{
    console.log(data);
    sendPostsHome(data)
}).catch(console.error)


function sendPostsHome(data){
    for (let i = 0; i < data.length; i++) {
        main.innerHTML += `
        <div class="card_post">
            <img src="${data[i].link_img}">
            <span>${data[i].text}</span>
            <span>${data[i].user_id}</span>
            <span>${data[i].likes}</span>
        </div> 
    `        
    }
}
