import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private selectedPattern: string  = "singleton";

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedPattern = params['pattern'];
    });
  }

  ngOnInit(): void {
  }

  public getSelectedPattern(): string {
    return this.selectedPattern;
  }
}
