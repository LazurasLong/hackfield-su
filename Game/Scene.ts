/** 
 *  @author Zoltán Schmidt <zol.sch93@gmail.com>
 */
namespace Game 
{
    /**
     * Customizable summary of every game logic; most importantly the processes of preload, create, update and many more.
     */
    export class Scene extends Phaser.Scene
    {
        protected _preload = new Game.DefaultScene.Preload(this);
        protected _create = new Game.DefaultScene.Create(this);
        protected _update = new Game.DefaultScene.Update(this);

        public preload(): void
        {
            Container.player = new Game.Player();

            this._preload.createTimer();
            this._preload.loadPictures();
            console.log('preload done');
        }

        public create(): void
        {
            this._create.demoTilemap();
            this._create.buildMenu();
            this._create.legacyBallMove();

            Container.texts['debug'] = this.add.text(0, 0, Container.player.X.toString());
            Container.texts['ex'] = this.add.text(128, 128, 'X');
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