import dayjs from 'dayjs';

// 获取月份名称
const monthNames = {
  'en-US': ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
};

// 根据语言格式化日期
export const formatDateByLocale = (date, locale) => {
  const d = dayjs(date);
  if (!d.isValid()) return '';

  const year = d.year();
  const month = d.month() + 1;
  const day = d.date();

  switch (locale) {
  case 'en-US': {
    const names = monthNames[locale];
    if (!names) return d.format('YYYY-MM-DD');
    if (locale === 'en-US') return `${names[month - 1]} ${day}, ${year}`;
  }
  default:
    return d.format('YYYY-MM-DD');
  }
};

// 根据语言格式化月份标签
export const formatMonthLabelByLocale = (yearMonth, locale) => {
  const d = dayjs(yearMonth);
  if (!d.isValid()) return '';

  const year = d.year();
  const month = d.month() + 1;

  switch (locale) {
  case 'en-US': {
    const names = monthNames[locale];
    if (!names) return d.format('YYYY-MM');
  }
  default:
    return d.format('YYYY-MM');
  }
};
