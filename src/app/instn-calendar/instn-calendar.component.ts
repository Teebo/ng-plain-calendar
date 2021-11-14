import { Component, OnInit, Output, EventEmitter } from '@angular/core';
const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'instn-calendar',
  templateUrl: './instn-calendar.component.html',
  styleUrls: ['./instn-calendar.component.scss']
})
export class InstnCalendarComponent implements OnInit {
  dates: Array<Date> = [];
  days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  date = new Date();
  @Output() selected = new EventEmitter();

  constructor() {
    this.dates = this.getCalendarDays(this.date);
  }

  setMonth(inc: number) {
    const [year, month] = [this.date.getFullYear(), this.date.getMonth()];
    this.date = new Date(year, month + inc, 1);
    this.dates = this.getCalendarDays(this.date);
  }

  isSameMonth(date: { getMonth: () => number; }) {
    return date.getMonth() === this.date.getMonth();
  }


  private getCalendarDays(date = new Date) {
    const calendarStartDate = this.getCalendarStartDay(date);
    const calendarStartTime = calendarStartDate ?  calendarStartDate.getTime() : 0;

    return this.range(0, 41)
    .map(num => new Date(calendarStartTime + DAY_MS * num));
  }

  private getCalendarStartDay(date = new Date()) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();

    return this.range(1,7)
      .map(num => new Date(firstDayOfMonth - DAY_MS * num))
      .find(dt => dt.getDay() === 0)
  }

  private range(start: number, end: number, length = end - start + 1) {
    return Array.from({ length }, (_, i) => start + i)
  }

  ngOnInit(): void {
  }

}
