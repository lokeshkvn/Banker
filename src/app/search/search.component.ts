import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service';
import {Router} from '@angular/router';
import { CoolLocalStorage } from 'angular2-cool-storage';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[GithubService]
})
export class SearchComponent implements OnInit {

  constructor(localStorage: CoolLocalStorage,private router: Router,private githubService: GithubService) {
    this.localStorage=localStorage;
   }

 public searchText;
 public searchResult;
 public searchCount;
 localStorage: CoolLocalStorage;
 
 

  ngOnInit() {
  }

showUserDetails(user){
this.router.navigate(['user',user.login])
}
  onKeyup(event){
    this.searchText = event.target.value;
  }

  getUsers(){
    this.githubService.getUser(this.searchText).subscribe(
      res =>{
        this.searchResult =res;
        this.searchCount =res.total_count;
      }
    );
  }
}
