const slideCtrl = (startPos, increment) => {
  // pixel values for args

  const $ = x => document.getElementById(x);

  let slidePosition = startPos;
  let slider;
  let stopTrigger;

  const slideRefs = {
    '768': $('cat1'),
    '383': $('cat2'),
    '-2': $('cat3'),
    '-387': $('cat4'),
    '-722': $('cat5'),
  };

  const dotRefs = {
    '768': $('s1'),
    '383': $('s2'),
    '-2': $('s3'),
    '-387': $('s4'),
  };

  const moveForward = slideDivId => {
    if (slidePosition === -387) {
      return;
    }
    slideRefs[`${slidePosition}`].classList.toggle('visibleCat');
    dotRefs[`${slidePosition}`].classList.toggle('darkenDot');
    slidePosition -= increment;
    slideDivId.style = `transform: translateX(${slidePosition}px);
    transition: transform .7s ease-in-out`;
    slideRefs[`${slidePosition}`].classList.toggle('visibleCat');
    dotRefs[`${slidePosition}`].classList.toggle('darkenDot');
  };

  const moveBackward = slideDivId => {
    if (slidePosition === 768) {
      return;
    }
    slideRefs[`${slidePosition}`].classList.toggle('visibleCat');
    dotRefs[`${slidePosition}`].classList.toggle('darkenDot');
    slidePosition += increment;
    slideDivId.style = `transform: translateX(${slidePosition}px);
    transition: transform .7s ease-in-out`;
    slideRefs[`${slidePosition}`].classList.add('visibleCat');
    dotRefs[`${slidePosition}`].classList.toggle('darkenDot');
  };

  const playSlides = () => {
    // commented code will bring slide back to first position before playing
    /* if (slidePosition !== 768) {
      while (slidePosition !== 768) {
        moveBackward($('catsContainer'));
      }
    } */

    // starts playing from current slide position
    slider = setInterval(function() {
      if (stopTrigger) {
        clearInterval(slider);
        stopTrigger = false;
      }

      if (slidePosition !== -387) {
        moveForward($('catsContainer'));
      } else if (slidePosition === -387) {
        while (slidePosition !== 768) {
          moveBackward($('catsContainer'));
        }
      }
    }, 3000);
  };

  const stopSlides = () => {
    stopTrigger = true;
  };

  const showDotSlide = dotID => {
    const x = [...Object.keys(dotRefs)];

    if (dotRefs[`${slidePosition}`] === dotID) {
      return console.log('same dot');
    }

    x.forEach(key => {
      if (dotRefs[key] === dotID) {
        if (Number(key) < slidePosition) {
          while (slidePosition !== Number(key)) {
            moveForward($('catsContainer'));
          }
        } else {
          while (slidePosition !== Number(key)) {
            moveBackward($('catsContainer'));
          }
        }
      }
    });
  };

  return {
    moveForward,
    moveBackward,
    playSlides,
    stopSlides,
    showDotSlide,
  };
};

export { slideCtrl };
