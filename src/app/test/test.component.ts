import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { REMOVE_ALL_TODOS } from '../actions';
import { IAppState } from '../store';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @select() todos;
  @select() lastUpdate;
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {
  }
  clearTodos() {
    this.ngRedux.dispatch({type: REMOVE_ALL_TODOS});
  }
}
