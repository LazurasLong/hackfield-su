import defaultConfig from '../Config/Default.js';

/*
    Everything dedicated to the "preload" functionality.
*/
export default {

    // set in time
    context: null,

    // loads every picture from an array
    loadPictures: function ()
    {
        var imgSet = defaultConfig.imageData;

        for (var k in imgSet)
        {
            if (imgSet.hasOwnProperty(k))
            {
                this.context.load.image(k, imgSet[k]);
            }
        }
    },

    // Default alternative for "preload" function.
    legacyBallLoad: function ()
    {
        this.context.load.image('logo', './Gfx/Legacy/LOGOFINAL.png');
        this.context.load.image('k-ball', './Gfx/Legacy/KATAMORI.png');
    }
};