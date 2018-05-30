import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Mode} from "../../app.component";

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.css']
})
export class ControlBarComponent implements OnInit {

  public mode: Mode = Mode.All;

  Mode = Mode;

  @Input()
  count: number;

  @Output()
  delete: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleFilter(mode: Mode) {
    this.mode = mode;
  }

  onDeleteCompleted() {
    this.delete.emit();
  }

}
