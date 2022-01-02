/** @type {import("../typings/phaser")} */

import "phaser";
import config from "./config/config";
import WaitingRoom from "./scenes/WaitingRoom";
import MainScene from "./scenes/MainScene";
import TaskScene from "./scenes/TaskScene";

class Game extends Phaser.Game {
    constructor() {
        super(config);
        // Add all the scenes
        // << ADD ALL SCENES HERE >>
        this.scene.add("MainScene", MainScene);
        this.scene.add("WaitingRoom", WaitingRoom);
        this.scene.add("TaskScene", TaskScene);
        // Start the ame with the mainscene
        // << START GAME WITH MAIN SCENE HERE >>
        this.scene.start("MainScene");
    }
}

window.onload = function () {
    window.game = new Game();
};
