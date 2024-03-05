// var text = 'MIXBET'
// var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// var scale = 50
// var breaks = 0.003
// var endSpeed = 0.02
// var firstLetter = 220
// var delay = 40

// var canvas = document.querySelector('canvas')
// var ctx = canvas.getContext('2d')

// text = text.split('')
// chars = chars.split('')
// var charMap = []
// var offset = []
// var offsetV = []
// var textLoaded = false

// for (var i = 0; i < chars.length; i++) {
// 	charMap[chars[i]] = i
// }

// for (var i = 0; i < text.length; i++) {
// 	var f = firstLetter + delay * i
// 	offsetV[i] = endSpeed + breaks * f
// 	offset[i] = (-(1 + f) * (breaks * f + 2 * endSpeed)) / 2
// }

// ;(onresize = function () {
// 	canvas.width = canvas.clientWidth
// 	canvas.height = canvas.clientHeight
// })()

// requestAnimationFrame(
// 	(loop = function () {
// 		ctx.setTransform(1, 0, 0, 1, 0, 0)
// 		ctx.clearRect(0, 0, canvas.width, canvas.height)
// 		ctx.globalAlpha = 1
// 		ctx.fillStyle = '#622'
// 		ctx.fillRect(0, (canvas.height - scale) / 2, canvas.width, scale)

// 		for (var i = 0; i < text.length; i++) {
// 			ctx.fillStyle = '#fff'
// 			ctx.textBaseline = 'middle'
// 			ctx.textAlign = 'center'
// 			ctx.setTransform(
// 				1,
// 				0,
// 				0,
// 				1,
// 				Math.floor((canvas.width - scale * (text.length - 1)) / 2),
// 				Math.floor(canvas.height / 2)
// 			)
// 			var o = offset[i]
// 			while (o < 0) o++
// 			o %= 1
// 			var h = Math.ceil(canvas.height / 2 / scale)
// 			for (var j = -h; j < h; j++) {
// 				var c = charMap[text[i]] + j - Math.floor(offset[i])
// 				while (c < 0) c += chars.length
// 				c %= chars.length
// 				var s = 1 - Math.abs(j + o) / (canvas.height / 2 / scale + 1)
// 				ctx.globalAlpha = s
// 				ctx.font = scale * s + 'px Helvetica'
// 				ctx.fillText(chars[c], scale * i, (j + o) * scale)
// 			}
// 			offset[i] += offsetV[i]
// 			offsetV[i] -= breaks
// 			if (offsetV[i] < endSpeed) {
// 				offset[i] = 0
// 				offsetV[i] = 0
// 			}
// 		}

// 		if (!textLoaded) {
// 			var allTextLoaded = true
// 			for (var i = 0; i < text.length; i++) {
// 				if (offsetV[i] !== 0 || offset[i] !== 0) {
// 					allTextLoaded = false
// 					break
// 				}
// 			}
// 			if (allTextLoaded) {
// 				textLoaded = true
// 				setTimeout(function () {
// 					for (var i = 0; i < text.length; i++) {
// 						offset[i] = (-(1 + firstLetter + delay * i) * (breaks * (firstLetter + delay * i) + 2 * endSpeed)) / 2
// 						offsetV[i] = endSpeed + breaks * (firstLetter + delay * i)
// 					}
// 				}, 10000)
// 			}
// 		}

// 		requestAnimationFrame(loop)
// 	})
// )

var text = 'MIXBET'
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var scale = 50
var breaks = 0.003
var endSpeed = 0.02
var firstLetter = 220
var delay = 40

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

text = text.split('')
chars = chars.split('')
var charMap = []
var offset = []
var offsetV = []
var textLoaded = false

for (var i = 0; i < chars.length; i++) {
	charMap[chars[i]] = i
}

for (var i = 0; i < text.length; i++) {
	var f = firstLetter + delay * i
	offsetV[i] = endSpeed + breaks * f
	offset[i] = (-(1 + f) * (breaks * f + 2 * endSpeed)) / 2
}

;(onresize = function () {
	canvas.width = canvas.clientWidth
	canvas.height = canvas.clientHeight
})()

requestAnimationFrame(
	(loop = function () {
		ctx.setTransform(1, 0, 0, 1, 0, 0)
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		ctx.globalAlpha = 1
		ctx.fillStyle = '#622'
		ctx.fillRect(0, (canvas.height - scale) / 2, canvas.width, scale)

		for (var i = 0; i < text.length; i++) {
			ctx.fillStyle = '#fff'
			ctx.textBaseline = 'middle'
			ctx.textAlign = 'center'
			ctx.setTransform(
				1,
				0,
				0,
				1,
				Math.floor((canvas.width - scale * (text.length - 1)) / 2),
				Math.floor(canvas.height / 2)
			)
			var o = offset[i]
			while (o < 0) o++
			o %= 1
			var h = Math.ceil(canvas.height / 2 / scale)
			for (var j = -h; j < h; j++) {
				var c = charMap[text[i]] + j - Math.floor(offset[i])
				while (c < 0) c += chars.length
				c %= chars.length
				var s = 1 - Math.abs(j + o) / (canvas.height / 2 / scale + 1)
				ctx.globalAlpha = s
				ctx.font = scale * s + 'px Helvetica'
				ctx.fillText(chars[c], scale * i, (j + o) * scale)
			}
			offset[i] += offsetV[i]
			offsetV[i] -= breaks
			if (offsetV[i] < endSpeed) {
				offset[i] = 0
				offsetV[i] = 0
			}
		}

		if (!textLoaded) {
			var allTextLoaded = true
			for (var i = 0; i < text.length; i++) {
				if (offsetV[i] !== 0 || offset[i] !== 0) {
					allTextLoaded = false
					break
				}
			}
			if (allTextLoaded) {
				textLoaded = true
				setTimeout(function () {
					for (var i = 0; i < text.length; i++) {
						offset[i] = (-(1 + firstLetter + delay * i) * (breaks * (firstLetter + delay * i) + 2 * endSpeed)) / 2
						offsetV[i] = endSpeed + breaks * (firstLetter + delay * i)
					}
					textLoaded = false
				}, 10000)
			}
		}

		requestAnimationFrame(loop)
	})
)
