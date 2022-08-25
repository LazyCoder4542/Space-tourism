const pageData = data["crew"]
const name = document.querySelector('#name')
const image = document.querySelector('#image')
const role = document.querySelector('#role')
const bio = document.querySelector('#bio')
const objects = [name, image, role, bio]
const navBar = document.querySelector('#nav-bar').getElementsByTagName('div')
class updateContent {
    constructor(crew) {
        this.currentTab = crew
        this.currentData = pageData[crew]
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