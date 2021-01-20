import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {environment} from '../../../environments/environment';
import {DistrictListRes} from '../../shared/interfaces';

@Injectable()
export class DistrictService{
  constructor(private httpService: HttpService) {

  }

  public getDistrictList(): Promise<DistrictListRes> {
    const url = environment.url.getDistrictList;
    return this.httpService.get(url);
  }
}
