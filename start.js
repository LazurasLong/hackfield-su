import Scene from './Game/Scene.js';
import gameConf from './Config/Default.js';

// load: assign event functions
gameConf.setScene(Scene);

/* global Phaser */
const game = new Phaser.Game(gameConf.data);