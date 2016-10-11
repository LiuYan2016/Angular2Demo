import {Component, View} from "angular2/core";

@Component({
   selector: 'app'
})

@View({
  template: '<h2>Welcome to {{name}}</h2>'
})

export class App {
    name: "TutorialsPoint!!!"
}