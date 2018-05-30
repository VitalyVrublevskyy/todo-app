import {Component, OnInit, ViewChild} from "@angular/core";
import {TodoItem, TodoService} from "./provider/todo-service";
import {ControlBarComponent} from "./components/control-bar/control-bar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(ControlBarComponent)
  controlBar: ControlBarComponent;

  private _collection: TodoItem[];

  get collection(): TodoItem[] {
    if (this.controlBar.mode === Mode.Active) {
      return this._collection.filter(item => !item.completed);
    } else if (this.controlBar.mode === Mode.Completed) {
      return this._collection.filter(item => item.completed);
    }
    return this._collection;
  }


  constructor(public service: TodoService) {
  }

  ngOnInit(): void {
    this._collection = this.service.getTodoItems();
  }


  onAddItem(item: TodoItem) {
    this._collection.push(item);
  }

  get leftItemsCount(): number {
    return this.collection.filter(item => !item.completed).length;
  }


  onDelete(todo: TodoItem) {
    this._collection = this._collection.filter(item => item !== todo);
  }

  onDeleteCompleted() {
    this._collection = this._collection.filter(item => !item.completed);
  }

}


export enum Mode {
  All,
  Active,
  Completed
}
