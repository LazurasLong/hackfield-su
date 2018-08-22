/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Game.DefaultScene
{
    /**
     * Everything dedicated to the "preload" functionality.
     */
    export class Preload extends Abstract.ContextAware
    {
        public context: Game.Scene;

        /**
         * 
         */
        public createTimer(): void
        {
            Container.timers['timer'] = this.context.time.addEvent({ delay: 10000, loop: true });
        }

        /**
         * loads every picture from an array
         */
        public loadPictures(): void
        {
            for (var k in Config.Default.imageData)
            {
                if (Config.Default.imageData.hasOwnProperty(k))
                {
                    this.context.load.image(k, Config.Default.imageData[k]);
                }
            }
        }
    }
}