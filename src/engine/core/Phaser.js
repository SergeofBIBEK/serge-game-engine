import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';

import StarCollection from './StarCollection';
import Circle from './ActionCommands/Circle';

export const game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameCanvas');

game.state.add('StarCollection', StarCollection(Phaser, game));
game.state.add('Circle', Circle(Phaser, game));

game.state.start('Circle');