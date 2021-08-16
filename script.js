const panels = document.querySelectorAll('.panel')
const body = document.body
let activePanels = 0
console.log(panels)
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        body.style.backgroundImage = panel.style.backgroundImage
        
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}