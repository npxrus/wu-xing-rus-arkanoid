import Phaser from "phaser";

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super({key: 'MainMenuScene'});
  }

  preload(): void {}

  create(): void {
    const {width, height} = this.scale;

    this.add.text(width / 2, height / 2, 'Выбери стихию:', {
      fontFamily: 'serif',
      fontSize: 48,
      color: '#f4d03f',
      stroke: '#000000',
      strokeThickness: 4,
      shadow: {offsetX: 2, offsetY: 2, color: '#000000', blur: 5, fill: true},
    }).setOrigin(0.5);

    this.add.text(width / 2, height - 200, 'Дерево', {
      fontFamily: 'sans-serif',
      fontSize: 18,
      color: '#aaaaaa'
    }).setOrigin(0.5);

    this.add.text(width / 2, height - 180, 'Огонь', {
      fontFamily: 'sans-serif',
      fontSize: 18,
      color: '#aaaaaa'
    }).setOrigin(0.5);

    this.add.text(width / 2, height - 160, 'Земля', {
      fontFamily: 'sans-serif',
      fontSize: 18,
      color: '#aaaaaa'
    }).setOrigin(0.5);

    this.add.text(width / 2, height - 140, 'Металл', {
      fontFamily: 'sans-serif',
      fontSize: 18,
      color: '#aaaaaa'
    }).setOrigin(0.5);

    this.add.text(width / 2, height - 120, 'Вода', {
      fontFamily: 'sans-serif',
      fontSize: 18,
      color: '#aaaaaa'
    }).setOrigin(0.5);
  }
}