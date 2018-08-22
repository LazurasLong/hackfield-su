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
            let logo = Container.images['logo'];
            let player = Container.player;
            let timerString = Number(Container.timers['timer'].getProgress()*10).toString().substr(0, 3);
            
            Container.texts['debug'].setText(
                "Player.X \t" +player.X +
                "\nPlayer.Y \t" +player.Y +
                "\nTimer \t" + timerString);

            logo.x = 512 + (player.X * 32);
            logo.y = 0 + (player.Y * 32);
        }
    }
}