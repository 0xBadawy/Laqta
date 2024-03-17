function navbar() {
    var nav = document.getElementsByClassName('nav')[0]
    var top = window.scrollY

    if (top == 0){
        nav.style.backgroundColor='rgba(0, 0, 0, 0%)'
    }

    else {nav.style.backgroundColor='rgba(0, 0, 0, 50%)'}
}
