import { Component } from '@angular/core';
import { HerotService } from 'src/app/herot.service';
@Component({
  selector: 'app-sigledist',
  templateUrl: './sigledist.component.html',
  styleUrls: ['./sigledist.component.css']
})
export class SigledistComponent {
  disdetails:any
 constructor(private D:HerotService){}
  ngOnInit(){
    let idd:any=localStorage.getItem('id')


    //console.log(idd);
   let arrd= this.D.getData();
   this.disdetails=arrd.filter(e=>e.name===idd)
   //console.log(this.disdetails[0]);
   
   }
}
