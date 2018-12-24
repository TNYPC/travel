import $ from "jquery";

import MobileMenu from './modules/MobileMenu';
import ReavealOnScroll from './modules/RevealOnScoll';

var mobileMenu = new MobileMenu();

new RevealOnScoll($(".feature-item"),"85%");
new RevealOnScoll($(".testimonial"),"60%");
