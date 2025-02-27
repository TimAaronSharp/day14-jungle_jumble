import { AppState } from "../AppState.js";

export class JumblesController{
  constructor(){
    this.drawJumbles()
  }



  drawJumbles(){
    const jumbles = AppState.jumbles
    let jumblesContent = ''
    jumbles.forEach(jumble => jumblesContent += jumble.listTemplate)
    const jumblesListElem = document.getElementById('jumbleList')
    jumblesListElem.innerHTML = jumblesContent
  }
}