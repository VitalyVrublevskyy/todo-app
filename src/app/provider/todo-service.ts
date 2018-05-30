import {Injectable} from "@angular/core";

@Injectable()
export class TodoService {

  getTodoItems(): TodoItem[] {
    return [
      {name: 'Go To work', completed: false},
      {name: 'Read some interesting book', completed: true},
      {name: 'Watch TV', completed: false},
      {name: 'Study Angular 6', completed: false}
    ];
  }
}

export interface TodoItem {
  name: string;
  completed: boolean;
}
