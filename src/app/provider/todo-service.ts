import {Injectable} from "@angular/core";

@Injectable()
export class TodoService {

  getTodoItems(): TodoItem[] {
    return [
      {name: 'Study Angular 6', completed: false},
      {name: 'Read some interesting book', completed: true},
      {name: 'Watch TV', completed: true},
    ];
  }
}

export interface TodoItem {
  name: string;
  completed: boolean;
}
