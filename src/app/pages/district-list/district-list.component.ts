import { Component, OnInit, ViewChild } from '@angular/core';
import {District} from '../../shared/interfaces';
import {DistrictService} from '../../common/services/district.service';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {
  public districtList: District[] = [];
  public deletedDistrictList: District[] = [];
  public numberOfDistrict = 0;
  public deletedNumberOfDistrict = 0;

  constructor(private districtService: DistrictService) {
    this.setDistrictList();
  }

  ngOnInit(): void {
  }

  private setDistrictList(): void{

    this.districtService.getDistrictList().then(res => {
      if (res.serviceResult && res.serviceResult.success){
        this.districtList = this.getRectifiedDistrict(res.data);
        this.setNumberOfDistrict(this.districtList);
      }
      else {
        console.error('Error', res);
      }
    });
  }

  // get rectified districts
  private getRectifiedDistrict(districtList: District[]): District[] {
    for (const dist of districtList) {
      dist.density = Math.floor(dist.population / dist.areaSqKm);
    }
    return districtList;
  }

  // get number of districts
  private setNumberOfDistrict(arr: District[]): void {
    this.numberOfDistrict = arr.length;
  }

  // re count number of district
  public reCount(event: number): void {
    this.numberOfDistrict = this.districtList.length;
    this.deletedDistrictList.push(this.districtList[event]);
    this.deletedNumberOfDistrict = this.deletedDistrictList.length;
  }
}
