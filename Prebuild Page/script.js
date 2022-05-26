// ==============================SKEW=================================
let _skewl = document.getElementById('skews')
let _skewr = document.getElementById('right')

function skew() {
    _skewl.classList.toggle('skewl')
    _skewr.classList.toggle('moveR')
}
// ===================================================================
// ============================SLIDER=================================
let _page = document.getElementById('page')
let _image = []
var i = 0
let _time = 6000
_image[0] = 'img/slider1.jpg'
_image[1] = 'img/slider2.jpg'
_image[2] = 'img/slider3.jpg'

function slider() {
    _page.style.backgroundImage = "url(" + _image[i] + ")"
    if (i < _image.length - 1) {
        i++
    } else {
        i = 0
    }
    setTimeout(slider, _time)
}
window.onload = slider()
// ===================================================================

let _pop = document.getElementById('pop')

function popOpen() {
    _pop.classList.add('pop-open')
}
function popClose() {
    _pop.classList.remove('pop-open')
}


