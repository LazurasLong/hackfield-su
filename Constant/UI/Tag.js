import Printer from '../../Config/Printer.js';

const umbalaChannel = Printer.createLinkText('>umbala>hackfield>daily', 'newspaper', 1);
const surveillanceApi = Printer.createLinkText('', 'API', 0);

/*
 *  Various tags appearing all around the game menus.
 */
export default {
    'DEMO':     'Welcome to \n\n\n\n\n\n\n' +
                'Press any key to return to the UI!\n' +
                '(Doesn\'t work yet, sorry; the whole thing is super ' +
                'pre-alpha.)',

    'NO_NEW':   'No new articles since you are logged in.',
    'MORE_AT':  `More articles: ${umbalaChannel}`,

    'MENU_SPY': ' Maasren, Anthburt | MT:02:33, IC:2036:05:21 |' +
                ` data via ${surveillanceApi}`
}