import Setting from '../Constant/Setting.js';

/*
 *  Default configuration class.
 */
export default class Default
{
    constructor ()
    {
        this.data = {
            /* global Phaser */
            type: Phaser.WEBGL,
            width: Setting.GAME_WIDTH,
            height: Setting.GAME_HEIGHT,
            physics: Setting.PHYSICS,
            scene: { }
        };
    }

    // Default alternative for "preload" function.
    legacyBallLoad ()
    {
        this.load.image('logo', './Gfx/Legacy/LOGOFINAL.png');
        this.load.image('k-ball', './Gfx/Legacy/KATAMORI.png');
    }

    // Logo demo screen.
    legacyBallBounce ()
    {
        this.add.sprite(
            Setting.GAME_WIDTH / 3,
            Setting.GAME_HEIGHT / 3,
            'logo'
        );

        /* global Phaser */
        this.add.text(
            Setting.GAME_WIDTH / 3,
            Setting.GAME_HEIGHT / 2,
            'Pre-alpha in progress'
        );


        var logo = this.physics.add.image(400, 100, 'k-ball');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
    }

    // Overwrite originally supplied options.
    modifySceneEvent (type, callable)
    {
        this.data.scene[type] = callable;

        return this;
    }
}
