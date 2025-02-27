import { JumblesController } from "./controllers/JumblesController.js"


class App {

 jumblesController = new JumblesController()
}

window['app'] = new App()


