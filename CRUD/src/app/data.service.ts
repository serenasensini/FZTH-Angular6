import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  arr = [
    {id: 1, name: 'Mark', website: 'hello.com'},
    {id: 2, name: 'Luke', website: 'hello.com'},
    {id: 3, name: 'John', website: 'hello.com'},
    {id: 4, name: 'Doe ',  website: 'hello.com'},
  ];

  getUsers() {
    return this.arr
  }

  deleteUser(id) {
    var filtered = this.arr.filter(function(item) {
      return item.id !== id;
    });
    return filtered;
  }
}
