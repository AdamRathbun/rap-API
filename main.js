// CRUD rap battle main js
const rapName=document.querySelector('#rapper').value

document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapper=document.querySelector('#rapper').value
    try{
        const response= await fetch(`https://rap-monsta.herokuapp.com/api/${rapName}`)
        document.querySelector('h2').innerText=data.line
        document.querySelector('h3').innerText=data.name
    }catch(error){
        console.log(error)
    }
}
