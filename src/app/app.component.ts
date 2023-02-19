import {ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck{
  title = 'change-detection-strategy';

  constructor() {
    // console.log('App Component - constructor')
  }
  logForRenderChangeDetection() {
    console.log('App Component - starting change detection')
    return true;
  }

  ngDoCheck(): void {
    // console.log('App Component - ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('App Component - ngOnChanges');
  }


  ngOnInit(): void {
    // console.log('App Component - ngOnInit');
  }
}
