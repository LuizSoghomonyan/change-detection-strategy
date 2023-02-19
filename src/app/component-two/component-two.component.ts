import {ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit,OnChanges,DoCheck {


  constructor() {
    // console.log('Two Component - constructor')
  }
  logForRenderChangeDetection() {
    console.log('Two Component - starting change detection')
    return true;
  }

  ngDoCheck(): void {
    // console.log('Two Component - ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Two Component - ngOnChanges');
  }

  ngOnInit(): void {
    // console.log('Two Component - ngOnInit');
  }

}
