/**
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */

/// <reference path="phaser.d.ts" />
/// <reference path="game.d.ts" />

window.onload = () => {
    let config = new Config.Default();
    let game = Scene.Controller.setScene(
        new Phaser.Game(config.data), 
        new Scene.Menu(config.data));
};