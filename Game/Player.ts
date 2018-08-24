/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Game 
{
    /**
     * The Player object.
     */
    export class Player
    {
        constructor(sprite: Phaser.GameObjects.Image) {
            this.X = 1;
            this.Y = 1;
            this._sprite = sprite;
        }
        
        /**
         * 
         */
        public X: integer

        /**
         * 
         */
        public Y: integer

        /**
         * 
         */
        protected _sprite: Phaser.GameObjects.Image


        get sprite(): Phaser.GameObjects.Image {
            return this._sprite;
        }

        set sprite(sprite: Phaser.GameObjects.Image) {
            this._sprite = sprite;
        }
    }
}