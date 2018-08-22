/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 * 
 */
namespace Constant
{
    /**
     * Generic UI texts.
     */
    export class UI
    {
        public static readonly URL = {
            'protocols': {
                'regular':      's',
                'API':          'api',
                'newspaper':    'npe'
            },
            'gates': [
                'globalnode',
                'gate'
            ]
        }

        // Canonical Hackfield tags.
        public static readonly PROGRAM = {
            'modules': [
                'contact',
                'memory',
                'npe',
                'process',
                'remote',
            ],
            'processes': [
                'CLI',
                'hack',
                'router',
            ],
            'operations': {
                'INIT':     '-- initializing {str}.{str} --',
                'EXIT':     '-- closing {str}.{str} --'
            }
        }
    }
}