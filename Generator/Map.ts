/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Generator 
{
    /**
     * Procedural map generator
     */
    export class Map 
    {
        /**
         * 
         * @param size 
         */
        public static empty(size: string): Array<Array<integer>>
        {
            let data = [];

            let x: integer = Constant.Setting.MAP_SIZE_LIMITS[size];

            for (var i = 0; i < x; i++) {
                data[i] = [];
                for (var j = 0; j < x; j++) {
                    data[i][j] = i==0 || j==0 || i== x-1 || j== x-1 ? 1 : 0;
                }
            }

            return data;
        }

        /**
         * 
         */
        public static fullRandom(): Array<Array<integer>>
        {
            let data = [];

            let x: integer = Phaser.Math.Between(
                Constant.Setting.MAP_SIZE_LIMITS["tiny"],
                Constant.Setting.MAP_SIZE_LIMITS["epic"]
            );

            for (var i = 0; i < x; i++) {
                data[i] = [];
                for (var j = 0; j < x; j++) {
                    data[i][j] = Phaser.Math.Between(0,7);
                }
            }

            return data;
        }
    }
}