import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(values: any[], filterString: string): any[] {
    console.log('values', values);
    console.log('filter string', filterString);
    const resultArray: any[] = [];
    /*
        if values are empty return default values,can be useful when user does not select any options
        and we want the default options to kick in(i.e to see all pokemons.
    */
    if (values.length === 0 || filterString === '') {
      console.log('test0');
      return values;
    }
    console.log('test');
    /*
        Matching the property name to a filter string provided by the user.
        This will be used to segregate pokemons based on their types and 
        only those pokemons will be returned whose type was selected by the user.
    */
    values.forEach((value) => {
      if (value.types[0].type.name === filterString) {
        resultArray.push(value);
      }
    });
    // console.log('result arrasy', resultArray);
    if (resultArray.length == 0) {
      return [-1];
    }
    return resultArray;
  }
}
