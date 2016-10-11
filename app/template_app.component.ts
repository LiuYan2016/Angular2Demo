import {Component, View} from "angular2/core";

@Component({
   selector: 'my-app'
})

@View({
  template: '<h2>Welcome to the world of {{val}}</h2>'
})

export class MyTemplate {
    val: "TutorialsPoint!!!"
}