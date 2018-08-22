/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 * 
 * A container for objects we'd want to access from outer classes. Kind of a DI.
 */
class Container
{
    public static player: Game.Player;

    public static images: Array<Phaser.GameObjects.Image> = [];
    public static texts: Array<Phaser.GameObjects.Text> = [];

    public static timers: Array<Phaser.Time.TimerEvent> = [];
}
