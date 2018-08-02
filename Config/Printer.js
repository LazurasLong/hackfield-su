import UI from '../Constant/UI.js';

function rand (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*
    Helper data related to printing texts.
*/
export default {
    /*
        properties
    */
    defaultStyle: {
        fontFamily: 'slkscre',
        fontSize: 16,
        color: '#eee'
    },
    textList: [],

    /*
        methods
    */

    /*
        string  path
        string  ContentType
        int     gatewayType
    */
    createLinkText (path, ContentType, gatewayType)
    {
        var url = UI.URL;
        var protocol = url.protocols[ContentType];
        var gate;

        switch (gatewayType) {

        // randomized name
        case 1:
            gate = url.gates[gatewayType] + rand(0, 9);
            break;

        // default
        default:
            gate = url.gates[gatewayType];
            break;
        }

        return `DFT{${gate}}::_${protocol}>${path}`;
    }
};