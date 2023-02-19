import {ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-component-two-child',
  templateUrl: './component-two-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./component-two-child.component.css']
})
export class ComponentTwoChildComponent implements OnInit,OnChanges,DoCheck {


  count = 0;

  increase() {
    this.count++;
  }


  constructor() {
    // console.log('Component Two Child - constructor')
  }
  logForRenderChangeDetection() {
    console.log('Component Two Child Component - starting change detection')
    return true;
  }

  ngDoCheck(): void {
    // console.log('Component Two Child Component - ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Component Two Child Component - ngOnChanges');
  }

  ngOnInit(): void {
    // console.log('Component Two Child Component - ngOnInit');
  }
}
