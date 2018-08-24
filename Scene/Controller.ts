/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Scene
{
    /**
     * 
     */
    export class Controller
    {
        /**
         * replace scene functions, maybe even on the fly?
         * @param newScene 
         */
        public static setScene (context: Phaser.Game, newScene: Phaser.Scene): Phaser.Game
        {
            context.scene.add("scene", newScene, true);

            return context;
        }
    }
}