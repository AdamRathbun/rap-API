// CRUD rap battle main js
const rapName=document.querySelector('#rapper').textContent

document.querySelector('button').addEventListener('click', _=>{
    fetch (__dirname + `/api/${rapName}`)
    document.querySelector('h2').textcontent=(__dirname + `/api/${rapName}`)
})