import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import formatISO from 'date-fns/formatISO';

export function formatDate(date) {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'yyyy-MM-dd HH:mm:ss');
}

export function serializeDate(date) {
  return formatISO(date);
}
