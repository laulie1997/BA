import { Component, OnInit } from '@angular/core';
import {ZeiterfassungService} from "../../shared/zeiterfassung.service";
import { Arbeitszeit } from 'src/app/models/arbeitszeit';
import * as XLSX from 'xlsx';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {RoleService} from "../../shared/role.service";
import {Observable} from "rxjs";
// @ts-ignore
import {User} from '../models/user';


@Component({
  selector: 'app-teamzeiten',
  templateUrl: './teamzeiten.component.html',
  styleUrls: ['./teamzeiten.component.css']
})
export class TeamzeitenComponent implements OnInit {
 arbeitszeit!: Arbeitszeit[] | any;
  fileName= 'ExcelSheet.xlsx';
  datum: string |any;
  astart!: string;
  aende!: string;
  pstart!: string;
  pende!: string;
  taetigkeiten!: string;
  projekt!: string;
  user_name!: string;
  user!: Observable<User[]>;

  constructor(private zs: ZeiterfassungService,
             private afs: AngularFirestore ) {

  }

  ngOnInit(): void {
this.zs.getValues()
      .subscribe( val => {
        this.arbeitszeit = val;
      });
    let buchhalter = this.afs.collection('buchhalter').valueChanges();
    console.log(JSON.stringify(buchhalter));
  }
  exportExcel(): void{
    let elements = document.getElementById('excel-table');
    const worksheet: XLSX.WorkSheet =XLSX.utils.table_to_sheet(elements);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Arbeitszeiten');
    XLSX.writeFile(workbook, this.fileName);
  }

  searchDate(){
    if( this.datum ==""){
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.arbeitszeit = this.arbeitszeit.filter(res =>{
        return res.datum.toLocaleLowerCase().match(this.datum.toLocaleLowerCase());
      });
    }
  }
  searchStart(){
    if( this.astart ==""){
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.arbeitszeit = this.arbeitszeit.filter(res =>{
        return res.astart.toLocaleLowerCase().match(this.astart.toLocaleLowerCase());
      });
    }
  }
  searchEnd(){
    if( this.aende ==""){
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.arbeitszeit = this.arbeitszeit.filter(res =>{
        return res.aende.toLocaleLowerCase().match(this.aende.toLocaleLowerCase());
      });
    }
  }
  searchPEnd(){
    if( this.pende ==""){
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.arbeitszeit = this.arbeitszeit.filter(res =>{
        return res.pende.toLocaleLowerCase().match(this.pende.toLocaleLowerCase());
      });
    }
  }
  searchPStart(){
    if( this.pstart ==""){
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.arbeitszeit = this.arbeitszeit.filter(res =>{
        return res.pstart.toLocaleLowerCase().match(this.pstart.toLocaleLowerCase());
      });
    }
  }
  searchProject(){
    if( this.projekt ==""){
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.arbeitszeit = this.arbeitszeit.filter(res =>{
        return res.projekt.toLocaleLowerCase().match(this.projekt.toLocaleLowerCase());
      });
    }
  }
  searchTaetigkeit(){
    if( this.taetigkeiten ==""){
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.arbeitszeit = this.arbeitszeit.filter(res =>{
        return res.taetigkeiten.toLocaleLowerCase().match(this.taetigkeiten.toLocaleLowerCase());
      });
    }
  }

  searchName(){
    if( this.user_name ==""){
      this.ngOnInit();
    } else {
      // @ts-ignore
      this.arbeitszeit = this.arbeitszeit.filter(res =>{
      return res.user_name.toLocaleLowerCase().match(this.user_name.toLocaleLowerCase());
      });
    }
  }



}
