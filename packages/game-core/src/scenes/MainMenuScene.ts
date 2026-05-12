import Phaser from 'phaser';
import { ELEMENTS } from '../utils/elements';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenuScene' });
  }

  preload(): void {}

  create(): void {
    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 3, 'Выбери стихию:', {
        fontFamily: 'serif',
        fontSize: 48,
        color: '#f4d03f',
        stroke: '#000000',
        strokeThickness: 4,
        shadow: { offsetX: 2, offsetY: 2, color: '#000000', blur: 5, fill: true },
      })
      .setOrigin(0.5);

    ELEMENTS.forEach((el, i) => {
      const text = this.add
        .text(width / 2, height / 2 + i * 60, el, {
          fontFamily: 'sans-serif',
          fontSize: 18,
          color: '#ffffff',
        })
        .setOrigin(0.5)
        .setInteractive();
      text.on('pointerover', () => text.setColor('#f4d03f'));
      text.on('pointerout', () => text.setColor('#ffffff'));
      text.on('pointerdown', () => console.log(`Выбрана стихия: ${el}`));
    });
  }
}
