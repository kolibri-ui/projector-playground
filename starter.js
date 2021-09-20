import {Controller, TestView} from "./controller.js";
import {loginService} from "./loginService.js";

const service = loginService()
const controller = Controller(service)

TestView(controller, document.getElementById('linktest'))
controller.addLogin()