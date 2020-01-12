import { Component, OnInit } from '@angular/core';
import { EchoService  } from './echo-service.service';
import { Items } from '../model/Items';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    index=1;                 //Static variable for pagination
   _itemsArray: Items[];            // Array that we will fill with items to display


   dropdt : any; 
   pickdt : any;
   Datedifference : any;
                           // Function to calculate days difference
    Getdays(date): any {
        var dropdt = new Date().getTime();
        var pickdt = new Date(date).getTime();
        var Datedifference = Math.floor((dropdt - pickdt)/ (24 * 3600 * 1000) );
        return(Datedifference);
        }


                           // Function to display next page of the Json file provided by Github api
    LoadMore(): void {
     this.index++;
    this.getItems(this.index);
    }    
                           // Function to display the previous page
    LoadLess(): void {
    if (this.index > 1) {
    this.index--;
    this.getItems(this.index);}
    else {
    this.getItems(1);}
    }  


                           // Function to get back to the top of the page  
    topFunction(): void{
  document.body.scrollTop = 0; // for chrome users 
  document.documentElement.scrollTop = 0; // for Opera users
}

                           // Function to call getItems method from services
   constructor(private EchoService: EchoService) {}

    getItems(index) : void {
         this.EchoService.getItems(index)
             .subscribe(
                 resultArray => this._itemsArray = resultArray,
                 error => console.log("Error :: " + error)
             )
     }

   public ngOnInit(): void {
       this.getItems(this.index);

   }







}