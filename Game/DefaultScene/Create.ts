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
        public demoTilemap(): Create
        {
            //this.context.cameras.main.setBounds(0, 0, 100000, 100000);
            //this.physics.world.setBounds(0, 0, 3392, 240);
            let size = "tiny";
            let level = Generator.Map.empty(size);

            let map = this.context.make.tilemap({
                data: level, 
                tileWidth: Constant.Setting.TILE_SIZE, 
                tileHeight: Constant.Setting.TILE_SIZE
            });
            var tiles = map.addTilesetImage('oldtiles');
            var layer = map.createStaticLayer(
                0, 
                tiles, 
                Constant.Setting.GAME_WIDTH - (Constant.Setting.MAP_SIZE_LIMITS[size]*Constant.Setting.TILE_SIZE), 
                0);

            Container.currentMap = map;

            this.context.cameras.main.setZoom(1);

            return this;
        }

        public generateMap(): Create
        {
            return this;
        }

        /**
         * 
         */
        public buildMenu(): Create
        {
            var defaultStyle: TextStyle = {
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

            return this;
        }
    }
}