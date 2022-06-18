const monthNames = [
  'stycznia',
  'lutego',
  'marca',
  'kwietnia',
  'maja',
  'czerwca',
  'lipca',
  'sierpnia',
  'września',
  'października',
  'listopada',
  'grudnia',
];

export const dateToText = (date: Date = new Date) => {
  return `${ date.getDate() } ${ monthNames[ date.getMonth() ] } ${ date.getFullYear() }`;
}

export const millisecondsToTime = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds / 1000),
  minutes = Math.floor(seconds / 60),
  hours   = Math.floor(minutes / 60),
  days    = Math.floor(hours / 24),
  months  = Math.floor(days / 30),
  years   = Math.floor(days / 365);

  if (years > 0) {
    return `${ years } ${ (years > 1 && years < 5) ? 'lata' : years === 1 ? 'rok' : 'lat' } temu`;
  } else if (months > 0) {
    return `${ months } ${ (months > 1 && months < 5) ? 'miesiące' : months === 1 ? 'miesiąc' : 'miesięcy' } temu`;
  } else if (days > 0) {
    return `${ days } ${ days > 0 ? 'dni' : 'dzień' } temu`;
  } else if (hours > 0) {
    return `${ hours } ${ (hours > 1 && hours < 5) ? 'godziny' : hours === 1 ? 'godzina' : 'godzin' } temu`;
  } else if (minutes > 0) {
    return `${ minutes } ${ (minutes > 1 && minutes < 5) ? 'minuty' : minutes === 1 ? 'minuta' : 'minut' } temu`;
  } else {
    return `${ seconds } ${ (seconds > 1 && seconds < 5) ? 'sekundy' : seconds === 1 ? 'sekunda' : 'sekund' } temu`;
  }
}
