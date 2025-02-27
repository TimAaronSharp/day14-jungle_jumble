import { generateId } from "../utils/GenerateId.js";

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
    this.difficulty = data.difficulty
  }







  get listTemplate() {
    return `
  <div class="d-flex justify-content-around">
    <button onclick="app.jumblesController.setActiveJumble('${this.id}')" class="btn btn-warning text-light me-3 mb-2" type="button">Start</button><span>${this.difficulty}</span><span>34</span><span>55</span>
  </div>
  `
  }





}