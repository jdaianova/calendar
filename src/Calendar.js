import DayOfWeekByNumber from "./DayOfWeekByNumber";
import MonthByNumber from "./MonthByNumber";

function Calendar(props) {
    const {date} = props;
    return (
        <div>
           <div className="ui-datepicker">
  <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{DayOfWeekByNumber(date.getDay())}</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
      <div className="ui-datepicker-material-month">{MonthByNumber(date.getMonth(),2)}</div>
      <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
    </div>
  </div>
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{MonthByNumber(date.getMonth(),1)}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
    </div>
  </div>
  <table className="ui-datepicker-calendar">
    <colgroup>
      <col></col>
      <col></col>
      <col></col>
      <col></col>
      <col></col>
      <col className="ui-datepicker-week-end"></col>
      <col className="ui-datepicker-week-end"></col>
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="ui-datepicker-other-month">27</td>
        <td className="ui-datepicker-other-month">28</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
        <td>6</td>
        <td>7</td>
        <td className="ui-datepicker-today">8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    )
}

export default Calendar;