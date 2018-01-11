import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import CircleTimer from './ActionCommands/CircleTimer';

export const game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameCanvas');

game.state.add('CircleTimer', CircleTimer(Phaser, game));

game.state.start('CircleTimer');