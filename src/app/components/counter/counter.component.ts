import { Component, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy,
 DoCheck, AfterContentInit,AfterContentChecked {
  public counter: number = 0;
  public form: any = {
    email:''
  };
  constructor() { }

  ngOnInit() {
    console.log('OnInit');
  }
  ngDoCheck() {
    console.log('DoCheck',this.counter);
  }
  ngAfterContentInit() {
    console.log('AfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(){
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('AfterViewChecked');
  }
  increment(): void {
    this.counter++
  }
  decrement(): void {
    this.counter--
  }
  ngOnDestroy() {
    console.log('onDestroy');
  }
}
