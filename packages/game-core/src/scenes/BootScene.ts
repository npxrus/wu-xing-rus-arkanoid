import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload(): void {}

  create(): void {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2, 'Царство Пяти Начал', {
        fontFamily: 'serif',
        fontSize: 48,
        color: '#f4d03f',
        stroke: '#000000',
        strokeThickness: 4,
        shadow: { offsetX: 2, offsetY: 2, color: '#000000', blur: 5, fill: true },
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height - 40, 'Нажми любую клавишу для продолжения', {
        fontFamily: 'sans-serif',
        fontSize: 18,
        color: '#aaaaaa',
      })
      .setOrigin(0.5);

    this.input.keyboard?.on('keydown', () => {
      this.scene.start('MainMenuScene');
    });
  }

  update(): void {}
}
