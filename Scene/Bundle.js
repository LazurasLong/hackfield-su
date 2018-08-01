import Create from './Create.js';
import Preload from './Preload.js';

/*
    Customizable summary of preload, create, update and many more.
*/
export default {

    preload: function ()
    {
        Preload.context = this;
        Preload.loadPictures();
        console.log('preload done');
    },

    create: function ()
    {
        Create.context = this;
        Create.demoTilemap();
        Create.legacyBallBounce();
        console.log('create done');
    }
};