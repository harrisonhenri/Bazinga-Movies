import moment from 'moment';

export function formatDate(date) {
  return date ? moment(date).format('DD/MM/YYYY') : undefined;
}

export function formatTime(n) {
  if (n === undefined) {
    return undefined;
  }

  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + ' h ' + rminutes + ' min ';
}
