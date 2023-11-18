$(document).ready(function() {

	function numerValue(str) {
		return Number(str.replace(/[^0-9]/gim,''));
	};

  function sliderUpdate(sld) {
    sld.noUiSlider.on('update', function(values, handle) {
      $(sld).closest('.slider-wrap').find('.input-value').html(values[handle]);
    });
  };

	var sliderAmount = document.querySelectorAll('.slider-amount');
  sliderAmount.forEach(function(slider) {
    noUiSlider.create(slider, {
      start: 4000,
      step: 1,
      connect: [true, false],
      tooltips: true,
      range: {
        'min': 0,
        'max': 7000
      },
      format: wNumb({
        postfix: ' €',
        decimals: 0,
      })
    });
    sliderUpdate(slider);
  });

	var sliderDuration = document.querySelectorAll('.slider-duration');
  sliderDuration.forEach(function(slider) {
    noUiSlider.create(slider, {
      start: 45,
      step: 1,
      connect: [true, false],
      tooltips: true,
      range: {
        'min': 0,
        'max': 120
      },
      format: wNumb({
        postfix: ' days',
        decimals: 0,
      })
    });
    sliderUpdate(slider);
  });  

  $('body').on('click', '.input-link', function() {
    var slider = $(this).closest('.slider-wrap').find('.slider')[0];
    if ($(this).hasClass('input-minus'))
      slider.noUiSlider.set( numerValue(slider.noUiSlider.get()) - 1 );
    else
      slider.noUiSlider.set( numerValue(slider.noUiSlider.get()) + 1 );
  });

  $(".noUi-tooltip").wrap(function() {
    return "<div class='noUi-tooltip-wrap'></div>";
  }).before(function() {
    return "<span class='input-link input-minus'>-</span>";
  }).after(function() {
    return "<span class='input-link input-plus'>+</span>";
  });

});




