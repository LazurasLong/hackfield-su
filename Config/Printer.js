import UI from '../Constant/UI.js';

/**
 * Helper data related to printing texts.
 * @module Config/Printer
 */
export default {

    /**
     * properties
     * @constant
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

    /**
     * @param {string} path         The path in the URL
     * @param {number} ContentType  Regular, NPE, API, etc
     * @param {number} gatewayType  globalnode, regular gate, etc
     * @returns {string}            The formatted URL
     */
    createLinkText (path, ContentType, gatewayType)
    {
        var url = UI.URL;
        var protocol = url.protocols[ContentType];
        var gate;

        switch (gatewayType) {

        // randomized name
        case 1:
            gate = url.gates[gatewayType] + Phaser.Math.Between(0, 9);
            break;

        // default
        default:
            gate = url.gates[gatewayType];
            break;
        }

        return `DFT{${gate}}::_${protocol}>${path}`;
    }
};