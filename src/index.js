import { popMenu } from './dropdownMenu';
import { slideCtrl } from './imgSlider';

document
  .getElementById('file')
  .addEventListener('click', popMenu.bind(this, 'file', 'menu'));

document
  .getElementById('edit')
  .addEventListener(
    'click',
    popMenu.bind(this, 'edit', 'menu', 'rgb(103, 255, 166)', 'black')
  );

// img slider code
const catSlider = slideCtrl(768, 385); // pixel values (start, pixels to slide)

const slideDiv = document.getElementById('catsContainer');

document
  .getElementById('forwardBtn')
  .addEventListener('click', catSlider.moveForward.bind(this, slideDiv));

document
  .getElementById('backwardBtn')
  .addEventListener('click', catSlider.moveBackward.bind(this, slideDiv));

document
  .getElementById('playBtn')
  .addEventListener('click', catSlider.playSlides.bind(this));

document
  .getElementById('stopBtn')
  .addEventListener('click', catSlider.stopSlides.bind(this));

document
  .getElementById('s1')
  .addEventListener(
    'click',
    catSlider.showDotSlide.bind(this, document.getElementById('s1'))
  );

document
  .getElementById('s2')
  .addEventListener(
    'click',
    catSlider.showDotSlide.bind(this, document.getElementById('s2'))
  );

document
  .getElementById('s3')
  .addEventListener(
    'click',
    catSlider.showDotSlide.bind(this, document.getElementById('s3'))
  );

document
  .getElementById('s4')
  .addEventListener(
    'click',
    catSlider.showDotSlide.bind(this, document.getElementById('s4'))
  );
