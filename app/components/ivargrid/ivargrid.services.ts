import { Injectable } from '@angular/core';
import {MockData} from './tabledata.mock'


@Injectable()
export class TableService {

  getCols():String[] {
    return MockData.cols;
  }

  getRows():String[][] {
    return MockData.rows;
  }

}
