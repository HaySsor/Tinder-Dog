
class DogProgile {

    constructor(data) {
        Object.assign(this, data)
    }
 

    getHtml() {
        console.log(this.img)
        return `<div class="profile-box">
        <div class="decision">
        </div>
        <img src="${this.img}" alt="" class="profile-picture">
        <div class="text">
            <h2> Age ${this.age}</h2>
        </div>
    </div>`
    }
}

export default DogProgile