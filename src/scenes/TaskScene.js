import "phaser";

export default class TaskScene extends Phaser.Scene {
    constructor() {
        super("TaskScene");
    }
    init(data) {
        this.roomKey = data.roomKey;
        this.players = data.players;
        this.numPlayers = data.numPlayers;
        this.socket = data.socket;
    }
    preload() {
        this.load.image("computer", "assets/backgrounds/computer.png");
    }
    create() {
        const scene = this;
        this.add.image(400, 320, "computer");
    }
}