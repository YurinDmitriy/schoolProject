function openAndCLose(element, time, size) {
    setTimeout(function () {
        //element.style.height = 2 * size + "px"
        element.style.width = size + "px"
    }, 0.4 * time)
}


here.onmouseenter = function () {
    document.getElementById("here").style.display = "none"

    document.getElementById("hiddenHere").style.display = "inline-block"

    document.getElementById("hiddenAside").style.display = "inline-block"

    let elem = document.getElementById("hiddenAside")

    for (i = 50; i != 251; i++) {
        openAndCLose(elem, i, i)
    }

    setTimeout(function () {
        document.getElementById("textOfHiddenAside").style.display = "block"
    }, 200)
}

aside1.onmouseleave = function () {
    document.getElementById("textOfHiddenAside").style.display = "none"

    let elem = document.getElementById("hiddenAside")

    a = 50
    for (i = 250; i >= 0; i--) {
        openAndCLose(elem, a, i)
        a++
    }

    setTimeout(function () {
        document.getElementById("hiddenAside").style.display = "none"
        document.getElementById("hiddenHere").style.display = "none"
        document.getElementById("here").style.display = "inline-block"

    }, 200)
}