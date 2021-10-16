import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() onSubmitUsername: EventEmitter<any> = new EventEmitter();
  search: string;

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    if(!this.search){
      alert("You Must add a Username")
    }
    const username = this.search
    
     //emit the new quote
     this.onSubmitUsername.emit(username);

     //clear the form inputs
    this.search = ""
    console.log(username)

  }

}
