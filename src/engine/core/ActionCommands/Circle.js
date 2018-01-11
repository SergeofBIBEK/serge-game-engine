import sky from '@/assets/sky.png';
import ground from '@/assets/platform.png';
import star from '@/assets/star.png';
import dude from '@/assets/dude.png';

export default (Phaser, game) => {

    let circleX = 300;
    let circleY =300;
    let radius = 400;

    let active = true;

    let graphics = {};
    let spacebar = {};
    let backspace = {};
    let text = {};

    return {
        init: () => {

        },
        preload: () => {

        },
        create: () => {
            graphics = game.add.graphics(0,0);
            graphics.lineStyle(4, 0x00d900, 1);

            graphics.drawCircle(circleX, circleY, radius);
            
            spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            backspace = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);

            text = game.add.text(16, 16, `Radius: ${radius}`, { fontSize: '32px', fill: '#00F' });

        },
        preRender: () => {

        },
        render: () => {

        },
        update: () => {
            if (spacebar.isDown) {
                active = false;
            }

            if (backspace.isDown) {
                active = true;
                radius = 400;
            }

            if (radius > 10 && active) {
                radius -= 1;
                graphics.clear();
                graphics.lineStyle(4, 0x00d900, 1);
                graphics.drawCircle(circleX, circleY, radius);
                text.text = `Radius: ${radius}`;
            }
        },
        shutdown: () => {

        }

    }
}