import { AppState } from "../AppState.js"

class JumblesService {
  setActiveJumble(activeJumbleId) {
    const jumbles = AppState.jumbles
    const currentActiveJumble = jumbles.find(jumble => jumble.id == activeJumbleId)

    AppState.activeJumble = currentActiveJumble
    console.log(`The active jumble is ${currentActiveJumble.id}`);
  }

}

export const jumblesService = new JumblesService()