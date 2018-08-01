/*
 *  Constants for various game settings.
 */
export default {

    /* X length of the game screen. */
    GAME_WIDTH: 1024,

    /* Y length of the game screen. */
    GAME_HEIGHT:600,

    /* Physics for the game. */
    PHYSICS:
    {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};