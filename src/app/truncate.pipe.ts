import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, setLimit: number) {
    if (value.length > setLimit) {
    return value.substr(0, setLimit) + '...';
  }
    return value;
  }
}
