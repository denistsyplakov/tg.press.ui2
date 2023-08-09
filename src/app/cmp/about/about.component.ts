import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  private aboutInfo: AboutInfo | null = null;

  get about(): AboutInfo {
    return <AboutInfo>this.aboutInfo;
  }

  get aboutLoaded(): boolean {
    return this.aboutInfo != null;
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<AboutInfo>(`/api/about`)
      .subscribe(value => {
        this.aboutInfo = value;
        console.log(this.about);
      })

  }

}

interface AboutInfo {
  counts: { [id: string]: number }
}
