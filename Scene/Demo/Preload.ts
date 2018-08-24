/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Scene.Demo
{
    /**
     * Everything dedicated to the "preload" functionality.
     */
    export class Preload extends Abstract.ContextAware
    {
        /**
         * 
         */
        public createTimer(): Preload
        {
            Container.timers['timer'] = this.context.time.addEvent({ delay: 10000, loop: true });

            return this;
        }
    }
}