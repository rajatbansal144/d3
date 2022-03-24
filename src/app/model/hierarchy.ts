import {Base} from '../model/base';
export class Hierarchy extends Base {
    Id: number;
    Text: string;
    Abbr: string;
    ParentId: number = 0;
    MenuId:number=0;
    ChartType:number=0;
}

