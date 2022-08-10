import DogProgile from "./class.js";

const URL = 'https://dog.ceo/api/breeds/image/random'

let decision

function getdata() {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data.message)
        const profileDog ={
                    age: Math.floor(Math.random()*11)+1,
                    img: data.message
                }
                    const profile = new DogProgile(profileDog)
                    document.querySelector('.change-box').innerHTML = profile.getHtml()
                })      
    }
    
getdata() 

document.querySelector('.like').addEventListener('click', () => {
    decision = document.querySelector('.decision')
    decision.classList.add('likebgc')
    setTimeout(() => {
        getdata() 
        
    },500)
})
document.querySelector('.nope').addEventListener('click', () => {
    decision = document.querySelector('.decision')
    decision.classList.add('nopebgc')
    setTimeout(() => {
        getdata() 
    },500)
})



