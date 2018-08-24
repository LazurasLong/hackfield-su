/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Config 
{
    export class Default
    {
        /**
         * @property {GameConfig} data Default Phaser.Game configuration.
         */
        public data: GameConfig = {
            type                        : Phaser.CANVAS,
            width                       : Constant.Setting.GAME_WIDTH,
            height                      : Constant.Setting.GAME_HEIGHT,
            title                       : 'hackfield -su',
            url                         : 'https://katamori.github.io/hackfield-su',
            version                     : '0.0.0.1',
            "render.antialias"          : false,
            "render.pixelArt"           : true,
            "render.roundPixels"        : true,
            "render.powerPreference"    : "low-power"
        };

        /**
         * 
         */
        public static imageData: Object = {
            'logo'      : './Gfx/Legacy/LOGOFINAL.png',
            'k-ball'    : './Gfx/Legacy/KATAMORI.png',
            'oldtiles'  : './Gfx/Legacy/TILESET.png',

            'player'    : './Gfx/oldPlayer.png',
        }

        /**
         * replace scene functions, maybe even on the fly?
         * @param newScene 
         */
        public setScene (newScene: Phaser.Scene): Config.Default
        {
            this.data.scene = newScene;

            return this;
        }

    }
}
