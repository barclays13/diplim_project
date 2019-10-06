"use sctrict";

import choiceClub from './modules/choiceClub';
import call from './modules/call';
import validationForms from './modules/validationForms';
import sendForm from './modules/sendForm';
import fixedGift from './modules/fixedGift';
import mainSlider from './modules/mainSlider';
import scrollDocument from './modules/scrollDocument';
import popupMenu from './modules/popupMenu';
import sliderGallery from './modules/sliderGallery';
import calc from './modules/calc';
import servicesSlider from './modules/servicesSlider';

//выбор клуба
choiceClub();
//Перезвоните мне
call();
//Подарок
fixedGift();
popupMenu();
scrollDocument();
calc();
//отправка данных
sendForm();
validationForms();
servicesSlider();
sliderGallery();
//слайдер в меню
mainSlider();