import { Component } from '@angular/core';
import AirDatepicker from 'air-datepicker';
import localeEs from 'air-datepicker/locale/es';
import 'air-datepicker/air-datepicker.css';



@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  
public constructor() {
  
}

calendar() {
   let dp = new AirDatepicker('#input', {
      locale: localeEs
  });
  dp.show
  }
  
}