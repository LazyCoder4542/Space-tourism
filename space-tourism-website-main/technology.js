const pageData = data["technology"]
const name = document.querySelector('#name')
const image = document.querySelector('#image')
const description = document.querySelector('#description')
const objects = [name, image, description]
const navBar = document.querySelector('#nav-bar').getElementsByTagName('div')
class updateContent {
    constructor(technology) {
        this.currentTab = technology
        this.currentData = pageData[technology]
    }
    initialize() {
        this.main()
        this.activeTab()
    }
    main() {
        objects.forEach(object => {
            if (object.id == 'image') {
                if (desktopView.matches) {
                    object.src = this.currentData[object.id + "s"]["portrait"]
                }
                else {
                    object.src = this.currentData[object.id + "s"]["landscape"]
                }
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



const desktopView = window.matchMedia("(min-width: 991px)")
const update = new updateContent(0);
update.initialize()
desktopView.addListener(() => {
    if (desktopView.matches) {
        image.src = image.src.replace('landscape', 'portrait')
    } else {
        image.src = image.src.replace('portrait', 'landscape')
    }
})