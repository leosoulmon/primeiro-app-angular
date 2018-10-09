import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'Leosoulmon';
    this.age = 25;
    this.email = 'leosouzamonteiro123@gmail.com';
    this.address = {
      street:'Doutor Arnaldo de Carvalho Street',
      city:'Santos',
      state:'SP'
    }
    this.hobbies = ['Filmes', 'Videogame', 'Learn new things'];
    
    this.dataService.getPosts().subscribe((posts)=>{
      //console.log(posts);
      this.posts = posts;
    });
  }
  onClick(){
    this.name = 'Leo';
    this.hobbies.push('Learn angular');
  }
  addHobby(hobbyName){
    console.log(hobbyName);
    this.hobbies.unshift(hobbyName);
    return false;
  }
  deleteHobby(hobby){
    for(let i = 0;i < this.hobbies.length;i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId:number
}