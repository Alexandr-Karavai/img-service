import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(users, value) {
    return users.filter(users => {
      return users.name.includes(value)
    })
  }
}
