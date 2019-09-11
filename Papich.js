let sub = 100,
    unSub = 1000;

if (sub > 49){
    console.log("Не не не, это бред какой-то")
} else if (sub < unSub){
    console.log("Roflan Ebalo")
} else {
    console.log("У нас 50 сабов, маловато как-то")
};

let num = 50;

(num == 50) ? console.log("Верно") : console.log("Неверно");


switch (num){
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Опять много");
        break;
    case 50:
        console.log("Верно");
        break;    
    default:
        console.log("Привет Анзор");
        break;
};