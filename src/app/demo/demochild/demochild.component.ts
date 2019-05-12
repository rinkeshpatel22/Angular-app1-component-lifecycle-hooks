import { Component, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demochild',
  templateUrl: './demochild.component.html',
  styleUrls: ['./demochild.component.css']
})
export class DemochildComponent implements DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  logCount = 1;
  componentPropertyValue = "Initial value";

  test(){
    console.log("test");
  }
  ngOnInit() {
    console.log(this.logCount + ' OnInit');
    this.logCount++;
  }

  ngDoCheck(){
    console.log(this.logCount + ' DoCheck');
    this.logCount++;
  }

  ngAfterContentInit(){
    console.log(this.logCount + ' AfterContentInit');
    this.logCount++;
  }

  ngAfterContentChecked(){
    console.log(this.logCount + ' AfterContentChecked');
    this.logCount++;
  }

  ngAfterViewInit(){
    console.log(this.logCount + ' AfterViewInit');
    this.logCount++;
  }

  ngAfterViewChecked(){
    console.log(this.logCount + ' AfterViewChecked');
    this.logCount++;
  }

  ngOnDestroy(){
    console.log(this.logCount + ' OnDestroy');
    this.logCount++;
  }

  updateValue(): void{
    this.componentPropertyValue = "value updated";
  }

}
