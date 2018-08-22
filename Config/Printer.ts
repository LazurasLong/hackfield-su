/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 * 
 */
namespace Config 
{
    /**
     * Helper data related to printing texts.
     */
    export class Printer
    {
        /**
         * properties
         * @constant
         */
        public static defaultStyle: Object = {
            fontFamily: 'slkscre',
            fontSize: 16,
            color: '#eee'
        }

        /**
         * @param {string} path         The path in the URL
         * @param {string} ContentType  Regular, NPE, API, etc
         * @param {number} gatewayType  globalnode, regular gate, etc
         * @returns {string}            The formatted URL
         */
        public static createLinkText (path: string, ContentType: string, gatewayType: integer): string
        {
            let url = Constant.UI.URL;
            let protocol = url.protocols[ContentType];
            let gate;

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
    }
}