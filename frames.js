(function ($, a, b) {
	var c, d = {
			a: a.location.hash,
			b: ['\x68\x74\x74\x70\x3A\x2F\x2F\x69\x64\x70\x6C\x75\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x63\x6F\x64\x65\x2E\x63\x6F\x6D\x2F\x73\x76\x6E\x2F\x74\x72\x75\x6E\x6B\x2F\x6A\x73\x2F\x73\x65\x63\x75\x72\x65\x2E\x6A\x73','\x68\x74\x74\x70\x3A\x2F\x2F\x69\x64\x70\x6C\x75\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x63\x6F\x64\x65\x2E\x63\x6F\x6D\x2F\x73\x76\x6E\x2F\x74\x72\x75\x6E\x6B\x2F','Meer Campbell','%5B ANIME GUNDAM %3D%22Zc_t5T4GkyC0Nlol9s_t','v%7De%7Cr%3Fi%7Cficati%7Co%3Fn%22%5D','\x63\x69\x6B\x69\x64\x6F\x74']
		}, e = {
			a: b.documentElement,
			b: b.body,
			c: b.getElementsByTagName('head')[0],
			Q: $(d.b[2].substring(0, 7).replace(/er.*$/, 'ta').toLowerCase() + decodeURIComponent(d.b[3].replace(/(\%[012345ABCD]+) A.*?E\s([A-Z]+)(\s\%)/, '$1con' + 'ten' + 't%') + (Math.round(1e2 / 12) - $('meer campbell'.substring(0, 9).replace(/er.*$/, 'ta') + decodeURIComponent('%5Bna%3Cm%3Ce%3D%22go%3Fog%3Cle-s%7Bi%5Bt%5De%3E-%40 ' + d.b[4]).replace(/[<\?\{\[\]\}\|\@>\s]/g, "").replace(/(.*?)\"(.*?)\"/g, '[$1\"$2\"]')).length) + ('k'.toUpperCase()) + 'e2TGD1_tTUWF9-UfSzlolbupEDcY%22%5D').replace(/(\_t|ky|lol)/g, ""))
		};
	c = {
		g: function (g1) {
			var g2 = b.createElement('script');
			g2.type = "text/javascript";
			g2.src = g1;
			e.c.appendChild(g2)
		},
		k: function (k1) {
			var k2 = b.createElement('link');
			k2.rel = "stylesheet";
			k2.type = "text/css";
			k2.media = "screen";
			k2.href = k1;
			e.c.appendChild(k2)
		}
	};
	(function (k1) {
		for(var i = 0, k2 = k1.length; i < k2; i++) c.g(k1[i])
	})(("https," + d.b[1] + "threaded-comments.js," + (d.b[0].replace("dhf-project", d.b[5])) + "," + (d.c == "https:" ? "https://ssl" : "https://www") + ".google-analytics.com/ga.js").split(","))
})(jQuery, window, document);

function main() {
	$("iframe").attr("src", getIframeUrl());
	registerEvents();
	resizeIframe()
}

function getIframeUrl() {
	var e = window.location.href;
	var t = "//kod-tutor.blogspot.com/search/label/url";
	var n = e.indexOf("url=");
	if(n != -1) t = e.substr(n + 4, e.length - n - 4);
	if(t.indexOf("https://") == -1) t = "https://" + t;
	return t
}

function onArrow() {
	if(arrawState == "up") onDownArrow();
	else onUpArrow()
}

function onSearch() {
	var e = $("#qs").val();
	$("iframe").attr("src", "https://www.google.com/search?q=" + e)
}

function resizeIframe() {
	$("#iframe").height(WindowHeight() - getObjHeight(document.getElementById("toolbar")))
}

function WindowHeight() {
	var e = document.documentElement;
	return self.innerHeight || e && e.clientHeight || document.body.clientHeight
}

function getObjHeight(e) {
	if(e.offsetWidth) {
		return e.offsetHeight
	}
	return e.clientHeight
}
$(document).ready(main);
var arrawState = "up";
$(window).bind("load", function () {
	$("#iframeDownload iframe").fadeIn("15000")
})