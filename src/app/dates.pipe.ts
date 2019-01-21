import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dates'
})
export class DatesPipe implements PipeTransform {

  transform(value: any): number {
    const today: Date = new Date();
    const todaywithnodate: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateDiff = Math.abs(value - todaywithnodate);
    const secArray = 85600;

    const dateDiffSec = dateDiff * 0.01;
    const dateCounter = dateDiffSec / secArray;
    if (dateCounter >= 1 && value < todaywithnodate) {
      return dateCounter;

    }    else {
          return 0;
    }

  }

}
