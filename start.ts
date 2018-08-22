/**
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */

/// <reference path="phaser.d.ts" />
/// <reference path="game.d.ts" />

window.onload = () => {
    let config = new Config.Default();
    let defaultScene = new Game.Scene(config.data);

    config.setScene(defaultScene);

    let game = new Phaser.Game(config.data);
};