import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  getBackgroundImageUrl(): string {
    return 'assets/background.jpg';
  }

}
