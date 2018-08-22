/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Control
{
    /**
     * Keyboard input handling.
     */
    export class Keyboard extends Abstract.ContextAware
    {
        /**
         * 
         */
        public registerEventDemo(): void
        {
            const keyboard = this.context.input.keyboard;

            let cursors = keyboard.createCursorKeys();
            let player = Container.player;

            let zoom: number = 1;
            this.context.cameras.main.setZoom(zoom);

            // keyboard.addKeys('W', 'A', 'S', 'D');
            keyboard.on('keydown', (event) => {
                switch (event.key) {
                case 'w':
                    player.Y = player.Y - 1;
                    break;
                case 'a':
                    player.X = player.X - 1;
                    break;
                case 's':
                    player.Y = player.Y + 1;
                    break;
                case 'd':
                    player.X = player.X + 1;
                    break;
                case 'q':
                    zoom = zoom/1.5;
                    this.context.cameras.main.setZoom(zoom);
                    break;
                case 'e':
                    zoom = zoom * 1.5;
                    this.context.cameras.main.setZoom(zoom);
                    break;
                default:
                    break;
                }
            });
        }
    }
}