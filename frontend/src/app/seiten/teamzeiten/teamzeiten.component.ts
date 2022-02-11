import { Component, OnInit } from '@angular/core';
import {ZeiterfassungService} from "../../shared/zeiterfassung.service";
import { Arbeitszeit } from 'src/app/models/arbeitszeit';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-teamzeiten',
  templateUrl: './teamzeiten.component.html',
  styleUrls: ['./teamzeiten.component.css']
})
export class TeamzeitenComponent implements OnInit {
 arbeitszeit!: Arbeitszeit[] | any;
  fileName= 'ExcelSheet.xlsx';
  constructor(private zs: ZeiterfassungService) { }

  ngOnInit(): void {
this.zs.getValues()
      .subscribe( val => {
        this.arbeitszeit = val;
      });
  }
  exportexcel(): void
  {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}
