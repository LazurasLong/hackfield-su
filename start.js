"use strict";
class Container {
}
Container.images = [];
Container.texts = [];
Container.timers = [];
window.onload = () => {
    let config = new Config.Default();
    let defaultScene = new Game.Scene(config.data);
    config.setScene(defaultScene);
    let game = new Phaser.Game(config.data);
};
var Abstract;
(function (Abstract) {
    class ContextAware {
        constructor(gameScene) {
            this.context = gameScene;
            return this;
        }
    }
    Abstract.ContextAware = ContextAware;
})(Abstract || (Abstract = {}));
var Config;
(function (Config) {
    class Default {
        constructor() {
            this.data = {
                type: Phaser.CANVAS,
                width: Constant.Setting.GAME_WIDTH,
                height: Constant.Setting.GAME_HEIGHT,
                title: 'hackfield -su',
                url: 'https://katamori.github.io/hackfield-su',
                version: '0.0.0.1',
                "render.antialias": false,
                "render.pixelArt": true,
                "render.roundPixels": true,
                "render.powerPreference": "low-power"
            };
        }
        setScene(newScene) {
            this.data.scene = newScene;
            return this;
        }
    }
    Default.imageData = {
        'logo': './Gfx/Legacy/LOGOFINAL.png',
        'k-ball': './Gfx/Legacy/KATAMORI.png',
        'oldtiles': './Gfx/Legacy/TILESET.png'
    };
    Config.Default = Default;
})(Config || (Config = {}));
var Config;
(function (Config) {
    class Printer {
        static createLinkText(path, ContentType, gatewayType) {
            let url = Constant.UI.URL;
            let protocol = url.protocols[ContentType];
            let gate;
            switch (gatewayType) {
                case 1:
                    gate = url.gates[gatewayType] + Phaser.Math.Between(0, 9);
                    break;
                default:
                    gate = url.gates[gatewayType];
                    break;
            }
            return `DFT{${gate}}::_${protocol}>${path}`;
        }
    }
    Printer.defaultStyle = {
        fontFamily: 'slkscre',
        fontSize: 16,
        color: '#eee'
    };
    Config.Printer = Printer;
})(Config || (Config = {}));
var Constant;
(function (Constant) {
    class News {
    }
    News.HEADLINES = {
        'randomizable': [
            '{int} more people killed during street fights in {str}',
            'Former {str} president {str} has been assassinated',
        ],
        'plot': {}
    };
    Constant.News = News;
})(Constant || (Constant = {}));
var Constant;
(function (Constant) {
    class Setting {
    }
    Setting.GAME_WIDTH = 1024;
    Setting.GAME_HEIGHT = 600;
    Setting.PHYSICS = {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 200
            }
        }
    };
    Constant.Setting = Setting;
})(Constant || (Constant = {}));
var Constant;
(function (Constant) {
    class UI {
    }
    UI.URL = {
        'protocols': {
            'regular': 's',
            'API': 'api',
            'newspaper': 'npe'
        },
        'gates': [
            'globalnode',
            'gate'
        ]
    };
    UI.PROGRAM = {
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
            'INIT': '-- initializing {str}.{str} --',
            'EXIT': '-- closing {str}.{str} --'
        }
    };
    Constant.UI = UI;
})(Constant || (Constant = {}));
var Constant;
(function (Constant) {
    class World {
    }
    World.COUNTRIES = [
        'Akh',
        'Anthburt',
        'Asamazu',
        'The Archipelago',
        'Commonwealth Island',
        'Enthos',
        'Esmos',
        'Essge',
        'The Federacy',
        'Goski',
        'Ildeben',
        'Jabidua',
        'Jikul',
        'Kengda',
        'Kounzen',
        'Lemda',
        'Mreni',
        'Oerke',
        'Ormia',
        'Pereis',
        'Ponqa',
        'Ponten',
        'Skania',
        'Ytbo'
    ];
    Constant.World = World;
})(Constant || (Constant = {}));
var Constant;
(function (Constant) {
    var UiText;
    (function (UiText) {
        class Tag {
        }
        Tag._umbalaChannel = Config.Printer.createLinkText('>umbala>hackfield>daily', 'newspaper', 1);
        Tag._surveillanceApi = Config.Printer.createLinkText('', 'API', 0);
        Tag.DEMO = 'Welcome to \n\n\n\n\n\n\n' +
            'Press any key to return to the UI!\n' +
            '(Doesn\'t work yet, sorry; the whole thing is super ' +
            'pre-alpha.)';
        Tag.NO_NEW = 'No new articles since you are logged in.';
        Tag.MORE_AT = `More articles: ${Tag._umbalaChannel}`;
        Tag.MENU_SPY = ' Maasren, Anthburt | MT:02:33, IC:2036:05:21 |' +
            ` data via ${Tag._surveillanceApi}`;
        UiText.Tag = Tag;
    })(UiText = Constant.UiText || (Constant.UiText = {}));
})(Constant || (Constant = {}));
var Control;
(function (Control) {
    class Keyboard extends Abstract.ContextAware {
        registerEventDemo() {
            const keyboard = this.context.input.keyboard;
            let cursors = keyboard.createCursorKeys();
            let player = Container.player;
            let zoom = 1;
            this.context.cameras.main.setZoom(zoom);
            keyboard.on('keydown', (event) => {
                switch (event.key) {
                    case 'w':
                        player.Y = player.Y - 1;
                        break;
                    case 'a':
                        player.X = player.X - 1;
                        break;
                    case 's':
                        player.Y = player.Y + 1;
                        break;
                    case 'd':
                        player.X = player.X + 1;
                        break;
                    case 'q':
                        zoom = zoom / 1.5;
                        this.context.cameras.main.setZoom(zoom);
                        break;
                    case 'e':
                        zoom = zoom * 1.5;
                        this.context.cameras.main.setZoom(zoom);
                        break;
                    default:
                        break;
                }
            });
        }
    }
    Control.Keyboard = Keyboard;
})(Control || (Control = {}));
var Game;
(function (Game) {
    class Player {
        constructor() {
            this.X = 0;
            this.Y = 0;
        }
    }
    Game.Player = Player;
})(Game || (Game = {}));
var Game;
(function (Game) {
    class Scene extends Phaser.Scene {
        constructor() {
            super(...arguments);
            this._preload = new Game.DefaultScene.Preload(this);
            this._create = new Game.DefaultScene.Create(this);
            this._update = new Game.DefaultScene.Update(this);
            this.custom = {
                setDefault() {
                    let gameOptions = {
                        activeMenu: 0,
                        activeSequence: -1
                    };
                    this.options = gameOptions;
                }
            };
        }
        preload() {
            Container.player = new Game.Player();
            this._preload.createTimer();
            this._preload.loadPictures();
            console.log('preload done');
        }
        create() {
            this._create.demoTilemap();
            this._create.buildMenu();
            this._create.legacyBallMove();
            Container.texts['debug'] = this.add.text(0, 0, Container.player.X.toString());
            Container.texts['ex'] = this.add.text(128, 128, 'X');
        }
        update() {
            this._update.context = this;
            this._update.refreshData();
        }
    }
    Game.Scene = Scene;
})(Game || (Game = {}));
var Game;
(function (Game) {
    var DefaultScene;
    (function (DefaultScene) {
        class Create extends Abstract.ContextAware {
            demoTilemap() {
                this.context.cameras.main.setBounds(0, 0, 100000, 100000);
                var level = [];
                var x = Constant.Setting.GAME_WIDTH / 2 / 32;
                var y = Constant.Setting.GAME_HEIGHT / 2 / 32;
                for (var i = 0; i < y; i++) {
                    level[i] = [];
                    for (var j = 0; j < x; j++) {
                        level[i][j] = i == 0 || j == 0 || i == y - 1 || j == x - 1 ? 1 : 0;
                    }
                }
                var map = this.context.make.tilemap({
                    data: level, tileWidth: 32, tileHeight: 32
                });
                var tiles = map.addTilesetImage('oldtiles');
                var layer = map.createStaticLayer(0, tiles, Constant.Setting.GAME_WIDTH / 2, 0);
                this.context.cameras.main.setZoom(1);
            }
            legacyBallMove() {
                Container.images['logo'] = this.context.add.image(400, 100, 'k-ball');
            }
            buildMenu() {
                var defaultStyle = {
                    fontFamily: 'slkscre',
                    fontSize: 16,
                    color: '#eee'
                };
                this.context.add.sprite(Constant.Setting.GAME_WIDTH / 3, Constant.Setting.GAME_HEIGHT / 2, 'logo');
                this.context.add.text((Constant.Setting.GAME_WIDTH / 3) - 272, (Constant.Setting.GAME_HEIGHT / 2) - 64, Constant.UiText.Tag.DEMO, Config.Printer.defaultStyle);
                this.context.add.text(0, Constant.Setting.GAME_HEIGHT - 24, Constant.UiText.Tag.MENU_SPY, Config.Printer.defaultStyle);
                let keyboard = new Control.Keyboard(this.context);
                keyboard.registerEventDemo();
            }
        }
        DefaultScene.Create = Create;
    })(DefaultScene = Game.DefaultScene || (Game.DefaultScene = {}));
})(Game || (Game = {}));
var Game;
(function (Game) {
    var DefaultScene;
    (function (DefaultScene) {
        class Preload extends Abstract.ContextAware {
            createTimer() {
                Container.timers['timer'] = this.context.time.addEvent({ delay: 10000, loop: true });
            }
            loadPictures() {
                for (var k in Config.Default.imageData) {
                    if (Config.Default.imageData.hasOwnProperty(k)) {
                        this.context.load.image(k, Config.Default.imageData[k]);
                    }
                }
            }
        }
        DefaultScene.Preload = Preload;
    })(DefaultScene = Game.DefaultScene || (Game.DefaultScene = {}));
})(Game || (Game = {}));
var Game;
(function (Game) {
    var DefaultScene;
    (function (DefaultScene) {
        class Update extends Abstract.ContextAware {
            refreshData() {
                let logo = Container.images['logo'];
                let player = Container.player;
                let timerString = Number(Container.timers['timer'].getProgress() * 10).toString().substr(0, 3);
                Container.texts['debug'].setText("Player.X \t" + player.X +
                    "\nPlayer.Y \t" + player.Y +
                    "\nTimer \t" + timerString);
                logo.x = 512 + (player.X * 32);
                logo.y = 0 + (player.Y * 32);
            }
        }
        DefaultScene.Update = Update;
    })(DefaultScene = Game.DefaultScene || (Game.DefaultScene = {}));
})(Game || (Game = {}));
//# sourceMappingURL=start.js.map