namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Flies = SpriteKind.create()
    export const Climb = SpriteKind.create()
    export const ClimbRight = SpriteKind.create()
    export const ClimbFire = SpriteKind.create()
    export const ClimbLeft = SpriteKind.create()
    export const Fire = SpriteKind.create()
    export const Orb = SpriteKind.create()
    export const Burn = SpriteKind.create()
    export const Heart = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const ClimbCenter = SpriteKind.create()
    export const Trap = SpriteKind.create()
    export const Boulder = SpriteKind.create()
    export const Block = SpriteKind.create()
    export const RockFire = SpriteKind.create()
    export const Tree = SpriteKind.create()
    export const TreeFire = SpriteKind.create()
    export const TreeDefault = SpriteKind.create()
    export const BoomBump = SpriteKind.create()
    export const Pet = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Boss1 = SpriteKind.create()
    export const FireMain = SpriteKind.create()
    export const BossFire = SpriteKind.create()
    export const RockDrop = SpriteKind.create()
    export const OrbTime = SpriteKind.create()
    export const OrbRevive = SpriteKind.create()
    export const Boss2 = SpriteKind.create()
    export const Boss3 = SpriteKind.create()
    export const Boss2Fire = SpriteKind.create()
    export const Boss3Fire = SpriteKind.create()
}
namespace StatusBarKind {
    export const BossHealth = StatusBarKind.create()
}
function MoveGroundEnemy () {
    for (let GEnemy of sprites.allOfKind(SpriteKind.Bumper)) {
        if (GEnemy.isHittingTile(CollisionDirection.Left)) {
            GEnemy.vx = randint(30, 60)
            GEnemy.setImage(assets.image`myImage`)
        } else if (GEnemy.isHittingTile(CollisionDirection.Right)) {
            GEnemy.vx = randint(-60, -30)
            GEnemy.setImage(assets.image`myImage1`)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        if (COUNT % 2 != 0) {
            otherSprite.destroy(effects.spray, 200)
            otherSprite.vy = -50
            sprite.vy = -2 * pixelToMeter
            info.changeScoreBy(5)
            music.powerUp.play()
        } else {
            statusbar.value += -3
            music.powerDown.play()
        }
    } else {
        statusbar.value += -3
        music.powerDown.play()
    }
    EndGame()
})
function Infomation (text: string) {
    Name = blockSettings.readString("Name")
    NameShiphu = blockSettings.readString("Name1")
    story.spriteSayText(mySprite, "Did you read the story or not?")
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        story.printCharacterText("Where is this? Why did I wake up here?", Name)
        story.printCharacterText("This is my house", NameShiphu)
        story.printCharacterText("Who's talking?", Name)
        story.printCharacterText("It's me, your teacher", NameShiphu)
        story.printCharacterText("Are you a teacher, are you a teacher? Why did you become like this?", Name)
        story.printCharacterText("I've been sleeping for 10 years. Ten years ago the three tribes joined forces to attack your tribe. Because of the surprise, my parents have died, the receiving clans have also been chased and killed for 10 years now. I was mortally wounded by the three tribes and escaped with you in my arms. I used everything that was left of me to keep you as controllable and resilient as you are today.", NameShiphu)
        story.printCharacterText("Teacher, I want to revive you, I want to avenge my tribesman and my parents", Name)
        story.printCharacterText("But I'm too weak right now, I'm just going to give them my life", NameShiphu)
        story.printCharacterText("But teacher...", Name)
        story.printCharacterText("All right, I'll help you this time. I hope you can avenge your parents and tribesman and revive me", NameShiphu)
        story.printCharacterText("I will try...", Name)
        game.splash("GAME ON ")
    } else {
        story.clearAllText()
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        if (COUNT % 2 == 0) {
            mySprite.vy = -110
        } else {
            mySprite.vy = -160
        }
    }
    music.thump.play()
})
function CreatClimbEnemy () {
    for (let CEnemyLeft of tiles.getTilesByType(assets.tile`myTile16`)) {
        CLeft = true
        ClimbEnemyLeft = sprites.create(assets.image`myImage8`, SpriteKind.ClimbLeft)
        tiles.placeOnTile(ClimbEnemyLeft, CEnemyLeft)
        tiles.setTileAt(CEnemyLeft, assets.tile`transparency16`)
    }
    for (let CEnemyRight of tiles.getTilesByType(assets.tile`myTile24`)) {
        CRight = true
        ClimbEnemyRight = sprites.create(assets.image`myImage33`, SpriteKind.ClimbRight)
        tiles.placeOnTile(ClimbEnemyRight, CEnemyRight)
        tiles.setTileAt(CEnemyRight, assets.tile`transparency16`)
    }
    for (let CenemyCenter of tiles.getTilesByType(assets.tile`myTile23`)) {
        Ccenter = true
        ClimbEnemyCenter = sprites.create(assets.image`myImage4`, SpriteKind.Climb)
        tiles.placeOnTile(ClimbEnemyCenter, CenemyCenter)
        tiles.setTileAt(CenemyCenter, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flies, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        if (COUNT % 2 != 0) {
            otherSprite.destroy(effects.spray, 200)
            otherSprite.vy = -50
            sprite.vy = -2 * pixelToMeter
            info.changeScoreBy(7)
            music.powerUp.play()
        } else {
            statusbar.value += -3
            music.powerDown.play()
        }
    } else {
        statusbar.value += -3
        music.powerDown.play()
    }
    EndGame()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile65`, function (sprite, location) {
    game.showLongText("This is my wisdom. This tribe has already finished painting. Go and search for a teleportation battle so that you can leave this place and go to the deep sea of the other two tribes", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.OrbRevive, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(100)
    music.magicWand.play()
})
function CreateBoss2 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile50`)) {
        Boss2 = sprites.create(img`
            . . . . . f c c c c f . . . . . 
            . . c c f b b 3 3 b b f c c . . 
            . c b 3 3 b b c c b b 3 3 b c . 
            . f 3 c c c b c c b c c c 3 f . 
            f c b b c c b c c b c c b b c f 
            c 3 c c b c c c c c c b c c 3 c 
            c 3 c c c c c c c c c c c c 3 c 
            . f b b c c c c c c c c b b f . 
            . . f b b c 8 9 9 8 c b b f . . 
            . . c c c f 9 3 1 9 f c c c . . 
            . c 3 f f f 9 3 3 9 f f f 3 c . 
            c 3 f f f f 8 9 9 8 f f f f 3 c 
            f 3 c c f f f f f f f f c c 3 f 
            f b 3 c b b f b b f b b c 3 b f 
            . c b b 3 3 b 3 3 b 3 3 b b c . 
            . . f f f f f f f f f f f f . . 
            `, SpriteKind.Boss2)
        tiles.placeOnTile(Boss2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        Boss2.changeScale(1.3, ScaleAnchor.Middle)
        Boss2Status = statusbars.create(20, 4, StatusBarKind.BossHealth)
        Boss2Status.value = 1000
        Boss2Status.attachToSprite(Boss2, 5, 5)
        Boss2Fight = true
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.jumpUp.play()
})
function Play () {
    Icon.destroy()
    Icon2.destroy()
    textSprite.destroy()
    startLevel()
    creatPlayer()
    pixelToMeter = 30
    gravity = 9.81 * pixelToMeter
    mySprite.ay = 350
    info.setScore(0)
    info.setLife(5)
    CreatEnemyGame()
    Infomation("abc")
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile58`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile58`)
    TrapDown = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f . . . f f . . . f . . . 
        . . . f . . f f f f . . f . . . 
        . . . f . . f b b f . . f . . . 
        . . f f f . f b b f . f f f . . 
        . . f b f . f d 1 f . f d f . . 
        . . f b f d f 1 d f . f d f . . 
        . 1 f b f d c d d d f f d f 1 . 
        . f d d d f b d d c f d b b f . 
        . f c d d f b d d c f c d d f 1 
        1 f d d d f b d d d f b d d f d 
        f c b d b f c d d c f c b d c f 
        f c b d b f c d d c b c b d c f 
        `, SpriteKind.Trap)
    animation.runImageAnimation(
    TrapDown,
    assets.animation`TrapDown`,
    50,
    false
    )
    tiles.placeOnTile(TrapDown, location)
    TrapDown.lifespan = 450
    statusbar.value += -5
    sprite.vy = 3 * pixelToMeter
    music.jumpDown.play()
    EndGame()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0) {
        ChangeForm()
        music.beamUp.play()
    }
})
function CreatFlyEnemy () {
    for (let FEnemy of tiles.getTilesByType(assets.tile`myTile19`)) {
        FlyEnemy = sprites.create(assets.image`FlyEnemey`, SpriteKind.Flies)
        tiles.placeOnTile(FlyEnemy, FEnemy)
        FlyEnemy.setFlag(SpriteFlag.GhostThroughWalls, false)
        tiles.setTileAt(FEnemy, assets.tile`transparency16`)
        animation.runImageAnimation(
        FlyEnemy,
        assets.animation`myAnim3`,
        50,
        true
        )
    }
}
function CreatePet () {
    for (let value of tiles.getTilesByType(assets.tile`myTile40`)) {
        SuPho = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . b b 1 1 1 1 b b . . . . 
            . . . . b 1 1 1 3 3 1 b . . . . 
            . . . b 1 1 1 1 3 3 3 1 b . . . 
            . . . b 1 1 3 1 1 3 3 1 b . . . 
            . . b d 1 1 1 1 1 1 1 1 d b . . 
            . . b d 3 3 1 1 1 1 1 1 d b . . 
            . . b b 3 3 1 1 1 1 3 3 d b . . 
            . . c b b d 1 1 1 3 3 b d c . . 
            . . c d d d d d d b b b d c . . 
            . . c b d d b b d b b d b c . . 
            . . . c d d b b d d d d c . . . 
            . . . . c b d d d d b c . . . . 
            . . . . . c c c c c c . . . . . 
            `, SpriteKind.Pet)
        tiles.placeOnTile(SuPho, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        blockSettings.writeString("Name1", "ShiPhu")
        SuPho.changeScale(-0.25, ScaleAnchor.Middle)
        SuPho.follow(mySprite, 50)
        SuPho.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
}
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow9, function (sprite, location) {
    game.showLongText("Press the right arrow to move right", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile63`, function (sprite, location) {
    game.showLongText("Stand still and press E to make it smaller, press again to return to original size", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Burn, function (sprite, otherSprite) {
    statusbar.value += -0.5
    music.jumpDown.play()
    EndGame()
})
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.vy = -5 * pixelToMeter
    statusbar.value += -4
    music.jumpDown.play()
    EndGame()
})
sprites.onOverlap(SpriteKind.ClimbRight, SpriteKind.FireMain, function (sprite, otherSprite) {
    Fire.destroy(effects.fire, 0)
    sprite.destroy()
    CRight = false
    music.powerUp.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite3, location) {
    Level += 1
    music.jumpUp.play()
    startLevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite3, location) {
    Level += 1
    music.jumpUp.play()
    startLevel()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (COUNT % 2 == 0) {
        if (character.matchesRule(mySprite, character.rule(Predicate.MovingLeft))) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ..........ccc...........
                .........cccc...........
                .....ccccccc..ccc.......
                ...cc555555cccccc.......
                ..c5555555555bcc........
                .c555555555555b..cc.....
                c555555ccb55555bccc.....
                c55d55c555555555bc......
                c5555555555555555b......
                .cbbb1bb5555dd555b.cc...
                .c533bbbb5ddddd55dcc....
                .c533bbbb5ddddddddbcc...
                .c533bbb55dddddddddcccc.
                .c5333bb5bb55bdddddcccdc
                .c5333b5bb555bddddddbddc
                .c53335b5555bddddddddddc
                ..c5555c55bb55dbddddddcc
                ...cccbccc55ddbbbddddcc.
                ....cdddccddddbcbbbcc...
                ....cccccd555ddcccc.....
                ........cccccccc........
                `)
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 3 1 1 . . . . . . . 
                . . . . . 3 3 . 3 1 . . . . . . 
                . . 3 2 2 3 . . . 1 . . . . . . 
                . 3 3 1 2 2 . . . 3 1 . . . . . 
                . 3 1 1 1 3 2 2 . 3 1 . . . . . 
                . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
                . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
                . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
                . 3 1 1 1 3 2 2 . 3 1 . . . . . 
                . 3 3 1 2 2 . . . 3 1 . . . . . 
                . . 3 2 2 3 . . . 1 . . . . . . 
                . . . . . 3 3 . 3 1 . . . . . . 
                . . . . . . 3 1 1 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -64, 0)
            Fire.setKind(SpriteKind.FireMain)
            music.playMelody("C D E F G A B C5 ", 2000)
        }
        if (character.matchesRule(mySprite, character.rule(Predicate.MovingRight))) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ...........ccc..........
                ...........cccc.........
                .......ccc..ccccccc.....
                .......cccccc555555cc...
                ........ccb5555555555c..
                .....cc..b555555555555c.
                .....cccb55555bcc555555c
                ......cb555555555c55d55c
                ......b5555555555555555c
                ...cc.b555dd5555bb1bbbc.
                ....ccd55ddddd5bbbb335c.
                ...ccbdddddddd5bbbb335c.
                .ccccddddddddd55bbb335c.
                cdcccdddddb55bb5bb3335c.
                cddbddddddb555bb5b3335c.
                cddddddddddb5555b53335c.
                ccddddddbd55bb55c5555c..
                .ccddddbbbdd55cccbccc...
                ...ccbbbcbddddccdddc....
                .....ccccdd555dccccc....
                ........cccccccc........
                `)
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 1 3 . . . . . . 
                . . . . . . 1 3 . 3 3 . . . . . 
                . . . . . . 1 . . . 3 2 2 3 . . 
                . . . . . 1 3 . . . 2 2 1 3 3 . 
                . . . . . 1 3 . 2 2 3 1 1 1 3 . 
                . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
                . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
                . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
                . . . . . 1 3 . 2 2 3 1 1 1 3 . 
                . . . . . 1 3 . . . 2 2 1 3 3 . 
                . . . . . . 1 . . . 3 2 2 3 . . 
                . . . . . . 1 3 . 3 3 . . . . . 
                . . . . . . . 1 1 3 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 64, 0)
            Fire.setKind(SpriteKind.FireMain)
            music.playMelody("C D E F G A B C5 ", 2000)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow8, function (sprite, location) {
    game.showLongText("Press the up arrow to jump up", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function CreateBoss3 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile46`)) {
        Boss3 = sprites.create(assets.image`myImage16`, SpriteKind.Boss3)
        animation.runImageAnimation(
        Boss3,
        [img`
            .................ccfff..............
            ................cddbbf..............
            ...............cddbbf...............
            ..............fccbbcf............ccc
            ........ffffffccccccff.........ccbbc
            ......ffbbbbbbbbbbbbbcfff.....cdbbc.
            ....ffbbbbbbbbbcbcbbbbcccff..cddbbf.
            ....fbcbbbbbffbbcbcbbbcccccfffdbbf..
            ....fbbb1111ff1bcbcbbbcccccccbbbcf..
            .....fb11111111bbbbbbcccccccccbccf..
            ......fccc33cc11bbbbccccccccfffbbcf.
            .......fc131c111bbbcccccbdbc...fbbf.
            ........f33c111cbbbfdddddcc.....fbbf
            .........ff1111fbdbbfddcc........fff
            ...........cccccfbdbbfc.............
            .................fffff..............
            `,img`
            .................ccfff..............
            ................cddbbf..............
            ...............cddbbf...............
            .........ffffffccbbcf...............
            ......fffbbbbbbbbcccff..............
            .....fbbbbbbbbbbbbbbbcfff......ccccc
            .....bcbbbbbffbcbcbbbbcccff...cdbbbc
            .....bbb1111ffbbcbcbbbcccccffcddbbc.
            .....fb11111111bcbcbbbcccccccbdbbf..
            ......fccc33c11bbbbbbcccccccccbbcf..
            .......fc131cc11bbbbccccccccffbccf..
            ........f33c1111bbbcccccbdbc..fbbcf.
            .........ff1111cbbbfdddddcc....fbbf.
            ...........ccc1fbdbbfddcc.......fbbf
            ..............ccfbdbbfc..........fff
            .................fffff..............
            `,img`
            ..................ccfff.............
            .................cddbbf.............
            ........fffffffffddbbf..............
            .......fbbbbbbbbbfcbcf..............
            .......fbbc111bffbbccffff...........
            .......fb111111ffbbbbbcccff....ccccc
            ........f1cc3311bbcbcbbccccf..cdbbbc
            ........fcc131c1bbbcbcbcccccfcddbbc.
            .........f111111bbbcbcbccccccbdbbf..
            .........f1111111bbbbbccccccccbbcf..
            ..........f111111bbbbcccccccffbccf..
            ...........c1111cbbbcccccbdbc.fbbcf.
            ............cc11cbbbfddddddc...fbbf.
            ..............cffbdbbfdddcc.....fbbf
            .................fbdbbfcc........fff
            ..................fffff.............
            `,img`
            ....................ccfff...........
            ..........fffffffffcbbbbf...........
            .........fbbbbbbbbbfffbf............
            .........fbb111bffbbbbff............
            .........fb11111ffbbbbbcff..........
            .........f1cccc11bbcbcbcccf.........
            ..........fc1c1c1bbbcbcbcccf...ccccc
            ............c3331bbbcbcbccccfccddbbc
            ...........c333c1bbbbbbbcccccbddbcc.
            ...........c331c11bbbbbcccccccbbcc..
            ..........cc13c111bbbbccccccffbccf..
            ..........c111111cbbbcccccbbc.fccf..
            ...........cc1111cbbbfdddddc..fbbcf.
            .............cccffbdbbfdddc....fbbf.
            ..................fbdbbfcc......fbbf
            ...................fffff.........fff
            `,img`
            ...........fffffff...ccfff..........
            ..........fbbbbbbbffcbbbbf..........
            ..........fbb111bbbbbffbf...........
            ..........fb11111ffbbbbff...........
            ..........f1cccc1ffbbbbbcff.........
            ..........ffc1c1c1bbcbcbcccf........
            ...........fcc3331bbbcbcbcccf..ccccc
            ............c333c1bbbcbcbccccfcddbbc
            ............c333c1bbbbbbbcccccddbcc.
            ............c333c11bbbbbccccccbbcc..
            ...........cc331c11bbbbccccccfbccf..
            ...........cc13c11cbbbcccccbbcfccf..
            ...........c111111cbbbfdddddc.fbbcf.
            ............cc1111fbdbbfdddc...fbbf.
            ..............cccfffbdbbfcc.....fbbf
            ....................fffff........fff
            `,img`
            ....................................
            ....................................
            ....................................
            ...............ccffff...............
            ..............cddbbbf...............
            .......ffffffcddbbbf................
            .....ffbbbbbbbbbbbbbcfff.......ccccc
            ...ffbbbbbbbbcbcbbbbbcccff....cdbbbc
            ..fbbbbbbbbbbcbbcbbbbcccccfffcddbbc.
            .fbcbbbbbbbbbbcbcbbbbccccccccbdbbf..
            .fbbbbbbbfffbbcbbbbbccccccccccbbcf..
            .ffbb1111fffbbcbbbbcccccccbcffbccf..
            ..ff111111111bbbbccccccbbbcc..fbbcf.
            ....ccccccc111bdbbbfddbccc.....ffbbf
            ........ccccccfbdbbbfcc..........fff
            ...............ffffff...............
            `],
        120,
        true
        )
        tiles.placeOnTile(Boss3, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        Boss3.changeScale(1, ScaleAnchor.Middle)
        Boss3Status = statusbars.create(20, 4, StatusBarKind.BossHealth)
        Boss3Status.value = 1000
        Boss3Status.attachToSprite(Boss3, 5, 5)
        Boss3Fight = true
    }
}
sprites.onOverlap(SpriteKind.Flies, SpriteKind.FireMain, function (sprite4, otherSprite3) {
    Fire.destroy(effects.fire, 1)
    sprite4.destroy()
    info.changeScoreBy(7)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ClimbFire, function (sprite, otherSprite) {
    otherSprite.destroy()
    statusbar.value += -15
    music.jumpDown.play()
    EndGame()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    character.loopFrames(
    mySprite,
    assets.animation`Left`,
    100,
    character.rule(Predicate.MovingLeft)
    )
    music.footstep.play()
})
function CreatHeart () {
    for (let Heart of tiles.getTilesByType(assets.tile`myTile10`)) {
        HeartLife = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Heart)
        tiles.placeOnTile(HeartLife, Heart)
        tiles.setTileAt(Heart, assets.tile`transparency16`)
        animation.runImageAnimation(
        HeartLife,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f . f f f f f f . 
            . f f 3 3 3 3 f f f 3 3 3 3 f f 
            . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
            . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
            . f 3 3 3 3 b b b b b 3 3 3 3 f 
            . f f 3 3 b b b b b b b 3 3 f f 
            . . f f 3 b b b b b b b 3 f f . 
            . . . f f b b b b b b b f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . f f f . . . . 
            . . . . f 3 3 3 f 3 3 3 f . . . 
            . . . . f 3 3 3 3 3 1 3 f . . . 
            . . . . f 3 3 3 3 3 3 3 f . . . 
            . . . . . f 3 b b b 3 f . . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(1)
    music.jumpUp.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.splash("Next stage unlocked")
})
scene.onOverlapTile(SpriteKind.FireMain, assets.tile`myTile17`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.jumpDown.play()
})
function FlyEnemyFollow () {
    for (let Fly of sprites.allOfKind(SpriteKind.Flies)) {
        if (Math.abs(Fly.x) - Math.abs(mySprite.x) < 60) {
            if (Fly.x - mySprite.x < -5) {
                Fly.vx = 25
            } else if (Fly.x - mySprite.x > 5) {
                Fly.vx = -25
            }
            if (Fly.y - mySprite.y < -5) {
                Fly.vy = 25
            } else if (Fly.y - mySprite.y > 5) {
                Fly.vy = -25
            }
        } else {
            Fly.vy = -25
            Fly.vx = 0
        }
    }
}
function Climb2 () {
    if (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.isHittingTile(CollisionDirection.Right) && mySprite.vy >= 0) {
        mySprite.vy = 0
        mySprite.ay = 0
        mySprite.setImage(img`
            ........ccc.............
            .......c555cccc.........
            ......c5555b555c........
            .....c555d5b335cc....cc.
            .....c555553335cdc...cc.
            ....c55555513b5ccccccdc.
            ....c5551f5bb5dbbbbcddc.
            ....c555ff5b55dbccbbcdc.
            ....c555f5555ddb55cbbccc
            ...cc55555555dbb55cbccdc
            ..ccc5555555ddb55b555d5c
            ..cccc555555dd555c555d5c
            ..cc.c55555ddd55b555dd5c
            .....cb5555dddbbdd5ddddc
            ....cccb5555ddddddddbbdc
            ....ccc.b5555ddddddbbccc
            ....cc..cb555dddddddbbc.
            .......cccbbdddddddddbc.
            .......cc...cbdddddddc..
            ...........cc.cccbdddc..
            ...........cc.ccccddc...
            ..............cc.cddc...
            .................cdc....
            .................cc.....
            `)
        if (COUNT % 2 == 0 && controller.A.isPressed()) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . . . . 3 3 1 1 1 1 1 3 3 . . . 
                . . . . 2 1 1 1 1 1 1 1 2 . . . 
                . . . . 2 2 1 1 1 1 1 2 2 . . . 
                . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
                . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
                . . 1 . . . 2 3 1 3 2 . . . 1 . 
                . . 1 3 . . . 3 1 3 . . . 3 1 . 
                . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -64)
            Fire.setKind(SpriteKind.FireMain)
        }
    } else {
        mySprite.ay = 350
    }
    if (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.ax < 0) {
        mySprite.setImage(img`
            .............ccc........
            .........cccc555c.......
            ........c555b5555c......
            .cc....cc533b5d555c.....
            .cc...cdc533355555c.....
            .cdcccccc5b31555555c....
            .cddcbbbbd5bb5f1555c....
            .cdcbbccbd55b5ff555c....
            cccbbc55bdd5555f555c....
            cdccbc55bbd55555555cc...
            c5d555b55bdd5555555ccc..
            c5d555c555dd555555cccc..
            c5dd555b55ddd55555c.cc..
            cdddd5ddbbddd5555bc.....
            cdbbdddddddd5555bccc....
            cccbbdddddd5555b.ccc....
            .cbbddddddd555bc..cc....
            .cbdddddddddbbccc.......
            ..cdddddddbc...cc.......
            ..cdddbccc.cc...........
            ...cddcccc.cc...........
            ...cddc.cc..............
            ....cdc.................
            .....cc.................
            `)
        mySprite.setImage(mySprite.image)
        if (COUNT % 2 == 0 && controller.A.isPressed()) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . . . . 3 3 1 1 1 1 1 3 3 . . . 
                . . . . 2 1 1 1 1 1 1 1 2 . . . 
                . . . . 2 2 1 1 1 1 1 2 2 . . . 
                . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
                . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
                . . 1 . . . 2 3 1 3 2 . . . 1 . 
                . . 1 3 . . . 3 1 3 . . . 3 1 . 
                . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -64)
            Fire.setKind(SpriteKind.FireMain)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile29`)
    Boulder = sprites.create(assets.image`myImage7`, SpriteKind.Boulder)
    tiles.placeOnTile(Boulder, tiles.getTileLocation(30, 45))
    tiles.setTileAt(tiles.getTileLocation(30, 45), assets.tile`transparency16`)
    Boulder.vx = -100
    Boulder.ay = 0
    animation.runImageAnimation(
    Boulder,
    assets.animation`myAnim6`,
    50,
    true
    )
    sprite.vy = -5 * pixelToMeter
    Boulder.lifespan = 5000
    statusbar.value += -10
    music.jumpDown.play()
    EndGame()
})
function DestroyEnemy () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Climb)
    sprites.destroyAllSpritesOfKind(SpriteKind.ClimbRight)
    sprites.destroyAllSpritesOfKind(SpriteKind.ClimbLeft)
    sprites.destroyAllSpritesOfKind(SpriteKind.Trap)
    sprites.destroyAllSpritesOfKind(SpriteKind.Boss)
    sprites.destroyAllSpritesOfKind(SpriteKind.Flies)
    sprites.destroyAllSpritesOfKind(SpriteKind.Bumper)
    sprites.destroyAllSpritesOfKind(SpriteKind.Pet)
    sprites.destroyAllSpritesOfKind(SpriteKind.Coin)
    sprites.destroyAllSpritesOfKind(SpriteKind.ClimbFire)
    sprites.destroyAllSpritesOfKind(SpriteKind.BossFire)
    sprites.destroyAllSpritesOfKind(SpriteKind.Tree)
    sprites.destroyAllSpritesOfKind(SpriteKind.TreeDefault)
    sprites.destroyAllSpritesOfKind(SpriteKind.BoomBump)
    Boss1Fight = false
    CLeft = false
    CRight = false
}
sprites.onOverlap(SpriteKind.ClimbLeft, SpriteKind.FireMain, function (sprite, otherSprite) {
    sprite.destroy()
    Fire.destroy(effects.fire, 1)
    CLeft = false
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Boss3, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.vy = -5 * pixelToMeter
    statusbar.value += -4
    music.jumpDown.play()
    EndGame()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flies, function (sprite2, otherSprite2) {
    otherSprite2.destroy()
    statusbar.value += -5
    music.jumpDown.play()
    EndGame()
})
sprites.onOverlap(SpriteKind.Bumper, SpriteKind.FireMain, function (sprite4, otherSprite3) {
    Fire.destroy(effects.fire, 1)
    sprite4.destroy()
    music.powerDown.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("In the mini form can only kill monsters by jumping on their heads", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow1, function (sprite, location) {
    game.showLongText("Move left or right in combination with the Q button to shoot bullets when in large form. In large form can only shoot bullets to kill monsters.", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(8, 28), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(7, 28), assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.RockDrop, function (sprite, otherSprite) {
    statusbar.value += -1
    music.jumpDown.play()
    EndGame()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    character.loopFrames(
    mySprite,
    assets.animation`Right`,
    100,
    character.rule(Predicate.MovingRight)
    )
    music.footstep.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    statusbar.value += -0.5
    music.jumpDown.play()
    EndGame()
})
function CreateBoom () {
    for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
        Boom = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . d d d d d . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.BoomBump)
        tiles.placeOnTile(Boom, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        BoomStatus = true
    }
}
function CreatEnemyGame () {
    CreatFlyEnemy()
    CreatGroundEnemy()
    MoveGroundEnemy()
    FlyEnemyFollow()
    CreateTreeTrap()
    CreateBoom()
    CreatCoin()
    CreatBurn()
    CreatGroundEnemy()
    CreatClimbEnemy()
    CreatFlyEnemy()
    CreatHeart()
    CreateBoss1()
    CreatePet()
    CreateBoss2()
    CreateBoss3()
}
sprites.onOverlap(SpriteKind.FireMain, SpriteKind.Boss2, function (sprite, otherSprite) {
    Boss2Status.value += -4
    sprite.destroy(effects.fire, 100)
    if (Boss2Status.value == 0) {
        otherSprite.destroy(effects.bubbles, 500)
        Boss2Fight = false
        CreateOrbRevive()
        info.changeScoreBy(50)
        tiles.setWallAt(tiles.getTileLocation(34, 33), false)
        music.powerUp.play()
    }
})
sprites.onOverlap(SpriteKind.Boss2, SpriteKind.Player, function (sprite, otherSprite) {
    if (COUNT % 2 != 0) {
        otherSprite.vy = -5 * pixelToMeter
        Boss2Status.value += -4
        music.jumpDown.play()
        if (Boss2Status.value == 0) {
            sprite.destroy(effects.bubbles, 500)
            Boss2Fight = false
            CreateOrbRevive()
            info.changeScoreBy(50)
            music.powerUp.play()
            tiles.setWallAt(tiles.getTileLocation(34, 33), false)
        }
    } else {
        statusbar.value += -0.05
        music.jumpDown.play()
        EndGame()
    }
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow12, function (sprite, location) {
    game.showLongText("Press the left arrow to move left", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.BossFire, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -5
    sprite.destroy(effects.disintegrate, 100)
    music.jumpDown.play()
    EndGame()
})
function CreateBoss1 () {
    for (let value of tiles.getTilesByType(assets.tile`myTile41`)) {
        Boss1 = sprites.create(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d d f d d f . . 
            . . . f d d e e d d f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . f c f e e d d d f f f f c 
            . . . . f e e e e f f f d b f . 
            . . . . f e e f f f e f d d f . 
            . f f . f f f e e e e f f f . . 
            . f e . f f e e e e f e e f . . 
            . f e f f f f f f f e e e f f . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d e e f f d d f . 
            . . f f f f f f f f f f f f f . 
            `, SpriteKind.Boss)
        animation.runImageAnimation(
        Boss1,
        [img`
            . . . f . . . f f f f f . f . . 
            . . . f . . f e e e e e f f . . 
            . . . f f f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . . f . . . f f f f f . f . . 
            . . . f . . f e e e e e f f . . 
            . . . f f f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e f f e e e f . . 
            f f . f e e e e e f f f f f . . 
            f e . f e e f f e e f b d f . . 
            f e . f e e e f f e f d d f f . 
            f e f f e f b b e f f f f f f . 
            f f f f e b d d e e e f d d f . 
            . f f f f f f f f f f f f f . . 
            `,img`
            . . f . . . f f f f f . . . f . 
            . . f . . f e e e e e f . . f . 
            . . f f f e e d d d d d f f f . 
            . . . f f e d f f d d f f f . . 
            . . f d d e d d d d e e d d c . 
            . f f f d e d d c d d d d c c . 
            f d b f d e d d d c c c c d c . 
            f d d f f e e d d d d d d c . . 
            f f f e f f e e d d d d c . . . 
            . . f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . f . . . f f f f f . . . f . 
            . . f . . f e e e e e f . . f . 
            . . f f f e d d d d d d f f f . 
            . . . f f d f f d d f f d f . . 
            . . f d e d d d d e e d d d c . 
            . . f f e d d c d d d d c d c . 
            f f f f e d d d c c c c d d c . 
            f d b f f e d d d d d d d c . . 
            f d d f f f e e d d d d c . . . 
            f f f e e e f e e f f f . . . . 
            . f f f e e e e e e e f . . . . 
            . f e f f f e e e e e e f . . . 
            . f e f f f f f e e e e f f . . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d f f f f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . f . . . . . . . . . . f . 
            . . . f . . . f f f f f . . f . 
            . . . f . . f e e e e e f f f . 
            . . . f f f e e e d d d d f . . 
            . . . . f f e e d d d d d f . . 
            . . . f d d e e d f f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d f f c 
            . . . . f e e e f f f e f d d f 
            . . . . f f f f f e e e f d d f 
            . f f . f f e e e e e f f f f f 
            . f e . f f e e e f f e f f f . 
            . f e f f f b b f f e f d b f . 
            . f e f f b d d f e e f d d f . 
            . . f f f f f f f f f f f f f . 
            `,img`
            . . . f . . . f f f f f . f . . 
            . . . f . . f e e e e e f f . . 
            . . . f f f e e e d d d d f . . 
            . . . . f f e e d d f d d f . . 
            . . . f d d e e d d f d d d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . f c f e e d d d f f f f c 
            . . . . f e e e e f f f d b f . 
            . . . . f e e f f f e f d d f . 
            . f f . f f f e e e e f f f . . 
            . f e . f f e e e e f e e f . . 
            . f e f f f f f f f e e e f f . 
            . f e f f f b b f e e f d b f . 
            . f f f f b d d e e f f d d f . 
            . . f f f f f f f f f f f f f . 
            `],
        200,
        true
        )
        tiles.placeOnTile(Boss1, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        Boss1.changeScale(2, ScaleAnchor.Middle)
        BossStatus = statusbars.create(20, 4, StatusBarKind.BossHealth)
        BossStatus.value = 1000
        BossStatus.attachToSprite(Boss1, 5, 5)
        Boss1Fight = true
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile57`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile57`)
    TrapRight = sprites.create(assets.image`myImage2`, SpriteKind.Trap)
    animation.runImageAnimation(
    TrapRight,
    assets.animation`TrapRight0`,
    50,
    false
    )
    tiles.placeOnTile(TrapRight, location)
    TrapRight.lifespan = 450
    statusbar.value += -0.5
    sprite.vx = 3 + pixelToMeter
    music.jumpDown.play()
    EndGame()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile52`, function (sprite, location) {
    game.showLongText("This is my body. Thank you child. It won't be long before we can recover.", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
function CreatGroundEnemy () {
    for (let GEnemy2 of tiles.getTilesByType(assets.tile`myTile18`)) {
        Enemies = sprites.create(assets.image`myImage1`, SpriteKind.Bumper)
        tiles.placeOnTile(Enemies, GEnemy2)
        tiles.setTileAt(GEnemy2, assets.tile`transparency16`)
        Enemies.ay = gravity
        if (Math.percentChance(100)) {
            Enemies.vx = randint(50, 100)
        } else {
            Enemies.vx = randint(-100, -50)
        }
    }
}
function CreatBossHelp () {
    for (let GEnemy2 of tiles.getTilesByType(assets.tile`myTile42`)) {
        Enemies = sprites.create(assets.image`myImage`, SpriteKind.Bumper)
        tiles.placeOnTile(Enemies, GEnemy2)
        tiles.setTileAt(GEnemy2, assets.tile`transparency16`)
        Enemies.ay = gravity
        if (Math.percentChance(100)) {
            Enemies.vx = randint(50, 100)
        } else {
            Enemies.vx = randint(-100, -50)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile53`)) {
        Crep = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111ffff.....
            ......fffcdb1bc111cf....
            ....fc111cbfbf1b1b1f....
            ....f1b1b1ffffbfbfbf....
            ....fbfbfffffff.........
            .........fffff..........
            ..........fff...........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Flies)
        tiles.placeOnTile(Crep, value)
        Crep.setFlag(SpriteFlag.GhostThroughWalls, false)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        Crep,
        assets.animation`myAnim3`,
        50,
        true
        )
    }
}
function CreateOrbRevive () {
    for (let value of tiles.getTilesByType(assets.tile`myTile49`)) {
        Revive = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . 6 6 6 5 5 6 6 6 . . . . 
            . . . 7 7 7 7 6 6 6 6 6 6 . . . 
            . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
            . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
            . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
            . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
            . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
            . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
            . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
            . . . 6 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 6 6 8 8 8 8 6 6 . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.OrbRevive)
        tiles.placeOnTile(Revive, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile51`)) {
        Revive2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.OrbRevive)
        tiles.placeOnTile(Revive2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile52`)) {
        Revive3 = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
            6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
            6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
            6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
            6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
            6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
            6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
            6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
            6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
            6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
            6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
            6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
            6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
            6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.OrbRevive)
        tiles.placeOnTile(Revive3, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Tree, SpriteKind.FireMain, function (sprite, otherSprite) {
    sprite.destroy()
    TreeFire = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, sprite, 64, 0)
    TreeFire.setKind(SpriteKind.TreeFire)
    info.changeScoreBy(5)
    music.powerUp.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile61`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile61`)
    TrapLeft = sprites.create(assets.image`myImage2`, SpriteKind.Trap)
    animation.runImageAnimation(
    TrapLeft,
    assets.animation`TrapRight`,
    50,
    false
    )
    tiles.placeOnTile(TrapLeft, location)
    TrapLeft.lifespan = 450
    statusbar.value += -0.5
    sprite.vx = -3 - pixelToMeter
    music.jumpDown.play()
    EndGame()
})
function CreateTreeTrap () {
    for (let value of tiles.getTilesByType(assets.tile`myTile34`)) {
        TreeTrap = sprites.create(assets.image`Tree`, SpriteKind.Tree)
        tiles.placeOnTile(TreeTrap, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile62`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile62`)
    Trap = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f . . . f f . . . f . . . 
        . . . f . . f f f f . . f . . . 
        . . . f . . f b b f . . f . . . 
        . . f f f . f b b f . f f f . . 
        . . f b f . f d 1 f . f d f . . 
        . . f b f d f 1 d f . f d f . . 
        . 1 f b f d c d d d f f d f 1 . 
        . f d d d f b d d c f d b b f . 
        . f c d d f b d d c f c d d f 1 
        1 f d d d f b d d d f b d d f d 
        f c b d b f c d d c f c b d c f 
        f c b d b f c d d c b c b d c f 
        `, SpriteKind.Trap)
    animation.runImageAnimation(
    Trap,
    assets.animation`TrapUp`,
    50,
    false
    )
    tiles.placeOnTile(Trap, location)
    Trap.lifespan = 450
    statusbar.value += -5
    sprite.vy = -3 * pixelToMeter
    music.jumpDown.play()
    EndGame()
})
sprites.onOverlap(SpriteKind.FireMain, SpriteKind.Boss, function (sprite, otherSprite) {
    BossStatus.value += -4
    sprite.destroy(effects.fire, 100)
    if (BossStatus.value == 0) {
        otherSprite.destroy(effects.bubbles, 500)
        Boss1Fight = false
        CreateOrbRevive()
        info.changeScoreBy(50)
        tiles.setWallAt(tiles.getTileLocation(44, 1), false)
        tiles.setWallAt(tiles.getTileLocation(44, 2), false)
        music.powerUp.play()
    }
})
statusbars.onStatusReached(StatusBarKind.BossHealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    CreatBossHelp()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd0, function (sprite, location) {
    game.showLongText("This is a place that will help you practice your skills so that you can avenge your parents and revive me", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.door3, function (sprite, location) {
    game.showLongText("This is below the sea, where the other two tribes live, one keeping the flesh and the other keeping the body of the master. Master will use your newly acquired wisdom to help you breathe on the bottom of this sea.", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, tiles.util.arrow14, function (sprite, location) {
    game.showLongText("Press the jump key in combination with the left arrow or the right arrow to climb the wall on the same side as the arrow.", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(40, 42), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(41, 42), assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile27`)
    Trap = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . f . . . f f . . . f . . . 
        . . . f . . f f f f . . f . . . 
        . . . f . . f b b f . . f . . . 
        . . f f f . f b b f . f f f . . 
        . . f b f . f d 1 f . f d f . . 
        . . f b f d f 1 d f . f d f . . 
        . 1 f b f d c d d d f f d f 1 . 
        . f d d d f b d d c f d b b f . 
        . f c d d f b d d c f c d d f 1 
        1 f d d d f b d d d f b d d f d 
        f c b d b f c d d c f c b d c f 
        f c b d b f c d d c b c b d c f 
        `, SpriteKind.Trap)
    animation.runImageAnimation(
    Trap,
    assets.animation`TrapUp`,
    50,
    false
    )
    tiles.placeOnTile(Trap, location)
    Trap.lifespan = 450
    statusbar.value += -5
    sprite.vy = -3 * pixelToMeter
    music.jumpDown.play()
    EndGame()
})
function ChangeForm () {
    if (controller.B.isPressed()) {
        COUNT += 1
        if (COUNT % 2 == 0) {
            mySprite.changeScale(0.4, ScaleAnchor.Middle)
        }
        if (COUNT % 2 != 0) {
            mySprite.changeScale(-0.4, ScaleAnchor.Middle)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.TreeFire, function (sprite, otherSprite) {
    statusbar.value += -20
    TreeFire.destroy(effects.fire, 100)
    music.jumpDown.play()
    EndGame()
})
sprites.onOverlap(SpriteKind.Boss2Fire, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -10
    sprite.destroy(effects.disintegrate, 100)
    music.jumpDown.play()
    EndGame()
})
function CreatBurn () {
    for (let Burn of tiles.getTilesByType(assets.tile`myTile12`)) {
        BurnE = sprites.create(assets.image`myImage6`, SpriteKind.Burn)
        tiles.placeOnTile(BurnE, Burn)
        tiles.setTileAt(Burn, assets.tile`transparency16`)
        animation.runImageAnimation(
        BurnE,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BoomBump, function (sprite, otherSprite) {
    if (BoomStatus) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 4 . . . . . 
            . . . . 2 . . . . 4 4 . . . . . 
            . . . . 2 4 . . 4 5 4 . . . . . 
            . . . . . 2 4 d 5 5 4 . . . . . 
            . . . . . 2 5 5 5 5 4 . . . . . 
            . . . . . . 2 5 5 5 5 4 . . . . 
            . . . . . . 2 5 4 2 4 4 . . . . 
            . . . . . . 4 4 . . 2 4 4 . . . 
            . . . . . 4 4 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 3 . . . . . . . . . . . 4 . . 
            . 3 3 . . . . . . . . . 4 4 . . 
            . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
            . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
            . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
            . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
            . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
            . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
            . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
            . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
            . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
            . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
            . 4 4 d d 4 d d d 4 3 d d 4 . . 
            . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
            . 4 5 4 . . 4 4 4 . . . 4 4 . . 
            . 4 4 . . . . . . . . . . 4 4 . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b . b b b . . . . . 
            . . . . b 1 1 b 1 1 1 b . . . . 
            . . b b 3 1 1 d d 1 d d b b . . 
            . b 1 1 d d b b b b b 1 1 b . . 
            . b 1 1 1 b . . . . . b d d b . 
            . . 3 d d b . . . . . b d 1 1 b 
            . b 1 d 3 . . . . . . . b 1 1 b 
            . b 1 1 b . . . . . . b b 1 d b 
            . b 1 d b . . . . . . b d 3 d b 
            . b b d d b . . . . b d d d b . 
            . b d d d d b . b b 3 d d 3 b . 
            . . b d d 3 3 b d 3 3 b b b . . 
            . . . b b b d d d d d b . . . . 
            . . . . . . b b b b b . . . . . 
            `],
        100,
        false
        )
        otherSprite.changeScale(1, ScaleAnchor.Middle)
        BoomStatus = false
    } else {
        otherSprite.destroy(effects.disintegrate, 200)
        tiles.setWallAt(tiles.getTileLocation(38, 29), false)
        tiles.setWallAt(tiles.getTileLocation(37, 29), false)
        tiles.setTileAt(tiles.getTileLocation(38, 29), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(37, 29), assets.tile`transparency16`)
        sprite.vy = 2 * pixelToMeter
        statusbar.value += -30
        EndGame()
    }
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Boss3Fire, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -20
    sprite.destroy(effects.disintegrate, 100)
    music.jumpDown.play()
    EndGame()
})
function startLevel () {
    if (Level == 0) {
        tiles.setCurrentTilemap(tilemap`level8`)
        scene.setBackgroundImage(img`
            fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
            fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
            fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
            ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
            fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
            fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
            fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
            fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
            fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
            fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
            ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
            fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
            fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
            ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
            fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
            ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
            ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
            fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
            fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
            cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
            ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
            ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
            fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
            fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
            ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
            fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
            ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
            ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
            ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
            ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
            fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
            fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
            ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
            ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
            dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
            dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
            dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
            dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
            dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
            dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
            ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
            ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
            ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
            dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
            dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
            dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
            ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
            ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
            ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
            ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
            ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
            dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
            dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
            bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
            bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
            bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
            bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
            bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
            bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
            ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
            dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
            ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
            ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
            dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
            ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
            bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
            dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
            dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
            ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
            dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
            bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
            ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
            dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
            dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
            bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
            dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
            dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
            bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
            cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
            ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
            ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
            ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
            cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
            cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
            ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
            cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
            ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
            cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
            cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
            ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
            cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
            fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
            fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
            fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
            ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
            fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
            `)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile45`)
    } else if (Level == 1) {
        info.setLife(5)
        statusbar.value = 100
        tiles.setCurrentTilemap(tilemap`level9`)
        scene.setBackgroundColor(13)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        tiles.placeOnRandomTile(mySprite, assets.tile`myTile35`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Pet)
        CreatEnemyGame()
    } else if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`level4`)
        scene.setBackgroundColor(9)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        tiles.placeOnRandomTile(mySprite, tiles.util.door3)
        info.changeLifeBy(3)
        statusbar.value = 100
        DestroyEnemy()
        CreatEnemyGame()
    } else {
        game.splash(blockSettings.readString("Name"), "You win")
        game.reset()
    }
}
function CreatCoin () {
    for (let Coin of tiles.getTilesByType(assets.tile`myTile14`)) {
        EarnCoin = sprites.create(img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `, SpriteKind.Coin)
        tiles.placeOnTile(EarnCoin, Coin)
        tiles.setTileAt(Coin, assets.tile`transparency16`)
        animation.runImageAnimation(
        EarnCoin,
        [img`
            . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . . 
            `,img`
            . . b b b . . . 
            . b 5 5 5 b . . 
            b 5 d 3 d 5 b . 
            b 5 3 5 1 5 b . 
            c 5 3 5 1 d c . 
            c 5 d 1 d d c . 
            . f d d d f . . 
            . . f f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 d 1 5 b . 
            . b 5 3 1 5 b . 
            . c 5 3 1 d c . 
            . c 5 1 d d c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . . b 1 1 b . . 
            . . b 5 5 b . . 
            . . b d d b . . 
            . . c d d c . . 
            . . c 3 3 c . . 
            . . . f f . . . 
            `,img`
            . . . b b . . . 
            . . b 5 5 b . . 
            . b 5 1 d 5 b . 
            . b 5 1 3 5 b . 
            . c d 1 3 5 c . 
            . c d d 1 5 c . 
            . . f d d f . . 
            . . . f f . . . 
            `,img`
            . . . b b b . . 
            . . b 5 5 5 b . 
            . b 5 d 3 d 5 b 
            . b 5 1 5 3 5 b 
            . c d 1 5 3 5 c 
            . c d d 1 d 5 c 
            . . f d d d f . 
            . . . f f f . . 
            `],
        100,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile51`, function (sprite, location) {
    game.showLongText("This is my flesh and blood. Fighting and the tribe is also the strongest tribe. You must be careful.", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.FireMain, SpriteKind.Boss3, function (sprite, otherSprite) {
    Boss3Status.value += -4
    sprite.destroy(effects.fire, 100)
    if (Boss3Status.value == 0) {
        otherSprite.destroy(effects.bubbles, 500)
        Boss3Fight = false
        CreateOrbRevive()
        info.changeScoreBy(50)
        tiles.setWallAt(tiles.getTileLocation(67, 37), false)
        music.powerUp.play()
    }
})
function creatPlayer () {
    mySprite = sprites.create(img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 50, 0)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile45`)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mySprite)
    statusbar.max = 100
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "How to play") {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("Press the left arrow to move left Press the right arrow to move right Press the up arrow to jump up Stand still and press E to make it smaller, press again to return to original size In the mini form can only kill monsters by jumping on their heads Move left or right in combination with the Q button to shoot bullets when in large form. In large form can only shoot bullets to kill monsters. Press the jump key in combination with the left arrow or the right arrow to climb the wall on the same side as the arrow.", DialogLayout.Full)
    } else if (option == "Play") {
        blockMenu.setControlsEnabled(false)
        Game_Started = true
        blockMenu.closeMenu()
        blockSettings.writeString("Name", game.askForString("Please input a name:", 10))
        Play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tree, function (sprite, otherSprite) {
    statusbar.value += -0.5
    music.jumpDown.play()
    EndGame()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    game.showLongText("Teacher, why does this place have such a strange color?", DialogLayout.Bottom)
    game.showLongText("This place is the residence of that earth monkey, he is holding master's wisdom. This place has such a weird color because this earth monkey is color blind so he sees this color as black so it's been many years since he's done any renovations on this place.", DialogLayout.Bottom)
    game.showLongText("You have to be careful", DialogLayout.Bottom)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile30`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile30`)
    Boulder = sprites.create(assets.image`myImage7`, SpriteKind.Boulder)
    tiles.placeOnTile(Boulder, tiles.getTileLocation(68, 32))
    tiles.setTileAt(tiles.getTileLocation(68, 32), assets.tile`transparency16`)
    Boulder.vx = -100
    Boulder.ay = 0
    animation.runImageAnimation(
    Boulder,
    assets.animation`myAnim6`,
    50,
    true
    )
    Boulder.lifespan = 2500
    sprite.vy = -5 * pixelToMeter
    statusbar.value += -10
    music.jumpDown.play()
    EndGame()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile28`)
    TrapLeft = sprites.create(assets.image`myImage2`, SpriteKind.Trap)
    animation.runImageAnimation(
    TrapLeft,
    assets.animation`TrapRight`,
    50,
    false
    )
    tiles.placeOnTile(TrapLeft, location)
    TrapLeft.lifespan = 450
    statusbar.value += -0.5
    sprite.vx = -3 - pixelToMeter
    EndGame()
    music.jumpDown.play()
})
function EndGame () {
    if (statusbar.value == 0) {
        info.changeLifeBy(-1)
        statusbar.value += 100
    }
    if (info.life() == 0) {
        game.splash(blockSettings.readString("Name"), "You lose")
        game.reset()
        music.powerDown.play()
    }
}
let RockDrop: Sprite = null
let FireClimbCenter: Sprite = null
let FireClimbRight: Sprite = null
let FireClimbLeft: Sprite = null
let Boss3Fire3: Sprite = null
let Boss3Fire2: Sprite = null
let Boss3Fire: Sprite = null
let Boss2Fire3: Sprite = null
let Boss2Fire2: Sprite = null
let Boss2Fire: Sprite = null
let Boss1Fire: Sprite = null
let EarnCoin: Sprite = null
let BurnE: Sprite = null
let Trap: Sprite = null
let TreeTrap: Sprite = null
let TrapLeft: Sprite = null
let TreeFire: Sprite = null
let Revive3: Sprite = null
let Revive2: Sprite = null
let Revive: Sprite = null
let Crep: Sprite = null
let Enemies: Sprite = null
let TrapRight: Sprite = null
let BossStatus: StatusBarSprite = null
let Boss1: Sprite = null
let BoomStatus = false
let Boom: Sprite = null
let Boss1Fight = false
let Boulder: Sprite = null
let HeartLife: Sprite = null
let Boss3Fight = false
let Boss3Status: StatusBarSprite = null
let Boss3: Sprite = null
let Level = 0
let Fire: Sprite = null
let SuPho: Sprite = null
let FlyEnemy: Sprite = null
let TrapDown: Sprite = null
let gravity = 0
let Boss2Fight = false
let Boss2Status: StatusBarSprite = null
let Boss2: Sprite = null
let ClimbEnemyCenter: Sprite = null
let Ccenter = false
let ClimbEnemyRight: Sprite = null
let CRight = false
let ClimbEnemyLeft: Sprite = null
let CLeft = false
let mySprite: Sprite = null
let NameShiphu = ""
let Name = ""
let statusbar: StatusBarSprite = null
let pixelToMeter = 0
let COUNT = 0
let Icon2: TextSprite = null
let Icon: TextSprite = null
let textSprite: TextSprite = null
let Game_Started = false
class ActionKind {
    static Walking = 0
    static Idle = 1
    static Jumping = 2
}
blockMenu.showMenu(["Play", "How to play"], MenuStyle.Grid, MenuLocation.BottomHalf)
blockMenu.setColors(1, 15)
Game_Started = false
textSprite = textsprite.create("Adventure Dinosaur")
textSprite.setMaxFontHeight(9)
textSprite.setPosition(80, 34)
Icon = textsprite.create("")
Icon.setIcon(img`
    ........................
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb55555bcc555555c
    ......cb555555555c55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb1bbbc.
    ....ccd55ddddd5bbbb335c.
    ...ccbdddddddd5bbbb335c.
    .ccccddddddddd55bbb335c.
    cdcccdddddb55bb5bb3335c.
    cddbddddddb555bb5b3335c.
    cddddddddddb5555b53335c.
    ccddddddbd55bb55c5555c..
    .ccddddbbbdd55cccbccc...
    ...ccbbbcbddddccdddc....
    .....ccccdd555dccccc....
    ........cccccccc........
    `)
Icon.setPosition(13, 32)
Icon2 = textsprite.create("")
Icon2.setIcon(img`
    ........................
    ........................
    ........................
    ..........ccc...........
    .........cccc...........
    .....ccccccc..ccc.......
    ...cc555555cccccc.......
    ..c5555555555bcc........
    .c555555555555b..cc.....
    c555555ccb55555bccc.....
    c55d55c555555555bc......
    c5555555555555555b......
    .cbbb1bb5555dd555b.cc...
    .c533bbbb5ddddd55dcc....
    .c533bbbb5ddddddddbcc...
    .c533bbb55dddddddddcccc.
    .c5333bb5bb55bdddddcccdc
    .c5333b5bb555bddddddbddc
    .c53335b5555bddddddddddc
    ..c5555c55bb55dbddddddcc
    ...cccbccc55ddbbbddddcc.
    ....cdddccddddbcbbbcc...
    ....cccccd555ddcccc.....
    ........cccccccc........
    `)
Icon2.setPosition(146, 32)
game.onUpdate(function () {
    if (Game_Started) {
        MoveGroundEnemy()
        FlyEnemyFollow()
        Climb2()
    }
})
game.onUpdateInterval(1000, function () {
    if (Boss1Fight) {
        Boss1Fire = sprites.createProjectileFromSprite(img`
            . . . . e e e e e . . . . . . . 
            . . . e 2 2 2 2 2 e e . . . . . 
            . . e 2 2 2 2 2 2 2 e e . . . . 
            . e b 4 2 2 2 4 4 4 9 e . . . . 
            e b 9 4 2 2 4 4 4 4 9 9 e e . . 
            e 9 9 4 2 4 4 4 4 4 9 9 2 2 e . 
            e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
            e 9 9 e e e e e e e 9 9 2 2 2 e 
            e 9 b e b e b b b e b 9 2 2 2 e 
            e b e b b e b b b b e e e e 2 e 
            e e e 2 2 e 2 2 2 2 e e 3 3 e e 
            e e e e e e e e e e e e e 3 3 e 
            e e e e e e e e e e e e e e e e 
            e e f f f e e e e f f f e e e e 
            . f b f f f e e f b f f f e e . 
            . . b b c . . . . b b c . . . . 
            `, Boss1, 100, 0)
        tiles.placeOnTile(Boss1Fire, tiles.getTileLocation(51, 13))
        Boss1Fire.setKind(SpriteKind.BossFire)
    }
})
game.onUpdateInterval(800, function () {
    if (Boss2Fight) {
        Boss2Fire = sprites.createProjectileFromSprite(img`
            . . . . . . . . b b . . . . . . 
            . . . . . . . b 9 1 b . . . . . 
            . . b b . . . b 9 9 b . . . . . 
            . b 9 1 b . . b b b . . b b b . 
            . b 3 9 b . b b b b . b 9 9 1 b 
            . b b b b b 9 9 1 1 b b 3 9 9 b 
            . . . . b 9 d 9 1 1 b b b b b . 
            . . . . b 5 3 9 9 9 b . . . . . 
            . . b b b 5 3 3 d 9 b . . . . . 
            . b 5 1 b b 5 5 9 b b b b . . . 
            . b 5 5 b b b b b b 3 9 9 3 . . 
            . b b b b b b b . b 9 1 1 9 b . 
            . . . b 5 5 1 b . b 9 1 1 9 b . 
            . . . b 5 5 5 b . b 3 9 9 3 b . 
            . . . . b b b . . . b b b b . . 
            . . . . . . . . . . . . . . . . 
            `, Boss2, 0, -100)
        Boss2Fire2 = sprites.createProjectileFromSprite(img`
            . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b 9 d 9 9 9 9 9 9 9 9 b b . 
            . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
            b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
            b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
            b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
            b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
            . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
            . b d 5 3 3 3 3 3 3 3 d 5 b b . 
            . . b d 5 d 3 3 3 3 5 5 b b . . 
            . . . b b 5 5 5 5 5 5 b b . . . 
            . . . . . b b b b b b . . . . . 
            `, Boss2, -100, -35)
        Boss2Fire3 = sprites.createProjectileFromSprite(img`
            . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b 9 d 9 9 9 9 9 9 9 9 b b . 
            . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
            b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
            b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
            b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
            b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
            . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
            . b d 5 3 3 3 3 3 3 3 d 5 b b . 
            . . b d 5 d 3 3 3 3 5 5 b b . . 
            . . . b b 5 5 5 5 5 5 b b . . . 
            . . . . . b b b b b b . . . . . 
            `, Boss2, 100, -35)
        Boss2Fire.setKind(SpriteKind.Boss2Fire)
        Boss2Fire2.setKind(SpriteKind.Boss2Fire)
        Boss2Fire3.setKind(SpriteKind.Boss2Fire)
    }
})
game.onUpdateInterval(800, function () {
    if (Boss3Fight) {
        Boss3Fire = sprites.createProjectileFromSprite(img`
            . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b 9 d 9 9 9 9 9 9 9 9 b b . 
            . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
            b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
            b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
            b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
            b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
            . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
            . b d 5 3 3 3 3 3 3 3 d 5 b b . 
            . . b d 5 d 3 3 3 3 5 5 b b . . 
            . . . b b 5 5 5 5 5 5 b b . . . 
            . . . . . b b b b b b . . . . . 
            `, Boss3, -100, 115)
        Boss3Fire2 = sprites.createProjectileFromSprite(assets.image`Boss3Fire2`, Boss3, -100, 0)
        Boss3Fire3 = sprites.createProjectileFromSprite(assets.image`Boss3Fire0`, Boss3, 0, 100)
        Boss3Fire.setKind(SpriteKind.Boss3Fire)
        Boss3Fire2.setKind(SpriteKind.Boss3Fire)
        Boss3Fire3.setKind(SpriteKind.Boss3Fire)
        music.pewPew.play()
    }
})
game.onUpdateInterval(1500, function () {
    if (CLeft) {
        FireClimbLeft = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
            . . 1 3 . . . 3 1 3 . . . 3 1 . 
            . . 1 . . . 2 3 1 3 2 . . . 1 . 
            . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
            . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
            . . . . 2 2 1 1 1 1 1 2 2 . . . 
            . . . . 2 1 1 1 1 1 1 1 2 . . . 
            . . . . 3 3 1 1 1 1 1 3 3 . . . 
            . . . . . 3 3 3 3 3 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            `, ClimbEnemyLeft, 0, 64)
        FireClimbLeft.setKind(SpriteKind.ClimbFire)
    }
    if (CRight) {
        FireClimbRight = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
            . . 1 3 . . . 3 1 3 . . . 3 1 . 
            . . 1 . . . 2 3 1 3 2 . . . 1 . 
            . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
            . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
            . . . . 2 2 1 1 1 1 1 2 2 . . . 
            . . . . 2 1 1 1 1 1 1 1 2 . . . 
            . . . . 3 3 1 1 1 1 1 3 3 . . . 
            . . . . . 3 3 3 3 3 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            `, ClimbEnemyRight, 0, 64)
        FireClimbRight.setKind(SpriteKind.ClimbFire)
    }
    for (let value of sprites.allOfKind(SpriteKind.Climb)) {
        if (Ccenter) {
            FireClimbCenter = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
                . . 1 3 . . . 3 1 3 . . . 3 1 . 
                . . 1 . . . 2 3 1 3 2 . . . 1 . 
                . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
                . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
                . . . . 2 2 1 1 1 1 1 2 2 . . . 
                . . . . 2 1 1 1 1 1 1 1 2 . . . 
                . . . . 3 3 1 1 1 1 1 3 3 . . . 
                . . . . . 3 3 3 3 3 3 3 . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, 100)
            FireClimbCenter.setFlag(SpriteFlag.DestroyOnWall, true)
            FireClimbCenter.setKind(SpriteKind.ClimbFire)
        }
    }
})
game.onUpdateInterval(1500, function () {
    let ishookshotactive = 0
    if (!(ishookshotactive)) {
        for (let value of tiles.getTilesByType(assets.tile`myTile43`)) {
            RockDrop = sprites.create(img`
                f c b d b f c d d c b c b d c f 
                f c b d b f c d d c f c b d c f 
                1 f d d d f b d d d f b d d f d 
                . f c d d f b d d c f c d d f 1 
                . f d d d f b d d c f d b b f . 
                . 1 f b f d c d d d f f d f 1 . 
                . . f b f d f 1 d f . f d f . . 
                . . f b f . f d 1 f . f d f . . 
                . . f f f . f b b f . f f f . . 
                . . . f . . f b b f . . f . . . 
                . . . f . . f f f f . . f . . . 
                . . . f . . . f f . . . f . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.RockDrop)
            tiles.placeOnRandomTile(RockDrop, assets.tile`myTile43`)
            RockDrop.setFlag(SpriteFlag.DestroyOnWall, true)
            RockDrop.vx = 0
            RockDrop.vy = 75
        }
    }
})
forever(function () {
    while (Game_Started == false) {
        music.playMelody("C5 B A G F E D C ", 300)
    }
})
