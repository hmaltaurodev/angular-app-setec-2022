import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonRemoveAllComponent } from './components/todo-button-remove-all/todo-button-remove-all.component';
import { TodoInputAddItemsComponent } from './components/todo-input-add-items/todo-input-add-items.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonRemoveAllComponent,
    TodoInputAddItemsComponent,
    TodoListComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
