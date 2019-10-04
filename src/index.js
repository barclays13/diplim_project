"use sctrict";

import choiceClub from './modules/choiceClub';
import freeVisitForm from './modules/freeVisitForm';
import call from './modules/call';
//import sendForm from './modules/sendForm';
import fixedGift from './modules/fixedGift';
import wrapper from './modules/wrapper';
import mainSlider from './modules/mainSlider';

//выбор клуба
choiceClub();
//Записаться набесплатный визит
freeVisitForm();
//Перезвоните мне
call();
//отправка данных
//sendForm();
//Подарок
fixedGift();
//слайдер в меню
mainSlider();

wrapper();