var game = new Phaser.Game(400, 400, Phaser.AUTO, '',
    { preload: preload, create: create, update: update });

var player;
var keyboard;

function preload () {

    game.load.spritesheet('player', '../assets/player.png', 32, 32);
    game.load.image('wall', '../assets/wall.png');
    game.load.image('ceiling', '../assets/ceiling.png');
    game.load.image('normal', '../assets/normal.png');
    game.load.image('nails', '../assets/nails.png');
    game.load.spritesheet('conveyorRight', '../assets/conveyor_right.png', 96, 16);
    game.load.spritesheet('conveyorLeft', '../assets/conveyor_left.png', 96, 16);
    game.load.spritesheet('trampoline', '../assets/trampoline.png', 96, 22);
    game.load.spritesheet('fake', '../assets/fake.png', 96, 36);
}

function create () {
    player = game.add.sprite(200, 200, 'player');
    game.physics.arcade.enable(player);
    player.animations.add('left', [0, 1, 2, 3], 6);
    player.animations.add('right', [9, 10, 11, 12], 6);

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
        player.animations.play('left');
    }
    else if (keyboard.right.isDown) {
        player.body.velocity.x = 200;
        player.animations.play('right');
    } else {
        player.body.velocity.x = 0;
    }
}
