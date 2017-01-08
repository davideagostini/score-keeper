import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {
  transform(value: Player[]) {
      var copy = value.slice();
      return copy.reverse();
  }
}