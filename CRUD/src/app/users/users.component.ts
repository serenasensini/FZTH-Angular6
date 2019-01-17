import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
      this.users$ = this.data.getUsers();
  }

  delete(id){
    alert(id);
    let remaining = this.data.deleteUser(id);
    console.log(remaining);
    $('#'+id).fadeOut();
  }

  create(){
    let name = $('#name').val();
    let site = $('#website').val();
    let random = Math.floor((Math.random() * 100) + 1);
    let element = "<tr _ngcontent-c2=\"\" id=\""+random+"\"><td _ngcontent-c2=\"\">"+name+"</td><td _ngcontent-c2=\"\">"+site+"</td><td _ngcontent-c2=\"\"><div _ngcontent-c2=\"\" aria-label=\"Basic example\" class=\"btn-group\" role=\"group\"><button _ngcontent-c2=\"\" class=\"btn btn-warning\" type=\"button\">Update</button><button _ngcontent-c2=\"\" class=\"btn btn-danger\" type=\"button\" onclick=\"test()\">Delete</button></div></td></tr>";
    $('tbody').append(element);
    $('#name').val("");
    $('#website').val("");
  }

  update(){

  }

  //NOT WORKING
  search(){
    let value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  }

}
