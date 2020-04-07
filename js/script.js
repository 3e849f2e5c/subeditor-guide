/**
 * MIT License
 *
 * Copyright 2020 Markus "3e849f2e5c" Isberg
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const thumbnails = document.getElementsByClassName("thumbnail");

for (let i = 0; i < thumbnails.length; i++) {
	const thumbnail = thumbnails[i];
	const span = thumbnail.lastElementChild;
	const img = span.firstElementChild;
	thumbnail.addEventListener('mouseover', () => {
		span.setAttribute("style", "display: none; !important");
		img.setAttribute("src", img.getAttribute("tmpsrc"));

		// 100 ms timeout for hovering over
		setTimeout(() => {
			span.setAttribute("style", "");
			const bounds = span.getBoundingClientRect();

			// I can't be bothered to support calculators, just don't show the image if the preview won't fit
			if (bounds.width > document.body.clientWidth) {
				span.setAttribute("style", "display: none; !important");
				return;
			}

			let offset = 0;

			// if the preview is outside of the bounds translate it so it fits inside
			if (bounds.x < 0) {
				offset = (Math.abs(bounds.x) + 8);
			} else if (bounds.x + bounds.width > document.body.clientWidth){
				offset = (document.body.clientWidth - (bounds.x + bounds.width) - 8);
			}

			span.setAttribute("style", `transform: translateX(${offset}px);`);
		}, 100);
	})
}

document.getElementById("easteregg").addEventListener('click', () => {
	document.location = "https://youtu.be/tX3VaUW1948";
});
