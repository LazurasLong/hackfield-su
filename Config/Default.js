import Printer from '../Config/Printer.js';
import Setting from '../Constant/Setting.js';

/*
 *  Default configuration
 */
export default {

    // Phaser.Game configuration
    data: {
        /* global Phaser */
        type: Phaser.WEBGL,
        width: Setting.GAME_WIDTH,
        height: Setting.GAME_HEIGHT,
        physics: Setting.PHYSICS,
        pixelArt: true,
        scene: { }
    },

    imageData: {
        'logo':     './Gfx/Legacy/LOGOFINAL.png',
        'k-ball':   './Gfx/Legacy/KATAMORI.png',
        'oldtiles': './Gfx/Legacy/TILESET.png'
    },

    // replace scene functions, maybe even on the fly?
    setScene: function (newScene)
    {
        this.data.scene = newScene;

        return this;
    }
};
