/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Game.DefaultScene
{
    /**
     * Everything dedicated to the "update" functionality.
     */
    export class Update extends Abstract.ContextAware
    {
        /**
         * 
         */
        public refreshData(): void
        {
            let player: Player = Container.player;
            let timerString: string = Number(Container.timers['timer'].getProgress()*10).toString().substr(0, 3);

            Container.texts['debug'].setText(
                "Player.X \t" +player.X +
                "\nPlayer.Y \t" +player.Y +
                "\nTimer \t" + timerString +
                "\nFPS: \t");

            //keep player at tilemap
            let tile = Constant.Setting.TILE_SIZE;

            let fieldOffset = {
                "X": Container.currentMap.getLayer(0).tilemapLayer.x + tile/2,
                "Y": Container.currentMap.getLayer(0).tilemapLayer.y + tile/2
            };

            player.sprite.setPosition(
                fieldOffset.X + (player.X * tile),
                fieldOffset.Y + (player.Y * tile)
            )
        }
    }
}