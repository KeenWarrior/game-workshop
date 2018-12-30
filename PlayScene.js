class PlayScene extends Phaser.Scene{

    constructor(){
        super({
            key : "play",
            physics : {
                system : "impact",
                gravity : 100
            }
        });
    }

    preload(){
        this.load.image("tile_image", "assets/jungle tileset.png");
        this.load.tilemapTiledJSON("map", "assets/game_map.json");
        this.load.spritesheet('run_sheet', 'assets/run.png', {frameWidth : 21, frameHeight : 33});

    }

    create(){
        
        this.player = this.physics.add.sprite(100, 100, 'run_sheet');

        var map = this.add.tilemap("map");

        var tileset = map.addTilesetImage("jungle_tiles", "tile_image");

        var layer = map.createStaticLayer("main", tileset);

        var items = map.createFromObjects("items", 10, {}, this);

        console.log(items);

        
    }
}