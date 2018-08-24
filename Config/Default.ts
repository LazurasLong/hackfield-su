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
            version                     : '0.0.0.2',
            "render.antialias"          : false,
            "render.pixelArt"           : true,
            "render.roundPixels"        : true,
            "render.powerPreference"    : "low-power"
        };

        /**
         * 
         */
        public static imageData: Object = {
            'logo'      : './_gfx/Legacy/LOGOFINAL.png',
            'k-ball'    : './_gfx/Legacy/KATAMORI.png',
            'oldtiles'  : './_gfx/Legacy/TILESET.png',

            'player'    : './_gfx/oldPlayer.png',
        }
    }
}
