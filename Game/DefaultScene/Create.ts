/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Game.DefaultScene
{
    /**
     * Everything dedicated to the "create" functionality.
     */
    export class Create extends Abstract.ContextAware
    {
        /**
         * 
         */
        public demoTilemap(): void
        {
            this.context.cameras.main.setBounds(0, 0, 100000, 100000);
            //this.physics.world.setBounds(0, 0, 3392, 240);
            var level = [];

            var x = Constant.Setting.GAME_WIDTH/2/32;
            var y = Constant.Setting.GAME_HEIGHT/2/32;

            for (var i = 0; i < y; i++) {
                level[i] = [];
                for (var j = 0; j < x; j++) {
                    level[i][j] = i==0 || j==0 || i== y-1 || j== x-1 ? 1 : 0;
                }
            }

            var map = this.context.make.tilemap({
                data: level, tileWidth: 32, tileHeight: 32
            });
            var tiles = map.addTilesetImage('oldtiles');
            var layer = map.createStaticLayer(0, tiles, Constant.Setting.GAME_WIDTH/2, 0);

            this.context.cameras.main.setZoom(1);
        }e

        /**
         * 
         */
        public legacyBallMove(): void
        {
            Container.images['logo'] = this.context.add.image(400, 100, 'k-ball');
        }

        /**
         * 
         */
        public buildMenu(): void
        {
            var defaultStyle: Object = {
                fontFamily: 'slkscre',
                fontSize: 16,
                color: '#eee'
            };

            this.context.add.sprite(
                Constant.Setting.GAME_WIDTH / 3,
                Constant.Setting.GAME_HEIGHT / 2,
                'logo'
            );

            this.context.add.text(
                (Constant.Setting.GAME_WIDTH / 3) - 272,
                (Constant.Setting.GAME_HEIGHT / 2) - 64,
                Constant.UiText.Tag.DEMO,
                Config.Printer.defaultStyle
            );

            this.context.add.text(
                0,
                Constant.Setting.GAME_HEIGHT - 24,
                Constant.UiText.Tag.MENU_SPY,
                Config.Printer.defaultStyle
            );

            // input
            let keyboard = new Control.Keyboard(this.context);

            keyboard.registerEventDemo();
        }
    }
}