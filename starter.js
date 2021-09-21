import {Controller, PlaygroundView} from "./controller/controller.js";
import {playgroundService} from "./service/service.js";

const service = playgroundService()
const controller = Controller(service)

PlaygroundView(controller, document.getElementById('linktest'))
controller.addPlayground()