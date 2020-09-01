const win = require('electron').remote.getCurrentWindow()

window.addEventListener('keydown', e => {
    const { keyCode, ctrlKey, altKey } = e
    if (keyCode === 123) { // F12
        win && win.toggleDevTools()
    }
    if ((ctrlKey && keyCode === 82) || keyCode === 116) { // Ctrl + R   F5
        win && win.reload()
    }
    if (altKey && keyCode === 115) { // Alt + F4
        win && win.close()
    }
}, false)
