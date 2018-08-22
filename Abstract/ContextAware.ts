/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Abstract
{
    /**
     * Abstract common part for objects that needs a Scene or Game object to work.
     */
    export abstract class ContextAware
    {
        public context: Game.Scene;

        constructor(gameScene: Game.Scene) {

            this.context = gameScene;

            return this;
        }
    }
}
