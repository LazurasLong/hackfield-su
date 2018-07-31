import Default from './Config/Default.js';

// load settings
const gameConf = new Default();

// assign event functions
const preload = gameConf.legacyBallLoad;
const create = gameConf.legacyBallBounce;

gameConf
    .modifySceneEvent('preload', preload)
    .modifySceneEvent('create', create);

/* global Phaser */
const game = new Phaser.Game(gameConf.data);