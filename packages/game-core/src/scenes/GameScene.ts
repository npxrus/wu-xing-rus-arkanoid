import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  private paddle!: Phaser.Physics.Arcade.Image;
  private ball!: Phaser.Physics.Arcade.Image;
  private bricks!: Phaser.Physics.Arcade.StaticGroup;
  private score: number = 0;
  private scoreText: Phaser.GameObjects.Text;

  constructor() {
    super({ key: 'GameScene' });
  }

  create(): void {
    const { width, height } = this.scale;

    // Генерация текстур
    if (!this.textures.exists('paddle')) {
      const gfx = this.add.graphics();
      gfx.fillStyle(0xcccccc);
      gfx.fillRect(0, 0, 120, 20);
      gfx.generateTexture('paddle', 120, 20);
      gfx.destroy();
    }
    if (!this.textures.exists('ball')) {
      const gfx = this.add.graphics();
      gfx.fillStyle(0xff6600);
      gfx.fillCircle(16, 16, 8);
      gfx.generateTexture('ball', 32, 32);
      gfx.destroy();
    }

    // Стены (невидимые статические тела)
    const wallThickness = 20;
    const leftWall = this.physics.add.staticBody(0, wallThickness, wallThickness, height);
    const rightWall = this.physics.add.staticBody(width, wallThickness, wallThickness, height);
    const topWall = this.physics.add.staticBody(0, 0, width, wallThickness);

    // Платформа
    this.paddle = this.physics.add
      .image(width / 2, height - 40, 'paddle')
      .setImmovable(true)
      .setDisplaySize(120, 20);
    this.paddle.body!.allowGravity = false;

    // Мяч
    this.ball = this.physics.add
      .image(width / 2, height / 2, 'ball')
      .setCircle(8) // коллайдер-круг радиусом 8
      .setDisplaySize(16, 16);
    this.ball.body!.allowGravity = false;
    this.ball.setBounce(1);
    this.ball.setCollideWorldBounds(false);

    // Начальная скорость
    this.ball.setVelocity(Phaser.Math.Between(-200, 200), 300);

    // Блоки
    this.bricks = this.physics.add.staticGroup();
    const brickWidth = 60;
    const brickHeight = 30;
    const cols = Math.floor(width / brickWidth);
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < cols; col++) {
        const x = brickWidth / 2 + col * brickWidth;
        const y = 100 + row * 30;
        const brick = this.add.rectangle(x, y, brickWidth - 4, brickHeight - 4, 0xff0000).setStrokeStyle(1, 0x000000);
        this.bricks.add(brick);
        brick.setFillStyle(Phaser.Display.Color.GetColor(255, 50 + col * 20, 50));
      }
    }

    this.scoreText = this.add
      .text(width - 120, wallThickness, `Счёт: ${this.score}`, {
        fontFamily: 'monospace',
        fontSize: 24,
        fontStyle: 'bold',
        color: '#ffd700',
      })
      .setOrigin(0.5);

    // Коллизии
    this.physics.add.collider(this.ball, leftWall);
    this.physics.add.collider(this.ball, rightWall);
    this.physics.add.collider(this.ball, topWall);
    this.physics.add.collider(this.ball, this.paddle, this.hitPaddle as any, undefined, this);
    this.physics.add.collider(this.ball, this.bricks, this.hitBrick as any, undefined, this);

    // Управление мышью
    this.input.on('pointermove', (pointer: Phaser.Input.Pointer) => {
      this.paddle.x = Phaser.Math.Clamp(pointer.x, 60, width - 60);
    });
  }

  private hitPaddle(ball: any, paddle: any): void {
    // Изменяем угол в зависимости от места касания
    const diff = ball.x - paddle.x;
    const maxAngle = 60; // градусов
    const angle = Phaser.Math.Clamp((diff / (paddle.displayWidth / 2)) * maxAngle, -maxAngle, maxAngle);
    const speed = 400;
    const radians = Phaser.Math.DegToRad(angle);
    ball.setVelocity(speed * Math.sin(radians), -speed * Math.cos(radians));
  }

  private hitBrick(ball: any, brick: any): void {
    brick.destroy(); // удаляем блок
    this.score++;
    this.scoreText.setText(`Счёт: ${this.score}`);
  }

  update(): void {
    // Проверка падения мяча
    if (this.ball.y > this.scale.height + 20) {
      // Сброс мяча
      this.ball.setPosition(this.scale.width / 2, this.scale.height / 2);
      this.ball.setVelocity(Phaser.Math.Between(-200, 200), 300);
    }
  }
}
