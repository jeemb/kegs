import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: Keg[], desiredType) {
    var output: Keg[] = [];
    if (desiredType === 'amber') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'amber') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === 'shitty') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'shitty') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === 'ipa') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'ipa') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === 'kombucha') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'kombucha') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredType === 'stout') {
      for(var i=0;i<input.length;i++) {
        if(input[i].type === 'stout') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
