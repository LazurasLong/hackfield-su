/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Scene
{
    /**
     * 
     */
    export class Menu extends Phaser.Scene
    {
        protected _init = new Resource.Initializer(this)
        
        public preload(): void 
        {
            this._init.loadPictures();
        }

        public create(): void 
        {
            this.buildContent();

        }

        // potentially unnecessary but I leave it here anyways
        public update(): void {}

        public buildContent(): void {

            let defaultStyle: TextStyle = {
                fontFamily: 'slkscre',
                fontSize: 16,
                color: '#eee'
            };

            let ball: Phaser.GameObjects.Sprite = this.add.sprite(0, 0, 'k-ball');
            let logo: Phaser.GameObjects.Sprite = this.add.sprite(0, 0, 'logo');

            ball.setPosition(ball.width/2, ball.height/2);
            logo.setPosition(ball.width + logo.width/2, 64)

            this.add.text(
                ball.width,
                0,
                Constant.UiText.Tag.DEMO,
                Config.Printer.defaultStyle
            );

            // todo: formatting
            this.add.text(
                16, Constant.Setting.GAME_HEIGHT/3,
                "> rmn ~umbala~hackfield \n\n\n\n" +
                "-------------------------------------------\n" +
                "\"hackfield\" - Initializes the core module.\n\n" +
                "Switches: \n\n" +
                "-su \t -- story mode\n\n" +
                "-exe \t -- classic mode\n\n" +
                "Commands: \n\n" +
                "init \t -- campaign selector\n\n" +
                "config \t -- options\n\n" + 
                "-------------------------------------------\n" +
                "> |",
                Config.Printer.defaultStyle)

            let spylog = this.add.text(0, 0, 
                Constant.UiText.Tag.MENU_SPY, 
                {
                    fontFamily: 'slkscre',
                    fontSize: 14,
                    color: '#33bed6'
                });

            spylog.setPosition(
                Constant.Setting.GAME_WIDTH - spylog.width - 8, 
                Constant.Setting.GAME_HEIGHT - spylog.height - 8);

        }
    }
}