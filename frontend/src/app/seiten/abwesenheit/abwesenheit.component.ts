import { Component, OnInit } from '@angular/core';
import { Urlaub } from 'src/app/models/urlaub';
import {UrlaubService} from "../../shared/urlaub.service";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-abwesenheit',
  templateUrl: './abwesenheit.component.html',
  styleUrls: ['./abwesenheit.component.css']
})
export class AbwesenheitComponent implements OnInit {
urlaub!: Urlaub[] | any;


  constructor(private us: UrlaubService) { }

  ngOnInit(): void {
    this.us.getValues()
      .subscribe(value => {
        this.urlaub = value;
      });
  }

}
