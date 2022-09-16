import { SubmittedItem } from './../../model/submitted-item';
import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskItem } from '../../model/task-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  public taskList: Array<TaskItem> = JSON.parse(localStorage.getItem('list') || '[]');
  public task: string = '';
  public index?: number;

  constructor() { }
  ngOnInit(): void { }

  ngDoCheck(): void {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }

  public addItem(submittedItem: SubmittedItem) {
    if (submittedItem) {
      if (submittedItem.index != undefined)
        this.taskList[submittedItem.index].task = submittedItem.task;
      else
        this.taskList.push({
          task: submittedItem.task,
          checked: false
        });
    }

    this.task = '';
    this.index = undefined;
  }

  public removeItem(index: number) {
    this.taskList.splice(index, 1);
  }

  public removeAll() {
    this.taskList = [];
  }

  public editItem(index: number) {
    this.task = this.taskList[index].task;
    this.index = index;
  }
}
