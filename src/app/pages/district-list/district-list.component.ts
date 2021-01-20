import { Component, OnInit } from '@angular/core';
import {District} from '../../shared/interfaces';
import {DistrictService} from '../../common/services/district.service';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {
  public districtList: District[] =  [];
  constructor(private districtService: DistrictService) {
    this.setDistrictList();
  }

  ngOnInit(): void {
  }

  private setDistrictList(): void{

    this.districtService.getDistrictList().then(res => {
      if (res.serviceResult && res.serviceResult.success === true){
        this.districtList = res.data;
      }
      else {
        console.log('Error', res);
      }
    });
  }

}
