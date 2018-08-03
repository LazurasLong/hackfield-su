import Keyboard from '../../Control/Keyboard.js';
import Printer from '../../Config/Printer.js';
import Setting from '../../Constant/Setting.js';
import Tag from '../../Constant/UI/Tag.js';

/**
 * Everything dedicated to the "create" functionality.
 * @module Game/Scene/Create
 */
export default {

    demoTilemap: function () {
        //this.cameras.main.setBounds(0, 0, 3392, 100);
        //this.physics.world.setBounds(0, 0, 3392, 240);
        var level = [];

        var x = Setting.GAME_WIDTH/2/32;
        var y = Setting.GAME_HEIGHT/2/32;
        for (var i = 0; i < y; i++) {
            level[i] = [];
            for (var j = 0; j < x; j++) {
                level[i][j] = i==0 || j==0 || i==7 || j== 31 ? 1 : 0;
            }
        }

        var map = this.context.make.tilemap({
            data: level, tileWidth: 32, tileHeight: 32
        });
        var tiles = map.addTilesetImage('oldtiles');
        var layer = map.createStaticLayer(0, tiles, Setting.GAME_WIDTH/2, 0);

        this.context.cameras.main.setZoom(1);
    },

    legacyBallMove: function ()
    {
        this.context.logo = this.context.add.image(400, 100, 'k-ball');
    },

    buildMenu: function ()
    {
        var defaultStyle = {
            fontFamily: 'slkscre',
            fontSize: 16,
            color: '#eee'
        };

        this.context.add.sprite(
            Setting.GAME_WIDTH / 3,
            Setting.GAME_HEIGHT / 2,
            'logo'
        );

        this.context.add.text(
            (Setting.GAME_WIDTH / 3) - 272,
            (Setting.GAME_HEIGHT / 2) - 64,
            Tag.DEMO,
            Printer.defaultStyle
        );

        this.context.add.text(
            0,
            Setting.GAME_HEIGHT - 24,
            Tag.MENU_SPY,
            Printer.defaultStyle
        );

        // input
        Keyboard.context = this.context;
        Keyboard.registerEventDemo();
    }

    // Logo demo screen.
    /*
    legacyBallBounce: function ()
    {
        var logo = this.context.physics.add.image(400, 100, 'k-ball');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        Keyboard.context = this.context;
        Keyboard.registerEventDemo();
    }
    */
};