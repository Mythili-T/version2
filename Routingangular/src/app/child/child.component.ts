import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    getExample:any;
    searchFor:any;
    finalData:any;
      constructor(private service:ProductService, private route:ActivatedRoute) {
        this.service.getDetails().subscribe(value=>{
        this.getExample=value;
        this.route.params.subscribe(pdata=>{
          this.searchFor=pdata['check'];
          for(let exa of this.getExample){
            if(exa.title==this.searchFor){
              this.finalData=exa;
              break;
            }
          }
        })
        })
      }

}
