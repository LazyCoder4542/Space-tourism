const pageData = data["destinations"]
const name = document.querySelector('#name')
const image = document.querySelector('#image')
const description = document.querySelector('#description')
const distance = document.querySelector('#distance')
const travel = document.querySelector('#travel')
const objects = [name, image, description, distance, travel]
const navBar = document.querySelector('.container2').querySelector('ul').getElementsByTagName('li')
class updateContent {
    constructor(planet) {
        this.currentTab = planet
        this.currentData = pageData[planet]
    }
    initialize() {
        this.main()
        this.activeTab()
    }
    main() {
        objects.forEach(object => {
            if (object.id == 'image') {
                object.src = this.currentData[object.id + "s"]["png"]
            }
            else {
                object.innerText = this.currentData[object.id]
            }
        })
    }
    activeTab() {
        for (let i = 0; i < navBar.length; i++) {
            const element = navBar[i];
            element.classList.remove('active')
        }
        navBar[this.currentTab].classList.add('active')
    }
}
for (let i = 0; i < navBar.length; i++) {
    const element = navBar[i];
    element.addEventListener('click', () => {
        const update = new updateContent(i);
        update.initialize()
    })
}
const update = new updateContent(0);
update.initialize()

var images = new Array()
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    }
}
preload(
    "style/assets/destination/image-moon.png",
    "style/assets/destination/image-mars.png",
    "style/assets/destination/image-europa.png",
    "style/assets/destination/image-titan.png"
)