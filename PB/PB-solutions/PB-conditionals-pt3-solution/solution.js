// Basketball teams

//1a

let aleezaGame1 = 89;

let aleezaGame2 = 120;

let aleezaGame3 = 103;

const lisGame1 = 116;

const lisGame2 = 94;

const lisGame3 = 123;

let aleezaTeamAve = Math.round((aleezaGame1 + aleezaGame2  + aleezaGame3) / 3);

console.log(`Aleeza's team scored an average ${aleezaTeamAve}`);

let lisTeamAve = Math.round((lisGame1 + lisGame2 + lisGame3) / 3);

console.log(`Lis's team scored an average ${lisTeamAve}`);

//1b 

if (lisTeamAve > aleezaTeamAve) {
    console.log(`So Lis' team are the winners with an average of ${lisTeamAve}`);
} else if (aleezaTeamAve > lisTeamAve) {
    console.log(`So Aleeza's team are the winners with an average of ${aleezaTeamAve}`);
} else if (aleezaTeamAve == lisTeamAve) {
    console.log(`No way, is their average really a tie of ${aleezaTeamAve}`);
} else {
    console.log(`Put in proper numbers, puh-lease.`);
}

//1c

aleezaGame1 = 200;

aleezaGame2 = 120;

aleezaGame3 = 103;


const aleezaTeamAve2 = Math.round((aleezaGame1 + aleezaGame2 + aleezaGame3) / 3);

if (lisTeamAve > aleezaTeamAve2) {
    console.log(`So Lis' team are the winners with an average of ${lisTeamAve}`);
} else if (aleezaTeamAve2 > lisTeamAve) {
    console.log(`So Aleeza's team are the winners with an average of ${aleezaTeamAve2}`);
} else if (aleezaTeamAve2 == lisTeamAve) {
    console.log(`No way, is their average really a tie of ${aleezaTeamAve2}`);
} else {
    console.log(`Put in proper numbers, puh-lease.`);
}

//1d

let maryGame1 = 97;

const maryGame2 = 134;

const maryGame3 = 105;

const maryTeamAve = Math.round((maryGame1 + maryGame2 + maryGame3) / 3);

if ((lisTeamAve > aleezaTeamAve2) && (lisTeamAve > maryTeamAve)) {
    console.log(`So Lis' team are the winners with an average of ${lisTeamAve}`);
} else if ((aleezaTeamAve2 > lisTeamAve) && (aleezaTeamAve2 > maryTeamAve)) {
    console.log(`So Aleeza's team are the winners with an average of ${aleezaTeamAve2}`);
} else if ((aleezaTeamAve2 == lisTeamAve) && (aleezaTeamAve2 !== maryTeamAve)) {
    console.log(`Whoa, Aleeza and Lis' teams are tied for first with ${aleezaTeamAve2}, Mary's team coming in at third, I guess.`);
} else if ((aleezaTeamAve2 == maryTeamAve) && (aleezaTeamAve2 !== lisTeamAve)) {
    console.log(`Whoa, Aleeza and Mary's teams are tied for first with ${aleezaTeamAve2}, Lis' team coming in at third, I guess.`);
} else if ((lisTeamAve == maryTeamAve) && (aleezaTeamAve2 !== lisTeamAve)) {
    console.log(`Whoa, Lis and Mary's teams are tied for first with ${aleezaTeamAve2}, Aleeza's team coming in at third, I guess.`);
} else if ((aleezaTeamAve2 == lisTeamAve == maryTeamAve)) {
    console.log(`No way, are all of their averages really a tie of ${aleezaTeamAve2}`);
} else {
    console.log(`Put in proper numbers, puh-lease.`);
}

//1e

maryGame1 = 184;

const maryTeamAve2 = Math.round((maryGame1 + maryGame2 + maryGame3) / 3);

if ((lisTeamAve > aleezaTeamAve2) && (lisTeamAve > maryTeamAve2)) {
    console.log(`So Lis' team are the winners with an average of ${lisTeamAve}`);
} else if ((aleezaTeamAve2 > lisTeamAve) && (aleezaTeamAve2 > maryTeamAve2)) {
    console.log(`So Aleeza's team are the winners with an average of ${aleezaTeamAve2}`);
} else if ((aleezaTeamAve2 == lisTeamAve) && (aleezaTeamAve2 !== maryTeamAve2)) {
    console.log(`Whoa, Aleeza and Lis' teams are tied for first with ${aleezaTeamAve2}, Mary's team coming in at third, I guess.`);
} else if ((aleezaTeamAve2 == maryTeamAve2) && (aleezaTeamAve2 !== lisTeamAve)) {
    console.log(`Whoa, Aleeza and Mary's teams are tied for first with ${aleezaTeamAve2}, Lis' team coming in at third, I guess.`);
} else if ((lisTeamAve == maryTeamAve2) && (aleezaTeamAve2 !== lisTeamAve)) {
    console.log(`Whoa, Lis and Mary's teams are tied for first with ${aleezaTeamAve2}, Aleeza's team coming in at third, I guess.`);
} else if ((aleezaTeamAve2 == lisTeamAve == maryTeamAve2)) {
    console.log(`No way, are all of their averages really a tie of ${aleezaTeamAve2}`);
} else {
    console.log(`Put in proper numbers, puh-lease.`);
}