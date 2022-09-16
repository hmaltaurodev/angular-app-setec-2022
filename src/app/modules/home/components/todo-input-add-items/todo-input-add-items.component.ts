import { SubmittedItem } from './../../model/submitted-item';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent implements OnInit, OnChanges {

  public buttonName: string = 'Add';
  @Output() public emitItem = new EventEmitter();
  @Input() public task: string = '';
  @Input() public index?: number;

  constructor() { }
  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.index != undefined)
      this.buttonName = 'Update';
  }

  public submitItem() {
    if (this.task.trim()) {
      const submittedItem: SubmittedItem = {
        task: this.task,
        index: this.index
      };

      this.emitItem.emit(submittedItem);
    }

    this.reset();
  }

  public reset() {
    this.task = '';
    this.index = undefined;
    this.buttonName = 'Add';
    this.emitItem.emit(undefined);
  }
}
