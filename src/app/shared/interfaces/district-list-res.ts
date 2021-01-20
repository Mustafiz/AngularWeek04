import {ServiceResult} from './service-result';
import {District} from './district';

export interface DistrictListRes {
  serviceResult: ServiceResult;
  data: District[];
}
