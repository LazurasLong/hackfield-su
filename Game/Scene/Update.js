/**
 * Everything dedicated to the "update" functionality.
 * @module Game/Scene/Update
 */
export default {

    /**
     * @returns {void}
     */
    refreshData: function ()
    {
        var timerString = Number(this.context.timer.getProgress()*10).toString().substr(0, 3);
        
        this.context.debug.setText(
            "Player.X \t" +this.context.player.X +
            "\nPlayer.Y \t" +this.context.player.Y +
            "\nTimer \t" + timerString);

        this.context.logo.x = 512 + (this.context.player.X * 32);
        this.context.logo.y = 0 + (this.context.player.Y * 32);

    }
};