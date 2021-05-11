import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseNameFilter'
})
export class CourseNameFilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propertyName: string): any {
    if(value.length === 0 || filterString === '' || filterString === undefined){
    return value
    }
    let filteredArray = [];


    for(let item of value){
      console.log(item[propertyName]);
        if(item[propertyName].toLowerCase().indexOf(filterString.toLowerCase()) > -1){

            filteredArray.push(item)
        }
    }
    return filteredArray;
}
}
