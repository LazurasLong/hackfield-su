/*
 *  Various tags appearing all around the game menus.
 */
export default class UI
{
    static get TAGS ()
    {
        return {
            'NO_NEW':   'No new articles since you are logged in.',
            'MORE_AT':  'More articles: NAP{gate3}::_npe>>umbala>hackfield' +
                        '>daily'
        };
    }

    // Canonical Hackfield tags.
    static get PROGRAM ()
    {
        return {
            'modules': [
                'contact',
                'process',
                'memory',
                'rss'
            ],
            'processes': [
                'router',
                'hack'
            ],
            'operations': {
                'INIT':     '-- initializing {str}.{str} --',
                'EXIT':     '-- closing {str}.{str} --'
            }
        };
    }
}