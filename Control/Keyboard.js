/*
    Keyboard input handling.
*/
export default {

    registerEventDemo: function ()
    {
        const keyboard = this.context.input.keyboard;

        //keyboard.addKeys('W', 'A', 'S', 'D');
        keyboard.on('keydown', (event) => {
            switch (event.key) {
            case 'w':
                this.context.player.Y = this.context.player.Y - 1;
                break;
            case 'a':
                this.context.player.X = this.context.player.X - 1;
                break;
            case 's':
                this.context.player.Y = this.context.player.Y + 1;
                break;
            case 'd':
                this.context.player.X = this.context.player.X + 1;
                break;
            default:
                break;
            }
        });
    }

};