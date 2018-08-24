/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Scene.Demo
{
    /**
     * Customizable summary of every game logic; most importantly the processes of preload, create, update and many more.
     */
    export class Process extends Phaser.Scene
    {
        protected _preload = new Scene.Demo.Preload(this);
        protected _create = new Scene.Demo.Create(this);
        protected _update = new Scene.Demo.Update(this);

        public preload(): void
        {
            this._preload.createTimer();
            
            let initializer = new Resource.Initializer(this);
            
            initializer.loadPictures();
        }

        public create(): void
        {
            this._create.demoTilemap().buildMenu();

            Container.player = new Game.Player(this.add.image(0, 0, 'player'));

            Container.texts['debug'] = this.add.text(0, 0, Container.player.X.toString());
            Container.texts['ex'] = this.add.text(128, 128, 'X');

            // input
            let keyboard = new Control.Keyboard(this);

            keyboard.registerEventDemo();
        }

        public update(): void
        {
            this._update.context = this;
            this._update.refreshData();
            // don't even try console.log()-ing here...
        }

        custom: Object = {
            setDefault(): void
            {
                let gameOptions: Object = {
                    activeMenu: 0,          // main menu
                    activeSequence: -1      // none
                };

                this.options = gameOptions;
            }
        }
    }
}