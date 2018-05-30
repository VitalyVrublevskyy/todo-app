import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {TodoItem} from "../../provider/todo-service";

@Component({
  selector: "app-send-box",
  templateUrl: "./send-box.component.html",
  styleUrls: ["./send-box.component.css"]
})
export class SendBoxComponent implements OnInit {
  text: string;

  @Output()
  add: EventEmitter<TodoItem> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onEnterText(value: string) {
    if (value.trim().length) {
      this.add.emit({name: value, completed: false});
    }

    this.text = '';
  }

}
