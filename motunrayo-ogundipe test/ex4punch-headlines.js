//TRENDING HEADLINES

//{"0":"","1":"Senate okays higher institutions for President’s hometown,","2":"","3":"EFCC
//hands over 116 cars, 20 houses to First Bank ","4":"","5":"Suspected F-SARS operative shoots
//LASTMA official dead","6":"","7":"Metele attack: Army confirms 23 soldiers killed, 31 others…","8":"","9":
//"UEFA Champions League top scorers","10":"","11":"Brothers behead 10-year-old for N200,000
// in Lagos","12":"","13":"Arrest Aregbesola for forging police report, PDP tells
//IGP","14":"","15":"Metele attack: No army can have enough equipment for…"}


let trending = document.querySelectorAll('.tptn_link');
let response1 = {};
for(let count = 0; count < trending.length; count ++) {
    response1[count] = trending[count].textContent;
}
    document.write(JSON.stringify(response1));


//JUST IN HEADLINES

//{"0":"UNESCO adds reggae music to global cultural heritage list","1":"Salome Zurabishvili elected as
//Georgia’s first woman president","2":"BREAKING: Lagos CP orders posthumous trial of of F-SARS operative
// who killed LASTMA official","3":"Akume never wanted me to sign anti-open grazing law — Ortom","4":"ICYMI:
//Bricklayer jailed for assaulting commercial sex worker","5":"Gabon president leaves Saudi hospital","6":
//"Police reopen Anambra House of Assembly","7":"US life expectancy drops again as drug overdose deaths climb",
//"8":"ICYMI: Woman protests after rapist was granted parental access to her son","9":"Power supply tops Nigerians
//’ complaints list, says CPC","10":"UEFA Champions League top scorers","11":"Five ways to manage joint account 
//with your spouse","12":"Investors lobby as PFAs invest N17bn pension funds in infrastructure","13":"Port Harcourt
// building collapse: Police arrest property owner","14":"Ex-Eagles star, Etuhu, stands trial in Sweden over
// match-fixing"}

let justIn = document.querySelectorAll('li>a>h3');
let response1 = {};
for(let count = 0; count < justIn.length; count ++) {
    response1[count] = justIn[count].textContent;
}
    document.write(JSON.stringify(response1));