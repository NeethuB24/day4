import { Component } from '@angular/core';
import { HerotService } from 'src/app/herot.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  
  constructor(private D:HerotService,private R:Router){}
  
 distdatabase=this.D.getData();
 gotodistpage(id:any)
 {
    localStorage.setItem('id',id)
     this.R.navigate(['/sigle'])
 }
}
