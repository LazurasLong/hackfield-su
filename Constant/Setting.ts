/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Constant
{
    export class Setting
    {
        /**
         * @property {integer} GAME_WIDTH todo
         */
        public static readonly GAME_WIDTH: integer = 1024;

        /**
         * @property {integer} GAME_HEIGHT todo
         */
        public static readonly GAME_HEIGHT: integer = 600;

        /**
         * @property {Object} MAP_SIZE_LIMITS todo
         */
        public static readonly MAP_SIZE_LIMITS: Object = {
            "tiny"  : 12,
            "small" : 24,
            "medium": 32,
            "large" : 64,
            "epic"  : 512
        };

        /**
         * @property {Object} PHYSICS todo
         */
        public static readonly PHYSICS: Object =
        {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity: {
                    y: 200
                }
            }
        }

        /**
         * @property {Object} PHYSICS_DEBUG todo
         */
        public static readonly PHYSICS_DEBUG: Object =
        {
            default: 'arcade',
            arcade: {
                debug: true,
                gravity: {
                    y: 200
                }
            }
        }
    }
}