import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {GithubService} from '../github/github.service'
import { CoolLocalStorage } from 'angular2-cool-storage';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[GithubService]
})
export class UserComponent implements OnInit {
  public user;
  localStorage: CoolLocalStorage;

  constructor(localStorage: CoolLocalStorage,private githubService:GithubService ,private activeRoute:ActivatedRoute) {
    this.localStorage = localStorage;   
   }

  ngOnInit() {
    const userId = this.activeRoute.snapshot.params['userId'];
    this.githubService.getUSerDetail(userId).subscribe(
      res=>{
         this.user=res;
         console.log(this.user)
         if(localStorage.getItem('list')==null){
           const list = [];
           list.push(res);
           this.localStorage.setItem('list', JSON.stringify(list));
         }
         else{
           const list = JSON.parse(this.localStorage.getItem('list'));
           list.push(res);
           this.localStorage.setItem('list', JSON.stringify(list));
         }
         console.log(localStorage.getItem('list'))
      }
    )
  }



}
