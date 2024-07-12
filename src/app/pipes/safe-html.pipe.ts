import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Pipe({
  name: 'safeHtml',
  standalone: true
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {}

  transform(value: string, ...args: unknown[]): string {
    console.log(this.sanitized.bypassSecurityTrustHtml(value))
    return <string>this.sanitized.bypassSecurityTrustHtml(value);
  }


}
