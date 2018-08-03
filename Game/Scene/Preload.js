import Default from '../../Config/Default.js';

/**
 *  Everything dedicated to the "preload" functionality.
 *  @module Game/Scene/Preload
 */
export default {

    /**
     * @returns {void}
     */
    createTimer: function ()
    {
        this.context.timer = this.context.time.addEvent({ delay: 10000, loop: true });
    },

    /**
     * loads every picture from an array
     * @returns {void}
     */
    loadPictures: function ()
    {
        var imgSet = Default.imageData;

        for (var k in imgSet)
        {
            if (imgSet.hasOwnProperty(k))
            {
                this.context.load.image(k, imgSet[k]);
            }
        }
    }

    // Default alternative for "preload" function.
    /*
    legacyBallLoad: function ()
    {
        this.context.load.image('logo', './Gfx/Legacy/LOGOFINAL.png');
        this.context.load.image('k-ball', './Gfx/Legacy/KATAMORI.png');
    }
    */
};