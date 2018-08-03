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

        Preload.createTimer();
        Preload.loadPictures();
        console.log('preload done');

        this.player = Player;
    },

    create: function ()
    {
        Create.demoTilemap();
        Create.buildMenu();
        Create.legacyBallMove();

        this.debug = this.add.text(0, 0, this.player.X);
        this.ex = this.add.text(128, 128, 'X');
    },

    update: function ()
    {
        Update.refreshData();
        // don't even try console.log()-ing here...
    },

    custom: {
        setDefault: function ()
        {
            var gameOptions = {
                activeMenu: 0,          // main menu
                activeSequence: -1      // none
            };

            this.options = gameOptions;
        }
    }
};