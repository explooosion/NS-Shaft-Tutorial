var game = new Phaser.Game(400, 400, Phaser.AUTO, '',
    { preload: preload, create: create, update: update });

var player;
var keyboard;

function preload () {

    game.load.baseURL = 'https://wacamoto.github.io/NS-Shaft-Tutorial/assets/';
    game.load.crossOrigin = 'anonymous';
    game.load.spritesheet('player', 'player.png', 32, 32);
    game.load.image('wall', 'wall.png');
    game.load.image('ceiling', 'ceiling.png');
    game.load.image('normal', 'normal.png');
    game.load.image('nails', 'nails.png');
    game.load.spritesheet('conveyorRight', 'conveyor_right.png', 96, 16);
    game.load.spritesheet('conveyorLeft', 'conveyor_left.png', 96, 16);
    game.load.spritesheet('trampoline', 'trampoline.png', 96, 22);
    game.load.spritesheet('fake', 'fake.png', 96, 36);
}

function create () {
    player = game.add.sprite(200, 200, 'player');
    game.physics.arcade.enable(player);

    keyboard = game.input.keyboard.addKeys({
        'up': Phaser.Keyboard.UP,
        'down': Phaser.Keyboard.DOWN,
        'left': Phaser.Keyboard.LEFT,
        'right': Phaser.Keyboard.RIGHT
    });
}

function update () {

    if (keyboard.left.isDown) {
        player.body.velocity.x = -200;
    }
    else if (keyboard.right.isDown) {
        player.body.velocity.x = 200;
    } else {
        player.body.velocity.x = 0;
    }
    if (keyboard.up.isDown) {
        player.body.velocity.y = -200;
    }
    else if (keyboard.down.isDown) {
        player.body.velocity.y = 200;
    } else {
        player.body.velocity.y = 0;
    }
}
