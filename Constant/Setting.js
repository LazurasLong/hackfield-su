/**
 * Constants for various game settings.
 * @module Constant/Setting
 */
export default {

    /**
     * X length of the game screen.
     * @constant
     */
    GAME_WIDTH: 1024,

    /**
     * Y length of the game screen.
     * @constant
     */
    GAME_HEIGHT:600,

    /**
     * Physics for the game.
     * @constant
     */
    PHYSICS:
    {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 200
            }
        }
    }
};