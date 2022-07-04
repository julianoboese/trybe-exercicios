import readlineSync = require('readline-sync');
import Months from './Months';
import Seasons from './Seasons';

const northSeasons = {
  [Seasons.SUMMER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
  [Seasons.AUTUMN]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
  [Seasons.WINTER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
  [Seasons.SPRING]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
};

const southSeasons = {
  [Seasons.SUMMER]: [Months.DECEMBER, Months.JANUARY, Months.FEBRUARY, Months.MARCH],
  [Seasons.AUTUMN]: [Months.MARCH, Months.APRIL, Months.MAY, Months.JUNE],
  [Seasons.WINTER]: [Months.JUNE, Months.JULY, Months.AUGUST, Months.SEPTEMBER],
  [Seasons.SPRING]: [Months.SEPTEMBER, Months.OCTOBER, Months.NOVEMBER, Months.DECEMBER],
};

const hemispheres = {
  North: northSeasons,
  South: southSeasons,
};

const monthIndex: number = readlineSync.keyInSelect(Object.values(Months), 'Select the month');
const hemisphereIndex: number = readlineSync.keyInSelect(Object.keys(hemispheres), 'Select the hemisphere');

const month = Object.values(Months)[monthIndex];
const hemisphere = Object.keys(hemispheres)[hemisphereIndex];

console.log(`Month: ${month}`);
console.log(`Hemisphere: ${hemisphere}`);

console.log('Seasons:');

const hemisphereSeasons = Object.values(hemispheres)[hemisphereIndex];
Object.entries(hemisphereSeasons).forEach(([season, months]) => {
  if (months.includes(month)) {
    console.log(season);
  }
});
