/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Constant.UiText
{
    /**
     * Various tags appearing all around the game menus.
     */
    export class Tag
    {

        protected static _umbalaChannel: string     = Config.Printer.createLinkText('>umbala>hackfield>daily', 'newspaper', 1);

        protected static _surveillanceApi: string   = Config.Printer.createLinkText('', 'API', 0); 

        public static DEMO: string                  = 'Welcome to \n\n\n\n\n\n\n' +
                                                    'Press any key to return to the UI!\n' +
                                                    '(Doesn\'t work yet, sorry; the whole thing is super ' +
                                                    'pre-alpha.)'

        public static NO_NEW: string                = 'No new articles since you are logged in.'
        public static MORE_AT: string               = `More articles: ${Tag._umbalaChannel}`

        public static MENU_SPY: string              = ' Maasren, Anthburt | MT:02:33, IC:2036:05:21 |' +
                                                    ` data via ${Tag._surveillanceApi}`
    }
}