import { Injectable } from '@angular/core';
import {MockData} from './tabledata.mock';
import {COL} from './tabledata.mock';


@Injectable()
export class TableService {

  getCols():COL[] {
    return MockData.cols;
  }

  getRows():String[][] {
    return MockData.rows;
  }

}
