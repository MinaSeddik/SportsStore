import {Component, HostListener, model} from '@angular/core';

@Component({
  selector: 'app-my-filter2',
  standalone: true,
  imports: [],
  templateUrl: './my-filter2.component.html',
  styleUrl: './my-filter2.component.css'
})
export class MyFilter2Component {

  // @Input("myFilter2") myFilter2: string;
  //
  // @Output("myFilter2Change") myFilter2Change = new EventEmitter<string>();
  //
  // @HostListener('keyup', ['$event'])
  // public onKeyup(event: KeyboardEvent): void {
  //   const value = (event.target as HTMLInputElement).value;
  //   console.log(`event received: ${value}`)
  //   this.myFilter2Change.emit(value);
  // }

  // myFilter2 = model<string>('');
  // myFilter2 = model<string>('', {alias: "filterCriteria"});
  myFilter2 = model.required<string>();
  // myFilter2 = model.required<string>( {alias: "filterCriteria"});

  @HostListener('keyup', ['$event'])
  public onKeyup(event: KeyboardEvent): void {
    const value = (event.target as HTMLInputElement).value;
    console.log(`event received: ${value}`)
    this.myFilter2.set(value);
  }

}
