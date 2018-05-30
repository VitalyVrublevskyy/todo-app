import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {TodoItem} from "../../provider/todo-service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  collection: TodoItem[];

  @Output()
  delete: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit() {
  }

  toggleClick(item: TodoItem) {
    item.completed = !item.completed;
  }

  onDelete(todo: TodoItem) {
    this.delete.emit(todo);
  }
}
