import {ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit,OnChanges,DoCheck {


  constructor() {
    // console.log('One Component - constructor')
  }
  logForRenderChangeDetection() {
    console.log('One Component - starting change detection')
    return true;
  }

  ngDoCheck(): void {
    // console.log('One Component - ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('One Component - ngOnChanges');
  }

  ngOnInit(): void {
    // console.log('One Component - ngOnInit');
  }
}
