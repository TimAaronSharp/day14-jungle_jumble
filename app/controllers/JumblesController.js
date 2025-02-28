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

  drawJumbleDescription() {

    const activeJumble = AppState.activeJumble
    const activeJumbleDifficulty = activeJumble.difficulty
    const activeJumbleBody = activeJumble.body

    const jumbleDifficultyElem = document.getElementById('jumbleDifficulty')
    const jumbleBodyElem = document.getElementById('jumbleBody')

    jumbleDifficultyElem.innerHTML = activeJumbleDifficulty
    jumbleBodyElem.innerHTML = activeJumbleBody
  }

  setActiveJumble(activeJumbleId) {
    jumblesService.setActiveJumble(activeJumbleId)
  }
}


// const jumbles = AppState.jumbles
// let jumbleDifficultyContent = ''
// let jumbleBodyContent = ''

// const jumbleDescription = jumbles.find(jumble => jumble.id == jumbleId)

// jumbleDifficultyContent += jumbleDescription.difficulty
// jumbleBodyContent += jumbleDescription.body

// const jumbleDifficultyElem = document.getElementById('jumbleDifficulty')
// jumbleDifficultyElem.innerHTML = jumbleDifficultyContent
// console.log(`Jumble Difficulty is ${jumbleDescription.difficulty}`);


// const jumbleBodyElem = document.getElementById('jumbleBody')
// jumbleBodyElem.innerHTML = jumbleBodyContent
// console.log(`Jumble Body is ${jumbleDescription.body}`);