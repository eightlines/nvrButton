import robot from 'robotjs'
import GK from 'global-keypress'

const gk = new GK()

gk.start(); // note: requires sudo to run
gk.on('press', data => {
    if (data.data === '/') { // press / to exit the program (global hotkey)
        gk.stop();
        process.exit(0);
    }

    if (data.data === 'K') {
        console.log('pressed K')
        main()
    }
});

const main = () => {
    robot.moveMouse(1000, 400) // Set this to the X/Y coordinates of the button you want to click
    robot.mouseClick()
}