import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AppSnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, duration: number = 3000, position: 'top' | 'bottom' = 'top', closeIcon: string = 'x') {
    let config = new MatSnackBarConfig();
    config.duration = duration;
    config.verticalPosition = position;
    this.snackBar.open(message, closeIcon, config);
  }
}
