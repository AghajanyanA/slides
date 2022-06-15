const upbtn = document.querySelector('.up-button')
const downbtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainslide = document.querySelector('.main-slide')
const slidesCount = mainslide.querySelectorAll('div').length

let currentSlide = 0


sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upbtn.addEventListener('click', () => {
    changeSlide('up')
})

downbtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(btn) {
    if (btn === 'up') {
        currentSlide++
        if (currentSlide === slidesCount) {
            currentSlide = 0
        }
    } else if (btn === 'down') {
        currentSlide--
        if (currentSlide < 0) {
            currentSlide = slidesCount - 1
        }
    }
    const height = container.clientHeight
    mainslide.style.transform = `translateY(-${currentSlide * height}px)`
    sidebar.style.transform = `translateY(${currentSlide * height}px)`
}