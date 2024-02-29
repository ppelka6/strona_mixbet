$('.burger-btn').hide()

$('html').addClass('js')

// po załadowaniu całej strony
$(window).on('load', function () {
	setTimeout(function () {
		$('#loader-wrapper').fadeOut(function () {
			$('.burger-btn').fadeIn()
		})
	}, 2000)
})
