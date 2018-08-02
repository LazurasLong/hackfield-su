import Create from './Scene/Create.js';
import Player from './Player.js';
import Preload from './Scene/Preload.js';
import Update from './Scene/Update.js';

/*
    Customizable summary of preload, create, update and many more.
*/
export default {

    preload: function ()
    {
        Preload.context = this;
        Create.context = this;
        Update.context = this;

        Preload.loadPictures();
        console.log('preload done');

        this.player = Player;
    },

    create: function ()
    {
        Create.demoTilemap();
        Create.legacyBallBounce();

        this.debug = this.add.text(0, 0, this.player.X);
    },

    update: function ()
    {
        Update.refreshData();
        // don't even try console.log()-ing here...
    }
};