import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TodoService} from './provider/todo-service';
import {FormsModule} from "@angular/forms";
import { ListComponent } from './components/list/list.component';
import { SendBoxComponent } from './components/send-box/send-box.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SendBoxComponent,
    ControlBarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
