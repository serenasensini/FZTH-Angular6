import { Component, OnInit } from '@angular/core';
/* DomSanitizer helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing values to be safe to use in the different DOM contexts.
For example, when binding a URL in an <a [href]="someValue"> hyperlink, someValue will be sanitized so that an attacker cannot inject e.g. a javascript: URL that would execute code on the website.
*/
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fileUrl;
  constructor(private sanitizer: DomSanitizer) {  }
  ngOnInit() {
    //text added to file
    const data = 'some random text';
    //creation of a new file
    //blob stands for Binary Large Object
    const blob = new Blob([data], { type: 'plain/text' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

}
