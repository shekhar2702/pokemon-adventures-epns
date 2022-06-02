import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], args: any[]): any {
    const sortField = args[0];
    const sortFlag = args[1];
    let sortDirection = 1;
    if (sortFlag) {
      sortDirection = -1;
    }
    console.log('sort field', sortField);
    console.log('sort direction', sortDirection);
    if (sortField == 'height') {
      value.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) return -1 * sortDirection;
        else if (a[sortField] > b[sortField]) return 1 * sortDirection;
        else return 0;
      });
    } else if (sortField == 'power') {
      value.sort((a: any, b: any) => {
        if (a.stats[1].base_stat < b.stats[1].base_stat)
          return -1 * sortDirection;
        else if (a.stats[1].base_stat > b.stats[1].base_stat)
          return 1 * sortDirection;
        else return 0;
      });
    } else if (sortField == 'speed') {
      value.sort((a: any, b: any) => {
        if (a.stats[5].base_stat < b.stats[5].base_stat)
          return -1 * sortDirection;
        else if (a.stats[5].base_stat > b.stats[5].base_stat)
          return 1 * sortDirection;
        else return 0;
      });
    } else if (sortField == 'defence') {
      value.sort((a: any, b: any) => {
        if (a.stats[2].base_stat < b.stats[2].base_stat)
          return -1 * sortDirection;
        else if (a.stats[2].base_stat > b.stats[2].base_stat)
          return 1 * sortDirection;
        else return 0;
      });
    }
    return value;
  }
}
