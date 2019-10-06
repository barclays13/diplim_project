"use sctrict";

import choiceClub from './modules/choiceClub';
import call from './modules/call';
//import sendForm from './modules/sendForm';
import fixedGift from './modules/fixedGift';
import mainSlider from './modules/mainSlider';
import scrollDocument from './modules/scrollDocument';
import popupMenu from './modules/popupMenu';
import sliderGallery from './modules/sliderGallery';
import calc from './modules/calc';

//выбор клуба
choiceClub();
//Перезвоните мне
call();
//Подарок
fixedGift();
//слайдер в меню
mainSlider();
popupMenu();
scrollDocument();
sliderGallery();
calc();
//отправка данных
//sendForm();