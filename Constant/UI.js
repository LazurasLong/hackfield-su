/*
 *  Various tags appearing all around the game menus.
 */
export default {
    TAGS: {
        'DEMO':     'Welcome to \n\n\n\n\n\n\n' +
                    'Press any key to return to the UI!\n' +
                    '(Doesn\'t work yet, sorry; the whole thing is super ' +
                    'pre-alpha.)',

        'NO_NEW':   'No new articles since you are logged in.',
        'MORE_AT':  'More articles: DFT{gate3}::_npe>>umbala>hackfield>daily',

        'MENU_SPY': ' Maasren, Anthburt | MT:02:33, IC:2036:05:21 | data via ' +
                    'DFT{globalnode}::_api'
    },

    // Canonical Hackfield tags.
    PROGRAM: {
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
    }
};