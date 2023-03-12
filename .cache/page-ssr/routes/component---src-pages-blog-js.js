"use strict";
exports.id = "component---src-pages-blog-js";
exports.ids = ["component---src-pages-blog-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ G),
/* harmony export */   "MainImage": () => (/* binding */ L),
/* harmony export */   "Placeholder": () => (/* binding */ z),
/* harmony export */   "StaticImage": () => (/* binding */ U),
/* harmony export */   "generateImageData": () => (/* binding */ v),
/* harmony export */   "getImage": () => (/* binding */ S),
/* harmony export */   "getImageData": () => (/* binding */ I),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ f),
/* harmony export */   "getSrc": () => (/* binding */ N),
/* harmony export */   "getSrcSet": () => (/* binding */ x),
/* harmony export */   "withArtDirection": () => (/* binding */ W)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 4 / 3,
  c = function (e) {
    return console.warn(e);
  },
  h = function (e, t) {
    return e - t;
  },
  g = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function p(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function m(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    c = e.formats,
    h = void 0 === c ? ["auto", "webp"] : c;
  return h = h.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: h,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || d))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / d) : 800), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: h
  }));
}
function f(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = m(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function v(e) {
  var t,
    a = (e = m(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    f = e.height,
    v = e.filename,
    k = e.reporter,
    E = void 0 === k ? {
      warn: c
    } : k,
    M = e.backgroundColor,
    S = e.placeholderURL;
  if (a || E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = p(v)) : i = {
    width: h,
    height: f,
    format: (null == (t = i) ? void 0 : t.format) || p(v) || "auto"
  };
  var N = new Set(e.formats);
  (0 === N.size || N.has("auto") || N.has("")) && (N.delete("auto"), N.delete(""), N.add(i.format)), N.has("jpg") && N.has("png") && (E.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), N.delete("jpg" === i.format ? "png" : "jpg"));
  var x = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: c
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        g = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (g.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + g.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: c
          } : u,
          h = a.width / a.height,
          g = w(void 0 === l ? s : l);
        if (i && r) {
          var p = b(a, {
            width: i,
            height: r,
            fit: o
          });
          i = p.width, r = p.height, h = p.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : 800;
        var m = i;
        if (a.width < i || a.height < r) {
          var f = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + f + ' "' + ("width" === f ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + f + " of " + a[f] + "px. If possible, replace the current image with a larger one."), "width" === f ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: g.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: m,
          presentationHeight: Math.round(m / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? y(e) : "fullWidth" === i ? y(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    I = {
      sources: []
    },
    W = e.sizes;
  W || (W = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  }(x.presentationWidth, o)), N.forEach(function (e) {
    var t = x.sizes.map(function (t) {
      var i = r(v, t, Math.round(t / x.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      E.warn("[" + a + "] The resolver for image " + v + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === x.unscaledWidth;
      }) || t[0];
      i && (I.fallback = {
        src: i.src,
        srcSet: g(t),
        sizes: W
      });
    } else {
      var n;
      null == (n = I.sources) || n.push({
        srcSet: g(t),
        sizes: W,
        type: "image/" + e
      });
    }
  });
  var j = {
    images: I,
    layout: o,
    backgroundColor: M
  };
  switch (S && (j.placeholder = {
    fallback: S
  }), o) {
    case "fixed":
      j.width = x.presentationWidth, j.height = x.presentationHeight;
      break;
    case "fullWidth":
      j.width = 1, j.height = 1 / x.aspectRatio;
      break;
    case "constrained":
      j.width = e.width || x.presentationWidth || 1, j.height = (j.width || 1) / x.aspectRatio;
  }
  return j;
}
var w = function (e) {
  return Array.from(new Set([1].concat(e))).sort(h);
};
function y(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    d = e.layout,
    c = a.width / a.height,
    g = w(void 0 === l ? s : l);
  if (i && r) {
    var p = b(a, {
      width: i,
      height: r,
      fit: o
    });
    i = p.width, r = p.height, c = p.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(h),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}
function b(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var k = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  E = ["images", "placeholder"];
function M() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var S = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  N = function (e) {
    var t, a, i;
    return null == (t = S(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  x = function (e) {
    var t, a, i;
    return null == (t = S(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function I(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, k);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), v(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function W(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, E), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var j,
  R = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  _ = ["fallback", "sources", "shouldLoad"],
  A = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, R);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  O = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, _),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
A.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, O.displayName = "Picture", O.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var T = ["fallback"],
  z = function (t) {
    var a = t.fallback,
      i = o(t, T);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
z.displayName = "Placeholder", z.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (j = O.propTypes) ? void 0 : j.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var L = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, n({}, t, {
    shouldLoad: !0
  }))));
};
L.displayName = "MainImage", L.propTypes = O.propTypes;
var q = ["children"],
  C = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  D = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  P = function (a) {
    var i = a.children,
      r = o(a, q);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, null));
  },
  H = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  F = ["style", "className"],
  B = function (e) {
    return e.replace(/\n/g, "");
  },
  G = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, H);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      S = u.backgroundColor,
      N = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return M() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (M() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      x = N.style,
      I = N.className,
      W = o(N, F),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? B(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: B(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, x, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return M() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, S, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), M() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  V = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  U = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, V);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(G),
  X = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  Y = new Set(["fixed", "fullWidth", "constrained"]),
  Z = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: X,
    height: X,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !Y.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
U.displayName = "StaticImage", U.propTypes = Z;


/***/ }),

/***/ "./src/components/blogCard.js":
/*!************************************!*\
  !*** ./src/components/blogCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");



const BlogCard = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card is-flex is-flex-direction-column is-flex-grow-1",
    key: props.slug
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: `${props.slug}/#header`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("figure", {
    className: "image"
  }, props.image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
    alt: "picture of event",
    image: props.image
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.StaticImage, {
    alt: "default event picture as no event picture was specified",
    src: "../../static/defaultevent.png",
    __error: "No data found for image \"../../static/defaultevent.png\"\n              undefinedCould not read image data file \"/Users/sebastian/Documents/Documents \u2013 Sebastian\u2019s MacBook Pro - 1/Webprojects/c4dm-website/.cache/caches/gatsby-plugin-image/3419374008.json\". \nThis may mean that the images in \"/Users/sebastian/Documents/Documents \u2013 Sebastian\u2019s MacBook Pro - 1/Webprojects/c4dm-website/src/components/blogCard.js\" were not processed.\nPlease ensure that your gatsby version is at least 2.24.78."
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "media"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "media-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle is-6"
  }, props.date || null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "title is-4"
  }, props.title || "New Blog Entry", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "subtitle is-6"
  }, " by ", props.author))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "blog-card-text",
    dangerouslySetInnerHTML: {
      __html: props.html
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card-footer p-2 has-text-centered is-align-self-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: `${props.slug}/#header`,
    className: "has-text-link has-text-weight-bold"
  }, "Read More")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogCard);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const navItems = [{
  name: "About",
  link: "/about"
}, {
  name: "Blog",
  link: "/blog"
}, {
  name: "Participate",
  link: "/participate"
}];
const socialMediaItems = [{
  iconName: "fa-twitter",
  link: "https://twitter.com/ane_ste"
}, {
  iconName: "fa-linkedin",
  link: "https://www.linkedin.com/in/anne-steinhoff-04689661/"
}];
const Layout = props => {
  const {
    0: showMobileMenu,
    1: setShowMobileMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const navBarTop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar",
    role: "navigation",
    "aria-label": "main navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Logo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    role: "button",
    className: `navbar-burger ${showMobileMenu ? "is-active" : undefined}`,
    "aria-label": "menu",
    "aria-expanded": "false",
    "data-target": "navbarBasicExample",
    onClick: () => setShowMobileMenu(!showMobileMenu)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    "aria-hidden": "true"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: `navbar-end ${!showMobileMenu ? "is-hidden-touch" : undefined}`
  }, navItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: "navbar-item is-hidden-desktop",
    to: item.link,
    key: item.name
  }, item.name)), socialMediaItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "navbar-item",
    key: item.iconName,
    href: item.link,
    target: "_blank",
    rel: "noreferrer noopener"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "icon is-large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: `fab ${item.iconName}`
  }))))));
  const navBarBottom = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "navbar is-hidden-touch",
    role: "navigation",
    "aria-label": "main navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-brand"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navbar-menu is-flex is-justify-content-space-around"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "is-flex"
  }, navItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    className: `navbar-item ${item.name === props.name ? "is-active" : undefined}`,
    to: item.link,
    key: item.name
  }, item.name)))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "hero is-medium is-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-head"
  }, navBarTop), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "title is-size-1 has-text-centered"
  }, "Coeliac Disease and the Workplace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero-footer"
  }, navBarBottom)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "container"
  }, props.children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/pages/blog.js?export=default":
/*!******************************************!*\
  !*** ./src/pages/blog.js?export=default ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_4008986886_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/4008986886.json */ "./public/page-data/sq/d/4008986886.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_blogCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/blogCard */ "./src/components/blogCard.js");




const Blog = () => {
  const data = _public_page_data_sq_d_4008986886_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Blog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "columns is-multiline"
  }, data.allMarkdownRemark.nodes.map(blogentry => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "column is-one-quarter is-one-third-tabled is-full-mobile is-flex",
    key: blogentry.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_blogCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: blogentry.frontmatter.title,
    author: blogentry.frontmatter.author,
    date: blogentry.frontmatter.date,
    image: blogentry.frontmatter.image.childrenImageSharp[0].gatsbyImageData,
    html: blogentry.html,
    slug: blogentry.fields.slug
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./public/page-data/sq/d/4008986886.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/4008986886.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"allMarkdownRemark":{"nodes":[{"fields":{"slug":"/blog/blog8"},"frontmatter":{"image":{"childrenImageSharp":[{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png","srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/f4be1/placeholder.png 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/b444b/placeholder.png 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/9b21f/placeholder.webp 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/9ff6b/placeholder.webp 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/f2559/placeholder.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}}]},"title":"Blogpost 8","author":"Jan Novak","date":"Wed 15 Feb 2023"},"html":"<p>Consectetur amet laborum labore anim magna mollit aute. Occaecat cillum consectetur aliqua eiusmod pariatur consequat. In non elit consectetur laborum.</p>\\n<p>Consequat et consequat duis sint. Tempor laboris cupidatat cupidatat ea commodo incididunt ad reprehenderit ea laboris non laborum. Nisi sunt quis excepteur fugiat est quis quis labore. Nostrud cillum laboris incididunt duis et officia quis enim. Aliqua commodo tempor ad occaecat esse minim amet commodo.</p>\\n<p>Consectetur consectetur nostrud aute excepteur esse cupidatat amet exercitation. Labore in magna eu irure excepteur Lorem. Excepteur do culpa officia incididunt deserunt nostrud enim. Cillum reprehenderit veniam sint exercitation mollit.</p>\\n<p>Elit tempor occaecat irure eiusmod consectetur eiusmod enim ut deserunt magna ipsum reprehenderit aute. Commodo et eu ut nisi duis sint enim fugiat voluptate. Nulla sit culpa magna ad eiusmod tempor consequat cillum fugiat eu officia culpa eu amet. Magna sit dolore fugiat id qui nisi excepteur sunt dolore est nulla sint do. Consequat aute elit consequat magna eiusmod laborum sunt amet irure commodo est id occaecat.</p>\\n<p>Ullamco nisi nulla enim non officia dolor non consectetur magna veniam officia cupidatat Lorem veniam. Ex enim consequat ea occaecat fugiat est eu ad. Ut proident aliquip tempor esse proident adipisicing elit. Consectetur consequat veniam velit ad laborum non voluptate incididunt ad. Pariatur est incididunt eu reprehenderit ad ipsum fugiat excepteur enim excepteur nisi dolore culpa. Est consectetur non occaecat aute irure.</p>","id":"9332f7c0-356e-564d-96e2-b6653bd81ad3"},{"fields":{"slug":"/blog/blog7"},"frontmatter":{"image":{"childrenImageSharp":[{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png","srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/f4be1/placeholder.png 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/b444b/placeholder.png 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/9b21f/placeholder.webp 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/9ff6b/placeholder.webp 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/f2559/placeholder.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}}]},"title":"Blogpost 7","author":"Max Mustermann","date":"Mon 05 Dec 2022"},"html":"<p>Consectetur amet laborum labore anim magna mollit aute. Occaecat cillum consectetur aliqua eiusmod pariatur consequat. In non elit consectetur laborum.</p>\\n<p>Consequat et consequat duis sint. Tempor laboris cupidatat cupidatat ea commodo incididunt ad reprehenderit ea laboris non laborum. Nisi sunt quis excepteur fugiat est quis quis labore. Nostrud cillum laboris incididunt duis et officia quis enim. Aliqua commodo tempor ad occaecat esse minim amet commodo.</p>\\n<p>Consectetur consectetur nostrud aute excepteur esse cupidatat amet exercitation. Labore in magna eu irure excepteur Lorem. Excepteur do culpa officia incididunt deserunt nostrud enim. Cillum reprehenderit veniam sint exercitation mollit.</p>\\n<p>Elit tempor occaecat irure eiusmod consectetur eiusmod enim ut deserunt magna ipsum reprehenderit aute. Commodo et eu ut nisi duis sint enim fugiat voluptate. Nulla sit culpa magna ad eiusmod tempor consequat cillum fugiat eu officia culpa eu amet. Magna sit dolore fugiat id qui nisi excepteur sunt dolore est nulla sint do. Consequat aute elit consequat magna eiusmod laborum sunt amet irure commodo est id occaecat.</p>\\n<p>Ullamco nisi nulla enim non officia dolor non consectetur magna veniam officia cupidatat Lorem veniam. Ex enim consequat ea occaecat fugiat est eu ad. Ut proident aliquip tempor esse proident adipisicing elit. Consectetur consequat veniam velit ad laborum non voluptate incididunt ad. Pariatur est incididunt eu reprehenderit ad ipsum fugiat excepteur enim excepteur nisi dolore culpa. Est consectetur non occaecat aute irure.</p>","id":"bbd0b7d3-e648-50e8-bd8a-f687fde73d77"},{"fields":{"slug":"/blog/blog6"},"frontmatter":{"image":{"childrenImageSharp":[{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png","srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/f4be1/placeholder.png 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/b444b/placeholder.png 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/9b21f/placeholder.webp 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/9ff6b/placeholder.webp 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/f2559/placeholder.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}}]},"title":"Blogpost 6","author":"Jane Doe","date":"Sat 01 Oct 2022"},"html":"<p>Consectetur amet laborum labore anim magna mollit aute. Occaecat cillum consectetur aliqua eiusmod pariatur consequat. In non elit consectetur laborum.</p>\\n<p>Consequat et consequat duis sint. Tempor laboris cupidatat cupidatat ea commodo incididunt ad reprehenderit ea laboris non laborum. Nisi sunt quis excepteur fugiat est quis quis labore. Nostrud cillum laboris incididunt duis et officia quis enim. Aliqua commodo tempor ad occaecat esse minim amet commodo.</p>\\n<p>Consectetur consectetur nostrud aute excepteur esse cupidatat amet exercitation. Labore in magna eu irure excepteur Lorem. Excepteur do culpa officia incididunt deserunt nostrud enim. Cillum reprehenderit veniam sint exercitation mollit.</p>\\n<p>Elit tempor occaecat irure eiusmod consectetur eiusmod enim ut deserunt magna ipsum reprehenderit aute. Commodo et eu ut nisi duis sint enim fugiat voluptate. Nulla sit culpa magna ad eiusmod tempor consequat cillum fugiat eu officia culpa eu amet. Magna sit dolore fugiat id qui nisi excepteur sunt dolore est nulla sint do. Consequat aute elit consequat magna eiusmod laborum sunt amet irure commodo est id occaecat.</p>\\n<p>Ullamco nisi nulla enim non officia dolor non consectetur magna veniam officia cupidatat Lorem veniam. Ex enim consequat ea occaecat fugiat est eu ad. Ut proident aliquip tempor esse proident adipisicing elit. Consectetur consequat veniam velit ad laborum non voluptate incididunt ad. Pariatur est incididunt eu reprehenderit ad ipsum fugiat excepteur enim excepteur nisi dolore culpa. Est consectetur non occaecat aute irure.</p>","id":"1ff2a6a1-dcc0-573f-8962-b6ba18572c97"},{"fields":{"slug":"/blog/blog5"},"frontmatter":{"image":{"childrenImageSharp":[{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png","srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/f4be1/placeholder.png 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/b444b/placeholder.png 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/9b21f/placeholder.webp 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/9ff6b/placeholder.webp 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/f2559/placeholder.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}}]},"title":"Blogpost 5","author":"Jan Novak","date":"Wed 07 Sep 2022"},"html":"<p>Consectetur amet laborum labore anim magna mollit aute. Occaecat cillum consectetur aliqua eiusmod pariatur consequat. In non elit consectetur laborum.</p>\\n<p>Consequat et consequat duis sint. Tempor laboris cupidatat cupidatat ea commodo incididunt ad reprehenderit ea laboris non laborum. Nisi sunt quis excepteur fugiat est quis quis labore. Nostrud cillum laboris incididunt duis et officia quis enim. Aliqua commodo tempor ad occaecat esse minim amet commodo.</p>\\n<p>Consectetur consectetur nostrud aute excepteur esse cupidatat amet exercitation. Labore in magna eu irure excepteur Lorem. Excepteur do culpa officia incididunt deserunt nostrud enim. Cillum reprehenderit veniam sint exercitation mollit.</p>\\n<p>Elit tempor occaecat irure eiusmod consectetur eiusmod enim ut deserunt magna ipsum reprehenderit aute. Commodo et eu ut nisi duis sint enim fugiat voluptate. Nulla sit culpa magna ad eiusmod tempor consequat cillum fugiat eu officia culpa eu amet. Magna sit dolore fugiat id qui nisi excepteur sunt dolore est nulla sint do. Consequat aute elit consequat magna eiusmod laborum sunt amet irure commodo est id occaecat.</p>\\n<p>Ullamco nisi nulla enim non officia dolor non consectetur magna veniam officia cupidatat Lorem veniam. Ex enim consequat ea occaecat fugiat est eu ad. Ut proident aliquip tempor esse proident adipisicing elit. Consectetur consequat veniam velit ad laborum non voluptate incididunt ad. Pariatur est incididunt eu reprehenderit ad ipsum fugiat excepteur enim excepteur nisi dolore culpa. Est consectetur non occaecat aute irure.</p>","id":"07517328-a347-5feb-92ab-78b5fd9c8890"},{"fields":{"slug":"/blog/blog4"},"frontmatter":{"image":{"childrenImageSharp":[{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png","srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/f4be1/placeholder.png 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/b444b/placeholder.png 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/9b21f/placeholder.webp 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/9ff6b/placeholder.webp 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/f2559/placeholder.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}}]},"title":"Blogpost 4","author":"Anne Steinhoff","date":"Tue 30 Aug 2022"},"html":"<p>Consectetur amet laborum labore anim magna mollit aute. Occaecat cillum consectetur aliqua eiusmod pariatur consequat. In non elit consectetur laborum.</p>\\n<p>Consequat et consequat duis sint. Tempor laboris cupidatat cupidatat ea commodo incididunt ad reprehenderit ea laboris non laborum. Nisi sunt quis excepteur fugiat est quis quis labore. Nostrud cillum laboris incididunt duis et officia quis enim. Aliqua commodo tempor ad occaecat esse minim amet commodo.</p>\\n<p>Consectetur consectetur nostrud aute excepteur esse cupidatat amet exercitation. Labore in magna eu irure excepteur Lorem. Excepteur do culpa officia incididunt deserunt nostrud enim. Cillum reprehenderit veniam sint exercitation mollit.</p>\\n<p>Elit tempor occaecat irure eiusmod consectetur eiusmod enim ut deserunt magna ipsum reprehenderit aute. Commodo et eu ut nisi duis sint enim fugiat voluptate. Nulla sit culpa magna ad eiusmod tempor consequat cillum fugiat eu officia culpa eu amet. Magna sit dolore fugiat id qui nisi excepteur sunt dolore est nulla sint do. Consequat aute elit consequat magna eiusmod laborum sunt amet irure commodo est id occaecat.</p>\\n<p>Ullamco nisi nulla enim non officia dolor non consectetur magna veniam officia cupidatat Lorem veniam. Ex enim consequat ea occaecat fugiat est eu ad. Ut proident aliquip tempor esse proident adipisicing elit. Consectetur consequat veniam velit ad laborum non voluptate incididunt ad. Pariatur est incididunt eu reprehenderit ad ipsum fugiat excepteur enim excepteur nisi dolore culpa. Est consectetur non occaecat aute irure.</p>","id":"d7acf061-3aed-5cd9-9ce6-be17fbef804e"},{"fields":{"slug":"/blog/blog3"},"frontmatter":{"image":{"childrenImageSharp":[{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png","srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/f4be1/placeholder.png 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/b444b/placeholder.png 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/9b21f/placeholder.webp 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/9ff6b/placeholder.webp 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/f2559/placeholder.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}}]},"title":"Blogpost 3","author":"Jane Doe","date":"Thu 25 Aug 2022"},"html":"<p>Consectetur amet laborum labore anim magna mollit aute. Occaecat cillum consectetur aliqua eiusmod pariatur consequat. In non elit consectetur laborum.</p>\\n<p>Consequat et consequat duis sint. Tempor laboris cupidatat cupidatat ea commodo incididunt ad reprehenderit ea laboris non laborum. Nisi sunt quis excepteur fugiat est quis quis labore. Nostrud cillum laboris incididunt duis et officia quis enim. Aliqua commodo tempor ad occaecat esse minim amet commodo.</p>\\n<p>Consectetur consectetur nostrud aute excepteur esse cupidatat amet exercitation. Labore in magna eu irure excepteur Lorem. Excepteur do culpa officia incididunt deserunt nostrud enim. Cillum reprehenderit veniam sint exercitation mollit.</p>\\n<p>Elit tempor occaecat irure eiusmod consectetur eiusmod enim ut deserunt magna ipsum reprehenderit aute. Commodo et eu ut nisi duis sint enim fugiat voluptate. Nulla sit culpa magna ad eiusmod tempor consequat cillum fugiat eu officia culpa eu amet. Magna sit dolore fugiat id qui nisi excepteur sunt dolore est nulla sint do. Consequat aute elit consequat magna eiusmod laborum sunt amet irure commodo est id occaecat.</p>\\n<p>Ullamco nisi nulla enim non officia dolor non consectetur magna veniam officia cupidatat Lorem veniam. Ex enim consequat ea occaecat fugiat est eu ad. Ut proident aliquip tempor esse proident adipisicing elit. Consectetur consequat veniam velit ad laborum non voluptate incididunt ad. Pariatur est incididunt eu reprehenderit ad ipsum fugiat excepteur enim excepteur nisi dolore culpa. Est consectetur non occaecat aute irure.</p>","id":"16fc0f45-2ab7-53fe-9b6c-b0591351b546"},{"fields":{"slug":"/blog/blog2"},"frontmatter":{"image":{"childrenImageSharp":[{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png","srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/f4be1/placeholder.png 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/b444b/placeholder.png 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/9b21f/placeholder.webp 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/9ff6b/placeholder.webp 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/f2559/placeholder.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}}]},"title":"Blogpost 2","author":"Max Mustermann","date":"Mon 11 Jul 2022"},"html":"<p>Consectetur amet laborum labore anim magna mollit aute. Occaecat cillum consectetur aliqua eiusmod pariatur consequat. In non elit consectetur laborum.</p>\\n<p>Consequat et consequat duis sint. Tempor laboris cupidatat cupidatat ea commodo incididunt ad reprehenderit ea laboris non laborum. Nisi sunt quis excepteur fugiat est quis quis labore. Nostrud cillum laboris incididunt duis et officia quis enim. Aliqua commodo tempor ad occaecat esse minim amet commodo.</p>\\n<p>Consectetur consectetur nostrud aute excepteur esse cupidatat amet exercitation. Labore in magna eu irure excepteur Lorem. Excepteur do culpa officia incididunt deserunt nostrud enim. Cillum reprehenderit veniam sint exercitation mollit.</p>\\n<p>Elit tempor occaecat irure eiusmod consectetur eiusmod enim ut deserunt magna ipsum reprehenderit aute. Commodo et eu ut nisi duis sint enim fugiat voluptate. Nulla sit culpa magna ad eiusmod tempor consequat cillum fugiat eu officia culpa eu amet. Magna sit dolore fugiat id qui nisi excepteur sunt dolore est nulla sint do. Consequat aute elit consequat magna eiusmod laborum sunt amet irure commodo est id occaecat.</p>\\n<p>Ullamco nisi nulla enim non officia dolor non consectetur magna veniam officia cupidatat Lorem veniam. Ex enim consequat ea occaecat fugiat est eu ad. Ut proident aliquip tempor esse proident adipisicing elit. Consectetur consequat veniam velit ad laborum non voluptate incididunt ad. Pariatur est incididunt eu reprehenderit ad ipsum fugiat excepteur enim excepteur nisi dolore culpa. Est consectetur non occaecat aute irure.</p>","id":"7a97f9df-2e78-5efe-9748-0118ab71d1fe"},{"fields":{"slug":"/blog/blog1"},"frontmatter":{"image":{"childrenImageSharp":[{"gatsbyImageData":{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png","srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/f4be1/placeholder.png 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/b444b/placeholder.png 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/ba986/placeholder.png 1200w","sizes":"(min-width: 1200px) 1200px, 100vw"},"sources":[{"srcSet":"/static/6e45d55cd3da3f0a9c12568e44160cff/9b21f/placeholder.webp 300w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/9ff6b/placeholder.webp 600w,\\n/static/6e45d55cd3da3f0a9c12568e44160cff/f2559/placeholder.webp 1200w","type":"image/webp","sizes":"(min-width: 1200px) 1200px, 100vw"}]},"width":1200,"height":800}}]},"title":"Blogpost 1","author":"Anne Steinhoff","date":"Tue 05 Jul 2022"},"html":"<p>Consectetur amet laborum labore anim magna mollit aute. Occaecat cillum consectetur aliqua eiusmod pariatur consequat. In non elit consectetur laborum.</p>\\n<p>Consequat et consequat duis sint. Tempor laboris cupidatat cupidatat ea commodo incididunt ad reprehenderit ea laboris non laborum. Nisi sunt quis excepteur fugiat est quis quis labore. Nostrud cillum laboris incididunt duis et officia quis enim. Aliqua commodo tempor ad occaecat esse minim amet commodo.</p>\\n<p>Consectetur consectetur nostrud aute excepteur esse cupidatat amet exercitation. Labore in magna eu irure excepteur Lorem. Excepteur do culpa officia incididunt deserunt nostrud enim. Cillum reprehenderit veniam sint exercitation mollit.</p>\\n<p>Elit tempor occaecat irure eiusmod consectetur eiusmod enim ut deserunt magna ipsum reprehenderit aute. Commodo et eu ut nisi duis sint enim fugiat voluptate. Nulla sit culpa magna ad eiusmod tempor consequat cillum fugiat eu officia culpa eu amet. Magna sit dolore fugiat id qui nisi excepteur sunt dolore est nulla sint do. Consequat aute elit consequat magna eiusmod laborum sunt amet irure commodo est id occaecat.</p>\\n<p>Ullamco nisi nulla enim non officia dolor non consectetur magna veniam officia cupidatat Lorem veniam. Ex enim consequat ea occaecat fugiat est eu ad. Ut proident aliquip tempor esse proident adipisicing elit. Consectetur consequat veniam velit ad laborum non voluptate incididunt ad. Pariatur est incididunt eu reprehenderit ad ipsum fugiat excepteur enim excepteur nisi dolore culpa. Est consectetur non occaecat aute irure.</p>","id":"44165417-68ae-53a5-a39f-a6d7bce2aa7f"}]}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-blog-js.js.map