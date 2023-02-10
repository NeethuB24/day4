import { Injectable } from '@angular/core';
import { distdatabase} from 'src/assets/data/data';
@Injectable({
  providedIn: 'root'
})
export class HerotService {

  constructor() { }
  getData(){
    return distdatabase
  }
}
