/*
 *  Constants for various game settings.
 */
export default class Setting
{
    /* X length of the game screen. */
    static get GAME_WIDTH ()
    {
        return 1024;
    }

    /* Y length of the game screen. */
    static get GAME_HEIGHT ()
    {
        return 600;
    }

    /* Physics for the game. */
    static get PHYSICS ()
    {
        return {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        };
    }

}