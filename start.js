import Bundle from './Scene/Bundle.js';
import Create from './Scene/Create.js';
import Preload from './Scene/Preload.js';
import gameConf from './Config/Default.js';

// load: assign event functions
gameConf.setScene(Bundle);

/* global Phaser */
const game = new Phaser.Game(gameConf.data);