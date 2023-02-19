import {ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges,DoCheck {

  @Input() test = ''
  constructor() {
    // console.log('Home Component - constructor')
  }
  ngDoCheck(): void {
    // console.log('Home Component - ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Home Component - ngOnChanges');
  }

  ngOnInit(): void {
    // console.log('Home Component - ngOnInit');
  }
  logForRenderChangeDetection() {
    console.log('Home Component - starting change detection')
    return true;
  }

}
