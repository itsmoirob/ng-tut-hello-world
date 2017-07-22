import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) return null;
    let returnText: string = '';
    let textArray = value.split(' ');
    textArray.forEach((seg, index) => {
      let word = seg.toLowerCase();
      if (['the', 'of', 'and', 'is'].indexOf(word) > -1 && index !== 0) {
        returnText += `${word} `;
      } else {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        returnText += `${word} `;
      }
    })
    return returnText;
  }

}
