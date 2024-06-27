import { Component, OnInit } from '@angular/core';
import { BackgroundService } from 'src/app/services/background.service';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {
  backgroundImageUrl: string;

  constructor(private bgImageService: BackgroundService) {}

  ngOnInit() {
    /*setando valor da BackgroundImageUrl com o retorno da função getBackgroundImageUrl*/ 
    this.backgroundImageUrl = this.bgImageService.getBackgroundImageUrl();
  }
}  