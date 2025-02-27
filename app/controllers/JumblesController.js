import { AppState } from "../AppState.js";
import { jumblesService } from "../services/JumblesService.js";

export class JumblesController {
  constructor() {
    this.drawJumbles()
  }



  drawJumbles() {
    const jumbles = AppState.jumbles
    let jumblesContent = ''
    jumbles.forEach(jumble => jumblesContent += jumble.listTemplate)
    const jumblesListElem = document.getElementById('jumbleList')
    jumblesListElem.innerHTML = jumblesContent
  }

  drawJumbleDescription(jumbleId) {
    const jumbles = AppState.jumbles
    let descriptionContent = ''

    const jumbleDescription = jumbles.find(jumble => jumble.id == jumbleId)

    descriptionContent += jumbleDescription.difficulty
    descriptionContent += jumbleDescription.body
    const jumbleDescriptionElem = document.getElementById('jumbleDescription')

    jumbleDescriptionElem.innerHTML = descriptionContent

  }

  setActiveJumble(activeJumbleId) {
    jumblesService.setActiveJumble(activeJumbleId)
  }
}