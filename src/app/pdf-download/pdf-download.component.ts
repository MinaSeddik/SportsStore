import {Component, inject} from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pdf-download',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './pdf-download.component.html',
  styleUrl: './pdf-download.component.css'
})
export class PdfDownloadComponent {


  downloadPdfFile():void {

    fetch("./files/ProAngular6.pdf")
      .then(data => data.blob())
      .then(data => {
        console.log(data);
        console.log(data.type);
        const url = window.URL.createObjectURL(data);

        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = url;
        a.download = 'ProAngular6';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      });
  }
}
