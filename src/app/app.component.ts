import {Component, OnInit} from '@angular/core';
import {TodoItem, TodoService} from "./provider/todo-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private _collection: TodoItem[];

  get collection(): TodoItem[] {
    if (this.mode === Mode.Active) {
      return this._collection.filter(item => !item.completed);
    } else if (this.mode === Mode.Completed) {
      return this._collection.filter(item => item.completed);
    }
    return this._collection;
  }

  text: string;

  mode: Mode = Mode.All;

  Mode = Mode;

  constructor(public service: TodoService) {
  }

  ngOnInit(): void {
    this._collection = this.service.getTodoItems();
  }

  get leftItemsCount(): number {
    return this.collection.filter(item => !item.completed).length;
  }

  toggleClick(item: TodoItem) {
    item.completed = !item.completed;
  }

  onEnterText(value: string) {
    if (value.trim().length) {
      this.collection.push({name: value, completed: false});
    }

    this.text = '';
  }

  onDelete(todo: TodoItem) {
    this._collection = this._collection.filter(item => item !== todo);
  }

  onDeleteCompleted() {
    this._collection = this._collection.filter(item => !item.completed);
  }

  handleFilter(mode: Mode) {
    this.mode = mode;
  }

}


export enum Mode {
  All,
  Active,
  Completed
}
