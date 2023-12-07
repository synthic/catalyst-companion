webpackJsonpTheBeat(
  [1],
  {
    13: function (e, t, r) {
      var i = {
        REVISION: '71'
      };
      e.exports = i,
      void 0 === Math.sign &&
      (Math.sign = function (e) {
        return 0 > e ? - 1 : e > 0 ? 1 : + e
      }),
      i.log = function () {
        console.log.apply(console, arguments)
      },
      i.warn = function () {
        console.warn.apply(console, arguments)
      },
      i.error = function () {
        console.error.apply(console, arguments)
      },
      i.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
      },
      i.CullFaceNone = 0,
      i.CullFaceBack = 1,
      i.CullFaceFront = 2,
      i.CullFaceFrontBack = 3,
      i.FrontFaceDirectionCW = 0,
      i.FrontFaceDirectionCCW = 1,
      i.BasicShadowMap = 0,
      i.PCFShadowMap = 1,
      i.PCFSoftShadowMap = 2,
      i.FrontSide = 0,
      i.BackSide = 1,
      i.DoubleSide = 2,
      i.NoShading = 0,
      i.FlatShading = 1,
      i.SmoothShading = 2,
      i.NoColors = 0,
      i.FaceColors = 1,
      i.VertexColors = 2,
      i.NoBlending = 0,
      i.NormalBlending = 1,
      i.AdditiveBlending = 2,
      i.SubtractiveBlending = 3,
      i.MultiplyBlending = 4,
      i.CustomBlending = 5,
      i.AddEquation = 100,
      i.SubtractEquation = 101,
      i.ReverseSubtractEquation = 102,
      i.MinEquation = 103,
      i.MaxEquation = 104,
      i.ZeroFactor = 200,
      i.OneFactor = 201,
      i.SrcColorFactor = 202,
      i.OneMinusSrcColorFactor = 203,
      i.SrcAlphaFactor = 204,
      i.OneMinusSrcAlphaFactor = 205,
      i.DstAlphaFactor = 206,
      i.OneMinusDstAlphaFactor = 207,
      i.DstColorFactor = 208,
      i.OneMinusDstColorFactor = 209,
      i.SrcAlphaSaturateFactor = 210,
      i.MultiplyOperation = 0,
      i.MixOperation = 1,
      i.AddOperation = 2,
      i.UVMapping = 300,
      i.CubeReflectionMapping = 301,
      i.CubeRefractionMapping = 302,
      i.EquirectangularReflectionMapping = 303,
      i.EquirectangularRefractionMapping = 304,
      i.SphericalReflectionMapping = 305,
      i.RepeatWrapping = 1000,
      i.ClampToEdgeWrapping = 1001,
      i.MirroredRepeatWrapping = 1002,
      i.NearestFilter = 1003,
      i.NearestMipMapNearestFilter = 1004,
      i.NearestMipMapLinearFilter = 1005,
      i.LinearFilter = 1006,
      i.LinearMipMapNearestFilter = 1007,
      i.LinearMipMapLinearFilter = 1008,
      i.UnsignedByteType = 1009,
      i.ByteType = 1010,
      i.ShortType = 1011,
      i.UnsignedShortType = 1012,
      i.IntType = 1013,
      i.UnsignedIntType = 1014,
      i.FloatType = 1015,
      i.HalfFloatType = 1025,
      i.UnsignedShort4444Type = 1016,
      i.UnsignedShort5551Type = 1017,
      i.UnsignedShort565Type = 1018,
      i.AlphaFormat = 1019,
      i.RGBFormat = 1020,
      i.RGBAFormat = 1021,
      i.LuminanceFormat = 1022,
      i.LuminanceAlphaFormat = 1023,
      i.RGBEFormat = i.RGBAFormat,
      i.RGB_S3TC_DXT1_Format = 2001,
      i.RGBA_S3TC_DXT1_Format = 2002,
      i.RGBA_S3TC_DXT3_Format = 2003,
      i.RGBA_S3TC_DXT5_Format = 2004,
      i.RGB_PVRTC_4BPPV1_Format = 2100,
      i.RGB_PVRTC_2BPPV1_Format = 2101,
      i.RGBA_PVRTC_4BPPV1_Format = 2102,
      i.RGBA_PVRTC_2BPPV1_Format = 2103,
      i.Projector = function () {
        i.error(
          'THREE.Projector has been moved to /examples/js/renderers/Projector.js.'
        ),
        this.projectVector = function (e, t) {
          i.warn('THREE.Projector: .projectVector() is now vector.project().'),
          e.project(t)
        },
        this.unprojectVector = function (e, t) {
          i.warn(
            'THREE.Projector: .unprojectVector() is now vector.unproject().'
          ),
          e.unproject(t)
        },
        this.pickingRay = function (e, t) {
          i.error(
            'THREE.Projector: .pickingRay() is now raycaster.setFromCamera().'
          )
        }
      },
      i.CanvasRenderer = function () {
        i.error(
          'THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js'
        ),
        this.domElement = document.createElement('canvas'),
        this.clear = function () {
        },
        this.render = function () {
        },
        this.setClearColor = function () {
        },
        this.setSize = function () {
        }
      },
      i.Color = function (e) {
        return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(e)
      },
      i.Color.prototype = {
        constructor: i.Color,
        r: 1,
        g: 1,
        b: 1,
        set: function (e) {
          return e instanceof i.Color ? this.copy(e) : 'number' == typeof e ? this.setHex(e) : 'string' == typeof e &&
          this.setStyle(e),
          this
        },
        setHex: function (e) {
          return e = Math.floor(e),
          this.r = (e >> 16 & 255) / 255,
          this.g = (e >> 8 & 255) / 255,
          this.b = (255 & e) / 255,
          this
        },
        setRGB: function (e, t, r) {
          return this.r = e,
          this.g = t,
          this.b = r,
          this
        },
        setHSL: function (e, t, r) {
          if (0 === t) this.r = this.g = this.b = r;
           else {
            var i = function (e, t, r) {
              return 0 > r &&
              (r += 1),
              r > 1 &&
              (r -= 1),
              1 / 6 > r ? e + 6 * (t - e) * r : 0.5 > r ? t : 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e
            },
            n = 0.5 >= r ? r * (1 + t) : r + t - r * t,
            o = 2 * r - n;
            this.r = i(o, n, e + 1 / 3),
            this.g = i(o, n, e),
            this.b = i(o, n, e - 1 / 3)
          }
          return this
        },
        setStyle: function (e) {
          if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
            var t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
            return this.r = Math.min(255, parseInt(t[1], 10)) / 255,
            this.g = Math.min(255, parseInt(t[2], 10)) / 255,
            this.b = Math.min(255, parseInt(t[3], 10)) / 255,
            this
          }
          if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)) {
            var t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e);
            return this.r = Math.min(100, parseInt(t[1], 10)) / 100,
            this.g = Math.min(100, parseInt(t[2], 10)) / 100,
            this.b = Math.min(100, parseInt(t[3], 10)) / 100,
            this
          }
          if (/^\#([0-9a-f]{6})$/i.test(e)) {
            var t = /^\#([0-9a-f]{6})$/i.exec(e);
            return this.setHex(parseInt(t[1], 16)),
            this
          }
          if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
            var t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
            return this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)),
            this
          }
          return /^(\w+)$/i.test(e) ? (this.setHex(i.ColorKeywords[e]), this) : void 0
        },
        copy: function (e) {
          return this.r = e.r,
          this.g = e.g,
          this.b = e.b,
          this
        },
        copyGammaToLinear: function (e, t) {
          return void 0 === t &&
          (t = 2),
          this.r = Math.pow(e.r, t),
          this.g = Math.pow(e.g, t),
          this.b = Math.pow(e.b, t),
          this
        },
        copyLinearToGamma: function (e, t) {
          void 0 === t &&
          (t = 2);
          var r = t > 0 ? 1 / t : 1;
          return this.r = Math.pow(e.r, r),
          this.g = Math.pow(e.g, r),
          this.b = Math.pow(e.b, r),
          this
        },
        convertGammaToLinear: function () {
          var e = this.r,
          t = this.g,
          r = this.b;
          return this.r = e * e,
          this.g = t * t,
          this.b = r * r,
          this
        },
        convertLinearToGamma: function () {
          return this.r = Math.sqrt(this.r),
          this.g = Math.sqrt(this.g),
          this.b = Math.sqrt(this.b),
          this
        },
        getHex: function () {
          return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function () {
          return ('000000' + this.getHex().toString(16)).slice( - 6)
        },
        getHSL: function (e) {
          var t,
          r,
          i = e ||
          {
            h: 0,
            s: 0,
            l: 0
          },
          n = this.r,
          o = this.g,
          a = this.b,
          s = Math.max(n, o, a),
          h = Math.min(n, o, a),
          c = (h + s) / 2;
          if (h === s) t = 0,
          r = 0;
           else {
            var l = s - h;
            switch (r = 0.5 >= c ? l / (s + h) : l / (2 - s - h), s) {
              case n:
                t = (o - a) / l + (a > o ? 6 : 0);
                break;
              case o:
                t = (a - n) / l + 2;
                break;
              case a:
                t = (n - o) / l + 4
            }
            t /= 6
          }
          return i.h = t,
          i.s = r,
          i.l = c,
          i
        },
        getStyle: function () {
          return 'rgb(' + (255 * this.r | 0) + ',' + (255 * this.g | 0) + ',' + (255 * this.b | 0) + ')'
        },
        offsetHSL: function (e, t, r) {
          var i = this.getHSL();
          return i.h += e,
          i.s += t,
          i.l += r,
          this.setHSL(i.h, i.s, i.l),
          this
        },
        add: function (e) {
          return this.r += e.r,
          this.g += e.g,
          this.b += e.b,
          this
        },
        addColors: function (e, t) {
          return this.r = e.r + t.r,
          this.g = e.g + t.g,
          this.b = e.b + t.b,
          this
        },
        addScalar: function (e) {
          return this.r += e,
          this.g += e,
          this.b += e,
          this
        },
        multiply: function (e) {
          return this.r *= e.r,
          this.g *= e.g,
          this.b *= e.b,
          this
        },
        multiplyScalar: function (e) {
          return this.r *= e,
          this.g *= e,
          this.b *= e,
          this
        },
        lerp: function (e, t) {
          return this.r += (e.r - this.r) * t,
          this.g += (e.g - this.g) * t,
          this.b += (e.b - this.b) * t,
          this
        },
        equals: function (e) {
          return e.r === this.r &&
          e.g === this.g &&
          e.b === this.b
        },
        fromArray: function (e) {
          return this.r = e[0],
          this.g = e[1],
          this.b = e[2],
          this
        },
        toArray: function (e, t) {
          return void 0 === e &&
          (e = []),
          void 0 === t &&
          (t = 0),
          e[t] = this.r,
          e[t + 1] = this.g,
          e[t + 2] = this.b,
          e
        },
        clone: function () {
          return (new i.Color).setRGB(this.r, this.g, this.b)
        }
      },
      i.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
      },
      i.Quaternion = function (e, t, r, i) {
        this._x = e ||
        0,
        this._y = t ||
        0,
        this._z = r ||
        0,
        this._w = void 0 !== i ? i : 1
      },
      i.Quaternion.prototype = {
        constructor: i.Quaternion,
        _x: 0,
        _y: 0,
        _z: 0,
        _w: 0,
        get x() {
          return this._x
        },
        set x(e) {
          this._x = e,
          this.onChangeCallback()
        },
        get y() {
          return this._y
        },
        set y(e) {
          this._y = e,
          this.onChangeCallback()
        },
        get z() {
          return this._z
        },
        set z(e) {
          this._z = e,
          this.onChangeCallback()
        },
        get w() {
          return this._w
        },
        set w(e) {
          this._w = e,
          this.onChangeCallback()
        },
        set: function (e, t, r, i) {
          return this._x = e,
          this._y = t,
          this._z = r,
          this._w = i,
          this.onChangeCallback(),
          this
        },
        copy: function (e) {
          return this._x = e.x,
          this._y = e.y,
          this._z = e.z,
          this._w = e.w,
          this.onChangeCallback(),
          this
        },
        setFromEuler: function (e, t) {
          if (e instanceof i.Euler == !1) throw new Error(
            'THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.'
          );
          var r = Math.cos(e._x / 2),
          n = Math.cos(e._y / 2),
          o = Math.cos(e._z / 2),
          a = Math.sin(e._x / 2),
          s = Math.sin(e._y / 2),
          h = Math.sin(e._z / 2);
          return 'XYZ' === e.order ? (
            this._x = a * n * o + r * s * h,
            this._y = r * s * o - a * n * h,
            this._z = r * n * h + a * s * o,
            this._w = r * n * o - a * s * h
          ) : 'YXZ' === e.order ? (
            this._x = a * n * o + r * s * h,
            this._y = r * s * o - a * n * h,
            this._z = r * n * h - a * s * o,
            this._w = r * n * o + a * s * h
          ) : 'ZXY' === e.order ? (
            this._x = a * n * o - r * s * h,
            this._y = r * s * o + a * n * h,
            this._z = r * n * h + a * s * o,
            this._w = r * n * o - a * s * h
          ) : 'ZYX' === e.order ? (
            this._x = a * n * o - r * s * h,
            this._y = r * s * o + a * n * h,
            this._z = r * n * h - a * s * o,
            this._w = r * n * o + a * s * h
          ) : 'YZX' === e.order ? (
            this._x = a * n * o + r * s * h,
            this._y = r * s * o + a * n * h,
            this._z = r * n * h - a * s * o,
            this._w = r * n * o - a * s * h
          ) : 'XZY' === e.order &&
          (
            this._x = a * n * o - r * s * h,
            this._y = r * s * o - a * n * h,
            this._z = r * n * h + a * s * o,
            this._w = r * n * o + a * s * h
          ),
          t !== !1 &&
          this.onChangeCallback(),
          this
        },
        setFromAxisAngle: function (e, t) {
          var r = t / 2,
          i = Math.sin(r);
          return this._x = e.x * i,
          this._y = e.y * i,
          this._z = e.z * i,
          this._w = Math.cos(r),
          this.onChangeCallback(),
          this
        },
        setFromRotationMatrix: function (e) {
          var t,
          r = e.elements,
          i = r[0],
          n = r[4],
          o = r[8],
          a = r[1],
          s = r[5],
          h = r[9],
          c = r[2],
          l = r[6],
          u = r[10],
          d = i + s + u;
          return d > 0 ? (
            t = 0.5 / Math.sqrt(d + 1),
            this._w = 0.25 / t,
            this._x = (l - h) * t,
            this._y = (o - c) * t,
            this._z = (a - n) * t
          ) : i > s &&
          i > u ? (
            t = 2 * Math.sqrt(1 + i - s - u),
            this._w = (l - h) / t,
            this._x = 0.25 * t,
            this._y = (n + a) / t,
            this._z = (o + c) / t
          ) : s > u ? (
            t = 2 * Math.sqrt(1 + s - i - u),
            this._w = (o - c) / t,
            this._x = (n + a) / t,
            this._y = 0.25 * t,
            this._z = (h + l) / t
          ) : (
            t = 2 * Math.sqrt(1 + u - i - s),
            this._w = (a - n) / t,
            this._x = (o + c) / t,
            this._y = (h + l) / t,
            this._z = 0.25 * t
          ),
          this.onChangeCallback(),
          this
        },
        setFromUnitVectors: function () {
          var e,
          t,
          r = 0.000001;
          return function (n, o) {
            return void 0 === e &&
            (e = new i.Vector3),
            t = n.dot(o) + 1,
            r > t ? (
              t = 0,
              Math.abs(n.x) > Math.abs(n.z) ? e.set( - n.y, n.x, 0) : e.set(0, - n.z, n.y)
            ) : e.crossVectors(n, o),
            this._x = e.x,
            this._y = e.y,
            this._z = e.z,
            this._w = t,
            this.normalize(),
            this
          }
        }(),
        inverse: function () {
          return this.conjugate().normalize(),
          this
        },
        conjugate: function () {
          return this._x *= - 1,
          this._y *= - 1,
          this._z *= - 1,
          this.onChangeCallback(),
          this
        },
        dot: function (e) {
          return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
        },
        lengthSq: function () {
          return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function () {
          return Math.sqrt(
            this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
          )
        },
        normalize: function () {
          var e = this.length();
          return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (
            e = 1 / e,
            this._x = this._x * e,
            this._y = this._y * e,
            this._z = this._z * e,
            this._w = this._w * e
          ),
          this.onChangeCallback(),
          this
        },
        multiply: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.'
            ),
            this.multiplyQuaternions(e, t)
          ) : this.multiplyQuaternions(this, e)
        },
        multiplyQuaternions: function (e, t) {
          var r = e._x,
          i = e._y,
          n = e._z,
          o = e._w,
          a = t._x,
          s = t._y,
          h = t._z,
          c = t._w;
          return this._x = r * c + o * a + i * h - n * s,
          this._y = i * c + o * s + n * a - r * h,
          this._z = n * c + o * h + r * s - i * a,
          this._w = o * c - r * a - i * s - n * h,
          this.onChangeCallback(),
          this
        },
        multiplyVector3: function (e) {
          return i.warn(
            'THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.'
          ),
          e.applyQuaternion(this)
        },
        slerp: function (e, t) {
          if (0 === t) return this;
          if (1 === t) return this.copy(e);
          var r = this._x,
          i = this._y,
          n = this._z,
          o = this._w,
          a = o * e._w + r * e._x + i * e._y + n * e._z;
          if (
            0 > a ? (this._w = - e._w, this._x = - e._x, this._y = - e._y, this._z = - e._z, a = - a) : this.copy(e),
            a >= 1
          ) return this._w = o,
          this._x = r,
          this._y = i,
          this._z = n,
          this;
          var s = Math.acos(a),
          h = Math.sqrt(1 - a * a);
          if (Math.abs(h) < 0.001) return this._w = 0.5 * (o + this._w),
          this._x = 0.5 * (r + this._x),
          this._y = 0.5 * (i + this._y),
          this._z = 0.5 * (n + this._z),
          this;
          var c = Math.sin((1 - t) * s) / h,
          l = Math.sin(t * s) / h;
          return this._w = o * c + this._w * l,
          this._x = r * c + this._x * l,
          this._y = i * c + this._y * l,
          this._z = n * c + this._z * l,
          this.onChangeCallback(),
          this
        },
        equals: function (e) {
          return e._x === this._x &&
          e._y === this._y &&
          e._z === this._z &&
          e._w === this._w
        },
        fromArray: function (e, t) {
          return void 0 === t &&
          (t = 0),
          this._x = e[t],
          this._y = e[t + 1],
          this._z = e[t + 2],
          this._w = e[t + 3],
          this.onChangeCallback(),
          this
        },
        toArray: function (e, t) {
          return void 0 === e &&
          (e = []),
          void 0 === t &&
          (t = 0),
          e[t] = this._x,
          e[t + 1] = this._y,
          e[t + 2] = this._z,
          e[t + 3] = this._w,
          e
        },
        onChange: function (e) {
          return this.onChangeCallback = e,
          this
        },
        onChangeCallback: function () {
        },
        clone: function () {
          return new i.Quaternion(this._x, this._y, this._z, this._w)
        }
      },
      i.Quaternion.slerp = function (e, t, r, i) {
        return r.copy(e).slerp(t, i)
      },
      i.Vector2 = function (e, t) {
        this.x = e ||
        0,
        this.y = t ||
        0
      },
      i.Vector2.prototype = {
        constructor: i.Vector2,
        set: function (e, t) {
          return this.x = e,
          this.y = t,
          this
        },
        setX: function (e) {
          return this.x = e,
          this
        },
        setY: function (e) {
          return this.y = e,
          this
        },
        setComponent: function (e, t) {
          switch (e) {
            case 0:
              this.x = t;
              break;
            case 1:
              this.y = t;
              break;
            default:
              throw new Error('index is out of range: ' + e)
          }
        },
        getComponent: function (e) {
          switch (e) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            default:
              throw new Error('index is out of range: ' + e)
          }
        },
        copy: function (e) {
          return this.x = e.x,
          this.y = e.y,
          this
        },
        add: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
            ),
            this.addVectors(e, t)
          ) : (this.x += e.x, this.y += e.y, this)
        },
        addScalar: function (e) {
          return this.x += e,
          this.y += e,
          this
        },
        addVectors: function (e, t) {
          return this.x = e.x + t.x,
          this.y = e.y + t.y,
          this
        },
        sub: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
            ),
            this.subVectors(e, t)
          ) : (this.x -= e.x, this.y -= e.y, this)
        },
        subScalar: function (e) {
          return this.x -= e,
          this.y -= e,
          this
        },
        subVectors: function (e, t) {
          return this.x = e.x - t.x,
          this.y = e.y - t.y,
          this
        },
        multiply: function (e) {
          return this.x *= e.x,
          this.y *= e.y,
          this
        },
        multiplyScalar: function (e) {
          return this.x *= e,
          this.y *= e,
          this
        },
        divide: function (e) {
          return this.x /= e.x,
          this.y /= e.y,
          this
        },
        divideScalar: function (e) {
          if (0 !== e) {
            var t = 1 / e;
            this.x *= t,
            this.y *= t
          } else this.x = 0,
          this.y = 0;
          return this
        },
        min: function (e) {
          return this.x > e.x &&
          (this.x = e.x),
          this.y > e.y &&
          (this.y = e.y),
          this
        },
        max: function (e) {
          return this.x < e.x &&
          (this.x = e.x),
          this.y < e.y &&
          (this.y = e.y),
          this
        },
        clamp: function (e, t) {
          return this.x < e.x ? this.x = e.x : this.x > t.x &&
          (this.x = t.x),
          this.y < e.y ? this.y = e.y : this.y > t.y &&
          (this.y = t.y),
          this
        },
        clampScalar: function () {
          var e,
          t;
          return function (r, n) {
            return void 0 === e &&
            (e = new i.Vector2, t = new i.Vector2),
            e.set(r, r),
            t.set(n, n),
            this.clamp(e, t)
          }
        }(),
        floor: function () {
          return this.x = Math.floor(this.x),
          this.y = Math.floor(this.y),
          this
        },
        ceil: function () {
          return this.x = Math.ceil(this.x),
          this.y = Math.ceil(this.y),
          this
        },
        round: function () {
          return this.x = Math.round(this.x),
          this.y = Math.round(this.y),
          this
        },
        roundToZero: function () {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
          this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
          this
        },
        negate: function () {
          return this.x = - this.x,
          this.y = - this.y,
          this
        },
        dot: function (e) {
          return this.x * e.x + this.y * e.y
        },
        lengthSq: function () {
          return this.x * this.x + this.y * this.y
        },
        length: function () {
          return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        normalize: function () {
          return this.divideScalar(this.length())
        },
        distanceTo: function (e) {
          return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function (e) {
          var t = this.x - e.x,
          r = this.y - e.y;
          return t * t + r * r
        },
        setLength: function (e) {
          var t = this.length();
          return 0 !== t &&
          e !== t &&
          this.multiplyScalar(e / t),
          this
        },
        lerp: function (e, t) {
          return this.x += (e.x - this.x) * t,
          this.y += (e.y - this.y) * t,
          this
        },
        lerpVectors: function (e, t, r) {
          return this.subVectors(t, e).multiplyScalar(r).add(e),
          this
        },
        equals: function (e) {
          return e.x === this.x &&
          e.y === this.y
        },
        fromArray: function (e, t) {
          return void 0 === t &&
          (t = 0),
          this.x = e[t],
          this.y = e[t + 1],
          this
        },
        toArray: function (e, t) {
          return void 0 === e &&
          (e = []),
          void 0 === t &&
          (t = 0),
          e[t] = this.x,
          e[t + 1] = this.y,
          e
        },
        fromAttribute: function (e, t, r) {
          return void 0 === r &&
          (r = 0),
          t = t * e.itemSize + r,
          this.x = e.array[t],
          this.y = e.array[t + 1],
          this
        },
        clone: function () {
          return new i.Vector2(this.x, this.y)
        }
      },
      i.Vector3 = function (e, t, r) {
        this.x = e ||
        0,
        this.y = t ||
        0,
        this.z = r ||
        0
      },
      i.Vector3.prototype = {
        constructor: i.Vector3,
        set: function (e, t, r) {
          return this.x = e,
          this.y = t,
          this.z = r,
          this
        },
        setX: function (e) {
          return this.x = e,
          this
        },
        setY: function (e) {
          return this.y = e,
          this
        },
        setZ: function (e) {
          return this.z = e,
          this
        },
        setComponent: function (e, t) {
          switch (e) {
            case 0:
              this.x = t;
              break;
            case 1:
              this.y = t;
              break;
            case 2:
              this.z = t;
              break;
            default:
              throw new Error('index is out of range: ' + e)
          }
        },
        getComponent: function (e) {
          switch (e) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            default:
              throw new Error('index is out of range: ' + e)
          }
        },
        copy: function (e) {
          return this.x = e.x,
          this.y = e.y,
          this.z = e.z,
          this
        },
        add: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
            ),
            this.addVectors(e, t)
          ) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
        },
        addScalar: function (e) {
          return this.x += e,
          this.y += e,
          this.z += e,
          this
        },
        addVectors: function (e, t) {
          return this.x = e.x + t.x,
          this.y = e.y + t.y,
          this.z = e.z + t.z,
          this
        },
        sub: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
            ),
            this.subVectors(e, t)
          ) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
        },
        subScalar: function (e) {
          return this.x -= e,
          this.y -= e,
          this.z -= e,
          this
        },
        subVectors: function (e, t) {
          return this.x = e.x - t.x,
          this.y = e.y - t.y,
          this.z = e.z - t.z,
          this
        },
        multiply: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.'
            ),
            this.multiplyVectors(e, t)
          ) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
        },
        multiplyScalar: function (e) {
          return this.x *= e,
          this.y *= e,
          this.z *= e,
          this
        },
        multiplyVectors: function (e, t) {
          return this.x = e.x * t.x,
          this.y = e.y * t.y,
          this.z = e.z * t.z,
          this
        },
        applyEuler: function () {
          var e;
          return function (t) {
            return t instanceof i.Euler == !1 &&
            i.error(
              'THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.'
            ),
            void 0 === e &&
            (e = new i.Quaternion),
            this.applyQuaternion(e.setFromEuler(t)),
            this
          }
        }(),
        applyAxisAngle: function () {
          var e;
          return function (t, r) {
            return void 0 === e &&
            (e = new i.Quaternion),
            this.applyQuaternion(e.setFromAxisAngle(t, r)),
            this
          }
        }(),
        applyMatrix3: function (e) {
          var t = this.x,
          r = this.y,
          i = this.z,
          n = e.elements;
          return this.x = n[0] * t + n[3] * r + n[6] * i,
          this.y = n[1] * t + n[4] * r + n[7] * i,
          this.z = n[2] * t + n[5] * r + n[8] * i,
          this
        },
        applyMatrix4: function (e) {
          var t = this.x,
          r = this.y,
          i = this.z,
          n = e.elements;
          return this.x = n[0] * t + n[4] * r + n[8] * i + n[12],
          this.y = n[1] * t + n[5] * r + n[9] * i + n[13],
          this.z = n[2] * t + n[6] * r + n[10] * i + n[14],
          this
        },
        applyProjection: function (e) {
          var t = this.x,
          r = this.y,
          i = this.z,
          n = e.elements,
          o = 1 / (n[3] * t + n[7] * r + n[11] * i + n[15]);
          return this.x = (n[0] * t + n[4] * r + n[8] * i + n[12]) * o,
          this.y = (n[1] * t + n[5] * r + n[9] * i + n[13]) * o,
          this.z = (n[2] * t + n[6] * r + n[10] * i + n[14]) * o,
          this
        },
        applyQuaternion: function (e) {
          var t = this.x,
          r = this.y,
          i = this.z,
          n = e.x,
          o = e.y,
          a = e.z,
          s = e.w,
          h = s * t + o * i - a * r,
          c = s * r + a * t - n * i,
          l = s * i + n * r - o * t,
          u = - n * t - o * r - a * i;
          return this.x = h * s + u * - n + c * - a - l * - o,
          this.y = c * s + u * - o + l * - n - h * - a,
          this.z = l * s + u * - a + h * - o - c * - n,
          this
        },
        project: function () {
          var e;
          return function (t) {
            return void 0 === e &&
            (e = new i.Matrix4),
            e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)),
            this.applyProjection(e)
          }
        }(),
        unproject: function () {
          var e;
          return function (t) {
            return void 0 === e &&
            (e = new i.Matrix4),
            e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)),
            this.applyProjection(e)
          }
        }(),
        transformDirection: function (e) {
          var t = this.x,
          r = this.y,
          i = this.z,
          n = e.elements;
          return this.x = n[0] * t + n[4] * r + n[8] * i,
          this.y = n[1] * t + n[5] * r + n[9] * i,
          this.z = n[2] * t + n[6] * r + n[10] * i,
          this.normalize(),
          this
        },
        divide: function (e) {
          return this.x /= e.x,
          this.y /= e.y,
          this.z /= e.z,
          this
        },
        divideScalar: function (e) {
          if (0 !== e) {
            var t = 1 / e;
            this.x *= t,
            this.y *= t,
            this.z *= t
          } else this.x = 0,
          this.y = 0,
          this.z = 0;
          return this
        },
        min: function (e) {
          return this.x > e.x &&
          (this.x = e.x),
          this.y > e.y &&
          (this.y = e.y),
          this.z > e.z &&
          (this.z = e.z),
          this
        },
        max: function (e) {
          return this.x < e.x &&
          (this.x = e.x),
          this.y < e.y &&
          (this.y = e.y),
          this.z < e.z &&
          (this.z = e.z),
          this
        },
        clamp: function (e, t) {
          return this.x < e.x ? this.x = e.x : this.x > t.x &&
          (this.x = t.x),
          this.y < e.y ? this.y = e.y : this.y > t.y &&
          (this.y = t.y),
          this.z < e.z ? this.z = e.z : this.z > t.z &&
          (this.z = t.z),
          this
        },
        clampScalar: function () {
          var e,
          t;
          return function (r, n) {
            return void 0 === e &&
            (e = new i.Vector3, t = new i.Vector3),
            e.set(r, r, r),
            t.set(n, n, n),
            this.clamp(e, t)
          }
        }(),
        floor: function () {
          return this.x = Math.floor(this.x),
          this.y = Math.floor(this.y),
          this.z = Math.floor(this.z),
          this
        },
        ceil: function () {
          return this.x = Math.ceil(this.x),
          this.y = Math.ceil(this.y),
          this.z = Math.ceil(this.z),
          this
        },
        round: function () {
          return this.x = Math.round(this.x),
          this.y = Math.round(this.y),
          this.z = Math.round(this.z),
          this
        },
        roundToZero: function () {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
          this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
          this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
          this
        },
        negate: function () {
          return this.x = - this.x,
          this.y = - this.y,
          this.z = - this.z,
          this
        },
        dot: function (e) {
          return this.x * e.x + this.y * e.y + this.z * e.z
        },
        lengthSq: function () {
          return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function () {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function () {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function () {
          return this.divideScalar(this.length())
        },
        setLength: function (e) {
          var t = this.length();
          return 0 !== t &&
          e !== t &&
          this.multiplyScalar(e / t),
          this
        },
        lerp: function (e, t) {
          return this.x += (e.x - this.x) * t,
          this.y += (e.y - this.y) * t,
          this.z += (e.z - this.z) * t,
          this
        },
        lerpVectors: function (e, t, r) {
          return this.subVectors(t, e).multiplyScalar(r).add(e),
          this
        },
        cross: function (e, t) {
          if (void 0 !== t) return i.warn(
            'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.'
          ),
          this.crossVectors(e, t);
          var r = this.x,
          n = this.y,
          o = this.z;
          return this.x = n * e.z - o * e.y,
          this.y = o * e.x - r * e.z,
          this.z = r * e.y - n * e.x,
          this
        },
        crossVectors: function (e, t) {
          var r = e.x,
          i = e.y,
          n = e.z,
          o = t.x,
          a = t.y,
          s = t.z;
          return this.x = i * s - n * a,
          this.y = n * o - r * s,
          this.z = r * a - i * o,
          this
        },
        projectOnVector: function () {
          var e,
          t;
          return function (r) {
            return void 0 === e &&
            (e = new i.Vector3),
            e.copy(r).normalize(),
            t = this.dot(e),
            this.copy(e).multiplyScalar(t)
          }
        }(),
        projectOnPlane: function () {
          var e;
          return function (t) {
            return void 0 === e &&
            (e = new i.Vector3),
            e.copy(this).projectOnVector(t),
            this.sub(e)
          }
        }(),
        reflect: function () {
          var e;
          return function (t) {
            return void 0 === e &&
            (e = new i.Vector3),
            this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
          }
        }(),
        angleTo: function (e) {
          var t = this.dot(e) / (this.length() * e.length());
          return Math.acos(i.Math.clamp(t, - 1, 1))
        },
        distanceTo: function (e) {
          return Math.sqrt(this.distanceToSquared(e))
        },
        distanceToSquared: function (e) {
          var t = this.x - e.x,
          r = this.y - e.y,
          i = this.z - e.z;
          return t * t + r * r + i * i
        },
        setEulerFromRotationMatrix: function (e, t) {
          i.error(
            'THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.'
          )
        },
        setEulerFromQuaternion: function (e, t) {
          i.error(
            'THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.'
          )
        },
        getPositionFromMatrix: function (e) {
          return i.warn(
            'THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().'
          ),
          this.setFromMatrixPosition(e)
        },
        getScaleFromMatrix: function (e) {
          return i.warn(
            'THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().'
          ),
          this.setFromMatrixScale(e)
        },
        getColumnFromMatrix: function (e, t) {
          return i.warn(
            'THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().'
          ),
          this.setFromMatrixColumn(e, t)
        },
        setFromMatrixPosition: function (e) {
          return this.x = e.elements[12],
          this.y = e.elements[13],
          this.z = e.elements[14],
          this
        },
        setFromMatrixScale: function (e) {
          var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
          r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
          i = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
          return this.x = t,
          this.y = r,
          this.z = i,
          this
        },
        setFromMatrixColumn: function (e, t) {
          var r = 4 * e,
          i = t.elements;
          return this.x = i[r],
          this.y = i[r + 1],
          this.z = i[r + 2],
          this
        },
        equals: function (e) {
          return e.x === this.x &&
          e.y === this.y &&
          e.z === this.z
        },
        fromArray: function (e, t) {
          return void 0 === t &&
          (t = 0),
          this.x = e[t],
          this.y = e[t + 1],
          this.z = e[t + 2],
          this
        },
        toArray: function (e, t) {
          return void 0 === e &&
          (e = []),
          void 0 === t &&
          (t = 0),
          e[t] = this.x,
          e[t + 1] = this.y,
          e[t + 2] = this.z,
          e
        },
        fromAttribute: function (e, t, r) {
          return void 0 === r &&
          (r = 0),
          t = t * e.itemSize + r,
          this.x = e.array[t],
          this.y = e.array[t + 1],
          this.z = e.array[t + 2],
          this
        },
        clone: function () {
          return new i.Vector3(this.x, this.y, this.z)
        }
      },
      i.Vector4 = function (e, t, r, i) {
        this.x = e ||
        0,
        this.y = t ||
        0,
        this.z = r ||
        0,
        this.w = void 0 !== i ? i : 1
      },
      i.Vector4.prototype = {
        constructor: i.Vector4,
        set: function (e, t, r, i) {
          return this.x = e,
          this.y = t,
          this.z = r,
          this.w = i,
          this
        },
        setX: function (e) {
          return this.x = e,
          this
        },
        setY: function (e) {
          return this.y = e,
          this
        },
        setZ: function (e) {
          return this.z = e,
          this
        },
        setW: function (e) {
          return this.w = e,
          this
        },
        setComponent: function (e, t) {
          switch (e) {
            case 0:
              this.x = t;
              break;
            case 1:
              this.y = t;
              break;
            case 2:
              this.z = t;
              break;
            case 3:
              this.w = t;
              break;
            default:
              throw new Error('index is out of range: ' + e)
          }
        },
        getComponent: function (e) {
          switch (e) {
            case 0:
              return this.x;
            case 1:
              return this.y;
            case 2:
              return this.z;
            case 3:
              return this.w;
            default:
              throw new Error('index is out of range: ' + e)
          }
        },
        copy: function (e) {
          return this.x = e.x,
          this.y = e.y,
          this.z = e.z,
          this.w = void 0 !== e.w ? e.w : 1,
          this
        },
        add: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.'
            ),
            this.addVectors(e, t)
          ) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
        },
        addScalar: function (e) {
          return this.x += e,
          this.y += e,
          this.z += e,
          this.w += e,
          this
        },
        addVectors: function (e, t) {
          return this.x = e.x + t.x,
          this.y = e.y + t.y,
          this.z = e.z + t.z,
          this.w = e.w + t.w,
          this
        },
        sub: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.'
            ),
            this.subVectors(e, t)
          ) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
        },
        subScalar: function (e) {
          return this.x -= e,
          this.y -= e,
          this.z -= e,
          this.w -= e,
          this
        },
        subVectors: function (e, t) {
          return this.x = e.x - t.x,
          this.y = e.y - t.y,
          this.z = e.z - t.z,
          this.w = e.w - t.w,
          this
        },
        multiplyScalar: function (e) {
          return this.x *= e,
          this.y *= e,
          this.z *= e,
          this.w *= e,
          this
        },
        applyMatrix4: function (e) {
          var t = this.x,
          r = this.y,
          i = this.z,
          n = this.w,
          o = e.elements;
          return this.x = o[0] * t + o[4] * r + o[8] * i + o[12] * n,
          this.y = o[1] * t + o[5] * r + o[9] * i + o[13] * n,
          this.z = o[2] * t + o[6] * r + o[10] * i + o[14] * n,
          this.w = o[3] * t + o[7] * r + o[11] * i + o[15] * n,
          this
        },
        divideScalar: function (e) {
          if (0 !== e) {
            var t = 1 / e;
            this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t
          } else this.x = 0,
          this.y = 0,
          this.z = 0,
          this.w = 1;
          return this
        },
        setAxisAngleFromQuaternion: function (e) {
          this.w = 2 * Math.acos(e.w);
          var t = Math.sqrt(1 - e.w * e.w);
          return 0.0001 > t ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t),
          this
        },
        setAxisAngleFromRotationMatrix: function (e) {
          var t,
          r,
          i,
          n,
          o = 0.01,
          a = 0.1,
          s = e.elements,
          h = s[0],
          c = s[4],
          l = s[8],
          u = s[1],
          d = s[5],
          f = s[9],
          p = s[2],
          m = s[6],
          v = s[10];
          if (Math.abs(c - u) < o && Math.abs(l - p) < o && Math.abs(f - m) < o) {
            if (
              Math.abs(c + u) < a &&
              Math.abs(l + p) < a &&
              Math.abs(f + m) < a &&
              Math.abs(h + d + v - 3) < a
            ) return this.set(1, 0, 0, 0),
            this;
            t = Math.PI;
            var g = (h + 1) / 2,
            y = (d + 1) / 2,
            x = (v + 1) / 2,
            _ = (c + u) / 4,
            w = (l + p) / 4,
            b = (f + m) / 4;
            return g > y &&
            g > x ? o > g ? (r = 0, i = 0.707106781, n = 0.707106781) : (r = Math.sqrt(g), i = _ / r, n = w / r) : y > x ? o > y ? (r = 0.707106781, i = 0, n = 0.707106781) : (i = Math.sqrt(y), r = _ / i, n = b / i) : o > x ? (r = 0.707106781, i = 0.707106781, n = 0) : (n = Math.sqrt(x), r = w / n, i = b / n),
            this.set(r, i, n, t),
            this
          }
          var M = Math.sqrt((m - f) * (m - f) + (l - p) * (l - p) + (u - c) * (u - c));
          return Math.abs(M) < 0.001 &&
          (M = 1),
          this.x = (m - f) / M,
          this.y = (l - p) / M,
          this.z = (u - c) / M,
          this.w = Math.acos((h + d + v - 1) / 2),
          this
        },
        min: function (e) {
          return this.x > e.x &&
          (this.x = e.x),
          this.y > e.y &&
          (this.y = e.y),
          this.z > e.z &&
          (this.z = e.z),
          this.w > e.w &&
          (this.w = e.w),
          this
        },
        max: function (e) {
          return this.x < e.x &&
          (this.x = e.x),
          this.y < e.y &&
          (this.y = e.y),
          this.z < e.z &&
          (this.z = e.z),
          this.w < e.w &&
          (this.w = e.w),
          this
        },
        clamp: function (e, t) {
          return this.x < e.x ? this.x = e.x : this.x > t.x &&
          (this.x = t.x),
          this.y < e.y ? this.y = e.y : this.y > t.y &&
          (this.y = t.y),
          this.z < e.z ? this.z = e.z : this.z > t.z &&
          (this.z = t.z),
          this.w < e.w ? this.w = e.w : this.w > t.w &&
          (this.w = t.w),
          this
        },
        clampScalar: function () {
          var e,
          t;
          return function (r, n) {
            return void 0 === e &&
            (e = new i.Vector4, t = new i.Vector4),
            e.set(r, r, r, r),
            t.set(n, n, n, n),
            this.clamp(e, t)
          }
        }(),
        floor: function () {
          return this.x = Math.floor(this.x),
          this.y = Math.floor(this.y),
          this.z = Math.floor(this.z),
          this.w = Math.floor(this.w),
          this
        },
        ceil: function () {
          return this.x = Math.ceil(this.x),
          this.y = Math.ceil(this.y),
          this.z = Math.ceil(this.z),
          this.w = Math.ceil(this.w),
          this
        },
        round: function () {
          return this.x = Math.round(this.x),
          this.y = Math.round(this.y),
          this.z = Math.round(this.z),
          this.w = Math.round(this.w),
          this
        },
        roundToZero: function () {
          return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
          this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
          this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
          this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
          this
        },
        negate: function () {
          return this.x = - this.x,
          this.y = - this.y,
          this.z = - this.z,
          this.w = - this.w,
          this
        },
        dot: function (e) {
          return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
        },
        lengthSq: function () {
          return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function () {
          return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function () {
          return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function () {
          return this.divideScalar(this.length())
        },
        setLength: function (e) {
          var t = this.length();
          return 0 !== t &&
          e !== t &&
          this.multiplyScalar(e / t),
          this
        },
        lerp: function (e, t) {
          return this.x += (e.x - this.x) * t,
          this.y += (e.y - this.y) * t,
          this.z += (e.z - this.z) * t,
          this.w += (e.w - this.w) * t,
          this
        },
        lerpVectors: function (e, t, r) {
          return this.subVectors(t, e).multiplyScalar(r).add(e),
          this
        },
        equals: function (e) {
          return e.x === this.x &&
          e.y === this.y &&
          e.z === this.z &&
          e.w === this.w
        },
        fromArray: function (e, t) {
          return void 0 === t &&
          (t = 0),
          this.x = e[t],
          this.y = e[t + 1],
          this.z = e[t + 2],
          this.w = e[t + 3],
          this
        },
        toArray: function (e, t) {
          return void 0 === e &&
          (e = []),
          void 0 === t &&
          (t = 0),
          e[t] = this.x,
          e[t + 1] = this.y,
          e[t + 2] = this.z,
          e[t + 3] = this.w,
          e
        },
        fromAttribute: function (e, t, r) {
          return void 0 === r &&
          (r = 0),
          t = t * e.itemSize + r,
          this.x = e.array[t],
          this.y = e.array[t + 1],
          this.z = e.array[t + 2],
          this.w = e.array[t + 3],
          this
        },
        clone: function () {
          return new i.Vector4(this.x, this.y, this.z, this.w)
        }
      },
      i.Euler = function (e, t, r, n) {
        this._x = e ||
        0,
        this._y = t ||
        0,
        this._z = r ||
        0,
        this._order = n ||
        i.Euler.DefaultOrder
      },
      i.Euler.RotationOrders = [
        'XYZ',
        'YZX',
        'ZXY',
        'XZY',
        'YXZ',
        'ZYX'
      ],
      i.Euler.DefaultOrder = 'XYZ',
      i.Euler.prototype = {
        constructor: i.Euler,
        _x: 0,
        _y: 0,
        _z: 0,
        _order: i.Euler.DefaultOrder,
        get x() {
          return this._x
        },
        set x(e) {
          this._x = e,
          this.onChangeCallback()
        },
        get y() {
          return this._y
        },
        set y(e) {
          this._y = e,
          this.onChangeCallback()
        },
        get z() {
          return this._z
        },
        set z(e) {
          this._z = e,
          this.onChangeCallback()
        },
        get order() {
          return this._order
        },
        set order(e) {
          this._order = e,
          this.onChangeCallback()
        },
        set: function (e, t, r, i) {
          return this._x = e,
          this._y = t,
          this._z = r,
          this._order = i ||
          this._order,
          this.onChangeCallback(),
          this
        },
        copy: function (e) {
          return this._x = e._x,
          this._y = e._y,
          this._z = e._z,
          this._order = e._order,
          this.onChangeCallback(),
          this
        },
        setFromRotationMatrix: function (e, t, r) {
          var n = i.Math.clamp,
          o = e.elements,
          a = o[0],
          s = o[4],
          h = o[8],
          c = o[1],
          l = o[5],
          u = o[9],
          d = o[2],
          f = o[6],
          p = o[10];
          return t = t ||
          this._order,
          'XYZ' === t ? (
            this._y = Math.asin(n(h, - 1, 1)),
            Math.abs(h) < 0.99999 ? (this._x = Math.atan2( - u, p), this._z = Math.atan2( - s, a)) : (this._x = Math.atan2(f, l), this._z = 0)
          ) : 'YXZ' === t ? (
            this._x = Math.asin( - n(u, - 1, 1)),
            Math.abs(u) < 0.99999 ? (this._y = Math.atan2(h, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2( - d, a), this._z = 0)
          ) : 'ZXY' === t ? (
            this._x = Math.asin(n(f, - 1, 1)),
            Math.abs(f) < 0.99999 ? (this._y = Math.atan2( - d, p), this._z = Math.atan2( - s, l)) : (this._y = 0, this._z = Math.atan2(c, a))
          ) : 'ZYX' === t ? (
            this._y = Math.asin( - n(d, - 1, 1)),
            Math.abs(d) < 0.99999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2( - s, l))
          ) : 'YZX' === t ? (
            this._z = Math.asin(n(c, - 1, 1)),
            Math.abs(c) < 0.99999 ? (this._x = Math.atan2( - u, l), this._y = Math.atan2( - d, a)) : (this._x = 0, this._y = Math.atan2(h, p))
          ) : 'XZY' === t ? (
            this._z = Math.asin( - n(s, - 1, 1)),
            Math.abs(s) < 0.99999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(h, a)) : (this._x = Math.atan2( - u, p), this._y = 0)
          ) : i.warn(
            'THREE.Euler: .setFromRotationMatrix() given unsupported order: ' + t
          ),
          this._order = t,
          r !== !1 &&
          this.onChangeCallback(),
          this
        },
        setFromQuaternion: function () {
          var e;
          return function (t, r, n) {
            return void 0 === e &&
            (e = new i.Matrix4),
            e.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(e, r, n),
            this
          }
        }(),
        setFromVector3: function (e, t) {
          return this.set(e.x, e.y, e.z, t || this._order)
        },
        reorder: function () {
          var e = new i.Quaternion;
          return function (t) {
            e.setFromEuler(this),
            this.setFromQuaternion(e, t)
          }
        }(),
        equals: function (e) {
          return e._x === this._x &&
          e._y === this._y &&
          e._z === this._z &&
          e._order === this._order
        },
        fromArray: function (e) {
          return this._x = e[0],
          this._y = e[1],
          this._z = e[2],
          void 0 !== e[3] &&
          (this._order = e[3]),
          this.onChangeCallback(),
          this
        },
        toArray: function (e, t) {
          return void 0 === e &&
          (e = []),
          void 0 === t &&
          (t = 0),
          e[t] = this._x,
          e[t + 1] = this._y,
          e[t + 2] = this._z,
          e[t + 3] = this._order,
          e
        },
        toVector3: function (e) {
          return e ? e.set(this._x, this._y, this._z) : new i.Vector3(this._x, this._y, this._z)
        },
        onChange: function (e) {
          return this.onChangeCallback = e,
          this
        },
        onChangeCallback: function () {
        },
        clone: function () {
          return new i.Euler(this._x, this._y, this._z, this._order)
        }
      },
      i.Line3 = function (e, t) {
        this.start = void 0 !== e ? e : new i.Vector3,
        this.end = void 0 !== t ? t : new i.Vector3
      },
      i.Line3.prototype = {
        constructor: i.Line3,
        set: function (e, t) {
          return this.start.copy(e),
          this.end.copy(t),
          this
        },
        copy: function (e) {
          return this.start.copy(e.start),
          this.end.copy(e.end),
          this
        },
        center: function (e) {
          var t = e ||
          new i.Vector3;
          return t.addVectors(this.start, this.end).multiplyScalar(0.5)
        },
        delta: function (e) {
          var t = e ||
          new i.Vector3;
          return t.subVectors(this.end, this.start)
        },
        distanceSq: function () {
          return this.start.distanceToSquared(this.end)
        },
        distance: function () {
          return this.start.distanceTo(this.end)
        },
        at: function (e, t) {
          var r = t ||
          new i.Vector3;
          return this.delta(r).multiplyScalar(e).add(this.start)
        },
        closestPointToPointParameter: function () {
          var e = new i.Vector3,
          t = new i.Vector3;
          return function (r, n) {
            e.subVectors(r, this.start),
            t.subVectors(this.end, this.start);
            var o = t.dot(t),
            a = t.dot(e),
            s = a / o;
            return n &&
            (s = i.Math.clamp(s, 0, 1)),
            s
          }
        }(),
        closestPointToPoint: function (e, t, r) {
          var n = this.closestPointToPointParameter(e, t),
          o = r ||
          new i.Vector3;
          return this.delta(o).multiplyScalar(n).add(this.start)
        },
        applyMatrix4: function (e) {
          return this.start.applyMatrix4(e),
          this.end.applyMatrix4(e),
          this
        },
        equals: function (e) {
          return e.start.equals(this.start) &&
          e.end.equals(this.end)
        },
        clone: function () {
          return (new i.Line3).copy(this)
        }
      },
      i.Box2 = function (e, t) {
        this.min = void 0 !== e ? e : new i.Vector2(1 / 0, 1 / 0),
        this.max = void 0 !== t ? t : new i.Vector2( - (1 / 0), - (1 / 0))
      },
      i.Box2.prototype = {
        constructor: i.Box2,
        set: function (e, t) {
          return this.min.copy(e),
          this.max.copy(t),
          this
        },
        setFromPoints: function (e) {
          this.makeEmpty();
          for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
          return this
        },
        setFromCenterAndSize: function () {
          var e = new i.Vector2;
          return function (t, r) {
            var i = e.copy(r).multiplyScalar(0.5);
            return this.min.copy(t).sub(i),
            this.max.copy(t).add(i),
            this
          }
        }(),
        copy: function (e) {
          return this.min.copy(e.min),
          this.max.copy(e.max),
          this
        },
        makeEmpty: function () {
          return this.min.x = this.min.y = 1 / 0,
          this.max.x = this.max.y = - (1 / 0),
          this
        },
        empty: function () {
          return this.max.x < this.min.x ||
          this.max.y < this.min.y
        },
        center: function (e) {
          var t = e ||
          new i.Vector2;
          return t.addVectors(this.min, this.max).multiplyScalar(0.5)
        },
        size: function (e) {
          var t = e ||
          new i.Vector2;
          return t.subVectors(this.max, this.min)
        },
        expandByPoint: function (e) {
          return this.min.min(e),
          this.max.max(e),
          this
        },
        expandByVector: function (e) {
          return this.min.sub(e),
          this.max.add(e),
          this
        },
        expandByScalar: function (e) {
          return this.min.addScalar( - e),
          this.max.addScalar(e),
          this
        },
        containsPoint: function (e) {
          return !(
            e.x < this.min.x ||
            e.x > this.max.x ||
            e.y < this.min.y ||
            e.y > this.max.y
          )
        },
        containsBox: function (e) {
          return this.min.x <= e.min.x &&
          e.max.x <= this.max.x &&
          this.min.y <= e.min.y &&
          e.max.y <= this.max.y
        },
        getParameter: function (e, t) {
          var r = t ||
          new i.Vector2;
          return r.set(
            (e.x - this.min.x) / (this.max.x - this.min.x),
            (e.y - this.min.y) / (this.max.y - this.min.y)
          )
        },
        isIntersectionBox: function (e) {
          return !(
            e.max.x < this.min.x ||
            e.min.x > this.max.x ||
            e.max.y < this.min.y ||
            e.min.y > this.max.y
          )
        },
        clampPoint: function (e, t) {
          var r = t ||
          new i.Vector2;
          return r.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
          var e = new i.Vector2;
          return function (t) {
            var r = e.copy(t).clamp(this.min, this.max);
            return r.sub(t).length()
          }
        }(),
        intersect: function (e) {
          return this.min.max(e.min),
          this.max.min(e.max),
          this
        },
        union: function (e) {
          return this.min.min(e.min),
          this.max.max(e.max),
          this
        },
        translate: function (e) {
          return this.min.add(e),
          this.max.add(e),
          this
        },
        equals: function (e) {
          return e.min.equals(this.min) &&
          e.max.equals(this.max)
        },
        clone: function () {
          return (new i.Box2).copy(this)
        }
      },
      i.Box3 = function (e, t) {
        this.min = void 0 !== e ? e : new i.Vector3(1 / 0, 1 / 0, 1 / 0),
        this.max = void 0 !== t ? t : new i.Vector3( - (1 / 0), - (1 / 0), - (1 / 0))
      },
      i.Box3.prototype = {
        constructor: i.Box3,
        set: function (e, t) {
          return this.min.copy(e),
          this.max.copy(t),
          this
        },
        setFromPoints: function (e) {
          this.makeEmpty();
          for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
          return this
        },
        setFromCenterAndSize: function () {
          var e = new i.Vector3;
          return function (t, r) {
            var i = e.copy(r).multiplyScalar(0.5);
            return this.min.copy(t).sub(i),
            this.max.copy(t).add(i),
            this
          }
        }(),
        setFromObject: function () {
          var e = new i.Vector3;
          return function (t) {
            var r = this;
            return t.updateMatrixWorld(!0),
            this.makeEmpty(),
            t.traverse(
              function (t) {
                var n = t.geometry;
                if (void 0 !== n) if (n instanceof i.Geometry) for (var o = n.vertices, a = 0, s = o.length; s > a; a++) e.copy(o[a]),
                e.applyMatrix4(t.matrixWorld),
                r.expandByPoint(e);
                 else if (n instanceof i.BufferGeometry && void 0 !== n.attributes.position) for (var h = n.attributes.position.array, a = 0, s = h.length; s > a; a += 3) e.set(h[a], h[a + 1], h[a + 2]),
                e.applyMatrix4(t.matrixWorld),
                r.expandByPoint(e)
              }
            ),
            this
          }
        }(),
        copy: function (e) {
          return this.min.copy(e.min),
          this.max.copy(e.max),
          this
        },
        makeEmpty: function () {
          return this.min.x = this.min.y = this.min.z = 1 / 0,
          this.max.x = this.max.y = this.max.z = - (1 / 0),
          this
        },
        empty: function () {
          return this.max.x < this.min.x ||
          this.max.y < this.min.y ||
          this.max.z < this.min.z
        },
        center: function (e) {
          var t = e ||
          new i.Vector3;
          return t.addVectors(this.min, this.max).multiplyScalar(0.5)
        },
        size: function (e) {
          var t = e ||
          new i.Vector3;
          return t.subVectors(this.max, this.min)
        },
        expandByPoint: function (e) {
          return this.min.min(e),
          this.max.max(e),
          this
        },
        expandByVector: function (e) {
          return this.min.sub(e),
          this.max.add(e),
          this
        },
        expandByScalar: function (e) {
          return this.min.addScalar( - e),
          this.max.addScalar(e),
          this
        },
        containsPoint: function (e) {
          return !(
            e.x < this.min.x ||
            e.x > this.max.x ||
            e.y < this.min.y ||
            e.y > this.max.y ||
            e.z < this.min.z ||
            e.z > this.max.z
          )
        },
        containsBox: function (e) {
          return this.min.x <= e.min.x &&
          e.max.x <= this.max.x &&
          this.min.y <= e.min.y &&
          e.max.y <= this.max.y &&
          this.min.z <= e.min.z &&
          e.max.z <= this.max.z
        },
        getParameter: function (e, t) {
          var r = t ||
          new i.Vector3;
          return r.set(
            (e.x - this.min.x) / (this.max.x - this.min.x),
            (e.y - this.min.y) / (this.max.y - this.min.y),
            (e.z - this.min.z) / (this.max.z - this.min.z)
          )
        },
        isIntersectionBox: function (e) {
          return !(
            e.max.x < this.min.x ||
            e.min.x > this.max.x ||
            e.max.y < this.min.y ||
            e.min.y > this.max.y ||
            e.max.z < this.min.z ||
            e.min.z > this.max.z
          )
        },
        clampPoint: function (e, t) {
          var r = t ||
          new i.Vector3;
          return r.copy(e).clamp(this.min, this.max)
        },
        distanceToPoint: function () {
          var e = new i.Vector3;
          return function (t) {
            var r = e.copy(t).clamp(this.min, this.max);
            return r.sub(t).length()
          }
        }(),
        getBoundingSphere: function () {
          var e = new i.Vector3;
          return function (t) {
            var r = t ||
            new i.Sphere;
            return r.center = this.center(),
            r.radius = 0.5 * this.size(e).length(),
            r
          }
        }(),
        intersect: function (e) {
          return this.min.max(e.min),
          this.max.min(e.max),
          this
        },
        union: function (e) {
          return this.min.min(e.min),
          this.max.max(e.max),
          this
        },
        applyMatrix4: function () {
          var e = [
            new i.Vector3,
            new i.Vector3,
            new i.Vector3,
            new i.Vector3,
            new i.Vector3,
            new i.Vector3,
            new i.Vector3,
            new i.Vector3
          ];
          return function (t) {
            return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.makeEmpty(),
            this.setFromPoints(e),
            this
          }
        }(),
        translate: function (e) {
          return this.min.add(e),
          this.max.add(e),
          this
        },
        equals: function (e) {
          return e.min.equals(this.min) &&
          e.max.equals(this.max)
        },
        clone: function () {
          return (new i.Box3).copy(this)
        }
      },
      i.Matrix3 = function () {
        this.elements = new Float32Array([1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1]),
        arguments.length > 0 &&
        i.error(
          'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.'
        )
      },
      i.Matrix3.prototype = {
        constructor: i.Matrix3,
        set: function (e, t, r, i, n, o, a, s, h) {
          var c = this.elements;
          return c[0] = e,
          c[3] = t,
          c[6] = r,
          c[1] = i,
          c[4] = n,
          c[7] = o,
          c[2] = a,
          c[5] = s,
          c[8] = h,
          this
        },
        identity: function () {
          return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
          this
        },
        copy: function (e) {
          var t = e.elements;
          return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]),
          this
        },
        multiplyVector3: function (e) {
          return i.warn(
            'THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.'
          ),
          e.applyMatrix3(this)
        },
        multiplyVector3Array: function (e) {
          return i.warn(
            'THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.'
          ),
          this.applyToVector3Array(e)
        },
        applyToVector3Array: function () {
          var e = new i.Vector3;
          return function (t, r, i) {
            void 0 === r &&
            (r = 0),
            void 0 === i &&
            (i = t.length);
            for (var n = 0, o = r; i > n; n += 3, o += 3) e.x = t[o],
            e.y = t[o + 1],
            e.z = t[o + 2],
            e.applyMatrix3(this),
            t[o] = e.x,
            t[o + 1] = e.y,
            t[o + 2] = e.z;
            return t
          }
        }(),
        multiplyScalar: function (e) {
          var t = this.elements;
          return t[0] *= e,
          t[3] *= e,
          t[6] *= e,
          t[1] *= e,
          t[4] *= e,
          t[7] *= e,
          t[2] *= e,
          t[5] *= e,
          t[8] *= e,
          this
        },
        determinant: function () {
          var e = this.elements,
          t = e[0],
          r = e[1],
          i = e[2],
          n = e[3],
          o = e[4],
          a = e[5],
          s = e[6],
          h = e[7],
          c = e[8];
          return t * o * c - t * a * h - r * n * c + r * a * s + i * n * h - i * o * s
        },
        getInverse: function (e, t) {
          var r = e.elements,
          n = this.elements;
          n[0] = r[10] * r[5] - r[6] * r[9],
          n[1] = - r[10] * r[1] + r[2] * r[9],
          n[2] = r[6] * r[1] - r[2] * r[5],
          n[3] = - r[10] * r[4] + r[6] * r[8],
          n[4] = r[10] * r[0] - r[2] * r[8],
          n[5] = - r[6] * r[0] + r[2] * r[4],
          n[6] = r[9] * r[4] - r[5] * r[8],
          n[7] = - r[9] * r[0] + r[1] * r[8],
          n[8] = r[5] * r[0] - r[1] * r[4];
          var o = r[0] * n[0] + r[1] * n[3] + r[2] * n[6];
          if (0 === o) {
            var a = 'Matrix3.getInverse(): can\'t invert matrix, determinant is 0';
            if (t) throw new Error(a);
            return i.warn(a),
            this.identity(),
            this
          }
          return this.multiplyScalar(1 / o),
          this
        },
        transpose: function () {
          var e,
          t = this.elements;
          return e = t[1],
          t[1] = t[3],
          t[3] = e,
          e = t[2],
          t[2] = t[6],
          t[6] = e,
          e = t[5],
          t[5] = t[7],
          t[7] = e,
          this
        },
        flattenToArrayOffset: function (e, t) {
          var r = this.elements;
          return e[t] = r[0],
          e[t + 1] = r[1],
          e[t + 2] = r[2],
          e[t + 3] = r[3],
          e[t + 4] = r[4],
          e[t + 5] = r[5],
          e[t + 6] = r[6],
          e[t + 7] = r[7],
          e[t + 8] = r[8],
          e
        },
        getNormalMatrix: function (e) {
          return this.getInverse(e).transpose(),
          this
        },
        transposeIntoArray: function (e) {
          var t = this.elements;
          return e[0] = t[0],
          e[1] = t[3],
          e[2] = t[6],
          e[3] = t[1],
          e[4] = t[4],
          e[5] = t[7],
          e[6] = t[2],
          e[7] = t[5],
          e[8] = t[8],
          this
        },
        fromArray: function (e) {
          return this.elements.set(e),
          this
        },
        toArray: function () {
          var e = this.elements;
          return [e[0],
          e[1],
          e[2],
          e[3],
          e[4],
          e[5],
          e[6],
          e[7],
          e[8]]
        },
        clone: function () {
          return (new i.Matrix3).fromArray(this.elements)
        }
      },
      i.Matrix4 = function () {
        this.elements = new Float32Array([1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1]),
        arguments.length > 0 &&
        i.error(
          'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.'
        )
      },
      i.Matrix4.prototype = {
        constructor: i.Matrix4,
        set: function (e, t, r, i, n, o, a, s, h, c, l, u, d, f, p, m) {
          var v = this.elements;
          return v[0] = e,
          v[4] = t,
          v[8] = r,
          v[12] = i,
          v[1] = n,
          v[5] = o,
          v[9] = a,
          v[13] = s,
          v[2] = h,
          v[6] = c,
          v[10] = l,
          v[14] = u,
          v[3] = d,
          v[7] = f,
          v[11] = p,
          v[15] = m,
          this
        },
        identity: function () {
          return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
          this
        },
        copy: function (e) {
          return this.elements.set(e.elements),
          this
        },
        extractPosition: function (e) {
          return i.warn(
            'THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().'
          ),
          this.copyPosition(e)
        },
        copyPosition: function (e) {
          var t = this.elements,
          r = e.elements;
          return t[12] = r[12],
          t[13] = r[13],
          t[14] = r[14],
          this
        },
        extractBasis: function (e, t, r) {
          var i = this.elements;
          return e.set(i[0], i[1], i[2]),
          t.set(i[4], i[5], i[6]),
          r.set(i[8], i[9], i[10]),
          this
        },
        makeBasis: function (e, t, r) {
          return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1),
          this
        },
        extractRotation: function () {
          var e = new i.Vector3;
          return function (t) {
            var r = this.elements,
            i = t.elements,
            n = 1 / e.set(i[0], i[1], i[2]).length(),
            o = 1 / e.set(i[4], i[5], i[6]).length(),
            a = 1 / e.set(i[8], i[9], i[10]).length();
            return r[0] = i[0] * n,
            r[1] = i[1] * n,
            r[2] = i[2] * n,
            r[4] = i[4] * o,
            r[5] = i[5] * o,
            r[6] = i[6] * o,
            r[8] = i[8] * a,
            r[9] = i[9] * a,
            r[10] = i[10] * a,
            this
          }
        }(),
        makeRotationFromEuler: function (e) {
          e instanceof i.Euler == !1 &&
          i.error(
            'THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.'
          );
          var t = this.elements,
          r = e.x,
          n = e.y,
          o = e.z,
          a = Math.cos(r),
          s = Math.sin(r),
          h = Math.cos(n),
          c = Math.sin(n),
          l = Math.cos(o),
          u = Math.sin(o);
          if ('XYZ' === e.order) {
            var d = a * l,
            f = a * u,
            p = s * l,
            m = s * u;
            t[0] = h * l,
            t[4] = - h * u,
            t[8] = c,
            t[1] = f + p * c,
            t[5] = d - m * c,
            t[9] = - s * h,
            t[2] = m - d * c,
            t[6] = p + f * c,
            t[10] = a * h
          } else if ('YXZ' === e.order) {
            var v = h * l,
            g = h * u,
            y = c * l,
            x = c * u;
            t[0] = v + x * s,
            t[4] = y * s - g,
            t[8] = a * c,
            t[1] = a * u,
            t[5] = a * l,
            t[9] = - s,
            t[2] = g * s - y,
            t[6] = x + v * s,
            t[10] = a * h
          } else if ('ZXY' === e.order) {
            var v = h * l,
            g = h * u,
            y = c * l,
            x = c * u;
            t[0] = v - x * s,
            t[4] = - a * u,
            t[8] = y + g * s,
            t[1] = g + y * s,
            t[5] = a * l,
            t[9] = x - v * s,
            t[2] = - a * c,
            t[6] = s,
            t[10] = a * h
          } else if ('ZYX' === e.order) {
            var d = a * l,
            f = a * u,
            p = s * l,
            m = s * u;
            t[0] = h * l,
            t[4] = p * c - f,
            t[8] = d * c + m,
            t[1] = h * u,
            t[5] = m * c + d,
            t[9] = f * c - p,
            t[2] = - c,
            t[6] = s * h,
            t[10] = a * h
          } else if ('YZX' === e.order) {
            var _ = a * h,
            w = a * c,
            b = s * h,
            M = s * c;
            t[0] = h * l,
            t[4] = M - _ * u,
            t[8] = b * u + w,
            t[1] = u,
            t[5] = a * l,
            t[9] = - s * l,
            t[2] = - c * l,
            t[6] = w * u + b,
            t[10] = _ - M * u
          } else if ('XZY' === e.order) {
            var _ = a * h,
            w = a * c,
            b = s * h,
            M = s * c;
            t[0] = h * l,
            t[4] = - u,
            t[8] = c * l,
            t[1] = _ * u + M,
            t[5] = a * l,
            t[9] = w * u - b,
            t[2] = b * u - w,
            t[6] = s * l,
            t[10] = M * u + _
          }
          return t[3] = 0,
          t[7] = 0,
          t[11] = 0,
          t[12] = 0,
          t[13] = 0,
          t[14] = 0,
          t[15] = 1,
          this
        },
        setRotationFromQuaternion: function (e) {
          return i.warn(
            'THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().'
          ),
          this.makeRotationFromQuaternion(e)
        },
        makeRotationFromQuaternion: function (e) {
          var t = this.elements,
          r = e.x,
          i = e.y,
          n = e.z,
          o = e.w,
          a = r + r,
          s = i + i,
          h = n + n,
          c = r * a,
          l = r * s,
          u = r * h,
          d = i * s,
          f = i * h,
          p = n * h,
          m = o * a,
          v = o * s,
          g = o * h;
          return t[0] = 1 - (d + p),
          t[4] = l - g,
          t[8] = u + v,
          t[1] = l + g,
          t[5] = 1 - (c + p),
          t[9] = f - m,
          t[2] = u - v,
          t[6] = f + m,
          t[10] = 1 - (c + d),
          t[3] = 0,
          t[7] = 0,
          t[11] = 0,
          t[12] = 0,
          t[13] = 0,
          t[14] = 0,
          t[15] = 1,
          this
        },
        lookAt: function () {
          var e = new i.Vector3,
          t = new i.Vector3,
          r = new i.Vector3;
          return function (i, n, o) {
            var a = this.elements;
            return r.subVectors(i, n).normalize(),
            0 === r.length() &&
            (r.z = 1),
            e.crossVectors(o, r).normalize(),
            0 === e.length() &&
            (r.x += 0.0001, e.crossVectors(o, r).normalize()),
            t.crossVectors(r, e),
            a[0] = e.x,
            a[4] = t.x,
            a[8] = r.x,
            a[1] = e.y,
            a[5] = t.y,
            a[9] = r.y,
            a[2] = e.z,
            a[6] = t.z,
            a[10] = r.z,
            this
          }
        }(),
        multiply: function (e, t) {
          return void 0 !== t ? (
            i.warn(
              'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.'
            ),
            this.multiplyMatrices(e, t)
          ) : this.multiplyMatrices(this, e)
        },
        multiplyMatrices: function (e, t) {
          var r = e.elements,
          i = t.elements,
          n = this.elements,
          o = r[0],
          a = r[4],
          s = r[8],
          h = r[12],
          c = r[1],
          l = r[5],
          u = r[9],
          d = r[13],
          f = r[2],
          p = r[6],
          m = r[10],
          v = r[14],
          g = r[3],
          y = r[7],
          x = r[11],
          _ = r[15],
          w = i[0],
          b = i[4],
          M = i[8],
          S = i[12],
          T = i[1],
          C = i[5],
          A = i[9],
          E = i[13],
          P = i[2],
          D = i[6],
          L = i[10],
          R = i[14],
          B = i[3],
          F = i[7],
          U = i[11],
          O = i[15];
          return n[0] = o * w + a * T + s * P + h * B,
          n[4] = o * b + a * C + s * D + h * F,
          n[8] = o * M + a * A + s * L + h * U,
          n[12] = o * S + a * E + s * R + h * O,
          n[1] = c * w + l * T + u * P + d * B,
          n[5] = c * b + l * C + u * D + d * F,
          n[9] = c * M + l * A + u * L + d * U,
          n[13] = c * S + l * E + u * R + d * O,
          n[2] = f * w + p * T + m * P + v * B,
          n[6] = f * b + p * C + m * D + v * F,
          n[10] = f * M + p * A + m * L + v * U,
          n[14] = f * S + p * E + m * R + v * O,
          n[3] = g * w + y * T + x * P + _ * B,
          n[7] = g * b + y * C + x * D + _ * F,
          n[11] = g * M + y * A + x * L + _ * U,
          n[15] = g * S + y * E + x * R + _ * O,
          this
        },
        multiplyToArray: function (e, t, r) {
          var i = this.elements;
          return this.multiplyMatrices(e, t),
          r[0] = i[0],
          r[1] = i[1],
          r[2] = i[2],
          r[3] = i[3],
          r[4] = i[4],
          r[5] = i[5],
          r[6] = i[6],
          r[7] = i[7],
          r[8] = i[8],
          r[9] = i[9],
          r[10] = i[10],
          r[11] = i[11],
          r[12] = i[12],
          r[13] = i[13],
          r[14] = i[14],
          r[15] = i[15],
          this
        },
        multiplyScalar: function (e) {
          var t = this.elements;
          return t[0] *= e,
          t[4] *= e,
          t[8] *= e,
          t[12] *= e,
          t[1] *= e,
          t[5] *= e,
          t[9] *= e,
          t[13] *= e,
          t[2] *= e,
          t[6] *= e,
          t[10] *= e,
          t[14] *= e,
          t[3] *= e,
          t[7] *= e,
          t[11] *= e,
          t[15] *= e,
          this
        },
        multiplyVector3: function (e) {
          return i.warn(
            'THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.'
          ),
          e.applyProjection(this)
        },
        multiplyVector4: function (e) {
          return i.warn(
            'THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.'
          ),
          e.applyMatrix4(this)
        },
        multiplyVector3Array: function (e) {
          return i.warn(
            'THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.'
          ),
          this.applyToVector3Array(e)
        },
        applyToVector3Array: function () {
          var e = new i.Vector3;
          return function (t, r, i) {
            void 0 === r &&
            (r = 0),
            void 0 === i &&
            (i = t.length);
            for (var n = 0, o = r; i > n; n += 3, o += 3) e.x = t[o],
            e.y = t[o + 1],
            e.z = t[o + 2],
            e.applyMatrix4(this),
            t[o] = e.x,
            t[o + 1] = e.y,
            t[o + 2] = e.z;
            return t
          }
        }(),
        rotateAxis: function (e) {
          i.warn(
            'THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.'
          ),
          e.transformDirection(this)
        },
        crossVector: function (e) {
          return i.warn(
            'THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.'
          ),
          e.applyMatrix4(this)
        },
        determinant: function () {
          var e = this.elements,
          t = e[0],
          r = e[4],
          i = e[8],
          n = e[12],
          o = e[1],
          a = e[5],
          s = e[9],
          h = e[13],
          c = e[2],
          l = e[6],
          u = e[10],
          d = e[14],
          f = e[3],
          p = e[7],
          m = e[11],
          v = e[15];
          return f * ( + n * s * l - i * h * l - n * a * u + r * h * u + i * a * d - r * s * d) + p * ( + t * s * d - t * h * u + n * o * u - i * o * d + i * h * c - n * s * c) + m * ( + t * h * l - t * a * d - n * o * l + r * o * d + n * a * c - r * h * c) + v * ( - i * a * c - t * s * l + t * a * u + i * o * l - r * o * u + r * s * c)
        },
        transpose: function () {
          var e,
          t = this.elements;
          return e = t[1],
          t[1] = t[4],
          t[4] = e,
          e = t[2],
          t[2] = t[8],
          t[8] = e,
          e = t[6],
          t[6] = t[9],
          t[9] = e,
          e = t[3],
          t[3] = t[12],
          t[12] = e,
          e = t[7],
          t[7] = t[13],
          t[13] = e,
          e = t[11],
          t[11] = t[14],
          t[14] = e,
          this
        },
        flattenToArrayOffset: function (e, t) {
          var r = this.elements;
          return e[t] = r[0],
          e[t + 1] = r[1],
          e[t + 2] = r[2],
          e[t + 3] = r[3],
          e[t + 4] = r[4],
          e[t + 5] = r[5],
          e[t + 6] = r[6],
          e[t + 7] = r[7],
          e[t + 8] = r[8],
          e[t + 9] = r[9],
          e[t + 10] = r[10],
          e[t + 11] = r[11],
          e[t + 12] = r[12],
          e[t + 13] = r[13],
          e[t + 14] = r[14],
          e[t + 15] = r[15],
          e
        },
        getPosition: function () {
          var e = new i.Vector3;
          return function () {
            i.warn(
              'THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.'
            );
            var t = this.elements;
            return e.set(t[12], t[13], t[14])
          }
        }(),
        setPosition: function (e) {
          var t = this.elements;
          return t[12] = e.x,
          t[13] = e.y,
          t[14] = e.z,
          this
        },
        getInverse: function (e, t) {
          var r = this.elements,
          n = e.elements,
          o = n[0],
          a = n[4],
          s = n[8],
          h = n[12],
          c = n[1],
          l = n[5],
          u = n[9],
          d = n[13],
          f = n[2],
          p = n[6],
          m = n[10],
          v = n[14],
          g = n[3],
          y = n[7],
          x = n[11],
          _ = n[15];
          r[0] = u * v * y - d * m * y + d * p * x - l * v * x - u * p * _ + l * m * _,
          r[4] = h * m * y - s * v * y - h * p * x + a * v * x + s * p * _ - a * m * _,
          r[8] = s * d * y - h * u * y + h * l * x - a * d * x - s * l * _ + a * u * _,
          r[12] = h * u * p - s * d * p - h * l * m + a * d * m + s * l * v - a * u * v,
          r[1] = d * m * g - u * v * g - d * f * x + c * v * x + u * f * _ - c * m * _,
          r[5] = s * v * g - h * m * g + h * f * x - o * v * x - s * f * _ + o * m * _,
          r[9] = h * u * g - s * d * g - h * c * x + o * d * x + s * c * _ - o * u * _,
          r[13] = s * d * f - h * u * f + h * c * m - o * d * m - s * c * v + o * u * v,
          r[2] = l * v * g - d * p * g + d * f * y - c * v * y - l * f * _ + c * p * _,
          r[6] = h * p * g - a * v * g - h * f * y + o * v * y + a * f * _ - o * p * _,
          r[10] = a * d * g - h * l * g + h * c * y - o * d * y - a * c * _ + o * l * _,
          r[14] = h * l * f - a * d * f - h * c * p + o * d * p + a * c * v - o * l * v,
          r[3] = u * p * g - l * m * g - u * f * y + c * m * y + l * f * x - c * p * x,
          r[7] = a * m * g - s * p * g + s * f * y - o * m * y - a * f * x + o * p * x,
          r[11] = s * l * g - a * u * g - s * c * y + o * u * y + a * c * x - o * l * x,
          r[15] = a * u * f - s * l * f + s * c * p - o * u * p - a * c * m + o * l * m;
          var w = o * r[0] + c * r[4] + f * r[8] + g * r[12];
          if (0 == w) {
            var b = 'THREE.Matrix4.getInverse(): can\'t invert matrix, determinant is 0';
            if (t) throw new Error(b);
            return i.warn(b),
            this.identity(),
            this
          }
          return this.multiplyScalar(1 / w),
          this
        },
        translate: function (e) {
          i.error('THREE.Matrix4: .translate() has been removed.')
        },
        rotateX: function (e) {
          i.error('THREE.Matrix4: .rotateX() has been removed.')
        },
        rotateY: function (e) {
          i.error('THREE.Matrix4: .rotateY() has been removed.')
        },
        rotateZ: function (e) {
          i.error('THREE.Matrix4: .rotateZ() has been removed.')
        },
        rotateByAxis: function (e, t) {
          i.error('THREE.Matrix4: .rotateByAxis() has been removed.')
        },
        scale: function (e) {
          var t = this.elements,
          r = e.x,
          i = e.y,
          n = e.z;
          return t[0] *= r,
          t[4] *= i,
          t[8] *= n,
          t[1] *= r,
          t[5] *= i,
          t[9] *= n,
          t[2] *= r,
          t[6] *= i,
          t[10] *= n,
          t[3] *= r,
          t[7] *= i,
          t[11] *= n,
          this
        },
        getMaxScaleOnAxis: function () {
          var e = this.elements,
          t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
          r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
          i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
          return Math.sqrt(Math.max(t, Math.max(r, i)))
        },
        makeTranslation: function (e, t, r) {
          return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1),
          this
        },
        makeRotationX: function (e) {
          var t = Math.cos(e),
          r = Math.sin(e);
          return this.set(1, 0, 0, 0, 0, t, - r, 0, 0, r, t, 0, 0, 0, 0, 1),
          this
        },
        makeRotationY: function (e) {
          var t = Math.cos(e),
          r = Math.sin(e);
          return this.set(t, 0, r, 0, 0, 1, 0, 0, - r, 0, t, 0, 0, 0, 0, 1),
          this
        },
        makeRotationZ: function (e) {
          var t = Math.cos(e),
          r = Math.sin(e);
          return this.set(t, - r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
          this
        },
        makeRotationAxis: function (e, t) {
          var r = Math.cos(t),
          i = Math.sin(t),
          n = 1 - r,
          o = e.x,
          a = e.y,
          s = e.z,
          h = n * o,
          c = n * a;
          return this.set(
            h * o + r,
            h * a - i * s,
            h * s + i * a,
            0,
            h * a + i * s,
            c * a + r,
            c * s - i * o,
            0,
            h * s - i * a,
            c * s + i * o,
            n * s * s + r,
            0,
            0,
            0,
            0,
            1
          ),
          this
        },
        makeScale: function (e, t, r) {
          return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1),
          this
        },
        compose: function (e, t, r) {
          return this.makeRotationFromQuaternion(t),
          this.scale(r),
          this.setPosition(e),
          this
        },
        decompose: function () {
          var e = new i.Vector3,
          t = new i.Matrix4;
          return function (r, i, n) {
            var o = this.elements,
            a = e.set(o[0], o[1], o[2]).length(),
            s = e.set(o[4], o[5], o[6]).length(),
            h = e.set(o[8], o[9], o[10]).length(),
            c = this.determinant();
            0 > c &&
            (a = - a),
            r.x = o[12],
            r.y = o[13],
            r.z = o[14],
            t.elements.set(this.elements);
            var l = 1 / a,
            u = 1 / s,
            d = 1 / h;
            return t.elements[0] *= l,
            t.elements[1] *= l,
            t.elements[2] *= l,
            t.elements[4] *= u,
            t.elements[5] *= u,
            t.elements[6] *= u,
            t.elements[8] *= d,
            t.elements[9] *= d,
            t.elements[10] *= d,
            i.setFromRotationMatrix(t),
            n.x = a,
            n.y = s,
            n.z = h,
            this
          }
        }(),
        makeFrustum: function (e, t, r, i, n, o) {
          var a = this.elements,
          s = 2 * n / (t - e),
          h = 2 * n / (i - r),
          c = (t + e) / (t - e),
          l = (i + r) / (i - r),
          u = - (o + n) / (o - n),
          d = - 2 * o * n / (o - n);
          return a[0] = s,
          a[4] = 0,
          a[8] = c,
          a[12] = 0,
          a[1] = 0,
          a[5] = h,
          a[9] = l,
          a[13] = 0,
          a[2] = 0,
          a[6] = 0,
          a[10] = u,
          a[14] = d,
          a[3] = 0,
          a[7] = 0,
          a[11] = - 1,
          a[15] = 0,
          this
        },
        makePerspective: function (e, t, r, n) {
          var o = r * Math.tan(i.Math.degToRad(0.5 * e)),
          a = - o,
          s = a * t,
          h = o * t;
          return this.makeFrustum(s, h, a, o, r, n)
        },
        makeOrthographic: function (e, t, r, i, n, o) {
          var a = this.elements,
          s = t - e,
          h = r - i,
          c = o - n,
          l = (t + e) / s,
          u = (r + i) / h,
          d = (o + n) / c;
          return a[0] = 2 / s,
          a[4] = 0,
          a[8] = 0,
          a[12] = - l,
          a[1] = 0,
          a[5] = 2 / h,
          a[9] = 0,
          a[13] = - u,
          a[2] = 0,
          a[6] = 0,
          a[10] = - 2 / c,
          a[14] = - d,
          a[3] = 0,
          a[7] = 0,
          a[11] = 0,
          a[15] = 1,
          this
        },
        fromArray: function (e) {
          return this.elements.set(e),
          this
        },
        toArray: function () {
          var e = this.elements;
          return [e[0],
          e[1],
          e[2],
          e[3],
          e[4],
          e[5],
          e[6],
          e[7],
          e[8],
          e[9],
          e[10],
          e[11],
          e[12],
          e[13],
          e[14],
          e[15]]
        },
        clone: function () {
          return (new i.Matrix4).fromArray(this.elements)
        }
      },
      i.Ray = function (e, t) {
        this.origin = void 0 !== e ? e : new i.Vector3,
        this.direction = void 0 !== t ? t : new i.Vector3
      },
      i.Ray.prototype = {
        constructor: i.Ray,
        set: function (e, t) {
          return this.origin.copy(e),
          this.direction.copy(t),
          this
        },
        copy: function (e) {
          return this.origin.copy(e.origin),
          this.direction.copy(e.direction),
          this
        },
        at: function (e, t) {
          var r = t ||
          new i.Vector3;
          return r.copy(this.direction).multiplyScalar(e).add(this.origin)
        },
        recast: function () {
          var e = new i.Vector3;
          return function (t) {
            return this.origin.copy(this.at(t, e)),
            this
          }
        }(),
        closestPointToPoint: function (e, t) {
          var r = t ||
          new i.Vector3;
          r.subVectors(e, this.origin);
          var n = r.dot(this.direction);
          return 0 > n ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function () {
          var e = new i.Vector3;
          return function (t) {
            var r = e.subVectors(t, this.origin).dot(this.direction);
            return 0 > r ? this.origin.distanceTo(t) : (
              e.copy(this.direction).multiplyScalar(r).add(this.origin),
              e.distanceTo(t)
            )
          }
        }(),
        distanceSqToSegment: function () {
          var e = new i.Vector3,
          t = new i.Vector3,
          r = new i.Vector3;
          return function (i, n, o, a) {
            e.copy(i).add(n).multiplyScalar(0.5),
            t.copy(n).sub(i).normalize(),
            r.copy(this.origin).sub(e);
            var s,
            h,
            c,
            l,
            u = 0.5 * i.distanceTo(n),
            d = - this.direction.dot(t),
            f = r.dot(this.direction),
            p = - r.dot(t),
            m = r.lengthSq(),
            v = Math.abs(1 - d * d);
            if (v > 0) if (s = d * p - f, h = d * f - p, l = u * v, s >= 0) if (h >= - l) if (l >= h) {
              var g = 1 / v;
              s *= g,
              h *= g,
              c = s * (s + d * h + 2 * f) + h * (d * s + h + 2 * p) + m
            } else h = u,
            s = Math.max(0, - (d * h + f)),
            c = - s * s + h * (h + 2 * p) + m;
             else h = - u,
            s = Math.max(0, - (d * h + f)),
            c = - s * s + h * (h + 2 * p) + m;
             else - l >= h ? (
              s = Math.max(0, - ( - d * u + f)),
              h = s > 0 ? - u : Math.min(Math.max( - u, - p), u),
              c = - s * s + h * (h + 2 * p) + m
            ) : l >= h ? (s = 0, h = Math.min(Math.max( - u, - p), u), c = h * (h + 2 * p) + m) : (
              s = Math.max(0, - (d * u + f)),
              h = s > 0 ? u : Math.min(Math.max( - u, - p), u),
              c = - s * s + h * (h + 2 * p) + m
            );
             else h = d > 0 ? - u : u,
            s = Math.max(0, - (d * h + f)),
            c = - s * s + h * (h + 2 * p) + m;
            return o &&
            o.copy(this.direction).multiplyScalar(s).add(this.origin),
            a &&
            a.copy(t).multiplyScalar(h).add(e),
            c
          }
        }(),
        isIntersectionSphere: function (e) {
          return this.distanceToPoint(e.center) <= e.radius
        },
        intersectSphere: function () {
          var e = new i.Vector3;
          return function (t, r) {
            e.subVectors(t.center, this.origin);
            var i = e.dot(this.direction),
            n = e.dot(e) - i * i,
            o = t.radius * t.radius;
            if (n > o) return null;
            var a = Math.sqrt(o - n),
            s = i - a,
            h = i + a;
            return 0 > s &&
            0 > h ? null : 0 > s ? this.at(h, r) : this.at(s, r)
          }
        }(),
        isIntersectionPlane: function (e) {
          var t = e.distanceToPoint(this.origin);
          if (0 === t) return !0;
          var r = e.normal.dot(this.direction);
          return 0 > r * t
        },
        distanceToPlane: function (e) {
          var t = e.normal.dot(this.direction);
          if (0 == t) return 0 == e.distanceToPoint(this.origin) ? 0 : null;
          var r = - (this.origin.dot(e.normal) + e.constant) / t;
          return r >= 0 ? r : null
        },
        intersectPlane: function (e, t) {
          var r = this.distanceToPlane(e);
          return null === r ? null : this.at(r, t)
        },
        isIntersectionBox: function () {
          var e = new i.Vector3;
          return function (t) {
            return null !== this.intersectBox(t, e)
          }
        }(),
        intersectBox: function (e, t) {
          var r,
          i,
          n,
          o,
          a,
          s,
          h = 1 / this.direction.x,
          c = 1 / this.direction.y,
          l = 1 / this.direction.z,
          u = this.origin;
          return h >= 0 ? (r = (e.min.x - u.x) * h, i = (e.max.x - u.x) * h) : (r = (e.max.x - u.x) * h, i = (e.min.x - u.x) * h),
          c >= 0 ? (n = (e.min.y - u.y) * c, o = (e.max.y - u.y) * c) : (n = (e.max.y - u.y) * c, o = (e.min.y - u.y) * c),
          r > o ||
          n > i ? null : (
            (n > r || r !== r) &&
            (r = n),
            (i > o || i !== i) &&
            (i = o),
            l >= 0 ? (a = (e.min.z - u.z) * l, s = (e.max.z - u.z) * l) : (a = (e.max.z - u.z) * l, s = (e.min.z - u.z) * l),
            r > s ||
            a > i ? null : (
              (a > r || r !== r) &&
              (r = a),
              (i > s || i !== i) &&
              (i = s),
              0 > i ? null : this.at(r >= 0 ? r : i, t)
            )
          )
        },
        intersectTriangle: function () {
          var e = new i.Vector3,
          t = new i.Vector3,
          r = new i.Vector3,
          n = new i.Vector3;
          return function (i, o, a, s, h) {
            t.subVectors(o, i),
            r.subVectors(a, i),
            n.crossVectors(t, r);
            var c,
            l = this.direction.dot(n);
            if (l > 0) {
              if (s) return null;
              c = 1
            } else {
              if (!(0 > l)) return null;
              c = - 1,
              l = - l
            }
            e.subVectors(this.origin, i);
            var u = c * this.direction.dot(r.crossVectors(e, r));
            if (0 > u) return null;
            var d = c * this.direction.dot(t.cross(e));
            if (0 > d) return null;
            if (u + d > l) return null;
            var f = - c * e.dot(n);
            return 0 > f ? null : this.at(f / l, h)
          }
        }(),
        applyMatrix4: function (e) {
          return this.direction.add(this.origin).applyMatrix4(e),
          this.origin.applyMatrix4(e),
          this.direction.sub(this.origin),
          this.direction.normalize(),
          this
        },
        equals: function (e) {
          return e.origin.equals(this.origin) &&
          e.direction.equals(this.direction)
        },
        clone: function () {
          return (new i.Ray).copy(this)
        }
      },
      i.Sphere = function (e, t) {
        this.center = void 0 !== e ? e : new i.Vector3,
        this.radius = void 0 !== t ? t : 0
      },
      i.Sphere.prototype = {
        constructor: i.Sphere,
        set: function (e, t) {
          return this.center.copy(e),
          this.radius = t,
          this
        },
        setFromPoints: function () {
          var e = new i.Box3;
          return function (t, r) {
            var i = this.center;
            void 0 !== r ? i.copy(r) : e.setFromPoints(t).center(i);
            for (var n = 0, o = 0, a = t.length; a > o; o++) n = Math.max(n, i.distanceToSquared(t[o]));
            return this.radius = Math.sqrt(n),
            this
          }
        }(),
        copy: function (e) {
          return this.center.copy(e.center),
          this.radius = e.radius,
          this
        },
        empty: function () {
          return this.radius <= 0
        },
        containsPoint: function (e) {
          return e.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function (e) {
          return e.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function (e) {
          var t = this.radius + e.radius;
          return e.center.distanceToSquared(this.center) <= t * t
        },
        clampPoint: function (e, t) {
          var r = this.center.distanceToSquared(e),
          n = t ||
          new i.Vector3;
          return n.copy(e),
          r > this.radius * this.radius &&
          (
            n.sub(this.center).normalize(),
            n.multiplyScalar(this.radius).add(this.center)
          ),
          n
        },
        getBoundingBox: function (e) {
          var t = e ||
          new i.Box3;
          return t.set(this.center, this.center),
          t.expandByScalar(this.radius),
          t
        },
        applyMatrix4: function (e) {
          return this.center.applyMatrix4(e),
          this.radius = this.radius * e.getMaxScaleOnAxis(),
          this
        },
        translate: function (e) {
          return this.center.add(e),
          this
        },
        equals: function (e) {
          return e.center.equals(this.center) &&
          e.radius === this.radius
        },
        clone: function () {
          return (new i.Sphere).copy(this)
        }
      },
      i.Frustum = function (e, t, r, n, o, a) {
        this.planes = [
          void 0 !== e ? e : new i.Plane,
          void 0 !== t ? t : new i.Plane,
          void 0 !== r ? r : new i.Plane,
          void 0 !== n ? n : new i.Plane,
          void 0 !== o ? o : new i.Plane,
          void 0 !== a ? a : new i.Plane
        ]
      },
      i.Frustum.prototype = {
        constructor: i.Frustum,
        set: function (e, t, r, i, n, o) {
          var a = this.planes;
          return a[0].copy(e),
          a[1].copy(t),
          a[2].copy(r),
          a[3].copy(i),
          a[4].copy(n),
          a[5].copy(o),
          this
        },
        copy: function (e) {
          for (var t = this.planes, r = 0; 6 > r; r++) t[r].copy(e.planes[r]);
          return this
        },
        setFromMatrix: function (e) {
          var t = this.planes,
          r = e.elements,
          i = r[0],
          n = r[1],
          o = r[2],
          a = r[3],
          s = r[4],
          h = r[5],
          c = r[6],
          l = r[7],
          u = r[8],
          d = r[9],
          f = r[10],
          p = r[11],
          m = r[12],
          v = r[13],
          g = r[14],
          y = r[15];
          return t[0].setComponents(a - i, l - s, p - u, y - m).normalize(),
          t[1].setComponents(a + i, l + s, p + u, y + m).normalize(),
          t[2].setComponents(a + n, l + h, p + d, y + v).normalize(),
          t[3].setComponents(a - n, l - h, p - d, y - v).normalize(),
          t[4].setComponents(a - o, l - c, p - f, y - g).normalize(),
          t[5].setComponents(a + o, l + c, p + f, y + g).normalize(),
          this
        },
        intersectsObject: function () {
          var e = new i.Sphere;
          return function (t) {
            var r = t.geometry;
            return null === r.boundingSphere &&
            r.computeBoundingSphere(),
            e.copy(r.boundingSphere),
            e.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(e)
          }
        }(),
        intersectsSphere: function (e) {
          for (var t = this.planes, r = e.center, i = - e.radius, n = 0; 6 > n; n++) {
            var o = t[n].distanceToPoint(r);
            if (i > o) return !1
          }
          return !0
        },
        intersectsBox: function () {
          var e = new i.Vector3,
          t = new i.Vector3;
          return function (r) {
            for (var i = this.planes, n = 0; 6 > n; n++) {
              var o = i[n];
              e.x = o.normal.x > 0 ? r.min.x : r.max.x,
              t.x = o.normal.x > 0 ? r.max.x : r.min.x,
              e.y = o.normal.y > 0 ? r.min.y : r.max.y,
              t.y = o.normal.y > 0 ? r.max.y : r.min.y,
              e.z = o.normal.z > 0 ? r.min.z : r.max.z,
              t.z = o.normal.z > 0 ? r.max.z : r.min.z;
              var a = o.distanceToPoint(e),
              s = o.distanceToPoint(t);
              if (0 > a && 0 > s) return !1
            }
            return !0
          }
        }(),
        containsPoint: function (e) {
          for (var t = this.planes, r = 0; 6 > r; r++) if (t[r].distanceToPoint(e) < 0) return !1;
          return !0
        },
        clone: function () {
          return (new i.Frustum).copy(this)
        }
      },
      i.Plane = function (e, t) {
        this.normal = void 0 !== e ? e : new i.Vector3(1, 0, 0),
        this.constant = void 0 !== t ? t : 0
      },
      i.Plane.prototype = {
        constructor: i.Plane,
        set: function (e, t) {
          return this.normal.copy(e),
          this.constant = t,
          this
        },
        setComponents: function (e, t, r, i) {
          return this.normal.set(e, t, r),
          this.constant = i,
          this
        },
        setFromNormalAndCoplanarPoint: function (e, t) {
          return this.normal.copy(e),
          this.constant = - t.dot(this.normal),
          this
        },
        setFromCoplanarPoints: function () {
          var e = new i.Vector3,
          t = new i.Vector3;
          return function (r, i, n) {
            var o = e.subVectors(n, i).cross(t.subVectors(r, i)).normalize();
            return this.setFromNormalAndCoplanarPoint(o, r),
            this
          }
        }(),
        copy: function (e) {
          return this.normal.copy(e.normal),
          this.constant = e.constant,
          this
        },
        normalize: function () {
          var e = 1 / this.normal.length();
          return this.normal.multiplyScalar(e),
          this.constant *= e,
          this
        },
        negate: function () {
          return this.constant *= - 1,
          this.normal.negate(),
          this
        },
        distanceToPoint: function (e) {
          return this.normal.dot(e) + this.constant
        },
        distanceToSphere: function (e) {
          return this.distanceToPoint(e.center) - e.radius
        },
        projectPoint: function (e, t) {
          return this.orthoPoint(e, t).sub(e).negate()
        },
        orthoPoint: function (e, t) {
          var r = this.distanceToPoint(e),
          n = t ||
          new i.Vector3;
          return n.copy(this.normal).multiplyScalar(r);
        },
        isIntersectionLine: function (e) {
          var t = this.distanceToPoint(e.start),
          r = this.distanceToPoint(e.end);
          return 0 > t &&
          r > 0 ||
          0 > r &&
          t > 0
        },
        intersectLine: function () {
          var e = new i.Vector3;
          return function (t, r) {
            var n = r ||
            new i.Vector3,
            o = t.delta(e),
            a = this.normal.dot(o);
            if (0 != a) {
              var s = - (t.start.dot(this.normal) + this.constant) / a;
              if (!(0 > s || s > 1)) return n.copy(o).multiplyScalar(s).add(t.start)
            } else if (0 == this.distanceToPoint(t.start)) return n.copy(t.start)
          }
        }(),
        coplanarPoint: function (e) {
          var t = e ||
          new i.Vector3;
          return t.copy(this.normal).multiplyScalar( - this.constant)
        },
        applyMatrix4: function () {
          var e = new i.Vector3,
          t = new i.Vector3,
          r = new i.Matrix3;
          return function (i, n) {
            var o = n ||
            r.getNormalMatrix(i),
            a = e.copy(this.normal).applyMatrix3(o),
            s = this.coplanarPoint(t);
            return s.applyMatrix4(i),
            this.setFromNormalAndCoplanarPoint(a, s),
            this
          }
        }(),
        translate: function (e) {
          return this.constant = this.constant - e.dot(this.normal),
          this
        },
        equals: function (e) {
          return e.normal.equals(this.normal) &&
          e.constant == this.constant
        },
        clone: function () {
          return (new i.Plane).copy(this)
        }
      },
      i.Math = {
        generateUUID: function () {
          var e,
          t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
          r = new Array(36),
          i = 0;
          return function () {
            for (var n = 0; 36 > n; n++) 8 == n ||
            13 == n ||
            18 == n ||
            23 == n ? r[n] = '-' : 14 == n ? r[n] = '4' : (
              2 >= i &&
              (i = 33554432 + 16777216 * Math.random() | 0),
              e = 15 & i,
              i >>= 4,
              r[n] = t[19 == n ? 3 & e | 8 : e]
            );
            return r.join('')
          }
        }(),
        clamp: function (e, t, r) {
          return t > e ? t : e > r ? r : e
        },
        clampBottom: function (e, t) {
          return t > e ? t : e
        },
        mapLinear: function (e, t, r, i, n) {
          return i + (e - t) * (n - i) / (r - t)
        },
        smoothstep: function (e, t, r) {
          return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e))
        },
        smootherstep: function (e, t, r) {
          return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10))
        },
        random16: function () {
          return (65280 * Math.random() + 255 * Math.random()) / 65535
        },
        randInt: function (e, t) {
          return Math.floor(this.randFloat(e, t))
        },
        randFloat: function (e, t) {
          return e + Math.random() * (t - e)
        },
        randFloatSpread: function (e) {
          return e * (0.5 - Math.random())
        },
        degToRad: function () {
          var e = Math.PI / 180;
          return function (t) {
            return t * e
          }
        }(),
        radToDeg: function () {
          var e = 180 / Math.PI;
          return function (t) {
            return t * e
          }
        }(),
        isPowerOfTwo: function (e) {
          return 0 === (e & e - 1) &&
          0 !== e
        },
        nextPowerOfTwo: function (e) {
          return e--,
          e |= e >> 1,
          e |= e >> 2,
          e |= e >> 4,
          e |= e >> 8,
          e |= e >> 16,
          e++,
          e
        }
      },
      i.Spline = function (e) {
        function t(e, t, r, i, n, o, a) {
          var s = 0.5 * (r - e),
          h = 0.5 * (i - t);
          return (2 * (t - r) + s + h) * a + ( - 3 * (t - r) - 2 * s - h) * o + s * n + t
        }
        this.points = e;
        var r,
        n,
        o,
        a,
        s,
        h,
        c,
        l,
        u,
        d = [],
        f = {
          x: 0,
          y: 0,
          z: 0
        };
        this.initFromArray = function (e) {
          this.points = [];
          for (var t = 0; t < e.length; t++) this.points[t] = {
            x: e[t][0],
            y: e[t][1],
            z: e[t][2]
          }
        },
        this.getPoint = function (e) {
          return r = (this.points.length - 1) * e,
          n = Math.floor(r),
          o = r - n,
          d[0] = 0 === n ? n : n - 1,
          d[1] = n,
          d[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1,
          d[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2,
          h = this.points[d[0]],
          c = this.points[d[1]],
          l = this.points[d[2]],
          u = this.points[d[3]],
          a = o * o,
          s = o * a,
          f.x = t(h.x, c.x, l.x, u.x, o, a, s),
          f.y = t(h.y, c.y, l.y, u.y, o, a, s),
          f.z = t(h.z, c.z, l.z, u.z, o, a, s),
          f
        },
        this.getControlPointsArray = function () {
          var e,
          t,
          r = this.points.length,
          i = [];
          for (e = 0; r > e; e++) t = this.points[e],
          i[e] = [
            t.x,
            t.y,
            t.z
          ];
          return i
        },
        this.getLength = function (e) {
          var t,
          r,
          n,
          o,
          a = 0,
          s = 0,
          h = 0,
          c = new i.Vector3,
          l = new i.Vector3,
          u = [],
          d = 0;
          for (
            u[0] = 0,
            e ||
            (e = 100),
            n = this.points.length * e,
            c.copy(this.points[0]),
            t = 1;
            n > t;
            t++
          ) r = t / n,
          o = this.getPoint(r),
          l.copy(o),
          d += l.distanceTo(c),
          c.copy(o),
          a = (this.points.length - 1) * r,
          s = Math.floor(a),
          s != h &&
          (u[s] = d, h = s);
          return u[u.length] = d,
          {
            chunks: u,
            total: d
          }
        },
        this.reparametrizeByArcLength = function (e) {
          var t,
          r,
          n,
          o,
          a,
          s,
          h,
          c,
          l = [],
          u = new i.Vector3,
          d = this.getLength();
          for (
            l.push(u.copy(this.points[0]).clone()),
            t = 1;
            t < this.points.length;
            t++
          ) {
            for (
              s = d.chunks[t] - d.chunks[t - 1],
              h = Math.ceil(e * s / d.total),
              o = (t - 1) / (this.points.length - 1),
              a = t / (this.points.length - 1),
              r = 1;
              h - 1 > r;
              r++
            ) n = o + r * (1 / h) * (a - o),
            c = this.getPoint(n),
            l.push(u.copy(c).clone());
            l.push(u.copy(this.points[t]).clone())
          }
          this.points = l
        }
      },
      i.Triangle = function (e, t, r) {
        this.a = void 0 !== e ? e : new i.Vector3,
        this.b = void 0 !== t ? t : new i.Vector3,
        this.c = void 0 !== r ? r : new i.Vector3
      },
      i.Triangle.normal = function () {
        var e = new i.Vector3;
        return function (t, r, n, o) {
          var a = o ||
          new i.Vector3;
          a.subVectors(n, r),
          e.subVectors(t, r),
          a.cross(e);
          var s = a.lengthSq();
          return s > 0 ? a.multiplyScalar(1 / Math.sqrt(s)) : a.set(0, 0, 0)
        }
      }(),
      i.Triangle.barycoordFromPoint = function () {
        var e = new i.Vector3,
        t = new i.Vector3,
        r = new i.Vector3;
        return function (n, o, a, s, h) {
          e.subVectors(s, o),
          t.subVectors(a, o),
          r.subVectors(n, o);
          var c = e.dot(e),
          l = e.dot(t),
          u = e.dot(r),
          d = t.dot(t),
          f = t.dot(r),
          p = c * d - l * l,
          m = h ||
          new i.Vector3;
          if (0 == p) return m.set( - 2, - 1, - 1);
          var v = 1 / p,
          g = (d * u - l * f) * v,
          y = (c * f - l * u) * v;
          return m.set(1 - g - y, y, g)
        }
      }(),
      i.Triangle.containsPoint = function () {
        var e = new i.Vector3;
        return function (t, r, n, o) {
          var a = i.Triangle.barycoordFromPoint(t, r, n, o, e);
          return a.x >= 0 &&
          a.y >= 0 &&
          a.x + a.y <= 1
        }
      }(),
      i.Triangle.prototype = {
        constructor: i.Triangle,
        set: function (e, t, r) {
          return this.a.copy(e),
          this.b.copy(t),
          this.c.copy(r),
          this
        },
        setFromPointsAndIndices: function (e, t, r, i) {
          return this.a.copy(e[t]),
          this.b.copy(e[r]),
          this.c.copy(e[i]),
          this
        },
        copy: function (e) {
          return this.a.copy(e.a),
          this.b.copy(e.b),
          this.c.copy(e.c),
          this
        },
        area: function () {
          var e = new i.Vector3,
          t = new i.Vector3;
          return function () {
            return e.subVectors(this.c, this.b),
            t.subVectors(this.a, this.b),
            0.5 * e.cross(t).length()
          }
        }(),
        midpoint: function (e) {
          var t = e ||
          new i.Vector3;
          return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function (e) {
          return i.Triangle.normal(this.a, this.b, this.c, e)
        },
        plane: function (e) {
          var t = e ||
          new i.Plane;
          return t.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function (e, t) {
          return i.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
        },
        containsPoint: function (e) {
          return i.Triangle.containsPoint(e, this.a, this.b, this.c)
        },
        equals: function (e) {
          return e.a.equals(this.a) &&
          e.b.equals(this.b) &&
          e.c.equals(this.c)
        },
        clone: function () {
          return (new i.Triangle).copy(this)
        }
      },
      i.Clock = function (e) {
        this.autoStart = void 0 !== e ? e : !0,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
      },
      i.Clock.prototype = {
        constructor: i.Clock,
        start: function () {
          this.startTime = void 0 !== self.performance &&
          void 0 !== self.performance.now ? self.performance.now() : Date.now(),
          this.oldTime = this.startTime,
          this.running = !0
        },
        stop: function () {
          this.getElapsedTime(),
          this.running = !1
        },
        getElapsedTime: function () {
          return this.getDelta(),
          this.elapsedTime
        },
        getDelta: function () {
          var e = 0;
          if (this.autoStart && !this.running && this.start(), this.running) {
            var t = void 0 !== self.performance &&
            void 0 !== self.performance.now ? self.performance.now() : Date.now();
            e = 0.001 * (t - this.oldTime),
            this.oldTime = t,
            this.elapsedTime += e
          }
          return e
        }
      },
      i.EventDispatcher = function () {
      },
      i.EventDispatcher.prototype = {
        constructor: i.EventDispatcher,
        apply: function (e) {
          e.addEventListener = i.EventDispatcher.prototype.addEventListener,
          e.hasEventListener = i.EventDispatcher.prototype.hasEventListener,
          e.removeEventListener = i.EventDispatcher.prototype.removeEventListener,
          e.dispatchEvent = i.EventDispatcher.prototype.dispatchEvent
        },
        addEventListener: function (e, t) {
          void 0 === this._listeners &&
          (this._listeners = {});
          var r = this._listeners;
          void 0 === r[e] &&
          (r[e] = []),
          - 1 === r[e].indexOf(t) &&
          r[e].push(t)
        },
        hasEventListener: function (e, t) {
          if (void 0 === this._listeners) return !1;
          var r = this._listeners;
          return void 0 !== r[e] &&
          - 1 !== r[e].indexOf(t)
        },
        removeEventListener: function (e, t) {
          if (void 0 !== this._listeners) {
            var r = this._listeners,
            i = r[e];
            if (void 0 !== i) {
              var n = i.indexOf(t);
              - 1 !== n &&
              i.splice(n, 1)
            }
          }
        },
        dispatchEvent: function (e) {
          if (void 0 !== this._listeners) {
            var t = this._listeners,
            r = t[e.type];
            if (void 0 !== r) {
              e.target = this;
              for (var i = [], n = r.length, o = 0; n > o; o++) i[o] = r[o];
              for (var o = 0; n > o; o++) i[o].call(this, e)
            }
          }
        }
      },
      function (e) {
        e.Raycaster = function (t, r, i, n) {
          this.ray = new e.Ray(t, r),
          this.near = i ||
          0,
          this.far = n ||
          1 / 0,
          this.params = {
            Sprite: {
            },
            Mesh: {
            },
            PointCloud: {
              threshold: 1
            },
            LOD: {
            },
            Line: {
            }
          }
        };
        var t = function (e, t) {
          return e.distance - t.distance
        },
        r = function (e, t, i, n) {
          if (e.raycast(t, i), n === !0) for (var o = e.children, a = 0, s = o.length; s > a; a++) r(o[a], t, i, !0)
        };
        e.Raycaster.prototype = {
          constructor: e.Raycaster,
          precision: 0.0001,
          linePrecision: 1,
          set: function (e, t) {
            this.ray.set(e, t)
          },
          setFromCamera: function (t, r) {
            r instanceof e.PerspectiveCamera ? (
              this.ray.origin.copy(r.position),
              this.ray.direction.set(t.x, t.y, 0.5).unproject(r).sub(r.position).normalize()
            ) : r instanceof e.OrthographicCamera ? (
              this.ray.origin.set(t.x, t.y, - 1).unproject(r),
              this.ray.direction.set(0, 0, - 1).transformDirection(r.matrixWorld)
            ) : e.error('THREE.Raycaster: Unsupported camera type.')
          },
          intersectObject: function (e, i) {
            var n = [];
            return r(e, this, n, i),
            n.sort(t),
            n
          },
          intersectObjects: function (i, n) {
            var o = [];
            if (i instanceof Array == !1) return e.warn('THREE.Raycaster.intersectObjects: objects is not an Array.'),
            o;
            for (var a = 0, s = i.length; s > a; a++) r(i[a], this, o, n);
            return o.sort(t),
            o
          }
        }
      }(i),
      i.Object3D = function () {
        Object.defineProperty(this, 'id', {
          value: i.Object3DIdCount++
        }),
        this.uuid = i.Math.generateUUID(),
        this.name = '',
        this.type = 'Object3D',
        this.parent = void 0,
        this.children = [],
        this.up = i.Object3D.DefaultUp.clone();
        var e = new i.Vector3,
        t = new i.Euler,
        r = new i.Quaternion,
        n = new i.Vector3(1, 1, 1),
        o = function () {
          r.setFromEuler(t, !1)
        },
        a = function () {
          t.setFromQuaternion(r, void 0, !1)
        };
        t.onChange(o),
        r.onChange(a),
        Object.defineProperties(
          this,
          {
            position: {
              enumerable: !0,
              value: e
            },
            rotation: {
              enumerable: !0,
              value: t
            },
            quaternion: {
              enumerable: !0,
              value: r
            },
            scale: {
              enumerable: !0,
              value: n
            }
          }
        ),
        this.rotationAutoUpdate = !0,
        this.matrix = new i.Matrix4,
        this.matrixWorld = new i.Matrix4,
        this.matrixAutoUpdate = !0,
        this.matrixWorldNeedsUpdate = !1,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.userData = {}
      },
      i.Object3D.DefaultUp = new i.Vector3(0, 1, 0),
      i.Object3D.prototype = {
        constructor: i.Object3D,
        get eulerOrder() {
          return i.warn(
            'THREE.Object3D: .eulerOrder has been moved to .rotation.order.'
          ),
          this.rotation.order
        },
        set eulerOrder(e) {
          i.warn(
            'THREE.Object3D: .eulerOrder has been moved to .rotation.order.'
          ),
          this.rotation.order = e
        },
        get useQuaternion() {
          i.warn(
            'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'
          )
        },
        set useQuaternion(e) {
          i.warn(
            'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.'
          )
        },
        applyMatrix: function (e) {
          this.matrix.multiplyMatrices(e, this.matrix),
          this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function (e, t) {
          this.quaternion.setFromAxisAngle(e, t)
        },
        setRotationFromEuler: function (e) {
          this.quaternion.setFromEuler(e, !0)
        },
        setRotationFromMatrix: function (e) {
          this.quaternion.setFromRotationMatrix(e)
        },
        setRotationFromQuaternion: function (e) {
          this.quaternion.copy(e)
        },
        rotateOnAxis: function () {
          var e = new i.Quaternion;
          return function (t, r) {
            return e.setFromAxisAngle(t, r),
            this.quaternion.multiply(e),
            this
          }
        }(),
        rotateX: function () {
          var e = new i.Vector3(1, 0, 0);
          return function (t) {
            return this.rotateOnAxis(e, t)
          }
        }(),
        rotateY: function () {
          var e = new i.Vector3(0, 1, 0);
          return function (t) {
            return this.rotateOnAxis(e, t)
          }
        }(),
        rotateZ: function () {
          var e = new i.Vector3(0, 0, 1);
          return function (t) {
            return this.rotateOnAxis(e, t)
          }
        }(),
        translateOnAxis: function () {
          var e = new i.Vector3;
          return function (t, r) {
            return e.copy(t).applyQuaternion(this.quaternion),
            this.position.add(e.multiplyScalar(r)),
            this
          }
        }(),
        translate: function (e, t) {
          return i.warn(
            'THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.'
          ),
          this.translateOnAxis(t, e)
        },
        translateX: function () {
          var e = new i.Vector3(1, 0, 0);
          return function (t) {
            return this.translateOnAxis(e, t)
          }
        }(),
        translateY: function () {
          var e = new i.Vector3(0, 1, 0);
          return function (t) {
            return this.translateOnAxis(e, t)
          }
        }(),
        translateZ: function () {
          var e = new i.Vector3(0, 0, 1);
          return function (t) {
            return this.translateOnAxis(e, t)
          }
        }(),
        localToWorld: function (e) {
          return e.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function () {
          var e = new i.Matrix4;
          return function (t) {
            return t.applyMatrix4(e.getInverse(this.matrixWorld))
          }
        }(),
        lookAt: function () {
          var e = new i.Matrix4;
          return function (t) {
            e.lookAt(t, this.position, this.up),
            this.quaternion.setFromRotationMatrix(e)
          }
        }(),
        add: function (e) {
          if (arguments.length > 1) {
            for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this
          }
          return e === this ? (
            i.error(
              'THREE.Object3D.add: object can\'t be added as a child of itself.',
              e
            ),
            this
          ) : (
            e instanceof i.Object3D ? (
              void 0 !== e.parent &&
              e.parent.remove(e),
              e.parent = this,
              e.dispatchEvent({
                type: 'added'
              }),
              this.children.push(e)
            ) : i.error(
              'THREE.Object3D.add: object not an instance of THREE.Object3D.',
              e
            ),
            this
          )
        },
        remove: function (e) {
          if (arguments.length > 1) for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
          var r = this.children.indexOf(e);
          - 1 !== r &&
          (
            e.parent = void 0,
            e.dispatchEvent({
              type: 'removed'
            }),
            this.children.splice(r, 1)
          )
        },
        getChildByName: function (e) {
          return i.warn(
            'THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().'
          ),
          this.getObjectByName(e)
        },
        getObjectById: function (e) {
          return this.getObjectByProperty('id', e)
        },
        getObjectByName: function (e) {
          return this.getObjectByProperty('name', e)
        },
        getObjectByProperty: function (e, t) {
          if (this[e] === t) return this;
          for (var r = 0, i = this.children.length; i > r; r++) {
            var n = this.children[r],
            o = n.getObjectByProperty(e, t);
            if (void 0 !== o) return o
          }
        },
        getWorldPosition: function (e) {
          var t = e ||
          new i.Vector3;
          return this.updateMatrixWorld(!0),
          t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function () {
          var e = new i.Vector3,
          t = new i.Vector3;
          return function (r) {
            var n = r ||
            new i.Quaternion;
            return this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(e, n, t),
            n
          }
        }(),
        getWorldRotation: function () {
          var e = new i.Quaternion;
          return function (t) {
            var r = t ||
            new i.Euler;
            return this.getWorldQuaternion(e),
            r.setFromQuaternion(e, this.rotation.order, !1)
          }
        }(),
        getWorldScale: function () {
          var e = new i.Vector3,
          t = new i.Quaternion;
          return function (r) {
            var n = r ||
            new i.Vector3;
            return this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(e, t, n),
            n
          }
        }(),
        getWorldDirection: function () {
          var e = new i.Quaternion;
          return function (t) {
            var r = t ||
            new i.Vector3;
            return this.getWorldQuaternion(e),
            r.set(0, 0, 1).applyQuaternion(e)
          }
        }(),
        raycast: function () {
        },
        traverse: function (e) {
          e(this);
          for (var t = 0, r = this.children.length; r > t; t++) this.children[t].traverse(e)
        },
        traverseVisible: function (e) {
          if (this.visible !== !1) {
            e(this);
            for (var t = 0, r = this.children.length; r > t; t++) this.children[t].traverseVisible(e)
          }
        },
        traverseAncestors: function (e) {
          this.parent &&
          (e(this.parent), this.parent.traverseAncestors(e))
        },
        updateMatrix: function () {
          this.matrix.compose(this.position, this.quaternion, this.scale),
          this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function (e) {
          this.matrixAutoUpdate === !0 &&
          this.updateMatrix(),
          this.matrixWorldNeedsUpdate !== !0 &&
          e !== !0 ||
          (
            void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            e = !0
          );
          for (var t = 0, r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e)
        },
        toJSON: function () {
          var e = {
            metadata: {
              version: 4.3,
              type: 'Object',
              generator: 'ObjectExporter'
            }
          },
          t = {},
          r = function (r) {
            if (void 0 === e.geometries && (e.geometries = []), void 0 === t[r.uuid]) {
              var i = r.toJSON();
              delete i.metadata,
              t[r.uuid] = i,
              e.geometries.push(i)
            }
            return r.uuid
          },
          n = {},
          o = function (t) {
            if (void 0 === e.materials && (e.materials = []), void 0 === n[t.uuid]) {
              var r = t.toJSON();
              delete r.metadata,
              n[t.uuid] = r,
              e.materials.push(r)
            }
            return t.uuid
          },
          a = function (e) {
            var t = {};
            if (
              t.uuid = e.uuid,
              t.type = e.type,
              '' !== e.name &&
              (t.name = e.name),
              '{}' !== JSON.stringify(e.userData) &&
              (t.userData = e.userData),
              e.visible !== !0 &&
              (t.visible = e.visible),
              e instanceof i.PerspectiveCamera ? (t.fov = e.fov, t.aspect = e.aspect, t.near = e.near, t.far = e.far) : e instanceof i.OrthographicCamera ? (
                t.left = e.left,
                t.right = e.right,
                t.top = e.top,
                t.bottom = e.bottom,
                t.near = e.near,
                t.far = e.far
              ) : e instanceof i.AmbientLight ? t.color = e.color.getHex() : e instanceof i.DirectionalLight ? (t.color = e.color.getHex(), t.intensity = e.intensity) : e instanceof i.PointLight ? (
                t.color = e.color.getHex(),
                t.intensity = e.intensity,
                t.distance = e.distance,
                t.decay = e.decay
              ) : e instanceof i.SpotLight ? (
                t.color = e.color.getHex(),
                t.intensity = e.intensity,
                t.distance = e.distance,
                t.angle = e.angle,
                t.exponent = e.exponent,
                t.decay = e.decay
              ) : e instanceof i.HemisphereLight ? (
                t.color = e.color.getHex(),
                t.groundColor = e.groundColor.getHex()
              ) : e instanceof i.Mesh ||
              e instanceof i.Line ||
              e instanceof i.PointCloud ? (
                t.geometry = r(e.geometry),
                t.material = o(e.material),
                e instanceof i.Line &&
                (t.mode = e.mode)
              ) : e instanceof i.Sprite &&
              (t.material = o(e.material)),
              t.matrix = e.matrix.toArray(),
              e.children.length > 0
            ) {
              t.children = [];
              for (var n = 0; n < e.children.length; n++) t.children.push(a(e.children[n]))
            }
            return t
          };
          return e.object = a(this),
          e
        },
        clone: function (e, t) {
          if (
            void 0 === e &&
            (e = new i.Object3D),
            void 0 === t &&
            (t = !0),
            e.name = this.name,
            e.up.copy(this.up),
            e.position.copy(this.position),
            e.quaternion.copy(this.quaternion),
            e.scale.copy(this.scale),
            e.rotationAutoUpdate = this.rotationAutoUpdate,
            e.matrix.copy(this.matrix),
            e.matrixWorld.copy(this.matrixWorld),
            e.matrixAutoUpdate = this.matrixAutoUpdate,
            e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate,
            e.visible = this.visible,
            e.castShadow = this.castShadow,
            e.receiveShadow = this.receiveShadow,
            e.frustumCulled = this.frustumCulled,
            e.userData = JSON.parse(JSON.stringify(this.userData)),
            t === !0
          ) for (var r = 0; r < this.children.length; r++) {
            var n = this.children[r];
            e.add(n.clone())
          }
          return e
        }
      },
      i.EventDispatcher.prototype.apply(i.Object3D.prototype),
      i.Object3DIdCount = 0,
      i.Face3 = function (e, t, r, n, o, a) {
        this.a = e,
        this.b = t,
        this.c = r,
        this.normal = n instanceof i.Vector3 ? n : new i.Vector3,
        this.vertexNormals = n instanceof Array ? n : [],
        this.color = o instanceof i.Color ? o : new i.Color,
        this.vertexColors = o instanceof Array ? o : [],
        this.vertexTangents = [],
        this.materialIndex = void 0 !== a ? a : 0
      },
      i.Face3.prototype = {
        constructor: i.Face3,
        clone: function () {
          var e = new i.Face3(this.a, this.b, this.c);
          e.normal.copy(this.normal),
          e.color.copy(this.color),
          e.materialIndex = this.materialIndex;
          for (var t = 0, r = this.vertexNormals.length; r > t; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
          for (var t = 0, r = this.vertexColors.length; r > t; t++) e.vertexColors[t] = this.vertexColors[t].clone();
          for (var t = 0, r = this.vertexTangents.length; r > t; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
          return e
        }
      },
      i.Face4 = function (e, t, r, n, o, a, s) {
        return i.warn(
          'THREE.Face4 has been removed. A THREE.Face3 will be created instead.'
        ),
        new i.Face3(e, t, r, o, a, s)
      },
      i.BufferAttribute = function (e, t) {
        this.array = e,
        this.itemSize = t,
        this.needsUpdate = !1
      },
      i.BufferAttribute.prototype = {
        constructor: i.BufferAttribute,
        get length() {
          return this.array.length
        },
        copyAt: function (e, t, r) {
          e *= this.itemSize,
          r *= t.itemSize;
          for (var i = 0, n = this.itemSize; n > i; i++) this.array[e + i] = t.array[r + i];
          return this
        },
        set: function (e, t) {
          return void 0 === t &&
          (t = 0),
          this.array.set(e, t),
          this
        },
        setX: function (e, t) {
          return this.array[e * this.itemSize] = t,
          this
        },
        setY: function (e, t) {
          return this.array[e * this.itemSize + 1] = t,
          this
        },
        setZ: function (e, t) {
          return this.array[e * this.itemSize + 2] = t,
          this
        },
        setXY: function (e, t, r) {
          return e *= this.itemSize,
          this.array[e] = t,
          this.array[e + 1] = r,
          this
        },
        setXYZ: function (e, t, r, i) {
          return e *= this.itemSize,
          this.array[e] = t,
          this.array[e + 1] = r,
          this.array[e + 2] = i,
          this
        },
        setXYZW: function (e, t, r, i, n) {
          return e *= this.itemSize,
          this.array[e] = t,
          this.array[e + 1] = r,
          this.array[e + 2] = i,
          this.array[e + 3] = n,
          this
        },
        clone: function () {
          return new i.BufferAttribute(new this.array.constructor(this.array), this.itemSize)
        }
      },
      i.Int8Attribute = function (e, t) {
        return i.warn(
          'THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.Uint8Attribute = function (e, t) {
        return i.warn(
          'THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.Uint8ClampedAttribute = function (e, t) {
        return i.warn(
          'THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.Int16Attribute = function (e, t) {
        return i.warn(
          'THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.Uint16Attribute = function (e, t) {
        return i.warn(
          'THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.Int32Attribute = function (e, t) {
        return i.warn(
          'THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.Uint32Attribute = function (e, t) {
        return i.warn(
          'THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.Float32Attribute = function (e, t) {
        return i.warn(
          'THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.Float64Attribute = function (e, t) {
        return i.warn(
          'THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.'
        ),
        new i.BufferAttribute(e, t)
      },
      i.DynamicBufferAttribute = function (e, t) {
        i.BufferAttribute.call(this, e, t),
        this.updateRange = {
          offset: 0,
          count: - 1
        }
      },
      i.DynamicBufferAttribute.prototype = Object.create(i.BufferAttribute.prototype),
      i.DynamicBufferAttribute.prototype.constructor = i.DynamicBufferAttribute,
      i.DynamicBufferAttribute.prototype.clone = function () {
        return new i.DynamicBufferAttribute(new this.array.constructor(this.array), this.itemSize)
      },
      i.BufferGeometry = function () {
        Object.defineProperty(this, 'id', {
          value: i.GeometryIdCount++
        }),
        this.uuid = i.Math.generateUUID(),
        this.name = '',
        this.type = 'BufferGeometry',
        this.attributes = {},
        this.attributesKeys = [],
        this.drawcalls = [],
        this.offsets = this.drawcalls,
        this.boundingBox = null,
        this.boundingSphere = null
      },
      i.BufferGeometry.prototype = {
        constructor: i.BufferGeometry,
        addAttribute: function (e, t) {
          return t instanceof i.BufferAttribute == !1 ? (
            i.warn(
              'THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).'
            ),
            void (
              this.attributes[e] = {
                array: arguments[1],
                itemSize: arguments[2]
              }
            )
          ) : (
            this.attributes[e] = t,
            void (this.attributesKeys = Object.keys(this.attributes))
          )
        },
        getAttribute: function (e) {
          return this.attributes[e]
        },
        addDrawCall: function (e, t, r) {
          this.drawcalls.push({
            start: e,
            count: t,
            index: void 0 !== r ? r : 0
          })
        },
        applyMatrix: function (e) {
          var t = this.attributes.position;
          void 0 !== t &&
          (e.applyToVector3Array(t.array), t.needsUpdate = !0);
          var r = this.attributes.normal;
          if (void 0 !== r) {
            var n = (new i.Matrix3).getNormalMatrix(e);
            n.applyToVector3Array(r.array),
            r.needsUpdate = !0
          }
          null !== this.boundingBox &&
          this.computeBoundingBox(),
          null !== this.boundingSphere &&
          this.computeBoundingSphere()
        },
        center: function () {
          this.computeBoundingBox();
          var e = this.boundingBox.center().negate();
          return this.applyMatrix((new i.Matrix4).setPosition(e)),
          e
        },
        fromGeometry: function (e, t) {
          t = t ||
          {
            vertexColors: i.NoColors
          };
          var r = e.vertices,
          n = e.faces,
          o = e.faceVertexUvs,
          a = t.vertexColors,
          s = o[0].length > 0,
          h = 3 == n[0].vertexNormals.length,
          c = new Float32Array(3 * n.length * 3);
          this.addAttribute('position', new i.BufferAttribute(c, 3));
          var l = new Float32Array(3 * n.length * 3);
          if (
            this.addAttribute('normal', new i.BufferAttribute(l, 3)),
            a !== i.NoColors
          ) {
            var u = new Float32Array(3 * n.length * 3);
            this.addAttribute('color', new i.BufferAttribute(u, 3))
          }
          if (s === !0) {
            var d = new Float32Array(3 * n.length * 2);
            this.addAttribute('uv', new i.BufferAttribute(d, 2))
          }
          for (var f = 0, p = 0, m = 0; f < n.length; f++, p += 6, m += 9) {
            var v = n[f],
            g = r[v.a],
            y = r[v.b],
            x = r[v.c];
            if (
              c[m] = g.x,
              c[m + 1] = g.y,
              c[m + 2] = g.z,
              c[m + 3] = y.x,
              c[m + 4] = y.y,
              c[m + 5] = y.z,
              c[m + 6] = x.x,
              c[m + 7] = x.y,
              c[m + 8] = x.z,
              h === !0
            ) {
              var _ = v.vertexNormals[0],
              w = v.vertexNormals[1],
              b = v.vertexNormals[2];
              l[m] = _.x,
              l[m + 1] = _.y,
              l[m + 2] = _.z,
              l[m + 3] = w.x,
              l[m + 4] = w.y,
              l[m + 5] = w.z,
              l[m + 6] = b.x,
              l[m + 7] = b.y,
              l[m + 8] = b.z
            } else {
              var M = v.normal;
              l[m] = M.x,
              l[m + 1] = M.y,
              l[m + 2] = M.z,
              l[m + 3] = M.x,
              l[m + 4] = M.y,
              l[m + 5] = M.z,
              l[m + 6] = M.x,
              l[m + 7] = M.y,
              l[m + 8] = M.z
            }
            if (a === i.FaceColors) {
              var S = v.color;
              u[m] = S.r,
              u[m + 1] = S.g,
              u[m + 2] = S.b,
              u[m + 3] = S.r,
              u[m + 4] = S.g,
              u[m + 5] = S.b,
              u[m + 6] = S.r,
              u[m + 7] = S.g,
              u[m + 8] = S.b
            } else if (a === i.VertexColors) {
              var T = v.vertexColors[0],
              C = v.vertexColors[1],
              A = v.vertexColors[2];
              u[m] = T.r,
              u[m + 1] = T.g,
              u[m + 2] = T.b,
              u[m + 3] = C.r,
              u[m + 4] = C.g,
              u[m + 5] = C.b,
              u[m + 6] = A.r,
              u[m + 7] = A.g,
              u[m + 8] = A.b
            }
            if (s === !0) {
              var E = o[0][f][0],
              P = o[0][f][1],
              D = o[0][f][2];
              d[p] = E.x,
              d[p + 1] = E.y,
              d[p + 2] = P.x,
              d[p + 3] = P.y,
              d[p + 4] = D.x,
              d[p + 5] = D.y
            }
          }
          return this.computeBoundingSphere(),
          this
        },
        computeBoundingBox: function () {
          var e = new i.Vector3;
          return function () {
            null === this.boundingBox &&
            (this.boundingBox = new i.Box3);
            var t = this.attributes.position.array;
            if (t) {
              var r = this.boundingBox;
              r.makeEmpty();
              for (var n = 0, o = t.length; o > n; n += 3) e.set(t[n], t[n + 1], t[n + 2]),
              r.expandByPoint(e)
            }
            void 0 !== t &&
            0 !== t.length ||
            (
              this.boundingBox.min.set(0, 0, 0),
              this.boundingBox.max.set(0, 0, 0)
            ),
            (
              isNaN(this.boundingBox.min.x) ||
              isNaN(this.boundingBox.min.y) ||
              isNaN(this.boundingBox.min.z)
            ) &&
            i.error(
              'THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.'
            )
          }
        }(),
        computeBoundingSphere: function () {
          var e = new i.Box3,
          t = new i.Vector3;
          return function () {
            null === this.boundingSphere &&
            (this.boundingSphere = new i.Sphere);
            var r = this.attributes.position.array;
            if (r) {
              e.makeEmpty();
              for (var n = this.boundingSphere.center, o = 0, a = r.length; a > o; o += 3) t.set(r[o], r[o + 1], r[o + 2]),
              e.expandByPoint(t);
              e.center(n);
              for (var s = 0, o = 0, a = r.length; a > o; o += 3) t.set(r[o], r[o + 1], r[o + 2]),
              s = Math.max(s, n.distanceToSquared(t));
              this.boundingSphere.radius = Math.sqrt(s),
              isNaN(this.boundingSphere.radius) &&
              i.error(
                'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.'
              )
            }
          }
        }(),
        computeFaceNormals: function () {
        },
        computeVertexNormals: function () {
          var e = this.attributes;
          if (e.position) {
            var t = e.position.array;
            if (void 0 === e.normal) this.addAttribute('normal', new i.BufferAttribute(new Float32Array(t.length), 3));
             else for (var r = e.normal.array, n = 0, o = r.length; o > n; n++) r[n] = 0;
            var a,
            s,
            h,
            r = e.normal.array,
            c = new i.Vector3,
            l = new i.Vector3,
            u = new i.Vector3,
            d = new i.Vector3,
            f = new i.Vector3;
            if (e.index) for (
              var p = e.index.array,
              m = this.offsets.length > 0 ? this.offsets : [
                {
                  start: 0,
                  count: p.length,
                  index: 0
                }
              ],
              v = 0,
              g = m.length;
              g > v;
              ++v
            ) for (var y = m[v].start, x = m[v].count, _ = m[v].index, n = y, o = y + x; o > n; n += 3) a = 3 * (_ + p[n]),
            s = 3 * (_ + p[n + 1]),
            h = 3 * (_ + p[n + 2]),
            c.fromArray(t, a),
            l.fromArray(t, s),
            u.fromArray(t, h),
            d.subVectors(u, l),
            f.subVectors(c, l),
            d.cross(f),
            r[a] += d.x,
            r[a + 1] += d.y,
            r[a + 2] += d.z,
            r[s] += d.x,
            r[s + 1] += d.y,
            r[s + 2] += d.z,
            r[h] += d.x,
            r[h + 1] += d.y,
            r[h + 2] += d.z;
             else for (var n = 0, o = t.length; o > n; n += 9) c.fromArray(t, n),
            l.fromArray(t, n + 3),
            u.fromArray(t, n + 6),
            d.subVectors(u, l),
            f.subVectors(c, l),
            d.cross(f),
            r[n] = d.x,
            r[n + 1] = d.y,
            r[n + 2] = d.z,
            r[n + 3] = d.x,
            r[n + 4] = d.y,
            r[n + 5] = d.z,
            r[n + 6] = d.x,
            r[n + 7] = d.y,
            r[n + 8] = d.z;
            this.normalizeNormals(),
            e.normal.needsUpdate = !0
          }
        },
        computeTangents: function () {
          function e(e, t, r) {
            D.fromArray(n, 3 * e),
            L.fromArray(n, 3 * t),
            R.fromArray(n, 3 * r),
            B.fromArray(a, 2 * e),
            F.fromArray(a, 2 * t),
            U.fromArray(a, 2 * r),
            d = L.x - D.x,
            f = R.x - D.x,
            p = L.y - D.y,
            m = R.y - D.y,
            v = L.z - D.z,
            g = R.z - D.z,
            y = F.x - B.x,
            x = U.x - B.x,
            _ = F.y - B.y,
            w = U.y - B.y,
            b = 1 / (y * w - x * _),
            O.set((w * d - _ * f) * b, (w * p - _ * m) * b, (w * v - _ * g) * b),
            V.set((y * f - x * d) * b, (y * m - x * p) * b, (y * g - x * v) * b),
            c[e].add(O),
            c[t].add(O),
            c[r].add(O),
            l[e].add(V),
            l[t].add(V),
            l[r].add(V)
          }
          function t(e) {
            q.fromArray(o, 3 * e),
            Y.copy(q),
            H = c[e],
            j.copy(H),
            j.sub(q.multiplyScalar(q.dot(H))).normalize(),
            X.crossVectors(Y, H),
            W = X.dot(l[e]),
            G = 0 > W ? - 1 : 1,
            h[4 * e] = j.x,
            h[4 * e + 1] = j.y,
            h[4 * e + 2] = j.z,
            h[4 * e + 3] = G
          }
          if (
            void 0 === this.attributes.index ||
            void 0 === this.attributes.position ||
            void 0 === this.attributes.normal ||
            void 0 === this.attributes.uv
          ) return void i.warn(
            'THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()'
          );
          var r = this.attributes.index.array,
          n = this.attributes.position.array,
          o = this.attributes.normal.array,
          a = this.attributes.uv.array,
          s = n.length / 3;
          void 0 === this.attributes.tangent &&
          this.addAttribute('tangent', new i.BufferAttribute(new Float32Array(4 * s), 4));
          for (var h = this.attributes.tangent.array, c = [], l = [], u = 0; s > u; u++) c[u] = new i.Vector3,
          l[u] = new i.Vector3;
          var d,
          f,
          p,
          m,
          v,
          g,
          y,
          x,
          _,
          w,
          b,
          M,
          S,
          T,
          C,
          A,
          E,
          P,
          D = new i.Vector3,
          L = new i.Vector3,
          R = new i.Vector3,
          B = new i.Vector2,
          F = new i.Vector2,
          U = new i.Vector2,
          O = new i.Vector3,
          V = new i.Vector3;
          0 === this.drawcalls.length &&
          this.addDrawCall(0, r.length, 0);
          var k = this.drawcalls;
          for (T = 0, C = k.length; C > T; ++T) {
            var z = k[T].start,
            N = k[T].count,
            I = k[T].index;
            for (M = z, S = z + N; S > M; M += 3) A = I + r[M],
            E = I + r[M + 1],
            P = I + r[M + 2],
            e(A, E, P)
          }
          var G,
          H,
          W,
          j = new i.Vector3,
          X = new i.Vector3,
          q = new i.Vector3,
          Y = new i.Vector3;
          for (T = 0, C = k.length; C > T; ++T) {
            var z = k[T].start,
            N = k[T].count,
            I = k[T].index;
            for (M = z, S = z + N; S > M; M += 3) A = I + r[M],
            E = I + r[M + 1],
            P = I + r[M + 2],
            t(A),
            t(E),
            t(P)
          }
        },
        computeOffsets: function (e) {
          void 0 === e &&
          (e = 65535);
          for (
            var t = this.attributes.index.array,
            r = this.attributes.position.array,
            i = t.length / 3,
            n = new Uint16Array(t.length),
            o = 0,
            a = 0,
            s = [
              {
                start: 0,
                count: 0,
                index: 0
              }
            ],
            h = s[0],
            c = 0,
            l = 0,
            u = new Int32Array(6),
            d = new Int32Array(r.length),
            f = new Int32Array(r.length),
            p = 0;
            p < r.length;
            p++
          ) d[p] = - 1,
          f[p] = - 1;
          for (var m = 0; i > m; m++) {
            l = 0;
            for (var v = 0; 3 > v; v++) {
              var g = t[3 * m + v];
              - 1 == d[g] ? (u[2 * v] = g, u[2 * v + 1] = - 1, l++) : d[g] < h.index ? (u[2 * v] = g, u[2 * v + 1] = - 1, c++) : (u[2 * v] = g, u[2 * v + 1] = d[g])
            }
            var y = a + l;
            if (y > h.index + e) {
              var x = {
                start: o,
                count: 0,
                index: a
              };
              s.push(x),
              h = x;
              for (var _ = 0; 6 > _; _ += 2) {
                var w = u[_ + 1];
                w > - 1 &&
                w < h.index &&
                (u[_ + 1] = - 1)
              }
            }
            for (var _ = 0; 6 > _; _ += 2) {
              var g = u[_],
              w = u[_ + 1];
              - 1 === w &&
              (w = a++),
              d[g] = w,
              f[w] = g,
              n[o++] = w - h.index,
              h.count++
            }
          }
          return this.reorderBuffers(n, f, a),
          this.offsets = s,
          this.drawcalls = s,
          s
        },
        merge: function (e, t) {
          if (e instanceof i.BufferGeometry == !1) return void i.error(
            'THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.',
            e
          );
          void 0 === t &&
          (t = 0);
          var r = this.attributes;
          for (var n in r) if (void 0 !== e.attributes[n]) for (
            var o = r[n],
            a = o.array,
            s = e.attributes[n],
            h = s.array,
            c = s.itemSize,
            l = 0,
            u = c * t;
            l < h.length;
            l++,
            u++
          ) a[u] = h[l];
          return this
        },
        normalizeNormals: function () {
          for (
            var e,
            t,
            r,
            i,
            n = this.attributes.normal.array,
            o = 0,
            a = n.length;
            a > o;
            o += 3
          ) e = n[o],
          t = n[o + 1],
          r = n[o + 2],
          i = 1 / Math.sqrt(e * e + t * t + r * r),
          n[o] *= i,
          n[o + 1] *= i,
          n[o + 2] *= i
        },
        reorderBuffers: function (e, t, r) {
          var i = {};
          for (var n in this.attributes) if ('index' != n) {
            var o = this.attributes[n].array;
            i[n] = new o.constructor(this.attributes[n].itemSize * r)
          }
          for (var a = 0; r > a; a++) {
            var s = t[a];
            for (var n in this.attributes) if ('index' != n) for (
              var h = this.attributes[n].array,
              c = this.attributes[n].itemSize,
              l = i[n],
              u = 0;
              c > u;
              u++
            ) l[a * c + u] = h[s * c + u]
          }
          this.attributes.index.array = e;
          for (var n in this.attributes) 'index' != n &&
          (
            this.attributes[n].array = i[n],
            this.attributes[n].numItems = this.attributes[n].itemSize * r
          )
        },
        toJSON: function () {
          var e = {
            metadata: {
              version: 4,
              type: 'BufferGeometry',
              generator: 'BufferGeometryExporter'
            },
            uuid: this.uuid,
            type: this.type,
            data: {
              attributes: {
              }
            }
          },
          t = this.attributes,
          r = this.offsets,
          i = this.boundingSphere;
          for (var n in t) {
            var o = t[n],
            a = Array.prototype.slice.call(o.array);
            e.data.attributes[n] = {
              itemSize: o.itemSize,
              type: o.array.constructor.name,
              array: a
            }
          }
          return r.length > 0 &&
          (e.data.offsets = JSON.parse(JSON.stringify(r))),
          null !== i &&
          (
            e.data.boundingSphere = {
              center: i.center.toArray(),
              radius: i.radius
            }
          ),
          e
        },
        clone: function () {
          var e = new i.BufferGeometry;
          for (var t in this.attributes) {
            var r = this.attributes[t];
            e.addAttribute(t, r.clone())
          }
          for (var n = 0, o = this.offsets.length; o > n; n++) {
            var a = this.offsets[n];
            e.offsets.push({
              start: a.start,
              index: a.index,
              count: a.count
            })
          }
          return e
        },
        dispose: function () {
          this.dispatchEvent({
            type: 'dispose'
          })
        }
      },
      i.EventDispatcher.prototype.apply(i.BufferGeometry.prototype),
      i.Geometry = function () {
        Object.defineProperty(this, 'id', {
          value: i.GeometryIdCount++
        }),
        this.uuid = i.Math.generateUUID(),
        this.name = '',
        this.type = 'Geometry',
        this.vertices = [],
        this.colors = [],
        this.faces = [],
        this.faceVertexUvs = [
          []
        ],
        this.morphTargets = [],
        this.morphColors = [],
        this.morphNormals = [],
        this.skinWeights = [],
        this.skinIndices = [],
        this.lineDistances = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.hasTangents = !1,
        this.dynamic = !0,
        this.verticesNeedUpdate = !1,
        this.elementsNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.tangentsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.lineDistancesNeedUpdate = !1,
        this.groupsNeedUpdate = !1
      },
      i.Geometry.prototype = {
        constructor: i.Geometry,
        applyMatrix: function (e) {
          for (
            var t = (new i.Matrix3).getNormalMatrix(e),
            r = 0,
            n = this.vertices.length;
            n > r;
            r++
          ) {
            var o = this.vertices[r];
            o.applyMatrix4(e)
          }
          for (var r = 0, n = this.faces.length; n > r; r++) {
            var a = this.faces[r];
            a.normal.applyMatrix3(t).normalize();
            for (var s = 0, h = a.vertexNormals.length; h > s; s++) a.vertexNormals[s].applyMatrix3(t).normalize()
          }
          null !== this.boundingBox &&
          this.computeBoundingBox(),
          null !== this.boundingSphere &&
          this.computeBoundingSphere(),
          this.verticesNeedUpdate = !0,
          this.normalsNeedUpdate = !0
        },
        fromBufferGeometry: function (e) {
          for (
            var t = this,
            r = e.attributes,
            n = r.position.array,
            o = void 0 !== r.index ? r.index.array : void 0,
            a = void 0 !== r.normal ? r.normal.array : void 0,
            s = void 0 !== r.color ? r.color.array : void 0,
            h = void 0 !== r.uv ? r.uv.array : void 0,
            c = [],
            l = [],
            u = 0,
            d = 0;
            u < n.length;
            u += 3,
            d += 2
          ) t.vertices.push(new i.Vector3(n[u], n[u + 1], n[u + 2])),
          void 0 !== a &&
          c.push(new i.Vector3(a[u], a[u + 1], a[u + 2])),
          void 0 !== s &&
          t.colors.push(new i.Color(s[u], s[u + 1], s[u + 2])),
          void 0 !== h &&
          l.push(new i.Vector2(h[d], h[d + 1]));
          var f = function (e, r, n) {
            var o = void 0 !== a ? [
              c[e].clone(),
              c[r].clone(),
              c[n].clone()
            ] : [],
            u = void 0 !== s ? [
              t.colors[e].clone(),
              t.colors[r].clone(),
              t.colors[n].clone()
            ] : [];
            t.faces.push(new i.Face3(e, r, n, o, u)),
            void 0 !== h &&
            t.faceVertexUvs[0].push([l[e].clone(),
            l[r].clone(),
            l[n].clone()])
          };
          if (void 0 !== o) {
            var p = e.drawcalls;
            if (p.length > 0) for (var u = 0; u < p.length; u++) for (var m = p[u], v = m.start, g = m.count, y = m.index, d = v, x = v + g; x > d; d += 3) f(y + o[d], y + o[d + 1], y + o[d + 2]);
             else for (var u = 0; u < o.length; u += 3) f(o[u], o[u + 1], o[u + 2])
          } else for (var u = 0; u < n.length / 3; u += 3) f(u, u + 1, u + 2);
          return this.computeFaceNormals(),
          null !== e.boundingBox &&
          (this.boundingBox = e.boundingBox.clone()),
          null !== e.boundingSphere &&
          (this.boundingSphere = e.boundingSphere.clone()),
          this
        },
        center: function () {
          this.computeBoundingBox();
          var e = this.boundingBox.center().negate();
          return this.applyMatrix((new i.Matrix4).setPosition(e)),
          e
        },
        computeFaceNormals: function () {
          for (
            var e = new i.Vector3,
            t = new i.Vector3,
            r = 0,
            n = this.faces.length;
            n > r;
            r++
          ) {
            var o = this.faces[r],
            a = this.vertices[o.a],
            s = this.vertices[o.b],
            h = this.vertices[o.c];
            e.subVectors(h, s),
            t.subVectors(a, s),
            e.cross(t),
            e.normalize(),
            o.normal.copy(e)
          }
        },
        computeVertexNormals: function (e) {
          var t,
          r,
          n,
          o,
          a,
          s;
          for (
            s = new Array(this.vertices.length),
            t = 0,
            r = this.vertices.length;
            r > t;
            t++
          ) s[t] = new i.Vector3;
          if (e) {
            var h,
            c,
            l,
            u = new i.Vector3,
            d = new i.Vector3;
            for (n = 0, o = this.faces.length; o > n; n++) a = this.faces[n],
            h = this.vertices[a.a],
            c = this.vertices[a.b],
            l = this.vertices[a.c],
            u.subVectors(l, c),
            d.subVectors(h, c),
            u.cross(d),
            s[a.a].add(u),
            s[a.b].add(u),
            s[a.c].add(u)
          } else for (n = 0, o = this.faces.length; o > n; n++) a = this.faces[n],
          s[a.a].add(a.normal),
          s[a.b].add(a.normal),
          s[a.c].add(a.normal);
          for (t = 0, r = this.vertices.length; r > t; t++) s[t].normalize();
          for (n = 0, o = this.faces.length; o > n; n++) a = this.faces[n],
          a.vertexNormals[0] = s[a.a].clone(),
          a.vertexNormals[1] = s[a.b].clone(),
          a.vertexNormals[2] = s[a.c].clone()
        },
        computeMorphNormals: function () {
          var e,
          t,
          r,
          n,
          o;
          for (r = 0, n = this.faces.length; n > r; r++) for (
            o = this.faces[r],
            o.__originalFaceNormal ? o.__originalFaceNormal.copy(o.normal) : o.__originalFaceNormal = o.normal.clone(),
            o.__originalVertexNormals ||
            (o.__originalVertexNormals = []),
            e = 0,
            t = o.vertexNormals.length;
            t > e;
            e++
          ) o.__originalVertexNormals[e] ? o.__originalVertexNormals[e].copy(o.vertexNormals[e]) : o.__originalVertexNormals[e] = o.vertexNormals[e].clone();
          var a = new i.Geometry;
          for (a.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
            if (!this.morphNormals[e]) {
              this.morphNormals[e] = {},
              this.morphNormals[e].faceNormals = [],
              this.morphNormals[e].vertexNormals = [];
              var s,
              h,
              c = this.morphNormals[e].faceNormals,
              l = this.morphNormals[e].vertexNormals;
              for (r = 0, n = this.faces.length; n > r; r++) s = new i.Vector3,
              h = {
                a: new i.Vector3,
                b: new i.Vector3,
                c: new i.Vector3
              },
              c.push(s),
              l.push(h)
            }
            var u = this.morphNormals[e];
            a.vertices = this.morphTargets[e].vertices,
            a.computeFaceNormals(),
            a.computeVertexNormals();
            var s,
            h;
            for (r = 0, n = this.faces.length; n > r; r++) o = this.faces[r],
            s = u.faceNormals[r],
            h = u.vertexNormals[r],
            s.copy(o.normal),
            h.a.copy(o.vertexNormals[0]),
            h.b.copy(o.vertexNormals[1]),
            h.c.copy(o.vertexNormals[2])
          }
          for (r = 0, n = this.faces.length; n > r; r++) o = this.faces[r],
          o.normal = o.__originalFaceNormal,
          o.vertexNormals = o.__originalVertexNormals
        },
        computeTangents: function () {
          function e(e, t, r, i, n, o, a) {
            l = e.vertices[t],
            u = e.vertices[r],
            d = e.vertices[i],
            f = c[n],
            p = c[o],
            m = c[a],
            v = u.x - l.x,
            g = d.x - l.x,
            y = u.y - l.y,
            x = d.y - l.y,
            _ = u.z - l.z,
            w = d.z - l.z,
            b = p.x - f.x,
            M = m.x - f.x,
            S = p.y - f.y,
            T = m.y - f.y,
            C = 1 / (b * T - M * S),
            R.set((T * v - S * g) * C, (T * y - S * x) * C, (T * _ - S * w) * C),
            B.set((b * g - M * v) * C, (b * x - M * y) * C, (b * w - M * _) * C),
            D[t].add(R),
            D[r].add(R),
            D[i].add(R),
            L[t].add(B),
            L[r].add(B),
            L[i].add(B)
          }
          var t,
          r,
          n,
          o,
          a,
          s,
          h,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          v,
          g,
          y,
          x,
          _,
          w,
          b,
          M,
          S,
          T,
          C,
          A,
          E,
          P,
          D = [],
          L = [],
          R = new i.Vector3,
          B = new i.Vector3,
          F = new i.Vector3,
          U = new i.Vector3,
          O = new i.Vector3;
          for (n = 0, o = this.vertices.length; o > n; n++) D[n] = new i.Vector3,
          L[n] = new i.Vector3;
          for (t = 0, r = this.faces.length; r > t; t++) h = this.faces[t],
          c = this.faceVertexUvs[0][t],
          e(this, h.a, h.b, h.c, 0, 1, 2);
          var V = [
            'a',
            'b',
            'c',
            'd'
          ];
          for (t = 0, r = this.faces.length; r > t; t++) for (h = this.faces[t], a = 0; a < Math.min(h.vertexNormals.length, 3); a++) O.copy(h.vertexNormals[a]),
          s = h[V[a]],
          A = D[s],
          F.copy(A),
          F.sub(O.multiplyScalar(O.dot(A))).normalize(),
          U.crossVectors(h.vertexNormals[a], A),
          E = U.dot(L[s]),
          P = 0 > E ? - 1 : 1,
          h.vertexTangents[a] = new i.Vector4(F.x, F.y, F.z, P);
          this.hasTangents = !0
        },
        computeLineDistances: function () {
          for (var e = 0, t = this.vertices, r = 0, i = t.length; i > r; r++) r > 0 &&
          (e += t[r].distanceTo(t[r - 1])),
          this.lineDistances[r] = e
        },
        computeBoundingBox: function () {
          null === this.boundingBox &&
          (this.boundingBox = new i.Box3),
          this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function () {
          null === this.boundingSphere &&
          (this.boundingSphere = new i.Sphere),
          this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function (e, t, r) {
          if (e instanceof i.Geometry == !1) return void i.error(
            'THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.',
            e
          );
          var n,
          o = this.vertices.length,
          a = this.vertices,
          s = e.vertices,
          h = this.faces,
          c = e.faces,
          l = this.faceVertexUvs[0],
          u = e.faceVertexUvs[0];
          void 0 === r &&
          (r = 0),
          void 0 !== t &&
          (n = (new i.Matrix3).getNormalMatrix(t));
          for (var d = 0, f = s.length; f > d; d++) {
            var p = s[d],
            m = p.clone();
            void 0 !== t &&
            m.applyMatrix4(t),
            a.push(m)
          }
          for (d = 0, f = c.length; f > d; d++) {
            var v,
            g,
            y,
            x = c[d],
            _ = x.vertexNormals,
            w = x.vertexColors;
            v = new i.Face3(x.a + o, x.b + o, x.c + o),
            v.normal.copy(x.normal),
            void 0 !== n &&
            v.normal.applyMatrix3(n).normalize();
            for (var b = 0, M = _.length; M > b; b++) g = _[b].clone(),
            void 0 !== n &&
            g.applyMatrix3(n).normalize(),
            v.vertexNormals.push(g);
            v.color.copy(x.color);
            for (var b = 0, M = w.length; M > b; b++) y = w[b],
            v.vertexColors.push(y.clone());
            v.materialIndex = x.materialIndex + r,
            h.push(v)
          }
          for (d = 0, f = u.length; f > d; d++) {
            var S = u[d],
            T = [];
            if (void 0 !== S) {
              for (var b = 0, M = S.length; M > b; b++) T.push(S[b].clone());
              l.push(T)
            }
          }
        },
        mergeMesh: function (e) {
          return e instanceof i.Mesh == !1 ? void i.error(
            'THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.',
            e
          ) : (
            e.matrixAutoUpdate &&
            e.updateMatrix(),
            void this.merge(e.geometry, e.matrix)
          )
        },
        mergeVertices: function () {
          var e,
          t,
          r,
          i,
          n,
          o,
          a,
          s,
          h = {},
          c = [],
          l = [],
          u = 4,
          d = Math.pow(10, u);
          for (r = 0, i = this.vertices.length; i > r; r++) e = this.vertices[r],
          t = Math.round(e.x * d) + '_' + Math.round(e.y * d) + '_' + Math.round(e.z * d),
          void 0 === h[t] ? (h[t] = r, c.push(this.vertices[r]), l[r] = c.length - 1) : l[r] = l[h[t]];
          var f = [];
          for (r = 0, i = this.faces.length; i > r; r++) {
            n = this.faces[r],
            n.a = l[n.a],
            n.b = l[n.b],
            n.c = l[n.c],
            o = [
              n.a,
              n.b,
              n.c
            ];
            for (var p = - 1, m = 0; 3 > m; m++) if (o[m] == o[(m + 1) % 3]) {
              p = m,
              f.push(r);
              break
            }
          }
          for (r = f.length - 1; r >= 0; r--) {
            var v = f[r];
            for (
              this.faces.splice(v, 1),
              a = 0,
              s = this.faceVertexUvs.length;
              s > a;
              a++
            ) this.faceVertexUvs[a].splice(v, 1)
          }
          var g = this.vertices.length - c.length;
          return this.vertices = c,
          g
        },
        toJSON: function () {
          function e(e, t, r) {
            return r ? e | 1 << t : e & ~(1 << t)
          }
          function t(e) {
            var t = e.x.toString() + e.y.toString() + e.z.toString();
            return void 0 !== d[t] ? d[t] : (d[t] = u.length / 3, u.push(e.x, e.y, e.z), d[t])
          }
          function r(e) {
            var t = e.r.toString() + e.g.toString() + e.b.toString();
            return void 0 !== p[t] ? p[t] : (p[t] = f.length, f.push(e.getHex()), p[t])
          }
          function i(e) {
            var t = e.x.toString() + e.y.toString();
            return void 0 !== v[t] ? v[t] : (v[t] = m.length / 2, m.push(e.x, e.y), v[t])
          }
          var n = {
            metadata: {
              version: 4,
              type: 'BufferGeometry',
              generator: 'BufferGeometryExporter'
            },
            uuid: this.uuid,
            type: this.type
          };
          if ('' !== this.name && (n.name = this.name), void 0 !== this.parameters) {
            var o = this.parameters;
            for (var a in o) void 0 !== o[a] &&
            (n[a] = o[a]);
            return n
          }
          for (var s = [], h = 0; h < this.vertices.length; h++) {
            var c = this.vertices[h];
            s.push(c.x, c.y, c.z)
          }
          for (
            var l = [],
            u = [],
            d = {},
            f = [],
            p = {},
            m = [],
            v = {},
            h = 0;
            h < this.faces.length;
            h++
          ) {
            var g = this.faces[h],
            y = !1,
            x = !1,
            _ = void 0 !== this.faceVertexUvs[0][h],
            w = g.normal.length() > 0,
            b = g.vertexNormals.length > 0,
            M = 1 !== g.color.r ||
            1 !== g.color.g ||
            1 !== g.color.b,
            S = g.vertexColors.length > 0,
            T = 0;
            if (
              T = e(T, 0, 0),
              T = e(T, 1, y),
              T = e(T, 2, x),
              T = e(T, 3, _),
              T = e(T, 4, w),
              T = e(T, 5, b),
              T = e(T, 6, M),
              T = e(T, 7, S),
              l.push(T),
              l.push(g.a, g.b, g.c),
              _
            ) {
              var C = this.faceVertexUvs[0][h];
              l.push(i(C[0]), i(C[1]), i(C[2]))
            }
            if (w && l.push(t(g.normal)), b) {
              var A = g.vertexNormals;
              l.push(t(A[0]), t(A[1]), t(A[2]))
            }
            if (M && l.push(r(g.color)), S) {
              var E = g.vertexColors;
              l.push(r(E[0]), r(E[1]), r(E[2]))
            }
          }
          return n.data = {},
          n.data.vertices = s,
          n.data.normals = u,
          f.length > 0 &&
          (n.data.colors = f),
          m.length > 0 &&
          (n.data.uvs = [
            m
          ]),
          n.data.faces = l,
          n
        },
        clone: function () {
          for (var e = new i.Geometry, t = this.vertices, r = 0, n = t.length; n > r; r++) e.vertices.push(t[r].clone());
          for (var o = this.faces, r = 0, n = o.length; n > r; r++) e.faces.push(o[r].clone());
          for (var r = 0, n = this.faceVertexUvs.length; n > r; r++) {
            var a = this.faceVertexUvs[r];
            void 0 === e.faceVertexUvs[r] &&
            (e.faceVertexUvs[r] = []);
            for (var s = 0, h = a.length; h > s; s++) {
              for (var c = a[s], l = [], u = 0, d = c.length; d > u; u++) {
                var f = c[u];
                l.push(f.clone())
              }
              e.faceVertexUvs[r].push(l)
            }
          }
          return e
        },
        dispose: function () {
          this.dispatchEvent({
            type: 'dispose'
          })
        }
      },
      i.EventDispatcher.prototype.apply(i.Geometry.prototype),
      i.GeometryIdCount = 0,
      i.Camera = function () {
        i.Object3D.call(this),
        this.type = 'Camera',
        this.matrixWorldInverse = new i.Matrix4,
        this.projectionMatrix = new i.Matrix4
      },
      i.Camera.prototype = Object.create(i.Object3D.prototype),
      i.Camera.prototype.constructor = i.Camera,
      i.Camera.prototype.getWorldDirection = function () {
        var e = new i.Quaternion;
        return function (t) {
          var r = t ||
          new i.Vector3;
          return this.getWorldQuaternion(e),
          r.set(0, 0, - 1).applyQuaternion(e)
        }
      }(),
      i.Camera.prototype.lookAt = function () {
        var e = new i.Matrix4;
        return function (t) {
          e.lookAt(this.position, t, this.up),
          this.quaternion.setFromRotationMatrix(e)
        }
      }(),
      i.Camera.prototype.clone = function (e) {
        return void 0 === e &&
        (e = new i.Camera),
        i.Object3D.prototype.clone.call(this, e),
        e.matrixWorldInverse.copy(this.matrixWorldInverse),
        e.projectionMatrix.copy(this.projectionMatrix),
        e
      },
      i.CubeCamera = function (e, t, r) {
        i.Object3D.call(this),
        this.type = 'CubeCamera';
        var n = 90,
        o = 1,
        a = new i.PerspectiveCamera(n, o, e, t);
        a.up.set(0, - 1, 0),
        a.lookAt(new i.Vector3(1, 0, 0)),
        this.add(a);
        var s = new i.PerspectiveCamera(n, o, e, t);
        s.up.set(0, - 1, 0),
        s.lookAt(new i.Vector3( - 1, 0, 0)),
        this.add(s);
        var h = new i.PerspectiveCamera(n, o, e, t);
        h.up.set(0, 0, 1),
        h.lookAt(new i.Vector3(0, 1, 0)),
        this.add(h);
        var c = new i.PerspectiveCamera(n, o, e, t);
        c.up.set(0, 0, - 1),
        c.lookAt(new i.Vector3(0, - 1, 0)),
        this.add(c);
        var l = new i.PerspectiveCamera(n, o, e, t);
        l.up.set(0, - 1, 0),
        l.lookAt(new i.Vector3(0, 0, 1)),
        this.add(l);
        var u = new i.PerspectiveCamera(n, o, e, t);
        u.up.set(0, - 1, 0),
        u.lookAt(new i.Vector3(0, 0, - 1)),
        this.add(u),
        this.renderTarget = new i.WebGLRenderTargetCube(
          r,
          r,
          {
            format: i.RGBFormat,
            magFilter: i.LinearFilter,
            minFilter: i.LinearFilter
          }
        ),
        this.updateCubeMap = function (e, t) {
          var r = this.renderTarget,
          i = r.generateMipmaps;
          r.generateMipmaps = !1,
          r.activeCubeFace = 0,
          e.render(t, a, r),
          r.activeCubeFace = 1,
          e.render(t, s, r),
          r.activeCubeFace = 2,
          e.render(t, h, r),
          r.activeCubeFace = 3,
          e.render(t, c, r),
          r.activeCubeFace = 4,
          e.render(t, l, r),
          r.generateMipmaps = i,
          r.activeCubeFace = 5,
          e.render(t, u, r)
        }
      },
      i.CubeCamera.prototype = Object.create(i.Object3D.prototype),
      i.CubeCamera.prototype.constructor = i.CubeCamera,
      i.OrthographicCamera = function (e, t, r, n, o, a) {
        i.Camera.call(this),
        this.type = 'OrthographicCamera',
        this.zoom = 1,
        this.left = e,
        this.right = t,
        this.top = r,
        this.bottom = n,
        this.near = void 0 !== o ? o : 0.1,
        this.far = void 0 !== a ? a : 2000,
        this.updateProjectionMatrix()
      },
      i.OrthographicCamera.prototype = Object.create(i.Camera.prototype),
      i.OrthographicCamera.prototype.constructor = i.OrthographicCamera,
      i.OrthographicCamera.prototype.updateProjectionMatrix = function () {
        var e = (this.right - this.left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        r = (this.right + this.left) / 2,
        i = (this.top + this.bottom) / 2;
        this.projectionMatrix.makeOrthographic(r - e, r + e, i + t, i - t, this.near, this.far)
      },
      i.OrthographicCamera.prototype.clone = function () {
        var e = new i.OrthographicCamera;
        return i.Camera.prototype.clone.call(this, e),
        e.zoom = this.zoom,
        e.left = this.left,
        e.right = this.right,
        e.top = this.top,
        e.bottom = this.bottom,
        e.near = this.near,
        e.far = this.far,
        e.projectionMatrix.copy(this.projectionMatrix),
        e
      },
      i.PerspectiveCamera = function (e, t, r, n) {
        i.Camera.call(this),
        this.type = 'PerspectiveCamera',
        this.zoom = 1,
        this.fov = void 0 !== e ? e : 50,
        this.aspect = void 0 !== t ? t : 1,
        this.near = void 0 !== r ? r : 0.1,
        this.far = void 0 !== n ? n : 2000,
        this.updateProjectionMatrix()
      },
      i.PerspectiveCamera.prototype = Object.create(i.Camera.prototype),
      i.PerspectiveCamera.prototype.constructor = i.PerspectiveCamera,
      i.PerspectiveCamera.prototype.setLens = function (e, t) {
        void 0 === t &&
        (t = 24),
        this.fov = 2 * i.Math.radToDeg(Math.atan(t / (2 * e))),
        this.updateProjectionMatrix()
      },
      i.PerspectiveCamera.prototype.setViewOffset = function (e, t, r, i, n, o) {
        this.fullWidth = e,
        this.fullHeight = t,
        this.x = r,
        this.y = i,
        this.width = n,
        this.height = o,
        this.updateProjectionMatrix()
      },
      i.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
        var e = i.Math.radToDeg(
          2 * Math.atan(Math.tan(0.5 * i.Math.degToRad(this.fov)) / this.zoom)
        );
        if (this.fullWidth) {
          var t = this.fullWidth / this.fullHeight,
          r = Math.tan(i.Math.degToRad(0.5 * e)) * this.near,
          n = - r,
          o = t * n,
          a = t * r,
          s = Math.abs(a - o),
          h = Math.abs(r - n);
          this.projectionMatrix.makeFrustum(
            o + this.x * s / this.fullWidth,
            o + (this.x + this.width) * s / this.fullWidth,
            r - (this.y + this.height) * h / this.fullHeight,
            r - this.y * h / this.fullHeight,
            this.near,
            this.far
          )
        } else this.projectionMatrix.makePerspective(e, this.aspect, this.near, this.far)
      },
      i.PerspectiveCamera.prototype.clone = function () {
        var e = new i.PerspectiveCamera;
        return i.Camera.prototype.clone.call(this, e),
        e.zoom = this.zoom,
        e.fov = this.fov,
        e.aspect = this.aspect,
        e.near = this.near,
        e.far = this.far,
        e.projectionMatrix.copy(this.projectionMatrix),
        e
      },
      i.Light = function (e) {
        i.Object3D.call(this),
        this.type = 'Light',
        this.color = new i.Color(e)
      },
      i.Light.prototype = Object.create(i.Object3D.prototype),
      i.Light.prototype.constructor = i.Light,
      i.Light.prototype.clone = function (e) {
        return void 0 === e &&
        (e = new i.Light),
        i.Object3D.prototype.clone.call(this, e),
        e.color.copy(this.color),
        e
      },
      i.AmbientLight = function (e) {
        i.Light.call(this, e),
        this.type = 'AmbientLight'
      },
      i.AmbientLight.prototype = Object.create(i.Light.prototype),
      i.AmbientLight.prototype.constructor = i.AmbientLight,
      i.AmbientLight.prototype.clone = function () {
        var e = new i.AmbientLight;
        return i.Light.prototype.clone.call(this, e),
        e
      },
      i.AreaLight = function (e, t) {
        i.Light.call(this, e),
        this.type = 'AreaLight',
        this.normal = new i.Vector3(0, - 1, 0),
        this.right = new i.Vector3(1, 0, 0),
        this.intensity = void 0 !== t ? t : 1,
        this.width = 1,
        this.height = 1,
        this.constantAttenuation = 1.5,
        this.linearAttenuation = 0.5,
        this.quadraticAttenuation = 0.1
      },
      i.AreaLight.prototype = Object.create(i.Light.prototype),
      i.AreaLight.prototype.constructor = i.AreaLight,
      i.DirectionalLight = function (e, t) {
        i.Light.call(this, e),
        this.type = 'DirectionalLight',
        this.position.set(0, 1, 0),
        this.target = new i.Object3D,
        this.intensity = void 0 !== t ? t : 1,
        this.castShadow = !1,
        this.onlyShadow = !1,
        this.shadowCameraNear = 50,
        this.shadowCameraFar = 5000,
        this.shadowCameraLeft = - 500,
        this.shadowCameraRight = 500,
        this.shadowCameraTop = 500,
        this.shadowCameraBottom = - 500,
        this.shadowCameraVisible = !1,
        this.shadowBias = 0,
        this.shadowDarkness = 0.5,
        this.shadowMapWidth = 512,
        this.shadowMapHeight = 512,
        this.shadowCascade = !1,
        this.shadowCascadeOffset = new i.Vector3(0, 0, - 1000),
        this.shadowCascadeCount = 2,
        this.shadowCascadeBias = [
          0,
          0,
          0
        ],
        this.shadowCascadeWidth = [
          512,
          512,
          512
        ],
        this.shadowCascadeHeight = [
          512,
          512,
          512
        ],
        this.shadowCascadeNearZ = [
          - 1,
          0.99,
          0.998
        ],
        this.shadowCascadeFarZ = [
          0.99,
          0.998,
          1
        ],
        this.shadowCascadeArray = [],
        this.shadowMap = null,
        this.shadowMapSize = null,
        this.shadowCamera = null,
        this.shadowMatrix = null
      },
      i.DirectionalLight.prototype = Object.create(i.Light.prototype),
      i.DirectionalLight.prototype.constructor = i.DirectionalLight,
      i.DirectionalLight.prototype.clone = function () {
        var e = new i.DirectionalLight;
        return i.Light.prototype.clone.call(this, e),
        e.target = this.target.clone(),
        e.intensity = this.intensity,
        e.castShadow = this.castShadow,
        e.onlyShadow = this.onlyShadow,
        e.shadowCameraNear = this.shadowCameraNear,
        e.shadowCameraFar = this.shadowCameraFar,
        e.shadowCameraLeft = this.shadowCameraLeft,
        e.shadowCameraRight = this.shadowCameraRight,
        e.shadowCameraTop = this.shadowCameraTop,
        e.shadowCameraBottom = this.shadowCameraBottom,
        e.shadowCameraVisible = this.shadowCameraVisible,
        e.shadowBias = this.shadowBias,
        e.shadowDarkness = this.shadowDarkness,
        e.shadowMapWidth = this.shadowMapWidth,
        e.shadowMapHeight = this.shadowMapHeight,
        e.shadowCascade = this.shadowCascade,
        e.shadowCascadeOffset.copy(this.shadowCascadeOffset),
        e.shadowCascadeCount = this.shadowCascadeCount,
        e.shadowCascadeBias = this.shadowCascadeBias.slice(0),
        e.shadowCascadeWidth = this.shadowCascadeWidth.slice(0),
        e.shadowCascadeHeight = this.shadowCascadeHeight.slice(0),
        e.shadowCascadeNearZ = this.shadowCascadeNearZ.slice(0),
        e.shadowCascadeFarZ = this.shadowCascadeFarZ.slice(0),
        e
      },
      i.HemisphereLight = function (e, t, r) {
        i.Light.call(this, e),
        this.type = 'HemisphereLight',
        this.position.set(0, 100, 0),
        this.groundColor = new i.Color(t),
        this.intensity = void 0 !== r ? r : 1
      },
      i.HemisphereLight.prototype = Object.create(i.Light.prototype),
      i.HemisphereLight.prototype.constructor = i.HemisphereLight,
      i.HemisphereLight.prototype.clone = function () {
        var e = new i.HemisphereLight;
        return i.Light.prototype.clone.call(this, e),
        e.groundColor.copy(this.groundColor),
        e.intensity = this.intensity,
        e
      },
      i.PointLight = function (e, t, r, n) {
        i.Light.call(this, e),
        this.type = 'PointLight',
        this.intensity = void 0 !== t ? t : 1,
        this.distance = void 0 !== r ? r : 0,
        this.decay = void 0 !== n ? n : 1
      },
      i.PointLight.prototype = Object.create(i.Light.prototype),
      i.PointLight.prototype.constructor = i.PointLight,
      i.PointLight.prototype.clone = function () {
        var e = new i.PointLight;
        return i.Light.prototype.clone.call(this, e),
        e.intensity = this.intensity,
        e.distance = this.distance,
        e.decay = this.decay,
        e
      },
      i.SpotLight = function (e, t, r, n, o, a) {
        i.Light.call(this, e),
        this.type = 'SpotLight',
        this.position.set(0, 1, 0),
        this.target = new i.Object3D,
        this.intensity = void 0 !== t ? t : 1,
        this.distance = void 0 !== r ? r : 0,
        this.angle = void 0 !== n ? n : Math.PI / 3,
        this.exponent = void 0 !== o ? o : 10,
        this.decay = void 0 !== a ? a : 1,
        this.castShadow = !1,
        this.onlyShadow = !1,
        this.shadowCameraNear = 50,
        this.shadowCameraFar = 5000,
        this.shadowCameraFov = 50,
        this.shadowCameraVisible = !1,
        this.shadowBias = 0,
        this.shadowDarkness = 0.5,
        this.shadowMapWidth = 512,
        this.shadowMapHeight = 512,
        this.shadowMap = null,
        this.shadowMapSize = null,
        this.shadowCamera = null,
        this.shadowMatrix = null
      },
      i.SpotLight.prototype = Object.create(i.Light.prototype),
      i.SpotLight.prototype.constructor = i.SpotLight,
      i.SpotLight.prototype.clone = function () {
        var e = new i.SpotLight;
        return i.Light.prototype.clone.call(this, e),
        e.target = this.target.clone(),
        e.intensity = this.intensity,
        e.distance = this.distance,
        e.angle = this.angle,
        e.exponent = this.exponent,
        e.decay = this.decay,
        e.castShadow = this.castShadow,
        e.onlyShadow = this.onlyShadow,
        e.shadowCameraNear = this.shadowCameraNear,
        e.shadowCameraFar = this.shadowCameraFar,
        e.shadowCameraFov = this.shadowCameraFov,
        e.shadowCameraVisible = this.shadowCameraVisible,
        e.shadowBias = this.shadowBias,
        e.shadowDarkness = this.shadowDarkness,
        e.shadowMapWidth = this.shadowMapWidth,
        e.shadowMapHeight = this.shadowMapHeight,
        e
      },
      i.Cache = {
        files: {
        },
        add: function (e, t) {
          this.files[e] = t
        },
        get: function (e) {
          return this.files[e]
        },
        remove: function (e) {
          delete this.files[e]
        },
        clear: function () {
          this.files = {}
        }
      },
      i.Loader = function (e) {
        this.showStatus = e,
        this.statusDomElement = e ? i.Loader.prototype.addStatusElement() : null,
        this.imageLoader = new i.ImageLoader,
        this.onLoadStart = function () {
        },
        this.onLoadProgress = function () {
        },
        this.onLoadComplete = function () {
        }
      },
      i.Loader.prototype = {
        constructor: i.Loader,
        crossOrigin: void 0,
        addStatusElement: function () {
          var e = document.createElement('div');
          return e.style.position = 'absolute',
          e.style.right = '0px',
          e.style.top = '0px',
          e.style.fontSize = '0.8em',
          e.style.textAlign = 'left',
          e.style.background = 'rgba(0,0,0,0.25)',
          e.style.color = '#fff',
          e.style.width = '120px',
          e.style.padding = '0.5em 0.5em 0.5em 0.5em',
          e.style.zIndex = 1000,
          e.innerHTML = 'Loading ...',
          e
        },
        updateProgress: function (e) {
          var t = 'Loaded ';
          t += e.total ? (100 * e.loaded / e.total).toFixed(0) + '%' : (e.loaded / 1024).toFixed(2) + ' KB',
          this.statusDomElement.innerHTML = t
        },
        extractUrlBase: function (e) {
          var t = e.split('/');
          return 1 === t.length ? './' : (t.pop(), t.join('/') + '/')
        },
        initMaterials: function (e, t) {
          for (var r = [], i = 0; i < e.length; ++i) r[i] = this.createMaterial(e[i], t);
          return r
        },
        needsTangents: function (e) {
          for (var t = 0, r = e.length; r > t; t++) {
            var n = e[t];
            if (n instanceof i.ShaderMaterial) return !0
          }
          return !1
        },
        createMaterial: function (e, t) {
          function r(e) {
            var t = Math.log(e) / Math.LN2;
            return Math.pow(2, Math.round(t))
          }
          function n(e, n, o, s, h, c, l) {
            var u,
            d = t + o,
            f = i.Loader.Handlers.get(d);
            if (
              null !== f ? u = f.load(d) : (
                u = new i.Texture,
                f = a.imageLoader,
                f.crossOrigin = a.crossOrigin,
                f.load(
                  d,
                  function (e) {
                    if (
                      i.Math.isPowerOfTwo(e.width) === !1 ||
                      i.Math.isPowerOfTwo(e.height) === !1
                    ) {
                      var t = r(e.width),
                      n = r(e.height),
                      o = document.createElement('canvas');
                      o.width = t,
                      o.height = n;
                      var a = o.getContext('2d');
                      a.drawImage(e, 0, 0, t, n),
                      u.image = o
                    } else u.image = e;
                    u.needsUpdate = !0
                  }
                )
              ),
              u.sourceFile = o,
              s &&
              (
                u.repeat.set(s[0], s[1]),
                1 !== s[0] &&
                (u.wrapS = i.RepeatWrapping),
                1 !== s[1] &&
                (u.wrapT = i.RepeatWrapping)
              ),
              h &&
              u.offset.set(h[0], h[1]),
              c
            ) {
              var p = {
                repeat: i.RepeatWrapping,
                mirror: i.MirroredRepeatWrapping
              };
              void 0 !== p[c[0]] &&
              (u.wrapS = p[c[0]]),
              void 0 !== p[c[1]] &&
              (u.wrapT = p[c[1]])
            }
            l &&
            (u.anisotropy = l),
            e[n] = u
          }
          function o(e) {
            return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
          }
          var a = this,
          s = 'MeshLambertMaterial',
          h = {
            color: 15658734,
            opacity: 1,
            map: null,
            lightMap: null,
            normalMap: null,
            bumpMap: null,
            wireframe: !1
          };
          if (e.shading) {
            var c = e.shading.toLowerCase();
            'phong' === c ? s = 'MeshPhongMaterial' : 'basic' === c &&
            (s = 'MeshBasicMaterial')
          }
          void 0 !== e.blending &&
          void 0 !== i[e.blending] &&
          (h.blending = i[e.blending]),
          void 0 !== e.transparent &&
          (h.transparent = e.transparent),
          void 0 !== e.opacity &&
          e.opacity < 1 &&
          (h.transparent = !0),
          void 0 !== e.depthTest &&
          (h.depthTest = e.depthTest),
          void 0 !== e.depthWrite &&
          (h.depthWrite = e.depthWrite),
          void 0 !== e.visible &&
          (h.visible = e.visible),
          void 0 !== e.flipSided &&
          (h.side = i.BackSide),
          void 0 !== e.doubleSided &&
          (h.side = i.DoubleSide),
          void 0 !== e.wireframe &&
          (h.wireframe = e.wireframe),
          void 0 !== e.vertexColors &&
          (
            'face' === e.vertexColors ? h.vertexColors = i.FaceColors : e.vertexColors &&
            (h.vertexColors = i.VertexColors)
          ),
          e.colorDiffuse ? h.color = o(e.colorDiffuse) : e.DbgColor &&
          (h.color = e.DbgColor),
          e.colorSpecular &&
          (h.specular = o(e.colorSpecular)),
          e.colorEmissive &&
          (h.emissive = o(e.colorEmissive)),
          void 0 !== e.transparency &&
          (
            console.warn('THREE.Loader: transparency has been renamed to opacity'),
            e.opacity = e.transparency
          ),
          void 0 !== e.opacity &&
          (h.opacity = e.opacity),
          e.specularCoef &&
          (h.shininess = e.specularCoef),
          e.mapDiffuse &&
          t &&
          n(
            h,
            'map',
            e.mapDiffuse,
            e.mapDiffuseRepeat,
            e.mapDiffuseOffset,
            e.mapDiffuseWrap,
            e.mapDiffuseAnisotropy
          ),
          e.mapLight &&
          t &&
          n(
            h,
            'lightMap',
            e.mapLight,
            e.mapLightRepeat,
            e.mapLightOffset,
            e.mapLightWrap,
            e.mapLightAnisotropy
          ),
          e.mapBump &&
          t &&
          n(
            h,
            'bumpMap',
            e.mapBump,
            e.mapBumpRepeat,
            e.mapBumpOffset,
            e.mapBumpWrap,
            e.mapBumpAnisotropy
          ),
          e.mapNormal &&
          t &&
          n(
            h,
            'normalMap',
            e.mapNormal,
            e.mapNormalRepeat,
            e.mapNormalOffset,
            e.mapNormalWrap,
            e.mapNormalAnisotropy
          ),
          e.mapSpecular &&
          t &&
          n(
            h,
            'specularMap',
            e.mapSpecular,
            e.mapSpecularRepeat,
            e.mapSpecularOffset,
            e.mapSpecularWrap,
            e.mapSpecularAnisotropy
          ),
          e.mapAlpha &&
          t &&
          n(
            h,
            'alphaMap',
            e.mapAlpha,
            e.mapAlphaRepeat,
            e.mapAlphaOffset,
            e.mapAlphaWrap,
            e.mapAlphaAnisotropy
          ),
          e.mapBumpScale &&
          (h.bumpScale = e.mapBumpScale),
          e.mapNormalFactor &&
          (
            h.normalScale = new i.Vector2(e.mapNormalFactor, e.mapNormalFactor)
          );
          var l = new i[s](h);
          return void 0 !== e.DbgName &&
          (l.name = e.DbgName),
          l
        }
      },
      i.Loader.Handlers = {
        handlers: [],
        add: function (e, t) {
          this.handlers.push(e, t)
        },
        get: function (e) {
          for (var t = 0, r = this.handlers.length; r > t; t += 2) {
            var i = this.handlers[t],
            n = this.handlers[t + 1];
            if (i.test(e)) return n
          }
          return null
        }
      },
      i.XHRLoader = function (e) {
        this.manager = void 0 !== e ? e : i.DefaultLoadingManager
      },
      i.XHRLoader.prototype = {
        constructor: i.XHRLoader,
        load: function (e, t, r, n) {
          var o = this,
          a = i.Cache.get(e);
          if (void 0 !== a) return void (t && t(a));
          var s = new XMLHttpRequest;
          s.open('GET', e, !0),
          s.addEventListener(
            'load',
            function (r) {
              i.Cache.add(e, this.response),
              t &&
              t(this.response),
              o.manager.itemEnd(e)
            },
            !1
          ),
          void 0 !== r &&
          s.addEventListener('progress', function (e) {
            r(e)
          }, !1),
          void 0 !== n &&
          s.addEventListener('error', function (e) {
            n(e)
          }, !1),
          void 0 !== this.crossOrigin &&
          (s.crossOrigin = this.crossOrigin),
          void 0 !== this.responseType &&
          (s.responseType = this.responseType),
          s.send(null),
          o.manager.itemStart(e)
        },
        setResponseType: function (e) {
          this.responseType = e
        },
        setCrossOrigin: function (e) {
          this.crossOrigin = e
        }
      },
      i.ImageLoader = function (e) {
        this.manager = void 0 !== e ? e : i.DefaultLoadingManager
      },
      i.ImageLoader.prototype = {
        constructor: i.ImageLoader,
        load: function (e, t, r, n) {
          var o = this,
          a = i.Cache.get(e);
          if (void 0 !== a) return void t(a);
          var s = document.createElement('img');
          return s.addEventListener(
            'load',
            function (r) {
              i.Cache.add(e, this),
              t &&
              t(this),
              o.manager.itemEnd(e)
            },
            !1
          ),
          void 0 !== r &&
          s.addEventListener('progress', function (e) {
            r(e)
          }, !1),
          void 0 !== n &&
          s.addEventListener('error', function (e) {
            n(e)
          }, !1),
          void 0 !== this.crossOrigin &&
          (s.crossOrigin = this.crossOrigin),
          s.src = e,
          o.manager.itemStart(e),
          s
        },
        setCrossOrigin: function (e) {
          this.crossOrigin = e
        }
      },
      i.JSONLoader = function (e) {
        i.Loader.call(this, e),
        this.withCredentials = !1
      },
      i.JSONLoader.prototype = Object.create(i.Loader.prototype),
      i.JSONLoader.prototype.constructor = i.JSONLoader,
      i.JSONLoader.prototype.load = function (e, t, r) {
        r = r &&
        'string' == typeof r ? r : this.extractUrlBase(e),
        this.onLoadStart(),
        this.loadAjaxJSON(this, e, t, r)
      },
      i.JSONLoader.prototype.loadAjaxJSON = function (e, t, r, n, o) {
        var a = new XMLHttpRequest,
        s = 0;
        a.onreadystatechange = function () {
          if (a.readyState === a.DONE) if (200 === a.status || 0 === a.status) {
            if (a.responseText) {
              var h = JSON.parse(a.responseText),
              c = h.metadata;
              if (void 0 !== c) {
                if ('object' === c.type) return void i.error(
                  'THREE.JSONLoader: ' + t + ' should be loaded with THREE.ObjectLoader instead.'
                );
                if ('scene' === c.type) return void i.error(
                  'THREE.JSONLoader: ' + t + ' seems to be a Scene. Use THREE.SceneLoader instead.'
                )
              }
              var l = e.parse(h, n);
              r(l.geometry, l.materials)
            } else i.error(
              'THREE.JSONLoader: ' + t + ' seems to be unreachable or the file is empty.'
            );
            e.onLoadComplete()
          } else i.error('THREE.JSONLoader: Couldn\'t load ' + t + ' (' + a.status + ')');
           else a.readyState === a.LOADING ? o &&
          (
            0 === s &&
            (s = a.getResponseHeader('Content-Length')),
            o({
              total: s,
              loaded: a.responseText.length
            })
          ) : a.readyState === a.HEADERS_RECEIVED &&
          void 0 !== o &&
          (s = a.getResponseHeader('Content-Length'))
        },
        a.open('GET', t, !0),
        a.withCredentials = this.withCredentials,
        a.send(null)
      },
      i.JSONLoader.prototype.parse = function (e, t) {
        function r(t) {
          function r(e, t) {
            return e & 1 << t
          }
          var n,
          o,
          s,
          h,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          v,
          g,
          y,
          x,
          _,
          w,
          b,
          M,
          S,
          T,
          C,
          A,
          E,
          P,
          D,
          L,
          R = e.faces,
          B = e.vertices,
          F = e.normals,
          U = e.colors,
          O = 0;
          if (void 0 !== e.uvs) {
            for (n = 0; n < e.uvs.length; n++) e.uvs[n].length &&
            O++;
            for (n = 0; O > n; n++) a.faceVertexUvs[n] = []
          }
          for (h = 0, c = B.length; c > h; ) b = new i.Vector3,
          b.x = B[h++] * t,
          b.y = B[h++] * t,
          b.z = B[h++] * t,
          a.vertices.push(b);
          for (h = 0, c = R.length; c > h; ) if (
            p = R[h++],
            m = r(p, 0),
            v = r(p, 1),
            g = r(p, 3),
            y = r(p, 4),
            x = r(p, 5),
            _ = r(p, 6),
            w = r(p, 7),
            m
          ) {
            if (
              S = new i.Face3,
              S.a = R[h],
              S.b = R[h + 1],
              S.c = R[h + 3],
              T = new i.Face3,
              T.a = R[h + 1],
              T.b = R[h + 2],
              T.c = R[h + 3],
              h += 4,
              v &&
              (f = R[h++], S.materialIndex = f, T.materialIndex = f),
              s = a.faces.length,
              g
            ) for (n = 0; O > n; n++) for (
              E = e.uvs[n],
              a.faceVertexUvs[n][s] = [],
              a.faceVertexUvs[n][s + 1] = [],
              o = 0;
              4 > o;
              o++
            ) d = R[h++],
            D = E[2 * d],
            L = E[2 * d + 1],
            P = new i.Vector2(D, L),
            2 !== o &&
            a.faceVertexUvs[n][s].push(P),
            0 !== o &&
            a.faceVertexUvs[n][s + 1].push(P);
            if (
              y &&
              (
                u = 3 * R[h++],
                S.normal.set(F[u++], F[u++], F[u]),
                T.normal.copy(S.normal)
              ),
              x
            ) for (n = 0; 4 > n; n++) u = 3 * R[h++],
            A = new i.Vector3(F[u++], F[u++], F[u]),
            2 !== n &&
            S.vertexNormals.push(A),
            0 !== n &&
            T.vertexNormals.push(A);
            if (_ && (l = R[h++], C = U[l], S.color.setHex(C), T.color.setHex(C)), w) for (n = 0; 4 > n; n++) l = R[h++],
            C = U[l],
            2 !== n &&
            S.vertexColors.push(new i.Color(C)),
            0 !== n &&
            T.vertexColors.push(new i.Color(C));
            a.faces.push(S),
            a.faces.push(T)
          } else {
            if (
              M = new i.Face3,
              M.a = R[h++],
              M.b = R[h++],
              M.c = R[h++],
              v &&
              (f = R[h++], M.materialIndex = f),
              s = a.faces.length,
              g
            ) for (n = 0; O > n; n++) for (E = e.uvs[n], a.faceVertexUvs[n][s] = [], o = 0; 3 > o; o++) d = R[h++],
            D = E[2 * d],
            L = E[2 * d + 1],
            P = new i.Vector2(D, L),
            a.faceVertexUvs[n][s].push(P);
            if (y && (u = 3 * R[h++], M.normal.set(F[u++], F[u++], F[u])), x) for (n = 0; 3 > n; n++) u = 3 * R[h++],
            A = new i.Vector3(F[u++], F[u++], F[u]),
            M.vertexNormals.push(A);
            if (_ && (l = R[h++], M.color.setHex(U[l])), w) for (n = 0; 3 > n; n++) l = R[h++],
            M.vertexColors.push(new i.Color(U[l]));
            a.faces.push(M)
          }
        }
        function n() {
          var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
          if (e.skinWeights) for (var r = 0, n = e.skinWeights.length; n > r; r += t) {
            var o = e.skinWeights[r],
            s = t > 1 ? e.skinWeights[r + 1] : 0,
            h = t > 2 ? e.skinWeights[r + 2] : 0,
            c = t > 3 ? e.skinWeights[r + 3] : 0;
            a.skinWeights.push(new i.Vector4(o, s, h, c))
          }
          if (e.skinIndices) for (var r = 0, n = e.skinIndices.length; n > r; r += t) {
            var l = e.skinIndices[r],
            u = t > 1 ? e.skinIndices[r + 1] : 0,
            d = t > 2 ? e.skinIndices[r + 2] : 0,
            f = t > 3 ? e.skinIndices[r + 3] : 0;
            a.skinIndices.push(new i.Vector4(l, u, d, f))
          }
          a.bones = e.bones,
          a.bones &&
          a.bones.length > 0 &&
          (
            a.skinWeights.length !== a.skinIndices.length ||
            a.skinIndices.length !== a.vertices.length
          ) &&
          i.warn(
            'THREE.JSONLoader: When skinning, number of vertices (' + a.vertices.length + '), skinIndices (' + a.skinIndices.length + '), and skinWeights (' + a.skinWeights.length + ') should match.'
          ),
          a.animation = e.animation,
          a.animations = e.animations
        }
        function o(t) {
          if (void 0 !== e.morphTargets) {
            var r,
            n,
            o,
            s,
            h,
            c;
            for (r = 0, n = e.morphTargets.length; n > r; r++) for (
              a.morphTargets[r] = {},
              a.morphTargets[r].name = e.morphTargets[r].name,
              a.morphTargets[r].vertices = [],
              h = a.morphTargets[r].vertices,
              c = e.morphTargets[r].vertices,
              o = 0,
              s = c.length;
              s > o;
              o += 3
            ) {
              var l = new i.Vector3;
              l.x = c[o] * t,
              l.y = c[o + 1] * t,
              l.z = c[o + 2] * t,
              h.push(l)
            }
          }
          if (void 0 !== e.morphColors) {
            var r,
            n,
            u,
            d,
            f,
            p,
            m;
            for (r = 0, n = e.morphColors.length; n > r; r++) for (
              a.morphColors[r] = {},
              a.morphColors[r].name = e.morphColors[r].name,
              a.morphColors[r].colors = [],
              f = a.morphColors[r].colors,
              p = e.morphColors[r].colors,
              u = 0,
              d = p.length;
              d > u;
              u += 3
            ) m = new i.Color(16755200),
            m.setRGB(p[u], p[u + 1], p[u + 2]),
            f.push(m)
          }
        }
        var a = new i.Geometry,
        s = void 0 !== e.scale ? 1 / e.scale : 1;
        if (
          r(s),
          n(),
          o(s),
          a.computeFaceNormals(),
          a.computeBoundingSphere(),
          void 0 === e.materials ||
          0 === e.materials.length
        ) return {
          geometry: a
        };
        var h = this.initMaterials(e.materials, t);
        return this.needsTangents(h) &&
        a.computeTangents(),
        {
          geometry: a,
          materials: h
        }
      },
      i.LoadingManager = function (e, t, r) {
        var i = this,
        n = 0,
        o = 0;
        this.onLoad = e,
        this.onProgress = t,
        this.onError = r,
        this.itemStart = function (e) {
          o++
        },
        this.itemEnd = function (e) {
          n++,
          void 0 !== i.onProgress &&
          i.onProgress(e, n, o),
          n === o &&
          void 0 !== i.onLoad &&
          i.onLoad()
        }
      },
      i.DefaultLoadingManager = new i.LoadingManager,
      i.BufferGeometryLoader = function (e) {
        this.manager = void 0 !== e ? e : i.DefaultLoadingManager
      },
      i.BufferGeometryLoader.prototype = {
        constructor: i.BufferGeometryLoader,
        load: function (e, t, r, n) {
          var o = this,
          a = new i.XHRLoader(o.manager);
          a.setCrossOrigin(this.crossOrigin),
          a.load(e, function (e) {
            t(o.parse(JSON.parse(e)))
          }, r, n)
        },
        setCrossOrigin: function (e) {
          this.crossOrigin = e
        },
        parse: function (e) {
          var t = new i.BufferGeometry,
          r = e.data.attributes;
          for (var n in r) {
            var o = r[n],
            a = new self[o.type](o.array);
            t.addAttribute(n, new i.BufferAttribute(a, o.itemSize))
          }
          var s = e.data.offsets;
          void 0 !== s &&
          (t.offsets = JSON.parse(JSON.stringify(s)));
          var h = e.data.boundingSphere;
          if (void 0 !== h) {
            var c = new i.Vector3;
            void 0 !== h.center &&
            c.fromArray(h.center),
            t.boundingSphere = new i.Sphere(c, h.radius)
          }
          return t
        }
      },
      i.MaterialLoader = function (e) {
        this.manager = void 0 !== e ? e : i.DefaultLoadingManager
      },
      i.MaterialLoader.prototype = {
        constructor: i.MaterialLoader,
        load: function (e, t, r, n) {
          var o = this,
          a = new i.XHRLoader(o.manager);
          a.setCrossOrigin(this.crossOrigin),
          a.load(e, function (e) {
            t(o.parse(JSON.parse(e)))
          }, r, n)
        },
        setCrossOrigin: function (e) {
          this.crossOrigin = e
        },
        parse: function (e) {
          var t = new i[e.type];
          if (
            void 0 !== e.color &&
            t.color.setHex(e.color),
            void 0 !== e.emissive &&
            t.emissive.setHex(e.emissive),
            void 0 !== e.specular &&
            t.specular.setHex(e.specular),
            void 0 !== e.shininess &&
            (t.shininess = e.shininess),
            void 0 !== e.uniforms &&
            (t.uniforms = e.uniforms),
            void 0 !== e.vertexShader &&
            (t.vertexShader = e.vertexShader),
            void 0 !== e.fragmentShader &&
            (t.fragmentShader = e.fragmentShader),
            void 0 !== e.vertexColors &&
            (t.vertexColors = e.vertexColors),
            void 0 !== e.shading &&
            (t.shading = e.shading),
            void 0 !== e.blending &&
            (t.blending = e.blending),
            void 0 !== e.side &&
            (t.side = e.side),
            void 0 !== e.opacity &&
            (t.opacity = e.opacity),
            void 0 !== e.transparent &&
            (t.transparent = e.transparent),
            void 0 !== e.wireframe &&
            (t.wireframe = e.wireframe),
            void 0 !== e.size &&
            (t.size = e.size),
            void 0 !== e.sizeAttenuation &&
            (t.sizeAttenuation = e.sizeAttenuation),
            void 0 !== e.materials
          ) for (var r = 0, n = e.materials.length; n > r; r++) t.materials.push(this.parse(e.materials[r]));
          return t
        }
      },
      i.ObjectLoader = function (e) {
        this.manager = void 0 !== e ? e : i.DefaultLoadingManager,
        this.texturePath = ''
      },
      i.ObjectLoader.prototype = {
        constructor: i.ObjectLoader,
        load: function (e, t, r, n) {
          '' === this.texturePath &&
          (this.texturePath = e.substring(0, e.lastIndexOf('/') + 1));
          var o = this,
          a = new i.XHRLoader(o.manager);
          a.setCrossOrigin(this.crossOrigin),
          a.load(e, function (e) {
            o.parse(JSON.parse(e), t)
          }, r, n)
        },
        setTexturePath: function (e) {
          this.texturePath = e
        },
        setCrossOrigin: function (e) {
          this.crossOrigin = e
        },
        parse: function (e, t) {
          var r = this.parseGeometries(e.geometries),
          i = this.parseImages(e.images, function () {
            void 0 !== t &&
            t(a)
          }),
          n = this.parseTextures(e.textures, i),
          o = this.parseMaterials(e.materials, n),
          a = this.parseObject(e.object, r, o);
          return void 0 !== e.images &&
          0 !== e.images.length ||
          void 0 !== t &&
          t(a),
          a
        },
        parseGeometries: function (e) {
          var t = {};
          if (void 0 !== e) for (
            var r = new i.JSONLoader,
            n = new i.BufferGeometryLoader,
            o = 0,
            a = e.length;
            a > o;
            o++
          ) {
            var s,
            h = e[o];
            switch (h.type) {
              case 'PlaneGeometry':
              case 'PlaneBufferGeometry':
                s = new i[h.type](h.width, h.height, h.widthSegments, h.heightSegments);
                break;
              case 'BoxGeometry':
              case 'CubeGeometry':
                s = new i.BoxGeometry(
                  h.width,
                  h.height,
                  h.depth,
                  h.widthSegments,
                  h.heightSegments,
                  h.depthSegments
                );
                break;
              case 'CircleGeometry':
                s = new i.CircleGeometry(h.radius, h.segments);
                break;
              case 'CylinderGeometry':
                s = new i.CylinderGeometry(
                  h.radiusTop,
                  h.radiusBottom,
                  h.height,
                  h.radialSegments,
                  h.heightSegments,
                  h.openEnded
                );
                break;
              case 'SphereGeometry':
                s = new i.SphereGeometry(
                  h.radius,
                  h.widthSegments,
                  h.heightSegments,
                  h.phiStart,
                  h.phiLength,
                  h.thetaStart,
                  h.thetaLength
                );
                break;
              case 'IcosahedronGeometry':
                s = new i.IcosahedronGeometry(h.radius, h.detail);
                break;
              case 'TorusGeometry':
                s = new i.TorusGeometry(h.radius, h.tube, h.radialSegments, h.tubularSegments, h.arc);
                break;
              case 'TorusKnotGeometry':
                s = new i.TorusKnotGeometry(
                  h.radius,
                  h.tube,
                  h.radialSegments,
                  h.tubularSegments,
                  h.p,
                  h.q,
                  h.heightScale
                );
                break;
              case 'BufferGeometry':
                s = n.parse(h);
                break;
              case 'Geometry':
                s = r.parse(h.data).geometry
            }
            s.uuid = h.uuid,
            void 0 !== h.name &&
            (s.name = h.name),
            t[h.uuid] = s
          }
          return t
        },
        parseMaterials: function (e, t) {
          var r = {};
          if (void 0 !== e) for (
            var n = function (e) {
              return void 0 === t[e] &&
              i.warn('THREE.ObjectLoader: Undefined texture', e),
              t[e]
            },
            o = new i.MaterialLoader,
            a = 0,
            s = e.length;
            s > a;
            a++
          ) {
            var h = e[a],
            c = o.parse(h);
            c.uuid = h.uuid,
            void 0 !== h.name &&
            (c.name = h.name),
            void 0 !== h.map &&
            (c.map = n(h.map)),
            void 0 !== h.bumpMap &&
            (
              c.bumpMap = n(h.bumpMap),
              h.bumpScale &&
              (c.bumpScale = new i.Vector2(h.bumpScale, h.bumpScale))
            ),
            void 0 !== h.alphaMap &&
            (c.alphaMap = n(h.alphaMap)),
            void 0 !== h.envMap &&
            (c.envMap = n(h.envMap)),
            void 0 !== h.normalMap &&
            (
              c.normalMap = n(h.normalMap),
              h.normalScale &&
              (c.normalScale = new i.Vector2(h.normalScale, h.normalScale))
            ),
            void 0 !== h.lightMap &&
            (c.lightMap = n(h.lightMap)),
            void 0 !== h.specularMap &&
            (c.specularMap = n(h.specularMap)),
            r[h.uuid] = c
          }
          return r
        },
        parseImages: function (e, t) {
          var r = this,
          n = {};
          if (void 0 !== e && e.length > 0) {
            var o = new i.LoadingManager(t),
            a = new i.ImageLoader(o);
            a.setCrossOrigin(this.crossOrigin);
            for (
              var s = function (e) {
                return r.manager.itemStart(e),
                a.load(e, function () {
                  r.manager.itemEnd(e)
                })
              },
              h = 0,
              c = e.length;
              c > h;
              h++
            ) {
              var l = e[h],
              u = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url) ? l.url : r.texturePath + l.url;
              n[l.uuid] = s(u)
            }
          }
          return n
        },
        parseTextures: function (e, t) {
          var r = {};
          if (void 0 !== e) for (var n = 0, o = e.length; o > n; n++) {
            var a = e[n];
            void 0 === a.image &&
            i.warn('THREE.ObjectLoader: No "image" speficied for', a.uuid),
            void 0 === t[a.image] &&
            i.warn('THREE.ObjectLoader: Undefined image', a.image);
            var s = new i.Texture(t[a.image]);
            s.needsUpdate = !0,
            s.uuid = a.uuid,
            void 0 !== a.name &&
            (s.name = a.name),
            void 0 !== a.repeat &&
            (s.repeat = new i.Vector2(a.repeat[0], a.repeat[1])),
            void 0 !== a.minFilter &&
            (s.minFilter = i[a.minFilter]),
            void 0 !== a.magFilter &&
            (s.magFilter = i[a.magFilter]),
            void 0 !== a.anisotropy &&
            (s.anisotropy = a.anisotropy),
            a.wrap instanceof Array &&
            (s.wrapS = i[a.wrap[0]], s.wrapT = i[a.wrap[1]]),
            r[a.uuid] = s
          }
          return r
        },
        parseObject: function () {
          var e = new i.Matrix4;
          return function (t, r, n) {
            var o,
            a = function (e) {
              return void 0 === r[e] &&
              i.warn('THREE.ObjectLoader: Undefined geometry', e),
              r[e]
            },
            s = function (e) {
              return void 0 === n[e] &&
              i.warn('THREE.ObjectLoader: Undefined material', e),
              n[e]
            };
            switch (t.type) {
              case 'Scene':
                o = new i.Scene;
                break;
              case 'PerspectiveCamera':
                o = new i.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                break;
              case 'OrthographicCamera':
                o = new i.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                break;
              case 'AmbientLight':
                o = new i.AmbientLight(t.color);
                break;
              case 'DirectionalLight':
                o = new i.DirectionalLight(t.color, t.intensity);
                break;
              case 'PointLight':
                o = new i.PointLight(t.color, t.intensity, t.distance, t.decay);
                break;
              case 'SpotLight':
                o = new i.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent, t.decay);
                break;
              case 'HemisphereLight':
                o = new i.HemisphereLight(t.color, t.groundColor, t.intensity);
                break;
              case 'Mesh':
                o = new i.Mesh(a(t.geometry), s(t.material));
                break;
              case 'Line':
                o = new i.Line(a(t.geometry), s(t.material), t.mode);
                break;
              case 'PointCloud':
                o = new i.PointCloud(a(t.geometry), s(t.material));
                break;
              case 'Sprite':
                o = new i.Sprite(s(t.material));
                break;
              case 'Group':
                o = new i.Group;
                break;
              default:
                o = new i.Object3D
            }
            if (
              o.uuid = t.uuid,
              void 0 !== t.name &&
              (o.name = t.name),
              void 0 !== t.matrix ? (
                e.fromArray(t.matrix),
                e.decompose(o.position, o.quaternion, o.scale)
              ) : (
                void 0 !== t.position &&
                o.position.fromArray(t.position),
                void 0 !== t.rotation &&
                o.rotation.fromArray(t.rotation),
                void 0 !== t.scale &&
                o.scale.fromArray(t.scale)
              ),
              void 0 !== t.visible &&
              (o.visible = t.visible),
              void 0 !== t.userData &&
              (o.userData = t.userData),
              void 0 !== t.children
            ) for (var h in t.children) o.add(this.parseObject(t.children[h], r, n));
            return o
          }
        }()
      },
      i.TextureLoader = function (e) {
        this.manager = void 0 !== e ? e : i.DefaultLoadingManager
      },
      i.TextureLoader.prototype = {
        constructor: i.TextureLoader,
        load: function (e, t, r, n) {
          var o = this,
          a = new i.ImageLoader(o.manager);
          a.setCrossOrigin(this.crossOrigin),
          a.load(
            e,
            function (e) {
              var r = new i.Texture(e);
              r.needsUpdate = !0,
              void 0 !== t &&
              t(r)
            },
            r,
            n
          )
        },
        setCrossOrigin: function (e) {
          this.crossOrigin = e
        }
      },
      i.DataTextureLoader = i.BinaryTextureLoader = function () {
        this._parser = null
      },
      i.BinaryTextureLoader.prototype = {
        constructor: i.BinaryTextureLoader,
        load: function (e, t, r, n) {
          var o = this,
          a = new i.DataTexture,
          s = new i.XHRLoader;
          return s.setResponseType('arraybuffer'),
          s.load(
            e,
            function (e) {
              var r = o._parser(e);
              r &&
              (
                void 0 !== r.image ? a.image = r.image : void 0 !== r.data &&
                (
                  a.image.width = r.width,
                  a.image.height = r.height,
                  a.image.data = r.data
                ),
                a.wrapS = void 0 !== r.wrapS ? r.wrapS : i.ClampToEdgeWrapping,
                a.wrapT = void 0 !== r.wrapT ? r.wrapT : i.ClampToEdgeWrapping,
                a.magFilter = void 0 !== r.magFilter ? r.magFilter : i.LinearFilter,
                a.minFilter = void 0 !== r.minFilter ? r.minFilter : i.LinearMipMapLinearFilter,
                a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1,
                void 0 !== r.format &&
                (a.format = r.format),
                void 0 !== r.type &&
                (a.type = r.type),
                void 0 !== r.mipmaps &&
                (a.mipmaps = r.mipmaps),
                1 === r.mipmapCount &&
                (a.minFilter = i.LinearFilter),
                a.needsUpdate = !0,
                t &&
                t(a, r)
              )
            },
            r,
            n
          ),
          a
        }
      },
      i.CompressedTextureLoader = function () {
        this._parser = null
      },
      i.CompressedTextureLoader.prototype = {
        constructor: i.CompressedTextureLoader,
        load: function (e, t, r) {
          var n = this,
          o = [],
          a = new i.CompressedTexture;
          a.image = o;
          var s = new i.XHRLoader;
          if (s.setResponseType('arraybuffer'), e instanceof Array) for (
            var h = 0,
            c = function (r) {
              s.load(
                e[r],
                function (e) {
                  var s = n._parser(e, !0);
                  o[r] = {
                    width: s.width,
                    height: s.height,
                    format: s.format,
                    mipmaps: s.mipmaps
                  },
                  h += 1,
                  6 === h &&
                  (
                    1 == s.mipmapCount &&
                    (a.minFilter = i.LinearFilter),
                    a.format = s.format,
                    a.needsUpdate = !0,
                    t &&
                    t(a)
                  )
                }
              )
            },
            l = 0,
            u = e.length;
            u > l;
            ++l
          ) c(l);
           else s.load(
            e,
            function (e) {
              var r = n._parser(e, !0);
              if (r.isCubemap) for (var s = r.mipmaps.length / r.mipmapCount, h = 0; s > h; h++) {
                o[h] = {
                  mipmaps: []
                };
                for (var c = 0; c < r.mipmapCount; c++) o[h].mipmaps.push(r.mipmaps[h * r.mipmapCount + c]),
                o[h].format = r.format,
                o[h].width = r.width,
                o[h].height = r.height
              } else a.image.width = r.width,
              a.image.height = r.height,
              a.mipmaps = r.mipmaps;
              1 === r.mipmapCount &&
              (a.minFilter = i.LinearFilter),
              a.format = r.format,
              a.needsUpdate = !0,
              t &&
              t(a)
            }
          );
          return a
        }
      },
      i.Material = function () {
        Object.defineProperty(this, 'id', {
          value: i.MaterialIdCount++
        }),
        this.uuid = i.Math.generateUUID(),
        this.name = '',
        this.type = 'Material',
        this.side = i.FrontSide,
        this.opacity = 1,
        this.transparent = !1,
        this.blending = i.NormalBlending,
        this.blendSrc = i.SrcAlphaFactor,
        this.blendDst = i.OneMinusSrcAlphaFactor,
        this.blendEquation = i.AddEquation,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.colorWrite = !0,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.alphaTest = 0,
        this.overdraw = 0,
        this.visible = !0,
        this._needsUpdate = !0
      },
      i.Material.prototype = {
        constructor: i.Material,
        get needsUpdate() {
          return this._needsUpdate
        },
        set needsUpdate(e) {
          e === !0 &&
          this.update(),
          this._needsUpdate = e
        },
        setValues: function (e) {
          if (void 0 !== e) for (var t in e) {
            var r = e[t];
            if (void 0 !== r) {
              if (t in this) {
                var n = this[t];
                n instanceof i.Color ? n.set(r) : n instanceof i.Vector3 &&
                r instanceof i.Vector3 ? n.copy(r) : 'overdraw' == t ? this[t] = Number(r) : this[t] = r
              }
            } else i.warn('THREE.Material: \'' + t + '\' parameter is undefined.')
          }
        },
        toJSON: function () {
          var e = {
            metadata: {
              version: 4.2,
              type: 'material',
              generator: 'MaterialExporter'
            },
            uuid: this.uuid,
            type: this.type
          };
          return '' !== this.name &&
          (e.name = this.name),
          this instanceof i.MeshBasicMaterial ? (
            e.color = this.color.getHex(),
            this.vertexColors !== i.NoColors &&
            (e.vertexColors = this.vertexColors),
            this.blending !== i.NormalBlending &&
            (e.blending = this.blending),
            this.side !== i.FrontSide &&
            (e.side = this.side)
          ) : this instanceof i.MeshLambertMaterial ? (
            e.color = this.color.getHex(),
            e.emissive = this.emissive.getHex(),
            this.vertexColors !== i.NoColors &&
            (e.vertexColors = this.vertexColors),
            this.shading !== i.SmoothShading &&
            (e.shading = this.shading),
            this.blending !== i.NormalBlending &&
            (e.blending = this.blending),
            this.side !== i.FrontSide &&
            (e.side = this.side)
          ) : this instanceof i.MeshPhongMaterial ? (
            e.color = this.color.getHex(),
            e.emissive = this.emissive.getHex(),
            e.specular = this.specular.getHex(),
            e.shininess = this.shininess,
            this.vertexColors !== i.NoColors &&
            (e.vertexColors = this.vertexColors),
            this.shading !== i.SmoothShading &&
            (e.shading = this.shading),
            this.blending !== i.NormalBlending &&
            (e.blending = this.blending),
            this.side !== i.FrontSide &&
            (e.side = this.side)
          ) : this instanceof i.MeshNormalMaterial ? (
            this.blending !== i.NormalBlending &&
            (e.blending = this.blending),
            this.side !== i.FrontSide &&
            (e.side = this.side)
          ) : this instanceof i.MeshDepthMaterial ? (
            this.blending !== i.NormalBlending &&
            (e.blending = this.blending),
            this.side !== i.FrontSide &&
            (e.side = this.side)
          ) : this instanceof i.PointCloudMaterial ? (
            e.size = this.size,
            e.sizeAttenuation = this.sizeAttenuation,
            e.color = this.color.getHex(),
            this.vertexColors !== i.NoColors &&
            (e.vertexColors = this.vertexColors),
            this.blending !== i.NormalBlending &&
            (e.blending = this.blending)
          ) : this instanceof i.ShaderMaterial ? (
            e.uniforms = this.uniforms,
            e.vertexShader = this.vertexShader,
            e.fragmentShader = this.fragmentShader
          ) : this instanceof i.SpriteMaterial &&
          (e.color = this.color.getHex()),
          this.opacity < 1 &&
          (e.opacity = this.opacity),
          this.transparent !== !1 &&
          (e.transparent = this.transparent),
          this.wireframe !== !1 &&
          (e.wireframe = this.wireframe),
          e
        },
        clone: function (e) {
          return void 0 === e &&
          (e = new i.Material),
          e.name = this.name,
          e.side = this.side,
          e.opacity = this.opacity,
          e.transparent = this.transparent,
          e.blending = this.blending,
          e.blendSrc = this.blendSrc,
          e.blendDst = this.blendDst,
          e.blendEquation = this.blendEquation,
          e.blendSrcAlpha = this.blendSrcAlpha,
          e.blendDstAlpha = this.blendDstAlpha,
          e.blendEquationAlpha = this.blendEquationAlpha,
          e.depthTest = this.depthTest,
          e.depthWrite = this.depthWrite,
          e.polygonOffset = this.polygonOffset,
          e.polygonOffsetFactor = this.polygonOffsetFactor,
          e.polygonOffsetUnits = this.polygonOffsetUnits,
          e.alphaTest = this.alphaTest,
          e.overdraw = this.overdraw,
          e.visible = this.visible,
          e
        },
        update: function () {
          this.dispatchEvent({
            type: 'update'
          })
        },
        dispose: function () {
          this.dispatchEvent({
            type: 'dispose'
          })
        }
      },
      i.EventDispatcher.prototype.apply(i.Material.prototype),
      i.MaterialIdCount = 0,
      i.LineBasicMaterial = function (e) {
        i.Material.call(this),
        this.type = 'LineBasicMaterial',
        this.color = new i.Color(16777215),
        this.linewidth = 1,
        this.linecap = 'round',
        this.linejoin = 'round',
        this.vertexColors = i.NoColors,
        this.fog = !0,
        this.setValues(e)
      },
      i.LineBasicMaterial.prototype = Object.create(i.Material.prototype),
      i.LineBasicMaterial.prototype.constructor = i.LineBasicMaterial,
      i.LineBasicMaterial.prototype.clone = function () {
        var e = new i.LineBasicMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.color.copy(this.color),
        e.linewidth = this.linewidth,
        e.linecap = this.linecap,
        e.linejoin = this.linejoin,
        e.vertexColors = this.vertexColors,
        e.fog = this.fog,
        e
      },
      i.LineDashedMaterial = function (e) {
        i.Material.call(this),
        this.type = 'LineDashedMaterial',
        this.color = new i.Color(16777215),
        this.linewidth = 1,
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.vertexColors = !1,
        this.fog = !0,
        this.setValues(e)
      },
      i.LineDashedMaterial.prototype = Object.create(i.Material.prototype),
      i.LineDashedMaterial.prototype.constructor = i.LineDashedMaterial,
      i.LineDashedMaterial.prototype.clone = function () {
        var e = new i.LineDashedMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.color.copy(this.color),
        e.linewidth = this.linewidth,
        e.scale = this.scale,
        e.dashSize = this.dashSize,
        e.gapSize = this.gapSize,
        e.vertexColors = this.vertexColors,
        e.fog = this.fog,
        e
      },
      i.MeshBasicMaterial = function (e) {
        i.Material.call(this),
        this.type = 'MeshBasicMaterial',
        this.color = new i.Color(16777215),
        this.map = null,
        this.lightMap = null,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = i.MultiplyOperation,
        this.reflectivity = 1,
        this.refractionRatio = 0.98,
        this.fog = !0,
        this.shading = i.SmoothShading,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = 'round',
        this.wireframeLinejoin = 'round',
        this.vertexColors = i.NoColors,
        this.skinning = !1,
        this.morphTargets = !1,
        this.setValues(e)
      },
      i.MeshBasicMaterial.prototype = Object.create(i.Material.prototype),
      i.MeshBasicMaterial.prototype.constructor = i.MeshBasicMaterial,
      i.MeshBasicMaterial.prototype.clone = function () {
        var e = new i.MeshBasicMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.color.copy(this.color),
        e.map = this.map,
        e.lightMap = this.lightMap,
        e.specularMap = this.specularMap,
        e.alphaMap = this.alphaMap,
        e.envMap = this.envMap,
        e.combine = this.combine,
        e.reflectivity = this.reflectivity,
        e.refractionRatio = this.refractionRatio,
        e.fog = this.fog,
        e.shading = this.shading,
        e.wireframe = this.wireframe,
        e.wireframeLinewidth = this.wireframeLinewidth,
        e.wireframeLinecap = this.wireframeLinecap,
        e.wireframeLinejoin = this.wireframeLinejoin,
        e.vertexColors = this.vertexColors,
        e.skinning = this.skinning,
        e.morphTargets = this.morphTargets,
        e
      },
      i.MeshLambertMaterial = function (e) {
        i.Material.call(this),
        this.type = 'MeshLambertMaterial',
        this.color = new i.Color(16777215),
        this.emissive = new i.Color(0),
        this.wrapAround = !1,
        this.wrapRGB = new i.Vector3(1, 1, 1),
        this.map = null,
        this.lightMap = null,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = i.MultiplyOperation,
        this.reflectivity = 1,
        this.refractionRatio = 0.98,
        this.fog = !0,
        this.shading = i.SmoothShading,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = 'round',
        this.wireframeLinejoin = 'round',
        this.vertexColors = i.NoColors,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(e)
      },
      i.MeshLambertMaterial.prototype = Object.create(i.Material.prototype),
      i.MeshLambertMaterial.prototype.constructor = i.MeshLambertMaterial,
      i.MeshLambertMaterial.prototype.clone = function () {
        var e = new i.MeshLambertMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.color.copy(this.color),
        e.emissive.copy(this.emissive),
        e.wrapAround = this.wrapAround,
        e.wrapRGB.copy(this.wrapRGB),
        e.map = this.map,
        e.lightMap = this.lightMap,
        e.specularMap = this.specularMap,
        e.alphaMap = this.alphaMap,
        e.envMap = this.envMap,
        e.combine = this.combine,
        e.reflectivity = this.reflectivity,
        e.refractionRatio = this.refractionRatio,
        e.fog = this.fog,
        e.shading = this.shading,
        e.wireframe = this.wireframe,
        e.wireframeLinewidth = this.wireframeLinewidth,
        e.wireframeLinecap = this.wireframeLinecap,
        e.wireframeLinejoin = this.wireframeLinejoin,
        e.vertexColors = this.vertexColors,
        e.skinning = this.skinning,
        e.morphTargets = this.morphTargets,
        e.morphNormals = this.morphNormals,
        e
      },
      i.MeshPhongMaterial = function (e) {
        i.Material.call(this),
        this.type = 'MeshPhongMaterial',
        this.color = new i.Color(16777215),
        this.emissive = new i.Color(0),
        this.specular = new i.Color(1118481),
        this.shininess = 30,
        this.metal = !1,
        this.wrapAround = !1,
        this.wrapRGB = new i.Vector3(1, 1, 1),
        this.map = null,
        this.lightMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalScale = new i.Vector2(1, 1),
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = i.MultiplyOperation,
        this.reflectivity = 1,
        this.refractionRatio = 0.98,
        this.fog = !0,
        this.shading = i.SmoothShading,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = 'round',
        this.wireframeLinejoin = 'round',
        this.vertexColors = i.NoColors,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(e)
      },
      i.MeshPhongMaterial.prototype = Object.create(i.Material.prototype),
      i.MeshPhongMaterial.prototype.constructor = i.MeshPhongMaterial,
      i.MeshPhongMaterial.prototype.clone = function () {
        var e = new i.MeshPhongMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.color.copy(this.color),
        e.emissive.copy(this.emissive),
        e.specular.copy(this.specular),
        e.shininess = this.shininess,
        e.metal = this.metal,
        e.wrapAround = this.wrapAround,
        e.wrapRGB.copy(this.wrapRGB),
        e.map = this.map,
        e.lightMap = this.lightMap,
        e.bumpMap = this.bumpMap,
        e.bumpScale = this.bumpScale,
        e.normalMap = this.normalMap,
        e.normalScale.copy(this.normalScale),
        e.specularMap = this.specularMap,
        e.alphaMap = this.alphaMap,
        e.envMap = this.envMap,
        e.combine = this.combine,
        e.reflectivity = this.reflectivity,
        e.refractionRatio = this.refractionRatio,
        e.fog = this.fog,
        e.shading = this.shading,
        e.wireframe = this.wireframe,
        e.wireframeLinewidth = this.wireframeLinewidth,
        e.wireframeLinecap = this.wireframeLinecap,
        e.wireframeLinejoin = this.wireframeLinejoin,
        e.vertexColors = this.vertexColors,
        e.skinning = this.skinning,
        e.morphTargets = this.morphTargets,
        e.morphNormals = this.morphNormals,
        e
      },
      i.MeshDepthMaterial = function (e) {
        i.Material.call(this),
        this.type = 'MeshDepthMaterial',
        this.morphTargets = !1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(e)
      },
      i.MeshDepthMaterial.prototype = Object.create(i.Material.prototype),
      i.MeshDepthMaterial.prototype.constructor = i.MeshDepthMaterial,
      i.MeshDepthMaterial.prototype.clone = function () {
        var e = new i.MeshDepthMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.wireframe = this.wireframe,
        e.wireframeLinewidth = this.wireframeLinewidth,
        e
      },
      i.MeshNormalMaterial = function (e) {
        i.Material.call(this, e),
        this.type = 'MeshNormalMaterial',
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.morphTargets = !1,
        this.setValues(e)
      },
      i.MeshNormalMaterial.prototype = Object.create(i.Material.prototype),
      i.MeshNormalMaterial.prototype.constructor = i.MeshNormalMaterial,
      i.MeshNormalMaterial.prototype.clone = function () {
        var e = new i.MeshNormalMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.wireframe = this.wireframe,
        e.wireframeLinewidth = this.wireframeLinewidth,
        e
      },
      i.MeshFaceMaterial = function (e) {
        this.uuid = i.Math.generateUUID(),
        this.type = 'MeshFaceMaterial',
        this.materials = e instanceof Array ? e : []
      },
      i.MeshFaceMaterial.prototype = {
        constructor: i.MeshFaceMaterial,
        toJSON: function () {
          for (
            var e = {
              metadata: {
                version: 4.2,
                type: 'material',
                generator: 'MaterialExporter'
              },
              uuid: this.uuid,
              type: this.type,
              materials: []
            },
            t = 0,
            r = this.materials.length;
            r > t;
            t++
          ) e.materials.push(this.materials[t].toJSON());
          return e
        },
        clone: function () {
          for (var e = new i.MeshFaceMaterial, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
          return e
        }
      },
      i.PointCloudMaterial = function (e) {
        i.Material.call(this),
        this.type = 'PointCloudMaterial',
        this.color = new i.Color(16777215),
        this.map = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.vertexColors = i.NoColors,
        this.fog = !0,
        this.setValues(e)
      },
      i.PointCloudMaterial.prototype = Object.create(i.Material.prototype),
      i.PointCloudMaterial.prototype.constructor = i.PointCloudMaterial,
      i.PointCloudMaterial.prototype.clone = function () {
        var e = new i.PointCloudMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.color.copy(this.color),
        e.map = this.map,
        e.size = this.size,
        e.sizeAttenuation = this.sizeAttenuation,
        e.vertexColors = this.vertexColors,
        e.fog = this.fog,
        e
      },
      i.ParticleBasicMaterial = function (e) {
        return i.warn(
          'THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.'
        ),
        new i.PointCloudMaterial(e)
      },
      i.ParticleSystemMaterial = function (e) {
        return i.warn(
          'THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.'
        ),
        new i.PointCloudMaterial(e)
      },
      i.ShaderMaterial = function (e) {
        i.Material.call(this),
        this.type = 'ShaderMaterial',
        this.defines = {},
        this.uniforms = {},
        this.attributes = null,
        this.vertexShader = 'void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}',
        this.fragmentShader = 'void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}',
        this.shading = i.SmoothShading,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.vertexColors = i.NoColors,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.defaultAttributeValues = {
          color: [
            1,
            1,
            1
          ],
          uv: [
            0,
            0
          ],
          uv2: [
            0,
            0
          ]
        },
        this.index0AttributeName = void 0,
        this.setValues(e)
      },
      i.ShaderMaterial.prototype = Object.create(i.Material.prototype),
      i.ShaderMaterial.prototype.constructor = i.ShaderMaterial,
      i.ShaderMaterial.prototype.clone = function () {
        var e = new i.ShaderMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.fragmentShader = this.fragmentShader,
        e.vertexShader = this.vertexShader,
        e.uniforms = i.UniformsUtils.clone(this.uniforms),
        e.attributes = this.attributes,
        e.defines = this.defines,
        e.shading = this.shading,
        e.wireframe = this.wireframe,
        e.wireframeLinewidth = this.wireframeLinewidth,
        e.fog = this.fog,
        e.lights = this.lights,
        e.vertexColors = this.vertexColors,
        e.skinning = this.skinning,
        e.morphTargets = this.morphTargets,
        e.morphNormals = this.morphNormals,
        e
      },
      i.RawShaderMaterial = function (e) {
        i.ShaderMaterial.call(this, e),
        this.type = 'RawShaderMaterial'
      },
      i.RawShaderMaterial.prototype = Object.create(i.ShaderMaterial.prototype),
      i.RawShaderMaterial.prototype.constructor = i.RawShaderMaterial,
      i.RawShaderMaterial.prototype.clone = function () {
        var e = new i.RawShaderMaterial;
        return i.ShaderMaterial.prototype.clone.call(this, e),
        e
      },
      i.SpriteMaterial = function (e) {
        i.Material.call(this),
        this.type = 'SpriteMaterial',
        this.color = new i.Color(16777215),
        this.map = null,
        this.rotation = 0,
        this.fog = !1,
        this.setValues(e)
      },
      i.SpriteMaterial.prototype = Object.create(i.Material.prototype),
      i.SpriteMaterial.prototype.constructor = i.SpriteMaterial,
      i.SpriteMaterial.prototype.clone = function () {
        var e = new i.SpriteMaterial;
        return i.Material.prototype.clone.call(this, e),
        e.color.copy(this.color),
        e.map = this.map,
        e.rotation = this.rotation,
        e.fog = this.fog,
        e
      },
      i.Texture = function (e, t, r, n, o, a, s, h, c) {
        Object.defineProperty(this, 'id', {
          value: i.TextureIdCount++
        }),
        this.uuid = i.Math.generateUUID(),
        this.name = '',
        this.sourceFile = '',
        this.image = void 0 !== e ? e : i.Texture.DEFAULT_IMAGE,
        this.mipmaps = [],
        this.mapping = void 0 !== t ? t : i.Texture.DEFAULT_MAPPING,
        this.wrapS = void 0 !== r ? r : i.ClampToEdgeWrapping,
        this.wrapT = void 0 !== n ? n : i.ClampToEdgeWrapping,
        this.magFilter = void 0 !== o ? o : i.LinearFilter,
        this.minFilter = void 0 !== a ? a : i.LinearMipMapLinearFilter,
        this.anisotropy = void 0 !== c ? c : 1,
        this.format = void 0 !== s ? s : i.RGBAFormat,
        this.type = void 0 !== h ? h : i.UnsignedByteType,
        this.offset = new i.Vector2(0, 0),
        this.repeat = new i.Vector2(1, 1),
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this._needsUpdate = !1,
        this.onUpdate = null
      },
      i.Texture.DEFAULT_IMAGE = void 0,
      i.Texture.DEFAULT_MAPPING = i.UVMapping,
      i.Texture.prototype = {
        constructor: i.Texture,
        get needsUpdate() {
          return this._needsUpdate
        },
        set needsUpdate(e) {
          e === !0 &&
          this.update(),
          this._needsUpdate = e
        },
        clone: function (e) {
          return void 0 === e &&
          (e = new i.Texture),
          e.image = this.image,
          e.mipmaps = this.mipmaps.slice(0),
          e.mapping = this.mapping,
          e.wrapS = this.wrapS,
          e.wrapT = this.wrapT,
          e.magFilter = this.magFilter,
          e.minFilter = this.minFilter,
          e.anisotropy = this.anisotropy,
          e.format = this.format,
          e.type = this.type,
          e.offset.copy(this.offset),
          e.repeat.copy(this.repeat),
          e.generateMipmaps = this.generateMipmaps,
          e.premultiplyAlpha = this.premultiplyAlpha,
          e.flipY = this.flipY,
          e.unpackAlignment = this.unpackAlignment,
          e
        },
        update: function () {
          this.dispatchEvent({
            type: 'update'
          })
        },
        dispose: function () {
          this.dispatchEvent({
            type: 'dispose'
          })
        }
      },
      i.EventDispatcher.prototype.apply(i.Texture.prototype),
      i.TextureIdCount = 0,
      i.CubeTexture = function (e, t, r, n, o, a, s, h, c) {
        t = void 0 !== t ? t : i.CubeReflectionMapping,
        i.Texture.call(this, e, t, r, n, o, a, s, h, c),
        this.images = e
      },
      i.CubeTexture.prototype = Object.create(i.Texture.prototype),
      i.CubeTexture.prototype.constructor = i.CubeTexture,
      i.CubeTexture.clone = function (e) {
        return void 0 === e &&
        (e = new i.CubeTexture),
        i.Texture.prototype.clone.call(this, e),
        e.images = this.images,
        e
      },
      i.CompressedTexture = function (e, t, r, n, o, a, s, h, c, l, u) {
        i.Texture.call(this, null, a, s, h, c, l, n, o, u),
        this.image = {
          width: t,
          height: r
        },
        this.mipmaps = e,
        this.flipY = !1,
        this.generateMipmaps = !1
      },
      i.CompressedTexture.prototype = Object.create(i.Texture.prototype),
      i.CompressedTexture.prototype.constructor = i.CompressedTexture,
      i.CompressedTexture.prototype.clone = function () {
        var e = new i.CompressedTexture;
        return i.Texture.prototype.clone.call(this, e),
        e
      },
      i.DataTexture = function (e, t, r, n, o, a, s, h, c, l, u) {
        i.Texture.call(this, null, a, s, h, c, l, n, o, u),
        this.image = {
          data: e,
          width: t,
          height: r
        }
      },
      i.DataTexture.prototype = Object.create(i.Texture.prototype),
      i.DataTexture.prototype.constructor = i.DataTexture,
      i.DataTexture.prototype.clone = function () {
        var e = new i.DataTexture;
        return i.Texture.prototype.clone.call(this, e),
        e
      },
      i.VideoTexture = function (e, t, r, n, o, a, s, h, c) {
        i.Texture.call(this, e, t, r, n, o, a, s, h, c),
        this.generateMipmaps = !1;
        var l = this,
        u = function () {
          requestAnimationFrame(u),
          e.readyState === e.HAVE_ENOUGH_DATA &&
          (l.needsUpdate = !0)
        };
        u()
      },
      i.VideoTexture.prototype = Object.create(i.Texture.prototype),
      i.VideoTexture.prototype.constructor = i.VideoTexture,
      i.Group = function () {
        i.Object3D.call(this),
        this.type = 'Group'
      },
      i.Group.prototype = Object.create(i.Object3D.prototype),
      i.Group.prototype.constructor = i.Group,
      i.PointCloud = function (e, t) {
        i.Object3D.call(this),
        this.type = 'PointCloud',
        this.geometry = void 0 !== e ? e : new i.Geometry,
        this.material = void 0 !== t ? t : new i.PointCloudMaterial({
          color: 16777215 * Math.random()
        })
      },
      i.PointCloud.prototype = Object.create(i.Object3D.prototype),
      i.PointCloud.prototype.constructor = i.PointCloud,
      i.PointCloud.prototype.raycast = function () {
        var e = new i.Matrix4,
        t = new i.Ray;
        return function (r, n) {
          var o = this,
          a = o.geometry,
          s = r.params.PointCloud.threshold;
          if (
            e.getInverse(this.matrixWorld),
            t.copy(r.ray).applyMatrix4(e),
            null === a.boundingBox ||
            t.isIntersectionBox(a.boundingBox) !== !1
          ) {
            var h = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            c = new i.Vector3,
            l = function (e, i) {
              var a = t.distanceToPoint(e);
              if (h > a) {
                var s = t.closestPointToPoint(e);
                s.applyMatrix4(o.matrixWorld);
                var c = r.ray.origin.distanceTo(s);
                n.push({
                  distance: c,
                  distanceToRay: a,
                  point: s.clone(),
                  index: i,
                  face: null,
                  object: o
                })
              }
            };
            if (a instanceof i.BufferGeometry) {
              var u = a.attributes,
              d = u.position.array;
              if (void 0 !== u.index) {
                var f = u.index.array,
                p = a.offsets;
                if (0 === p.length) {
                  var m = {
                    start: 0,
                    count: f.length,
                    index: 0
                  };
                  p = [
                    m
                  ]
                }
                for (var v = 0, g = p.length; g > v; ++v) for (var y = p[v].start, x = p[v].count, _ = p[v].index, w = y, b = y + x; b > w; w++) {
                  var M = _ + f[w];
                  c.fromArray(d, 3 * M),
                  l(c, M)
                }
              } else for (var S = d.length / 3, w = 0; S > w; w++) c.set(d[3 * w], d[3 * w + 1], d[3 * w + 2]),
              l(c, w)
            } else for (var T = this.geometry.vertices, w = 0; w < T.length; w++) l(T[w], w)
          }
        }
      }(),
      i.PointCloud.prototype.clone = function (e) {
        return void 0 === e &&
        (e = new i.PointCloud(this.geometry, this.material)),
        i.Object3D.prototype.clone.call(this, e),
        e
      },
      i.ParticleSystem = function (e, t) {
        return i.warn('THREE.ParticleSystem has been renamed to THREE.PointCloud.'),
        new i.PointCloud(e, t)
      },
      i.Line = function (e, t, r) {
        i.Object3D.call(this),
        this.type = 'Line',
        this.geometry = void 0 !== e ? e : new i.Geometry,
        this.material = void 0 !== t ? t : new i.LineBasicMaterial({
          color: 16777215 * Math.random()
        }),
        this.mode = void 0 !== r ? r : i.LineStrip
      },
      i.LineStrip = 0,
      i.LinePieces = 1,
      i.Line.prototype = Object.create(i.Object3D.prototype),
      i.Line.prototype.constructor = i.Line,
      i.Line.prototype.raycast = function () {
        var e = new i.Matrix4,
        t = new i.Ray,
        r = new i.Sphere;
        return function (n, o) {
          var a = n.linePrecision,
          s = a * a,
          h = this.geometry;
          if (
            null === h.boundingSphere &&
            h.computeBoundingSphere(),
            r.copy(h.boundingSphere),
            r.applyMatrix4(this.matrixWorld),
            n.ray.isIntersectionSphere(r) !== !1
          ) {
            e.getInverse(this.matrixWorld),
            t.copy(n.ray).applyMatrix4(e);
            var c = new i.Vector3,
            l = new i.Vector3,
            u = new i.Vector3,
            d = new i.Vector3,
            f = this.mode === i.LineStrip ? 1 : 2;
            if (h instanceof i.BufferGeometry) {
              var p = h.attributes;
              if (void 0 !== p.index) {
                var m = p.index.array,
                v = p.position.array,
                g = h.offsets;
                0 === g.length &&
                (g = [
                  {
                    start: 0,
                    count: m.length,
                    index: 0
                  }
                ]);
                for (var y = 0; y < g.length; y++) for (var x = g[y].start, _ = g[y].count, w = g[y].index, b = x; x + _ - 1 > b; b += f) {
                  var M = w + m[b],
                  S = w + m[b + 1];
                  c.fromArray(v, 3 * M),
                  l.fromArray(v, 3 * S);
                  var T = t.distanceSqToSegment(c, l, d, u);
                  if (!(T > s)) {
                    var C = t.origin.distanceTo(d);
                    C < n.near ||
                    C > n.far ||
                    o.push({
                      distance: C,
                      point: u.clone().applyMatrix4(this.matrixWorld),
                      index: b,
                      offsetIndex: y,
                      face: null,
                      faceIndex: null,
                      object: this
                    })
                  }
                }
              } else for (var v = p.position.array, b = 0; b < v.length / 3 - 1; b += f) {
                c.fromArray(v, 3 * b),
                l.fromArray(v, 3 * b + 3);
                var T = t.distanceSqToSegment(c, l, d, u);
                if (!(T > s)) {
                  var C = t.origin.distanceTo(d);
                  C < n.near ||
                  C > n.far ||
                  o.push({
                    distance: C,
                    point: u.clone().applyMatrix4(this.matrixWorld),
                    index: b,
                    face: null,
                    faceIndex: null,
                    object: this
                  })
                }
              }
            } else if (h instanceof i.Geometry) for (var A = h.vertices, E = A.length, b = 0; E - 1 > b; b += f) {
              var T = t.distanceSqToSegment(A[b], A[b + 1], d, u);
              if (!(T > s)) {
                var C = t.origin.distanceTo(d);
                C < n.near ||
                C > n.far ||
                o.push({
                  distance: C,
                  point: u.clone().applyMatrix4(this.matrixWorld),
                  index: b,
                  face: null,
                  faceIndex: null,
                  object: this
                })
              }
            }
          }
        }
      }(),
      i.Line.prototype.clone = function (e) {
        return void 0 === e &&
        (e = new i.Line(this.geometry, this.material, this.mode)),
        i.Object3D.prototype.clone.call(this, e),
        e
      },
      i.Mesh = function (e, t) {
        i.Object3D.call(this),
        this.type = 'Mesh',
        this.geometry = void 0 !== e ? e : new i.Geometry,
        this.material = void 0 !== t ? t : new i.MeshBasicMaterial({
          color: 16777215 * Math.random()
        }),
        this.updateMorphTargets()
      },
      i.Mesh.prototype = Object.create(i.Object3D.prototype),
      i.Mesh.prototype.constructor = i.Mesh,
      i.Mesh.prototype.updateMorphTargets = function () {
        if (
          void 0 !== this.geometry.morphTargets &&
          this.geometry.morphTargets.length > 0
        ) {
          this.morphTargetBase = - 1,
          this.morphTargetForcedOrder = [],
          this.morphTargetInfluences = [],
          this.morphTargetDictionary = {};
          for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++) this.morphTargetInfluences.push(0),
          this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
        }
      },
      i.Mesh.prototype.getMorphTargetIndexByName = function (e) {
        return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (
          i.warn(
            'THREE.Mesh.getMorphTargetIndexByName: morph target ' + e + ' does not exist. Returning 0.'
          ),
          0
        )
      },
      i.Mesh.prototype.raycast = function () {
        var e = new i.Matrix4,
        t = new i.Ray,
        r = new i.Sphere,
        n = new i.Vector3,
        o = new i.Vector3,
        a = new i.Vector3;
        return function (s, h) {
          var c = this.geometry;
          if (
            null === c.boundingSphere &&
            c.computeBoundingSphere(),
            r.copy(c.boundingSphere),
            r.applyMatrix4(this.matrixWorld),
            s.ray.isIntersectionSphere(r) !== !1 &&
            (
              e.getInverse(this.matrixWorld),
              t.copy(s.ray).applyMatrix4(e),
              null === c.boundingBox ||
              t.isIntersectionBox(c.boundingBox) !== !1
            )
          ) if (c instanceof i.BufferGeometry) {
            var l = this.material;
            if (void 0 === l) return;
            var u,
            d,
            f,
            p = c.attributes,
            m = s.precision;
            if (void 0 !== p.index) {
              var v = p.index.array,
              g = p.position.array,
              y = c.offsets;
              0 === y.length &&
              (y = [
                {
                  start: 0,
                  count: v.length,
                  index: 0
                }
              ]);
              for (var x = 0, _ = y.length; _ > x; ++x) for (var w = y[x].start, b = y[x].count, M = y[x].index, S = w, T = w + b; T > S; S += 3) {
                if (
                  u = M + v[S],
                  d = M + v[S + 1],
                  f = M + v[S + 2],
                  n.fromArray(g, 3 * u),
                  o.fromArray(g, 3 * d),
                  a.fromArray(g, 3 * f),
                  l.side === i.BackSide
                ) var C = t.intersectTriangle(a, o, n, !0);
                 else var C = t.intersectTriangle(n, o, a, l.side !== i.DoubleSide);
                if (null !== C) {
                  C.applyMatrix4(this.matrixWorld);
                  var A = s.ray.origin.distanceTo(C);
                  m > A ||
                  A < s.near ||
                  A > s.far ||
                  h.push({
                    distance: A,
                    point: C,
                    face: new i.Face3(u, d, f, i.Triangle.normal(n, o, a)),
                    faceIndex: null,
                    object: this
                  })
                }
              }
            } else for (var g = p.position.array, S = 0, E = 0, T = g.length; T > S; S += 3, E += 9) {
              if (
                u = S,
                d = S + 1,
                f = S + 2,
                n.fromArray(g, E),
                o.fromArray(g, E + 3),
                a.fromArray(g, E + 6),
                l.side === i.BackSide
              ) var C = t.intersectTriangle(a, o, n, !0);
               else var C = t.intersectTriangle(n, o, a, l.side !== i.DoubleSide);
              if (null !== C) {
                C.applyMatrix4(this.matrixWorld);
                var A = s.ray.origin.distanceTo(C);
                m > A ||
                A < s.near ||
                A > s.far ||
                h.push({
                  distance: A,
                  point: C,
                  face: new i.Face3(u, d, f, i.Triangle.normal(n, o, a)),
                  faceIndex: null,
                  object: this
                })
              }
            }
          } else if (c instanceof i.Geometry) for (
            var u,
            d,
            f,
            P = this.material instanceof i.MeshFaceMaterial,
            D = P === !0 ? this.material.materials : null,
            m = s.precision,
            L = c.vertices,
            R = 0,
            B = c.faces.length;
            B > R;
            R++
          ) {
            var F = c.faces[R],
            l = P === !0 ? D[F.materialIndex] : this.material;
            if (void 0 !== l) {
              if (u = L[F.a], d = L[F.b], f = L[F.c], l.morphTargets === !0) {
                var U = c.morphTargets,
                O = this.morphTargetInfluences;
                n.set(0, 0, 0),
                o.set(0, 0, 0),
                a.set(0, 0, 0);
                for (var V = 0, k = U.length; k > V; V++) {
                  var z = O[V];
                  if (0 !== z) {
                    var N = U[V].vertices;
                    n.x += (N[F.a].x - u.x) * z,
                    n.y += (N[F.a].y - u.y) * z,
                    n.z += (N[F.a].z - u.z) * z,
                    o.x += (N[F.b].x - d.x) * z,
                    o.y += (N[F.b].y - d.y) * z,
                    o.z += (N[F.b].z - d.z) * z,
                    a.x += (N[F.c].x - f.x) * z,
                    a.y += (N[F.c].y - f.y) * z,
                    a.z += (N[F.c].z - f.z) * z
                  }
                }
                n.add(u),
                o.add(d),
                a.add(f),
                u = n,
                d = o,
                f = a
              }
              if (l.side === i.BackSide) var C = t.intersectTriangle(f, d, u, !0);
               else var C = t.intersectTriangle(u, d, f, l.side !== i.DoubleSide);
              if (null !== C) {
                C.applyMatrix4(this.matrixWorld);
                var A = s.ray.origin.distanceTo(C);
                m > A ||
                A < s.near ||
                A > s.far ||
                h.push({
                  distance: A,
                  point: C,
                  face: F,
                  faceIndex: R,
                  object: this
                })
              }
            }
          }
        }
      }(),
      i.Mesh.prototype.clone = function (e, t) {
        return void 0 === e &&
        (e = new i.Mesh(this.geometry, this.material)),
        i.Object3D.prototype.clone.call(this, e, t),
        e
      },
      i.Bone = function (e) {
        i.Object3D.call(this),
        this.type = 'Bone',
        this.skin = e
      },
      i.Bone.prototype = Object.create(i.Object3D.prototype),
      i.Bone.prototype.constructor = i.Bone,
      i.Skeleton = function (e, t, r) {
        if (
          this.useVertexTexture = void 0 !== r ? r : !0,
          this.identityMatrix = new i.Matrix4,
          e = e ||
          [],
          this.bones = e.slice(0),
          this.useVertexTexture
        ) {
          var n;
          n = this.bones.length > 256 ? 64 : this.bones.length > 64 ? 32 : this.bones.length > 16 ? 16 : 8,
          this.boneTextureWidth = n,
          this.boneTextureHeight = n,
          this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
          this.boneTexture = new i.DataTexture(
            this.boneMatrices,
            this.boneTextureWidth,
            this.boneTextureHeight,
            i.RGBAFormat,
            i.FloatType
          ),
          this.boneTexture.minFilter = i.NearestFilter,
          this.boneTexture.magFilter = i.NearestFilter,
          this.boneTexture.generateMipmaps = !1,
          this.boneTexture.flipY = !1
        } else this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === t) this.calculateInverses();
         else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
         else {
          i.warn('THREE.Skeleton bonInverses is the wrong length.'),
          this.boneInverses = [];
          for (var o = 0, a = this.bones.length; a > o; o++) this.boneInverses.push(new i.Matrix4)
        }
      },
      i.Skeleton.prototype.calculateInverses = function () {
        this.boneInverses = [];
        for (var e = 0, t = this.bones.length; t > e; e++) {
          var r = new i.Matrix4;
          this.bones[e] &&
          r.getInverse(this.bones[e].matrixWorld),
          this.boneInverses.push(r)
        }
      },
      i.Skeleton.prototype.pose = function () {
        for (var e, t = 0, r = this.bones.length; r > t; t++) e = this.bones[t],
        e &&
        e.matrixWorld.getInverse(this.boneInverses[t]);
        for (var t = 0, r = this.bones.length; r > t; t++) e = this.bones[t],
        e &&
        (
          e.parent ? (
            e.matrix.getInverse(e.parent.matrixWorld),
            e.matrix.multiply(e.matrixWorld)
          ) : e.matrix.copy(e.matrixWorld),
          e.matrix.decompose(e.position, e.quaternion, e.scale)
        )
      },
      i.Skeleton.prototype.update = function () {
        var e = new i.Matrix4;
        return function () {
          for (var t = 0, r = this.bones.length; r > t; t++) {
            var i = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
            e.multiplyMatrices(i, this.boneInverses[t]),
            e.flattenToArrayOffset(this.boneMatrices, 16 * t)
          }
          this.useVertexTexture &&
          (this.boneTexture.needsUpdate = !0)
        }
      }(),
      i.SkinnedMesh = function (e, t, r) {
        i.Mesh.call(this, e, t),
        this.type = 'SkinnedMesh',
        this.bindMode = 'attached',
        this.bindMatrix = new i.Matrix4,
        this.bindMatrixInverse = new i.Matrix4;
        var n = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
          for (var o, a, s, h, c, l = 0, u = this.geometry.bones.length; u > l; ++l) a = this.geometry.bones[l],
          s = a.pos,
          h = a.rotq,
          c = a.scl,
          o = new i.Bone(this),
          n.push(o),
          o.name = a.name,
          o.position.set(s[0], s[1], s[2]),
          o.quaternion.set(h[0], h[1], h[2], h[3]),
          void 0 !== c ? o.scale.set(c[0], c[1], c[2]) : o.scale.set(1, 1, 1);
          for (var l = 0, u = this.geometry.bones.length; u > l; ++l) a = this.geometry.bones[l],
          - 1 !== a.parent ? n[a.parent].add(n[l]) : this.add(n[l])
        }
        this.normalizeSkinWeights(),
        this.updateMatrixWorld(!0),
        this.bind(new i.Skeleton(n, void 0, r))
      },
      i.SkinnedMesh.prototype = Object.create(i.Mesh.prototype),
      i.SkinnedMesh.prototype.constructor = i.SkinnedMesh,
      i.SkinnedMesh.prototype.bind = function (e, t) {
        this.skeleton = e,
        void 0 === t &&
        (this.updateMatrixWorld(!0), t = this.matrixWorld),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.getInverse(t)
      },
      i.SkinnedMesh.prototype.pose = function () {
        this.skeleton.pose()
      },
      i.SkinnedMesh.prototype.normalizeSkinWeights = function () {
        if (this.geometry instanceof i.Geometry) for (var e = 0; e < this.geometry.skinIndices.length; e++) {
          var t = this.geometry.skinWeights[e],
          r = 1 / t.lengthManhattan();
          r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1)
        }
      },
      i.SkinnedMesh.prototype.updateMatrixWorld = function (e) {
        i.Mesh.prototype.updateMatrixWorld.call(this, !0),
        'attached' === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : 'detached' === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : i.warn('THREE.SkinnedMesh unreckognized bindMode: ' + this.bindMode)
      },
      i.SkinnedMesh.prototype.clone = function (e) {
        return void 0 === e &&
        (
          e = new i.SkinnedMesh(this.geometry, this.material, this.useVertexTexture)
        ),
        i.Mesh.prototype.clone.call(this, e),
        e
      },
      i.MorphAnimMesh = function (e, t) {
        i.Mesh.call(this, e, t),
        this.type = 'MorphAnimMesh',
        this.duration = 1000,
        this.mirroredLoop = !1,
        this.time = 0,
        this.lastKeyframe = 0,
        this.currentKeyframe = 0,
        this.direction = 1,
        this.directionBackwards = !1,
        this.setFrameRange(0, this.geometry.morphTargets.length - 1)
      },
      i.MorphAnimMesh.prototype = Object.create(i.Mesh.prototype),
      i.MorphAnimMesh.prototype.constructor = i.MorphAnimMesh,
      i.MorphAnimMesh.prototype.setFrameRange = function (e, t) {
        this.startKeyframe = e,
        this.endKeyframe = t,
        this.length = this.endKeyframe - this.startKeyframe + 1
      },
      i.MorphAnimMesh.prototype.setDirectionForward = function () {
        this.direction = 1,
        this.directionBackwards = !1
      },
      i.MorphAnimMesh.prototype.setDirectionBackward = function () {
        this.direction = - 1,
        this.directionBackwards = !0
      },
      i.MorphAnimMesh.prototype.parseAnimations = function () {
        var e = this.geometry;
        e.animations ||
        (e.animations = {});
        for (
          var t,
          r = e.animations,
          i = /([a-z]+)_?(\d+)/,
          n = 0,
          o = e.morphTargets.length;
          o > n;
          n++
        ) {
          var a = e.morphTargets[n],
          s = a.name.match(i);
          if (s && s.length > 1) {
            var h = s[1];
            r[h] ||
            (r[h] = {
              start: 1 / 0,
              end: - (1 / 0)
            });
            var c = r[h];
            n < c.start &&
            (c.start = n),
            n > c.end &&
            (c.end = n),
            t ||
            (t = h)
          }
        }
        e.firstAnimation = t
      },
      i.MorphAnimMesh.prototype.setAnimationLabel = function (e, t, r) {
        this.geometry.animations ||
        (this.geometry.animations = {}),
        this.geometry.animations[e] = {
          start: t,
          end: r
        }
      },
      i.MorphAnimMesh.prototype.playAnimation = function (e, t) {
        var r = this.geometry.animations[e];
        r ? (
          this.setFrameRange(r.start, r.end),
          this.duration = 1000 * ((r.end - r.start) / t),
          this.time = 0
        ) : i.warn(
          'THREE.MorphAnimMesh: animation[' + e + '] undefined in .playAnimation()'
        )
      },
      i.MorphAnimMesh.prototype.updateAnimation = function (e) {
        var t = this.duration / this.length;
        this.time += this.direction * e,
        this.mirroredLoop ? (this.time > this.duration || this.time < 0) &&
        (
          this.direction *= - 1,
          this.time > this.duration &&
          (this.time = this.duration, this.directionBackwards = !0),
          this.time < 0 &&
          (this.time = 0, this.directionBackwards = !1)
        ) : (
          this.time = this.time % this.duration,
          this.time < 0 &&
          (this.time += this.duration)
        );
        var r = this.startKeyframe + i.Math.clamp(Math.floor(this.time / t), 0, this.length - 1);
        r !== this.currentKeyframe &&
        (
          this.morphTargetInfluences[this.lastKeyframe] = 0,
          this.morphTargetInfluences[this.currentKeyframe] = 1,
          this.morphTargetInfluences[r] = 0,
          this.lastKeyframe = this.currentKeyframe,
          this.currentKeyframe = r
        );
        var n = this.time % t / t;
        this.directionBackwards &&
        (n = 1 - n),
        this.morphTargetInfluences[this.currentKeyframe] = n,
        this.morphTargetInfluences[this.lastKeyframe] = 1 - n
      },
      i.MorphAnimMesh.prototype.interpolateTargets = function (e, t, r) {
        for (var i = this.morphTargetInfluences, n = 0, o = i.length; o > n; n++) i[n] = 0;
        e > - 1 &&
        (i[e] = 1 - r),
        t > - 1 &&
        (i[t] = r)
      },
      i.MorphAnimMesh.prototype.clone = function (e) {
        return void 0 === e &&
        (e = new i.MorphAnimMesh(this.geometry, this.material)),
        e.duration = this.duration,
        e.mirroredLoop = this.mirroredLoop,
        e.time = this.time,
        e.lastKeyframe = this.lastKeyframe,
        e.currentKeyframe = this.currentKeyframe,
        e.direction = this.direction,
        e.directionBackwards = this.directionBackwards,
        i.Mesh.prototype.clone.call(this, e),
        e
      },
      i.LOD = function () {
        i.Object3D.call(this),
        this.objects = []
      },
      i.LOD.prototype = Object.create(i.Object3D.prototype),
      i.LOD.prototype.constructor = i.LOD,
      i.LOD.prototype.addLevel = function (e, t) {
        void 0 === t &&
        (t = 0),
        t = Math.abs(t);
        for (
          var r = 0;
          r < this.objects.length &&
          !(t < this.objects[r].distance);
          r++
        );
        this.objects.splice(r, 0, {
          distance: t,
          object: e
        }),
        this.add(e)
      },
      i.LOD.prototype.getObjectForDistance = function (e) {
        for (
          var t = 1,
          r = this.objects.length;
          r > t &&
          !(e < this.objects[t].distance);
          t++
        );
        return this.objects[t - 1].object
      },
      i.LOD.prototype.raycast = function () {
        var e = new i.Vector3;
        return function (t, r) {
          e.setFromMatrixPosition(this.matrixWorld);
          var i = t.ray.origin.distanceTo(e);
          this.getObjectForDistance(i).raycast(t, r)
        }
      }(),
      i.LOD.prototype.update = function () {
        var e = new i.Vector3,
        t = new i.Vector3;
        return function (r) {
          if (this.objects.length > 1) {
            e.setFromMatrixPosition(r.matrixWorld),
            t.setFromMatrixPosition(this.matrixWorld);
            var i = e.distanceTo(t);
            this.objects[0].object.visible = !0;
            for (
              var n = 1,
              o = this.objects.length;
              o > n &&
              i >= this.objects[n].distance;
              n++
            ) this.objects[n - 1].object.visible = !1,
            this.objects[n].object.visible = !0;
            for (; o > n; n++) this.objects[n].object.visible = !1
          }
        }
      }(),
      i.LOD.prototype.clone = function (e) {
        void 0 === e &&
        (e = new i.LOD),
        i.Object3D.prototype.clone.call(this, e);
        for (var t = 0, r = this.objects.length; r > t; t++) {
          var n = this.objects[t].object.clone();
          n.visible = 0 === t,
          e.addLevel(n, this.objects[t].distance)
        }
        return e
      },
      i.Sprite = function () {
        var e = new Uint16Array([0,
        1,
        2,
        0,
        2,
        3]),
        t = new Float32Array([ - 0.5,
        - 0.5,
        0,
        0.5,
        - 0.5,
        0,
        0.5,
        0.5,
        0,
        - 0.5,
        0.5,
        0]),
        r = new Float32Array([0,
        0,
        1,
        0,
        1,
        1,
        0,
        1]),
        n = new i.BufferGeometry;
        return n.addAttribute('index', new i.BufferAttribute(e, 1)),
        n.addAttribute('position', new i.BufferAttribute(t, 3)),
        n.addAttribute('uv', new i.BufferAttribute(r, 2)),
        function (e) {
          i.Object3D.call(this),
          this.type = 'Sprite',
          this.geometry = n,
          this.material = void 0 !== e ? e : new i.SpriteMaterial
        }
      }(),
      i.Sprite.prototype = Object.create(i.Object3D.prototype),
      i.Sprite.prototype.constructor = i.Sprite,
      i.Sprite.prototype.raycast = function () {
        var e = new i.Vector3;
        return function (t, r) {
          e.setFromMatrixPosition(this.matrixWorld);
          var i = t.ray.distanceToPoint(e);
          i > this.scale.x ||
          r.push({
            distance: i,
            point: this.position,
            face: null,
            object: this
          })
        }
      }(),
      i.Sprite.prototype.clone = function (e) {
        return void 0 === e &&
        (e = new i.Sprite(this.material)),
        i.Object3D.prototype.clone.call(this, e),
        e
      },
      i.Particle = i.Sprite,
      i.LensFlare = function (e, t, r, n, o) {
        i.Object3D.call(this),
        this.lensFlares = [],
        this.positionScreen = new i.Vector3,
        this.customUpdateCallback = void 0,
        void 0 !== e &&
        this.add(e, t, r, n, o)
      },
      i.LensFlare.prototype = Object.create(i.Object3D.prototype),
      i.LensFlare.prototype.constructor = i.LensFlare,
      i.LensFlare.prototype.add = function (e, t, r, n, o, a) {
        void 0 === t &&
        (t = - 1),
        void 0 === r &&
        (r = 0),
        void 0 === a &&
        (a = 1),
        void 0 === o &&
        (o = new i.Color(16777215)),
        void 0 === n &&
        (n = i.NormalBlending),
        r = Math.min(r, Math.max(0, r)),
        this.lensFlares.push({
          texture: e,
          size: t,
          distance: r,
          x: 0,
          y: 0,
          z: 0,
          scale: 1,
          rotation: 1,
          opacity: a,
          color: o,
          blending: n
        })
      },
      i.LensFlare.prototype.updateLensFlares = function () {
        var e,
        t,
        r = this.lensFlares.length,
        i = 2 * - this.positionScreen.x,
        n = 2 * - this.positionScreen.y;
        for (e = 0; r > e; e++) t = this.lensFlares[e],
        t.x = this.positionScreen.x + i * t.distance,
        t.y = this.positionScreen.y + n * t.distance,
        t.wantedRotation = t.x * Math.PI * 0.25,
        t.rotation += 0.25 * (t.wantedRotation - t.rotation)
      },
      i.Scene = function () {
        i.Object3D.call(this),
        this.type = 'Scene',
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0
      },
      i.Scene.prototype = Object.create(i.Object3D.prototype),
      i.Scene.prototype.constructor = i.Scene,
      i.Scene.prototype.clone = function (e) {
        return void 0 === e &&
        (e = new i.Scene),
        i.Object3D.prototype.clone.call(this, e),
        null !== this.fog &&
        (e.fog = this.fog.clone()),
        null !== this.overrideMaterial &&
        (e.overrideMaterial = this.overrideMaterial.clone()),
        e.autoUpdate = this.autoUpdate,
        e.matrixAutoUpdate = this.matrixAutoUpdate,
        e
      },
      i.Fog = function (e, t, r) {
        this.name = '',
        this.color = new i.Color(e),
        this.near = void 0 !== t ? t : 1,
        this.far = void 0 !== r ? r : 1000
      },
      i.Fog.prototype.clone = function () {
        return new i.Fog(this.color.getHex(), this.near, this.far)
      },
      i.FogExp2 = function (e, t) {
        this.name = '',
        this.color = new i.Color(e),
        this.density = void 0 !== t ? t : 0.00025
      },
      i.FogExp2.prototype.clone = function () {
        return new i.FogExp2(this.color.getHex(), this.density)
      },
      i.ShaderChunk = {},
      i.ShaderChunk.common = '#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\nfloat square( in float a ) { return a*a; }\nvec2  square( in vec2 a )  { return vec2( a.x*a.x, a.y*a.y ); }\nvec3  square( in vec3 a )  { return vec3( a.x*a.x, a.y*a.y, a.z*a.z ); }\nvec4  square( in vec4 a )  { return vec4( a.x*a.x, a.y*a.y, a.z*a.z, a.w*a.w ); }\nfloat saturate( in float a ) { return clamp( a, 0.0, 1.0 ); }\nvec2  saturate( in vec2 a )  { return clamp( a, 0.0, 1.0 ); }\nvec3  saturate( in vec3 a )  { return clamp( a, 0.0, 1.0 ); }\nvec4  saturate( in vec4 a )  { return clamp( a, 0.0, 1.0 ); }\nfloat average( in float a ) { return a; }\nfloat average( in vec2 a )  { return ( a.x + a.y) * 0.5; }\nfloat average( in vec3 a )  { return ( a.x + a.y + a.z) / 3.0; }\nfloat average( in vec4 a )  { return ( a.x + a.y + a.z + a.w) * 0.25; }\nfloat whiteCompliment( in float a ) { return saturate( 1.0 - a ); }\nvec2  whiteCompliment( in vec2 a )  { return saturate( vec2(1.0) - a ); }\nvec3  whiteCompliment( in vec3 a )  { return saturate( vec3(1.0) - a ); }\nvec4  whiteCompliment( in vec4 a )  { return saturate( vec4(1.0) - a ); }\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n}\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal) {\n\tfloat distance = dot( planeNormal, point-pointOnPlane );\n\treturn point - distance * planeNormal;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn pointOnLine + lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) );\n}\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\tif ( decayExponent > 0.0 ) {\n\t  return pow( saturate( 1.0 - lightDistance / cutoffDistance ), decayExponent );\n\t}\n\treturn 1.0;\n}\n\nvec3 inputToLinear( in vec3 a ) {\n#ifdef GAMMA_INPUT\n\treturn pow( a, vec3( float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\nvec3 linearToOutput( in vec3 a ) {\n#ifdef GAMMA_OUTPUT\n\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n#else\n\treturn a;\n#endif\n}\n',
      i.ShaderChunk.alphatest_fragment = '#ifdef ALPHATEST\n\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n',
      i.ShaderChunk.lights_lambert_vertex = 'vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * attenuation;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * attenuation;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * attenuation * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * attenuation * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack += ambientLightColor;\n\n#endif\n',
      i.ShaderChunk.map_particle_pars_fragment = '#ifdef USE_MAP\n\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n\n#endif\n',
      i.ShaderChunk.default_vertex = '#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n\tvec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n',
      i.ShaderChunk.map_pars_fragment = '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif',
      i.ShaderChunk.skinnormal_vertex = '#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n',
      i.ShaderChunk.logdepthbuf_pars_vertex = '#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif',
      i.ShaderChunk.lightmap_pars_vertex = '#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif',
      i.ShaderChunk.lights_phong_fragment = '#ifndef FLAT_SHADED\n\n\tvec3 normal = normalize( vNormal );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n\t#endif\n\n#else\n\n\tvec3 fdx = dFdx( vViewPosition );\n\tvec3 fdy = dFdy( vViewPosition );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += pointLightColor[ i ] * pointDiffuseWeight * attenuation;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * attenuation * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\ttotalDiffuseLight += spotLightColor[ i ] * spotDiffuseWeight * attenuation * spotEffect;\n\n\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\ttotalSpecularLight += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * attenuation * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec3 dirVector = transformDirection( directionalLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\ttotalDiffuseLight += directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec3 lVector = transformDirection( hemisphereLightDirection[ i ], viewMatrix );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\ttotalDiffuseLight += hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\ttotalSpecularLight += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\n#ifdef METAL\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) * specular + totalSpecularLight + emissive;\n\n#else\n\n\toutgoingLight += diffuseColor.rgb * ( totalDiffuseLight + ambientLightColor ) + totalSpecularLight + emissive;\n\n#endif\n',
      i.ShaderChunk.fog_pars_fragment = '#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif',
      i.ShaderChunk.morphnormal_vertex = '#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif',
      i.ShaderChunk.envmap_pars_fragment = '#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n',
      i.ShaderChunk.logdepthbuf_fragment = '#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif',
      i.ShaderChunk.normalmap_pars_fragment = '#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t// Per-Pixel Tangent Space Normal Mapping\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n',
      i.ShaderChunk.lights_phong_pars_vertex = '#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n',
      i.ShaderChunk.lightmap_pars_fragment = '#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif',
      i.ShaderChunk.shadowmap_vertex = '#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif',
      i.ShaderChunk.lights_phong_vertex = '#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif',
      i.ShaderChunk.map_fragment = '#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\ttexelColor.xyz = inputToLinear( texelColor.xyz );\n\n\tdiffuseColor *= texelColor;\n\n#endif',
      i.ShaderChunk.lightmap_vertex = '#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif',
      i.ShaderChunk.map_particle_fragment = '#ifdef USE_MAP\n\n\tdiffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n',
      i.ShaderChunk.color_pars_fragment = '#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n',
      i.ShaderChunk.color_vertex = '#ifdef USE_COLOR\n\n\tvColor.xyz = inputToLinear( color.xyz );\n\n#endif',
      i.ShaderChunk.skinning_vertex = '#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n',
      i.ShaderChunk.envmap_pars_vertex = '#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n',
      i.ShaderChunk.linear_to_gamma_fragment = '\n\toutgoingLight = linearToOutput( outgoingLight );\n',
      i.ShaderChunk.color_pars_vertex = '#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif',
      i.ShaderChunk.lights_lambert_pars_vertex = 'uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n',
      i.ShaderChunk.map_pars_vertex = '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n',
      i.ShaderChunk.envmap_fragment = '#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\tenvColor.xyz = inputToLinear( envColor.xyz );\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n',
      i.ShaderChunk.specularmap_pars_fragment = '#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif',
      i.ShaderChunk.logdepthbuf_vertex = '#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif',
      i.ShaderChunk.morphtarget_pars_vertex = '#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif',
      i.ShaderChunk.specularmap_fragment = 'float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif',
      i.ShaderChunk.fog_fragment = '#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tfloat fogFactor = exp2( - square( fogDensity ) * square( depth ) * LOG2 );\n\t\tfogFactor = whiteCompliment( fogFactor );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\toutgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif',
      i.ShaderChunk.bumpmap_pars_fragment = '#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif\n',
      i.ShaderChunk.defaultnormal_vertex = '#ifdef USE_SKINNING\n\n\tvec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n\tvec3 objectNormal = morphedNormal;\n\n#else\n\n\tvec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n',
      i.ShaderChunk.lights_phong_pars_fragment = 'uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n\tvarying vec3 vNormal;\n\n#endif\n',
      i.ShaderChunk.skinbase_vertex = '#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif',
      i.ShaderChunk.map_vertex = '#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif',
      i.ShaderChunk.lightmap_fragment = '#ifdef USE_LIGHTMAP\n\n\toutgoingLight *= diffuseColor.xyz * texture2D( lightMap, vUv2 ).xyz;\n\n#endif',
      i.ShaderChunk.shadowmap_pars_vertex = '#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif',
      i.ShaderChunk.color_fragment = '#ifdef USE_COLOR\n\n\tdiffuseColor.rgb *= vColor;\n\n#endif',
      i.ShaderChunk.morphtarget_vertex = '#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif',
      i.ShaderChunk.envmap_vertex = '#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n',
      i.ShaderChunk.shadowmap_fragment = '#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don\'t shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don\'t shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn\'t seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t// NOTE: I am unsure if this is correct in linear space.  -bhouston, Dec 29, 2014\n\tshadowColor = inputToLinear( shadowColor );\n\n\toutgoingLight = outgoingLight * shadowColor;\n\n#endif\n',
      i.ShaderChunk.worldpos_vertex = '#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#elif defined( USE_MORPHTARGETS )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif\n',
      i.ShaderChunk.shadowmap_pars_fragment = '#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif',
      i.ShaderChunk.skinning_pars_vertex = '#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n',
      i.ShaderChunk.logdepthbuf_pars_fragment = '#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif',
      i.ShaderChunk.alphamap_fragment = '#ifdef USE_ALPHAMAP\n\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n',
      i.ShaderChunk.alphamap_pars_fragment = '#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n',
      i.UniformsUtils = {
        merge: function (e) {
          for (var t = {}, r = 0; r < e.length; r++) {
            var i = this.clone(e[r]);
            for (var n in i) t[n] = i[n]
          }
          return t
        },
        clone: function (e) {
          var t = {};
          for (var r in e) {
            t[r] = {};
            for (var n in e[r]) {
              var o = e[r][n];
              o instanceof i.Color ||
              o instanceof i.Vector2 ||
              o instanceof i.Vector3 ||
              o instanceof i.Vector4 ||
              o instanceof i.Matrix4 ||
              o instanceof i.Texture ? t[r][n] = o.clone() : o instanceof Array ? t[r][n] = o.slice() : t[r][n] = o
            }
          }
          return t
        }
      },
      i.UniformsLib = {
        common: {
          diffuse: {
            type: 'c',
            value: new i.Color(15658734)
          },
          opacity: {
            type: 'f',
            value: 1
          },
          map: {
            type: 't',
            value: null
          },
          offsetRepeat: {
            type: 'v4',
            value: new i.Vector4(0, 0, 1, 1)
          },
          lightMap: {
            type: 't',
            value: null
          },
          specularMap: {
            type: 't',
            value: null
          },
          alphaMap: {
            type: 't',
            value: null
          },
          envMap: {
            type: 't',
            value: null
          },
          flipEnvMap: {
            type: 'f',
            value: - 1
          },
          reflectivity: {
            type: 'f',
            value: 1
          },
          refractionRatio: {
            type: 'f',
            value: 0.98
          },
          morphTargetInfluences: {
            type: 'f',
            value: 0
          }
        },
        bump: {
          bumpMap: {
            type: 't',
            value: null
          },
          bumpScale: {
            type: 'f',
            value: 1
          }
        },
        normalmap: {
          normalMap: {
            type: 't',
            value: null
          },
          normalScale: {
            type: 'v2',
            value: new i.Vector2(1, 1)
          }
        },
        fog: {
          fogDensity: {
            type: 'f',
            value: 0.00025
          },
          fogNear: {
            type: 'f',
            value: 1
          },
          fogFar: {
            type: 'f',
            value: 2000
          },
          fogColor: {
            type: 'c',
            value: new i.Color(16777215)
          }
        },
        lights: {
          ambientLightColor: {
            type: 'fv',
            value: []
          },
          directionalLightDirection: {
            type: 'fv',
            value: []
          },
          directionalLightColor: {
            type: 'fv',
            value: []
          },
          hemisphereLightDirection: {
            type: 'fv',
            value: []
          },
          hemisphereLightSkyColor: {
            type: 'fv',
            value: []
          },
          hemisphereLightGroundColor: {
            type: 'fv',
            value: []
          },
          pointLightColor: {
            type: 'fv',
            value: []
          },
          pointLightPosition: {
            type: 'fv',
            value: []
          },
          pointLightDistance: {
            type: 'fv1',
            value: []
          },
          pointLightDecay: {
            type: 'fv1',
            value: []
          },
          spotLightColor: {
            type: 'fv',
            value: []
          },
          spotLightPosition: {
            type: 'fv',
            value: []
          },
          spotLightDirection: {
            type: 'fv',
            value: []
          },
          spotLightDistance: {
            type: 'fv1',
            value: []
          },
          spotLightAngleCos: {
            type: 'fv1',
            value: []
          },
          spotLightExponent: {
            type: 'fv1',
            value: []
          },
          spotLightDecay: {
            type: 'fv1',
            value: []
          }
        },
        particle: {
          psColor: {
            type: 'c',
            value: new i.Color(15658734)
          },
          opacity: {
            type: 'f',
            value: 1
          },
          size: {
            type: 'f',
            value: 1
          },
          scale: {
            type: 'f',
            value: 1
          },
          map: {
            type: 't',
            value: null
          },
          offsetRepeat: {
            type: 'v4',
            value: new i.Vector4(0, 0, 1, 1)
          },
          fogDensity: {
            type: 'f',
            value: 0.00025
          },
          fogNear: {
            type: 'f',
            value: 1
          },
          fogFar: {
            type: 'f',
            value: 2000
          },
          fogColor: {
            type: 'c',
            value: new i.Color(16777215)
          }
        },
        shadowmap: {
          shadowMap: {
            type: 'tv',
            value: []
          },
          shadowMapSize: {
            type: 'v2v',
            value: []
          },
          shadowBias: {
            type: 'fv1',
            value: []
          },
          shadowDarkness: {
            type: 'fv1',
            value: []
          },
          shadowMatrix: {
            type: 'm4v',
            value: []
          }
        }
      },
      i.ShaderLib = {
        basic: {
          uniforms: i.UniformsUtils.merge(
            [i.UniformsLib.common,
            i.UniformsLib.fog,
            i.UniformsLib.shadowmap]
          ),
          vertexShader: [
            i.ShaderChunk.common,
            i.ShaderChunk.map_pars_vertex,
            i.ShaderChunk.lightmap_pars_vertex,
            i.ShaderChunk.envmap_pars_vertex,
            i.ShaderChunk.color_pars_vertex,
            i.ShaderChunk.morphtarget_pars_vertex,
            i.ShaderChunk.skinning_pars_vertex,
            i.ShaderChunk.shadowmap_pars_vertex,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            i.ShaderChunk.map_vertex,
            i.ShaderChunk.lightmap_vertex,
            i.ShaderChunk.color_vertex,
            i.ShaderChunk.skinbase_vertex,
            '\t#ifdef USE_ENVMAP',
            i.ShaderChunk.morphnormal_vertex,
            i.ShaderChunk.skinnormal_vertex,
            i.ShaderChunk.defaultnormal_vertex,
            '\t#endif',
            i.ShaderChunk.morphtarget_vertex,
            i.ShaderChunk.skinning_vertex,
            i.ShaderChunk.default_vertex,
            i.ShaderChunk.logdepthbuf_vertex,
            i.ShaderChunk.worldpos_vertex,
            i.ShaderChunk.envmap_vertex,
            i.ShaderChunk.shadowmap_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            'uniform vec3 diffuse;',
            'uniform float opacity;',
            i.ShaderChunk.common,
            i.ShaderChunk.color_pars_fragment,
            i.ShaderChunk.map_pars_fragment,
            i.ShaderChunk.alphamap_pars_fragment,
            i.ShaderChunk.lightmap_pars_fragment,
            i.ShaderChunk.envmap_pars_fragment,
            i.ShaderChunk.fog_pars_fragment,
            i.ShaderChunk.shadowmap_pars_fragment,
            i.ShaderChunk.specularmap_pars_fragment,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            '\tvec3 outgoingLight = vec3( 0.0 );',
            '\tvec4 diffuseColor = vec4( diffuse, opacity );',
            i.ShaderChunk.logdepthbuf_fragment,
            i.ShaderChunk.map_fragment,
            i.ShaderChunk.color_fragment,
            i.ShaderChunk.alphamap_fragment,
            i.ShaderChunk.alphatest_fragment,
            i.ShaderChunk.specularmap_fragment,
            '\toutgoingLight = diffuseColor.rgb;',
            i.ShaderChunk.lightmap_fragment,
            i.ShaderChunk.envmap_fragment,
            i.ShaderChunk.shadowmap_fragment,
            i.ShaderChunk.linear_to_gamma_fragment,
            i.ShaderChunk.fog_fragment,
            '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );',
            '}'
          ].join('\n')
        },
        lambert: {
          uniforms: i.UniformsUtils.merge(
            [i.UniformsLib.common,
            i.UniformsLib.fog,
            i.UniformsLib.lights,
            i.UniformsLib.shadowmap,
            {
              emissive: {
                type: 'c',
                value: new i.Color(0)
              },
              wrapRGB: {
                type: 'v3',
                value: new i.Vector3(1, 1, 1)
              }
            }
            ]
          ),
          vertexShader: [
            '#define LAMBERT',
            'varying vec3 vLightFront;',
            '#ifdef DOUBLE_SIDED',
            '\tvarying vec3 vLightBack;',
            '#endif',
            i.ShaderChunk.common,
            i.ShaderChunk.map_pars_vertex,
            i.ShaderChunk.lightmap_pars_vertex,
            i.ShaderChunk.envmap_pars_vertex,
            i.ShaderChunk.lights_lambert_pars_vertex,
            i.ShaderChunk.color_pars_vertex,
            i.ShaderChunk.morphtarget_pars_vertex,
            i.ShaderChunk.skinning_pars_vertex,
            i.ShaderChunk.shadowmap_pars_vertex,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            i.ShaderChunk.map_vertex,
            i.ShaderChunk.lightmap_vertex,
            i.ShaderChunk.color_vertex,
            i.ShaderChunk.morphnormal_vertex,
            i.ShaderChunk.skinbase_vertex,
            i.ShaderChunk.skinnormal_vertex,
            i.ShaderChunk.defaultnormal_vertex,
            i.ShaderChunk.morphtarget_vertex,
            i.ShaderChunk.skinning_vertex,
            i.ShaderChunk.default_vertex,
            i.ShaderChunk.logdepthbuf_vertex,
            i.ShaderChunk.worldpos_vertex,
            i.ShaderChunk.envmap_vertex,
            i.ShaderChunk.lights_lambert_vertex,
            i.ShaderChunk.shadowmap_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            'uniform vec3 diffuse;',
            'uniform vec3 emissive;',
            'uniform float opacity;',
            'varying vec3 vLightFront;',
            '#ifdef DOUBLE_SIDED',
            '\tvarying vec3 vLightBack;',
            '#endif',
            i.ShaderChunk.common,
            i.ShaderChunk.color_pars_fragment,
            i.ShaderChunk.map_pars_fragment,
            i.ShaderChunk.alphamap_pars_fragment,
            i.ShaderChunk.lightmap_pars_fragment,
            i.ShaderChunk.envmap_pars_fragment,
            i.ShaderChunk.fog_pars_fragment,
            i.ShaderChunk.shadowmap_pars_fragment,
            i.ShaderChunk.specularmap_pars_fragment,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            '\tvec3 outgoingLight = vec3( 0.0 );',
            '\tvec4 diffuseColor = vec4( diffuse, opacity );',
            i.ShaderChunk.logdepthbuf_fragment,
            i.ShaderChunk.map_fragment,
            i.ShaderChunk.color_fragment,
            i.ShaderChunk.alphamap_fragment,
            i.ShaderChunk.alphatest_fragment,
            i.ShaderChunk.specularmap_fragment,
            '\t#ifdef DOUBLE_SIDED',
            '\t\tif ( gl_FrontFacing )',
            '\t\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;',
            '\t\telse',
            '\t\t\toutgoingLight += diffuseColor.rgb * vLightBack + emissive;',
            '\t#else',
            '\t\toutgoingLight += diffuseColor.rgb * vLightFront + emissive;',
            '\t#endif',
            i.ShaderChunk.lightmap_fragment,
            i.ShaderChunk.envmap_fragment,
            i.ShaderChunk.shadowmap_fragment,
            i.ShaderChunk.linear_to_gamma_fragment,
            i.ShaderChunk.fog_fragment,
            '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );',
            '}'
          ].join('\n')
        },
        phong: {
          uniforms: i.UniformsUtils.merge(
            [i.UniformsLib.common,
            i.UniformsLib.bump,
            i.UniformsLib.normalmap,
            i.UniformsLib.fog,
            i.UniformsLib.lights,
            i.UniformsLib.shadowmap,
            {
              emissive: {
                type: 'c',
                value: new i.Color(0)
              },
              specular: {
                type: 'c',
                value: new i.Color(1118481)
              },
              shininess: {
                type: 'f',
                value: 30
              },
              wrapRGB: {
                type: 'v3',
                value: new i.Vector3(1, 1, 1)
              }
            }
            ]
          ),
          vertexShader: [
            '#define PHONG',
            'varying vec3 vViewPosition;',
            '#ifndef FLAT_SHADED',
            '\tvarying vec3 vNormal;',
            '#endif',
            i.ShaderChunk.common,
            i.ShaderChunk.map_pars_vertex,
            i.ShaderChunk.lightmap_pars_vertex,
            i.ShaderChunk.envmap_pars_vertex,
            i.ShaderChunk.lights_phong_pars_vertex,
            i.ShaderChunk.color_pars_vertex,
            i.ShaderChunk.morphtarget_pars_vertex,
            i.ShaderChunk.skinning_pars_vertex,
            i.ShaderChunk.shadowmap_pars_vertex,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            i.ShaderChunk.map_vertex,
            i.ShaderChunk.lightmap_vertex,
            i.ShaderChunk.color_vertex,
            i.ShaderChunk.morphnormal_vertex,
            i.ShaderChunk.skinbase_vertex,
            i.ShaderChunk.skinnormal_vertex,
            i.ShaderChunk.defaultnormal_vertex,
            '#ifndef FLAT_SHADED',
            '\tvNormal = normalize( transformedNormal );',
            '#endif',
            i.ShaderChunk.morphtarget_vertex,
            i.ShaderChunk.skinning_vertex,
            i.ShaderChunk.default_vertex,
            i.ShaderChunk.logdepthbuf_vertex,
            '\tvViewPosition = -mvPosition.xyz;',
            i.ShaderChunk.worldpos_vertex,
            i.ShaderChunk.envmap_vertex,
            i.ShaderChunk.lights_phong_vertex,
            i.ShaderChunk.shadowmap_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            '#define PHONG',
            'uniform vec3 diffuse;',
            'uniform vec3 emissive;',
            'uniform vec3 specular;',
            'uniform float shininess;',
            'uniform float opacity;',
            i.ShaderChunk.common,
            i.ShaderChunk.color_pars_fragment,
            i.ShaderChunk.map_pars_fragment,
            i.ShaderChunk.alphamap_pars_fragment,
            i.ShaderChunk.lightmap_pars_fragment,
            i.ShaderChunk.envmap_pars_fragment,
            i.ShaderChunk.fog_pars_fragment,
            i.ShaderChunk.lights_phong_pars_fragment,
            i.ShaderChunk.shadowmap_pars_fragment,
            i.ShaderChunk.bumpmap_pars_fragment,
            i.ShaderChunk.normalmap_pars_fragment,
            i.ShaderChunk.specularmap_pars_fragment,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            '\tvec3 outgoingLight = vec3( 0.0 );',
            '\tvec4 diffuseColor = vec4( diffuse, opacity );',
            i.ShaderChunk.logdepthbuf_fragment,
            i.ShaderChunk.map_fragment,
            i.ShaderChunk.color_fragment,
            i.ShaderChunk.alphamap_fragment,
            i.ShaderChunk.alphatest_fragment,
            i.ShaderChunk.specularmap_fragment,
            i.ShaderChunk.lights_phong_fragment,
            i.ShaderChunk.lightmap_fragment,
            i.ShaderChunk.envmap_fragment,
            i.ShaderChunk.shadowmap_fragment,
            i.ShaderChunk.linear_to_gamma_fragment,
            i.ShaderChunk.fog_fragment,
            '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );',
            '}'
          ].join('\n')
        },
        particle_basic: {
          uniforms: i.UniformsUtils.merge([i.UniformsLib.particle,
          i.UniformsLib.shadowmap]),
          vertexShader: [
            'uniform float size;',
            'uniform float scale;',
            i.ShaderChunk.common,
            i.ShaderChunk.color_pars_vertex,
            i.ShaderChunk.shadowmap_pars_vertex,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            i.ShaderChunk.color_vertex,
            '\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
            '\t#ifdef USE_SIZEATTENUATION',
            '\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );',
            '\t#else',
            '\t\tgl_PointSize = size;',
            '\t#endif',
            '\tgl_Position = projectionMatrix * mvPosition;',
            i.ShaderChunk.logdepthbuf_vertex,
            i.ShaderChunk.worldpos_vertex,
            i.ShaderChunk.shadowmap_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            'uniform vec3 psColor;',
            'uniform float opacity;',
            i.ShaderChunk.common,
            i.ShaderChunk.color_pars_fragment,
            i.ShaderChunk.map_particle_pars_fragment,
            i.ShaderChunk.fog_pars_fragment,
            i.ShaderChunk.shadowmap_pars_fragment,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            '\tvec3 outgoingLight = vec3( 0.0 );',
            '\tvec4 diffuseColor = vec4( psColor, opacity );',
            i.ShaderChunk.logdepthbuf_fragment,
            i.ShaderChunk.map_particle_fragment,
            i.ShaderChunk.color_fragment,
            i.ShaderChunk.alphatest_fragment,
            '\toutgoingLight = diffuseColor.rgb;',
            i.ShaderChunk.shadowmap_fragment,
            i.ShaderChunk.fog_fragment,
            '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );',
            '}'
          ].join('\n')
        },
        dashed: {
          uniforms: i.UniformsUtils.merge(
            [i.UniformsLib.common,
            i.UniformsLib.fog,
            {
              scale: {
                type: 'f',
                value: 1
              },
              dashSize: {
                type: 'f',
                value: 1
              },
              totalSize: {
                type: 'f',
                value: 2
              }
            }
            ]
          ),
          vertexShader: [
            'uniform float scale;',
            'attribute float lineDistance;',
            'varying float vLineDistance;',
            i.ShaderChunk.common,
            i.ShaderChunk.color_pars_vertex,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            i.ShaderChunk.color_vertex,
            '\tvLineDistance = scale * lineDistance;',
            '\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
            '\tgl_Position = projectionMatrix * mvPosition;',
            i.ShaderChunk.logdepthbuf_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            'uniform vec3 diffuse;',
            'uniform float opacity;',
            'uniform float dashSize;',
            'uniform float totalSize;',
            'varying float vLineDistance;',
            i.ShaderChunk.common,
            i.ShaderChunk.color_pars_fragment,
            i.ShaderChunk.fog_pars_fragment,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            '\tif ( mod( vLineDistance, totalSize ) > dashSize ) {',
            '\t\tdiscard;',
            '\t}',
            '\tvec3 outgoingLight = vec3( 0.0 );',
            '\tvec4 diffuseColor = vec4( diffuse, opacity );',
            i.ShaderChunk.logdepthbuf_fragment,
            i.ShaderChunk.color_fragment,
            '\toutgoingLight = diffuseColor.rgb;',
            i.ShaderChunk.fog_fragment,
            '\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );',
            '}'
          ].join('\n')
        },
        depth: {
          uniforms: {
            mNear: {
              type: 'f',
              value: 1
            },
            mFar: {
              type: 'f',
              value: 2000
            },
            opacity: {
              type: 'f',
              value: 1
            }
          },
          vertexShader: [
            i.ShaderChunk.common,
            i.ShaderChunk.morphtarget_pars_vertex,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            i.ShaderChunk.morphtarget_vertex,
            i.ShaderChunk.default_vertex,
            i.ShaderChunk.logdepthbuf_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            'uniform float mNear;',
            'uniform float mFar;',
            'uniform float opacity;',
            i.ShaderChunk.common,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            i.ShaderChunk.logdepthbuf_fragment,
            '\t#ifdef USE_LOGDEPTHBUF_EXT',
            '\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;',
            '\t#else',
            '\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;',
            '\t#endif',
            '\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );',
            '\tgl_FragColor = vec4( vec3( color ), opacity );',
            '}'
          ].join('\n')
        },
        normal: {
          uniforms: {
            opacity: {
              type: 'f',
              value: 1
            }
          },
          vertexShader: [
            'varying vec3 vNormal;',
            i.ShaderChunk.common,
            i.ShaderChunk.morphtarget_pars_vertex,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            '\tvNormal = normalize( normalMatrix * normal );',
            i.ShaderChunk.morphtarget_vertex,
            i.ShaderChunk.default_vertex,
            i.ShaderChunk.logdepthbuf_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            'uniform float opacity;',
            'varying vec3 vNormal;',
            i.ShaderChunk.common,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            '\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );',
            i.ShaderChunk.logdepthbuf_fragment,
            '}'
          ].join('\n')
        },
        cube: {
          uniforms: {
            tCube: {
              type: 't',
              value: null
            },
            tFlip: {
              type: 'f',
              value: - 1
            }
          },
          vertexShader: [
            'varying vec3 vWorldPosition;',
            i.ShaderChunk.common,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            '\tvWorldPosition = transformDirection( position, modelMatrix );',
            '\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            i.ShaderChunk.logdepthbuf_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            'uniform samplerCube tCube;',
            'uniform float tFlip;',
            'varying vec3 vWorldPosition;',
            i.ShaderChunk.common,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            '\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );',
            i.ShaderChunk.logdepthbuf_fragment,
            '}'
          ].join('\n')
        },
        equirect: {
          uniforms: {
            tEquirect: {
              type: 't',
              value: null
            },
            tFlip: {
              type: 'f',
              value: - 1
            }
          },
          vertexShader: [
            'varying vec3 vWorldPosition;',
            i.ShaderChunk.common,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            '\tvWorldPosition = transformDirection( position, modelMatrix );',
            '\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            i.ShaderChunk.logdepthbuf_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            'uniform sampler2D tEquirect;',
            'uniform float tFlip;',
            'varying vec3 vWorldPosition;',
            i.ShaderChunk.common,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'void main() {',
            'vec3 direction = normalize( vWorldPosition );',
            'vec2 sampleUV;',
            'sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );',
            'sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;',
            'gl_FragColor = texture2D( tEquirect, sampleUV );',
            i.ShaderChunk.logdepthbuf_fragment,
            '}'
          ].join('\n')
        },
        depthRGBA: {
          uniforms: {
          },
          vertexShader: [
            i.ShaderChunk.common,
            i.ShaderChunk.morphtarget_pars_vertex,
            i.ShaderChunk.skinning_pars_vertex,
            i.ShaderChunk.logdepthbuf_pars_vertex,
            'void main() {',
            i.ShaderChunk.skinbase_vertex,
            i.ShaderChunk.morphtarget_vertex,
            i.ShaderChunk.skinning_vertex,
            i.ShaderChunk.default_vertex,
            i.ShaderChunk.logdepthbuf_vertex,
            '}'
          ].join('\n'),
          fragmentShader: [
            i.ShaderChunk.common,
            i.ShaderChunk.logdepthbuf_pars_fragment,
            'vec4 pack_depth( const in float depth ) {',
            '\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );',
            '\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );',
            '\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );',
            '\tres -= res.xxyz * bit_mask;',
            '\treturn res;',
            '}',
            'void main() {',
            i.ShaderChunk.logdepthbuf_fragment,
            '\t#ifdef USE_LOGDEPTHBUF_EXT',
            '\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );',
            '\t#else',
            '\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );',
            '\t#endif',
            '}'
          ].join('\n')
        }
      },
      i.WebGLRenderer = function (e) {
        function t(e) {
          e.__webglVertexBuffer = Le.createBuffer(),
          e.__webglColorBuffer = Le.createBuffer(),
          Re.info.memory.geometries++
        }
        function r(e) {
          e.__webglVertexBuffer = Le.createBuffer(),
          e.__webglColorBuffer = Le.createBuffer(),
          e.__webglLineDistanceBuffer = Le.createBuffer(),
          Re.info.memory.geometries++
        }
        function n(e) {
          e.__webglVertexBuffer = Le.createBuffer(),
          e.__webglNormalBuffer = Le.createBuffer(),
          e.__webglTangentBuffer = Le.createBuffer(),
          e.__webglColorBuffer = Le.createBuffer(),
          e.__webglUVBuffer = Le.createBuffer(),
          e.__webglUV2Buffer = Le.createBuffer(),
          e.__webglSkinIndicesBuffer = Le.createBuffer(),
          e.__webglSkinWeightsBuffer = Le.createBuffer(),
          e.__webglFaceBuffer = Le.createBuffer(),
          e.__webglLineBuffer = Le.createBuffer();
          var t = e.numMorphTargets;
          if (t) {
            e.__webglMorphTargetsBuffers = [];
            for (var r = 0, i = t; i > r; r++) e.__webglMorphTargetsBuffers.push(Le.createBuffer())
          }
          var n = e.numMorphNormals;
          if (n) {
            e.__webglMorphNormalsBuffers = [];
            for (var r = 0, i = n; i > r; r++) e.__webglMorphNormalsBuffers.push(Le.createBuffer())
          }
          Re.info.memory.geometries++
        }
        function o(e) {
          var t = e.geometry,
          r = e.material,
          i = t.vertices.length;
          if (r.attributes) {
            void 0 === t.__webglCustomAttributesList &&
            (t.__webglCustomAttributesList = []);
            for (var n in r.attributes) {
              var o = r.attributes[n];
              if (!o.__webglInitialized || o.createUniqueBuffers) {
                o.__webglInitialized = !0;
                var a = 1;
                'v2' === o.type ? a = 2 : 'v3' === o.type ? a = 3 : 'v4' === o.type ? a = 4 : 'c' === o.type &&
                (a = 3),
                o.size = a,
                o.array = new Float32Array(i * a),
                o.buffer = Le.createBuffer(),
                o.buffer.belongsToAttribute = n,
                o.needsUpdate = !0
              }
              t.__webglCustomAttributesList.push(o)
            }
          }
        }
        function a(e, t) {
          var r = e.vertices.length;
          e.__vertexArray = new Float32Array(3 * r),
          e.__colorArray = new Float32Array(3 * r),
          e.__webglParticleCount = r,
          o(t)
        }
        function s(e, t) {
          var r = e.vertices.length;
          e.__vertexArray = new Float32Array(3 * r),
          e.__colorArray = new Float32Array(3 * r),
          e.__lineDistanceArray = new Float32Array(1 * r),
          e.__webglLineCount = r,
          o(t)
        }
        function h(e, t) {
          var r = t.geometry,
          i = e.faces3,
          n = 3 * i.length,
          o = 1 * i.length,
          a = 3 * i.length,
          s = c(t, e);
          e.__vertexArray = new Float32Array(3 * n),
          e.__normalArray = new Float32Array(3 * n),
          e.__colorArray = new Float32Array(3 * n),
          e.__uvArray = new Float32Array(2 * n),
          r.faceVertexUvs.length > 1 &&
          (e.__uv2Array = new Float32Array(2 * n)),
          r.hasTangents &&
          (e.__tangentArray = new Float32Array(4 * n)),
          t.geometry.skinWeights.length &&
          t.geometry.skinIndices.length &&
          (
            e.__skinIndexArray = new Float32Array(4 * n),
            e.__skinWeightArray = new Float32Array(4 * n)
          );
          var h = null !== tt.get('OES_element_index_uint') &&
          o > 21845 ? Uint32Array : Uint16Array;
          e.__typeArray = h,
          e.__faceArray = new h(3 * o),
          e.__lineArray = new h(2 * a);
          var l = e.numMorphTargets;
          if (l) {
            e.__morphTargetsArrays = [];
            for (var u = 0, d = l; d > u; u++) e.__morphTargetsArrays.push(new Float32Array(3 * n))
          }
          var f = e.numMorphNormals;
          if (f) {
            e.__morphNormalsArrays = [];
            for (var u = 0, d = f; d > u; u++) e.__morphNormalsArrays.push(new Float32Array(3 * n))
          }
          if (e.__webglFaceCount = 3 * o, e.__webglLineCount = 2 * a, s.attributes) {
            void 0 === e.__webglCustomAttributesList &&
            (e.__webglCustomAttributesList = []);
            for (var p in s.attributes) {
              var m = s.attributes[p],
              v = {};
              for (var g in m) v[g] = m[g];
              if (!v.__webglInitialized || v.createUniqueBuffers) {
                v.__webglInitialized = !0;
                var y = 1;
                'v2' === v.type ? y = 2 : 'v3' === v.type ? y = 3 : 'v4' === v.type ? y = 4 : 'c' === v.type &&
                (y = 3),
                v.size = y,
                v.array = new Float32Array(n * y),
                v.buffer = Le.createBuffer(),
                v.buffer.belongsToAttribute = p,
                m.needsUpdate = !0,
                v.__original = m
              }
              e.__webglCustomAttributesList.push(v)
            }
          }
          e.__inittedArrays = !0
        }
        function c(e, t) {
          return e.material instanceof i.MeshFaceMaterial ? e.material.materials[t.materialIndex] : e.material
        }
        function l(e) {
          return e instanceof i.MeshPhongMaterial == !1 &&
          e.shading === i.FlatShading
        }
        function u(e, t, r) {
          var i,
          n,
          o,
          a,
          s,
          h,
          c,
          l,
          u,
          d,
          f,
          p = e.vertices,
          m = p.length,
          v = e.colors,
          g = v.length,
          y = e.__vertexArray,
          x = e.__colorArray,
          _ = e.verticesNeedUpdate,
          w = e.colorsNeedUpdate,
          b = e.__webglCustomAttributesList;
          if (_) {
            for (i = 0; m > i; i++) o = p[i],
            a = 3 * i,
            y[a] = o.x,
            y[a + 1] = o.y,
            y[a + 2] = o.z;
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglVertexBuffer),
            Le.bufferData(Le.ARRAY_BUFFER, y, t)
          }
          if (w) {
            for (n = 0; g > n; n++) s = v[n],
            a = 3 * n,
            x[a] = s.r,
            x[a + 1] = s.g,
            x[a + 2] = s.b;
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglColorBuffer),
            Le.bufferData(Le.ARRAY_BUFFER, x, t)
          }
          if (b) for (h = 0, c = b.length; c > h; h++) {
            if (
              f = b[h],
              f.needsUpdate &&
              (void 0 === f.boundTo || 'vertices' === f.boundTo)
            ) if (u = f.value.length, a = 0, 1 === f.size) for (l = 0; u > l; l++) f.array[l] = f.value[l];
             else if (2 === f.size) for (l = 0; u > l; l++) d = f.value[l],
            f.array[a] = d.x,
            f.array[a + 1] = d.y,
            a += 2;
             else if (3 === f.size) if ('c' === f.type) for (l = 0; u > l; l++) d = f.value[l],
            f.array[a] = d.r,
            f.array[a + 1] = d.g,
            f.array[a + 2] = d.b,
            a += 3;
             else for (l = 0; u > l; l++) d = f.value[l],
            f.array[a] = d.x,
            f.array[a + 1] = d.y,
            f.array[a + 2] = d.z,
            a += 3;
             else if (4 === f.size) for (l = 0; u > l; l++) d = f.value[l],
            f.array[a] = d.x,
            f.array[a + 1] = d.y,
            f.array[a + 2] = d.z,
            f.array[a + 3] = d.w,
            a += 4;
            Le.bindBuffer(Le.ARRAY_BUFFER, f.buffer),
            Le.bufferData(Le.ARRAY_BUFFER, f.array, t),
            f.needsUpdate = !1
          }
        }
        function d(e, t) {
          var r,
          i,
          n,
          o,
          a,
          s,
          h,
          c,
          l,
          u,
          d,
          f,
          p = e.vertices,
          m = e.colors,
          v = e.lineDistances,
          g = p.length,
          y = m.length,
          x = v.length,
          _ = e.__vertexArray,
          w = e.__colorArray,
          b = e.__lineDistanceArray,
          M = e.verticesNeedUpdate,
          S = e.colorsNeedUpdate,
          T = e.lineDistancesNeedUpdate,
          C = e.__webglCustomAttributesList;
          if (M) {
            for (r = 0; g > r; r++) o = p[r],
            a = 3 * r,
            _[a] = o.x,
            _[a + 1] = o.y,
            _[a + 2] = o.z;
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglVertexBuffer),
            Le.bufferData(Le.ARRAY_BUFFER, _, t)
          }
          if (S) {
            for (i = 0; y > i; i++) s = m[i],
            a = 3 * i,
            w[a] = s.r,
            w[a + 1] = s.g,
            w[a + 2] = s.b;
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglColorBuffer),
            Le.bufferData(Le.ARRAY_BUFFER, w, t)
          }
          if (T) {
            for (n = 0; x > n; n++) b[n] = v[n];
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglLineDistanceBuffer),
            Le.bufferData(Le.ARRAY_BUFFER, b, t)
          }
          if (C) for (h = 0, c = C.length; c > h; h++) if (
            f = C[h],
            f.needsUpdate &&
            (void 0 === f.boundTo || 'vertices' === f.boundTo)
          ) {
            if (a = 0, u = f.value.length, 1 === f.size) for (l = 0; u > l; l++) f.array[l] = f.value[l];
             else if (2 === f.size) for (l = 0; u > l; l++) d = f.value[l],
            f.array[a] = d.x,
            f.array[a + 1] = d.y,
            a += 2;
             else if (3 === f.size) if ('c' === f.type) for (l = 0; u > l; l++) d = f.value[l],
            f.array[a] = d.r,
            f.array[a + 1] = d.g,
            f.array[a + 2] = d.b,
            a += 3;
             else for (l = 0; u > l; l++) d = f.value[l],
            f.array[a] = d.x,
            f.array[a + 1] = d.y,
            f.array[a + 2] = d.z,
            a += 3;
             else if (4 === f.size) for (l = 0; u > l; l++) d = f.value[l],
            f.array[a] = d.x,
            f.array[a + 1] = d.y,
            f.array[a + 2] = d.z,
            f.array[a + 3] = d.w,
            a += 4;
            Le.bindBuffer(Le.ARRAY_BUFFER, f.buffer),
            Le.bufferData(Le.ARRAY_BUFFER, f.array, t),
            f.needsUpdate = !1
          }
        }
        function f(e, t, r, n, o) {
          if (e.__inittedArrays) {
            var a,
            s,
            h,
            c,
            u,
            d,
            f,
            p,
            m,
            v,
            g,
            y,
            x,
            _,
            w,
            b,
            M,
            S,
            T,
            C,
            A,
            E,
            P,
            D,
            L,
            R,
            B,
            F,
            U,
            O,
            V,
            k,
            z,
            N,
            I,
            G,
            H,
            W,
            j,
            X,
            q,
            Y,
            K = l(o),
            Q = 0,
            Z = 0,
            J = 0,
            $ = 0,
            ee = 0,
            te = 0,
            re = 0,
            ie = 0,
            ne = 0,
            oe = 0,
            ae = 0,
            se = 0,
            he = e.__vertexArray,
            ce = e.__uvArray,
            le = e.__uv2Array,
            ue = e.__normalArray,
            de = e.__tangentArray,
            fe = e.__colorArray,
            pe = e.__skinIndexArray,
            me = e.__skinWeightArray,
            ve = e.__morphTargetsArrays,
            ge = e.__morphNormalsArrays,
            ye = e.__webglCustomAttributesList,
            xe = e.__faceArray,
            _e = e.__lineArray,
            we = t.geometry,
            be = we.verticesNeedUpdate,
            Me = we.elementsNeedUpdate,
            Se = we.uvsNeedUpdate,
            Te = we.normalsNeedUpdate,
            Ce = we.tangentsNeedUpdate,
            Ae = we.colorsNeedUpdate,
            Ee = we.morphTargetsNeedUpdate,
            Pe = we.vertices,
            De = e.faces3,
            Re = we.faces,
            Be = we.faceVertexUvs[0],
            Fe = we.faceVertexUvs[1],
            Ue = we.skinIndices,
            Oe = we.skinWeights,
            Ve = we.morphTargets,
            ke = we.morphNormals;
            if (be) {
              for (a = 0, s = De.length; s > a; a++) c = Re[De[a]],
              y = Pe[c.a],
              x = Pe[c.b],
              _ = Pe[c.c],
              he[Z] = y.x,
              he[Z + 1] = y.y,
              he[Z + 2] = y.z,
              he[Z + 3] = x.x,
              he[Z + 4] = x.y,
              he[Z + 5] = x.z,
              he[Z + 6] = _.x,
              he[Z + 7] = _.y,
              he[Z + 8] = _.z,
              Z += 9;
              Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglVertexBuffer),
              Le.bufferData(Le.ARRAY_BUFFER, he, r)
            }
            if (Ee) for (I = 0, G = Ve.length; G > I; I++) {
              for (ae = 0, a = 0, s = De.length; s > a; a++) j = De[a],
              c = Re[j],
              y = Ve[I].vertices[c.a],
              x = Ve[I].vertices[c.b],
              _ = Ve[I].vertices[c.c],
              H = ve[I],
              H[ae] = y.x,
              H[ae + 1] = y.y,
              H[ae + 2] = y.z,
              H[ae + 3] = x.x,
              H[ae + 4] = x.y,
              H[ae + 5] = x.z,
              H[ae + 6] = _.x,
              H[ae + 7] = _.y,
              H[ae + 8] = _.z,
              o.morphNormals &&
              (
                K ? (S = ke[I].faceNormals[j], T = S, C = S) : (X = ke[I].vertexNormals[j], S = X.a, T = X.b, C = X.c),
                W = ge[I],
                W[ae] = S.x,
                W[ae + 1] = S.y,
                W[ae + 2] = S.z,
                W[ae + 3] = T.x,
                W[ae + 4] = T.y,
                W[ae + 5] = T.z,
                W[ae + 6] = C.x,
                W[ae + 7] = C.y,
                W[ae + 8] = C.z
              ),
              ae += 9;
              Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[I]),
              Le.bufferData(Le.ARRAY_BUFFER, ve[I], r),
              o.morphNormals &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[I]),
                Le.bufferData(Le.ARRAY_BUFFER, ge[I], r)
              )
            }
            if (Oe.length) {
              for (a = 0, s = De.length; s > a; a++) c = Re[De[a]],
              D = Oe[c.a],
              L = Oe[c.b],
              R = Oe[c.c],
              me[oe] = D.x,
              me[oe + 1] = D.y,
              me[oe + 2] = D.z,
              me[oe + 3] = D.w,
              me[oe + 4] = L.x,
              me[oe + 5] = L.y,
              me[oe + 6] = L.z,
              me[oe + 7] = L.w,
              me[oe + 8] = R.x,
              me[oe + 9] = R.y,
              me[oe + 10] = R.z,
              me[oe + 11] = R.w,
              B = Ue[c.a],
              F = Ue[c.b],
              U = Ue[c.c],
              pe[oe] = B.x,
              pe[oe + 1] = B.y,
              pe[oe + 2] = B.z,
              pe[oe + 3] = B.w,
              pe[oe + 4] = F.x,
              pe[oe + 5] = F.y,
              pe[oe + 6] = F.z,
              pe[oe + 7] = F.w,
              pe[oe + 8] = U.x,
              pe[oe + 9] = U.y,
              pe[oe + 10] = U.z,
              pe[oe + 11] = U.w,
              oe += 12;
              oe > 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglSkinIndicesBuffer),
                Le.bufferData(Le.ARRAY_BUFFER, pe, r),
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglSkinWeightsBuffer),
                Le.bufferData(Le.ARRAY_BUFFER, me, r)
              )
            }
            if (Ae) {
              for (a = 0, s = De.length; s > a; a++) c = Re[De[a]],
              f = c.vertexColors,
              p = c.color,
              3 === f.length &&
              o.vertexColors === i.VertexColors ? (A = f[0], E = f[1], P = f[2]) : (A = p, E = p, P = p),
              fe[ne] = A.r,
              fe[ne + 1] = A.g,
              fe[ne + 2] = A.b,
              fe[ne + 3] = E.r,
              fe[ne + 4] = E.g,
              fe[ne + 5] = E.b,
              fe[ne + 6] = P.r,
              fe[ne + 7] = P.g,
              fe[ne + 8] = P.b,
              ne += 9;
              ne > 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglColorBuffer),
                Le.bufferData(Le.ARRAY_BUFFER, fe, r)
              )
            }
            if (Ce && we.hasTangents) {
              for (a = 0, s = De.length; s > a; a++) c = Re[De[a]],
              m = c.vertexTangents,
              w = m[0],
              b = m[1],
              M = m[2],
              de[re] = w.x,
              de[re + 1] = w.y,
              de[re + 2] = w.z,
              de[re + 3] = w.w,
              de[re + 4] = b.x,
              de[re + 5] = b.y,
              de[re + 6] = b.z,
              de[re + 7] = b.w,
              de[re + 8] = M.x,
              de[re + 9] = M.y,
              de[re + 10] = M.z,
              de[re + 11] = M.w,
              re += 12;
              Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglTangentBuffer),
              Le.bufferData(Le.ARRAY_BUFFER, de, r)
            }
            if (Te) {
              for (a = 0, s = De.length; s > a; a++) if (
                c = Re[De[a]],
                u = c.vertexNormals,
                d = c.normal,
                3 === u.length &&
                K === !1
              ) for (O = 0; 3 > O; O++) k = u[O],
              ue[te] = k.x,
              ue[te + 1] = k.y,
              ue[te + 2] = k.z,
              te += 3;
               else for (O = 0; 3 > O; O++) ue[te] = d.x,
              ue[te + 1] = d.y,
              ue[te + 2] = d.z,
              te += 3;
              Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglNormalBuffer),
              Le.bufferData(Le.ARRAY_BUFFER, ue, r)
            }
            if (Se && Be) {
              for (a = 0, s = De.length; s > a; a++) if (h = De[a], v = Be[h], void 0 !== v) for (O = 0; 3 > O; O++) z = v[O],
              ce[J] = z.x,
              ce[J + 1] = z.y,
              J += 2;
              J > 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglUVBuffer),
                Le.bufferData(Le.ARRAY_BUFFER, ce, r)
              )
            }
            if (Se && Fe) {
              for (a = 0, s = De.length; s > a; a++) if (h = De[a], g = Fe[h], void 0 !== g) for (O = 0; 3 > O; O++) N = g[O],
              le[$] = N.x,
              le[$ + 1] = N.y,
              $ += 2;
              $ > 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglUV2Buffer),
                Le.bufferData(Le.ARRAY_BUFFER, le, r)
              )
            }
            if (Me) {
              for (a = 0, s = De.length; s > a; a++) xe[ee] = Q,
              xe[ee + 1] = Q + 1,
              xe[ee + 2] = Q + 2,
              ee += 3,
              _e[ie] = Q,
              _e[ie + 1] = Q + 1,
              _e[ie + 2] = Q,
              _e[ie + 3] = Q + 2,
              _e[ie + 4] = Q + 1,
              _e[ie + 5] = Q + 2,
              ie += 6,
              Q += 3;
              Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer),
              Le.bufferData(Le.ELEMENT_ARRAY_BUFFER, xe, r),
              Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer),
              Le.bufferData(Le.ELEMENT_ARRAY_BUFFER, _e, r)
            }
            if (ye) for (O = 0, V = ye.length; V > O; O++) if (Y = ye[O], Y.__original.needsUpdate) {
              if (se = 0, 1 === Y.size) {
                if (void 0 === Y.boundTo || 'vertices' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) c = Re[De[a]],
                Y.array[se] = Y.value[c.a],
                Y.array[se + 1] = Y.value[c.b],
                Y.array[se + 2] = Y.value[c.c],
                se += 3;
                 else if ('faces' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) q = Y.value[De[a]],
                Y.array[se] = q,
                Y.array[se + 1] = q,
                Y.array[se + 2] = q,
                se += 3
              } else if (2 === Y.size) {
                if (void 0 === Y.boundTo || 'vertices' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) c = Re[De[a]],
                y = Y.value[c.a],
                x = Y.value[c.b],
                _ = Y.value[c.c],
                Y.array[se] = y.x,
                Y.array[se + 1] = y.y,
                Y.array[se + 2] = x.x,
                Y.array[se + 3] = x.y,
                Y.array[se + 4] = _.x,
                Y.array[se + 5] = _.y,
                se += 6;
                 else if ('faces' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) q = Y.value[De[a]],
                y = q,
                x = q,
                _ = q,
                Y.array[se] = y.x,
                Y.array[se + 1] = y.y,
                Y.array[se + 2] = x.x,
                Y.array[se + 3] = x.y,
                Y.array[se + 4] = _.x,
                Y.array[se + 5] = _.y,
                se += 6
              } else if (3 === Y.size) {
                var ze;
                if (
                  ze = 'c' === Y.type ? [
                    'r',
                    'g',
                    'b'
                  ] : [
                    'x',
                    'y',
                    'z'
                  ],
                  void 0 === Y.boundTo ||
                  'vertices' === Y.boundTo
                ) for (a = 0, s = De.length; s > a; a++) c = Re[De[a]],
                y = Y.value[c.a],
                x = Y.value[c.b],
                _ = Y.value[c.c],
                Y.array[se] = y[ze[0]],
                Y.array[se + 1] = y[ze[1]],
                Y.array[se + 2] = y[ze[2]],
                Y.array[se + 3] = x[ze[0]],
                Y.array[se + 4] = x[ze[1]],
                Y.array[se + 5] = x[ze[2]],
                Y.array[se + 6] = _[ze[0]],
                Y.array[se + 7] = _[ze[1]],
                Y.array[se + 8] = _[ze[2]],
                se += 9;
                 else if ('faces' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) q = Y.value[De[a]],
                y = q,
                x = q,
                _ = q,
                Y.array[se] = y[ze[0]],
                Y.array[se + 1] = y[ze[1]],
                Y.array[se + 2] = y[ze[2]],
                Y.array[se + 3] = x[ze[0]],
                Y.array[se + 4] = x[ze[1]],
                Y.array[se + 5] = x[ze[2]],
                Y.array[se + 6] = _[ze[0]],
                Y.array[se + 7] = _[ze[1]],
                Y.array[se + 8] = _[ze[2]],
                se += 9;
                 else if ('faceVertices' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) q = Y.value[De[a]],
                y = q[0],
                x = q[1],
                _ = q[2],
                Y.array[se] = y[ze[0]],
                Y.array[se + 1] = y[ze[1]],
                Y.array[se + 2] = y[ze[2]],
                Y.array[se + 3] = x[ze[0]],
                Y.array[se + 4] = x[ze[1]],
                Y.array[se + 5] = x[ze[2]],
                Y.array[se + 6] = _[ze[0]],
                Y.array[se + 7] = _[ze[1]],
                Y.array[se + 8] = _[ze[2]],
                se += 9
              } else if (4 === Y.size) if (void 0 === Y.boundTo || 'vertices' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) c = Re[De[a]],
              y = Y.value[c.a],
              x = Y.value[c.b],
              _ = Y.value[c.c],
              Y.array[se] = y.x,
              Y.array[se + 1] = y.y,
              Y.array[se + 2] = y.z,
              Y.array[se + 3] = y.w,
              Y.array[se + 4] = x.x,
              Y.array[se + 5] = x.y,
              Y.array[se + 6] = x.z,
              Y.array[se + 7] = x.w,
              Y.array[se + 8] = _.x,
              Y.array[se + 9] = _.y,
              Y.array[se + 10] = _.z,
              Y.array[se + 11] = _.w,
              se += 12;
               else if ('faces' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) q = Y.value[De[a]],
              y = q,
              x = q,
              _ = q,
              Y.array[se] = y.x,
              Y.array[se + 1] = y.y,
              Y.array[se + 2] = y.z,
              Y.array[se + 3] = y.w,
              Y.array[se + 4] = x.x,
              Y.array[se + 5] = x.y,
              Y.array[se + 6] = x.z,
              Y.array[se + 7] = x.w,
              Y.array[se + 8] = _.x,
              Y.array[se + 9] = _.y,
              Y.array[se + 10] = _.z,
              Y.array[se + 11] = _.w,
              se += 12;
               else if ('faceVertices' === Y.boundTo) for (a = 0, s = De.length; s > a; a++) q = Y.value[De[a]],
              y = q[0],
              x = q[1],
              _ = q[2],
              Y.array[se] = y.x,
              Y.array[se + 1] = y.y,
              Y.array[se + 2] = y.z,
              Y.array[se + 3] = y.w,
              Y.array[se + 4] = x.x,
              Y.array[se + 5] = x.y,
              Y.array[se + 6] = x.z,
              Y.array[se + 7] = x.w,
              Y.array[se + 8] = _.x,
              Y.array[se + 9] = _.y,
              Y.array[se + 10] = _.z,
              Y.array[se + 11] = _.w,
              se += 12;
              Le.bindBuffer(Le.ARRAY_BUFFER, Y.buffer),
              Le.bufferData(Le.ARRAY_BUFFER, Y.array, r)
            }
            n &&
            (
              delete e.__inittedArrays,
              delete e.__colorArray,
              delete e.__normalArray,
              delete e.__tangentArray,
              delete e.__uvArray,
              delete e.__uv2Array,
              delete e.__faceArray,
              delete e.__vertexArray,
              delete e.__lineArray,
              delete e.__skinIndexArray,
              delete e.__skinWeightArray
            )
          }
        }
        function p(e, t, r, i) {
          for (
            var n = r.attributes,
            o = t.attributes,
            a = t.attributesKeys,
            s = 0,
            h = a.length;
            h > s;
            s++
          ) {
            var c = a[s],
            l = o[c];
            if (l >= 0) {
              var u = n[c];
              if (void 0 !== u) {
                var d = u.itemSize;
                Le.bindBuffer(Le.ARRAY_BUFFER, u.buffer),
                et.enableAttribute(l),
                Le.vertexAttribPointer(l, d, Le.FLOAT, !1, 0, i * d * 4)
              } else void 0 !== e.defaultAttributeValues &&
              (
                2 === e.defaultAttributeValues[c].length ? Le.vertexAttrib2fv(l, e.defaultAttributeValues[c]) : 3 === e.defaultAttributeValues[c].length &&
                Le.vertexAttrib3fv(l, e.defaultAttributeValues[c])
              )
            }
          }
          et.disableUnusedAttributes()
        }
        function m(e, t, r) {
          var i = e.program.attributes;
          if (
            - 1 !== r.morphTargetBase &&
            i.position >= 0 ? (
              Le.bindBuffer(
                Le.ARRAY_BUFFER,
                t.__webglMorphTargetsBuffers[r.morphTargetBase]
              ),
              et.enableAttribute(i.position),
              Le.vertexAttribPointer(i.position, 3, Le.FLOAT, !1, 0, 0)
            ) : i.position >= 0 &&
            (
              Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglVertexBuffer),
              et.enableAttribute(i.position),
              Le.vertexAttribPointer(i.position, 3, Le.FLOAT, !1, 0, 0)
            ),
            r.morphTargetForcedOrder.length
          ) for (
            var n,
            o = 0,
            a = r.morphTargetForcedOrder,
            s = r.morphTargetInfluences;
            o < e.numSupportedMorphTargets &&
            o < a.length;
          ) n = i['morphTarget' + o],
          n >= 0 &&
          (
            Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[a[o]]),
            et.enableAttribute(n),
            Le.vertexAttribPointer(n, 3, Le.FLOAT, !1, 0, 0)
          ),
          n = i['morphNormal' + o],
          n >= 0 &&
          e.morphNormals &&
          (
            Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[a[o]]),
            et.enableAttribute(n),
            Le.vertexAttribPointer(n, 3, Le.FLOAT, !1, 0, 0)
          ),
          r.__webglMorphTargetInfluences[o] = s[a[o]],
          o++;
           else {
            var h = [],
            s = r.morphTargetInfluences,
            c = r.geometry.morphTargets;
            s.length > c.length &&
            (
              console.warn(
                'THREE.WebGLRenderer: Influences array is bigger than morphTargets array.'
              ),
              s.length = c.length
            );
            for (var l = 0, u = s.length; u > l; l++) {
              var d = s[l];
              h.push([d,
              l])
            }
            h.length > e.numSupportedMorphTargets ? (h.sort(y), h.length = e.numSupportedMorphTargets) : h.length > e.numSupportedMorphNormals ? h.sort(y) : 0 === h.length &&
            h.push([0,
            0]);
            for (var n, o = 0, f = e.numSupportedMorphTargets; f > o; o++) if (h[o]) {
              var p = h[o][1];
              n = i['morphTarget' + o],
              n >= 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphTargetsBuffers[p]),
                et.enableAttribute(n),
                Le.vertexAttribPointer(n, 3, Le.FLOAT, !1, 0, 0)
              ),
              n = i['morphNormal' + o],
              n >= 0 &&
              e.morphNormals &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, t.__webglMorphNormalsBuffers[p]),
                et.enableAttribute(n),
                Le.vertexAttribPointer(n, 3, Le.FLOAT, !1, 0, 0)
              ),
              r.__webglMorphTargetInfluences[o] = s[p]
            } else r.__webglMorphTargetInfluences[o] = 0
          }
          null !== e.program.uniforms.morphTargetInfluences &&
          Le.uniform1fv(
            e.program.uniforms.morphTargetInfluences,
            r.__webglMorphTargetInfluences
          )
        }
        function v(e, t) {
          return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
        }
        function g(e, t) {
          return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
        }
        function y(e, t) {
          return t[0] - e[0]
        }
        function x(e) {
          if (e.visible !== !1) {
            if (e instanceof i.Scene || e instanceof i.Group);
             else if (S(e), e instanceof i.Light) Se.push(e);
             else if (e instanceof i.Sprite) Pe.push(e);
             else if (e instanceof i.LensFlare) De.push(e);
             else {
              var t = Te[e.id];
              if (t && (e.frustumCulled === !1 || Xe.intersectsObject(e) === !0)) for (var r = 0, n = t.length; n > r; r++) {
                var o = t[r];
                M(o),
                o.render = !0,
                Re.sortObjects === !0 &&
                (
                  Ye.setFromMatrixPosition(e.matrixWorld),
                  Ye.applyProjection(qe),
                  o.z = Ye.z
                )
              }
            }
            for (var r = 0, n = e.children.length; n > r; r++) x(e.children[r])
          }
        }
        function _(e, t, r, n, o) {
          for (var a, s = 0, h = e.length; h > s; s++) {
            var c = e[s],
            l = c.object,
            u = c.buffer;
            if (Q(l, t), o) a = o;
             else {
              if (a = c.material, !a) continue;
              U(a)
            }
            Re.setMaterialFaces(a),
            u instanceof i.BufferGeometry ? Re.renderBufferDirect(t, r, n, a, u, l) : Re.renderBuffer(t, r, n, a, u, l)
          }
        }
        function w(e, t, r, i, n, o) {
          for (var a, s = 0, h = e.length; h > s; s++) {
            var c = e[s],
            l = c.object;
            if (l.visible) {
              if (o) a = o;
               else {
                if (a = c[t], !a) continue;
                U(a)
              }
              Re.renderImmediateObject(r, i, n, a, l)
            }
          }
        }
        function b(e) {
          var t = e.object,
          r = t.material;
          r.transparent ? (e.transparent = r, e.opaque = null) : (e.opaque = r, e.transparent = null)
        }
        function M(e) {
          var t = e.object,
          r = e.buffer,
          n = t.geometry,
          o = t.material;
          if (o instanceof i.MeshFaceMaterial) {
            var a = n instanceof i.BufferGeometry ? 0 : r.materialIndex;
            o = o.materials[a],
            e.material = o,
            o.transparent ? Ee.push(e) : Ae.push(e)
          } else o &&
          (e.material = o, o.transparent ? Ee.push(e) : Ae.push(e))
        }
        function S(e) {
          void 0 === e.__webglInit &&
          (
            e.__webglInit = !0,
            e._modelViewMatrix = new i.Matrix4,
            e._normalMatrix = new i.Matrix3,
            e.addEventListener('removed', wt)
          );
          var n = e.geometry;
          if (
            void 0 === n ||
            void 0 === n.__webglInit &&
            (
              n.__webglInit = !0,
              n.addEventListener('dispose', bt),
              n instanceof i.BufferGeometry ? Re.info.memory.geometries++ : e instanceof i.Mesh ? C(e, n) : e instanceof i.Line ? void 0 === n.__webglVertexBuffer &&
              (
                r(n),
                s(n, e),
                n.verticesNeedUpdate = !0,
                n.colorsNeedUpdate = !0,
                n.lineDistancesNeedUpdate = !0
              ) : e instanceof i.PointCloud &&
              void 0 === n.__webglVertexBuffer &&
              (t(n), a(n, e), n.verticesNeedUpdate = !0, n.colorsNeedUpdate = !0)
            ),
            void 0 === e.__webglActive
          ) if (e.__webglActive = !0, e instanceof i.Mesh) {
            if (n instanceof i.BufferGeometry) A(Te, n, e);
             else if (n instanceof i.Geometry) for (var o = Lt[n.id], h = 0, c = o.length; c > h; h++) A(Te, o[h], e)
          } else e instanceof i.Line ||
          e instanceof i.PointCloud ? A(Te, n, e) : (
            e instanceof i.ImmediateRenderObject ||
            e.immediateRenderCallback
          ) &&
          E(Ce, e)
        }
        function T(e, t) {
          for (
            var r,
            i,
            n = tt.get('OES_element_index_uint') ? 4294967296 : 65535,
            o = {},
            a = e.morphTargets.length,
            s = e.morphNormals.length,
            h = {},
            c = [],
            l = 0,
            u = e.faces.length;
            u > l;
            l++
          ) {
            var d = e.faces[l],
            f = t ? d.materialIndex : 0;
            f in o ||
            (o[f] = {
              hash: f,
              counter: 0
            }),
            r = o[f].hash + '_' + o[f].counter,
            r in h ||
            (
              i = {
                id: Rt++,
                faces3: [],
                materialIndex: f,
                vertices: 0,
                numMorphTargets: a,
                numMorphNormals: s
              },
              h[r] = i,
              c.push(i)
            ),
            h[r].vertices + 3 > n &&
            (
              o[f].counter += 1,
              r = o[f].hash + '_' + o[f].counter,
              r in h ||
              (
                i = {
                  id: Rt++,
                  faces3: [],
                  materialIndex: f,
                  vertices: 0,
                  numMorphTargets: a,
                  numMorphNormals: s
                },
                h[r] = i,
                c.push(i)
              )
            ),
            h[r].faces3.push(l),
            h[r].vertices += 3
          }
          return c
        }
        function C(e, t) {
          var r = e.material,
          o = !1;
          void 0 !== Lt[t.id] &&
          t.groupsNeedUpdate !== !0 ||
          (
            delete Te[e.id],
            Lt[t.id] = T(t, r instanceof i.MeshFaceMaterial),
            t.groupsNeedUpdate = !1
          );
          for (var a = Lt[t.id], s = 0, c = a.length; c > s; s++) {
            var l = a[s];
            void 0 === l.__webglVertexBuffer ? (
              n(l),
              h(l, e),
              t.verticesNeedUpdate = !0,
              t.morphTargetsNeedUpdate = !0,
              t.elementsNeedUpdate = !0,
              t.uvsNeedUpdate = !0,
              t.normalsNeedUpdate = !0,
              t.tangentsNeedUpdate = !0,
              t.colorsNeedUpdate = !0,
              o = !0
            ) : o = !1,
            (o || void 0 === e.__webglActive) &&
            A(Te, l, e)
          }
          e.__webglActive = !0
        }
        function A(e, t, r) {
          var i = r.id;
          e[i] = e[i] ||
          [],
          e[i].push({
            id: i,
            buffer: t,
            object: r,
            material: null,
            z: 0
          })
        }
        function E(e, t) {
          e.push({
            id: null,
            object: t,
            opaque: null,
            transparent: null,
            z: 0
          })
        }
        function P(e) {
          var t = e.geometry;
          if (t instanceof i.BufferGeometry) for (var r = t.attributes, n = t.attributesKeys, o = 0, a = n.length; a > o; o++) {
            var s = n[o],
            h = r[s],
            l = 'index' === s ? Le.ELEMENT_ARRAY_BUFFER : Le.ARRAY_BUFFER;
            void 0 === h.buffer ? (
              h.buffer = Le.createBuffer(),
              Le.bindBuffer(l, h.buffer),
              Le.bufferData(
                l,
                h.array,
                h instanceof i.DynamicBufferAttribute ? Le.DYNAMIC_DRAW : Le.STATIC_DRAW
              ),
              h.needsUpdate = !1
            ) : h.needsUpdate === !0 &&
            (
              Le.bindBuffer(l, h.buffer),
              void 0 === h.updateRange ||
              - 1 === h.updateRange.count ? Le.bufferSubData(l, 0, h.array) : 0 === h.updateRange.count ? console.error(
                'THREE.WebGLRenderer.updateObject: using updateRange for THREE.DynamicBufferAttribute and marked as needsUpdate but count is 0, ensure you are using set methods or updating manually.'
              ) : (
                Le.bufferSubData(
                  l,
                  h.updateRange.offset * h.array.BYTES_PER_ELEMENT,
                  h.array.subarray(
                    h.updateRange.offset,
                    h.updateRange.offset + h.updateRange.count
                  )
                ),
                h.updateRange.count = 0
              ),
              h.needsUpdate = !1
            )
          } else if (e instanceof i.Mesh) {
            t.groupsNeedUpdate === !0 &&
            C(e, t);
            for (var p = Lt[t.id], o = 0, m = p.length; m > o; o++) {
              var v = p[o],
              g = c(e, v),
              y = g.attributes &&
              D(g);
              (
                t.verticesNeedUpdate ||
                t.morphTargetsNeedUpdate ||
                t.elementsNeedUpdate ||
                t.uvsNeedUpdate ||
                t.normalsNeedUpdate ||
                t.colorsNeedUpdate ||
                t.tangentsNeedUpdate ||
                y
              ) &&
              f(v, e, Le.DYNAMIC_DRAW, !t.dynamic, g)
            }
            t.verticesNeedUpdate = !1,
            t.morphTargetsNeedUpdate = !1,
            t.elementsNeedUpdate = !1,
            t.uvsNeedUpdate = !1,
            t.normalsNeedUpdate = !1,
            t.colorsNeedUpdate = !1,
            t.tangentsNeedUpdate = !1,
            g.attributes &&
            L(g)
          } else if (e instanceof i.Line) {
            var g = c(e, t),
            y = g.attributes &&
            D(g);
            (
              t.verticesNeedUpdate ||
              t.colorsNeedUpdate ||
              t.lineDistancesNeedUpdate ||
              y
            ) &&
            d(t, Le.DYNAMIC_DRAW),
            t.verticesNeedUpdate = !1,
            t.colorsNeedUpdate = !1,
            t.lineDistancesNeedUpdate = !1,
            g.attributes &&
            L(g)
          } else if (e instanceof i.PointCloud) {
            var g = c(e, t),
            y = g.attributes &&
            D(g);
            (t.verticesNeedUpdate || t.colorsNeedUpdate || y) &&
            u(t, Le.DYNAMIC_DRAW, e),
            t.verticesNeedUpdate = !1,
            t.colorsNeedUpdate = !1,
            g.attributes &&
            L(g)
          }
        }
        function D(e) {
          for (var t in e.attributes) if (e.attributes[t].needsUpdate) return !0;
          return !1
        }
        function L(e) {
          for (var t in e.attributes) e.attributes[t].needsUpdate = !1
        }
        function R(e) {
          e instanceof i.Mesh ||
          e instanceof i.PointCloud ||
          e instanceof i.Line ? delete Te[e.id] : (
            e instanceof i.ImmediateRenderObject ||
            e.immediateRenderCallback
          ) &&
          B(Ce, e),
          delete e.__webglInit,
          delete e._modelViewMatrix,
          delete e._normalMatrix,
          delete e.__webglActive
        }
        function B(e, t) {
          for (var r = e.length - 1; r >= 0; r--) e[r].object === t &&
          e.splice(r, 1)
        }
        function F(e, t, r, n) {
          e.addEventListener('dispose', Tt);
          var o = Bt[e.type];
          if (o) {
            var a = i.ShaderLib[o];
            e.__webglShader = {
              uniforms: i.UniformsUtils.clone(a.uniforms),
              vertexShader: a.vertexShader,
              fragmentShader: a.fragmentShader
            }
          } else e.__webglShader = {
            uniforms: e.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader
          };
          var s = ce(t),
          h = le(t),
          c = he(n),
          l = {
            precision: pe,
            supportsVertexTextures: ct,
            map: !!e.map,
            envMap: !!e.envMap,
            envMapMode: e.envMap &&
            e.envMap.mapping,
            lightMap: !!e.lightMap,
            bumpMap: !!e.bumpMap,
            normalMap: !!e.normalMap,
            specularMap: !!e.specularMap,
            alphaMap: !!e.alphaMap,
            combine: e.combine,
            vertexColors: e.vertexColors,
            fog: r,
            useFog: e.fog,
            fogExp: r instanceof i.FogExp2,
            flatShading: e.shading === i.FlatShading,
            sizeAttenuation: e.sizeAttenuation,
            logarithmicDepthBuffer: we,
            skinning: e.skinning,
            maxBones: c,
            useVertexTexture: lt &&
            n &&
            n.skeleton &&
            n.skeleton.useVertexTexture,
            morphTargets: e.morphTargets,
            morphNormals: e.morphNormals,
            maxMorphTargets: Re.maxMorphTargets,
            maxMorphNormals: Re.maxMorphNormals,
            maxDirLights: s.directional,
            maxPointLights: s.point,
            maxSpotLights: s.spot,
            maxHemiLights: s.hemi,
            maxShadows: h,
            shadowMapEnabled: Re.shadowMapEnabled &&
            n.receiveShadow &&
            h > 0,
            shadowMapType: Re.shadowMapType,
            shadowMapDebug: Re.shadowMapDebug,
            shadowMapCascade: Re.shadowMapCascade,
            alphaTest: e.alphaTest,
            metal: e.metal,
            wrapAround: e.wrapAround,
            doubleSided: e.side === i.DoubleSide,
            flipSided: e.side === i.BackSide
          },
          u = [];
          if (
            o ? u.push(o) : (u.push(e.fragmentShader), u.push(e.vertexShader)),
            void 0 !== e.defines
          ) for (var d in e.defines) u.push(d),
          u.push(e.defines[d]);
          for (var d in l) u.push(d),
          u.push(l[d]);
          for (var f, p = u.join(), m = 0, v = Be.length; v > m; m++) {
            var g = Be[m];
            if (g.code === p) {
              f = g,
              f.usedTimes++;
              break
            }
          }
          void 0 === f &&
          (
            f = new i.WebGLProgram(Re, p, e, l),
            Be.push(f),
            Re.info.memory.programs = Be.length
          ),
          e.program = f;
          var y = f.attributes;
          if (e.morphTargets) {
            e.numSupportedMorphTargets = 0;
            for (var x, _ = 'morphTarget', w = 0; w < Re.maxMorphTargets; w++) x = _ + w,
            y[x] >= 0 &&
            e.numSupportedMorphTargets++
          }
          if (e.morphNormals) {
            e.numSupportedMorphNormals = 0;
            var x,
            _ = 'morphNormal';
            for (w = 0; w < Re.maxMorphNormals; w++) x = _ + w,
            y[x] >= 0 &&
            e.numSupportedMorphNormals++
          }
          e.uniformsList = [];
          for (var b in e.__webglShader.uniforms) {
            var M = e.program.uniforms[b];
            M &&
            e.uniformsList.push([e.__webglShader.uniforms[b],
            M])
          }
        }
        function U(e) {
          e.transparent === !0 ? et.setBlending(
            e.blending,
            e.blendEquation,
            e.blendSrc,
            e.blendDst,
            e.blendEquationAlpha,
            e.blendSrcAlpha,
            e.blendDstAlpha
          ) : et.setBlending(i.NoBlending),
          et.setDepthTest(e.depthTest),
          et.setDepthWrite(e.depthWrite),
          et.setColorWrite(e.colorWrite),
          et.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
        }
        function O(e, t, r, n, o) {
          ze = 0,
          n.needsUpdate &&
          (n.program && Dt(n), F(n, t, r, o), n.needsUpdate = !1),
          n.morphTargets &&
          (
            o.__webglMorphTargetInfluences ||
            (
              o.__webglMorphTargetInfluences = new Float32Array(Re.maxMorphTargets)
            )
          );
          var a = !1,
          s = !1,
          h = !1,
          c = n.program,
          l = c.uniforms,
          u = n.__webglShader.uniforms;
          if (
            c.id !== Fe &&
            (Le.useProgram(c.program), Fe = c.id, a = !0, s = !0, h = !0),
            n.id !== Oe &&
            ( - 1 === Oe && (h = !0), Oe = n.id, s = !0),
            (a || e !== ke) &&
            (
              Le.uniformMatrix4fv(l.projectionMatrix, !1, e.projectionMatrix.elements),
              we &&
              Le.uniform1f(l.logDepthBufFC, 2 / (Math.log(e.far + 1) / Math.LN2)),
              e !== ke &&
              (ke = e),
              (
                n instanceof i.ShaderMaterial ||
                n instanceof i.MeshPhongMaterial ||
                n.envMap
              ) &&
              null !== l.cameraPosition &&
              (
                Ye.setFromMatrixPosition(e.matrixWorld),
                Le.uniform3f(l.cameraPosition, Ye.x, Ye.y, Ye.z)
              ),
              (
                n instanceof i.MeshPhongMaterial ||
                n instanceof i.MeshLambertMaterial ||
                n instanceof i.MeshBasicMaterial ||
                n instanceof i.ShaderMaterial ||
                n.skinning
              ) &&
              null !== l.viewMatrix &&
              Le.uniformMatrix4fv(l.viewMatrix, !1, e.matrixWorldInverse.elements)
            ),
            n.skinning
          ) if (
            o.bindMatrix &&
            null !== l.bindMatrix &&
            Le.uniformMatrix4fv(l.bindMatrix, !1, o.bindMatrix.elements),
            o.bindMatrixInverse &&
            null !== l.bindMatrixInverse &&
            Le.uniformMatrix4fv(l.bindMatrixInverse, !1, o.bindMatrixInverse.elements),
            lt &&
            o.skeleton &&
            o.skeleton.useVertexTexture
          ) {
            if (null !== l.boneTexture) {
              var d = Y();
              Le.uniform1i(l.boneTexture, d),
              Re.setTexture(o.skeleton.boneTexture, d)
            }
            null !== l.boneTextureWidth &&
            Le.uniform1i(l.boneTextureWidth, o.skeleton.boneTextureWidth),
            null !== l.boneTextureHeight &&
            Le.uniform1i(l.boneTextureHeight, o.skeleton.boneTextureHeight)
          } else o.skeleton &&
          o.skeleton.boneMatrices &&
          null !== l.boneGlobalMatrices &&
          Le.uniformMatrix4fv(l.boneGlobalMatrices, !1, o.skeleton.boneMatrices);
          return s &&
          (
            r &&
            n.fog &&
            I(u, r),
            (
              n instanceof i.MeshPhongMaterial ||
              n instanceof i.MeshLambertMaterial ||
              n.lights
            ) &&
            (Qe && (h = !0, J(t), Qe = !1), h ? (W(u, Ze), j(u, !0)) : j(u, !1)),
            (
              n instanceof i.MeshBasicMaterial ||
              n instanceof i.MeshLambertMaterial ||
              n instanceof i.MeshPhongMaterial
            ) &&
            V(u, n),
            n instanceof i.LineBasicMaterial ? k(u, n) : n instanceof i.LineDashedMaterial ? (k(u, n), z(u, n)) : n instanceof i.PointCloudMaterial ? N(u, n) : n instanceof i.MeshPhongMaterial ? G(u, n) : n instanceof i.MeshLambertMaterial ? H(u, n) : n instanceof i.MeshDepthMaterial ? (
              u.mNear.value = e.near,
              u.mFar.value = e.far,
              u.opacity.value = n.opacity
            ) : n instanceof i.MeshNormalMaterial &&
            (u.opacity.value = n.opacity),
            o.receiveShadow &&
            !n._shadowPass &&
            X(u, t),
            K(n.uniformsList)
          ),
          q(l, o),
          null !== l.modelMatrix &&
          Le.uniformMatrix4fv(l.modelMatrix, !1, o.matrixWorld.elements),
          c
        }
        function V(e, t) {
          e.opacity.value = t.opacity,
          e.diffuse.value = t.color,
          e.map.value = t.map,
          e.lightMap.value = t.lightMap,
          e.specularMap.value = t.specularMap,
          e.alphaMap.value = t.alphaMap,
          t.bumpMap &&
          (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale),
          t.normalMap &&
          (
            e.normalMap.value = t.normalMap,
            e.normalScale.value.copy(t.normalScale)
          );
          var r;
          if (
            t.map ? r = t.map : t.specularMap ? r = t.specularMap : t.normalMap ? r = t.normalMap : t.bumpMap ? r = t.bumpMap : t.alphaMap &&
            (r = t.alphaMap),
            void 0 !== r
          ) {
            var n = r.offset,
            o = r.repeat;
            e.offsetRepeat.value.set(n.x, n.y, o.x, o.y)
          }
          e.envMap.value = t.envMap,
          e.flipEnvMap.value = t.envMap instanceof i.WebGLRenderTargetCube ? 1 : - 1,
          e.reflectivity.value = t.reflectivity,
          e.refractionRatio.value = t.refractionRatio
        }
        function k(e, t) {
          e.diffuse.value = t.color,
          e.opacity.value = t.opacity
        }
        function z(e, t) {
          e.dashSize.value = t.dashSize,
          e.totalSize.value = t.dashSize + t.gapSize,
          e.scale.value = t.scale;
        }
        function N(e, t) {
          if (
            e.psColor.value = t.color,
            e.opacity.value = t.opacity,
            e.size.value = t.size,
            e.scale.value = ue.height / 2,
            e.map.value = t.map,
            null !== t.map
          ) {
            var r = t.map.offset,
            i = t.map.repeat;
            e.offsetRepeat.value.set(r.x, r.y, i.x, i.y)
          }
        }
        function I(e, t) {
          e.fogColor.value = t.color,
          t instanceof i.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof i.FogExp2 &&
          (e.fogDensity.value = t.density)
        }
        function G(e, t) {
          e.shininess.value = t.shininess,
          e.emissive.value = t.emissive,
          e.specular.value = t.specular,
          t.wrapAround &&
          e.wrapRGB.value.copy(t.wrapRGB)
        }
        function H(e, t) {
          e.emissive.value = t.emissive,
          t.wrapAround &&
          e.wrapRGB.value.copy(t.wrapRGB)
        }
        function W(e, t) {
          e.ambientLightColor.value = t.ambient,
          e.directionalLightColor.value = t.directional.colors,
          e.directionalLightDirection.value = t.directional.positions,
          e.pointLightColor.value = t.point.colors,
          e.pointLightPosition.value = t.point.positions,
          e.pointLightDistance.value = t.point.distances,
          e.pointLightDecay.value = t.point.decays,
          e.spotLightColor.value = t.spot.colors,
          e.spotLightPosition.value = t.spot.positions,
          e.spotLightDistance.value = t.spot.distances,
          e.spotLightDirection.value = t.spot.directions,
          e.spotLightAngleCos.value = t.spot.anglesCos,
          e.spotLightExponent.value = t.spot.exponents,
          e.spotLightDecay.value = t.spot.decays,
          e.hemisphereLightSkyColor.value = t.hemi.skyColors,
          e.hemisphereLightGroundColor.value = t.hemi.groundColors,
          e.hemisphereLightDirection.value = t.hemi.positions
        }
        function j(e, t) {
          e.ambientLightColor.needsUpdate = t,
          e.directionalLightColor.needsUpdate = t,
          e.directionalLightDirection.needsUpdate = t,
          e.pointLightColor.needsUpdate = t,
          e.pointLightPosition.needsUpdate = t,
          e.pointLightDistance.needsUpdate = t,
          e.pointLightDecay.needsUpdate = t,
          e.spotLightColor.needsUpdate = t,
          e.spotLightPosition.needsUpdate = t,
          e.spotLightDistance.needsUpdate = t,
          e.spotLightDirection.needsUpdate = t,
          e.spotLightAngleCos.needsUpdate = t,
          e.spotLightExponent.needsUpdate = t,
          e.spotLightDecay.needsUpdate = t,
          e.hemisphereLightSkyColor.needsUpdate = t,
          e.hemisphereLightGroundColor.needsUpdate = t,
          e.hemisphereLightDirection.needsUpdate = t
        }
        function X(e, t) {
          if (e.shadowMatrix) for (var r = 0, n = 0, o = t.length; o > n; n++) {
            var a = t[n];
            a.castShadow &&
            (
              a instanceof i.SpotLight ||
              a instanceof i.DirectionalLight &&
              !a.shadowCascade
            ) &&
            (
              e.shadowMap.value[r] = a.shadowMap,
              e.shadowMapSize.value[r] = a.shadowMapSize,
              e.shadowMatrix.value[r] = a.shadowMatrix,
              e.shadowDarkness.value[r] = a.shadowDarkness,
              e.shadowBias.value[r] = a.shadowBias,
              r++
            )
          }
        }
        function q(e, t) {
          Le.uniformMatrix4fv(e.modelViewMatrix, !1, t._modelViewMatrix.elements),
          e.normalMatrix &&
          Le.uniformMatrix3fv(e.normalMatrix, !1, t._normalMatrix.elements)
        }
        function Y() {
          var e = ze;
          return e >= ot &&
          i.warn(
            'WebGLRenderer: trying to use ' + e + ' texture units while this GPU supports only ' + ot
          ),
          ze += 1,
          e
        }
        function K(e) {
          for (var t, r, n, o = 0, a = e.length; a > o; o++) {
            var s = e[o][0];
            if (s.needsUpdate !== !1) {
              var h = s.type,
              c = s.value,
              l = e[o][1];
              switch (h) {
                case '1i':
                  Le.uniform1i(l, c);
                  break;
                case '1f':
                  Le.uniform1f(l, c);
                  break;
                case '2f':
                  Le.uniform2f(l, c[0], c[1]);
                  break;
                case '3f':
                  Le.uniform3f(l, c[0], c[1], c[2]);
                  break;
                case '4f':
                  Le.uniform4f(l, c[0], c[1], c[2], c[3]);
                  break;
                case '1iv':
                  Le.uniform1iv(l, c);
                  break;
                case '3iv':
                  Le.uniform3iv(l, c);
                  break;
                case '1fv':
                  Le.uniform1fv(l, c);
                  break;
                case '2fv':
                  Le.uniform2fv(l, c);
                  break;
                case '3fv':
                  Le.uniform3fv(l, c);
                  break;
                case '4fv':
                  Le.uniform4fv(l, c);
                  break;
                case 'Matrix3fv':
                  Le.uniformMatrix3fv(l, !1, c);
                  break;
                case 'Matrix4fv':
                  Le.uniformMatrix4fv(l, !1, c);
                  break;
                case 'i':
                  Le.uniform1i(l, c);
                  break;
                case 'f':
                  Le.uniform1f(l, c);
                  break;
                case 'v2':
                  Le.uniform2f(l, c.x, c.y);
                  break;
                case 'v3':
                  Le.uniform3f(l, c.x, c.y, c.z);
                  break;
                case 'v4':
                  Le.uniform4f(l, c.x, c.y, c.z, c.w);
                  break;
                case 'c':
                  Le.uniform3f(l, c.r, c.g, c.b);
                  break;
                case 'iv1':
                  Le.uniform1iv(l, c);
                  break;
                case 'iv':
                  Le.uniform3iv(l, c);
                  break;
                case 'fv1':
                  Le.uniform1fv(l, c);
                  break;
                case 'fv':
                  Le.uniform3fv(l, c);
                  break;
                case 'v2v':
                  void 0 === s._array &&
                  (s._array = new Float32Array(2 * c.length));
                  for (var u = 0, d = c.length; d > u; u++) n = 2 * u,
                  s._array[n] = c[u].x,
                  s._array[n + 1] = c[u].y;
                  Le.uniform2fv(l, s._array);
                  break;
                case 'v3v':
                  void 0 === s._array &&
                  (s._array = new Float32Array(3 * c.length));
                  for (var u = 0, d = c.length; d > u; u++) n = 3 * u,
                  s._array[n] = c[u].x,
                  s._array[n + 1] = c[u].y,
                  s._array[n + 2] = c[u].z;
                  Le.uniform3fv(l, s._array);
                  break;
                case 'v4v':
                  void 0 === s._array &&
                  (s._array = new Float32Array(4 * c.length));
                  for (var u = 0, d = c.length; d > u; u++) n = 4 * u,
                  s._array[n] = c[u].x,
                  s._array[n + 1] = c[u].y,
                  s._array[n + 2] = c[u].z,
                  s._array[n + 3] = c[u].w;
                  Le.uniform4fv(l, s._array);
                  break;
                case 'm3':
                  Le.uniformMatrix3fv(l, !1, c.elements);
                  break;
                case 'm3v':
                  void 0 === s._array &&
                  (s._array = new Float32Array(9 * c.length));
                  for (var u = 0, d = c.length; d > u; u++) c[u].flattenToArrayOffset(s._array, 9 * u);
                  Le.uniformMatrix3fv(l, !1, s._array);
                  break;
                case 'm4':
                  Le.uniformMatrix4fv(l, !1, c.elements);
                  break;
                case 'm4v':
                  void 0 === s._array &&
                  (s._array = new Float32Array(16 * c.length));
                  for (var u = 0, d = c.length; d > u; u++) c[u].flattenToArrayOffset(s._array, 16 * u);
                  Le.uniformMatrix4fv(l, !1, s._array);
                  break;
                case 't':
                  if (t = c, r = Y(), Le.uniform1i(l, r), !t) continue;
                  t instanceof i.CubeTexture ||
                  t.image instanceof Array &&
                  6 === t.image.length ? te(t, r) : t instanceof i.WebGLRenderTargetCube ? re(t, r) : Re.setTexture(t, r);
                  break;
                case 'tv':
                  void 0 === s._array &&
                  (s._array = []);
                  for (var u = 0, d = s.value.length; d > u; u++) s._array[u] = Y();
                  Le.uniform1iv(l, s._array);
                  for (var u = 0, d = s.value.length; d > u; u++) t = s.value[u],
                  r = s._array[u],
                  t &&
                  Re.setTexture(t, r);
                  break;
                default:
                  i.warn('THREE.WebGLRenderer: Unknown uniform type: ' + h)
              }
            }
          }
        }
        function Q(e, t) {
          e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld),
          e._normalMatrix.getNormalMatrix(e._modelViewMatrix)
        }
        function Z(e, t, r, i) {
          e[t] = r.r * i,
          e[t + 1] = r.g * i,
          e[t + 2] = r.b * i
        }
        function J(e) {
          var t,
          r,
          n,
          o,
          a,
          s,
          h,
          c,
          l = 0,
          u = 0,
          d = 0,
          f = Ze,
          p = f.directional.colors,
          m = f.directional.positions,
          v = f.point.colors,
          g = f.point.positions,
          y = f.point.distances,
          x = f.point.decays,
          _ = f.spot.colors,
          w = f.spot.positions,
          b = f.spot.distances,
          M = f.spot.directions,
          S = f.spot.anglesCos,
          T = f.spot.exponents,
          C = f.spot.decays,
          A = f.hemi.skyColors,
          E = f.hemi.groundColors,
          P = f.hemi.positions,
          D = 0,
          L = 0,
          R = 0,
          B = 0,
          F = 0,
          U = 0,
          O = 0,
          V = 0,
          k = 0,
          z = 0,
          N = 0,
          I = 0;
          for (t = 0, r = e.length; r > t; t++) if (n = e[t], !n.onlyShadow) if (
            o = n.color,
            h = n.intensity,
            c = n.distance,
            n instanceof i.AmbientLight
          ) {
            if (!n.visible) continue;
            l += o.r,
            u += o.g,
            d += o.b
          } else if (n instanceof i.DirectionalLight) {
            if (F += 1, !n.visible) continue;
            Ke.setFromMatrixPosition(n.matrixWorld),
            Ye.setFromMatrixPosition(n.target.matrixWorld),
            Ke.sub(Ye),
            Ke.normalize(),
            k = 3 * D,
            m[k] = Ke.x,
            m[k + 1] = Ke.y,
            m[k + 2] = Ke.z,
            Z(p, k, o, h),
            D += 1
          } else if (n instanceof i.PointLight) {
            if (U += 1, !n.visible) continue;
            z = 3 * L,
            Z(v, z, o, h),
            Ye.setFromMatrixPosition(n.matrixWorld),
            g[z] = Ye.x,
            g[z + 1] = Ye.y,
            g[z + 2] = Ye.z,
            y[L] = c,
            x[L] = 0 === n.distance ? 0 : n.decay,
            L += 1
          } else if (n instanceof i.SpotLight) {
            if (O += 1, !n.visible) continue;
            N = 3 * R,
            Z(_, N, o, h),
            Ke.setFromMatrixPosition(n.matrixWorld),
            w[N] = Ke.x,
            w[N + 1] = Ke.y,
            w[N + 2] = Ke.z,
            b[R] = c,
            Ye.setFromMatrixPosition(n.target.matrixWorld),
            Ke.sub(Ye),
            Ke.normalize(),
            M[N] = Ke.x,
            M[N + 1] = Ke.y,
            M[N + 2] = Ke.z,
            S[R] = Math.cos(n.angle),
            T[R] = n.exponent,
            C[R] = 0 === n.distance ? 0 : n.decay,
            R += 1
          } else if (n instanceof i.HemisphereLight) {
            if (V += 1, !n.visible) continue;
            Ke.setFromMatrixPosition(n.matrixWorld),
            Ke.normalize(),
            I = 3 * B,
            P[I] = Ke.x,
            P[I + 1] = Ke.y,
            P[I + 2] = Ke.z,
            a = n.color,
            s = n.groundColor,
            Z(A, I, a, h),
            Z(E, I, s, h),
            B += 1
          }
          for (t = 3 * D, r = Math.max(p.length, 3 * F); r > t; t++) p[t] = 0;
          for (t = 3 * L, r = Math.max(v.length, 3 * U); r > t; t++) v[t] = 0;
          for (t = 3 * R, r = Math.max(_.length, 3 * O); r > t; t++) _[t] = 0;
          for (t = 3 * B, r = Math.max(A.length, 3 * V); r > t; t++) A[t] = 0;
          for (t = 3 * B, r = Math.max(E.length, 3 * V); r > t; t++) E[t] = 0;
          f.directional.length = D,
          f.point.length = L,
          f.spot.length = R,
          f.hemi.length = B,
          f.ambient[0] = l,
          f.ambient[1] = u,
          f.ambient[2] = d
        }
        function $(e, t, r) {
          var n;
          r ? (
            Le.texParameteri(e, Le.TEXTURE_WRAP_S, se(t.wrapS)),
            Le.texParameteri(e, Le.TEXTURE_WRAP_T, se(t.wrapT)),
            Le.texParameteri(e, Le.TEXTURE_MAG_FILTER, se(t.magFilter)),
            Le.texParameteri(e, Le.TEXTURE_MIN_FILTER, se(t.minFilter))
          ) : (
            Le.texParameteri(e, Le.TEXTURE_WRAP_S, Le.CLAMP_TO_EDGE),
            Le.texParameteri(e, Le.TEXTURE_WRAP_T, Le.CLAMP_TO_EDGE),
            t.wrapS === i.ClampToEdgeWrapping &&
            t.wrapT === i.ClampToEdgeWrapping ||
            i.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( ' + t.sourceFile + ' )'
            ),
            Le.texParameteri(e, Le.TEXTURE_MAG_FILTER, ae(t.magFilter)),
            Le.texParameteri(e, Le.TEXTURE_MIN_FILTER, ae(t.minFilter)),
            t.minFilter !== i.NearestFilter &&
            t.minFilter !== i.LinearFilter &&
            i.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( ' + t.sourceFile + ' )'
            )
          ),
          n = tt.get('EXT_texture_filter_anisotropic'),
          n &&
          t.type !== i.FloatType &&
          t.type !== i.HalfFloatType &&
          (t.anisotropy > 1 || t.__currentAnisotropy) &&
          (
            Le.texParameterf(
              e,
              n.TEXTURE_MAX_ANISOTROPY_EXT,
              Math.min(t.anisotropy, Re.getMaxAnisotropy())
            ),
            t.__currentAnisotropy = t.anisotropy
          )
        }
        function ee(e, t) {
          if (e.width > t || e.height > t) {
            var r = t / Math.max(e.width, e.height),
            n = document.createElement('canvas');
            n.width = Math.floor(e.width * r),
            n.height = Math.floor(e.height * r);
            var o = n.getContext('2d');
            return o.drawImage(e, 0, 0, e.width, e.height, 0, 0, n.width, n.height),
            i.warn(
              'THREE.WebGLRenderer: image is too big (' + e.width + 'x' + e.height + '). Resized to ' + n.width + 'x' + n.height,
              e
            ),
            n
          }
          return e
        }
        function te(e, t) {
          if (6 === e.image.length) if (e.needsUpdate) {
            e.image.__webglTextureCube ||
            (
              e.addEventListener('dispose', Mt),
              e.image.__webglTextureCube = Le.createTexture(),
              Re.info.memory.textures++
            ),
            Le.activeTexture(Le.TEXTURE0 + t),
            Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.image.__webglTextureCube),
            Le.pixelStorei(Le.UNPACK_FLIP_Y_WEBGL, e.flipY);
            for (
              var r = e instanceof i.CompressedTexture,
              n = e.image[0] instanceof i.DataTexture,
              o = [],
              a = 0;
              6 > a;
              a++
            ) !Re.autoScaleCubemaps ||
            r ||
            n ? o[a] = n ? e.image[a].image : e.image[a] : o[a] = ee(e.image[a], ht);
            var s = o[0],
            h = i.Math.isPowerOfTwo(s.width) &&
            i.Math.isPowerOfTwo(s.height),
            c = se(e.format),
            l = se(e.type);
            $(Le.TEXTURE_CUBE_MAP, e, h);
            for (var a = 0; 6 > a; a++) if (r) for (var u, d = o[a].mipmaps, f = 0, p = d.length; p > f; f++) u = d[f],
            e.format !== i.RGBAFormat &&
            e.format !== i.RGBFormat ? mt().indexOf(c) > - 1 ? Le.compressedTexImage2D(
              Le.TEXTURE_CUBE_MAP_POSITIVE_X + a,
              f,
              c,
              u.width,
              u.height,
              0,
              u.data
            ) : i.warn(
              'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()'
            ) : Le.texImage2D(
              Le.TEXTURE_CUBE_MAP_POSITIVE_X + a,
              f,
              c,
              u.width,
              u.height,
              0,
              c,
              l,
              u.data
            );
             else n ? Le.texImage2D(
              Le.TEXTURE_CUBE_MAP_POSITIVE_X + a,
              0,
              c,
              o[a].width,
              o[a].height,
              0,
              c,
              l,
              o[a].data
            ) : Le.texImage2D(Le.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, c, c, l, o[a]);
            e.generateMipmaps &&
            h &&
            Le.generateMipmap(Le.TEXTURE_CUBE_MAP),
            e.needsUpdate = !1,
            e.onUpdate &&
            e.onUpdate()
          } else Le.activeTexture(Le.TEXTURE0 + t),
          Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.image.__webglTextureCube)
        }
        function re(e, t) {
          Le.activeTexture(Le.TEXTURE0 + t),
          Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.__webglTexture)
        }
        function ie(e, t, r) {
          Le.bindFramebuffer(Le.FRAMEBUFFER, e),
          Le.framebufferTexture2D(Le.FRAMEBUFFER, Le.COLOR_ATTACHMENT0, r, t.__webglTexture, 0)
        }
        function ne(e, t) {
          Le.bindRenderbuffer(Le.RENDERBUFFER, e),
          t.depthBuffer &&
          !t.stencilBuffer ? (
            Le.renderbufferStorage(Le.RENDERBUFFER, Le.DEPTH_COMPONENT16, t.width, t.height),
            Le.framebufferRenderbuffer(Le.FRAMEBUFFER, Le.DEPTH_ATTACHMENT, Le.RENDERBUFFER, e)
          ) : t.depthBuffer &&
          t.stencilBuffer ? (
            Le.renderbufferStorage(Le.RENDERBUFFER, Le.DEPTH_STENCIL, t.width, t.height),
            Le.framebufferRenderbuffer(Le.FRAMEBUFFER, Le.DEPTH_STENCIL_ATTACHMENT, Le.RENDERBUFFER, e)
          ) : Le.renderbufferStorage(Le.RENDERBUFFER, Le.RGBA4, t.width, t.height)
        }
        function oe(e) {
          e instanceof i.WebGLRenderTargetCube ? (
            Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.__webglTexture),
            Le.generateMipmap(Le.TEXTURE_CUBE_MAP),
            Le.bindTexture(Le.TEXTURE_CUBE_MAP, null)
          ) : (
            Le.bindTexture(Le.TEXTURE_2D, e.__webglTexture),
            Le.generateMipmap(Le.TEXTURE_2D),
            Le.bindTexture(Le.TEXTURE_2D, null)
          )
        }
        function ae(e) {
          return e === i.NearestFilter ||
          e === i.NearestMipMapNearestFilter ||
          e === i.NearestMipMapLinearFilter ? Le.NEAREST : Le.LINEAR
        }
        function se(e) {
          var t;
          if (e === i.RepeatWrapping) return Le.REPEAT;
          if (e === i.ClampToEdgeWrapping) return Le.CLAMP_TO_EDGE;
          if (e === i.MirroredRepeatWrapping) return Le.MIRRORED_REPEAT;
          if (e === i.NearestFilter) return Le.NEAREST;
          if (e === i.NearestMipMapNearestFilter) return Le.NEAREST_MIPMAP_NEAREST;
          if (e === i.NearestMipMapLinearFilter) return Le.NEAREST_MIPMAP_LINEAR;
          if (e === i.LinearFilter) return Le.LINEAR;
          if (e === i.LinearMipMapNearestFilter) return Le.LINEAR_MIPMAP_NEAREST;
          if (e === i.LinearMipMapLinearFilter) return Le.LINEAR_MIPMAP_LINEAR;
          if (e === i.UnsignedByteType) return Le.UNSIGNED_BYTE;
          if (e === i.UnsignedShort4444Type) return Le.UNSIGNED_SHORT_4_4_4_4;
          if (e === i.UnsignedShort5551Type) return Le.UNSIGNED_SHORT_5_5_5_1;
          if (e === i.UnsignedShort565Type) return Le.UNSIGNED_SHORT_5_6_5;
          if (e === i.ByteType) return Le.BYTE;
          if (e === i.ShortType) return Le.SHORT;
          if (e === i.UnsignedShortType) return Le.UNSIGNED_SHORT;
          if (e === i.IntType) return Le.INT;
          if (e === i.UnsignedIntType) return Le.UNSIGNED_INT;
          if (e === i.FloatType) return Le.FLOAT;
          if (
            t = tt.get('OES_texture_half_float'),
            null !== t &&
            e === i.HalfFloatType
          ) return t.HALF_FLOAT_OES;
          if (e === i.AlphaFormat) return Le.ALPHA;
          if (e === i.RGBFormat) return Le.RGB;
          if (e === i.RGBAFormat) return Le.RGBA;
          if (e === i.LuminanceFormat) return Le.LUMINANCE;
          if (e === i.LuminanceAlphaFormat) return Le.LUMINANCE_ALPHA;
          if (e === i.AddEquation) return Le.FUNC_ADD;
          if (e === i.SubtractEquation) return Le.FUNC_SUBTRACT;
          if (e === i.ReverseSubtractEquation) return Le.FUNC_REVERSE_SUBTRACT;
          if (e === i.ZeroFactor) return Le.ZERO;
          if (e === i.OneFactor) return Le.ONE;
          if (e === i.SrcColorFactor) return Le.SRC_COLOR;
          if (e === i.OneMinusSrcColorFactor) return Le.ONE_MINUS_SRC_COLOR;
          if (e === i.SrcAlphaFactor) return Le.SRC_ALPHA;
          if (e === i.OneMinusSrcAlphaFactor) return Le.ONE_MINUS_SRC_ALPHA;
          if (e === i.DstAlphaFactor) return Le.DST_ALPHA;
          if (e === i.OneMinusDstAlphaFactor) return Le.ONE_MINUS_DST_ALPHA;
          if (e === i.DstColorFactor) return Le.DST_COLOR;
          if (e === i.OneMinusDstColorFactor) return Le.ONE_MINUS_DST_COLOR;
          if (e === i.SrcAlphaSaturateFactor) return Le.SRC_ALPHA_SATURATE;
          if (t = tt.get('WEBGL_compressed_texture_s3tc'), null !== t) {
            if (e === i.RGB_S3TC_DXT1_Format) return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (e === i.RGBA_S3TC_DXT1_Format) return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (e === i.RGBA_S3TC_DXT3_Format) return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (e === i.RGBA_S3TC_DXT5_Format) return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
          }
          if (t = tt.get('WEBGL_compressed_texture_pvrtc'), null !== t) {
            if (e === i.RGB_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (e === i.RGB_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (e === i.RGBA_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (e === i.RGBA_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
          }
          if (t = tt.get('EXT_blend_minmax'), null !== t) {
            if (e === i.MinEquation) return t.MIN_EXT;
            if (e === i.MaxEquation) return t.MAX_EXT
          }
          return 0
        }
        function he(e) {
          if (lt && e && e.skeleton && e.skeleton.useVertexTexture) return 1024;
          var t = Le.getParameter(Le.MAX_VERTEX_UNIFORM_VECTORS),
          r = Math.floor((t - 20) / 4),
          n = r;
          return void 0 !== e &&
          e instanceof i.SkinnedMesh &&
          (
            n = Math.min(e.skeleton.bones.length, n),
            n < e.skeleton.bones.length &&
            i.warn(
              'WebGLRenderer: too many bones - ' + e.skeleton.bones.length + ', this GPU supports just ' + n + ' (try OpenGL instead of ANGLE)'
            )
          ),
          n
        }
        function ce(e) {
          for (var t = 0, r = 0, n = 0, o = 0, a = 0, s = e.length; s > a; a++) {
            var h = e[a];
            h.onlyShadow ||
            h.visible === !1 ||
            (
              h instanceof i.DirectionalLight &&
              t++,
              h instanceof i.PointLight &&
              r++,
              h instanceof i.SpotLight &&
              n++,
              h instanceof i.HemisphereLight &&
              o++
            )
          }
          return {
            directional: t,
            point: r,
            spot: n,
            hemi: o
          }
        }
        function le(e) {
          for (var t = 0, r = 0, n = e.length; n > r; r++) {
            var o = e[r];
            o.castShadow &&
            (
              o instanceof i.SpotLight &&
              t++,
              o instanceof i.DirectionalLight &&
              !o.shadowCascade &&
              t++
            )
          }
          return t
        }
        console.log('THREE.WebGLRenderer', i.REVISION),
        e = e ||
        {
        };
        var ue = void 0 !== e.canvas ? e.canvas : document.createElement('canvas'),
        de = void 0 !== e.context ? e.context : null,
        fe = 1,
        pe = void 0 !== e.precision ? e.precision : 'highp',
        me = void 0 !== e.alpha ? e.alpha : !1,
        ve = void 0 !== e.depth ? e.depth : !0,
        ge = void 0 !== e.stencil ? e.stencil : !0,
        ye = void 0 !== e.antialias ? e.antialias : !1,
        xe = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
        _e = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
        we = void 0 !== e.logarithmicDepthBuffer ? e.logarithmicDepthBuffer : !1,
        be = new i.Color(0),
        Me = 0,
        Se = [],
        Te = {},
        Ce = [],
        Ae = [],
        Ee = [],
        Pe = [],
        De = [];
        this.domElement = ue,
        this.context = null,
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.gammaFactor = 2,
        this.gammaInput = !1,
        this.gammaOutput = !1,
        this.shadowMapEnabled = !1,
        this.shadowMapType = i.PCFShadowMap,
        this.shadowMapCullFace = i.CullFaceFront,
        this.shadowMapDebug = !1,
        this.shadowMapCascade = !1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4,
        this.autoScaleCubemaps = !0,
        this.info = {
          memory: {
            programs: 0,
            geometries: 0,
            textures: 0
          },
          render: {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
          }
        };
        var Le,
        Re = this,
        Be = [],
        Fe = null,
        Ue = null,
        Oe = - 1,
        Ve = '',
        ke = null,
        ze = 0,
        Ne = 0,
        Ie = 0,
        Ge = ue.width,
        He = ue.height,
        We = 0,
        je = 0,
        Xe = new i.Frustum,
        qe = new i.Matrix4,
        Ye = new i.Vector3,
        Ke = new i.Vector3,
        Qe = !0,
        Ze = {
          ambient: [
            0,
            0,
            0
          ],
          directional: {
            length: 0,
            colors: [],
            positions: []
          },
          point: {
            length: 0,
            colors: [],
            positions: [],
            distances: [],
            decays: []
          },
          spot: {
            length: 0,
            colors: [],
            positions: [],
            distances: [],
            directions: [],
            anglesCos: [],
            exponents: [],
            decays: []
          },
          hemi: {
            length: 0,
            skyColors: [],
            groundColors: [],
            positions: []
          }
        };
        try {
          var Je = {
            alpha: me,
            depth: ve,
            stencil: ge,
            antialias: ye,
            premultipliedAlpha: xe,
            preserveDrawingBuffer: _e
          };
          if (
            Le = de ||
            ue.getContext('webgl', Je) ||
            ue.getContext('experimental-webgl', Je),
            null === Le
          ) throw null !== ue.getContext('webgl') ? 'Error creating WebGL context with your selected attributes.' : 'Error creating WebGL context.';
          ue.addEventListener(
            'webglcontextlost',
            function (e) {
              e.preventDefault(),
              nt(),
              it(),
              Te = {}
            },
            !1
          )
        } catch ($e) {
          i.error('THREE.WebGLRenderer: ' + $e)
        }
        var et = new i.WebGLState(Le, se);
        void 0 === Le.getShaderPrecisionFormat &&
        (
          Le.getShaderPrecisionFormat = function () {
            return {
              rangeMin: 1,
              rangeMax: 1,
              precision: 1
            }
          }
        );
        var tt = new i.WebGLExtensions(Le);
        tt.get('OES_texture_float'),
        tt.get('OES_texture_float_linear'),
        tt.get('OES_texture_half_float'),
        tt.get('OES_texture_half_float_linear'),
        tt.get('OES_standard_derivatives'),
        we &&
        tt.get('EXT_frag_depth');
        var rt = function (e, t, r, i) {
          xe === !0 &&
          (e *= i, t *= i, r *= i),
          Le.clearColor(e, t, r, i)
        },
        it = function () {
          Le.clearColor(0, 0, 0, 1),
          Le.clearDepth(1),
          Le.clearStencil(0),
          Le.enable(Le.DEPTH_TEST),
          Le.depthFunc(Le.LEQUAL),
          Le.frontFace(Le.CCW),
          Le.cullFace(Le.BACK),
          Le.enable(Le.CULL_FACE),
          Le.enable(Le.BLEND),
          Le.blendEquation(Le.FUNC_ADD),
          Le.blendFunc(Le.SRC_ALPHA, Le.ONE_MINUS_SRC_ALPHA),
          Le.viewport(Ne, Ie, Ge, He),
          rt(be.r, be.g, be.b, Me)
        },
        nt = function () {
          Fe = null,
          ke = null,
          Ve = '',
          Oe = - 1,
          Qe = !0,
          et.reset()
        };
        it(),
        this.context = Le,
        this.state = et;
        var ot = Le.getParameter(Le.MAX_TEXTURE_IMAGE_UNITS),
        at = Le.getParameter(Le.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
        st = Le.getParameter(Le.MAX_TEXTURE_SIZE),
        ht = Le.getParameter(Le.MAX_CUBE_MAP_TEXTURE_SIZE),
        ct = at > 0,
        lt = ct &&
        tt.get('OES_texture_float'),
        ut = Le.getShaderPrecisionFormat(Le.VERTEX_SHADER, Le.HIGH_FLOAT),
        dt = Le.getShaderPrecisionFormat(Le.VERTEX_SHADER, Le.MEDIUM_FLOAT),
        ft = Le.getShaderPrecisionFormat(Le.FRAGMENT_SHADER, Le.HIGH_FLOAT),
        pt = Le.getShaderPrecisionFormat(Le.FRAGMENT_SHADER, Le.MEDIUM_FLOAT),
        mt = function () {
          var e;
          return function () {
            if (void 0 !== e) return e;
            if (
              e = [],
              tt.get('WEBGL_compressed_texture_pvrtc') ||
              tt.get('WEBGL_compressed_texture_s3tc')
            ) for (
              var t = Le.getParameter(Le.COMPRESSED_TEXTURE_FORMATS),
              r = 0;
              r < t.length;
              r++
            ) e.push(t[r]);
            return e
          }
        }(),
        vt = ut.precision > 0 &&
        ft.precision > 0,
        gt = dt.precision > 0 &&
        pt.precision > 0;
        'highp' !== pe ||
        vt ||
        (
          gt ? (
            pe = 'mediump',
            i.warn('THREE.WebGLRenderer: highp not supported, using mediump.')
          ) : (
            pe = 'lowp',
            i.warn(
              'THREE.WebGLRenderer: highp and mediump not supported, using lowp.'
            )
          )
        ),
        'mediump' !== pe ||
        gt ||
        (
          pe = 'lowp',
          i.warn('THREE.WebGLRenderer: mediump not supported, using lowp.')
        );
        var yt = new i.ShadowMapPlugin(this, Se, Te, Ce),
        xt = new i.SpritePlugin(this, Pe),
        _t = new i.LensFlarePlugin(this, De);
        this.getContext = function () {
          return Le
        },
        this.forceContextLoss = function () {
          tt.get('WEBGL_lose_context').loseContext()
        },
        this.supportsVertexTextures = function () {
          return ct
        },
        this.supportsFloatTextures = function () {
          return tt.get('OES_texture_float')
        },
        this.supportsHalfFloatTextures = function () {
          return tt.get('OES_texture_half_float')
        },
        this.supportsStandardDerivatives = function () {
          return tt.get('OES_standard_derivatives')
        },
        this.supportsCompressedTextureS3TC = function () {
          return tt.get('WEBGL_compressed_texture_s3tc')
        },
        this.supportsCompressedTexturePVRTC = function () {
          return tt.get('WEBGL_compressed_texture_pvrtc')
        },
        this.supportsBlendMinMax = function () {
          return tt.get('EXT_blend_minmax')
        },
        this.getMaxAnisotropy = function () {
          var e;
          return function () {
            if (void 0 !== e) return e;
            var t = tt.get('EXT_texture_filter_anisotropic');
            return e = null !== t ? Le.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
          }
        }(),
        this.getPrecision = function () {
          return pe
        },
        this.getPixelRatio = function () {
          return fe
        },
        this.setPixelRatio = function (e) {
          fe = e
        },
        this.setSize = function (e, t, r) {
          ue.width = e * fe,
          ue.height = t * fe,
          r !== !1 &&
          (ue.style.width = e + 'px', ue.style.height = t + 'px'),
          this.setViewport(0, 0, e, t)
        },
        this.setViewport = function (e, t, r, i) {
          Ne = e * fe,
          Ie = t * fe,
          Ge = r * fe,
          He = i * fe,
          Le.viewport(Ne, Ie, Ge, He)
        },
        this.setScissor = function (e, t, r, i) {
          Le.scissor(e * fe, t * fe, r * fe, i * fe)
        },
        this.enableScissorTest = function (e) {
          e ? Le.enable(Le.SCISSOR_TEST) : Le.disable(Le.SCISSOR_TEST)
        },
        this.getClearColor = function () {
          return be
        },
        this.setClearColor = function (e, t) {
          be.set(e),
          Me = void 0 !== t ? t : 1,
          rt(be.r, be.g, be.b, Me)
        },
        this.getClearAlpha = function () {
          return Me
        },
        this.setClearAlpha = function (e) {
          Me = e,
          rt(be.r, be.g, be.b, Me)
        },
        this.clear = function (e, t, r) {
          var i = 0;
          (void 0 === e || e) &&
          (i |= Le.COLOR_BUFFER_BIT),
          (void 0 === t || t) &&
          (i |= Le.DEPTH_BUFFER_BIT),
          (void 0 === r || r) &&
          (i |= Le.STENCIL_BUFFER_BIT),
          Le.clear(i)
        },
        this.clearColor = function () {
          Le.clear(Le.COLOR_BUFFER_BIT)
        },
        this.clearDepth = function () {
          Le.clear(Le.DEPTH_BUFFER_BIT)
        },
        this.clearStencil = function () {
          Le.clear(Le.STENCIL_BUFFER_BIT)
        },
        this.clearTarget = function (e, t, r, i) {
          this.setRenderTarget(e),
          this.clear(t, r, i)
        },
        this.resetGLState = nt;
        var wt = function (e) {
          var t = e.target;
          t.traverse(function (e) {
            e.removeEventListener('remove', wt),
            R(e)
          })
        },
        bt = function (e) {
          var t = e.target;
          t.removeEventListener('dispose', bt),
          At(t)
        },
        Mt = function (e) {
          var t = e.target;
          t.removeEventListener('dispose', Mt),
          Et(t),
          Re.info.memory.textures--
        },
        St = function (e) {
          var t = e.target;
          t.removeEventListener('dispose', St),
          Pt(t),
          Re.info.memory.textures--
        },
        Tt = function (e) {
          var t = e.target;
          t.removeEventListener('dispose', Tt),
          Dt(t)
        },
        Ct = function (e) {
          for (
            var t = [
              '__webglVertexBuffer',
              '__webglNormalBuffer',
              '__webglTangentBuffer',
              '__webglColorBuffer',
              '__webglUVBuffer',
              '__webglUV2Buffer',
              '__webglSkinIndicesBuffer',
              '__webglSkinWeightsBuffer',
              '__webglFaceBuffer',
              '__webglLineBuffer',
              '__webglLineDistanceBuffer'
            ],
            r = 0,
            i = t.length;
            i > r;
            r++
          ) {
            var n = t[r];
            void 0 !== e[n] &&
            (Le.deleteBuffer(e[n]), delete e[n])
          }
          if (void 0 !== e.__webglCustomAttributesList) {
            for (var n in e.__webglCustomAttributesList) Le.deleteBuffer(e.__webglCustomAttributesList[n].buffer);
            delete e.__webglCustomAttributesList
          }
          Re.info.memory.geometries--
        },
        At = function (e) {
          if (delete e.__webglInit, e instanceof i.BufferGeometry) {
            for (var t in e.attributes) {
              var r = e.attributes[t];
              void 0 !== r.buffer &&
              (Le.deleteBuffer(r.buffer), delete r.buffer)
            }
            Re.info.memory.geometries--
          } else {
            var n = Lt[e.id];
            if (void 0 !== n) {
              for (var o = 0, a = n.length; a > o; o++) {
                var s = n[o];
                if (void 0 !== s.numMorphTargets) {
                  for (var h = 0, c = s.numMorphTargets; c > h; h++) Le.deleteBuffer(s.__webglMorphTargetsBuffers[h]);
                  delete s.__webglMorphTargetsBuffers
                }
                if (void 0 !== s.numMorphNormals) {
                  for (var h = 0, c = s.numMorphNormals; c > h; h++) Le.deleteBuffer(s.__webglMorphNormalsBuffers[h]);
                  delete s.__webglMorphNormalsBuffers
                }
                Ct(s)
              }
              delete Lt[e.id]
            } else Ct(e)
          }
          Ve = ''
        },
        Et = function (e) {
          if (e.image && e.image.__webglTextureCube) Le.deleteTexture(e.image.__webglTextureCube),
          delete e.image.__webglTextureCube;
           else {
            if (void 0 === e.__webglInit) return;
            Le.deleteTexture(e.__webglTexture),
            delete e.__webglTexture,
            delete e.__webglInit
          }
        },
        Pt = function (e) {
          if (e && void 0 !== e.__webglTexture) {
            if (
              Le.deleteTexture(e.__webglTexture),
              delete e.__webglTexture,
              e instanceof i.WebGLRenderTargetCube
            ) for (var t = 0; 6 > t; t++) Le.deleteFramebuffer(e.__webglFramebuffer[t]),
            Le.deleteRenderbuffer(e.__webglRenderbuffer[t]);
             else Le.deleteFramebuffer(e.__webglFramebuffer),
            Le.deleteRenderbuffer(e.__webglRenderbuffer);
            delete e.__webglFramebuffer,
            delete e.__webglRenderbuffer
          }
        },
        Dt = function (e) {
          var t = e.program.program;
          if (void 0 !== t) {
            e.program = void 0;
            var r,
            i,
            n,
            o = !1;
            for (r = 0, i = Be.length; i > r; r++) if (n = Be[r], n.program === t) {
              n.usedTimes--,
              0 === n.usedTimes &&
              (o = !0);
              break
            }
            if (o === !0) {
              var a = [];
              for (r = 0, i = Be.length; i > r; r++) n = Be[r],
              n.program !== t &&
              a.push(n);
              Be = a,
              Le.deleteProgram(t),
              Re.info.memory.programs--
            }
          }
        };
        this.renderBufferImmediate = function (e, t, r) {
          if (
            et.initAttributes(),
            e.hasPositions &&
            !e.__webglVertexBuffer &&
            (e.__webglVertexBuffer = Le.createBuffer()),
            e.hasNormals &&
            !e.__webglNormalBuffer &&
            (e.__webglNormalBuffer = Le.createBuffer()),
            e.hasUvs &&
            !e.__webglUvBuffer &&
            (e.__webglUvBuffer = Le.createBuffer()),
            e.hasColors &&
            !e.__webglColorBuffer &&
            (e.__webglColorBuffer = Le.createBuffer()),
            e.hasPositions &&
            (
              Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglVertexBuffer),
              Le.bufferData(Le.ARRAY_BUFFER, e.positionArray, Le.DYNAMIC_DRAW),
              et.enableAttribute(t.attributes.position),
              Le.vertexAttribPointer(t.attributes.position, 3, Le.FLOAT, !1, 0, 0)
            ),
            e.hasNormals
          ) {
            if (
              Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglNormalBuffer),
              r instanceof i.MeshPhongMaterial == !1 &&
              r.shading === i.FlatShading
            ) {
              var n,
              o,
              a,
              s,
              h,
              c,
              l,
              u,
              d,
              f,
              p,
              m,
              v,
              g,
              y = 3 * e.count;
              for (g = 0; y > g; g += 9) v = e.normalArray,
              s = v[g],
              l = v[g + 1],
              f = v[g + 2],
              h = v[g + 3],
              u = v[g + 4],
              p = v[g + 5],
              c = v[g + 6],
              d = v[g + 7],
              m = v[g + 8],
              n = (s + h + c) / 3,
              o = (l + u + d) / 3,
              a = (f + p + m) / 3,
              v[g] = n,
              v[g + 1] = o,
              v[g + 2] = a,
              v[g + 3] = n,
              v[g + 4] = o,
              v[g + 5] = a,
              v[g + 6] = n,
              v[g + 7] = o,
              v[g + 8] = a
            }
            Le.bufferData(Le.ARRAY_BUFFER, e.normalArray, Le.DYNAMIC_DRAW),
            et.enableAttribute(t.attributes.normal),
            Le.vertexAttribPointer(t.attributes.normal, 3, Le.FLOAT, !1, 0, 0)
          }
          e.hasUvs &&
          r.map &&
          (
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglUvBuffer),
            Le.bufferData(Le.ARRAY_BUFFER, e.uvArray, Le.DYNAMIC_DRAW),
            et.enableAttribute(t.attributes.uv),
            Le.vertexAttribPointer(t.attributes.uv, 2, Le.FLOAT, !1, 0, 0)
          ),
          e.hasColors &&
          r.vertexColors !== i.NoColors &&
          (
            Le.bindBuffer(Le.ARRAY_BUFFER, e.__webglColorBuffer),
            Le.bufferData(Le.ARRAY_BUFFER, e.colorArray, Le.DYNAMIC_DRAW),
            et.enableAttribute(t.attributes.color),
            Le.vertexAttribPointer(t.attributes.color, 3, Le.FLOAT, !1, 0, 0)
          ),
          et.disableUnusedAttributes(),
          Le.drawArrays(Le.TRIANGLES, 0, e.count),
          e.count = 0
        },
        this.renderBufferDirect = function (e, t, r, n, o, a) {
          if (n.visible !== !1) {
            P(a);
            var s = O(e, t, r, n, a),
            h = !1,
            c = n.wireframe ? 1 : 0,
            l = 'direct_' + o.id + '_' + s.id + '_' + c;
            if (l !== Ve && (Ve = l, h = !0), h && et.initAttributes(), a instanceof i.Mesh) {
              var u = n.wireframe === !0 ? Le.LINES : Le.TRIANGLES,
              d = o.attributes.index;
              if (d) {
                var f,
                m;
                d.array instanceof Uint32Array &&
                tt.get('OES_element_index_uint') ? (f = Le.UNSIGNED_INT, m = 4) : (f = Le.UNSIGNED_SHORT, m = 2);
                var v = o.offsets;
                if (0 === v.length) h &&
                (p(n, s, o, 0), Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, d.buffer)),
                Le.drawElements(u, d.array.length, f, 0),
                Re.info.render.calls++,
                Re.info.render.vertices += d.array.length,
                Re.info.render.faces += d.array.length / 3;
                 else {
                  h = !0;
                  for (var g = 0, y = v.length; y > g; g++) {
                    var x = v[g].index;
                    h &&
                    (p(n, s, o, x), Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, d.buffer)),
                    Le.drawElements(u, v[g].count, f, v[g].start * m),
                    Re.info.render.calls++,
                    Re.info.render.vertices += v[g].count,
                    Re.info.render.faces += v[g].count / 3
                  }
                }
              } else {
                h &&
                p(n, s, o, 0);
                var _ = o.attributes.position;
                Le.drawArrays(u, 0, _.array.length / _.itemSize),
                Re.info.render.calls++,
                Re.info.render.vertices += _.array.length / _.itemSize,
                Re.info.render.faces += _.array.length / (3 * _.itemSize)
              }
            } else if (a instanceof i.PointCloud) {
              var u = Le.POINTS,
              d = o.attributes.index;
              if (d) {
                var f,
                m;
                d.array instanceof Uint32Array &&
                tt.get('OES_element_index_uint') ? (f = Le.UNSIGNED_INT, m = 4) : (f = Le.UNSIGNED_SHORT, m = 2);
                var v = o.offsets;
                if (0 === v.length) h &&
                (p(n, s, o, 0), Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, d.buffer)),
                Le.drawElements(u, d.array.length, f, 0),
                Re.info.render.calls++,
                Re.info.render.points += d.array.length;
                 else {
                  v.length > 1 &&
                  (h = !0);
                  for (var g = 0, y = v.length; y > g; g++) {
                    var x = v[g].index;
                    h &&
                    (p(n, s, o, x), Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, d.buffer)),
                    Le.drawElements(u, v[g].count, f, v[g].start * m),
                    Re.info.render.calls++,
                    Re.info.render.points += v[g].count
                  }
                }
              } else {
                h &&
                p(n, s, o, 0);
                var _ = o.attributes.position,
                v = o.offsets;
                if (0 === v.length) Le.drawArrays(u, 0, _.array.length / 3),
                Re.info.render.calls++,
                Re.info.render.points += _.array.length / 3;
                 else for (var g = 0, y = v.length; y > g; g++) Le.drawArrays(u, v[g].index, v[g].count),
                Re.info.render.calls++,
                Re.info.render.points += v[g].count
              }
            } else if (a instanceof i.Line) {
              var u = a.mode === i.LineStrip ? Le.LINE_STRIP : Le.LINES;
              et.setLineWidth(n.linewidth * fe);
              var d = o.attributes.index;
              if (d) {
                var f,
                m;
                d.array instanceof Uint32Array ? (f = Le.UNSIGNED_INT, m = 4) : (f = Le.UNSIGNED_SHORT, m = 2);
                var v = o.offsets;
                if (0 === v.length) h &&
                (p(n, s, o, 0), Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, d.buffer)),
                Le.drawElements(u, d.array.length, f, 0),
                Re.info.render.calls++,
                Re.info.render.vertices += d.array.length;
                 else {
                  v.length > 1 &&
                  (h = !0);
                  for (var g = 0, y = v.length; y > g; g++) {
                    var x = v[g].index;
                    h &&
                    (p(n, s, o, x), Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, d.buffer)),
                    Le.drawElements(u, v[g].count, f, v[g].start * m),
                    Re.info.render.calls++,
                    Re.info.render.vertices += v[g].count
                  }
                }
              } else {
                h &&
                p(n, s, o, 0);
                var _ = o.attributes.position,
                v = o.offsets;
                if (0 === v.length) Le.drawArrays(u, 0, _.array.length / 3),
                Re.info.render.calls++,
                Re.info.render.vertices += _.array.length / 3;
                 else for (var g = 0, y = v.length; y > g; g++) Le.drawArrays(u, v[g].index, v[g].count),
                Re.info.render.calls++,
                Re.info.render.vertices += v[g].count
              }
            }
          }
        },
        this.renderBuffer = function (e, t, r, n, o, a) {
          if (n.visible !== !1) {
            P(a);
            var s = O(e, t, r, n, a),
            h = s.attributes,
            c = !1,
            l = n.wireframe ? 1 : 0,
            u = o.id + '_' + s.id + '_' + l;
            if (
              u !== Ve &&
              (Ve = u, c = !0),
              c &&
              et.initAttributes(),
              !n.morphTargets &&
              h.position >= 0 ? c &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglVertexBuffer),
                et.enableAttribute(h.position),
                Le.vertexAttribPointer(h.position, 3, Le.FLOAT, !1, 0, 0)
              ) : a.morphTargetBase &&
              m(n, o, a),
              c
            ) {
              if (o.__webglCustomAttributesList) for (var d = 0, f = o.__webglCustomAttributesList.length; f > d; d++) {
                var p = o.__webglCustomAttributesList[d];
                h[p.buffer.belongsToAttribute] >= 0 &&
                (
                  Le.bindBuffer(Le.ARRAY_BUFFER, p.buffer),
                  et.enableAttribute(h[p.buffer.belongsToAttribute]),
                  Le.vertexAttribPointer(h[p.buffer.belongsToAttribute], p.size, Le.FLOAT, !1, 0, 0)
                )
              }
              h.color >= 0 &&
              (
                a.geometry.colors.length > 0 ||
                a.geometry.faces.length > 0 ? (
                  Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglColorBuffer),
                  et.enableAttribute(h.color),
                  Le.vertexAttribPointer(h.color, 3, Le.FLOAT, !1, 0, 0)
                ) : void 0 !== n.defaultAttributeValues &&
                Le.vertexAttrib3fv(h.color, n.defaultAttributeValues.color)
              ),
              h.normal >= 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglNormalBuffer),
                et.enableAttribute(h.normal),
                Le.vertexAttribPointer(h.normal, 3, Le.FLOAT, !1, 0, 0)
              ),
              h.tangent >= 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglTangentBuffer),
                et.enableAttribute(h.tangent),
                Le.vertexAttribPointer(h.tangent, 4, Le.FLOAT, !1, 0, 0)
              ),
              h.uv >= 0 &&
              (
                a.geometry.faceVertexUvs[0] ? (
                  Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglUVBuffer),
                  et.enableAttribute(h.uv),
                  Le.vertexAttribPointer(h.uv, 2, Le.FLOAT, !1, 0, 0)
                ) : void 0 !== n.defaultAttributeValues &&
                Le.vertexAttrib2fv(h.uv, n.defaultAttributeValues.uv)
              ),
              h.uv2 >= 0 &&
              (
                a.geometry.faceVertexUvs[1] ? (
                  Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglUV2Buffer),
                  et.enableAttribute(h.uv2),
                  Le.vertexAttribPointer(h.uv2, 2, Le.FLOAT, !1, 0, 0)
                ) : void 0 !== n.defaultAttributeValues &&
                Le.vertexAttrib2fv(h.uv2, n.defaultAttributeValues.uv2)
              ),
              n.skinning &&
              h.skinIndex >= 0 &&
              h.skinWeight >= 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglSkinIndicesBuffer),
                et.enableAttribute(h.skinIndex),
                Le.vertexAttribPointer(h.skinIndex, 4, Le.FLOAT, !1, 0, 0),
                Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglSkinWeightsBuffer),
                et.enableAttribute(h.skinWeight),
                Le.vertexAttribPointer(h.skinWeight, 4, Le.FLOAT, !1, 0, 0)
              ),
              h.lineDistance >= 0 &&
              (
                Le.bindBuffer(Le.ARRAY_BUFFER, o.__webglLineDistanceBuffer),
                et.enableAttribute(h.lineDistance),
                Le.vertexAttribPointer(h.lineDistance, 1, Le.FLOAT, !1, 0, 0)
              )
            }
            if (et.disableUnusedAttributes(), a instanceof i.Mesh) {
              var v = o.__typeArray === Uint32Array ? Le.UNSIGNED_INT : Le.UNSIGNED_SHORT;
              n.wireframe ? (
                et.setLineWidth(n.wireframeLinewidth * fe),
                c &&
                Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, o.__webglLineBuffer),
                Le.drawElements(Le.LINES, o.__webglLineCount, v, 0)
              ) : (
                c &&
                Le.bindBuffer(Le.ELEMENT_ARRAY_BUFFER, o.__webglFaceBuffer),
                Le.drawElements(Le.TRIANGLES, o.__webglFaceCount, v, 0)
              ),
              Re.info.render.calls++,
              Re.info.render.vertices += o.__webglFaceCount,
              Re.info.render.faces += o.__webglFaceCount / 3
            } else if (a instanceof i.Line) {
              var g = a.mode === i.LineStrip ? Le.LINE_STRIP : Le.LINES;
              et.setLineWidth(n.linewidth * fe),
              Le.drawArrays(g, 0, o.__webglLineCount),
              Re.info.render.calls++
            } else a instanceof i.PointCloud &&
            (
              Le.drawArrays(Le.POINTS, 0, o.__webglParticleCount),
              Re.info.render.calls++,
              Re.info.render.points += o.__webglParticleCount
            )
          }
        },
        this.render = function (e, t, r, n) {
          if (t instanceof i.Camera == !1) return void i.error(
            'THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.'
          );
          var o = e.fog;
          Ve = '',
          Oe = - 1,
          ke = null,
          Qe = !0,
          e.autoUpdate === !0 &&
          e.updateMatrixWorld(),
          void 0 === t.parent &&
          t.updateMatrixWorld(),
          e.traverse(function (e) {
            e instanceof i.SkinnedMesh &&
            e.skeleton.update()
          }),
          t.matrixWorldInverse.getInverse(t.matrixWorld),
          qe.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
          Xe.setFromMatrix(qe),
          Se.length = 0,
          Ae.length = 0,
          Ee.length = 0,
          Pe.length = 0,
          De.length = 0,
          x(e),
          Re.sortObjects === !0 &&
          (Ae.sort(v), Ee.sort(g)),
          yt.render(e, t),
          Re.info.render.calls = 0,
          Re.info.render.vertices = 0,
          Re.info.render.faces = 0,
          Re.info.render.points = 0,
          this.setRenderTarget(r),
          (this.autoClear || n) &&
          this.clear(
            this.autoClearColor,
            this.autoClearDepth,
            this.autoClearStencil
          );
          for (var a = 0, s = Ce.length; s > a; a++) {
            var h = Ce[a],
            c = h.object;
            c.visible &&
            (Q(c, t), b(h))
          }
          if (e.overrideMaterial) {
            var l = e.overrideMaterial;
            U(l),
            _(Ae, t, Se, o, l),
            _(Ee, t, Se, o, l),
            w(Ce, '', t, Se, o, l)
          } else et.setBlending(i.NoBlending),
          _(Ae, t, Se, o, null),
          w(Ce, 'opaque', t, Se, o, null),
          _(Ee, t, Se, o, null),
          w(Ce, 'transparent', t, Se, o, null);
          xt.render(e, t),
          _t.render(e, t, We, je),
          r &&
          r.generateMipmaps &&
          r.minFilter !== i.NearestFilter &&
          r.minFilter !== i.LinearFilter &&
          oe(r),
          et.setDepthTest(!0),
          et.setDepthWrite(!0),
          et.setColorWrite(!0)
        },
        this.renderImmediateObject = function (e, t, r, i, n) {
          var o = O(e, t, r, i, n);
          Ve = '',
          Re.setMaterialFaces(i),
          n.immediateRenderCallback ? n.immediateRenderCallback(o, Le, Xe) : n.render(function (e) {
            Re.renderBufferImmediate(e, o, i)
          })
        };
        var Lt = {},
        Rt = 0,
        Bt = {
          MeshDepthMaterial: 'depth',
          MeshNormalMaterial: 'normal',
          MeshBasicMaterial: 'basic',
          MeshLambertMaterial: 'lambert',
          MeshPhongMaterial: 'phong',
          LineBasicMaterial: 'basic',
          LineDashedMaterial: 'dashed',
          PointCloudMaterial: 'particle_basic'
        };
        this.setFaceCulling = function (e, t) {
          e === i.CullFaceNone ? Le.disable(Le.CULL_FACE) : (
            t === i.FrontFaceDirectionCW ? Le.frontFace(Le.CW) : Le.frontFace(Le.CCW),
            e === i.CullFaceBack ? Le.cullFace(Le.BACK) : e === i.CullFaceFront ? Le.cullFace(Le.FRONT) : Le.cullFace(Le.FRONT_AND_BACK),
            Le.enable(Le.CULL_FACE)
          )
        },
        this.setMaterialFaces = function (e) {
          et.setDoubleSided(e.side === i.DoubleSide),
          et.setFlipSided(e.side === i.BackSide)
        },
        this.uploadTexture = function (e) {
          void 0 === e.__webglInit &&
          (
            e.__webglInit = !0,
            e.addEventListener('dispose', Mt),
            e.__webglTexture = Le.createTexture(),
            Re.info.memory.textures++
          ),
          Le.bindTexture(Le.TEXTURE_2D, e.__webglTexture),
          Le.pixelStorei(Le.UNPACK_FLIP_Y_WEBGL, e.flipY),
          Le.pixelStorei(Le.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha),
          Le.pixelStorei(Le.UNPACK_ALIGNMENT, e.unpackAlignment),
          e.image = ee(e.image, st);
          var t = e.image,
          r = i.Math.isPowerOfTwo(t.width) &&
          i.Math.isPowerOfTwo(t.height),
          n = se(e.format),
          o = se(e.type);
          $(Le.TEXTURE_2D, e, r);
          var a,
          s = e.mipmaps;
          if (e instanceof i.DataTexture) if (s.length > 0 && r) {
            for (var h = 0, c = s.length; c > h; h++) a = s[h],
            Le.texImage2D(Le.TEXTURE_2D, h, n, a.width, a.height, 0, n, o, a.data);
            e.generateMipmaps = !1
          } else Le.texImage2D(Le.TEXTURE_2D, 0, n, t.width, t.height, 0, n, o, t.data);
           else if (e instanceof i.CompressedTexture) for (var h = 0, c = s.length; c > h; h++) a = s[h],
          e.format !== i.RGBAFormat &&
          e.format !== i.RGBFormat ? mt().indexOf(n) > - 1 ? Le.compressedTexImage2D(Le.TEXTURE_2D, h, n, a.width, a.height, 0, a.data) : i.warn(
            'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()'
          ) : Le.texImage2D(Le.TEXTURE_2D, h, n, a.width, a.height, 0, n, o, a.data);
           else if (s.length > 0 && r) {
            for (var h = 0, c = s.length; c > h; h++) a = s[h],
            Le.texImage2D(Le.TEXTURE_2D, h, n, n, o, a);
            e.generateMipmaps = !1
          } else Le.texImage2D(Le.TEXTURE_2D, 0, n, n, o, e.image);
          e.generateMipmaps &&
          r &&
          Le.generateMipmap(Le.TEXTURE_2D),
          e.needsUpdate = !1,
          e.onUpdate &&
          e.onUpdate()
        },
        this.setTexture = function (e, t) {
          Le.activeTexture(Le.TEXTURE0 + t),
          e.needsUpdate ? Re.uploadTexture(e) : Le.bindTexture(Le.TEXTURE_2D, e.__webglTexture)
        },
        this.setRenderTarget = function (e) {
          var t = e instanceof i.WebGLRenderTargetCube;
          if (e && void 0 === e.__webglFramebuffer) {
            void 0 === e.depthBuffer &&
            (e.depthBuffer = !0),
            void 0 === e.stencilBuffer &&
            (e.stencilBuffer = !0),
            e.addEventListener('dispose', St),
            e.__webglTexture = Le.createTexture(),
            Re.info.memory.textures++;
            var r = i.Math.isPowerOfTwo(e.width) &&
            i.Math.isPowerOfTwo(e.height),
            n = se(e.format),
            o = se(e.type);
            if (t) {
              e.__webglFramebuffer = [],
              e.__webglRenderbuffer = [],
              Le.bindTexture(Le.TEXTURE_CUBE_MAP, e.__webglTexture),
              $(Le.TEXTURE_CUBE_MAP, e, r);
              for (var a = 0; 6 > a; a++) e.__webglFramebuffer[a] = Le.createFramebuffer(),
              e.__webglRenderbuffer[a] = Le.createRenderbuffer(),
              Le.texImage2D(
                Le.TEXTURE_CUBE_MAP_POSITIVE_X + a,
                0,
                n,
                e.width,
                e.height,
                0,
                n,
                o,
                null
              ),
              ie(e.__webglFramebuffer[a], e, Le.TEXTURE_CUBE_MAP_POSITIVE_X + a),
              ne(e.__webglRenderbuffer[a], e);
              r &&
              Le.generateMipmap(Le.TEXTURE_CUBE_MAP)
            } else e.__webglFramebuffer = Le.createFramebuffer(),
            e.shareDepthFrom ? e.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer : e.__webglRenderbuffer = Le.createRenderbuffer(),
            Le.bindTexture(Le.TEXTURE_2D, e.__webglTexture),
            $(Le.TEXTURE_2D, e, r),
            Le.texImage2D(Le.TEXTURE_2D, 0, n, e.width, e.height, 0, n, o, null),
            ie(e.__webglFramebuffer, e, Le.TEXTURE_2D),
            e.shareDepthFrom ? e.depthBuffer &&
            !e.stencilBuffer ? Le.framebufferRenderbuffer(
              Le.FRAMEBUFFER,
              Le.DEPTH_ATTACHMENT,
              Le.RENDERBUFFER,
              e.__webglRenderbuffer
            ) : e.depthBuffer &&
            e.stencilBuffer &&
            Le.framebufferRenderbuffer(
              Le.FRAMEBUFFER,
              Le.DEPTH_STENCIL_ATTACHMENT,
              Le.RENDERBUFFER,
              e.__webglRenderbuffer
            ) : ne(e.__webglRenderbuffer, e),
            r &&
            Le.generateMipmap(Le.TEXTURE_2D);
            t ? Le.bindTexture(Le.TEXTURE_CUBE_MAP, null) : Le.bindTexture(Le.TEXTURE_2D, null),
            Le.bindRenderbuffer(Le.RENDERBUFFER, null),
            Le.bindFramebuffer(Le.FRAMEBUFFER, null)
          }
          var s,
          h,
          c,
          l,
          u;
          e ? (
            s = t ? e.__webglFramebuffer[e.activeCubeFace] : e.__webglFramebuffer,
            h = e.width,
            c = e.height,
            l = 0,
            u = 0
          ) : (s = null, h = Ge, c = He, l = Ne, u = Ie),
          s !== Ue &&
          (
            Le.bindFramebuffer(Le.FRAMEBUFFER, s),
            Le.viewport(l, u, h, c),
            Ue = s
          ),
          We = h,
          je = c
        },
        this.readRenderTargetPixels = function (e, t, r, n, o, a) {
          if (!(e instanceof i.WebGLRenderTarget)) return void console.error(
            'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.'
          );
          if (e.__webglFramebuffer) {
            if (e.format !== i.RGBAFormat) return void console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.'
            );
            var s = !1;
            e.__webglFramebuffer !== Ue &&
            (Le.bindFramebuffer(Le.FRAMEBUFFER, e.__webglFramebuffer), s = !0),
            Le.checkFramebufferStatus(Le.FRAMEBUFFER) === Le.FRAMEBUFFER_COMPLETE ? Le.readPixels(t, r, n, o, Le.RGBA, Le.UNSIGNED_BYTE, a) : console.error(
              'THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.'
            ),
            s &&
            Le.bindFramebuffer(Le.FRAMEBUFFER, Ue)
          }
        },
        this.initMaterial = function () {
          i.warn('THREE.WebGLRenderer: .initMaterial() has been removed.')
        },
        this.addPrePlugin = function () {
          i.warn('THREE.WebGLRenderer: .addPrePlugin() has been removed.')
        },
        this.addPostPlugin = function () {
          i.warn('THREE.WebGLRenderer: .addPostPlugin() has been removed.')
        },
        this.updateShadowMap = function () {
          i.warn('THREE.WebGLRenderer: .updateShadowMap() has been removed.')
        }
      },
      i.WebGLRenderTarget = function (e, t, r) {
        this.width = e,
        this.height = t,
        r = r ||
        {
        },
        this.wrapS = void 0 !== r.wrapS ? r.wrapS : i.ClampToEdgeWrapping,
        this.wrapT = void 0 !== r.wrapT ? r.wrapT : i.ClampToEdgeWrapping,
        this.magFilter = void 0 !== r.magFilter ? r.magFilter : i.LinearFilter,
        this.minFilter = void 0 !== r.minFilter ? r.minFilter : i.LinearMipMapLinearFilter,
        this.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1,
        this.offset = new i.Vector2(0, 0),
        this.repeat = new i.Vector2(1, 1),
        this.format = void 0 !== r.format ? r.format : i.RGBAFormat,
        this.type = void 0 !== r.type ? r.type : i.UnsignedByteType,
        this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer : !0,
        this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer : !0,
        this.generateMipmaps = !0,
        this.shareDepthFrom = void 0 !== r.shareDepthFrom ? r.shareDepthFrom : null
      },
      i.WebGLRenderTarget.prototype = {
        constructor: i.WebGLRenderTarget,
        setSize: function (e, t) {
          this.width = e,
          this.height = t
        },
        clone: function () {
          var e = new i.WebGLRenderTarget(this.width, this.height);
          return e.wrapS = this.wrapS,
          e.wrapT = this.wrapT,
          e.magFilter = this.magFilter,
          e.minFilter = this.minFilter,
          e.anisotropy = this.anisotropy,
          e.offset.copy(this.offset),
          e.repeat.copy(this.repeat),
          e.format = this.format,
          e.type = this.type,
          e.depthBuffer = this.depthBuffer,
          e.stencilBuffer = this.stencilBuffer,
          e.generateMipmaps = this.generateMipmaps,
          e.shareDepthFrom = this.shareDepthFrom,
          e
        },
        dispose: function () {
          this.dispatchEvent({
            type: 'dispose'
          })
        }
      },
      i.EventDispatcher.prototype.apply(i.WebGLRenderTarget.prototype),
      i.WebGLRenderTargetCube = function (e, t, r) {
        i.WebGLRenderTarget.call(this, e, t, r),
        this.activeCubeFace = 0
      },
      i.WebGLRenderTargetCube.prototype = Object.create(i.WebGLRenderTarget.prototype),
      i.WebGLRenderTargetCube.prototype.constructor = i.WebGLRenderTargetCube,
      i.WebGLExtensions = function (e) {
        var t = {};
        this.get = function (r) {
          if (void 0 !== t[r]) return t[r];
          var n;
          switch (r) {
            case 'EXT_texture_filter_anisotropic':
              n = e.getExtension('EXT_texture_filter_anisotropic') ||
              e.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
              e.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
              break;
            case 'WEBGL_compressed_texture_s3tc':
              n = e.getExtension('WEBGL_compressed_texture_s3tc') ||
              e.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
              e.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
              break;
            case 'WEBGL_compressed_texture_pvrtc':
              n = e.getExtension('WEBGL_compressed_texture_pvrtc') ||
              e.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
              break;
            default:
              n = e.getExtension(r)
          }
          return null === n &&
          i.warn('THREE.WebGLRenderer: ' + r + ' extension not supported.'),
          t[r] = n,
          n
        }
      },
      i.WebGLProgram = function () {
        var e = 0,
        t = function (e) {
          var t,
          r,
          i = [];
          for (var n in e) t = e[n],
          t !== !1 &&
          (r = '#define ' + n + ' ' + t, i.push(r));
          return i.join('\n')
        },
        r = function (e, t, r) {
          for (var i = {}, n = 0, o = r.length; o > n; n++) {
            var a = r[n];
            i[a] = e.getUniformLocation(t, a)
          }
          return i
        },
        n = function (e, t, r) {
          for (var i = {}, n = 0, o = r.length; o > n; n++) {
            var a = r[n];
            i[a] = e.getAttribLocation(t, a)
          }
          return i
        };
        return function (o, a, s, h) {
          var c = o,
          l = c.context,
          u = s.defines,
          d = s.__webglShader.uniforms,
          f = s.attributes,
          p = s.__webglShader.vertexShader,
          m = s.__webglShader.fragmentShader,
          v = s.index0AttributeName;
          void 0 === v &&
          h.morphTargets === !0 &&
          (v = 'position');
          var g = 'SHADOWMAP_TYPE_BASIC';
          h.shadowMapType === i.PCFShadowMap ? g = 'SHADOWMAP_TYPE_PCF' : h.shadowMapType === i.PCFSoftShadowMap &&
          (g = 'SHADOWMAP_TYPE_PCF_SOFT');
          var y = 'ENVMAP_TYPE_CUBE',
          x = 'ENVMAP_MODE_REFLECTION',
          _ = 'ENVMAP_BLENDING_MULTIPLY';
          if (h.envMap) {
            switch (s.envMap.mapping) {
              case i.CubeReflectionMapping:
              case i.CubeRefractionMapping:
                y = 'ENVMAP_TYPE_CUBE';
                break;
              case i.EquirectangularReflectionMapping:
              case i.EquirectangularRefractionMapping:
                y = 'ENVMAP_TYPE_EQUIREC';
                break;
              case i.SphericalReflectionMapping:
                y = 'ENVMAP_TYPE_SPHERE'
            }
            switch (s.envMap.mapping) {
              case i.CubeRefractionMapping:
              case i.EquirectangularRefractionMapping:
                x = 'ENVMAP_MODE_REFRACTION'
            }
            switch (s.combine) {
              case i.MultiplyOperation:
                _ = 'ENVMAP_BLENDING_MULTIPLY';
                break;
              case i.MixOperation:
                _ = 'ENVMAP_BLENDING_MIX';
                break;
              case i.AddOperation:
                _ = 'ENVMAP_BLENDING_ADD'
            }
          }
          var w,
          b,
          M = o.gammaFactor > 0 ? o.gammaFactor : 1,
          S = t(u),
          T = l.createProgram();
          s instanceof i.RawShaderMaterial ? (w = '', b = '') : (
            w = [
              'precision ' + h.precision + ' float;',
              'precision ' + h.precision + ' int;',
              S,
              h.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '',
              c.gammaInput ? '#define GAMMA_INPUT' : '',
              c.gammaOutput ? '#define GAMMA_OUTPUT' : '',
              '#define GAMMA_FACTOR ' + M,
              '#define MAX_DIR_LIGHTS ' + h.maxDirLights,
              '#define MAX_POINT_LIGHTS ' + h.maxPointLights,
              '#define MAX_SPOT_LIGHTS ' + h.maxSpotLights,
              '#define MAX_HEMI_LIGHTS ' + h.maxHemiLights,
              '#define MAX_SHADOWS ' + h.maxShadows,
              '#define MAX_BONES ' + h.maxBones,
              h.map ? '#define USE_MAP' : '',
              h.envMap ? '#define USE_ENVMAP' : '',
              h.envMap ? '#define ' + x : '',
              h.lightMap ? '#define USE_LIGHTMAP' : '',
              h.bumpMap ? '#define USE_BUMPMAP' : '',
              h.normalMap ? '#define USE_NORMALMAP' : '',
              h.specularMap ? '#define USE_SPECULARMAP' : '',
              h.alphaMap ? '#define USE_ALPHAMAP' : '',
              h.vertexColors ? '#define USE_COLOR' : '',
              h.flatShading ? '#define FLAT_SHADED' : '',
              h.skinning ? '#define USE_SKINNING' : '',
              h.useVertexTexture ? '#define BONE_TEXTURE' : '',
              h.morphTargets ? '#define USE_MORPHTARGETS' : '',
              h.morphNormals ? '#define USE_MORPHNORMALS' : '',
              h.wrapAround ? '#define WRAP_AROUND' : '',
              h.doubleSided ? '#define DOUBLE_SIDED' : '',
              h.flipSided ? '#define FLIP_SIDED' : '',
              h.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
              h.shadowMapEnabled ? '#define ' + g : '',
              h.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '',
              h.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '',
              h.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
              h.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
              'uniform mat4 modelMatrix;',
              'uniform mat4 modelViewMatrix;',
              'uniform mat4 projectionMatrix;',
              'uniform mat4 viewMatrix;',
              'uniform mat3 normalMatrix;',
              'uniform vec3 cameraPosition;',
              'attribute vec3 position;',
              'attribute vec3 normal;',
              'attribute vec2 uv;',
              'attribute vec2 uv2;',
              '#ifdef USE_COLOR',
              '\tattribute vec3 color;',
              '#endif',
              '#ifdef USE_MORPHTARGETS',
              '\tattribute vec3 morphTarget0;',
              '\tattribute vec3 morphTarget1;',
              '\tattribute vec3 morphTarget2;',
              '\tattribute vec3 morphTarget3;',
              '\t#ifdef USE_MORPHNORMALS',
              '\t\tattribute vec3 morphNormal0;',
              '\t\tattribute vec3 morphNormal1;',
              '\t\tattribute vec3 morphNormal2;',
              '\t\tattribute vec3 morphNormal3;',
              '\t#else',
              '\t\tattribute vec3 morphTarget4;',
              '\t\tattribute vec3 morphTarget5;',
              '\t\tattribute vec3 morphTarget6;',
              '\t\tattribute vec3 morphTarget7;',
              '\t#endif',
              '#endif',
              '#ifdef USE_SKINNING',
              '\tattribute vec4 skinIndex;',
              '\tattribute vec4 skinWeight;',
              '#endif',
              ''
            ].join('\n'),
            b = [
              'precision ' + h.precision + ' float;',
              'precision ' + h.precision + ' int;',
              h.bumpMap ||
              h.normalMap ||
              h.flatShading ? '#extension GL_OES_standard_derivatives : enable' : '',
              S,
              '#define MAX_DIR_LIGHTS ' + h.maxDirLights,
              '#define MAX_POINT_LIGHTS ' + h.maxPointLights,
              '#define MAX_SPOT_LIGHTS ' + h.maxSpotLights,
              '#define MAX_HEMI_LIGHTS ' + h.maxHemiLights,
              '#define MAX_SHADOWS ' + h.maxShadows,
              h.alphaTest ? '#define ALPHATEST ' + h.alphaTest : '',
              c.gammaInput ? '#define GAMMA_INPUT' : '',
              c.gammaOutput ? '#define GAMMA_OUTPUT' : '',
              '#define GAMMA_FACTOR ' + M,
              h.useFog &&
              h.fog ? '#define USE_FOG' : '',
              h.useFog &&
              h.fogExp ? '#define FOG_EXP2' : '',
              h.map ? '#define USE_MAP' : '',
              h.envMap ? '#define USE_ENVMAP' : '',
              h.envMap ? '#define ' + y : '',
              h.envMap ? '#define ' + x : '',
              h.envMap ? '#define ' + _ : '',
              h.lightMap ? '#define USE_LIGHTMAP' : '',
              h.bumpMap ? '#define USE_BUMPMAP' : '',
              h.normalMap ? '#define USE_NORMALMAP' : '',
              h.specularMap ? '#define USE_SPECULARMAP' : '',
              h.alphaMap ? '#define USE_ALPHAMAP' : '',
              h.vertexColors ? '#define USE_COLOR' : '',
              h.flatShading ? '#define FLAT_SHADED' : '',
              h.metal ? '#define METAL' : '',
              h.wrapAround ? '#define WRAP_AROUND' : '',
              h.doubleSided ? '#define DOUBLE_SIDED' : '',
              h.flipSided ? '#define FLIP_SIDED' : '',
              h.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
              h.shadowMapEnabled ? '#define ' + g : '',
              h.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '',
              h.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '',
              h.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
              'uniform mat4 viewMatrix;',
              'uniform vec3 cameraPosition;',
              ''
            ].join('\n')
          );
          var C = new i.WebGLShader(l, l.VERTEX_SHADER, w + p),
          A = new i.WebGLShader(l, l.FRAGMENT_SHADER, b + m);
          l.attachShader(T, C),
          l.attachShader(T, A),
          void 0 !== v &&
          l.bindAttribLocation(T, 0, v),
          l.linkProgram(T);
          var E = l.getProgramInfoLog(T);
          l.getProgramParameter(T, l.LINK_STATUS) === !1 &&
          i.error(
            'THREE.WebGLProgram: shader error: ' + l.getError(),
            'gl.VALIDATE_STATUS',
            l.getProgramParameter(T, l.VALIDATE_STATUS),
            'gl.getPRogramInfoLog',
            E
          ),
          '' !== E &&
          i.warn('THREE.WebGLProgram: gl.getProgramInfoLog()' + E),
          l.deleteShader(C),
          l.deleteShader(A);
          var P = [
            'viewMatrix',
            'modelViewMatrix',
            'projectionMatrix',
            'normalMatrix',
            'modelMatrix',
            'cameraPosition',
            'morphTargetInfluences',
            'bindMatrix',
            'bindMatrixInverse'
          ];
          h.useVertexTexture ? (
            P.push('boneTexture'),
            P.push('boneTextureWidth'),
            P.push('boneTextureHeight')
          ) : P.push('boneGlobalMatrices'),
          h.logarithmicDepthBuffer &&
          P.push('logDepthBufFC');
          for (var D in d) P.push(D);
          this.uniforms = r(l, T, P),
          P = [
            'position',
            'normal',
            'uv',
            'uv2',
            'tangent',
            'color',
            'skinIndex',
            'skinWeight',
            'lineDistance'
          ];
          for (var L = 0; L < h.maxMorphTargets; L++) P.push('morphTarget' + L);
          for (var L = 0; L < h.maxMorphNormals; L++) P.push('morphNormal' + L);
          for (var R in f) P.push(R);
          return this.attributes = n(l, T, P),
          this.attributesKeys = Object.keys(this.attributes),
          this.id = e++,
          this.code = a,
          this.usedTimes = 1,
          this.program = T,
          this.vertexShader = C,
          this.fragmentShader = A,
          this
        }
      }(),
      i.WebGLShader = function () {
        var e = function (e) {
          for (var t = e.split('\n'), r = 0; r < t.length; r++) t[r] = r + 1 + ': ' + t[r];
          return t.join('\n')
        };
        return function (t, r, n) {
          var o = t.createShader(r);
          return t.shaderSource(o, n),
          t.compileShader(o),
          t.getShaderParameter(o, t.COMPILE_STATUS) === !1 &&
          i.error('THREE.WebGLShader: Shader couldn\'t compile.'),
          '' !== t.getShaderInfoLog(o) &&
          i.warn(
            'THREE.WebGLShader: gl.getShaderInfoLog()',
            t.getShaderInfoLog(o),
            e(n)
          ),
          o
        }
      }(),
      i.WebGLState = function (e, t) {
        var r = new Uint8Array(16),
        n = new Uint8Array(16),
        o = null,
        a = null,
        s = null,
        h = null,
        c = null,
        l = null,
        u = null,
        d = null,
        f = null,
        p = null,
        m = null,
        v = null,
        g = null,
        y = null,
        x = null,
        _ = null;
        this.initAttributes = function () {
          for (var e = 0, t = r.length; t > e; e++) r[e] = 0
        },
        this.enableAttribute = function (t) {
          r[t] = 1,
          0 === n[t] &&
          (e.enableVertexAttribArray(t), n[t] = 1)
        },
        this.disableUnusedAttributes = function () {
          for (var t = 0, i = n.length; i > t; t++) n[t] !== r[t] &&
          (e.disableVertexAttribArray(t), n[t] = 0)
        },
        this.setBlending = function (r, n, d, f, p, m, v) {
          r !== o &&
          (
            r === i.NoBlending ? e.disable(e.BLEND) : r === i.AdditiveBlending ? (
              e.enable(e.BLEND),
              e.blendEquation(e.FUNC_ADD),
              e.blendFunc(e.SRC_ALPHA, e.ONE)
            ) : r === i.SubtractiveBlending ? (
              e.enable(e.BLEND),
              e.blendEquation(e.FUNC_ADD),
              e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)
            ) : r === i.MultiplyBlending ? (
              e.enable(e.BLEND),
              e.blendEquation(e.FUNC_ADD),
              e.blendFunc(e.ZERO, e.SRC_COLOR)
            ) : r === i.CustomBlending ? e.enable(e.BLEND) : (
              e.enable(e.BLEND),
              e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD),
              e.blendFuncSeparate(
                e.SRC_ALPHA,
                e.ONE_MINUS_SRC_ALPHA,
                e.ONE,
                e.ONE_MINUS_SRC_ALPHA
              )
            ),
            o = r
          ),
          r === i.CustomBlending ? (
            p = p ||
            n,
            m = m ||
            d,
            v = v ||
            f,
            n === a &&
            p === c ||
            (e.blendEquationSeparate(t(n), t(p)), a = n, c = p),
            d === s &&
            f === h &&
            m === l &&
            v === u ||
            (e.blendFuncSeparate(t(d), t(f), t(m), t(v)), s = d, h = f, l = m, u = v)
          ) : (a = null, s = null, h = null, c = null, l = null, u = null)
        },
        this.setDepthTest = function (t) {
          d !== t &&
          (t ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST), d = t)
        },
        this.setDepthWrite = function (t) {
          f !== t &&
          (e.depthMask(t), f = t)
        },
        this.setColorWrite = function (t) {
          p !== t &&
          (e.colorMask(t, t, t, t), p = t)
        },
        this.setDoubleSided = function (t) {
          m !== t &&
          (t ? e.disable(e.CULL_FACE) : e.enable(e.CULL_FACE), m = t)
        },
        this.setFlipSided = function (t) {
          v !== t &&
          (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), v = t)
        },
        this.setLineWidth = function (t) {
          t !== g &&
          (e.lineWidth(t), g = t)
        },
        this.setPolygonOffset = function (t, r, i) {
          y !== t &&
          (
            t ? e.enable(e.POLYGON_OFFSET_FILL) : e.disable(e.POLYGON_OFFSET_FILL),
            y = t
          ),
          !t ||
          x === r &&
          _ === i ||
          (e.polygonOffset(r, i), x = r, _ = i)
        },
        this.reset = function () {
          for (var e = 0; e < n.length; e++) n[e] = 0;
          o = null,
          d = null,
          f = null,
          p = null,
          m = null,
          v = null
        }
      },
      i.LensFlarePlugin = function (e, t) {
        function r(t) {
          var r = d.createProgram(),
          i = d.createShader(d.FRAGMENT_SHADER),
          n = d.createShader(d.VERTEX_SHADER),
          o = 'precision ' + e.getPrecision() + ' float;\n';
          return d.shaderSource(i, o + t.fragmentShader),
          d.shaderSource(n, o + t.vertexShader),
          d.compileShader(i),
          d.compileShader(n),
          d.attachShader(r, i),
          d.attachShader(r, n),
          d.linkProgram(r),
          r
        }
        var n,
        o,
        a,
        s,
        h,
        c,
        l,
        u,
        d = e.context,
        f = function () {
          var e = new Float32Array([ - 1,
          - 1,
          0,
          0,
          1,
          - 1,
          1,
          0,
          1,
          1,
          1,
          1,
          - 1,
          1,
          0,
          1]),
          t = new Uint16Array([0,
          1,
          2,
          0,
          2,
          3]);
          n = d.createBuffer(),
          o = d.createBuffer(),
          d.bindBuffer(d.ARRAY_BUFFER, n),
          d.bufferData(d.ARRAY_BUFFER, e, d.STATIC_DRAW),
          d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, o),
          d.bufferData(d.ELEMENT_ARRAY_BUFFER, t, d.STATIC_DRAW),
          l = d.createTexture(),
          u = d.createTexture(),
          d.bindTexture(d.TEXTURE_2D, l),
          d.texImage2D(d.TEXTURE_2D, 0, d.RGB, 16, 16, 0, d.RGB, d.UNSIGNED_BYTE, null),
          d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE),
          d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE),
          d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST),
          d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST),
          d.bindTexture(d.TEXTURE_2D, u),
          d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, 16, 16, 0, d.RGBA, d.UNSIGNED_BYTE, null),
          d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE),
          d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE),
          d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, d.NEAREST),
          d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, d.NEAREST),
          c = d.getParameter(d.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
          var i;
          i = c ? {
            vertexShader: [
              'uniform lowp int renderType;',
              'uniform vec3 screenPosition;',
              'uniform vec2 scale;',
              'uniform float rotation;',
              'uniform sampler2D occlusionMap;',
              'attribute vec2 position;',
              'attribute vec2 uv;',
              'varying vec2 vUV;',
              'varying float vVisibility;',
              'void main() {',
              'vUV = uv;',
              'vec2 pos = position;',
              'if( renderType == 2 ) {',
              'vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );',
              'visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );',
              'visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );',
              'visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );',
              'visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );',
              'visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );',
              'visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );',
              'visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );',
              'visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );',
              'vVisibility =        visibility.r / 9.0;',
              'vVisibility *= 1.0 - visibility.g / 9.0;',
              'vVisibility *=       visibility.b / 9.0;',
              'vVisibility *= 1.0 - visibility.a / 9.0;',
              'pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;',
              'pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;',
              '}',
              'gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );',
              '}'
            ].join('\n'),
            fragmentShader: [
              'uniform lowp int renderType;',
              'uniform sampler2D map;',
              'uniform float opacity;',
              'uniform vec3 color;',
              'varying vec2 vUV;',
              'varying float vVisibility;',
              'void main() {',
              'if( renderType == 0 ) {',
              'gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );',
              '} else if( renderType == 1 ) {',
              'gl_FragColor = texture2D( map, vUV );',
              '} else {',
              'vec4 texture = texture2D( map, vUV );',
              'texture.a *= opacity * vVisibility;',
              'gl_FragColor = texture;',
              'gl_FragColor.rgb *= color;',
              '}',
              '}'
            ].join('\n')
          }
           : {
            vertexShader: [
              'uniform lowp int renderType;',
              'uniform vec3 screenPosition;',
              'uniform vec2 scale;',
              'uniform float rotation;',
              'attribute vec2 position;',
              'attribute vec2 uv;',
              'varying vec2 vUV;',
              'void main() {',
              'vUV = uv;',
              'vec2 pos = position;',
              'if( renderType == 2 ) {',
              'pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;',
              'pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;',
              '}',
              'gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );',
              '}'
            ].join('\n'),
            fragmentShader: [
              'precision mediump float;',
              'uniform lowp int renderType;',
              'uniform sampler2D map;',
              'uniform sampler2D occlusionMap;',
              'uniform float opacity;',
              'uniform vec3 color;',
              'varying vec2 vUV;',
              'void main() {',
              'if( renderType == 0 ) {',
              'gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );',
              '} else if( renderType == 1 ) {',
              'gl_FragColor = texture2D( map, vUV );',
              '} else {',
              'float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;',
              'visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;',
              'visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;',
              'visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;',
              'visibility = ( 1.0 - visibility / 4.0 );',
              'vec4 texture = texture2D( map, vUV );',
              'texture.a *= opacity * visibility;',
              'gl_FragColor = texture;',
              'gl_FragColor.rgb *= color;',
              '}',
              '}'
            ].join('\n')
          },
          a = r(i),
          s = {
            vertex: d.getAttribLocation(a, 'position'),
            uv: d.getAttribLocation(a, 'uv')
          },
          h = {
            renderType: d.getUniformLocation(a, 'renderType'),
            map: d.getUniformLocation(a, 'map'),
            occlusionMap: d.getUniformLocation(a, 'occlusionMap'),
            opacity: d.getUniformLocation(a, 'opacity'),
            color: d.getUniformLocation(a, 'color'),
            scale: d.getUniformLocation(a, 'scale'),
            rotation: d.getUniformLocation(a, 'rotation'),
            screenPosition: d.getUniformLocation(a, 'screenPosition')
          }
        };
        this.render = function (r, p, m, v) {
          if (0 !== t.length) {
            var g = new i.Vector3,
            y = v / m,
            x = 0.5 * m,
            _ = 0.5 * v,
            w = 16 / v,
            b = new i.Vector2(w * y, w),
            M = new i.Vector3(1, 1, 0),
            S = new i.Vector2(1, 1);
            void 0 === a &&
            f(),
            d.useProgram(a),
            d.enableVertexAttribArray(s.vertex),
            d.enableVertexAttribArray(s.uv),
            d.uniform1i(h.occlusionMap, 0),
            d.uniform1i(h.map, 1),
            d.bindBuffer(d.ARRAY_BUFFER, n),
            d.vertexAttribPointer(s.vertex, 2, d.FLOAT, !1, 16, 0),
            d.vertexAttribPointer(s.uv, 2, d.FLOAT, !1, 16, 8),
            d.bindBuffer(d.ELEMENT_ARRAY_BUFFER, o),
            d.disable(d.CULL_FACE),
            d.depthMask(!1);
            for (var T = 0, C = t.length; C > T; T++) {
              w = 16 / v,
              b.set(w * y, w);
              var A = t[T];
              if (
                g.set(
                  A.matrixWorld.elements[12],
                  A.matrixWorld.elements[13],
                  A.matrixWorld.elements[14]
                ),
                g.applyMatrix4(p.matrixWorldInverse),
                g.applyProjection(p.projectionMatrix),
                M.copy(g),
                S.x = M.x * x + x,
                S.y = M.y * _ + _,
                c ||
                S.x > 0 &&
                S.x < m &&
                S.y > 0 &&
                S.y < v
              ) {
                d.activeTexture(d.TEXTURE1),
                d.bindTexture(d.TEXTURE_2D, l),
                d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGB, S.x - 8, S.y - 8, 16, 16, 0),
                d.uniform1i(h.renderType, 0),
                d.uniform2f(h.scale, b.x, b.y),
                d.uniform3f(h.screenPosition, M.x, M.y, M.z),
                d.disable(d.BLEND),
                d.enable(d.DEPTH_TEST),
                d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0),
                d.activeTexture(d.TEXTURE0),
                d.bindTexture(d.TEXTURE_2D, u),
                d.copyTexImage2D(d.TEXTURE_2D, 0, d.RGBA, S.x - 8, S.y - 8, 16, 16, 0),
                d.uniform1i(h.renderType, 1),
                d.disable(d.DEPTH_TEST),
                d.activeTexture(d.TEXTURE1),
                d.bindTexture(d.TEXTURE_2D, l),
                d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0),
                A.positionScreen.copy(M),
                A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(),
                d.uniform1i(h.renderType, 2),
                d.enable(d.BLEND);
                for (var E = 0, P = A.lensFlares.length; P > E; E++) {
                  var D = A.lensFlares[E];
                  D.opacity > 0.001 &&
                  D.scale > 0.001 &&
                  (
                    M.x = D.x,
                    M.y = D.y,
                    M.z = D.z,
                    w = D.size * D.scale / v,
                    b.x = w * y,
                    b.y = w,
                    d.uniform3f(h.screenPosition, M.x, M.y, M.z),
                    d.uniform2f(h.scale, b.x, b.y),
                    d.uniform1f(h.rotation, D.rotation),
                    d.uniform1f(h.opacity, D.opacity),
                    d.uniform3f(h.color, D.color.r, D.color.g, D.color.b),
                    e.state.setBlending(D.blending, D.blendEquation, D.blendSrc, D.blendDst),
                    e.setTexture(D.texture, 1),
                    d.drawElements(d.TRIANGLES, 6, d.UNSIGNED_SHORT, 0)
                  )
                }
              }
            }
            d.enable(d.CULL_FACE),
            d.enable(d.DEPTH_TEST),
            d.depthMask(!0),
            e.resetGLState()
          }
        }
      },
      i.ShadowMapPlugin = function (e, t, r, n) {
        function o(e, t, i) {
          if (t.visible) {
            var n = r[t.id];
            if (
              n &&
              t.castShadow &&
              (t.frustumCulled === !1 || m.intersectsObject(t) === !0)
            ) for (var a = 0, s = n.length; s > a; a++) {
              var h = n[a];
              t._modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld),
              _.push(h)
            }
            for (var a = 0, s = t.children.length; s > a; a++) o(e, t.children[a], i)
          }
        }
        function a(e, t) {
          var r = new i.DirectionalLight;
          r.isVirtual = !0,
          r.onlyShadow = !0,
          r.castShadow = !0,
          r.shadowCameraNear = e.shadowCameraNear,
          r.shadowCameraFar = e.shadowCameraFar,
          r.shadowCameraLeft = e.shadowCameraLeft,
          r.shadowCameraRight = e.shadowCameraRight,
          r.shadowCameraBottom = e.shadowCameraBottom,
          r.shadowCameraTop = e.shadowCameraTop,
          r.shadowCameraVisible = e.shadowCameraVisible,
          r.shadowDarkness = e.shadowDarkness,
          r.shadowBias = e.shadowCascadeBias[t],
          r.shadowMapWidth = e.shadowCascadeWidth[t],
          r.shadowMapHeight = e.shadowCascadeHeight[t],
          r.pointsWorld = [],
          r.pointsFrustum = [];
          for (var n = r.pointsWorld, o = r.pointsFrustum, a = 0; 8 > a; a++) n[a] = new i.Vector3,
          o[a] = new i.Vector3;
          var s = e.shadowCascadeNearZ[t],
          h = e.shadowCascadeFarZ[t];
          return o[0].set( - 1, - 1, s),
          o[1].set(1, - 1, s),
          o[2].set( - 1, 1, s),
          o[3].set(1, 1, s),
          o[4].set( - 1, - 1, h),
          o[5].set(1, - 1, h),
          o[6].set( - 1, 1, h),
          o[7].set(1, 1, h),
          r
        }
        function s(e, t) {
          var r = e.shadowCascadeArray[t];
          r.position.copy(e.position),
          r.target.position.copy(e.target.position),
          r.lookAt(r.target),
          r.shadowCameraVisible = e.shadowCameraVisible,
          r.shadowDarkness = e.shadowDarkness,
          r.shadowBias = e.shadowCascadeBias[t];
          var i = e.shadowCascadeNearZ[t],
          n = e.shadowCascadeFarZ[t],
          o = r.pointsFrustum;
          o[0].z = i,
          o[1].z = i,
          o[2].z = i,
          o[3].z = i,
          o[4].z = n,
          o[5].z = n,
          o[6].z = n,
          o[7].z = n
        }
        function h(e, t) {
          var r = t.shadowCamera,
          i = t.pointsFrustum,
          n = t.pointsWorld;
          g.set(1 / 0, 1 / 0, 1 / 0),
          y.set( - (1 / 0), - (1 / 0), - (1 / 0));
          for (var o = 0; 8 > o; o++) {
            var a = n[o];
            a.copy(i[o]),
            a.unproject(e),
            a.applyMatrix4(r.matrixWorldInverse),
            a.x < g.x &&
            (g.x = a.x),
            a.x > y.x &&
            (y.x = a.x),
            a.y < g.y &&
            (g.y = a.y),
            a.y > y.y &&
            (y.y = a.y),
            a.z < g.z &&
            (g.z = a.z),
            a.z > y.z &&
            (y.z = a.z)
          }
          r.left = g.x,
          r.right = y.x,
          r.top = y.y,
          r.bottom = g.y,
          r.updateProjectionMatrix()
        }
        function c(e) {
          return e.material instanceof i.MeshFaceMaterial ? e.material.materials[0] : e.material
        }
        var l,
        u,
        d,
        f,
        p = e.context,
        m = new i.Frustum,
        v = new i.Matrix4,
        g = new i.Vector3,
        y = new i.Vector3,
        x = new i.Vector3,
        _ = [],
        w = i.ShaderLib.depthRGBA,
        b = i.UniformsUtils.clone(w.uniforms);
        l = new i.ShaderMaterial({
          uniforms: b,
          vertexShader: w.vertexShader,
          fragmentShader: w.fragmentShader
        }),
        u = new i.ShaderMaterial({
          uniforms: b,
          vertexShader: w.vertexShader,
          fragmentShader: w.fragmentShader,
          morphTargets: !0
        }),
        d = new i.ShaderMaterial({
          uniforms: b,
          vertexShader: w.vertexShader,
          fragmentShader: w.fragmentShader,
          skinning: !0
        }),
        f = new i.ShaderMaterial({
          uniforms: b,
          vertexShader: w.vertexShader,
          fragmentShader: w.fragmentShader,
          morphTargets: !0,
          skinning: !0
        }),
        l._shadowPass = !0,
        u._shadowPass = !0,
        d._shadowPass = !0,
        f._shadowPass = !0,
        this.render = function (r, g) {
          if (e.shadowMapEnabled !== !1) {
            var y,
            w,
            b,
            M,
            S,
            T,
            C,
            A,
            E,
            P,
            D,
            L,
            R,
            B = [],
            F = 0,
            U = null;
            for (
              p.clearColor(1, 1, 1, 1),
              p.disable(p.BLEND),
              p.enable(p.CULL_FACE),
              p.frontFace(p.CCW),
              e.shadowMapCullFace === i.CullFaceFront ? p.cullFace(p.FRONT) : p.cullFace(p.BACK),
              e.state.setDepthTest(!0),
              y = 0,
              w = t.length;
              w > y;
              y++
            ) if (R = t[y], R.castShadow) if (R instanceof i.DirectionalLight && R.shadowCascade) for (S = 0; S < R.shadowCascadeCount; S++) {
              var O;
              if (R.shadowCascadeArray[S]) O = R.shadowCascadeArray[S];
               else {
                O = a(R, S),
                O.originalCamera = g;
                var V = new i.Gyroscope;
                V.position.copy(R.shadowCascadeOffset),
                V.add(O),
                V.add(O.target),
                g.add(V),
                R.shadowCascadeArray[S] = O
              }
              s(R, S),
              B[F] = O,
              F++
            } else B[F] = R,
            F++;
            for (y = 0, w = B.length; w > y; y++) {
              if (R = B[y], !R.shadowMap) {
                var k = i.LinearFilter;
                e.shadowMapType === i.PCFSoftShadowMap &&
                (k = i.NearestFilter);
                var z = {
                  minFilter: k,
                  magFilter: k,
                  format: i.RGBAFormat
                };
                R.shadowMap = new i.WebGLRenderTarget(R.shadowMapWidth, R.shadowMapHeight, z),
                R.shadowMapSize = new i.Vector2(R.shadowMapWidth, R.shadowMapHeight),
                R.shadowMatrix = new i.Matrix4
              }
              if (!R.shadowCamera) {
                if (R instanceof i.SpotLight) R.shadowCamera = new i.PerspectiveCamera(
                  R.shadowCameraFov,
                  R.shadowMapWidth / R.shadowMapHeight,
                  R.shadowCameraNear,
                  R.shadowCameraFar
                );
                 else {
                  if (!(R instanceof i.DirectionalLight)) {
                    i.error('THREE.ShadowMapPlugin: Unsupported light type for shadow', R);
                    continue
                  }
                  R.shadowCamera = new i.OrthographicCamera(
                    R.shadowCameraLeft,
                    R.shadowCameraRight,
                    R.shadowCameraTop,
                    R.shadowCameraBottom,
                    R.shadowCameraNear,
                    R.shadowCameraFar
                  )
                }
                r.add(R.shadowCamera),
                r.autoUpdate === !0 &&
                r.updateMatrixWorld()
              }
              R.shadowCameraVisible &&
              !R.cameraHelper &&
              (
                R.cameraHelper = new i.CameraHelper(R.shadowCamera),
                r.add(R.cameraHelper)
              ),
              R.isVirtual &&
              O.originalCamera == g &&
              h(g, R),
              T = R.shadowMap,
              C = R.shadowMatrix,
              A = R.shadowCamera,
              A.position.setFromMatrixPosition(R.matrixWorld),
              x.setFromMatrixPosition(R.target.matrixWorld),
              A.lookAt(x),
              A.updateMatrixWorld(),
              A.matrixWorldInverse.getInverse(A.matrixWorld),
              R.cameraHelper &&
              (R.cameraHelper.visible = R.shadowCameraVisible),
              R.shadowCameraVisible &&
              R.cameraHelper.update(),
              C.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
              C.multiply(A.projectionMatrix),
              C.multiply(A.matrixWorldInverse),
              v.multiplyMatrices(A.projectionMatrix, A.matrixWorldInverse),
              m.setFromMatrix(v),
              e.setRenderTarget(T),
              e.clear(),
              _.length = 0,
              o(r, r, A);
              var N,
              I,
              G;
              for (b = 0, M = _.length; M > b; b++) D = _[b],
              L = D.object,
              E = D.buffer,
              N = c(L),
              I = void 0 !== L.geometry.morphTargets &&
              L.geometry.morphTargets.length > 0 &&
              N.morphTargets,
              G = L instanceof i.SkinnedMesh &&
              N.skinning,
              P = L.customDepthMaterial ? L.customDepthMaterial : G ? I ? f : d : I ? u : l,
              e.setMaterialFaces(N),
              E instanceof i.BufferGeometry ? e.renderBufferDirect(A, t, U, P, E, L) : e.renderBuffer(A, t, U, P, E, L);
              for (b = 0, M = n.length; M > b; b++) D = n[b],
              L = D.object,
              L.visible &&
              L.castShadow &&
              (
                L._modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, L.matrixWorld),
                e.renderImmediateObject(A, t, U, l, L)
              )
            }
            var H = e.getClearColor(),
            W = e.getClearAlpha();
            p.clearColor(H.r, H.g, H.b, W),
            p.enable(p.BLEND),
            e.shadowMapCullFace === i.CullFaceFront &&
            p.cullFace(p.BACK),
            e.resetGLState()
          }
        }
      },
      i.SpritePlugin = function (e, t) {
        function r() {
          var t = u.createProgram(),
          r = u.createShader(u.VERTEX_SHADER),
          i = u.createShader(u.FRAGMENT_SHADER);
          return u.shaderSource(
            r,
            [
              'precision ' + e.getPrecision() + ' float;',
              'uniform mat4 modelViewMatrix;',
              'uniform mat4 projectionMatrix;',
              'uniform float rotation;',
              'uniform vec2 scale;',
              'uniform vec2 uvOffset;',
              'uniform vec2 uvScale;',
              'attribute vec2 position;',
              'attribute vec2 uv;',
              'varying vec2 vUV;',
              'void main() {',
              'vUV = uvOffset + uv * uvScale;',
              'vec2 alignedPosition = position * scale;',
              'vec2 rotatedPosition;',
              'rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;',
              'rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;',
              'vec4 finalPosition;',
              'finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );',
              'finalPosition.xy += rotatedPosition;',
              'finalPosition = projectionMatrix * finalPosition;',
              'gl_Position = finalPosition;',
              '}'
            ].join('\n')
          ),
          u.shaderSource(
            i,
            [
              'precision ' + e.getPrecision() + ' float;',
              'uniform vec3 color;',
              'uniform sampler2D map;',
              'uniform float opacity;',
              'uniform int fogType;',
              'uniform vec3 fogColor;',
              'uniform float fogDensity;',
              'uniform float fogNear;',
              'uniform float fogFar;',
              'uniform float alphaTest;',
              'varying vec2 vUV;',
              'void main() {',
              'vec4 texture = texture2D( map, vUV );',
              'if ( texture.a < alphaTest ) discard;',
              'gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );',
              'if ( fogType > 0 ) {',
              'float depth = gl_FragCoord.z / gl_FragCoord.w;',
              'float fogFactor = 0.0;',
              'if ( fogType == 1 ) {',
              'fogFactor = smoothstep( fogNear, fogFar, depth );',
              '} else {',
              'const float LOG2 = 1.442695;',
              'float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );',
              'fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );',
              '}',
              'gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );',
              '}',
              '}'
            ].join('\n')
          ),
          u.compileShader(r),
          u.compileShader(i),
          u.attachShader(t, r),
          u.attachShader(t, i),
          u.linkProgram(t),
          t
        }
        function n(e, t) {
          return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : t.id - e.id
        }
        var o,
        a,
        s,
        h,
        c,
        l,
        u = e.context,
        d = new i.Vector3,
        f = new i.Quaternion,
        p = new i.Vector3,
        m = function () {
          var e = new Float32Array([ - 0.5,
          - 0.5,
          0,
          0,
          0.5,
          - 0.5,
          1,
          0,
          0.5,
          0.5,
          1,
          1,
          - 0.5,
          0.5,
          0,
          1]),
          t = new Uint16Array([0,
          1,
          2,
          0,
          2,
          3]);
          o = u.createBuffer(),
          a = u.createBuffer(),
          u.bindBuffer(u.ARRAY_BUFFER, o),
          u.bufferData(u.ARRAY_BUFFER, e, u.STATIC_DRAW),
          u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, a),
          u.bufferData(u.ELEMENT_ARRAY_BUFFER, t, u.STATIC_DRAW),
          s = r(),
          h = {
            position: u.getAttribLocation(s, 'position'),
            uv: u.getAttribLocation(s, 'uv')
          },
          c = {
            uvOffset: u.getUniformLocation(s, 'uvOffset'),
            uvScale: u.getUniformLocation(s, 'uvScale'),
            rotation: u.getUniformLocation(s, 'rotation'),
            scale: u.getUniformLocation(s, 'scale'),
            color: u.getUniformLocation(s, 'color'),
            map: u.getUniformLocation(s, 'map'),
            opacity: u.getUniformLocation(s, 'opacity'),
            modelViewMatrix: u.getUniformLocation(s, 'modelViewMatrix'),
            projectionMatrix: u.getUniformLocation(s, 'projectionMatrix'),
            fogType: u.getUniformLocation(s, 'fogType'),
            fogDensity: u.getUniformLocation(s, 'fogDensity'),
            fogNear: u.getUniformLocation(s, 'fogNear'),
            fogFar: u.getUniformLocation(s, 'fogFar'),
            fogColor: u.getUniformLocation(s, 'fogColor'),
            alphaTest: u.getUniformLocation(s, 'alphaTest')
          };
          var n = document.createElement('canvas');
          n.width = 8,
          n.height = 8;
          var d = n.getContext('2d');
          d.fillStyle = 'white',
          d.fillRect(0, 0, 8, 8),
          l = new i.Texture(n),
          l.needsUpdate = !0
        };
        this.render = function (r, v) {
          if (0 !== t.length) {
            void 0 === s &&
            m(),
            u.useProgram(s),
            u.enableVertexAttribArray(h.position),
            u.enableVertexAttribArray(h.uv),
            u.disable(u.CULL_FACE),
            u.enable(u.BLEND),
            u.bindBuffer(u.ARRAY_BUFFER, o),
            u.vertexAttribPointer(h.position, 2, u.FLOAT, !1, 16, 0),
            u.vertexAttribPointer(h.uv, 2, u.FLOAT, !1, 16, 8),
            u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, a),
            u.uniformMatrix4fv(c.projectionMatrix, !1, v.projectionMatrix.elements),
            u.activeTexture(u.TEXTURE0),
            u.uniform1i(c.map, 0);
            var g = 0,
            y = 0,
            x = r.fog;
            x ? (
              u.uniform3f(c.fogColor, x.color.r, x.color.g, x.color.b),
              x instanceof i.Fog ? (
                u.uniform1f(c.fogNear, x.near),
                u.uniform1f(c.fogFar, x.far),
                u.uniform1i(c.fogType, 1),
                g = 1,
                y = 1
              ) : x instanceof i.FogExp2 &&
              (
                u.uniform1f(c.fogDensity, x.density),
                u.uniform1i(c.fogType, 2),
                g = 2,
                y = 2
              )
            ) : (u.uniform1i(c.fogType, 0), g = 0, y = 0);
            for (var _ = 0, w = t.length; w > _; _++) {
              var b = t[_];
              b._modelViewMatrix.multiplyMatrices(v.matrixWorldInverse, b.matrixWorld),
              b.z = - b._modelViewMatrix.elements[14]
            }
            t.sort(n);
            for (var M = [], _ = 0, w = t.length; w > _; _++) {
              var b = t[_],
              S = b.material;
              u.uniform1f(c.alphaTest, S.alphaTest),
              u.uniformMatrix4fv(c.modelViewMatrix, !1, b._modelViewMatrix.elements),
              b.matrixWorld.decompose(d, f, p),
              M[0] = p.x,
              M[1] = p.y;
              var T = 0;
              r.fog &&
              S.fog &&
              (T = y),
              g !== T &&
              (u.uniform1i(c.fogType, T), g = T),
              null !== S.map ? (
                u.uniform2f(c.uvOffset, S.map.offset.x, S.map.offset.y),
                u.uniform2f(c.uvScale, S.map.repeat.x, S.map.repeat.y)
              ) : (u.uniform2f(c.uvOffset, 0, 0), u.uniform2f(c.uvScale, 1, 1)),
              u.uniform1f(c.opacity, S.opacity),
              u.uniform3f(c.color, S.color.r, S.color.g, S.color.b),
              u.uniform1f(c.rotation, S.rotation),
              u.uniform2fv(c.scale, M),
              e.state.setBlending(S.blending, S.blendEquation, S.blendSrc, S.blendDst),
              e.state.setDepthTest(S.depthTest),
              e.state.setDepthWrite(S.depthWrite),
              S.map &&
              S.map.image &&
              S.map.image.width ? e.setTexture(S.map, 0) : e.setTexture(l, 0),
              u.drawElements(u.TRIANGLES, 6, u.UNSIGNED_SHORT, 0)
            }
            u.enable(u.CULL_FACE),
            e.resetGLState()
          }
        }
      },
      i.GeometryUtils = {
        merge: function (e, t, r) {
          i.warn(
            'THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.'
          );
          var n;
          t instanceof i.Mesh &&
          (t.matrixAutoUpdate && t.updateMatrix(), n = t.matrix, t = t.geometry),
          e.merge(t, n, r)
        },
        center: function (e) {
          return i.warn(
            'THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.'
          ),
          e.center()
        }
      },
      i.ImageUtils = {
        crossOrigin: void 0,
        loadTexture: function (e, t, r, n) {
          var o = new i.ImageLoader;
          o.crossOrigin = this.crossOrigin;
          var a = new i.Texture(void 0, t);
          return o.load(
            e,
            function (e) {
              a.image = e,
              a.needsUpdate = !0,
              r &&
              r(a)
            },
            void 0,
            function (e) {
              n &&
              n(e)
            }
          ),
          a.sourceFile = e,
          a
        },
        loadTextureCube: function (e, t, r, n) {
          var o = [],
          a = new i.ImageLoader;
          a.crossOrigin = this.crossOrigin;
          var s = new i.CubeTexture(o, t);
          s.flipY = !1;
          for (
            var h = 0,
            c = function (t) {
              a.load(
                e[t],
                function (e) {
                  s.images[t] = e,
                  h += 1,
                  6 === h &&
                  (s.needsUpdate = !0, r && r(s))
                },
                void 0,
                n
              )
            },
            l = 0,
            u = e.length;
            u > l;
            ++l
          ) c(l);
          return s
        },
        loadCompressedTexture: function () {
          i.error(
            'THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.'
          )
        },
        loadCompressedTextureCube: function () {
          i.error(
            'THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.'
          )
        },
        getNormalMap: function (e, t) {
          var r = function (e, t) {
            return [e[1] * t[2] - e[2] * t[1],
            e[2] * t[0] - e[0] * t[2],
            e[0] * t[1] - e[1] * t[0]]
          },
          i = function (e, t) {
            return [e[0] - t[0],
            e[1] - t[1],
            e[2] - t[2]]
          },
          n = function (e) {
            var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
            return [e[0] / t,
            e[1] / t,
            e[2] / t]
          };
          t = 1 | t;
          var o = e.width,
          a = e.height,
          s = document.createElement('canvas');
          s.width = o,
          s.height = a;
          var h = s.getContext('2d');
          h.drawImage(e, 0, 0);
          for (
            var c = h.getImageData(0, 0, o, a).data,
            l = h.createImageData(o, a),
            u = l.data,
            d = 0;
            o > d;
            d++
          ) for (var f = 0; a > f; f++) {
            var p = 0 > f - 1 ? 0 : f - 1,
            m = f + 1 > a - 1 ? a - 1 : f + 1,
            v = 0 > d - 1 ? 0 : d - 1,
            g = d + 1 > o - 1 ? o - 1 : d + 1,
            y = [],
            x = [
              0,
              0,
              c[4 * (f * o + d)] / 255 * t
            ];
            y.push([ - 1,
            0,
            c[4 * (f * o + v)] / 255 * t]),
            y.push([ - 1,
            - 1,
            c[4 * (p * o + v)] / 255 * t]),
            y.push([0,
            - 1,
            c[4 * (p * o + d)] / 255 * t]),
            y.push([1,
            - 1,
            c[4 * (p * o + g)] / 255 * t]),
            y.push([1,
            0,
            c[4 * (f * o + g)] / 255 * t]),
            y.push([1,
            1,
            c[4 * (m * o + g)] / 255 * t]),
            y.push([0,
            1,
            c[4 * (m * o + d)] / 255 * t]),
            y.push([ - 1,
            1,
            c[4 * (m * o + v)] / 255 * t]);
            for (var _ = [], w = y.length, b = 0; w > b; b++) {
              var M = y[b],
              S = y[(b + 1) % w];
              M = i(M, x),
              S = i(S, x),
              _.push(n(r(M, S)))
            }
            for (var T = [
              0,
              0,
              0
            ], b = 0; b < _.length; b++) T[0] += _[b][0],
            T[1] += _[b][1],
            T[2] += _[b][2];
            T[0] /= _.length,
            T[1] /= _.length,
            T[2] /= _.length;
            var C = 4 * (f * o + d);
            u[C] = (T[0] + 1) / 2 * 255 | 0,
            u[C + 1] = (T[1] + 1) / 2 * 255 | 0,
            u[C + 2] = 255 * T[2] | 0,
            u[C + 3] = 255
          }
          return h.putImageData(l, 0, 0),
          s
        },
        generateDataTexture: function (e, t, r) {
          for (
            var n = e * t,
            o = new Uint8Array(3 * n),
            a = Math.floor(255 * r.r),
            s = Math.floor(255 * r.g),
            h = Math.floor(255 * r.b),
            c = 0;
            n > c;
            c++
          ) o[3 * c] = a,
          o[3 * c + 1] = s,
          o[3 * c + 2] = h;
          var l = new i.DataTexture(o, e, t, i.RGBFormat);
          return l.needsUpdate = !0,
          l
        }
      },
      i.SceneUtils = {
        createMultiMaterialObject: function (e, t) {
          for (var r = new i.Object3D, n = 0, o = t.length; o > n; n++) r.add(new i.Mesh(e, t[n]));
          return r
        },
        detach: function (e, t, r) {
          e.applyMatrix(t.matrixWorld),
          t.remove(e),
          r.add(e)
        },
        attach: function (e, t, r) {
          var n = new i.Matrix4;
          n.getInverse(r.matrixWorld),
          e.applyMatrix(n),
          t.remove(e),
          r.add(e)
        }
      },
      i.FontUtils = {
        faces: {
        },
        face: 'helvetiker',
        weight: 'normal',
        style: 'normal',
        size: 150,
        divisions: 10,
        getFace: function () {
          try {
            return this.faces[this.face][this.weight][this.style]
          } catch (e) {
            throw 'The font ' + this.face + ' with ' + this.weight + ' weight and ' + this.style + ' style is missing.'
          }
        },
        loadFace: function (e) {
          var t = e.familyName.toLowerCase(),
          r = this;
          return r.faces[t] = r.faces[t] ||
          {
          },
          r.faces[t][e.cssFontWeight] = r.faces[t][e.cssFontWeight] ||
          {
          },
          r.faces[t][e.cssFontWeight][e.cssFontStyle] = e,
          r.faces[t][e.cssFontWeight][e.cssFontStyle] = e,
          e
        },
        drawText: function (e) {
          var t,
          r = this.getFace(),
          n = this.size / r.resolution,
          o = 0,
          a = String(e).split(''),
          s = a.length,
          h = [];
          for (t = 0; s > t; t++) {
            var c = new i.Path,
            l = this.extractGlyphPoints(a[t], r, n, o, c);
            o += l.offset,
            h.push(l.path)
          }
          var u = o / 2;
          return {
            paths: h,
            offset: u
          }
        },
        extractGlyphPoints: function (e, t, r, n, o) {
          var a,
          s,
          h,
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          v,
          g,
          y,
          x,
          _,
          w,
          b,
          M,
          S,
          T = [],
          C = t.glyphs[e] ||
          t.glyphs['?'];
          if (C) {
            if (C.o) for (
              c = C._cachedOutline ||
              (C._cachedOutline = C.o.split(' ')),
              u = c.length,
              d = r,
              f = r,
              a = 0;
              u > a;
            ) switch (l = c[a++]) {
              case 'm':
                p = c[a++] * d + n,
                m = c[a++] * f,
                o.moveTo(p, m);
                break;
              case 'l':
                p = c[a++] * d + n,
                m = c[a++] * f,
                o.lineTo(p, m);
                break;
              case 'q':
                if (
                  v = c[a++] * d + n,
                  g = c[a++] * f,
                  _ = c[a++] * d + n,
                  w = c[a++] * f,
                  o.quadraticCurveTo(_, w, v, g),
                  S = T[T.length - 1]
                ) for (y = S.x, x = S.y, s = 1, h = this.divisions; h >= s; s++) {
                  var A = s / h;
                  i.Shape.Utils.b2(A, y, _, v),
                  i.Shape.Utils.b2(A, x, w, g)
                }
                break;
              case 'b':
                if (
                  v = c[a++] * d + n,
                  g = c[a++] * f,
                  _ = c[a++] * d + n,
                  w = c[a++] * f,
                  b = c[a++] * d + n,
                  M = c[a++] * f,
                  o.bezierCurveTo(_, w, b, M, v, g),
                  S = T[T.length - 1]
                ) for (y = S.x, x = S.y, s = 1, h = this.divisions; h >= s; s++) {
                  var A = s / h;
                  i.Shape.Utils.b3(A, y, _, b, v),
                  i.Shape.Utils.b3(A, x, w, M, g)
                }
            }
            return {
              offset: C.ha * r,
              path: o
            }
          }
        }
      },
      i.FontUtils.generateShapes = function (e, t) {
        t = t ||
        {
        };
        var r = void 0 !== t.size ? t.size : 100,
        n = void 0 !== t.curveSegments ? t.curveSegments : 4,
        o = void 0 !== t.font ? t.font : 'helvetiker',
        a = void 0 !== t.weight ? t.weight : 'normal',
        s = void 0 !== t.style ? t.style : 'normal';
        i.FontUtils.size = r,
        i.FontUtils.divisions = n,
        i.FontUtils.face = o,
        i.FontUtils.weight = a,
        i.FontUtils.style = s;
        for (
          var h = i.FontUtils.drawText(e),
          c = h.paths,
          l = [],
          u = 0,
          d = c.length;
          d > u;
          u++
        ) Array.prototype.push.apply(l, c[u].toShapes());
        return l
      },
      function (e) {
        var t = 1e-10,
        r = function (e, t) {
          var r = e.length;
          if (3 > r) return null;
          var a,
          s,
          h,
          c = [],
          l = [],
          u = [];
          if (n(e) > 0) for (s = 0; r > s; s++) l[s] = s;
           else for (s = 0; r > s; s++) l[s] = r - 1 - s;
          var d = r,
          f = 2 * d;
          for (s = d - 1; d > 2; ) {
            if (f-- <= 0) return i.warn(
              'THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()'
            ),
            t ? u : c;
            if (
              a = s,
              a >= d &&
              (a = 0),
              s = a + 1,
              s >= d &&
              (s = 0),
              h = s + 1,
              h >= d &&
              (h = 0),
              o(e, a, s, h, d, l)
            ) {
              var p,
              m,
              v,
              g,
              y;
              for (
                p = l[a],
                m = l[s],
                v = l[h],
                c.push([e[p],
                e[m],
                e[v]]),
                u.push([l[a],
                l[s],
                l[h]]),
                g = s,
                y = s + 1;
                d > y;
                g++,
                y++
              ) l[g] = l[y];
              d--,
              f = 2 * d
            }
          }
          return t ? u : c
        },
        n = function (e) {
          for (var t = e.length, r = 0, i = t - 1, n = 0; t > n; i = n++) r += e[i].x * e[n].y - e[n].x * e[i].y;
          return 0.5 * r
        },
        o = function (e, r, i, n, o, a) {
          var s,
          h,
          c,
          l,
          u,
          d,
          f,
          p,
          m;
          if (
            h = e[a[r]].x,
            c = e[a[r]].y,
            l = e[a[i]].x,
            u = e[a[i]].y,
            d = e[a[n]].x,
            f = e[a[n]].y,
            t > (l - h) * (f - c) - (u - c) * (d - h)
          ) return !1;
          var v,
          g,
          y,
          x,
          _,
          w,
          b,
          M,
          S,
          T,
          C,
          A,
          E,
          P,
          D;
          for (v = d - l, g = f - u, y = h - d, x = c - f, _ = l - h, w = u - c, s = 0; o > s; s++) if (
            p = e[a[s]].x,
            m = e[a[s]].y,
            !(p === h && m === c || p === l && m === u || p === d && m === f) &&
            (
              b = p - h,
              M = m - c,
              S = p - l,
              T = m - u,
              C = p - d,
              A = m - f,
              D = v * T - g * S,
              E = _ * M - w * b,
              P = y * A - x * C,
              D >= - t &&
              P >= - t &&
              E >= - t
            )
          ) return !1;
          return !0
        };
        return e.Triangulate = r,
        e.Triangulate.area = n,
        e
      }(i.FontUtils),
      self._typeface_js = {
        faces: i.FontUtils.faces,
        loadFace: i.FontUtils.loadFace
      },
      i.typeface_js = self._typeface_js,
      i.Audio = function (e) {
        i.Object3D.call(this),
        this.type = 'Audio',
        this.context = e.context,
        this.source = this.context.createBufferSource(),
        this.source.onended = this.onEnded.bind(this),
        this.gain = this.context.createGain(),
        this.gain.connect(this.context.destination),
        this.panner = this.context.createPanner(),
        this.panner.connect(this.gain),
        this.autoplay = !1,
        this.startTime = 0,
        this.isPlaying = !1
      },
      i.Audio.prototype = Object.create(i.Object3D.prototype),
      i.Audio.prototype.constructor = i.Audio,
      i.Audio.prototype.load = function (e) {
        var t = this,
        r = new XMLHttpRequest;
        return r.open('GET', e, !0),
        r.responseType = 'arraybuffer',
        r.onload = function (e) {
          t.context.decodeAudioData(
            this.response,
            function (e) {
              t.source.buffer = e,
              t.autoplay &&
              t.play()
            }
          )
        },
        r.send(),
        this
      },
      i.Audio.prototype.play = function () {
        if (this.isPlaying === !0) return void i.warn('THREE.Audio: Audio is already playing.');
        var e = this.context.createBufferSource();
        e.buffer = this.source.buffer,
        e.loop = this.source.loop,
        e.onended = this.source.onended,
        e.connect(this.panner),
        e.start(0, this.startTime),
        this.isPlaying = !0,
        this.source = e
      },
      i.Audio.prototype.pause = function () {
        this.source.stop(),
        this.startTime = this.context.currentTime
      },
      i.Audio.prototype.stop = function () {
        this.source.stop(),
        this.startTime = 0
      },
      i.Audio.prototype.onEnded = function () {
        this.isPlaying = !1
      },
      i.Audio.prototype.setLoop = function (e) {
        this.source.loop = e
      },
      i.Audio.prototype.setRefDistance = function (e) {
        this.panner.refDistance = e
      },
      i.Audio.prototype.setRolloffFactor = function (e) {
        this.panner.rolloffFactor = e
      },
      i.Audio.prototype.setVolume = function (e) {
        this.gain.gain.value = e
      },
      i.Audio.prototype.updateMatrixWorld = function () {
        var e = new i.Vector3;
        return function (t) {
          i.Object3D.prototype.updateMatrixWorld.call(this, t),
          e.setFromMatrixPosition(this.matrixWorld),
          this.panner.setPosition(e.x, e.y, e.z)
        }
      }(),
      i.AudioListener = function () {
        i.Object3D.call(this),
        this.type = 'AudioListener',
        this.context = new (window.AudioContext || window.webkitAudioContext)
      },
      i.AudioListener.prototype = Object.create(i.Object3D.prototype),
      i.AudioListener.prototype.constructor = i.AudioListener,
      i.AudioListener.prototype.updateMatrixWorld = function () {
        var e = new i.Vector3,
        t = new i.Quaternion,
        r = new i.Vector3,
        n = new i.Vector3,
        o = new i.Vector3,
        a = new i.Vector3;
        return function (s) {
          i.Object3D.prototype.updateMatrixWorld.call(this, s);
          var h = this.context.listener,
          c = this.up;
          this.matrixWorld.decompose(e, t, r),
          n.set(0, 0, - 1).applyQuaternion(t),
          o.subVectors(e, a),
          h.setPosition(e.x, e.y, e.z),
          h.setOrientation(n.x, n.y, n.z, c.x, c.y, c.z),
          h.setVelocity(o.x, o.y, o.z),
          a.copy(e)
        }
      }(),
      i.Curve = function () {
      },
      i.Curve.prototype.getPoint = function (e) {
        return i.warn('THREE.Curve: Warning, getPoint() not implemented!'),
        null
      },
      i.Curve.prototype.getPointAt = function (e) {
        var t = this.getUtoTmapping(e);
        return this.getPoint(t)
      },
      i.Curve.prototype.getPoints = function (e) {
        e ||
        (e = 5);
        var t,
        r = [];
        for (t = 0; e >= t; t++) r.push(this.getPoint(t / e));
        return r
      },
      i.Curve.prototype.getSpacedPoints = function (e) {
        e ||
        (e = 5);
        var t,
        r = [];
        for (t = 0; e >= t; t++) r.push(this.getPointAt(t / e));
        return r
      },
      i.Curve.prototype.getLength = function () {
        var e = this.getLengths();
        return e[e.length - 1]
      },
      i.Curve.prototype.getLengths = function (e) {
        if (
          e ||
          (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
          this.cacheArcLengths &&
          this.cacheArcLengths.length == e + 1 &&
          !this.needsUpdate
        ) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var t,
        r,
        i = [],
        n = this.getPoint(0),
        o = 0;
        for (i.push(0), r = 1; e >= r; r++) t = this.getPoint(r / e),
        o += t.distanceTo(n),
        i.push(o),
        n = t;
        return this.cacheArcLengths = i,
        i
      },
      i.Curve.prototype.updateArcLengths = function () {
        this.needsUpdate = !0,
        this.getLengths()
      },
      i.Curve.prototype.getUtoTmapping = function (e, t) {
        var r,
        i = this.getLengths(),
        n = 0,
        o = i.length;
        r = t ? t : e * i[o - 1];
        for (var a, s = 0, h = o - 1; h >= s; ) if (n = Math.floor(s + (h - s) / 2), a = i[n] - r, 0 > a) s = n + 1;
         else {
          if (!(a > 0)) {
            h = n;
            break
          }
          h = n - 1
        }
        if (n = h, i[n] == r) {
          var c = n / (o - 1);
          return c
        }
        var l = i[n],
        u = i[n + 1],
        d = u - l,
        f = (r - l) / d,
        c = (n + f) / (o - 1);
        return c
      },
      i.Curve.prototype.getTangent = function (e) {
        var t = 0.0001,
        r = e - t,
        i = e + t;
        0 > r &&
        (r = 0),
        i > 1 &&
        (i = 1);
        var n = this.getPoint(r),
        o = this.getPoint(i),
        a = o.clone().sub(n);
        return a.normalize()
      },
      i.Curve.prototype.getTangentAt = function (e) {
        var t = this.getUtoTmapping(e);
        return this.getTangent(t)
      },
      i.Curve.Utils = {
        tangentQuadraticBezier: function (e, t, r, i) {
          return 2 * (1 - e) * (r - t) + 2 * e * (i - r)
        },
        tangentCubicBezier: function (e, t, r, i, n) {
          return - 3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * i * (1 - e) - 3 * e * e * i + 3 * e * e * n
        },
        tangentSpline: function (e, t, r, i, n) {
          var o = 6 * e * e - 6 * e,
          a = 3 * e * e - 4 * e + 1,
          s = - 6 * e * e + 6 * e,
          h = 3 * e * e - 2 * e;
          return o + a + s + h
        },
        interpolate: function (e, t, r, i, n) {
          var o = 0.5 * (r - e),
          a = 0.5 * (i - t),
          s = n * n,
          h = n * s;
          return (2 * t - 2 * r + o + a) * h + ( - 3 * t + 3 * r - 2 * o - a) * s + o * n + t
        }
      },
      i.Curve.create = function (e, t) {
        return e.prototype = Object.create(i.Curve.prototype),
        e.prototype.constructor = e,
        e.prototype.getPoint = t,
        e
      },
      i.CurvePath = function () {
        this.curves = [],
        this.bends = [],
        this.autoClose = !1
      },
      i.CurvePath.prototype = Object.create(i.Curve.prototype),
      i.CurvePath.prototype.constructor = i.CurvePath,
      i.CurvePath.prototype.add = function (e) {
        this.curves.push(e)
      },
      i.CurvePath.prototype.checkConnection = function () {
      },
      i.CurvePath.prototype.closePath = function () {
        var e = this.curves[0].getPoint(0),
        t = this.curves[this.curves.length - 1].getPoint(1);
        e.equals(t) ||
        this.curves.push(new i.LineCurve(t, e))
      },
      i.CurvePath.prototype.getPoint = function (e) {
        for (
          var t,
          r,
          i = e * this.getLength(),
          n = this.getCurveLengths(),
          o = 0;
          o < n.length;
        ) {
          if (n[o] >= i) {
            t = n[o] - i,
            r = this.curves[o];
            var a = 1 - t / r.getLength();
            return r.getPointAt(a)
          }
          o++
        }
        return null
      },
      i.CurvePath.prototype.getLength = function () {
        var e = this.getCurveLengths();
        return e[e.length - 1]
      },
      i.CurvePath.prototype.getCurveLengths = function () {
        if (
          this.cacheLengths &&
          this.cacheLengths.length == this.curves.length
        ) return this.cacheLengths;
        var e,
        t = [],
        r = 0,
        i = this.curves.length;
        for (e = 0; i > e; e++) r += this.curves[e].getLength(),
        t.push(r);
        return this.cacheLengths = t,
        t
      },
      i.CurvePath.prototype.getBoundingBox = function () {
        var e,
        t,
        r,
        n,
        o,
        a,
        s = this.getPoints();
        e = t = Number.NEGATIVE_INFINITY,
        n = o = Number.POSITIVE_INFINITY;
        var h,
        c,
        l,
        u,
        d = s[0] instanceof i.Vector3;
        for (u = d ? new i.Vector3 : new i.Vector2, c = 0, l = s.length; l > c; c++) h = s[c],
        h.x > e ? e = h.x : h.x < n &&
        (n = h.x),
        h.y > t ? t = h.y : h.y < o &&
        (o = h.y),
        d &&
        (h.z > r ? r = h.z : h.z < a && (a = h.z)),
        u.add(h);
        var f = {
          minX: n,
          minY: o,
          maxX: e,
          maxY: t
        };
        return d &&
        (f.maxZ = r, f.minZ = a),
        f
      },
      i.CurvePath.prototype.createPointsGeometry = function (e) {
        var t = this.getPoints(e, !0);
        return this.createGeometry(t)
      },
      i.CurvePath.prototype.createSpacedPointsGeometry = function (e) {
        var t = this.getSpacedPoints(e, !0);
        return this.createGeometry(t)
      },
      i.CurvePath.prototype.createGeometry = function (e) {
        for (var t = new i.Geometry, r = 0; r < e.length; r++) t.vertices.push(new i.Vector3(e[r].x, e[r].y, e[r].z || 0));
        return t
      },
      i.CurvePath.prototype.addWrapPath = function (e) {
        this.bends.push(e)
      },
      i.CurvePath.prototype.getTransformedPoints = function (e, t) {
        var r,
        i,
        n = this.getPoints(e);
        for (t || (t = this.bends), r = 0, i = t.length; i > r; r++) n = this.getWrapPoints(n, t[r]);
        return n
      },
      i.CurvePath.prototype.getTransformedSpacedPoints = function (e, t) {
        var r,
        i,
        n = this.getSpacedPoints(e);
        for (t || (t = this.bends), r = 0, i = t.length; i > r; r++) n = this.getWrapPoints(n, t[r]);
        return n
      },
      i.CurvePath.prototype.getWrapPoints = function (e, t) {
        var r,
        i,
        n,
        o,
        a,
        s,
        h = this.getBoundingBox();
        for (r = 0, i = e.length; i > r; r++) {
          n = e[r],
          o = n.x,
          a = n.y,
          s = o / h.maxX,
          s = t.getUtoTmapping(s, o);
          var c = t.getPoint(s),
          l = t.getTangent(s);
          l.set( - l.y, l.x).multiplyScalar(a),
          n.x = c.x + l.x,
          n.y = c.y + l.y
        }
        return e
      },
      i.Gyroscope = function () {
        i.Object3D.call(this)
      },
      i.Gyroscope.prototype = Object.create(i.Object3D.prototype),
      i.Gyroscope.prototype.constructor = i.Gyroscope,
      i.Gyroscope.prototype.updateMatrixWorld = function () {
        var e = new i.Vector3,
        t = new i.Quaternion,
        r = new i.Vector3,
        n = new i.Vector3,
        o = new i.Quaternion,
        a = new i.Vector3;
        return function (i) {
          this.matrixAutoUpdate &&
          this.updateMatrix(),
          (this.matrixWorldNeedsUpdate || i) &&
          (
            this.parent ? (
              this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
              this.matrixWorld.decompose(n, o, a),
              this.matrix.decompose(e, t, r),
              this.matrixWorld.compose(n, t, a)
            ) : this.matrixWorld.copy(this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            i = !0
          );
          for (var s = 0, h = this.children.length; h > s; s++) this.children[s].updateMatrixWorld(i)
        }
      }(),
      i.Path = function (e) {
        i.CurvePath.call(this),
        this.actions = [],
        e &&
        this.fromPoints(e)
      },
      i.Path.prototype = Object.create(i.CurvePath.prototype),
      i.Path.prototype.constructor = i.Path,
      i.PathActions = {
        MOVE_TO: 'moveTo',
        LINE_TO: 'lineTo',
        QUADRATIC_CURVE_TO: 'quadraticCurveTo',
        BEZIER_CURVE_TO: 'bezierCurveTo',
        CSPLINE_THRU: 'splineThru',
        ARC: 'arc',
        ELLIPSE: 'ellipse'
      },
      i.Path.prototype.fromPoints = function (e) {
        this.moveTo(e[0].x, e[0].y);
        for (var t = 1, r = e.length; r > t; t++) this.lineTo(e[t].x, e[t].y)
      },
      i.Path.prototype.moveTo = function (e, t) {
        var r = Array.prototype.slice.call(arguments);
        this.actions.push({
          action: i.PathActions.MOVE_TO,
          args: r
        })
      },
      i.Path.prototype.lineTo = function (e, t) {
        var r = Array.prototype.slice.call(arguments),
        n = this.actions[this.actions.length - 1].args,
        o = n[n.length - 2],
        a = n[n.length - 1],
        s = new i.LineCurve(new i.Vector2(o, a), new i.Vector2(e, t));
        this.curves.push(s),
        this.actions.push({
          action: i.PathActions.LINE_TO,
          args: r
        })
      },
      i.Path.prototype.quadraticCurveTo = function (e, t, r, n) {
        var o = Array.prototype.slice.call(arguments),
        a = this.actions[this.actions.length - 1].args,
        s = a[a.length - 2],
        h = a[a.length - 1],
        c = new i.QuadraticBezierCurve(new i.Vector2(s, h), new i.Vector2(e, t), new i.Vector2(r, n));
        this.curves.push(c),
        this.actions.push({
          action: i.PathActions.QUADRATIC_CURVE_TO,
          args: o
        })
      },
      i.Path.prototype.bezierCurveTo = function (e, t, r, n, o, a) {
        var s = Array.prototype.slice.call(arguments),
        h = this.actions[this.actions.length - 1].args,
        c = h[h.length - 2],
        l = h[h.length - 1],
        u = new i.CubicBezierCurve(
          new i.Vector2(c, l),
          new i.Vector2(e, t),
          new i.Vector2(r, n),
          new i.Vector2(o, a)
        );
        this.curves.push(u),
        this.actions.push({
          action: i.PathActions.BEZIER_CURVE_TO,
          args: s
        })
      },
      i.Path.prototype.splineThru = function (e) {
        var t = Array.prototype.slice.call(arguments),
        r = this.actions[this.actions.length - 1].args,
        n = r[r.length - 2],
        o = r[r.length - 1],
        a = [
          new i.Vector2(n, o)
        ];
        Array.prototype.push.apply(a, e);
        var s = new i.SplineCurve(a);
        this.curves.push(s),
        this.actions.push({
          action: i.PathActions.CSPLINE_THRU,
          args: t
        })
      },
      i.Path.prototype.arc = function (e, t, r, i, n, o) {
        var a = this.actions[this.actions.length - 1].args,
        s = a[a.length - 2],
        h = a[a.length - 1];
        this.absarc(e + s, t + h, r, i, n, o)
      },
      i.Path.prototype.absarc = function (e, t, r, i, n, o) {
        this.absellipse(e, t, r, r, i, n, o)
      },
      i.Path.prototype.ellipse = function (e, t, r, i, n, o, a) {
        var s = this.actions[this.actions.length - 1].args,
        h = s[s.length - 2],
        c = s[s.length - 1];
        this.absellipse(e + h, t + c, r, i, n, o, a)
      },
      i.Path.prototype.absellipse = function (e, t, r, n, o, a, s) {
        var h = Array.prototype.slice.call(arguments),
        c = new i.EllipseCurve(e, t, r, n, o, a, s);
        this.curves.push(c);
        var l = c.getPoint(1);
        h.push(l.x),
        h.push(l.y),
        this.actions.push({
          action: i.PathActions.ELLIPSE,
          args: h
        })
      },
      i.Path.prototype.getSpacedPoints = function (e, t) {
        e ||
        (e = 40);
        for (var r = [], i = 0; e > i; i++) r.push(this.getPoint(i / e));
        return r
      },
      i.Path.prototype.getPoints = function (e, t) {
        if (this.useSpacedPoints) return console.log('tata'),
        this.getSpacedPoints(e, t);
        e = e ||
        12;
        var r,
        n,
        o,
        a,
        s,
        h,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        v,
        g,
        y,
        x,
        _,
        w = [];
        for (r = 0, n = this.actions.length; n > r; r++) switch (o = this.actions[r], a = o.action, s = o.args, a) {
          case i.PathActions.MOVE_TO:
            w.push(new i.Vector2(s[0], s[1]));
            break;
          case i.PathActions.LINE_TO:
            w.push(new i.Vector2(s[0], s[1]));
            break;
          case i.PathActions.QUADRATIC_CURVE_TO:
            for (
              h = s[2],
              c = s[3],
              d = s[0],
              f = s[1],
              w.length > 0 ? (v = w[w.length - 1], p = v.x, m = v.y) : (v = this.actions[r - 1].args, p = v[v.length - 2], m = v[v.length - 1]),
              g = 1;
              e >= g;
              g++
            ) y = g / e,
            x = i.Shape.Utils.b2(y, p, d, h),
            _ = i.Shape.Utils.b2(y, m, f, c),
            w.push(new i.Vector2(x, _));
            break;
          case i.PathActions.BEZIER_CURVE_TO:
            for (
              h = s[4],
              c = s[5],
              d = s[0],
              f = s[1],
              l = s[2],
              u = s[3],
              w.length > 0 ? (v = w[w.length - 1], p = v.x, m = v.y) : (v = this.actions[r - 1].args, p = v[v.length - 2], m = v[v.length - 1]),
              g = 1;
              e >= g;
              g++
            ) y = g / e,
            x = i.Shape.Utils.b3(y, p, d, l, h),
            _ = i.Shape.Utils.b3(y, m, f, u, c),
            w.push(new i.Vector2(x, _));
            break;
          case i.PathActions.CSPLINE_THRU:
            v = this.actions[r - 1].args;
            var b = new i.Vector2(v[v.length - 2], v[v.length - 1]),
            M = [
              b
            ],
            S = e * s[0].length;
            M = M.concat(s[0]);
            var T = new i.SplineCurve(M);
            for (g = 1; S >= g; g++) w.push(T.getPointAt(g / S));
            break;
          case i.PathActions.ARC:
            var C,
            A = s[0],
            E = s[1],
            P = s[2],
            D = s[3],
            L = s[4],
            R = !!s[5],
            B = L - D,
            F = 2 * e;
            for (g = 1; F >= g; g++) y = g / F,
            R ||
            (y = 1 - y),
            C = D + y * B,
            x = A + P * Math.cos(C),
            _ = E + P * Math.sin(C),
            w.push(new i.Vector2(x, _));
            break;
          case i.PathActions.ELLIPSE:
            var C,
            A = s[0],
            E = s[1],
            U = s[2],
            O = s[3],
            D = s[4],
            L = s[5],
            R = !!s[6],
            B = L - D,
            F = 2 * e;
            for (g = 1; F >= g; g++) y = g / F,
            R ||
            (y = 1 - y),
            C = D + y * B,
            x = A + U * Math.cos(C),
            _ = E + O * Math.sin(C),
            w.push(new i.Vector2(x, _))
        }
        var V = w[w.length - 1],
        k = 1e-10;
        return Math.abs(V.x - w[0].x) < k &&
        Math.abs(V.y - w[0].y) < k &&
        w.splice(w.length - 1, 1),
        t &&
        w.push(w[0]),
        w
      },
      i.Path.prototype.toShapes = function (e, t) {
        function r(e) {
          var t,
          r,
          n,
          o,
          a,
          s = [],
          h = new i.Path;
          for (t = 0, r = e.length; r > t; t++) n = e[t],
          a = n.args,
          o = n.action,
          o == i.PathActions.MOVE_TO &&
          0 != h.actions.length &&
          (s.push(h), h = new i.Path),
          h[o].apply(h, a);
          return 0 != h.actions.length &&
          s.push(h),
          s
        }
        function n(e) {
          for (var t = [], r = 0, n = e.length; n > r; r++) {
            var o = e[r],
            a = new i.Shape;
            a.actions = o.actions,
            a.curves = o.curves,
            t.push(a)
          }
          return t
        }
        function o(e, t) {
          for (var r = 1e-10, i = t.length, n = !1, o = i - 1, a = 0; i > a; o = a++) {
            var s = t[o],
            h = t[a],
            c = h.x - s.x,
            l = h.y - s.y;
            if (Math.abs(l) > r) {
              if (0 > l && (s = t[a], c = - c, h = t[o], l = - l), e.y < s.y || e.y > h.y) continue;
              if (e.y == s.y) {
                if (e.x == s.x) return !0
              } else {
                var u = l * (e.x - s.x) - c * (e.y - s.y);
                if (0 == u) return !0;
                if (0 > u) continue;
                n = !n
              }
            } else {
              if (e.y != s.y) continue;
              if (h.x <= e.x && e.x <= s.x || s.x <= e.x && e.x <= h.x) return !0
            }
          }
          return n
        }
        var a = r(this.actions);
        if (0 == a.length) return [];
        if (t === !0) return n(a);
        var s,
        h,
        c,
        l = [];
        if (1 == a.length) return h = a[0],
        c = new i.Shape,
        c.actions = h.actions,
        c.curves = h.curves,
        l.push(c),
        l;
        var u = !i.Shape.Utils.isClockWise(a[0].getPoints());
        u = e ? !u : u;
        var d,
        f = [],
        p = [],
        m = [],
        v = 0;
        p[v] = void 0,
        m[v] = [];
        var g,
        y;
        for (g = 0, y = a.length; y > g; g++) h = a[g],
        d = h.getPoints(),
        s = i.Shape.Utils.isClockWise(d),
        s = e ? !s : s,
        s ? (
          !u &&
          p[v] &&
          v++,
          p[v] = {
            s: new i.Shape,
            p: d
          },
          p[v].s.actions = h.actions,
          p[v].s.curves = h.curves,
          u &&
          v++,
          m[v] = []
        ) : m[v].push({
          h: h,
          p: d[0]
        });
        if (!p[0]) return n(a);
        if (p.length > 1) {
          for (var x = !1, _ = [], w = 0, b = p.length; b > w; w++) f[w] = [];
          for (var w = 0, b = p.length; b > w; w++) for (var M = m[w], S = 0; S < M.length; S++) {
            for (var T = M[S], C = !0, A = 0; A < p.length; A++) o(T.p, p[A].p) &&
            (
              w != A &&
              _.push({
                froms: w,
                tos: A,
                hole: S
              }),
              C ? (C = !1, f[A].push(T)) : x = !0
            );
            C &&
            f[w].push(T)
          }
          _.length > 0 &&
          (x || (m = f))
        }
        var E,
        P,
        D;
        for (g = 0, y = p.length; y > g; g++) for (c = p[g].s, l.push(c), E = m[g], P = 0, D = E.length; D > P; P++) c.holes.push(E[P].h);
        return l
      },
      i.Shape = function () {
        i.Path.apply(this, arguments),
        this.holes = []
      },
      i.Shape.prototype = Object.create(i.Path.prototype),
      i.Shape.prototype.constructor = i.Shape,
      i.Shape.prototype.extrude = function (e) {
        var t = new i.ExtrudeGeometry(this, e);
        return t
      },
      i.Shape.prototype.makeGeometry = function (e) {
        var t = new i.ShapeGeometry(this, e);
        return t
      },
      i.Shape.prototype.getPointsHoles = function (e) {
        var t,
        r = this.holes.length,
        i = [];
        for (t = 0; r > t; t++) i[t] = this.holes[t].getTransformedPoints(e, this.bends);
        return i
      },
      i.Shape.prototype.getSpacedPointsHoles = function (e) {
        var t,
        r = this.holes.length,
        i = [];
        for (t = 0; r > t; t++) i[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends);
        return i
      },
      i.Shape.prototype.extractAllPoints = function (e) {
        return {
          shape: this.getTransformedPoints(e),
          holes: this.getPointsHoles(e)
        }
      },
      i.Shape.prototype.extractPoints = function (e) {
        return this.useSpacedPoints ? this.extractAllSpacedPoints(e) : this.extractAllPoints(e)
      },
      i.Shape.prototype.extractAllSpacedPoints = function (e) {
        return {
          shape: this.getTransformedSpacedPoints(e),
          holes: this.getSpacedPointsHoles(e)
        }
      },
      i.Shape.Utils = {
        triangulateShape: function (e, t) {
          function r(e, t, r) {
            return e.x != t.x ? e.x < t.x ? e.x <= r.x &&
            r.x <= t.x : t.x <= r.x &&
            r.x <= e.x : e.y < t.y ? e.y <= r.y &&
            r.y <= t.y : t.y <= r.y &&
            r.y <= e.y
          }
          function n(e, t, i, n, o) {
            var a = 1e-10,
            s = t.x - e.x,
            h = t.y - e.y,
            c = n.x - i.x,
            l = n.y - i.y,
            u = e.x - i.x,
            d = e.y - i.y,
            f = h * c - s * l,
            p = h * u - s * d;
            if (Math.abs(f) > a) {
              var m;
              if (f > 0) {
                if (0 > p || p > f) return [];
                if (m = l * u - c * d, 0 > m || m > f) return []
              } else {
                if (p > 0 || f > p) return [];
                if (m = l * u - c * d, m > 0 || f > m) return []
              }
              if (0 == m) return !o ||
              0 != p &&
              p != f ? [
                e
              ] : [];
              if (m == f) return !o ||
              0 != p &&
              p != f ? [
                t
              ] : [];
              if (0 == p) return [i];
              if (p == f) return [n];
              var v = m / f;
              return [{
                x: e.x + v * s,
                y: e.y + v * h
              }
              ]
            }
            if (0 != p || l * u != c * d) return [];
            var g = 0 == s &&
            0 == h,
            y = 0 == c &&
            0 == l;
            if (g && y) return e.x != i.x ||
            e.y != i.y ? [] : [
              e
            ];
            if (g) return r(i, n, e) ? [
              e
            ] : [];
            if (y) return r(e, t, i) ? [
              i
            ] : [];
            var x,
            _,
            w,
            b,
            M,
            S,
            T,
            C;
            return 0 != s ? (
              e.x < t.x ? (x = e, w = e.x, _ = t, b = t.x) : (x = t, w = t.x, _ = e, b = e.x),
              i.x < n.x ? (M = i, T = i.x, S = n, C = n.x) : (M = n, T = n.x, S = i, C = i.x)
            ) : (
              e.y < t.y ? (x = e, w = e.y, _ = t, b = t.y) : (x = t, w = t.y, _ = e, b = e.y),
              i.y < n.y ? (M = i, T = i.y, S = n, C = n.y) : (M = n, T = n.y, S = i, C = i.y)
            ),
            T >= w ? T > b ? [] : b == T ? o ? [] : [
              M
            ] : C >= b ? [
              M,
              _
            ] : [
              M,
              S
            ] : w > C ? [] : w == C ? o ? [] : [
              x
            ] : C >= b ? [
              x,
              _
            ] : [
              x,
              S
            ]
          }
          function o(e, t, r, i) {
            var n = 1e-10,
            o = t.x - e.x,
            a = t.y - e.y,
            s = r.x - e.x,
            h = r.y - e.y,
            c = i.x - e.x,
            l = i.y - e.y,
            u = o * h - a * s,
            d = o * l - a * c;
            if (Math.abs(u) > n) {
              var f = c * h - l * s;
              return u > 0 ? d >= 0 &&
              f >= 0 : d >= 0 ||
              f >= 0
            }
            return d > 0
          }
          function a(e, t) {
            function r(e, t) {
              var r = y.length - 1,
              i = e - 1;
              0 > i &&
              (i = r);
              var n = e + 1;
              n > r &&
              (n = 0);
              var a = o(y[e], y[i], y[n], s[t]);
              if (!a) return !1;
              var h = s.length - 1,
              c = t - 1;
              0 > c &&
              (c = h);
              var l = t + 1;
              return l > h &&
              (l = 0),
              a = o(s[t], s[c], s[l], y[e]),
              !!a
            }
            function i(e, t) {
              var r,
              i,
              o;
              for (r = 0; r < y.length; r++) if (i = r + 1, i %= y.length, o = n(e, t, y[r], y[i], !0), o.length > 0) return !0;
              return !1
            }
            function a(e, r) {
              var i,
              o,
              a,
              s,
              h;
              for (i = 0; i < x.length; i++) for (o = t[x[i]], a = 0; a < o.length; a++) if (s = a + 1, s %= o.length, h = n(e, r, o[a], o[s], !0), h.length > 0) return !0;
              return !1
            }
            for (
              var s,
              h,
              c,
              l,
              u,
              d,
              f,
              p,
              m,
              v,
              g,
              y = e.concat(),
              x = [],
              _ = [],
              w = 0,
              b = t.length;
              b > w;
              w++
            ) x.push(w);
            for (var M = 0, S = 2 * x.length; x.length > 0; ) {
              if (S--, 0 > S) {
                console.log(
                  'Infinite Loop! Holes left:' + x.length + ', Probably Hole outside Shape!'
                );
                break
              }
              for (c = M; c < y.length; c++) {
                l = y[c],
                h = - 1;
                for (var w = 0; w < x.length; w++) if (d = x[w], f = l.x + ':' + l.y + ':' + d, void 0 === _[f]) {
                  s = t[d];
                  for (var T = 0; T < s.length; T++) if (u = s[T], r(c, T) && !i(l, u) && !a(l, u)) {
                    h = T,
                    x.splice(w, 1),
                    p = y.slice(0, c + 1),
                    m = y.slice(c),
                    v = s.slice(h),
                    g = s.slice(0, h + 1),
                    y = p.concat(v).concat(g).concat(m),
                    M = c;
                    break
                  }
                  if (h >= 0) break;
                  _[f] = !0
                }
                if (h >= 0) break
              }
            }
            return y
          }
          for (var s, h, c, l, u, d, f = {}, p = e.concat(), m = 0, v = t.length; v > m; m++) Array.prototype.push.apply(p, t[m]);
          for (s = 0, h = p.length; h > s; s++) u = p[s].x + ':' + p[s].y,
          void 0 !== f[u] &&
          i.warn('THREE.Shape: Duplicate point', u),
          f[u] = s;
          var g = a(e, t),
          y = i.FontUtils.Triangulate(g, !1);
          for (s = 0, h = y.length; h > s; s++) for (l = y[s], c = 0; 3 > c; c++) u = l[c].x + ':' + l[c].y,
          d = f[u],
          void 0 !== d &&
          (l[c] = d);
          return y.concat()
        },
        isClockWise: function (e) {
          return i.FontUtils.Triangulate.area(e) < 0
        },
        b2p0: function (e, t) {
          var r = 1 - e;
          return r * r * t
        },
        b2p1: function (e, t) {
          return 2 * (1 - e) * e * t
        },
        b2p2: function (e, t) {
          return e * e * t
        },
        b2: function (e, t, r, i) {
          return this.b2p0(e, t) + this.b2p1(e, r) + this.b2p2(e, i)
        },
        b3p0: function (e, t) {
          var r = 1 - e;
          return r * r * r * t
        },
        b3p1: function (e, t) {
          var r = 1 - e;
          return 3 * r * r * e * t
        },
        b3p2: function (e, t) {
          var r = 1 - e;
          return 3 * r * e * e * t
        },
        b3p3: function (e, t) {
          return e * e * e * t
        },
        b3: function (e, t, r, i, n) {
          return this.b3p0(e, t) + this.b3p1(e, r) + this.b3p2(e, i) + this.b3p3(e, n)
        }
      },
      i.LineCurve = function (e, t) {
        this.v1 = e,
        this.v2 = t
      },
      i.LineCurve.prototype = Object.create(i.Curve.prototype),
      i.LineCurve.prototype.constructor = i.LineCurve,
      i.LineCurve.prototype.getPoint = function (e) {
        var t = this.v2.clone().sub(this.v1);
        return t.multiplyScalar(e).add(this.v1),
        t
      },
      i.LineCurve.prototype.getPointAt = function (e) {
        return this.getPoint(e)
      },
      i.LineCurve.prototype.getTangent = function (e) {
        var t = this.v2.clone().sub(this.v1);
        return t.normalize()
      },
      i.QuadraticBezierCurve = function (e, t, r) {
        this.v0 = e,
        this.v1 = t,
        this.v2 = r
      },
      i.QuadraticBezierCurve.prototype = Object.create(i.Curve.prototype),
      i.QuadraticBezierCurve.prototype.constructor = i.QuadraticBezierCurve,
      i.QuadraticBezierCurve.prototype.getPoint = function (e) {
        var t = new i.Vector2;
        return t.x = i.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x),
        t.y = i.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y),
        t
      },
      i.QuadraticBezierCurve.prototype.getTangent = function (e) {
        var t = new i.Vector2;
        return t.x = i.Curve.Utils.tangentQuadraticBezier(e, this.v0.x, this.v1.x, this.v2.x),
        t.y = i.Curve.Utils.tangentQuadraticBezier(e, this.v0.y, this.v1.y, this.v2.y),
        t.normalize()
      },
      i.CubicBezierCurve = function (e, t, r, i) {
        this.v0 = e,
        this.v1 = t,
        this.v2 = r,
        this.v3 = i
      },
      i.CubicBezierCurve.prototype = Object.create(i.Curve.prototype),
      i.CubicBezierCurve.prototype.constructor = i.CubicBezierCurve,
      i.CubicBezierCurve.prototype.getPoint = function (e) {
        var t,
        r;
        return t = i.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
        r = i.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
        new i.Vector2(t, r)
      },
      i.CubicBezierCurve.prototype.getTangent = function (e) {
        var t,
        r;
        t = i.Curve.Utils.tangentCubicBezier(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
        r = i.Curve.Utils.tangentCubicBezier(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
        var n = new i.Vector2(t, r);
        return n.normalize(),
        n
      },
      i.SplineCurve = function (e) {
        this.points = void 0 == e ? [] : e
      },
      i.SplineCurve.prototype = Object.create(i.Curve.prototype),
      i.SplineCurve.prototype.constructor = i.SplineCurve,
      i.SplineCurve.prototype.getPoint = function (e) {
        var t = this.points,
        r = (t.length - 1) * e,
        n = Math.floor(r),
        o = r - n,
        a = t[0 == n ? n : n - 1],
        s = t[n],
        h = t[n > t.length - 2 ? t.length - 1 : n + 1],
        c = t[n > t.length - 3 ? t.length - 1 : n + 2],
        l = new i.Vector2;
        return l.x = i.Curve.Utils.interpolate(a.x, s.x, h.x, c.x, o),
        l.y = i.Curve.Utils.interpolate(a.y, s.y, h.y, c.y, o),
        l
      },
      i.EllipseCurve = function (e, t, r, i, n, o, a) {
        this.aX = e,
        this.aY = t,
        this.xRadius = r,
        this.yRadius = i,
        this.aStartAngle = n,
        this.aEndAngle = o,
        this.aClockwise = a
      },
      i.EllipseCurve.prototype = Object.create(i.Curve.prototype),
      i.EllipseCurve.prototype.constructor = i.EllipseCurve,
      i.EllipseCurve.prototype.getPoint = function (e) {
        var t = this.aEndAngle - this.aStartAngle;
        0 > t &&
        (t += 2 * Math.PI),
        t > 2 * Math.PI &&
        (t -= 2 * Math.PI);
        var r;
        r = this.aClockwise === !0 ? this.aEndAngle + (1 - e) * (2 * Math.PI - t) : this.aStartAngle + e * t;
        var n = new i.Vector2;
        return n.x = this.aX + this.xRadius * Math.cos(r),
        n.y = this.aY + this.yRadius * Math.sin(r),
        n
      },
      i.ArcCurve = function (e, t, r, n, o, a) {
        i.EllipseCurve.call(this, e, t, r, r, n, o, a)
      },
      i.ArcCurve.prototype = Object.create(i.EllipseCurve.prototype),
      i.ArcCurve.prototype.constructor = i.ArcCurve,
      i.LineCurve3 = i.Curve.create(
        function (e, t) {
          this.v1 = e,
          this.v2 = t
        },
        function (e) {
          var t = new i.Vector3;
          return t.subVectors(this.v2, this.v1),
          t.multiplyScalar(e),
          t.add(this.v1),
          t
        }
      ),
      i.QuadraticBezierCurve3 = i.Curve.create(
        function (e, t, r) {
          this.v0 = e,
          this.v1 = t,
          this.v2 = r
        },
        function (e) {
          var t = new i.Vector3;
          return t.x = i.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x),
          t.y = i.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y),
          t.z = i.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z),
          t
        }
      ),
      i.CubicBezierCurve3 = i.Curve.create(
        function (e, t, r, i) {
          this.v0 = e,
          this.v1 = t,
          this.v2 = r,
          this.v3 = i
        },
        function (e) {
          var t = new i.Vector3;
          return t.x = i.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),
          t.y = i.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
          t.z = i.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z),
          t
        }
      ),
      i.SplineCurve3 = i.Curve.create(
        function (e) {
          this.points = void 0 == e ? [] : e
        },
        function (e) {
          var t = this.points,
          r = (t.length - 1) * e,
          n = Math.floor(r),
          o = r - n,
          a = t[0 == n ? n : n - 1],
          s = t[n],
          h = t[n > t.length - 2 ? t.length - 1 : n + 1],
          c = t[n > t.length - 3 ? t.length - 1 : n + 2],
          l = new i.Vector3;
          return l.x = i.Curve.Utils.interpolate(a.x, s.x, h.x, c.x, o),
          l.y = i.Curve.Utils.interpolate(a.y, s.y, h.y, c.y, o),
          l.z = i.Curve.Utils.interpolate(a.z, s.z, h.z, c.z, o),
          l
        }
      ),
      i.ClosedSplineCurve3 = i.Curve.create(
        function (e) {
          this.points = void 0 == e ? [] : e
        },
        function (e) {
          var t = this.points,
          r = (t.length - 0) * e,
          n = Math.floor(r),
          o = r - n;
          n += n > 0 ? 0 : (Math.floor(Math.abs(n) / t.length) + 1) * t.length;
          var a = t[(n - 1) % t.length],
          s = t[n % t.length],
          h = t[(n + 1) % t.length],
          c = t[(n + 2) % t.length],
          l = new i.Vector3;
          return l.x = i.Curve.Utils.interpolate(a.x, s.x, h.x, c.x, o),
          l.y = i.Curve.Utils.interpolate(a.y, s.y, h.y, c.y, o),
          l.z = i.Curve.Utils.interpolate(a.z, s.z, h.z, c.z, o),
          l
        }
      ),
      i.AnimationHandler = {
        LINEAR: 0,
        CATMULLROM: 1,
        CATMULLROM_FORWARD: 2,
        add: function () {
          i.warn('THREE.AnimationHandler.add() has been deprecated.')
        },
        get: function () {
          i.warn('THREE.AnimationHandler.get() has been deprecated.')
        },
        remove: function () {
          i.warn('THREE.AnimationHandler.remove() has been deprecated.')
        },
        animations: [],
        init: function (e) {
          if (e.initialized === !0) return e;
          for (var t = 0; t < e.hierarchy.length; t++) {
            for (var r = 0; r < e.hierarchy[t].keys.length; r++) if (
              e.hierarchy[t].keys[r].time < 0 &&
              (e.hierarchy[t].keys[r].time = 0),
              void 0 !== e.hierarchy[t].keys[r].rot &&
              !(e.hierarchy[t].keys[r].rot instanceof i.Quaternion)
            ) {
              var n = e.hierarchy[t].keys[r].rot;
              e.hierarchy[t].keys[r].rot = (new i.Quaternion).fromArray(n)
            }
            if (
              e.hierarchy[t].keys.length &&
              void 0 !== e.hierarchy[t].keys[0].morphTargets
            ) {
              for (var o = {}, r = 0; r < e.hierarchy[t].keys.length; r++) for (var a = 0; a < e.hierarchy[t].keys[r].morphTargets.length; a++) {
                var s = e.hierarchy[t].keys[r].morphTargets[a];
                o[s] = - 1
              }
              e.hierarchy[t].usedMorphTargets = o;
              for (var r = 0; r < e.hierarchy[t].keys.length; r++) {
                var h = {};
                for (var s in o) {
                  for (var a = 0; a < e.hierarchy[t].keys[r].morphTargets.length; a++) if (e.hierarchy[t].keys[r].morphTargets[a] === s) {
                    h[s] = e.hierarchy[t].keys[r].morphTargetsInfluences[a];
                    break
                  }
                  a === e.hierarchy[t].keys[r].morphTargets.length &&
                  (h[s] = 0)
                }
                e.hierarchy[t].keys[r].morphTargetsInfluences = h
              }
            }
            for (var r = 1; r < e.hierarchy[t].keys.length; r++) e.hierarchy[t].keys[r].time === e.hierarchy[t].keys[r - 1].time &&
            (e.hierarchy[t].keys.splice(r, 1), r--);
            for (var r = 0; r < e.hierarchy[t].keys.length; r++) e.hierarchy[t].keys[r].index = r
          }
          return e.initialized = !0,
          e
        },
        parse: function (e) {
          var t = function (e, r) {
            r.push(e);
            for (var i = 0; i < e.children.length; i++) t(e.children[i], r)
          },
          r = [];
          if (e instanceof i.SkinnedMesh) for (var n = 0; n < e.skeleton.bones.length; n++) r.push(e.skeleton.bones[n]);
           else t(e, r);
          return r
        },
        play: function (e) {
          - 1 === this.animations.indexOf(e) &&
          this.animations.push(e)
        },
        stop: function (e) {
          var t = this.animations.indexOf(e);
          - 1 !== t &&
          this.animations.splice(t, 1)
        },
        update: function (e) {
          for (var t = 0; t < this.animations.length; t++) this.animations[t].resetBlendWeights();
          for (var t = 0; t < this.animations.length; t++) this.animations[t].update(e)
        }
      },
      i.Animation = function (e, t) {
        this.root = e,
        this.data = i.AnimationHandler.init(t),
        this.hierarchy = i.AnimationHandler.parse(e),
        this.currentTime = 0,
        this.timeScale = 1,
        this.isPlaying = !1,
        this.loop = !0,
        this.weight = 0,
        this.interpolationType = i.AnimationHandler.LINEAR
      },
      i.Animation.prototype = {
        constructor: i.Animation,
        keyTypes: [
          'pos',
          'rot',
          'scl'
        ],
        play: function (e, t) {
          this.currentTime = void 0 !== e ? e : 0,
          this.weight = void 0 !== t ? t : 1,
          this.isPlaying = !0,
          this.reset(),
          i.AnimationHandler.play(this)
        },
        stop: function () {
          this.isPlaying = !1,
          i.AnimationHandler.stop(this)
        },
        reset: function () {
          for (var e = 0, t = this.hierarchy.length; t > e; e++) {
            var r = this.hierarchy[e];
            void 0 === r.animationCache &&
            (
              r.animationCache = {
                animations: {
                },
                blending: {
                  positionWeight: 0,
                  quaternionWeight: 0,
                  scaleWeight: 0
                }
              }
            );
            var i = this.data.name,
            n = r.animationCache.animations,
            o = n[i];
            void 0 === o &&
            (
              o = {
                prevKey: {
                  pos: 0,
                  rot: 0,
                  scl: 0
                },
                nextKey: {
                  pos: 0,
                  rot: 0,
                  scl: 0
                },
                originalMatrix: r.matrix
              },
              n[i] = o
            );
            for (var a = 0; 3 > a; a++) {
              for (
                var s = this.keyTypes[a],
                h = this.data.hierarchy[e].keys[0],
                c = this.getNextKeyWith(s, e, 1);
                c.time < this.currentTime &&
                c.index > h.index;
              ) h = c,
              c = this.getNextKeyWith(s, e, c.index + 1);
              o.prevKey[s] = h,
              o.nextKey[s] = c
            }
          }
        },
        resetBlendWeights: function () {
          for (var e = 0, t = this.hierarchy.length; t > e; e++) {
            var r = this.hierarchy[e],
            i = r.animationCache;
            if (void 0 !== i) {
              var n = i.blending;
              n.positionWeight = 0,
              n.quaternionWeight = 0,
              n.scaleWeight = 0
            }
          }
        },
        update: function () {
          var e = [],
          t = new i.Vector3,
          r = new i.Vector3,
          n = new i.Quaternion,
          o = function (e, t) {
            var r,
            i,
            n,
            o,
            s,
            h,
            c,
            l,
            u,
            d = [],
            f = [];
            return r = (e.length - 1) * t,
            i = Math.floor(r),
            n = r - i,
            d[0] = 0 === i ? i : i - 1,
            d[1] = i,
            d[2] = i > e.length - 2 ? i : i + 1,
            d[3] = i > e.length - 3 ? i : i + 2,
            h = e[d[0]],
            c = e[d[1]],
            l = e[d[2]],
            u = e[d[3]],
            o = n * n,
            s = n * o,
            f[0] = a(h[0], c[0], l[0], u[0], n, o, s),
            f[1] = a(h[1], c[1], l[1], u[1], n, o, s),
            f[2] = a(h[2], c[2], l[2], u[2], n, o, s),
            f
          },
          a = function (e, t, r, i, n, o, a) {
            var s = 0.5 * (r - e),
            h = 0.5 * (i - t);
            return (2 * (t - r) + s + h) * a + ( - 3 * (t - r) - 2 * s - h) * o + s * n + t
          };
          return function (a) {
            if (
              this.isPlaying !== !1 &&
              (this.currentTime += a * this.timeScale, 0 !== this.weight)
            ) {
              var s = this.data.length;
              (this.currentTime > s || this.currentTime < 0) &&
              (
                this.loop ? (
                  this.currentTime %= s,
                  this.currentTime < 0 &&
                  (this.currentTime += s),
                  this.reset()
                ) : this.stop()
              );
              for (var h = 0, c = this.hierarchy.length; c > h; h++) for (
                var l = this.hierarchy[h],
                u = l.animationCache.animations[this.data.name],
                d = l.animationCache.blending,
                f = 0;
                3 > f;
                f++
              ) {
                var p = this.keyTypes[f],
                m = u.prevKey[p],
                v = u.nextKey[p];
                if (
                  this.timeScale > 0 &&
                  v.time <= this.currentTime ||
                  this.timeScale < 0 &&
                  m.time >= this.currentTime
                ) {
                  for (
                    m = this.data.hierarchy[h].keys[0],
                    v = this.getNextKeyWith(p, h, 1);
                    v.time < this.currentTime &&
                    v.index > m.index;
                  ) m = v,
                  v = this.getNextKeyWith(p, h, v.index + 1);
                  u.prevKey[p] = m,
                  u.nextKey[p] = v
                }
                var g = (this.currentTime - m.time) / (v.time - m.time),
                y = m[p],
                x = v[p];
                if (0 > g && (g = 0), g > 1 && (g = 1), 'pos' === p) {
                  if (this.interpolationType === i.AnimationHandler.LINEAR) {
                    r.x = y[0] + (x[0] - y[0]) * g,
                    r.y = y[1] + (x[1] - y[1]) * g,
                    r.z = y[2] + (x[2] - y[2]) * g;
                    var _ = this.weight / (this.weight + d.positionWeight);
                    l.position.lerp(r, _),
                    d.positionWeight += this.weight
                  } else if (
                    this.interpolationType === i.AnimationHandler.CATMULLROM ||
                    this.interpolationType === i.AnimationHandler.CATMULLROM_FORWARD
                  ) {
                    e[0] = this.getPrevKeyWith('pos', h, m.index - 1).pos,
                    e[1] = y,
                    e[2] = x,
                    e[3] = this.getNextKeyWith('pos', h, v.index + 1).pos,
                    g = 0.33 * g + 0.33;
                    var w = o(e, g),
                    _ = this.weight / (this.weight + d.positionWeight);
                    d.positionWeight += this.weight;
                    var b = l.position;
                    if (
                      b.x = b.x + (w[0] - b.x) * _,
                      b.y = b.y + (w[1] - b.y) * _,
                      b.z = b.z + (w[2] - b.z) * _,
                      this.interpolationType === i.AnimationHandler.CATMULLROM_FORWARD
                    ) {
                      var M = o(e, 1.01 * g);
                      t.set(M[0], M[1], M[2]),
                      t.sub(b),
                      t.y = 0,
                      t.normalize();
                      var S = Math.atan2(t.x, t.z);
                      l.rotation.set(0, S, 0)
                    }
                  }
                } else if ('rot' === p) if (i.Quaternion.slerp(y, x, n, g), 0 === d.quaternionWeight) l.quaternion.copy(n),
                d.quaternionWeight = this.weight;
                 else {
                  var _ = this.weight / (this.weight + d.quaternionWeight);
                  i.Quaternion.slerp(l.quaternion, n, l.quaternion, _),
                  d.quaternionWeight += this.weight
                } else if ('scl' === p) {
                  r.x = y[0] + (x[0] - y[0]) * g,
                  r.y = y[1] + (x[1] - y[1]) * g,
                  r.z = y[2] + (x[2] - y[2]) * g;
                  var _ = this.weight / (this.weight + d.scaleWeight);
                  l.scale.lerp(r, _),
                  d.scaleWeight += this.weight
                }
              }
              return !0
            }
          }
        }(),
        getNextKeyWith: function (e, t, r) {
          var n = this.data.hierarchy[t].keys;
          for (
            this.interpolationType === i.AnimationHandler.CATMULLROM ||
            this.interpolationType === i.AnimationHandler.CATMULLROM_FORWARD ? r = r < n.length - 1 ? r : n.length - 1 : r %= n.length;
            r < n.length;
            r++
          ) if (void 0 !== n[r][e]) return n[r];
          return this.data.hierarchy[t].keys[0]
        },
        getPrevKeyWith: function (e, t, r) {
          var n = this.data.hierarchy[t].keys;
          for (
            r = this.interpolationType === i.AnimationHandler.CATMULLROM ||
            this.interpolationType === i.AnimationHandler.CATMULLROM_FORWARD ? r > 0 ? r : 0 : r >= 0 ? r : r + n.length;
            r >= 0;
            r--
          ) if (void 0 !== n[r][e]) return n[r];
          return this.data.hierarchy[t].keys[n.length - 1]
        }
      },
      i.KeyFrameAnimation = function (e) {
        this.root = e.node,
        this.data = i.AnimationHandler.init(e),
        this.hierarchy = i.AnimationHandler.parse(this.root),
        this.currentTime = 0,
        this.timeScale = 0.001,
        this.isPlaying = !1,
        this.isPaused = !0,
        this.loop = !0;
        for (var t = 0, r = this.hierarchy.length; r > t; t++) {
          var n = this.data.hierarchy[t].keys,
          o = this.data.hierarchy[t].sids,
          a = this.hierarchy[t];
          if (n.length && o) {
            for (var s = 0; s < o.length; s++) {
              var h = o[s],
              c = this.getNextKeyWith(h, t, 0);
              c &&
              c.apply(h)
            }
            a.matrixAutoUpdate = !1,
            this.data.hierarchy[t].node.updateMatrix(),
            a.matrixWorldNeedsUpdate = !0
          }
        }
      },
      i.KeyFrameAnimation.prototype = {
        constructor: i.KeyFrameAnimation,
        play: function (e) {
          if (this.currentTime = void 0 !== e ? e : 0, this.isPlaying === !1) {
            this.isPlaying = !0;
            var t,
            r,
            n,
            o = this.hierarchy.length;
            for (t = 0; o > t; t++) {
              r = this.hierarchy[t],
              n = this.data.hierarchy[t],
              void 0 === n.animationCache &&
              (
                n.animationCache = {},
                n.animationCache.prevKey = null,
                n.animationCache.nextKey = null,
                n.animationCache.originalMatrix = r.matrix
              );
              var a = this.data.hierarchy[t].keys;
              a.length &&
              (
                n.animationCache.prevKey = a[0],
                n.animationCache.nextKey = a[1],
                this.startTime = Math.min(a[0].time, this.startTime),
                this.endTime = Math.max(a[a.length - 1].time, this.endTime)
              )
            }
            this.update(0)
          }
          this.isPaused = !1,
          i.AnimationHandler.play(this)
        },
        stop: function () {
          this.isPlaying = !1,
          this.isPaused = !1,
          i.AnimationHandler.stop(this);
          for (var e = 0; e < this.data.hierarchy.length; e++) {
            var t = this.hierarchy[e],
            r = this.data.hierarchy[e];
            if (void 0 !== r.animationCache) {
              var n = r.animationCache.originalMatrix;
              n.copy(t.matrix),
              t.matrix = n,
              delete r.animationCache
            }
          }
        },
        update: function (e) {
          if (this.isPlaying !== !1) {
            this.currentTime += e * this.timeScale;
            var t = this.data.length;
            this.loop === !0 &&
            this.currentTime > t &&
            (this.currentTime %= t),
            this.currentTime = Math.min(this.currentTime, t);
            for (var r = 0, i = this.hierarchy.length; i > r; r++) {
              var n = this.hierarchy[r],
              o = this.data.hierarchy[r],
              a = o.keys,
              s = o.animationCache;
              if (a.length) {
                var h = s.prevKey,
                c = s.nextKey;
                if (c.time <= this.currentTime) {
                  for (; c.time < this.currentTime && c.index > h.index; ) h = c,
                  c = a[h.index + 1];
                  s.prevKey = h,
                  s.nextKey = c
                }
                c.time >= this.currentTime ? h.interpolate(c, this.currentTime) : h.interpolate(c, c.time),
                this.data.hierarchy[r].node.updateMatrix(),
                n.matrixWorldNeedsUpdate = !0
              }
            }
          }
        },
        getNextKeyWith: function (e, t, r) {
          var i = this.data.hierarchy[t].keys;
          for (r %= i.length; r < i.length; r++) if (i[r].hasTarget(e)) return i[r];
          return i[0]
        },
        getPrevKeyWith: function (e, t, r) {
          var i = this.data.hierarchy[t].keys;
          for (r = r >= 0 ? r : r + i.length; r >= 0; r--) if (i[r].hasTarget(e)) return i[r];
          return i[i.length - 1]
        }
      },
      i.MorphAnimation = function (e) {
        this.mesh = e,
        this.frames = e.morphTargetInfluences.length,
        this.currentTime = 0,
        this.duration = 1000,
        this.loop = !0,
        this.lastFrame = 0,
        this.currentFrame = 0,
        this.isPlaying = !1
      },
      i.MorphAnimation.prototype = {
        constructor: i.MorphAnimation,
        play: function () {
          this.isPlaying = !0
        },
        pause: function () {
          this.isPlaying = !1
        },
        update: function (e) {
          if (this.isPlaying !== !1) {
            this.currentTime += e,
            this.loop === !0 &&
            this.currentTime > this.duration &&
            (this.currentTime %= this.duration),
            this.currentTime = Math.min(this.currentTime, this.duration);
            var t = this.duration / this.frames,
            r = Math.floor(this.currentTime / t),
            i = this.mesh.morphTargetInfluences;
            r != this.currentFrame &&
            (
              i[this.lastFrame] = 0,
              i[this.currentFrame] = 1,
              i[r] = 0,
              this.lastFrame = this.currentFrame,
              this.currentFrame = r
            ),
            i[r] = this.currentTime % t / t,
            i[this.lastFrame] = 1 - i[r]
          }
        }
      },
      i.BoxGeometry = function (e, t, r, n, o, a) {
        function s(e, t, r, n, o, a, s, c) {
          var l,
          u,
          d,
          f = h.widthSegments,
          p = h.heightSegments,
          m = o / 2,
          v = a / 2,
          g = h.vertices.length;
          'x' === e &&
          'y' === t ||
          'y' === e &&
          'x' === t ? l = 'z' : 'x' === e &&
          'z' === t ||
          'z' === e &&
          'x' === t ? (l = 'y', p = h.depthSegments) : ('z' === e && 'y' === t || 'y' === e && 'z' === t) &&
          (l = 'x', f = h.depthSegments);
          var y = f + 1,
          x = p + 1,
          _ = o / f,
          w = a / p,
          b = new i.Vector3;
          for (b[l] = s > 0 ? 1 : - 1, d = 0; x > d; d++) for (u = 0; y > u; u++) {
            var M = new i.Vector3;
            M[e] = (u * _ - m) * r,
            M[t] = (d * w - v) * n,
            M[l] = s,
            h.vertices.push(M)
          }
          for (d = 0; p > d; d++) for (u = 0; f > u; u++) {
            var S = u + y * d,
            T = u + y * (d + 1),
            C = u + 1 + y * (d + 1),
            A = u + 1 + y * d,
            E = new i.Vector2(u / f, 1 - d / p),
            P = new i.Vector2(u / f, 1 - (d + 1) / p),
            D = new i.Vector2((u + 1) / f, 1 - (d + 1) / p),
            L = new i.Vector2((u + 1) / f, 1 - d / p),
            R = new i.Face3(S + g, T + g, A + g);
            R.normal.copy(b),
            R.vertexNormals.push(b.clone(), b.clone(), b.clone()),
            R.materialIndex = c,
            h.faces.push(R),
            h.faceVertexUvs[0].push([E,
            P,
            L]),
            R = new i.Face3(T + g, C + g, A + g),
            R.normal.copy(b),
            R.vertexNormals.push(b.clone(), b.clone(), b.clone()),
            R.materialIndex = c,
            h.faces.push(R),
            h.faceVertexUvs[0].push([P.clone(),
            D,
            L.clone()])
          }
        }
        i.Geometry.call(this),
        this.type = 'BoxGeometry',
        this.parameters = {
          width: e,
          height: t,
          depth: r,
          widthSegments: n,
          heightSegments: o,
          depthSegments: a
        },
        this.widthSegments = n ||
        1,
        this.heightSegments = o ||
        1,
        this.depthSegments = a ||
        1;
        var h = this,
        c = e / 2,
        l = t / 2,
        u = r / 2;
        s('z', 'y', - 1, - 1, r, t, c, 0),
        s('z', 'y', 1, - 1, r, t, - c, 1),
        s('x', 'z', 1, 1, e, r, l, 2),
        s('x', 'z', 1, - 1, e, r, - l, 3),
        s('x', 'y', 1, - 1, e, t, u, 4),
        s('x', 'y', - 1, - 1, e, t, - u, 5),
        this.mergeVertices()
      },
      i.BoxGeometry.prototype = Object.create(i.Geometry.prototype),
      i.BoxGeometry.prototype.constructor = i.BoxGeometry,
      i.CircleGeometry = function (e, t, r, n) {
        i.Geometry.call(this),
        this.type = 'CircleGeometry',
        this.parameters = {
          radius: e,
          segments: t,
          thetaStart: r,
          thetaLength: n
        },
        e = e ||
        50,
        t = void 0 !== t ? Math.max(3, t) : 8,
        r = void 0 !== r ? r : 0,
        n = void 0 !== n ? n : 2 * Math.PI;
        var o,
        a = [],
        s = new i.Vector3,
        h = new i.Vector2(0.5, 0.5);
        for (this.vertices.push(s), a.push(h), o = 0; t >= o; o++) {
          var c = new i.Vector3,
          l = r + o / t * n;
          c.x = e * Math.cos(l),
          c.y = e * Math.sin(l),
          this.vertices.push(c),
          a.push(new i.Vector2((c.x / e + 1) / 2, (c.y / e + 1) / 2))
        }
        var u = new i.Vector3(0, 0, 1);
        for (o = 1; t >= o; o++) this.faces.push(new i.Face3(o, o + 1, 0, [
          u.clone(),
          u.clone(),
          u.clone()
        ])),
        this.faceVertexUvs[0].push([a[o].clone(),
        a[o + 1].clone(),
        h.clone()]);
        this.computeFaceNormals(),
        this.boundingSphere = new i.Sphere(new i.Vector3, e)
      },
      i.CircleGeometry.prototype = Object.create(i.Geometry.prototype),
      i.CircleGeometry.prototype.constructor = i.CircleGeometry,
      i.CubeGeometry = function (e, t, r, n, o, a) {
        return i.warn('THREE.CubeGeometry has been renamed to THREE.BoxGeometry.'),
        new i.BoxGeometry(e, t, r, n, o, a)
      },
      i.CylinderGeometry = function (e, t, r, n, o, a, s, h) {
        i.Geometry.call(this),
        this.type = 'CylinderGeometry',
        this.parameters = {
          radiusTop: e,
          radiusBottom: t,
          height: r,
          radialSegments: n,
          heightSegments: o,
          openEnded: a,
          thetaStart: s,
          thetaLength: h
        },
        e = void 0 !== e ? e : 20,
        t = void 0 !== t ? t : 20,
        r = void 0 !== r ? r : 100,
        n = n ||
        8,
        o = o ||
        1,
        a = void 0 !== a ? a : !1,
        s = void 0 !== s ? s : 0,
        h = void 0 !== h ? h : 2 * Math.PI;
        var c,
        l,
        u = r / 2,
        d = [],
        f = [];
        for (l = 0; o >= l; l++) {
          var p = [],
          m = [],
          v = l / o,
          g = v * (t - e) + e;
          for (c = 0; n >= c; c++) {
            var y = c / n,
            x = new i.Vector3;
            x.x = g * Math.sin(y * h + s),
            x.y = - v * r + u,
            x.z = g * Math.cos(y * h + s),
            this.vertices.push(x),
            p.push(this.vertices.length - 1),
            m.push(new i.Vector2(y, 1 - v))
          }
          d.push(p),
          f.push(m)
        }
        var _,
        w,
        b = (t - e) / r;
        for (c = 0; n > c; c++) for (
          0 !== e ? (
            _ = this.vertices[d[0][c]].clone(),
            w = this.vertices[d[0][c + 1]].clone()
          ) : (
            _ = this.vertices[d[1][c]].clone(),
            w = this.vertices[d[1][c + 1]].clone()
          ),
          _.setY(Math.sqrt(_.x * _.x + _.z * _.z) * b).normalize(),
          w.setY(Math.sqrt(w.x * w.x + w.z * w.z) * b).normalize(),
          l = 0;
          o > l;
          l++
        ) {
          var M = d[l][c],
          S = d[l + 1][c],
          T = d[l + 1][c + 1],
          C = d[l][c + 1],
          A = _.clone(),
          E = _.clone(),
          P = w.clone(),
          D = w.clone(),
          L = f[l][c].clone(),
          R = f[l + 1][c].clone(),
          B = f[l + 1][c + 1].clone(),
          F = f[l][c + 1].clone();
          this.faces.push(new i.Face3(M, S, C, [
            A,
            E,
            D
          ])),
          this.faceVertexUvs[0].push([L,
          R,
          F]),
          this.faces.push(new i.Face3(S, T, C, [
            E.clone(),
            P,
            D.clone()
          ])),
          this.faceVertexUvs[0].push([R.clone(),
          B,
          F.clone()])
        }
        if (a === !1 && e > 0) for (this.vertices.push(new i.Vector3(0, u, 0)), c = 0; n > c; c++) {
          var M = d[0][c],
          S = d[0][c + 1],
          T = this.vertices.length - 1,
          A = new i.Vector3(0, 1, 0),
          E = new i.Vector3(0, 1, 0),
          P = new i.Vector3(0, 1, 0),
          L = f[0][c].clone(),
          R = f[0][c + 1].clone(),
          B = new i.Vector2(R.x, 0);
          this.faces.push(new i.Face3(M, S, T, [
            A,
            E,
            P
          ])),
          this.faceVertexUvs[0].push([L,
          R,
          B])
        }
        if (a === !1 && t > 0) for (this.vertices.push(new i.Vector3(0, - u, 0)), c = 0; n > c; c++) {
          var M = d[o][c + 1],
          S = d[o][c],
          T = this.vertices.length - 1,
          A = new i.Vector3(0, - 1, 0),
          E = new i.Vector3(0, - 1, 0),
          P = new i.Vector3(0, - 1, 0),
          L = f[o][c + 1].clone(),
          R = f[o][c].clone(),
          B = new i.Vector2(R.x, 1);
          this.faces.push(new i.Face3(M, S, T, [
            A,
            E,
            P
          ])),
          this.faceVertexUvs[0].push([L,
          R,
          B])
        }
        this.computeFaceNormals()
      },
      i.CylinderGeometry.prototype = Object.create(i.Geometry.prototype),
      i.CylinderGeometry.prototype.constructor = i.CylinderGeometry,
      i.ExtrudeGeometry = function (e, t) {
        return 'undefined' == typeof e ? void (e = []) : (
          i.Geometry.call(this),
          this.type = 'ExtrudeGeometry',
          e = e instanceof Array ? e : [
            e
          ],
          this.addShapeList(e, t),
          void this.computeFaceNormals()
        )
      },
      i.ExtrudeGeometry.prototype = Object.create(i.Geometry.prototype),
      i.ExtrudeGeometry.prototype.constructor = i.ExtrudeGeometry,
      i.ExtrudeGeometry.prototype.addShapeList = function (e, t) {
        for (var r = e.length, i = 0; r > i; i++) {
          var n = e[i];
          this.addShape(n, t)
        }
      },
      i.ExtrudeGeometry.prototype.addShape = function (e, t) {
        function r(e, t, r) {
          return t ||
          i.error('THREE.ExtrudeGeometry: vec does not exist'),
          t.clone().multiplyScalar(r).add(e)
        }
        function n(e, t, r) {
          var n,
          o,
          a = 1e-10,
          s = 1,
          h = e.x - t.x,
          c = e.y - t.y,
          l = r.x - e.x,
          u = r.y - e.y,
          d = h * h + c * c,
          f = h * u - c * l;
          if (Math.abs(f) > a) {
            var p = Math.sqrt(d),
            m = Math.sqrt(l * l + u * u),
            v = t.x - c / p,
            g = t.y + h / p,
            y = r.x - u / m,
            x = r.y + l / m,
            _ = ((y - v) * u - (x - g) * l) / (h * u - c * l);
            n = v + h * _ - e.x,
            o = g + c * _ - e.y;
            var w = n * n + o * o;
            if (2 >= w) return new i.Vector2(n, o);
            s = Math.sqrt(w / 2)
          } else {
            var b = !1;
            h > a ? l > a &&
            (b = !0) : - a > h ? - a > l &&
            (b = !0) : Math.sign(c) == Math.sign(u) &&
            (b = !0),
            b ? (n = - c, o = h, s = Math.sqrt(d)) : (n = h, o = c, s = Math.sqrt(d / 2))
          }
          return new i.Vector2(n / s, o / s)
        }
        function o() {
          if (_) {
            var e = 0,
            t = j * e;
            for (Y = 0; X > Y; Y++) W = V[Y],
            c(W[2] + t, W[1] + t, W[0] + t);
            for (e = b + 2 * x, t = j * e, Y = 0; X > Y; Y++) W = V[Y],
            c(W[0] + t, W[1] + t, W[2] + t)
          } else {
            for (Y = 0; X > Y; Y++) W = V[Y],
            c(W[2], W[1], W[0]);
            for (Y = 0; X > Y; Y++) W = V[Y],
            c(W[0] + j * b, W[1] + j * b, W[2] + j * b)
          }
        }
        function a() {
          var e = 0;
          for (s(k, e), e += k.length, P = 0, D = U.length; D > P; P++) E = U[P],
          s(E, e),
          e += E.length
        }
        function s(e, t) {
          var r,
          i;
          for (Y = e.length; --Y >= 0; ) {
            r = Y,
            i = Y - 1,
            0 > i &&
            (i = e.length - 1);
            var n = 0,
            o = b + 2 * x;
            for (n = 0; o > n; n++) {
              var a = j * n,
              s = j * (n + 1),
              h = t + r + a,
              c = t + i + a,
              u = t + i + s,
              d = t + r + s;
              l(h, c, u, d, e, n, o, r, i)
            }
          }
        }
        function h(e, t, r) {
          L.vertices.push(new i.Vector3(e, t, r))
        }
        function c(e, t, r) {
          e += R,
          t += R,
          r += R,
          L.faces.push(new i.Face3(e, t, r, null, null, T));
          var n = A.generateTopUV(L, e, t, r);
          L.faceVertexUvs[0].push(n)
        }
        function l(e, t, r, n, o, a, s, h, c) {
          e += R,
          t += R,
          r += R,
          n += R,
          L.faces.push(new i.Face3(e, t, n, null, null, C)),
          L.faces.push(new i.Face3(t, r, n, null, null, C));
          var l = A.generateSideWallUV(L, e, t, r, n);
          L.faceVertexUvs[0].push([l[0],
          l[1],
          l[3]]),
          L.faceVertexUvs[0].push([l[1],
          l[2],
          l[3]])
        }
        var u,
        d,
        f,
        p,
        m,
        v = void 0 !== t.amount ? t.amount : 100,
        g = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
        y = void 0 !== t.bevelSize ? t.bevelSize : g - 2,
        x = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
        _ = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
        w = void 0 !== t.curveSegments ? t.curveSegments : 12,
        b = void 0 !== t.steps ? t.steps : 1,
        M = t.extrudePath,
        S = !1,
        T = t.material,
        C = t.extrudeMaterial,
        A = void 0 !== t.UVGenerator ? t.UVGenerator : i.ExtrudeGeometry.WorldUVGenerator;
        M &&
        (
          u = M.getSpacedPoints(b),
          S = !0,
          _ = !1,
          d = void 0 !== t.frames ? t.frames : new i.TubeGeometry.FrenetFrames(M, b, !1),
          f = new i.Vector3,
          p = new i.Vector3,
          m = new i.Vector3
        ),
        _ ||
        (x = 0, g = 0, y = 0);
        var E,
        P,
        D,
        L = this,
        R = this.vertices.length,
        B = e.extractPoints(w),
        F = B.shape,
        U = B.holes,
        O = !i.Shape.Utils.isClockWise(F);
        if (O) {
          for (F = F.reverse(), P = 0, D = U.length; D > P; P++) E = U[P],
          i.Shape.Utils.isClockWise(E) &&
          (U[P] = E.reverse());
          O = !1
        }
        var V = i.Shape.Utils.triangulateShape(F, U),
        k = F;
        for (P = 0, D = U.length; D > P; P++) E = U[P],
        F = F.concat(E);
        for (
          var z,
          N,
          I,
          G,
          H,
          W,
          j = F.length,
          X = V.length,
          q = [],
          Y = 0,
          K = k.length,
          Q = K - 1,
          Z = Y + 1;
          K > Y;
          Y++,
          Q++,
          Z++
        ) Q === K &&
        (Q = 0),
        Z === K &&
        (Z = 0),
        q[Y] = n(k[Y], k[Q], k[Z]);
        var J,
        $ = [],
        ee = q.concat();
        for (P = 0, D = U.length; D > P; P++) {
          for (E = U[P], J = [], Y = 0, K = E.length, Q = K - 1, Z = Y + 1; K > Y; Y++, Q++, Z++) Q === K &&
          (Q = 0),
          Z === K &&
          (Z = 0),
          J[Y] = n(E[Y], E[Q], E[Z]);
          $.push(J),
          ee = ee.concat(J)
        }
        for (z = 0; x > z; z++) {
          for (
            I = z / x,
            G = g * (1 - I),
            N = y * Math.sin(I * Math.PI / 2),
            Y = 0,
            K = k.length;
            K > Y;
            Y++
          ) H = r(k[Y], q[Y], N),
          h(H.x, H.y, - G);
          for (P = 0, D = U.length; D > P; P++) for (E = U[P], J = $[P], Y = 0, K = E.length; K > Y; Y++) H = r(E[Y], J[Y], N),
          h(H.x, H.y, - G)
        }
        for (N = y, Y = 0; j > Y; Y++) H = _ ? r(F[Y], ee[Y], N) : F[Y],
        S ? (
          p.copy(d.normals[0]).multiplyScalar(H.x),
          f.copy(d.binormals[0]).multiplyScalar(H.y),
          m.copy(u[0]).add(p).add(f),
          h(m.x, m.y, m.z)
        ) : h(H.x, H.y, 0);
        var te;
        for (te = 1; b >= te; te++) for (Y = 0; j > Y; Y++) H = _ ? r(F[Y], ee[Y], N) : F[Y],
        S ? (
          p.copy(d.normals[te]).multiplyScalar(H.x),
          f.copy(d.binormals[te]).multiplyScalar(H.y),
          m.copy(u[te]).add(p).add(f),
          h(m.x, m.y, m.z)
        ) : h(H.x, H.y, v / b * te);
        for (z = x - 1; z >= 0; z--) {
          for (
            I = z / x,
            G = g * (1 - I),
            N = y * Math.sin(I * Math.PI / 2),
            Y = 0,
            K = k.length;
            K > Y;
            Y++
          ) H = r(k[Y], q[Y], N),
          h(H.x, H.y, v + G);
          for (P = 0, D = U.length; D > P; P++) for (E = U[P], J = $[P], Y = 0, K = E.length; K > Y; Y++) H = r(E[Y], J[Y], N),
          S ? h(H.x, H.y + u[b - 1].y, u[b - 1].x + G) : h(H.x, H.y, v + G)
        }
        o(),
        a()
      },
      i.ExtrudeGeometry.WorldUVGenerator = {
        generateTopUV: function (e, t, r, n) {
          var o = e.vertices,
          a = o[t],
          s = o[r],
          h = o[n];
          return [new i.Vector2(a.x, a.y),
          new i.Vector2(s.x, s.y),
          new i.Vector2(h.x, h.y)]
        },
        generateSideWallUV: function (e, t, r, n, o) {
          var a = e.vertices,
          s = a[t],
          h = a[r],
          c = a[n],
          l = a[o];
          return Math.abs(s.y - h.y) < 0.01 ? [
            new i.Vector2(s.x, 1 - s.z),
            new i.Vector2(h.x, 1 - h.z),
            new i.Vector2(c.x, 1 - c.z),
            new i.Vector2(l.x, 1 - l.z)
          ] : [
            new i.Vector2(s.y, 1 - s.z),
            new i.Vector2(h.y, 1 - h.z),
            new i.Vector2(c.y, 1 - c.z),
            new i.Vector2(l.y, 1 - l.z)
          ]
        }
      },
      i.ShapeGeometry = function (e, t) {
        i.Geometry.call(this),
        this.type = 'ShapeGeometry',
        e instanceof Array == !1 &&
        (e = [
          e
        ]),
        this.addShapeList(e, t),
        this.computeFaceNormals()
      },
      i.ShapeGeometry.prototype = Object.create(i.Geometry.prototype),
      i.ShapeGeometry.prototype.constructor = i.ShapeGeometry,
      i.ShapeGeometry.prototype.addShapeList = function (e, t) {
        for (var r = 0, i = e.length; i > r; r++) this.addShape(e[r], t);
        return this
      },
      i.ShapeGeometry.prototype.addShape = function (e, t) {
        void 0 === t &&
        (t = {});
        var r,
        n,
        o,
        a = void 0 !== t.curveSegments ? t.curveSegments : 12,
        s = t.material,
        h = void 0 === t.UVGenerator ? i.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
        c = this.vertices.length,
        l = e.extractPoints(a),
        u = l.shape,
        d = l.holes,
        f = !i.Shape.Utils.isClockWise(u);
        if (f) {
          for (u = u.reverse(), r = 0, n = d.length; n > r; r++) o = d[r],
          i.Shape.Utils.isClockWise(o) &&
          (d[r] = o.reverse());
          f = !1
        }
        var p = i.Shape.Utils.triangulateShape(u, d);
        for (r = 0, n = d.length; n > r; r++) o = d[r],
        u = u.concat(o);
        var m,
        v,
        g = u.length,
        y = p.length;
        for (r = 0; g > r; r++) m = u[r],
        this.vertices.push(new i.Vector3(m.x, m.y, 0));
        for (r = 0; y > r; r++) {
          v = p[r];
          var x = v[0] + c,
          _ = v[1] + c,
          w = v[2] + c;
          this.faces.push(new i.Face3(x, _, w, null, null, s)),
          this.faceVertexUvs[0].push(h.generateTopUV(this, x, _, w))
        }
      },
      i.LatheGeometry = function (e, t, r, n) {
        i.Geometry.call(this),
        this.type = 'LatheGeometry',
        this.parameters = {
          points: e,
          segments: t,
          phiStart: r,
          phiLength: n
        },
        t = t ||
        12,
        r = r ||
        0,
        n = n ||
        2 * Math.PI;
        for (var o = 1 / (e.length - 1), a = 1 / t, s = 0, h = t; h >= s; s++) for (
          var c = r + s * a * n,
          l = Math.cos(c),
          u = Math.sin(c),
          d = 0,
          f = e.length;
          f > d;
          d++
        ) {
          var p = e[d],
          m = new i.Vector3;
          m.x = l * p.x - u * p.y,
          m.y = u * p.x + l * p.y,
          m.z = p.z,
          this.vertices.push(m)
        }
        for (var v = e.length, s = 0, h = t; h > s; s++) for (var d = 0, f = e.length - 1; f > d; d++) {
          var g = d + v * s,
          y = g,
          x = g + v,
          l = g + 1 + v,
          _ = g + 1,
          w = s * a,
          b = d * o,
          M = w + a,
          S = b + o;
          this.faces.push(new i.Face3(y, x, _)),
          this.faceVertexUvs[0].push([new i.Vector2(w, b),
          new i.Vector2(M, b),
          new i.Vector2(w, S)]),
          this.faces.push(new i.Face3(x, l, _)),
          this.faceVertexUvs[0].push([new i.Vector2(M, b),
          new i.Vector2(M, S),
          new i.Vector2(w, S)])
        }
        this.mergeVertices(),
        this.computeFaceNormals(),
        this.computeVertexNormals()
      },
      i.LatheGeometry.prototype = Object.create(i.Geometry.prototype),
      i.LatheGeometry.prototype.constructor = i.LatheGeometry,
      i.PlaneGeometry = function (e, t, r, n) {
        console.info(
          'THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.'
        ),
        i.Geometry.call(this),
        this.type = 'PlaneGeometry',
        this.parameters = {
          width: e,
          height: t,
          widthSegments: r,
          heightSegments: n
        },
        this.fromBufferGeometry(new i.PlaneBufferGeometry(e, t, r, n))
      },
      i.PlaneGeometry.prototype = Object.create(i.Geometry.prototype),
      i.PlaneGeometry.prototype.constructor = i.PlaneGeometry,
      i.PlaneBufferGeometry = function (e, t, r, n) {
        i.BufferGeometry.call(this),
        this.type = 'PlaneBufferGeometry',
        this.parameters = {
          width: e,
          height: t,
          widthSegments: r,
          heightSegments: n
        };
        for (
          var o = e / 2,
          a = t / 2,
          s = r ||
          1,
          h = n ||
          1,
          c = s + 1,
          l = h + 1,
          u = e / s,
          d = t / h,
          f = new Float32Array(c * l * 3),
          p = new Float32Array(c * l * 3),
          m = new Float32Array(c * l * 2),
          v = 0,
          g = 0,
          y = 0;
          l > y;
          y++
        ) for (var x = y * d - a, _ = 0; c > _; _++) {
          var w = _ * u - o;
          f[v] = w,
          f[v + 1] = - x,
          p[v + 2] = 1,
          m[g] = _ / s,
          m[g + 1] = 1 - y / h,
          v += 3,
          g += 2
        }
        v = 0;
        for (
          var b = new (f.length / 3 > 65535 ? Uint32Array : Uint16Array) (s * h * 6),
          y = 0;
          h > y;
          y++
        ) for (var _ = 0; s > _; _++) {
          var M = _ + c * y,
          S = _ + c * (y + 1),
          T = _ + 1 + c * (y + 1),
          C = _ + 1 + c * y;
          b[v] = M,
          b[v + 1] = S,
          b[v + 2] = C,
          b[v + 3] = S,
          b[v + 4] = T,
          b[v + 5] = C,
          v += 6
        }
        this.addAttribute('index', new i.BufferAttribute(b, 1)),
        this.addAttribute('position', new i.BufferAttribute(f, 3)),
        this.addAttribute('normal', new i.BufferAttribute(p, 3)),
        this.addAttribute('uv', new i.BufferAttribute(m, 2))
      },
      i.PlaneBufferGeometry.prototype = Object.create(i.BufferGeometry.prototype),
      i.PlaneBufferGeometry.prototype.constructor = i.PlaneBufferGeometry,
      i.RingGeometry = function (e, t, r, n, o, a) {
        i.Geometry.call(this),
        this.type = 'RingGeometry',
        this.parameters = {
          innerRadius: e,
          outerRadius: t,
          thetaSegments: r,
          phiSegments: n,
          thetaStart: o,
          thetaLength: a
        },
        e = e ||
        0,
        t = t ||
        50,
        o = void 0 !== o ? o : 0,
        a = void 0 !== a ? a : 2 * Math.PI,
        r = void 0 !== r ? Math.max(3, r) : 8,
        n = void 0 !== n ? Math.max(1, n) : 8;
        var s,
        h,
        c = [],
        l = e,
        u = (t - e) / n;
        for (s = 0; n + 1 > s; s++) {
          for (h = 0; r + 1 > h; h++) {
            var d = new i.Vector3,
            f = o + h / r * a;
            d.x = l * Math.cos(f),
            d.y = l * Math.sin(f),
            this.vertices.push(d),
            c.push(new i.Vector2((d.x / t + 1) / 2, (d.y / t + 1) / 2))
          }
          l += u
        }
        var p = new i.Vector3(0, 0, 1);
        for (s = 0; n > s; s++) {
          var m = s * (r + 1);
          for (h = 0; r > h; h++) {
            var f = h + m,
            v = f,
            g = f + r + 1,
            y = f + r + 2;
            this.faces.push(new i.Face3(v, g, y, [
              p.clone(),
              p.clone(),
              p.clone()
            ])),
            this.faceVertexUvs[0].push([c[v].clone(),
            c[g].clone(),
            c[y].clone()]),
            v = f,
            g = f + r + 2,
            y = f + 1,
            this.faces.push(new i.Face3(v, g, y, [
              p.clone(),
              p.clone(),
              p.clone()
            ])),
            this.faceVertexUvs[0].push([c[v].clone(),
            c[g].clone(),
            c[y].clone()])
          }
        }
        this.computeFaceNormals(),
        this.boundingSphere = new i.Sphere(new i.Vector3, l)
      },
      i.RingGeometry.prototype = Object.create(i.Geometry.prototype),
      i.RingGeometry.prototype.constructor = i.RingGeometry,
      i.SphereGeometry = function (e, t, r, n, o, a, s) {
        i.Geometry.call(this),
        this.type = 'SphereGeometry',
        this.parameters = {
          radius: e,
          widthSegments: t,
          heightSegments: r,
          phiStart: n,
          phiLength: o,
          thetaStart: a,
          thetaLength: s
        },
        e = e ||
        50,
        t = Math.max(3, Math.floor(t) || 8),
        r = Math.max(2, Math.floor(r) || 6),
        n = void 0 !== n ? n : 0,
        o = void 0 !== o ? o : 2 * Math.PI,
        a = void 0 !== a ? a : 0,
        s = void 0 !== s ? s : Math.PI;
        var h,
        c,
        l = [],
        u = [];
        for (c = 0; r >= c; c++) {
          var d = [],
          f = [];
          for (h = 0; t >= h; h++) {
            var p = h / t,
            m = c / r,
            v = new i.Vector3;
            v.x = - e * Math.cos(n + p * o) * Math.sin(a + m * s),
            v.y = e * Math.cos(a + m * s),
            v.z = e * Math.sin(n + p * o) * Math.sin(a + m * s),
            this.vertices.push(v),
            d.push(this.vertices.length - 1),
            f.push(new i.Vector2(p, 1 - m))
          }
          l.push(d),
          u.push(f)
        }
        for (c = 0; r > c; c++) for (h = 0; t > h; h++) {
          var g = l[c][h + 1],
          y = l[c][h],
          x = l[c + 1][h],
          _ = l[c + 1][h + 1],
          w = this.vertices[g].clone().normalize(),
          b = this.vertices[y].clone().normalize(),
          M = this.vertices[x].clone().normalize(),
          S = this.vertices[_].clone().normalize(),
          T = u[c][h + 1].clone(),
          C = u[c][h].clone(),
          A = u[c + 1][h].clone(),
          E = u[c + 1][h + 1].clone();
          Math.abs(this.vertices[g].y) === e ? (
            T.x = (T.x + C.x) / 2,
            this.faces.push(new i.Face3(g, x, _, [
              w,
              M,
              S
            ])),
            this.faceVertexUvs[0].push([T,
            A,
            E])
          ) : Math.abs(this.vertices[x].y) === e ? (
            A.x = (A.x + E.x) / 2,
            this.faces.push(new i.Face3(g, y, x, [
              w,
              b,
              M
            ])),
            this.faceVertexUvs[0].push([T,
            C,
            A])
          ) : (
            this.faces.push(new i.Face3(g, y, _, [
              w,
              b,
              S
            ])),
            this.faceVertexUvs[0].push([T,
            C,
            E]),
            this.faces.push(new i.Face3(y, x, _, [
              b.clone(),
              M,
              S.clone()
            ])),
            this.faceVertexUvs[0].push([C.clone(),
            A,
            E.clone()])
          )
        }
        this.computeFaceNormals(),
        this.boundingSphere = new i.Sphere(new i.Vector3, e)
      },
      i.SphereGeometry.prototype = Object.create(i.Geometry.prototype),
      i.SphereGeometry.prototype.constructor = i.SphereGeometry,
      i.TextGeometry = function (e, t) {
        t = t ||
        {
        };
        var r = i.FontUtils.generateShapes(e, t);
        t.amount = void 0 !== t.height ? t.height : 50,
        void 0 === t.bevelThickness &&
        (t.bevelThickness = 10),
        void 0 === t.bevelSize &&
        (t.bevelSize = 8),
        void 0 === t.bevelEnabled &&
        (t.bevelEnabled = !1),
        i.ExtrudeGeometry.call(this, r, t),
        this.type = 'TextGeometry'
      },
      i.TextGeometry.prototype = Object.create(i.ExtrudeGeometry.prototype),
      i.TextGeometry.prototype.constructor = i.TextGeometry,
      i.TorusGeometry = function (e, t, r, n, o) {
        i.Geometry.call(this),
        this.type = 'TorusGeometry',
        this.parameters = {
          radius: e,
          tube: t,
          radialSegments: r,
          tubularSegments: n,
          arc: o
        },
        e = e ||
        100,
        t = t ||
        40,
        r = r ||
        8,
        n = n ||
        6,
        o = o ||
        2 * Math.PI;
        for (var a = new i.Vector3, s = [], h = [], c = 0; r >= c; c++) for (var l = 0; n >= l; l++) {
          var u = l / n * o,
          d = c / r * Math.PI * 2;
          a.x = e * Math.cos(u),
          a.y = e * Math.sin(u);
          var f = new i.Vector3;
          f.x = (e + t * Math.cos(d)) * Math.cos(u),
          f.y = (e + t * Math.cos(d)) * Math.sin(u),
          f.z = t * Math.sin(d),
          this.vertices.push(f),
          s.push(new i.Vector2(l / n, c / r)),
          h.push(f.clone().sub(a).normalize())
        }
        for (var c = 1; r >= c; c++) for (var l = 1; n >= l; l++) {
          var p = (n + 1) * c + l - 1,
          m = (n + 1) * (c - 1) + l - 1,
          v = (n + 1) * (c - 1) + l,
          g = (n + 1) * c + l,
          y = new i.Face3(p, m, g, [
            h[p].clone(),
            h[m].clone(),
            h[g].clone()
          ]);
          this.faces.push(y),
          this.faceVertexUvs[0].push([s[p].clone(),
          s[m].clone(),
          s[g].clone()]),
          y = new i.Face3(m, v, g, [
            h[m].clone(),
            h[v].clone(),
            h[g].clone()
          ]),
          this.faces.push(y),
          this.faceVertexUvs[0].push([s[m].clone(),
          s[v].clone(),
          s[g].clone()])
        }
        this.computeFaceNormals()
      },
      i.TorusGeometry.prototype = Object.create(i.Geometry.prototype),
      i.TorusGeometry.prototype.constructor = i.TorusGeometry,
      i.TorusKnotGeometry = function (e, t, r, n, o, a, s) {
        function h(e, t, r, n, o) {
          var a = Math.cos(e),
          s = Math.sin(e),
          h = t / r * e,
          c = Math.cos(h),
          l = n * (2 + c) * 0.5 * a,
          u = n * (2 + c) * s * 0.5,
          d = o * n * Math.sin(h) * 0.5;
          return new i.Vector3(l, u, d)
        }
        i.Geometry.call(this),
        this.type = 'TorusKnotGeometry',
        this.parameters = {
          radius: e,
          tube: t,
          radialSegments: r,
          tubularSegments: n,
          p: o,
          q: a,
          heightScale: s
        },
        e = e ||
        100,
        t = t ||
        40,
        r = r ||
        64,
        n = n ||
        8,
        o = o ||
        2,
        a = a ||
        3,
        s = s ||
        1;
        for (
          var c = new Array(r),
          l = new i.Vector3,
          u = new i.Vector3,
          d = new i.Vector3,
          f = 0;
          r > f;
          ++f
        ) {
          c[f] = new Array(n);
          var p = f / r * 2 * o * Math.PI,
          m = h(p, a, o, e, s),
          v = h(p + 0.01, a, o, e, s);
          l.subVectors(v, m),
          u.addVectors(v, m),
          d.crossVectors(l, u),
          u.crossVectors(d, l),
          d.normalize(),
          u.normalize();
          for (var g = 0; n > g; ++g) {
            var y = g / n * 2 * Math.PI,
            x = - t * Math.cos(y),
            _ = t * Math.sin(y),
            w = new i.Vector3;
            w.x = m.x + x * u.x + _ * d.x,
            w.y = m.y + x * u.y + _ * d.y,
            w.z = m.z + x * u.z + _ * d.z,
            c[f][g] = this.vertices.push(w) - 1
          }
        }
        for (var f = 0; r > f; ++f) for (var g = 0; n > g; ++g) {
          var b = (f + 1) % r,
          M = (g + 1) % n,
          S = c[f][g],
          T = c[b][g],
          C = c[b][M],
          A = c[f][M],
          E = new i.Vector2(f / r, g / n),
          P = new i.Vector2((f + 1) / r, g / n),
          D = new i.Vector2((f + 1) / r, (g + 1) / n),
          L = new i.Vector2(f / r, (g + 1) / n);
          this.faces.push(new i.Face3(S, T, A)),
          this.faceVertexUvs[0].push([E,
          P,
          L]),
          this.faces.push(new i.Face3(T, C, A)),
          this.faceVertexUvs[0].push([P.clone(),
          D,
          L.clone()])
        }
        this.computeFaceNormals(),
        this.computeVertexNormals()
      },
      i.TorusKnotGeometry.prototype = Object.create(i.Geometry.prototype),
      i.TorusKnotGeometry.prototype.constructor = i.TorusKnotGeometry,
      i.TubeGeometry = function (e, t, r, n, o, a) {
        function s(e, t, r) {
          return D.vertices.push(new i.Vector3(e, t, r)) - 1
        }
        i.Geometry.call(this),
        this.type = 'TubeGeometry',
        this.parameters = {
          path: e,
          segments: t,
          radius: r,
          radialSegments: n,
          closed: o
        },
        t = t ||
        64,
        r = r ||
        1,
        n = n ||
        8,
        o = o ||
        !1,
        a = a ||
        i.TubeGeometry.NoTaper;
        var h,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        v,
        g,
        y,
        x,
        _,
        w,
        b,
        M,
        S,
        T,
        C,
        A,
        E,
        P = [],
        D = this,
        L = t + 1,
        R = new i.Vector3,
        B = new i.TubeGeometry.FrenetFrames(e, t, o),
        F = B.tangents,
        U = B.normals,
        O = B.binormals;
        for (this.tangents = F, this.normals = U, this.binormals = O, g = 0; L > g; g++) for (
          P[g] = [],
          u = g / (L - 1),
          v = e.getPointAt(u),
          h = F[g],
          c = U[g],
          l = O[g],
          f = r * a(u),
          y = 0;
          n > y;
          y++
        ) d = y / n * 2 * Math.PI,
        p = - f * Math.cos(d),
        m = f * Math.sin(d),
        R.copy(v),
        R.x += p * c.x + m * l.x,
        R.y += p * c.y + m * l.y,
        R.z += p * c.z + m * l.z,
        P[g][y] = s(R.x, R.y, R.z);
        for (g = 0; t > g; g++) for (y = 0; n > y; y++) x = o ? (g + 1) % t : g + 1,
        _ = (y + 1) % n,
        w = P[g][y],
        b = P[x][y],
        M = P[x][_],
        S = P[g][_],
        T = new i.Vector2(g / t, y / n),
        C = new i.Vector2((g + 1) / t, y / n),
        A = new i.Vector2((g + 1) / t, (y + 1) / n),
        E = new i.Vector2(g / t, (y + 1) / n),
        this.faces.push(new i.Face3(w, b, S)),
        this.faceVertexUvs[0].push([T,
        C,
        E]),
        this.faces.push(new i.Face3(b, M, S)),
        this.faceVertexUvs[0].push([C.clone(),
        A,
        E.clone()]);
        this.computeFaceNormals(),
        this.computeVertexNormals()
      },
      i.TubeGeometry.prototype = Object.create(i.Geometry.prototype),
      i.TubeGeometry.prototype.constructor = i.TubeGeometry,
      i.TubeGeometry.NoTaper = function (e) {
        return 1
      },
      i.TubeGeometry.SinusoidalTaper = function (e) {
        return Math.sin(Math.PI * e)
      },
      i.TubeGeometry.FrenetFrames = function (e, t, r) {
        function n() {
          p[0] = new i.Vector3,
          m[0] = new i.Vector3,
          a = Number.MAX_VALUE,
          s = Math.abs(f[0].x),
          h = Math.abs(f[0].y),
          c = Math.abs(f[0].z),
          a >= s &&
          (a = s, d.set(1, 0, 0)),
          a >= h &&
          (a = h, d.set(0, 1, 0)),
          a >= c &&
          d.set(0, 0, 1),
          v.crossVectors(f[0], d).normalize(),
          p[0].crossVectors(f[0], v),
          m[0].crossVectors(f[0], p[0])
        }
        var o,
        a,
        s,
        h,
        c,
        l,
        u,
        d = new i.Vector3,
        f = [],
        p = [],
        m = [],
        v = new i.Vector3,
        g = new i.Matrix4,
        y = t + 1,
        x = 0.0001;
        for (this.tangents = f, this.normals = p, this.binormals = m, l = 0; y > l; l++) u = l / (y - 1),
        f[l] = e.getTangentAt(u),
        f[l].normalize();
        for (n(), l = 1; y > l; l++) p[l] = p[l - 1].clone(),
        m[l] = m[l - 1].clone(),
        v.crossVectors(f[l - 1], f[l]),
        v.length() > x &&
        (
          v.normalize(),
          o = Math.acos(i.Math.clamp(f[l - 1].dot(f[l]), - 1, 1)),
          p[l].applyMatrix4(g.makeRotationAxis(v, o))
        ),
        m[l].crossVectors(f[l], p[l]);
        if (r) for (
          o = Math.acos(i.Math.clamp(p[0].dot(p[y - 1]), - 1, 1)),
          o /= y - 1,
          f[0].dot(v.crossVectors(p[0], p[y - 1])) > 0 &&
          (o = - o),
          l = 1;
          y > l;
          l++
        ) p[l].applyMatrix4(g.makeRotationAxis(f[l], o * l)),
        m[l].crossVectors(f[l], p[l])
      },
      i.PolyhedronGeometry = function (e, t, r, n) {
        function o(e) {
          var t = e.normalize().clone();
          t.index = u.vertices.push(t) - 1;
          var r = h(e) / 2 / Math.PI + 0.5,
          n = c(e) / Math.PI + 0.5;
          return t.uv = new i.Vector2(r, 1 - n),
          t
        }
        function a(e, t, r) {
          var n = new i.Face3(e.index, t.index, r.index, [
            e.clone(),
            t.clone(),
            r.clone()
          ]);
          u.faces.push(n),
          _.copy(e).add(t).add(r).divideScalar(3);
          var o = h(_);
          u.faceVertexUvs[0].push([l(e.uv, e, o),
          l(t.uv, t, o),
          l(r.uv, r, o)])
        }
        function s(e, t) {
          for (
            var r = Math.pow(2, t),
            i = o(u.vertices[e.a]),
            n = o(u.vertices[e.b]),
            s = o(u.vertices[e.c]),
            h = [],
            c = 0;
            r >= c;
            c++
          ) {
            h[c] = [];
            for (
              var l = o(i.clone().lerp(s, c / r)),
              d = o(n.clone().lerp(s, c / r)),
              f = r - c,
              p = 0;
              f >= p;
              p++
            ) 0 == p &&
            c == r ? h[c][p] = l : h[c][p] = o(l.clone().lerp(d, p / f))
          }
          for (var c = 0; r > c; c++) for (var p = 0; 2 * (r - c) - 1 > p; p++) {
            var m = Math.floor(p / 2);
            p % 2 == 0 ? a(h[c][m + 1], h[c + 1][m], h[c][m]) : a(h[c][m + 1], h[c + 1][m + 1], h[c + 1][m])
          }
        }
        function h(e) {
          return Math.atan2(e.z, - e.x)
        }
        function c(e) {
          return Math.atan2( - e.y, Math.sqrt(e.x * e.x + e.z * e.z))
        }
        function l(e, t, r) {
          return 0 > r &&
          1 === e.x &&
          (e = new i.Vector2(e.x - 1, e.y)),
          0 === t.x &&
          0 === t.z &&
          (e = new i.Vector2(r / 2 / Math.PI + 0.5, e.y)),
          e.clone()
        }
        i.Geometry.call(this),
        this.type = 'PolyhedronGeometry',
        this.parameters = {
          vertices: e,
          indices: t,
          radius: r,
          detail: n
        },
        r = r ||
        1,
        n = n ||
        0;
        for (var u = this, d = 0, f = e.length; f > d; d += 3) o(new i.Vector3(e[d], e[d + 1], e[d + 2]));
        for (var p = this.vertices, m = [], d = 0, v = 0, f = t.length; f > d; d += 3, v++) {
          var g = p[t[d]],
          y = p[t[d + 1]],
          x = p[t[d + 2]];
          m[v] = new i.Face3(g.index, y.index, x.index, [
            g.clone(),
            y.clone(),
            x.clone()
          ])
        }
        for (var _ = new i.Vector3, d = 0, f = m.length; f > d; d++) s(m[d], n);
        for (var d = 0, f = this.faceVertexUvs[0].length; f > d; d++) {
          var w = this.faceVertexUvs[0][d],
          b = w[0].x,
          M = w[1].x,
          S = w[2].x,
          T = Math.max(b, Math.max(M, S)),
          C = Math.min(b, Math.min(M, S));
          T > 0.9 &&
          0.1 > C &&
          (0.2 > b && (w[0].x += 1), 0.2 > M && (w[1].x += 1), 0.2 > S && (w[2].x += 1))
        }
        for (var d = 0, f = this.vertices.length; f > d; d++) this.vertices[d].multiplyScalar(r);
        this.mergeVertices(),
        this.computeFaceNormals(),
        this.boundingSphere = new i.Sphere(new i.Vector3, r)
      },
      i.PolyhedronGeometry.prototype = Object.create(i.Geometry.prototype),
      i.PolyhedronGeometry.prototype.constructor = i.PolyhedronGeometry,
      i.DodecahedronGeometry = function (e, t) {
        this.parameters = {
          radius: e,
          detail: t
        };
        var r = (1 + Math.sqrt(5)) / 2,
        n = 1 / r,
        o = [
          - 1,
          - 1,
          - 1,
          - 1,
          - 1,
          1,
          - 1,
          1,
          - 1,
          - 1,
          1,
          1,
          1,
          - 1,
          - 1,
          1,
          - 1,
          1,
          1,
          1,
          - 1,
          1,
          1,
          1,
          0,
          - n,
          - r,
          0,
          - n,
          r,
          0,
          n,
          - r,
          0,
          n,
          r,
          - n,
          - r,
          0,
          - n,
          r,
          0,
          n,
          - r,
          0,
          n,
          r,
          0,
          - r,
          0,
          - n,
          r,
          0,
          - n,
          - r,
          0,
          n,
          r,
          0,
          n
        ],
        a = [
          3,
          11,
          7,
          3,
          7,
          15,
          3,
          15,
          13,
          7,
          19,
          17,
          7,
          17,
          6,
          7,
          6,
          15,
          17,
          4,
          8,
          17,
          8,
          10,
          17,
          10,
          6,
          8,
          0,
          16,
          8,
          16,
          2,
          8,
          2,
          10,
          0,
          12,
          1,
          0,
          1,
          18,
          0,
          18,
          16,
          6,
          10,
          2,
          6,
          2,
          13,
          6,
          13,
          15,
          2,
          16,
          18,
          2,
          18,
          3,
          2,
          3,
          13,
          18,
          1,
          9,
          18,
          9,
          11,
          18,
          11,
          3,
          4,
          14,
          12,
          4,
          12,
          0,
          4,
          0,
          8,
          11,
          9,
          5,
          11,
          5,
          19,
          11,
          19,
          7,
          19,
          5,
          14,
          19,
          14,
          4,
          19,
          4,
          17,
          1,
          12,
          14,
          1,
          14,
          5,
          1,
          5,
          9
        ];
        i.PolyhedronGeometry.call(this, o, a, e, t)
      },
      i.DodecahedronGeometry.prototype = Object.create(i.Geometry.prototype),
      i.DodecahedronGeometry.prototype.constructor = i.DodecahedronGeometry,
      i.IcosahedronGeometry = function (e, t) {
        var r = (1 + Math.sqrt(5)) / 2,
        n = [
          - 1,
          r,
          0,
          1,
          r,
          0,
          - 1,
          - r,
          0,
          1,
          - r,
          0,
          0,
          - 1,
          r,
          0,
          1,
          r,
          0,
          - 1,
          - r,
          0,
          1,
          - r,
          r,
          0,
          - 1,
          r,
          0,
          1,
          - r,
          0,
          - 1,
          - r,
          0,
          1
        ],
        o = [
          0,
          11,
          5,
          0,
          5,
          1,
          0,
          1,
          7,
          0,
          7,
          10,
          0,
          10,
          11,
          1,
          5,
          9,
          5,
          11,
          4,
          11,
          10,
          2,
          10,
          7,
          6,
          7,
          1,
          8,
          3,
          9,
          4,
          3,
          4,
          2,
          3,
          2,
          6,
          3,
          6,
          8,
          3,
          8,
          9,
          4,
          9,
          5,
          2,
          4,
          11,
          6,
          2,
          10,
          8,
          6,
          7,
          9,
          8,
          1
        ];
        i.PolyhedronGeometry.call(this, n, o, e, t),
        this.type = 'IcosahedronGeometry',
        this.parameters = {
          radius: e,
          detail: t
        }
      },
      i.IcosahedronGeometry.prototype = Object.create(i.Geometry.prototype),
      i.IcosahedronGeometry.prototype.constructor = i.IcosahedronGeometry,
      i.OctahedronGeometry = function (e, t) {
        this.parameters = {
          radius: e,
          detail: t
        };
        var r = [
          1,
          0,
          0,
          - 1,
          0,
          0,
          0,
          1,
          0,
          0,
          - 1,
          0,
          0,
          0,
          1,
          0,
          0,
          - 1
        ],
        n = [
          0,
          2,
          4,
          0,
          4,
          3,
          0,
          3,
          5,
          0,
          5,
          2,
          1,
          2,
          5,
          1,
          5,
          3,
          1,
          3,
          4,
          1,
          4,
          2
        ];
        i.PolyhedronGeometry.call(this, r, n, e, t),
        this.type = 'OctahedronGeometry',
        this.parameters = {
          radius: e,
          detail: t
        }
      },
      i.OctahedronGeometry.prototype = Object.create(i.Geometry.prototype),
      i.OctahedronGeometry.prototype.constructor = i.OctahedronGeometry,
      i.TetrahedronGeometry = function (e, t) {
        var r = [
          1,
          1,
          1,
          - 1,
          - 1,
          1,
          - 1,
          1,
          - 1,
          1,
          - 1,
          - 1
        ],
        n = [
          2,
          1,
          0,
          0,
          3,
          2,
          1,
          3,
          0,
          2,
          3,
          1
        ];
        i.PolyhedronGeometry.call(this, r, n, e, t),
        this.type = 'TetrahedronGeometry',
        this.parameters = {
          radius: e,
          detail: t
        }
      },
      i.TetrahedronGeometry.prototype = Object.create(i.Geometry.prototype),
      i.TetrahedronGeometry.prototype.constructor = i.TetrahedronGeometry,
      i.ParametricGeometry = function (e, t, r) {
        i.Geometry.call(this),
        this.type = 'ParametricGeometry',
        this.parameters = {
          func: e,
          slices: t,
          stacks: r
        };
        var n,
        o,
        a,
        s,
        h,
        c = this.vertices,
        l = this.faces,
        u = this.faceVertexUvs[0],
        d = t + 1;
        for (n = 0; r >= n; n++) for (h = n / r, o = 0; t >= o; o++) s = o / t,
        a = e(s, h),
        c.push(a);
        var f,
        p,
        m,
        v,
        g,
        y,
        x,
        _;
        for (n = 0; r > n; n++) for (o = 0; t > o; o++) f = n * d + o,
        p = n * d + o + 1,
        m = (n + 1) * d + o + 1,
        v = (n + 1) * d + o,
        g = new i.Vector2(o / t, n / r),
        y = new i.Vector2((o + 1) / t, n / r),
        x = new i.Vector2((o + 1) / t, (n + 1) / r),
        _ = new i.Vector2(o / t, (n + 1) / r),
        l.push(new i.Face3(f, p, v)),
        u.push([g,
        y,
        _]),
        l.push(new i.Face3(p, m, v)),
        u.push([y.clone(),
        x,
        _.clone()]);
        this.computeFaceNormals(),
        this.computeVertexNormals()
      },
      i.ParametricGeometry.prototype = Object.create(i.Geometry.prototype),
      i.ParametricGeometry.prototype.constructor = i.ParametricGeometry,
      i.AxisHelper = function (e) {
        e = e ||
        1;
        var t = new Float32Array([0,
        0,
        0,
        e,
        0,
        0,
        0,
        0,
        0,
        0,
        e,
        0,
        0,
        0,
        0,
        0,
        0,
        e]),
        r = new Float32Array([1,
        0,
        0,
        1,
        0.6,
        0,
        0,
        1,
        0,
        0.6,
        1,
        0,
        0,
        0,
        1,
        0,
        0.6,
        1]),
        n = new i.BufferGeometry;
        n.addAttribute('position', new i.BufferAttribute(t, 3)),
        n.addAttribute('color', new i.BufferAttribute(r, 3));
        var o = new i.LineBasicMaterial({
          vertexColors: i.VertexColors
        });
        i.Line.call(this, n, o, i.LinePieces)
      },
      i.AxisHelper.prototype = Object.create(i.Line.prototype),
      i.AxisHelper.prototype.constructor = i.AxisHelper,
      i.ArrowHelper = function () {
        var e = new i.Geometry;
        e.vertices.push(new i.Vector3(0, 0, 0), new i.Vector3(0, 1, 0));
        var t = new i.CylinderGeometry(0, 0.5, 1, 5, 1);
        return t.applyMatrix((new i.Matrix4).makeTranslation(0, - 0.5, 0)),
        function (r, n, o, a, s, h) {
          i.Object3D.call(this),
          void 0 === a &&
          (a = 16776960),
          void 0 === o &&
          (o = 1),
          void 0 === s &&
          (s = 0.2 * o),
          void 0 === h &&
          (h = 0.2 * s),
          this.position.copy(n),
          this.line = new i.Line(e, new i.LineBasicMaterial({
            color: a
          })),
          this.line.matrixAutoUpdate = !1,
          this.add(this.line),
          this.cone = new i.Mesh(t, new i.MeshBasicMaterial({
            color: a
          })),
          this.cone.matrixAutoUpdate = !1,
          this.add(this.cone),
          this.setDirection(r),
          this.setLength(o, s, h)
        }
      }(),
      i.ArrowHelper.prototype = Object.create(i.Object3D.prototype),
      i.ArrowHelper.prototype.constructor = i.ArrowHelper,
      i.ArrowHelper.prototype.setDirection = function () {
        var e,
        t = new i.Vector3;
        return function (r) {
          r.y > 0.99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < - 0.99999 ? this.quaternion.set(1, 0, 0, 0) : (
            t.set(r.z, 0, - r.x).normalize(),
            e = Math.acos(r.y),
            this.quaternion.setFromAxisAngle(t, e)
          )
        }
      }(),
      i.ArrowHelper.prototype.setLength = function (e, t, r) {
        void 0 === t &&
        (t = 0.2 * e),
        void 0 === r &&
        (r = 0.2 * t),
        this.line.scale.set(1, e - t, 1),
        this.line.updateMatrix(),
        this.cone.scale.set(r, t, r),
        this.cone.position.y = e,
        this.cone.updateMatrix()
      },
      i.ArrowHelper.prototype.setColor = function (e) {
        this.line.material.color.set(e),
        this.cone.material.color.set(e)
      },
      i.BoxHelper = function (e) {
        var t = new i.BufferGeometry;
        t.addAttribute('position', new i.BufferAttribute(new Float32Array(72), 3)),
        i.Line.call(this, t, new i.LineBasicMaterial({
          color: 16776960
        }), i.LinePieces),
        void 0 !== e &&
        this.update(e)
      },
      i.BoxHelper.prototype = Object.create(i.Line.prototype),
      i.BoxHelper.prototype.constructor = i.BoxHelper,
      i.BoxHelper.prototype.update = function (e) {
        var t = e.geometry;
        null === t.boundingBox &&
        t.computeBoundingBox();
        var r = t.boundingBox.min,
        i = t.boundingBox.max,
        n = this.geometry.attributes.position.array;
        n[0] = i.x,
        n[1] = i.y,
        n[2] = i.z,
        n[3] = r.x,
        n[4] = i.y,
        n[5] = i.z,
        n[6] = r.x,
        n[7] = i.y,
        n[8] = i.z,
        n[9] = r.x,
        n[10] = r.y,
        n[11] = i.z,
        n[12] = r.x,
        n[13] = r.y,
        n[14] = i.z,
        n[15] = i.x,
        n[16] = r.y,
        n[17] = i.z,
        n[18] = i.x,
        n[19] = r.y,
        n[20] = i.z,
        n[21] = i.x,
        n[22] = i.y,
        n[23] = i.z,
        n[24] = i.x,
        n[25] = i.y,
        n[26] = r.z,
        n[27] = r.x,
        n[28] = i.y,
        n[29] = r.z,
        n[30] = r.x,
        n[31] = i.y,
        n[32] = r.z,
        n[33] = r.x,
        n[34] = r.y,
        n[35] = r.z,
        n[36] = r.x,
        n[37] = r.y,
        n[38] = r.z,
        n[39] = i.x,
        n[40] = r.y,
        n[41] = r.z,
        n[42] = i.x,
        n[43] = r.y,
        n[44] = r.z,
        n[45] = i.x,
        n[46] = i.y,
        n[47] = r.z,
        n[48] = i.x,
        n[49] = i.y,
        n[50] = i.z,
        n[51] = i.x,
        n[52] = i.y,
        n[53] = r.z,
        n[54] = r.x,
        n[55] = i.y,
        n[56] = i.z,
        n[57] = r.x,
        n[58] = i.y,
        n[59] = r.z,
        n[60] = r.x,
        n[61] = r.y,
        n[62] = i.z,
        n[63] = r.x,
        n[64] = r.y,
        n[65] = r.z,
        n[66] = i.x,
        n[67] = r.y,
        n[68] = i.z,
        n[69] = i.x,
        n[70] = r.y,
        n[71] = r.z,
        this.geometry.attributes.position.needsUpdate = !0,
        this.geometry.computeBoundingSphere(),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1
      },
      i.BoundingBoxHelper = function (e, t) {
        var r = void 0 !== t ? t : 8947848;
        this.object = e,
        this.box = new i.Box3,
        i.Mesh.call(
          this,
          new i.BoxGeometry(1, 1, 1),
          new i.MeshBasicMaterial({
            color: r,
            wireframe: !0
          })
        )
      },
      i.BoundingBoxHelper.prototype = Object.create(i.Mesh.prototype),
      i.BoundingBoxHelper.prototype.constructor = i.BoundingBoxHelper,
      i.BoundingBoxHelper.prototype.update = function () {
        this.box.setFromObject(this.object),
        this.box.size(this.scale),
        this.box.center(this.position)
      },
      i.CameraHelper = function (e) {
        function t(e, t, i) {
          r(e, i),
          r(t, i)
        }
        function r(e, t) {
          n.vertices.push(new i.Vector3),
          n.colors.push(new i.Color(t)),
          void 0 === a[e] &&
          (a[e] = []),
          a[e].push(n.vertices.length - 1)
        }
        var n = new i.Geometry,
        o = new i.LineBasicMaterial({
          color: 16777215,
          vertexColors: i.FaceColors
        }),
        a = {},
        s = 16755200,
        h = 16711680,
        c = 43775,
        l = 16777215,
        u = 3355443;
        t('n1', 'n2', s),
        t('n2', 'n4', s),
        t('n4', 'n3', s),
        t('n3', 'n1', s),
        t('f1', 'f2', s),
        t('f2', 'f4', s),
        t('f4', 'f3', s),
        t('f3', 'f1', s),
        t('n1', 'f1', s),
        t('n2', 'f2', s),
        t('n3', 'f3', s),
        t('n4', 'f4', s),
        t('p', 'n1', h),
        t('p', 'n2', h),
        t('p', 'n3', h),
        t('p', 'n4', h),
        t('u1', 'u2', c),
        t('u2', 'u3', c),
        t('u3', 'u1', c),
        t('c', 't', l),
        t('p', 'c', u),
        t('cn1', 'cn2', u),
        t('cn3', 'cn4', u),
        t('cf1', 'cf2', u),
        t('cf3', 'cf4', u),
        i.Line.call(this, n, o, i.LinePieces),
        this.camera = e,
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.pointMap = a,
        this.update()
      },
      i.CameraHelper.prototype = Object.create(i.Line.prototype),
      i.CameraHelper.prototype.constructor = i.CameraHelper,
      i.CameraHelper.prototype.update = function () {
        var e,
        t,
        r = new i.Vector3,
        n = new i.Camera,
        o = function (i, o, a, s) {
          r.set(o, a, s).unproject(n);
          var h = t[i];
          if (void 0 !== h) for (var c = 0, l = h.length; l > c; c++) e.vertices[h[c]].copy(r)
        };
        return function () {
          e = this.geometry,
          t = this.pointMap;
          var r = 1,
          i = 1;
          n.projectionMatrix.copy(this.camera.projectionMatrix),
          o('c', 0, 0, - 1),
          o('t', 0, 0, 1),
          o('n1', - r, - i, - 1),
          o('n2', r, - i, - 1),
          o('n3', - r, i, - 1),
          o('n4', r, i, - 1),
          o('f1', - r, - i, 1),
          o('f2', r, - i, 1),
          o('f3', - r, i, 1),
          o('f4', r, i, 1),
          o('u1', 0.7 * r, 1.1 * i, - 1),
          o('u2', 0.7 * - r, 1.1 * i, - 1),
          o('u3', 0, 2 * i, - 1),
          o('cf1', - r, 0, 1),
          o('cf2', r, 0, 1),
          o('cf3', 0, - i, 1),
          o('cf4', 0, i, 1),
          o('cn1', - r, 0, - 1),
          o('cn2', r, 0, - 1),
          o('cn3', 0, - i, - 1),
          o('cn4', 0, i, - 1),
          e.verticesNeedUpdate = !0
        }
      }(),
      i.DirectionalLightHelper = function (e, t) {
        i.Object3D.call(this),
        this.light = e,
        this.light.updateMatrixWorld(),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1,
        t = t ||
        1;
        var r = new i.Geometry;
        r.vertices.push(
          new i.Vector3( - t, t, 0),
          new i.Vector3(t, t, 0),
          new i.Vector3(t, - t, 0),
          new i.Vector3( - t, - t, 0),
          new i.Vector3( - t, t, 0)
        );
        var n = new i.LineBasicMaterial({
          fog: !1
        });
        n.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        this.lightPlane = new i.Line(r, n),
        this.add(this.lightPlane),
        r = new i.Geometry,
        r.vertices.push(new i.Vector3, new i.Vector3),
        n = new i.LineBasicMaterial({
          fog: !1
        }),
        n.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        this.targetLine = new i.Line(r, n),
        this.add(this.targetLine),
        this.update()
      },
      i.DirectionalLightHelper.prototype = Object.create(i.Object3D.prototype),
      i.DirectionalLightHelper.prototype.constructor = i.DirectionalLightHelper,
      i.DirectionalLightHelper.prototype.dispose = function () {
        this.lightPlane.geometry.dispose(),
        this.lightPlane.material.dispose(),
        this.targetLine.geometry.dispose(),
        this.targetLine.material.dispose()
      },
      i.DirectionalLightHelper.prototype.update = function () {
        var e = new i.Vector3,
        t = new i.Vector3,
        r = new i.Vector3;
        return function () {
          e.setFromMatrixPosition(this.light.matrixWorld),
          t.setFromMatrixPosition(this.light.target.matrixWorld),
          r.subVectors(t, e),
          this.lightPlane.lookAt(r),
          this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
          this.targetLine.geometry.vertices[1].copy(r),
          this.targetLine.geometry.verticesNeedUpdate = !0,
          this.targetLine.material.color.copy(this.lightPlane.material.color)
        }
      }(),
      i.EdgesHelper = function (e, t, r) {
        var n = void 0 !== t ? t : 16777215;
        r = void 0 !== r ? r : 1;
        var o,
        a = Math.cos(i.Math.degToRad(r)),
        s = [
          0,
          0
        ],
        h = {},
        c = function (e, t) {
          return e - t
        },
        l = [
          'a',
          'b',
          'c'
        ],
        u = new i.BufferGeometry;
        e.geometry instanceof i.BufferGeometry ? (o = new i.Geometry, o.fromBufferGeometry(e.geometry)) : o = e.geometry.clone(),
        o.mergeVertices(),
        o.computeFaceNormals();
        for (var d = o.vertices, f = o.faces, p = 0, m = 0, v = f.length; v > m; m++) for (var g = f[m], y = 0; 3 > y; y++) {
          s[0] = g[l[y]],
          s[1] = g[l[(y + 1) % 3]],
          s.sort(c);
          var x = s.toString();
          void 0 === h[x] ? (h[x] = {
            vert1: s[0],
            vert2: s[1],
            face1: m,
            face2: void 0
          }, p++) : h[x].face2 = m
        }
        var _ = new Float32Array(2 * p * 3),
        w = 0;
        for (var x in h) {
          var b = h[x];
          if (void 0 === b.face2 || f[b.face1].normal.dot(f[b.face2].normal) <= a) {
            var M = d[b.vert1];
            _[w++] = M.x,
            _[w++] = M.y,
            _[w++] = M.z,
            M = d[b.vert2],
            _[w++] = M.x,
            _[w++] = M.y,
            _[w++] = M.z
          }
        }
        u.addAttribute('position', new i.BufferAttribute(_, 3)),
        i.Line.call(this, u, new i.LineBasicMaterial({
          color: n
        }), i.LinePieces),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1
      },
      i.EdgesHelper.prototype = Object.create(i.Line.prototype),
      i.EdgesHelper.prototype.constructor = i.EdgesHelper,
      i.FaceNormalsHelper = function (e, t, r, n) {
        this.object = e,
        this.size = void 0 !== t ? t : 1;
        for (
          var o = void 0 !== r ? r : 16776960,
          a = void 0 !== n ? n : 1,
          s = new i.Geometry,
          h = this.object.geometry.faces,
          c = 0,
          l = h.length;
          l > c;
          c++
        ) s.vertices.push(new i.Vector3, new i.Vector3);
        i.Line.call(
          this,
          s,
          new i.LineBasicMaterial({
            color: o,
            linewidth: a
          }),
          i.LinePieces
        ),
        this.matrixAutoUpdate = !1,
        this.normalMatrix = new i.Matrix3,
        this.update()
      },
      i.FaceNormalsHelper.prototype = Object.create(i.Line.prototype),
      i.FaceNormalsHelper.prototype.constructor = i.FaceNormalsHelper,
      i.FaceNormalsHelper.prototype.update = function () {
        var e = this.geometry.vertices,
        t = this.object,
        r = t.geometry.vertices,
        i = t.geometry.faces,
        n = t.matrixWorld;
        t.updateMatrixWorld(!0),
        this.normalMatrix.getNormalMatrix(n);
        for (var o = 0, a = 0, s = i.length; s > o; o++, a += 2) {
          var h = i[o];
          e[a].copy(r[h.a]).add(r[h.b]).add(r[h.c]).divideScalar(3).applyMatrix4(n),
          e[a + 1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(e[a])
        }
        return this.geometry.verticesNeedUpdate = !0,
        this
      },
      i.GridHelper = function (e, t) {
        var r = new i.Geometry,
        n = new i.LineBasicMaterial({
          vertexColors: i.VertexColors
        });
        this.color1 = new i.Color(4473924),
        this.color2 = new i.Color(8947848);
        for (var o = - e; e >= o; o += t) {
          r.vertices.push(
            new i.Vector3( - e, 0, o),
            new i.Vector3(e, 0, o),
            new i.Vector3(o, 0, - e),
            new i.Vector3(o, 0, e)
          );
          var a = 0 === o ? this.color1 : this.color2;
          r.colors.push(a, a, a, a)
        }
        i.Line.call(this, r, n, i.LinePieces)
      },
      i.GridHelper.prototype = Object.create(i.Line.prototype),
      i.GridHelper.prototype.constructor = i.GridHelper,
      i.GridHelper.prototype.setColors = function (e, t) {
        this.color1.set(e),
        this.color2.set(t),
        this.geometry.colorsNeedUpdate = !0
      },
      i.HemisphereLightHelper = function (e, t) {
        i.Object3D.call(this),
        this.light = e,
        this.light.updateMatrixWorld(),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.colors = [
          new i.Color,
          new i.Color
        ];
        var r = new i.SphereGeometry(t, 4, 2);
        r.applyMatrix((new i.Matrix4).makeRotationX( - Math.PI / 2));
        for (var n = 0, o = 8; o > n; n++) r.faces[n].color = this.colors[4 > n ? 0 : 1];
        var a = new i.MeshBasicMaterial({
          vertexColors: i.FaceColors,
          wireframe: !0
        });
        this.lightSphere = new i.Mesh(r, a),
        this.add(this.lightSphere),
        this.update()
      },
      i.HemisphereLightHelper.prototype = Object.create(i.Object3D.prototype),
      i.HemisphereLightHelper.prototype.constructor = i.HemisphereLightHelper,
      i.HemisphereLightHelper.prototype.dispose = function () {
        this.lightSphere.geometry.dispose(),
        this.lightSphere.material.dispose()
      },
      i.HemisphereLightHelper.prototype.update = function () {
        var e = new i.Vector3;
        return function () {
          this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),
          this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),
          this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),
          this.lightSphere.geometry.colorsNeedUpdate = !0
        }
      }(),
      i.PointLightHelper = function (e, t) {
        this.light = e,
        this.light.updateMatrixWorld();
        var r = new i.SphereGeometry(t, 4, 2),
        n = new i.MeshBasicMaterial({
          wireframe: !0,
          fog: !1
        });
        n.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        i.Mesh.call(this, r, n),
        this.matrix = this.light.matrixWorld,
        this.matrixAutoUpdate = !1
      },
      i.PointLightHelper.prototype = Object.create(i.Mesh.prototype),
      i.PointLightHelper.prototype.constructor = i.PointLightHelper,
      i.PointLightHelper.prototype.dispose = function () {
        this.geometry.dispose(),
        this.material.dispose()
      },
      i.PointLightHelper.prototype.update = function () {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
      },
      i.SkeletonHelper = function (e) {
        this.bones = this.getBoneList(e);
        for (var t = new i.Geometry, r = 0; r < this.bones.length; r++) {
          var n = this.bones[r];
          n.parent instanceof i.Bone &&
          (
            t.vertices.push(new i.Vector3),
            t.vertices.push(new i.Vector3),
            t.colors.push(new i.Color(0, 0, 1)),
            t.colors.push(new i.Color(0, 1, 0))
          )
        }
        var o = new i.LineBasicMaterial({
          vertexColors: i.VertexColors,
          depthTest: !1,
          depthWrite: !1,
          transparent: !0
        });
        i.Line.call(this, t, o, i.LinePieces),
        this.root = e,
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.update()
      },
      i.SkeletonHelper.prototype = Object.create(i.Line.prototype),
      i.SkeletonHelper.prototype.constructor = i.SkeletonHelper,
      i.SkeletonHelper.prototype.getBoneList = function (e) {
        var t = [];
        e instanceof i.Bone &&
        t.push(e);
        for (var r = 0; r < e.children.length; r++) t.push.apply(t, this.getBoneList(e.children[r]));
        return t
      },
      i.SkeletonHelper.prototype.update = function () {
        for (
          var e = this.geometry,
          t = (new i.Matrix4).getInverse(this.root.matrixWorld),
          r = new i.Matrix4,
          n = 0,
          o = 0;
          o < this.bones.length;
          o++
        ) {
          var a = this.bones[o];
          a.parent instanceof i.Bone &&
          (
            r.multiplyMatrices(t, a.matrixWorld),
            e.vertices[n].setFromMatrixPosition(r),
            r.multiplyMatrices(t, a.parent.matrixWorld),
            e.vertices[n + 1].setFromMatrixPosition(r),
            n += 2
          )
        }
        e.verticesNeedUpdate = !0,
        e.computeBoundingSphere()
      },
      i.SpotLightHelper = function (e) {
        i.Object3D.call(this),
        this.light = e,
        this.light.updateMatrixWorld(),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1;
        var t = new i.CylinderGeometry(0, 1, 1, 8, 1, !0);
        t.applyMatrix((new i.Matrix4).makeTranslation(0, - 0.5, 0)),
        t.applyMatrix((new i.Matrix4).makeRotationX( - Math.PI / 2));
        var r = new i.MeshBasicMaterial({
          wireframe: !0,
          fog: !1
        });
        this.cone = new i.Mesh(t, r),
        this.add(this.cone),
        this.update()
      },
      i.SpotLightHelper.prototype = Object.create(i.Object3D.prototype),
      i.SpotLightHelper.prototype.constructor = i.SpotLightHelper,
      i.SpotLightHelper.prototype.dispose = function () {
        this.cone.geometry.dispose(),
        this.cone.material.dispose()
      },
      i.SpotLightHelper.prototype.update = function () {
        var e = new i.Vector3,
        t = new i.Vector3;
        return function () {
          var r = this.light.distance ? this.light.distance : 10000,
          i = r * Math.tan(this.light.angle);
          this.cone.scale.set(i, i, r),
          e.setFromMatrixPosition(this.light.matrixWorld),
          t.setFromMatrixPosition(this.light.target.matrixWorld),
          this.cone.lookAt(t.sub(e)),
          this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
      }(),
      i.VertexNormalsHelper = function (e, t, r, n) {
        this.object = e,
        this.size = void 0 !== t ? t : 1;
        for (
          var o = void 0 !== r ? r : 16711680,
          a = void 0 !== n ? n : 1,
          s = new i.Geometry,
          h = e.geometry.faces,
          c = 0,
          l = h.length;
          l > c;
          c++
        ) for (var u = h[c], d = 0, f = u.vertexNormals.length; f > d; d++) s.vertices.push(new i.Vector3, new i.Vector3);
        i.Line.call(
          this,
          s,
          new i.LineBasicMaterial({
            color: o,
            linewidth: a
          }),
          i.LinePieces
        ),
        this.matrixAutoUpdate = !1,
        this.normalMatrix = new i.Matrix3,
        this.update()
      },
      i.VertexNormalsHelper.prototype = Object.create(i.Line.prototype),
      i.VertexNormalsHelper.prototype.constructor = i.VertexNormalsHelper,
      i.VertexNormalsHelper.prototype.update = function (e) {
        var t = new i.Vector3;
        return function (e) {
          var r = [
            'a',
            'b',
            'c',
            'd'
          ];
          this.object.updateMatrixWorld(!0),
          this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
          for (
            var i = this.geometry.vertices,
            n = this.object.geometry.vertices,
            o = this.object.geometry.faces,
            a = this.object.matrixWorld,
            s = 0,
            h = 0,
            c = o.length;
            c > h;
            h++
          ) for (var l = o[h], u = 0, d = l.vertexNormals.length; d > u; u++) {
            var f = l[r[u]],
            p = n[f],
            m = l.vertexNormals[u];
            i[s].copy(p).applyMatrix4(a),
            t.copy(m).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size),
            t.add(i[s]),
            s += 1,
            i[s].copy(t),
            s += 1
          }
          return this.geometry.verticesNeedUpdate = !0,
          this
        }
      }(),
      i.VertexTangentsHelper = function (e, t, r, n) {
        this.object = e,
        this.size = void 0 !== t ? t : 1;
        for (
          var o = void 0 !== r ? r : 255,
          a = void 0 !== n ? n : 1,
          s = new i.Geometry,
          h = e.geometry.faces,
          c = 0,
          l = h.length;
          l > c;
          c++
        ) for (var u = h[c], d = 0, f = u.vertexTangents.length; f > d; d++) s.vertices.push(new i.Vector3),
        s.vertices.push(new i.Vector3);
        i.Line.call(
          this,
          s,
          new i.LineBasicMaterial({
            color: o,
            linewidth: a
          }),
          i.LinePieces
        ),
        this.matrixAutoUpdate = !1,
        this.update()
      },
      i.VertexTangentsHelper.prototype = Object.create(i.Line.prototype),
      i.VertexTangentsHelper.prototype.constructor = i.VertexTangentsHelper,
      i.VertexTangentsHelper.prototype.update = function (e) {
        var t = new i.Vector3;
        return function (e) {
          var r = [
            'a',
            'b',
            'c',
            'd'
          ];
          this.object.updateMatrixWorld(!0);
          for (
            var i = this.geometry.vertices,
            n = this.object.geometry.vertices,
            o = this.object.geometry.faces,
            a = this.object.matrixWorld,
            s = 0,
            h = 0,
            c = o.length;
            c > h;
            h++
          ) for (var l = o[h], u = 0, d = l.vertexTangents.length; d > u; u++) {
            var f = l[r[u]],
            p = n[f],
            m = l.vertexTangents[u];
            i[s].copy(p).applyMatrix4(a),
            t.copy(m).transformDirection(a).multiplyScalar(this.size),
            t.add(i[s]),
            s += 1,
            i[s].copy(t),
            s += 1
          }
          return this.geometry.verticesNeedUpdate = !0,
          this
        }
      }(),
      i.WireframeHelper = function (e, t) {
        var r = void 0 !== t ? t : 16777215,
        n = [
          0,
          0
        ],
        o = {},
        a = function (e, t) {
          return e - t
        },
        s = [
          'a',
          'b',
          'c'
        ],
        h = new i.BufferGeometry;
        if (e.geometry instanceof i.Geometry) {
          for (
            var c = e.geometry.vertices,
            l = e.geometry.faces,
            u = 0,
            d = new Uint32Array(6 * l.length),
            f = 0,
            p = l.length;
            p > f;
            f++
          ) for (var m = l[f], v = 0; 3 > v; v++) {
            n[0] = m[s[v]],
            n[1] = m[s[(v + 1) % 3]],
            n.sort(a);
            var g = n.toString();
            void 0 === o[g] &&
            (d[2 * u] = n[0], d[2 * u + 1] = n[1], o[g] = !0, u++)
          }
          for (var y = new Float32Array(2 * u * 3), f = 0, p = u; p > f; f++) for (var v = 0; 2 > v; v++) {
            var x = c[d[2 * f + v]],
            _ = 6 * f + 3 * v;
            y[_ + 0] = x.x,
            y[_ + 1] = x.y,
            y[_ + 2] = x.z
          }
          h.addAttribute('position', new i.BufferAttribute(y, 3))
        } else if (e.geometry instanceof i.BufferGeometry) if (void 0 !== e.geometry.attributes.index) {
          var c = e.geometry.attributes.position.array,
          w = e.geometry.attributes.index.array,
          b = e.geometry.drawcalls,
          u = 0;
          0 === b.length &&
          (b = [
            {
              count: w.length,
              index: 0,
              start: 0
            }
          ]);
          for (var d = new Uint32Array(2 * w.length), M = 0, S = b.length; S > M; ++M) for (var T = b[M].start, C = b[M].count, _ = b[M].index, f = T, A = T + C; A > f; f += 3) for (var v = 0; 3 > v; v++) {
            n[0] = _ + w[f + v],
            n[1] = _ + w[f + (v + 1) % 3],
            n.sort(a);
            var g = n.toString();
            void 0 === o[g] &&
            (d[2 * u] = n[0], d[2 * u + 1] = n[1], o[g] = !0, u++)
          }
          for (var y = new Float32Array(2 * u * 3), f = 0, p = u; p > f; f++) for (var v = 0; 2 > v; v++) {
            var _ = 6 * f + 3 * v,
            E = 3 * d[2 * f + v];
            y[_ + 0] = c[E],
            y[_ + 1] = c[E + 1],
            y[_ + 2] = c[E + 2]
          }
          h.addAttribute('position', new i.BufferAttribute(y, 3))
        } else {
          for (
            var c = e.geometry.attributes.position.array,
            u = c.length / 3,
            P = u / 3,
            y = new Float32Array(2 * u * 3),
            f = 0,
            p = P;
            p > f;
            f++
          ) for (var v = 0; 3 > v; v++) {
            var _ = 18 * f + 6 * v,
            D = 9 * f + 3 * v;
            y[_ + 0] = c[D],
            y[_ + 1] = c[D + 1],
            y[_ + 2] = c[D + 2];
            var E = 9 * f + 3 * ((v + 1) % 3);
            y[_ + 3] = c[E],
            y[_ + 4] = c[E + 1],
            y[_ + 5] = c[E + 2]
          }
          h.addAttribute('position', new i.BufferAttribute(y, 3))
        }
        i.Line.call(this, h, new i.LineBasicMaterial({
          color: r
        }), i.LinePieces),
        this.matrix = e.matrixWorld,
        this.matrixAutoUpdate = !1
      },
      i.WireframeHelper.prototype = Object.create(i.Line.prototype),
      i.WireframeHelper.prototype.constructor = i.WireframeHelper,
      i.ImmediateRenderObject = function () {
        i.Object3D.call(this),
        this.render = function (e) {
        }
      },
      i.ImmediateRenderObject.prototype = Object.create(i.Object3D.prototype),
      i.ImmediateRenderObject.prototype.constructor = i.ImmediateRenderObject,
      i.MorphBlendMesh = function (e, t) {
        i.Mesh.call(this, e, t),
        this.animationsMap = {},
        this.animationsList = [];
        var r = this.geometry.morphTargets.length,
        n = '__default',
        o = 0,
        a = r - 1,
        s = r / 1;
        this.createAnimation(n, o, a, s),
        this.setAnimationWeight(n, 1)
      },
      i.MorphBlendMesh.prototype = Object.create(i.Mesh.prototype),
      i.MorphBlendMesh.prototype.constructor = i.MorphBlendMesh,
      i.MorphBlendMesh.prototype.createAnimation = function (e, t, r, i) {
        var n = {
          startFrame: t,
          endFrame: r,
          length: r - t + 1,
          fps: i,
          duration: (r - t) / i,
          lastFrame: 0,
          currentFrame: 0,
          active: !1,
          time: 0,
          direction: 1,
          weight: 1,
          directionBackwards: !1,
          mirroredLoop: !1
        };
        this.animationsMap[e] = n,
        this.animationsList.push(n)
      },
      i.MorphBlendMesh.prototype.autoCreateAnimations = function (e) {
        for (
          var t,
          r = /([a-z]+)_?(\d+)/,
          i = {},
          n = this.geometry,
          o = 0,
          a = n.morphTargets.length;
          a > o;
          o++
        ) {
          var s = n.morphTargets[o],
          h = s.name.match(r);
          if (h && h.length > 1) {
            var c = h[1];
            i[c] ||
            (i[c] = {
              start: 1 / 0,
              end: - (1 / 0)
            });
            var l = i[c];
            o < l.start &&
            (l.start = o),
            o > l.end &&
            (l.end = o),
            t ||
            (t = c)
          }
        }
        for (var c in i) {
          var l = i[c];
          this.createAnimation(c, l.start, l.end, e)
        }
        this.firstAnimation = t
      },
      i.MorphBlendMesh.prototype.setAnimationDirectionForward = function (e) {
        var t = this.animationsMap[e];
        t &&
        (t.direction = 1, t.directionBackwards = !1)
      },
      i.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (e) {
        var t = this.animationsMap[e];
        t &&
        (t.direction = - 1, t.directionBackwards = !0)
      },
      i.MorphBlendMesh.prototype.setAnimationFPS = function (e, t) {
        var r = this.animationsMap[e];
        r &&
        (r.fps = t, r.duration = (r.end - r.start) / r.fps)
      },
      i.MorphBlendMesh.prototype.setAnimationDuration = function (e, t) {
        var r = this.animationsMap[e];
        r &&
        (r.duration = t, r.fps = (r.end - r.start) / r.duration)
      },
      i.MorphBlendMesh.prototype.setAnimationWeight = function (e, t) {
        var r = this.animationsMap[e];
        r &&
        (r.weight = t)
      },
      i.MorphBlendMesh.prototype.setAnimationTime = function (e, t) {
        var r = this.animationsMap[e];
        r &&
        (r.time = t)
      },
      i.MorphBlendMesh.prototype.getAnimationTime = function (e) {
        var t = 0,
        r = this.animationsMap[e];
        return r &&
        (t = r.time),
        t
      },
      i.MorphBlendMesh.prototype.getAnimationDuration = function (e) {
        var t = - 1,
        r = this.animationsMap[e];
        return r &&
        (t = r.duration),
        t
      },
      i.MorphBlendMesh.prototype.playAnimation = function (e) {
        var t = this.animationsMap[e];
        t ? (t.time = 0, t.active = !0) : i.warn(
          'THREE.MorphBlendMesh: animation[' + e + '] undefined in .playAnimation()'
        )
      },
      i.MorphBlendMesh.prototype.stopAnimation = function (e) {
        var t = this.animationsMap[e];
        t &&
        (t.active = !1)
      },
      i.MorphBlendMesh.prototype.update = function (e) {
        for (var t = 0, r = this.animationsList.length; r > t; t++) {
          var n = this.animationsList[t];
          if (n.active) {
            var o = n.duration / n.length;
            n.time += n.direction * e,
            n.mirroredLoop ? (n.time > n.duration || n.time < 0) &&
            (
              n.direction *= - 1,
              n.time > n.duration &&
              (n.time = n.duration, n.directionBackwards = !0),
              n.time < 0 &&
              (n.time = 0, n.directionBackwards = !1)
            ) : (n.time = n.time % n.duration, n.time < 0 && (n.time += n.duration));
            var a = n.startFrame + i.Math.clamp(Math.floor(n.time / o), 0, n.length - 1),
            s = n.weight;
            a !== n.currentFrame &&
            (
              this.morphTargetInfluences[n.lastFrame] = 0,
              this.morphTargetInfluences[n.currentFrame] = 1 * s,
              this.morphTargetInfluences[a] = 0,
              n.lastFrame = n.currentFrame,
              n.currentFrame = a
            );
            var h = n.time % o / o;
            n.directionBackwards &&
            (h = 1 - h),
            this.morphTargetInfluences[n.currentFrame] = h * s,
            this.morphTargetInfluences[n.lastFrame] = (1 - h) * s
          }
        }
      }
    },
    76: function (e, t, r) {
      'use strict';
      function i(e) {
        function t(e) {
          return 'undefined' != typeof g[e] &&
          null !== g[e] ||
          (g[e] = new n.Scene),
          g[e]
        }
        function r() {
          v.isSceneUp = !v.isSceneUp,
          v.dispatchEvent({
            type: 'switchCityScene'
          }),
          x.loadingScreen &&
          (
            v.dispatchEvent({
              type: 'sceneSwitchOverlayShow'
            }),
            setTimeout(
              function () {
                v.dispatchEvent({
                  type: 'sceneSwitchOverlayHide'
                })
              },
              500
            ),
            v.reset(!1)
          )
        }
        function i(e, r) {
          t(e).add(r)
        }
        function p(e, r) {
          t(e).remove(r)
        }
        function m() {
          if (A && A.begin(), e.clientWidth <= 1 && e.clientHeight <= 1) return A &&
          A.end(),
          void (N && window.requestAnimationFrame(m.bind(this)));
          if (e.clientWidth !== G || e.clientHeight !== H) G = e.clientWidth,
          H = e.clientHeight,
          W = 0;
           else if (null !== W) {
            if (W += k.getDelta(), 1 > W) return A &&
            A.end(),
            void (N && window.requestAnimationFrame(m.bind(this)));
            w = G,
            b = H,
            W = null,
            F()
          }
          I &&
          console.time('firstFrame'),
          this.dispatchEvent({
            type: 'willRender'
          }),
          o.update(),
          E.array.forEach(
            function (e) {
              var t = e.item;
              t.blockOpacity > 0 &&
              t.render(h.getDelta())
            }
          ),
          this.dispatchEvent({
            type: 'didRender'
          }),
          I &&
          (console.timeEnd('firstFrame'), I = !1),
          A &&
          A.end(),
          N &&
          window.requestAnimationFrame(m.bind(this))
        }
        var v = this;
        v.isSceneUp = !0,
        d.register(
          function (e) {
            var t = e.action;
            switch (t.type) {
              case f.MAP_PAUSED:
                t.status === !0 ? v.stop() : v.start()
            }
          }
        );
        var g = {},
        y = (new n.Scene, /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
        x = y ? s.mobile : s.desktop,
        _ = 1;
        s.enableRetina &&
        (_ = window.devicePixelRatio || 1);
        var w = e.clientWidth ||
        1,
        b = e.clientHeight ||
        1,
        M = w * _,
        S = b * _,
        T = new n.PerspectiveCamera(s.camera.fov, w / b, s.camera.near, s.camera.far),
        C = new n.WebGLRenderer({
          devicePixelRatio: _,
          alpha: !0
        });
        C.setPixelRatio(_),
        C.setSize(w, b),
        T.aspect = w / b,
        T.updateProjectionMatrix();
        var A,
        E = new c,
        P = [],
        D = function (e, t) {
          var r = new l(C, e, T, M, S);
          return E.insert(t, r),
          r
        },
        L = function () {
          var e = null,
          r = null,
          i = null,
          n = null;
          if (x.loadingScreen) v.isSceneUp ? (i = E.index.scene_top.item, n = E.index.overlayMapIconsTop.item) : (i = E.index.scene_bot.item, n = E.index.overlayMapIconsBot.item);
           else {
            var o = t('scene_top'),
            a = t('scene_bot'),
            s = E.index.scene_top.item,
            h = E.index.scene_bot.item;
            i = new l(C, e, T, M, S),
            u.BlendTweenBlock(i, v, h, s, o, a),
            E.insert('cityBlock', i);
            var c = E.index.overlayMapIconsTop.item,
            d = E.index.overlayMapIconsBot.item,
            f = t('overlayMapIconsTop'),
            p = t('overlayMapIconsBot');
            n = new l(C, e, T, M, S),
            u.BlendTweenBlock(n, v, d, c, f, p),
            E.insert('iconBlock', n)
          }
          if (
            r = new l(C, e, T, M, S),
            u.BlendBlock(r, i, n),
            E.insert('blendOverlayBlock', r),
            v.renderSettings.tiltShift
          ) {
            var m = new l(C, e, T, M, S);
            u.TiltBlock(m, r.composerHeap.composer, v),
            E.insert('tiltBlock', m)
          }
          if (v.renderSettings.vignette) {
            var g = new l(C, e, T, M, S);
            u.VignetteBlock(g, r.composerHeap.composer, !1),
            E.insert('vignetteBlock', g)
          }
          var y = new l(C, e, T, M, S);
          u.OutputBlock(y, r.composerHeap.composer),
          E.insert('outputBlock', y),
          v.dispatchEvent({
            type: 'finalizeRendering'
          })
        },
        R = function () {
          N ||
          (z = !0, N = !0, window.requestAnimationFrame(m.bind(v)))
        },
        B = function () {
          N &&
          (N = !1)
        },
        F = function (e) {
          e = e ? e : !1,
          v.width = w,
          v.height = b,
          M = w * _,
          S = b * _,
          C.setPixelRatio(_),
          C.setSize(w, b);
          var t = M / S,
          r = 16 / 9,
          i = r / t * s.camera.fov;
          if (
            T.fov = i > s.camera.fov ? s.camera.fov : i,
            T.aspect = M / S,
            T.updateProjectionMatrix(),
            E.array.forEach(function (e) {
              var t = e.item;
              t.reset()
            }),
            E = new c,
            P.length > 0
          ) {
            for (var n = 0; n < P.length; n++) P[n]();
            L(),
            e &&
            v.dispatchEvent({
              type: 'readyToRender'
            })
          }
        },
        U = function (e, t) {
          P.push(e),
          t === !0 &&
          F(!0)
        },
        O = function (e, r) {
          var i = t(r),
          n = [];
          if (i) for (var o = 0; o < i.children.length; o++) for (var a = 0; a < e.length; a++) if (i.children[o] === e[a]) {
            n.push(e[a]);
            break
          }
          return n
        },
        V = document.getElementById('devtools-fpscounter');
        V &&
        (
          A = new a,
          A.setMode(0),
          A.domElement.style.position = 'absolute',
          A.domElement.style.right = '0',
          A.domElement.style.bottom = '0',
          A.domElement.style.zIndex = '1',
          V.appendChild(A.domElement)
        ),
        e.appendChild(C.domElement),
        window.addEventListener('focus', function () {
          z &&
          R()
        }),
        window.addEventListener('blur', function () {
          z &&
          B()
        });
        var k = new n.Clock,
        z = !1,
        N = !1,
        I = !0,
        G = w,
        H = b,
        W = null;
        F(!0),
        this.container = e,
        this.renderer = C,
        this.camera = T,
        this.reset = F,
        this.start = R,
        this.stop = B,
        this.switchScene = r,
        this.addToScene = i,
        this.getScene = t,
        this.removeFromScene = p,
        this.addComposerBlock = D,
        this.finalizeComposerBlocks = L,
        this.setupRenderChunk = U,
        this.intersectObjectsWithScene = O,
        this.iOS = y,
        this.renderSettings = x,
        this.width = w,
        this.height = b
      }
      var n = r(13),
      o = r(128),
      a = r(1693),
      s = r(334),
      h = r(335),
      c = r(669),
      l = r(665),
      u = r(137),
      d = r(10),
      f = r(6).ActionTypes;
      n.ImageUtils.crossOrigin = '',
      n.EventDispatcher.prototype.apply(i.prototype),
      e.exports = new i(document.getElementById('map'))
    },
    128: function (e, t, r) {
      var i,
      n;
      !function () {
        if (
          'performance' in window == !1 &&
          (window.performance = {}),
          Date.now = Date.now ||
          function () {
            return (new Date).getTime()
          },
          'now' in window.performance == !1
        ) {
          var e = window.performance.timing &&
          window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
          window.performance.now = function () {
            return Date.now() - e
          }
        }
      }();
      var o = o ||
      function () {
        var e = [];
        return {
          getAll: function () {
            return e
          },
          removeAll: function () {
            e = []
          },
          add: function (t) {
            e.push(t)
          },
          remove: function (t) {
            var r = e.indexOf(t);
            - 1 !== r &&
            e.splice(r, 1)
          },
          update: function (t) {
            if (0 === e.length) return !1;
            var r = 0;
            for (t = void 0 !== t ? t : window.performance.now(); r < e.length; ) e[r].update(t) ? r++ : e.splice(r, 1);
            return !0
          }
        }
      }();
      o.Tween = function (e) {
        var t = e,
        r = {},
        i = {},
        n = {},
        a = 1000,
        s = 0,
        h = !1,
        c = !1,
        l = !1,
        u = 0,
        d = null,
        f = o.Easing.Linear.None,
        p = o.Interpolation.Linear,
        m = [],
        v = null,
        g = !1,
        y = null,
        x = null,
        _ = null;
        for (var w in e) r[w] = parseFloat(e[w], 10);
        this.to = function (e, t) {
          return void 0 !== t &&
          (a = t),
          i = e,
          this
        },
        this.start = function (e) {
          o.add(this),
          c = !0,
          g = !1,
          d = void 0 !== e ? e : window.performance.now(),
          d += u;
          for (var a in i) {
            if (i[a] instanceof Array) {
              if (0 === i[a].length) continue;
              i[a] = [
                t[a]
              ].concat(i[a])
            }
            void 0 !== r[a] &&
            (r[a] = t[a], r[a] instanceof Array == !1 && (r[a] *= 1), n[a] = r[a] || 0)
          }
          return this
        },
        this.stop = function () {
          return c ? (
            o.remove(this),
            c = !1,
            null !== _ &&
            _.call(t),
            this.stopChainedTweens(),
            this
          ) : this
        },
        this.stopChainedTweens = function () {
          for (var e = 0, t = m.length; t > e; e++) m[e].stop();
        },
        this.delay = function (e) {
          return u = e,
          this
        },
        this.repeat = function (e) {
          return s = e,
          this
        },
        this.yoyo = function (e) {
          return h = e,
          this
        },
        this.easing = function (e) {
          return f = e,
          this
        },
        this.interpolation = function (e) {
          return p = e,
          this
        },
        this.chain = function () {
          return m = arguments,
          this
        },
        this.onStart = function (e) {
          return v = e,
          this
        },
        this.onUpdate = function (e) {
          return y = e,
          this
        },
        this.onComplete = function (e) {
          return x = e,
          this
        },
        this.onStop = function (e) {
          return _ = e,
          this
        },
        this.update = function (e) {
          var o,
          c,
          _;
          if (d > e) return !0;
          g === !1 &&
          (null !== v && v.call(t), g = !0),
          c = (e - d) / a,
          c = c > 1 ? 1 : c,
          _ = f(c);
          for (o in i) if (void 0 !== r[o]) {
            var w = r[o] ||
            0,
            b = i[o];
            b instanceof Array ? t[o] = p(b, _) : (
              'string' == typeof b &&
              (
                b = b.startsWith('+') ||
                b.startsWith('-') ? w + parseFloat(b, 10) : parseFloat(b, 10)
              ),
              'number' == typeof b &&
              (t[o] = w + (b - w) * _)
            )
          }
          if (null !== y && y.call(t, _), 1 === c) {
            if (s > 0) {
              isFinite(s) &&
              s--;
              for (o in n) {
                if ('string' == typeof i[o] && (n[o] = n[o] + parseFloat(i[o], 10)), h) {
                  var M = n[o];
                  n[o] = i[o],
                  i[o] = M
                }
                r[o] = n[o]
              }
              return h &&
              (l = !l),
              d = e + u,
              !0
            }
            null !== x &&
            x.call(t);
            for (var S = 0, T = m.length; T > S; S++) m[S].start(d + a);
            return !1
          }
          return !0
        }
      },
      o.Easing = {
        Linear: {
          None: function (e) {
            return e
          }
        },
        Quadratic: {
          In: function (e) {
            return e * e
          },
          Out: function (e) {
            return e * (2 - e)
          },
          InOut: function (e) {
            return (e *= 2) < 1 ? 0.5 * e * e : - 0.5 * (--e * (e - 2) - 1)
          }
        },
        Cubic: {
          In: function (e) {
            return e * e * e
          },
          Out: function (e) {
            return --e * e * e + 1
          },
          InOut: function (e) {
            return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2)
          }
        },
        Quartic: {
          In: function (e) {
            return e * e * e * e
          },
          Out: function (e) {
            return 1 - --e * e * e * e
          },
          InOut: function (e) {
            return (e *= 2) < 1 ? 0.5 * e * e * e * e : - 0.5 * ((e -= 2) * e * e * e - 2)
          }
        },
        Quintic: {
          In: function (e) {
            return e * e * e * e * e
          },
          Out: function (e) {
            return --e * e * e * e * e + 1
          },
          InOut: function (e) {
            return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2)
          }
        },
        Sinusoidal: {
          In: function (e) {
            return 1 - Math.cos(e * Math.PI / 2)
          },
          Out: function (e) {
            return Math.sin(e * Math.PI / 2)
          },
          InOut: function (e) {
            return 0.5 * (1 - Math.cos(Math.PI * e))
          }
        },
        Exponential: {
          In: function (e) {
            return 0 === e ? 0 : Math.pow(1024, e - 1)
          },
          Out: function (e) {
            return 1 === e ? 1 : 1 - Math.pow(2, - 10 * e)
          },
          InOut: function (e) {
            return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * ( - Math.pow(2, - 10 * (e - 1)) + 2)
          }
        },
        Circular: {
          In: function (e) {
            return 1 - Math.sqrt(1 - e * e)
          },
          Out: function (e) {
            return Math.sqrt(1 - --e * e)
          },
          InOut: function (e) {
            return (e *= 2) < 1 ? - 0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
          }
        },
        Elastic: {
          In: function (e) {
            var t,
            r = 0.1,
            i = 0.4;
            return 0 === e ? 0 : 1 === e ? 1 : (
              !r ||
              1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI),
              - (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i))
            )
          },
          Out: function (e) {
            var t,
            r = 0.1,
            i = 0.4;
            return 0 === e ? 0 : 1 === e ? 1 : (
              !r ||
              1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI),
              r * Math.pow(2, - 10 * e) * Math.sin((e - t) * (2 * Math.PI) / i) + 1
            )
          },
          InOut: function (e) {
            var t,
            r = 0.1,
            i = 0.4;
            return 0 === e ? 0 : 1 === e ? 1 : (
              !r ||
              1 > r ? (r = 1, t = i / 4) : t = i * Math.asin(1 / r) / (2 * Math.PI),
              (e *= 2) < 1 ? - 0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i)) : r * Math.pow(2, - 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / i) * 0.5 + 1
            )
          }
        },
        Back: {
          In: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t)
          },
          Out: function (e) {
            var t = 1.70158;
            return --e * e * ((t + 1) * e + t) + 1
          },
          InOut: function (e) {
            var t = 2.5949095;
            return (e *= 2) < 1 ? 0.5 * (e * e * ((t + 1) * e - t)) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
          }
        },
        Bounce: {
          In: function (e) {
            return 1 - o.Easing.Bounce.Out(1 - e)
          },
          Out: function (e) {
            return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
          },
          InOut: function (e) {
            return 0.5 > e ? 0.5 * o.Easing.Bounce.In(2 * e) : 0.5 * o.Easing.Bounce.Out(2 * e - 1) + 0.5
          }
        }
      },
      o.Interpolation = {
        Linear: function (e, t) {
          var r = e.length - 1,
          i = r * t,
          n = Math.floor(i),
          a = o.Interpolation.Utils.Linear;
          return 0 > t ? a(e[0], e[1], i) : t > 1 ? a(e[r], e[r - 1], r - i) : a(e[n], e[n + 1 > r ? r : n + 1], i - n)
        },
        Bezier: function (e, t) {
          for (
            var r = 0,
            i = e.length - 1,
            n = Math.pow,
            a = o.Interpolation.Utils.Bernstein,
            s = 0;
            i >= s;
            s++
          ) r += n(1 - t, i - s) * n(t, s) * e[s] * a(i, s);
          return r
        },
        CatmullRom: function (e, t) {
          var r = e.length - 1,
          i = r * t,
          n = Math.floor(i),
          a = o.Interpolation.Utils.CatmullRom;
          return e[0] === e[r] ? (
            0 > t &&
            (n = Math.floor(i = r * (1 + t))),
            a(e[(n - 1 + r) % r], e[n], e[(n + 1) % r], e[(n + 2) % r], i - n)
          ) : 0 > t ? e[0] - (a(e[0], e[0], e[1], e[1], - i) - e[0]) : t > 1 ? e[r] - (a(e[r], e[r], e[r - 1], e[r - 1], i - r) - e[r]) : a(e[n ? n - 1 : 0], e[n], e[n + 1 > r ? r : n + 1], e[n + 2 > r ? r : n + 2], i - n)
        },
        Utils: {
          Linear: function (e, t, r) {
            return (t - e) * r + e
          },
          Bernstein: function (e, t) {
            var r = o.Interpolation.Utils.Factorial;
            return r(e) / r(t) / r(e - t)
          },
          Factorial: function () {
            var e = [
              1
            ];
            return function (t) {
              var r = 1;
              if (e[t]) return e[t];
              for (var i = t; i > 1; i--) r *= i;
              return e[t] = r,
              r
            }
          }(),
          CatmullRom: function (e, t, r, i, n) {
            var o = 0.5 * (r - e),
            a = 0.5 * (i - t),
            s = n * n,
            h = n * s;
            return (2 * t - 2 * r + o + a) * h + ( - 3 * t + 3 * r - 2 * o - a) * s + o * n + t
          }
        }
      },
      function (r) {
        i = [],
        n = function () {
          return o
        }.apply(t, i),
        !(void 0 !== n && (e.exports = n))
      }(this)
    },
    137: function (e, t, r) {
      'use strict';
      function i() {
        var e = 500,
        t = 100,
        r = 0,
        i = function (e) {
          var t = (
            a.skyColor,
            e.width,
            e.height,
            new n.RenderPass(e.scene, e.camera, null, null, 1)
          ),
          r = new n.EffectComposer(e.renderer, e.target),
          i = new n.ShaderPass(n.CopyShader);
          r.addPass(t),
          r.addPass(i),
          e.composers.push(r),
          e.composerHeap.composer = r
        },
        s = function (e, t, r) {
          var i = new n.EffectComposer(e.renderer, e.target),
          o = new n.ShaderPass(n.CopyShader),
          a = new n.ShaderPass(n.OverlayShader);
          a.uniforms.tDiffuse1.value = t.target,
          a.uniforms.tDiffuse2.value = r.target,
          a.uniforms.opacity.value = r.blockOpacity,
          i.addPass(a),
          i.addPass(o),
          e.composers.push(i),
          e.composerHeap.composer = i
        },
        h = function (i, a, s, h, c, l) {
          var u = new n.EffectComposer(i.renderer, i.target),
          d = new n.ShaderPass(n.CopyShader),
          f = new n.ShaderPass(n.BlendShader);
          f.uniforms.tDiffuse1.value = h.target,
          f.uniforms.tDiffuse2.value = s.target,
          f.uniforms.mixRatio.value = 0,
          u.addPass(f),
          u.addPass(d);
          var p = null,
          m = !0,
          v = function () {
            p &&
            (p.stop(), p = null);
            var i = e;
            m ? (
              m = !1,
              p = new o.Tween({
                alpha: 0,
                y_up: r,
                y_down: - t
              }).to({
                alpha: 1,
                y_up: t,
                y_down: r
              }, i).easing(o.Easing.Quadratic.InOut).onUpdate(
                function () {
                  f.uniforms.mixRatio.value = this.alpha,
                  c.position.y = this.y_up,
                  l.position.y = this.y_down
                }
              ).start()
            ) : (
              m = !0,
              p = new o.Tween({
                alpha: 1,
                y_up: t,
                y_down: r
              }).to({
                alpha: 0,
                y_up: r,
                y_down: - t
              }, i).easing(o.Easing.Quadratic.InOut).onUpdate(
                function () {
                  f.uniforms.mixRatio.value = this.alpha,
                  c.position.y = this.y_up,
                  l.position.y = this.y_down
                }
              ).start()
            )
          };
          a.addEventListener('switchCityScene', v);
          var g = function () {
            a.removeEventListener('switchCityScene', v)
          };
          i.reset = g,
          i.composers.push(u),
          i.composerHeap.composer = u
        },
        c = function (e) {
          var t = a.skyColor,
          r = a.dof.maxBlur,
          i = a.dof.focus,
          o = e.width,
          s = e.height;
          e.useDepthTarget(o, s);
          var h = new n.EffectComposer(e.renderer, e.getTarget()),
          c = new n.RenderPass(e.scene, e.camera, null, t, 1);
          h.addPass(c);
          var l = new n.ShaderPass(n.DofHorizontalShader);
          l.uniforms.tDepth.value = e.depthTarget,
          l.uniforms.focus.value = i,
          l.uniforms.maxblur.value = r,
          l.uniforms.h.value = 1 / o,
          h.addPass(l);
          var u = new n.ShaderPass(n.DofVerticalShader);
          u.uniforms.tDepth.value = e.depthTarget,
          u.uniforms.focus.value = i,
          u.uniforms.maxblur.value = r,
          u.uniforms.v.value = 1 / s,
          h.addPass(u);
          var d = new n.ShaderPass(n.CopyShader);
          h.addPass(d),
          e.composers.push(h),
          e.composerHeap.composer = h
        },
        l = function (e, t, r) {
          var i = new n.ShaderPass(n.ColoredVignetteShader),
          o = 161 / 255,
          a = 185 / 255,
          s = 199 / 255;
          i.uniforms.vignetteRGB = {
            type: 'v3',
            value: new n.Vector3(o, a, s)
          },
          t.addPass(i);
          var h = new n.ShaderPass(n.CopyShader);
          r &&
          (h.renderToScreen = !0),
          t.addPass(h)
        },
        u = function (e, t) {
          var r = new n.ShaderPass(n.CopyShader);
          r.renderToScreen = !0,
          t.addPass(r)
        },
        d = function (e, t, r) {
          var i = a.tiltShift.tiltShiftMaxStrength,
          o = a.tiltShift.tiltShiftMinStrength,
          s = a.tiltShift.tiltShiftMaxDistance,
          h = a.tiltShift.tiltShiftMinDistance,
          c = a.tiltShift.tiltShiftTop,
          l = a.tiltShift.tiltShiftBottom,
          u = a.tiltShift.tiltShiftLeft,
          d = a.tiltShift.tiltShiftRight,
          f = function () {
            var t = i;
            if (e.camera.position.y > h) {
              var r = (e.camera.position.y - h) / s;
              t = (i - o) * r + o
            } else t = o;
            return 1 / (e.height * t)
          },
          p = 16 / 9,
          m = e.width / e.height,
          v = Math.min(1, p / m),
          g = 1 - c * v,
          y = l * v,
          x = 1 - u * v,
          _ = d * v,
          w = new n.ShaderPass(n.HorizontalTiltShiftShader);
          w.uniforms.h.value = f(),
          w.uniforms.top.value = g,
          w.uniforms.bottom.value = y,
          w.uniforms.left.value = x,
          w.uniforms.right.value = _,
          t.addPass(w);
          var b = function (e) {
            w.uniforms.h.value = f()
          };
          r.addEventListener('willRender', b);
          var M = new n.ShaderPass(n.VerticalTiltShiftShader);
          M.uniforms.v.value = f(),
          M.uniforms.top.value = g,
          M.uniforms.bottom.value = y,
          M.uniforms.left.value = x,
          M.uniforms.right.value = _,
          t.addPass(M);
          var S = new n.ShaderPass(n.CopyShader);
          t.addPass(S);
          var T = function (e) {
            f();
            M.uniforms.v.value = f()
          };
          r.addEventListener('willRender', T);
          var C = function () {
            r.removeEventListener('willRender', b),
            r.removeEventListener('willRender', T)
          };
          e.reset = C
        };
        this.BlendBlock = s,
        this.BlendTweenBlock = h,
        this.DofBlock = c,
        this.RenderBlock = i,
        this.TiltBlock = d,
        this.VignetteBlock = l,
        this.OutputBlock = u
      }
      var n = r(13),
      o = r(128),
      a = r(334);
      r(1454),
      r(1457),
      r(1458),
      r(1455),
      r(1453),
      r(1460),
      r(1461),
      r(1462),
      r(1466),
      r(1465),
      r(1467),
      r(1463),
      r(1464),
      e.exports = new i
    },
    331: function (e, t, r) {
      'use strict';
      var i = r(13),
      n = r(128),
      o = r(76),
      a = r(333);
      r(1456);
      var s = function (e) {
        var t = null,
        r = null,
        o = 500;
        e.camera.position.x = a.initialCameraPosition.x,
        e.camera.position.y = a.initialCameraPosition.y,
        e.camera.position.z = a.initialCameraPosition.z;
        var s = new i.OrbitControls(e.camera, e.container);
        s.minPolarAngle = a.minPolarAngle,
        s.maxPolarAngle = a.maxPolarAngle,
        s.minDistance = a.minDistance,
        s.maxDistance = a.maxDistance,
        s.noPanY = a.noPanY,
        s.buttons.ROTATE = a.buttonsROTATE,
        s.buttons.DOLLY = a.buttonsDOLLY,
        s.buttons.PAN = a.buttonsPAN,
        s.rotationalInertia = a.rotationalInertia,
        s.rotationalInertiaTouch = a.rotationalInertiaTouch,
        s.panInertia = a.panInertia,
        s.rotateSpeed = a.rotateSpeed,
        s.zoomSpeed = a.zoomSpeed,
        s.dollyInertia = a.dollyInertia,
        s.autoRotate = a.autoRotate,
        s.target = a.target,
        s.cameraBounds = a.cameraBounds,
        e.addEventListener('willRender', function () {
          s.update()
        }),
        this.orbitControls = s,
        this.panCamera = function (e, r) {
          r = r ? r : o;
          var a = s.object.position.clone(),
          h = new i.Vector3(e.x - a.x, e.y - a.y, e.z - a.z);
          t &&
          (t.stop(), t = null),
          t = new n.Tween({
            x: 0,
            y: 0,
            z: 0
          }).to({
            x: h.x,
            y: h.y,
            z: h.z
          }, r).easing(n.Easing.Quadratic.InOut).onUpdate(
            function () {
              s.object.position.copy(a).add(new i.Vector3(this.x, this.y, this.z))
            }
          ).start()
        },
        this.panTarget = function (e, t) {
          t = t ? t : o;
          var a = s.target.clone(),
          h = new i.Vector3(e.x - a.x, e.y - a.y, e.z - a.z);
          r &&
          (r.stop(), r = null),
          r = new n.Tween({
            x: 0,
            y: 0,
            z: 0
          }).to({
            x: h.x,
            y: h.y,
            z: h.z
          }, t).easing(n.Easing.Quadratic.InOut).onUpdate(
            function () {
              s.target = a.clone().add(new i.Vector3(this.x, this.y, this.z))
            }
          ).start()
        },
        this.panCameraAndTarget = function (e, t, r) {
          r = r ? r : o,
          h.panCamera(e, r),
          h.panTarget(t, r)
        },
        this.panTo = function (e, t) {
          var r = e.clone().sub(s.target),
          i = s.object.position.clone().add(r);
          h.panCameraAndTarget(i, e, t)
        };
        var h = this;
        e.camera.panCamera = this.panCamera,
        e.camera.panTarget = this.panTarget,
        e.camera.panCameraAndTarget = this.panCameraAndTarget
      };
      i.EventDispatcher.prototype.apply(s.prototype),
      e.exports = new s(o)
    },
    332: function (e, t, r) {
      'use strict';
      var i = r(13),
      n = r(76),
      o = function (e) {
        function t() {
          var t = e.isSceneUp ? 'overlayMapIconsTop' : 'overlayMapIconsBot';
          h = e.intersectObjectsWithScene(s, t)
        }
        function r(e) {
          f.dispatchEvent({
            type: 'mouseenter',
            object: e
          })
        }
        function n(e) {
          f.dispatchEvent({
            type: 'mouseleave',
            object: e
          })
        }
        function o(e) {
          f.dispatchEvent({
            type: 'click',
            object: e
          })
        }
        var a = new i.Raycaster,
        s = [],
        h = [],
        c = null,
        l = !1,
        u = new i.Vector2(0, 0),
        d = new i.Vector2( - 1, - 1);
        e.container.addEventListener(
          'mousedown',
          function (t) {
            l = !0;
            var r = void 0 !== t.offsetX ? t.offsetX : t.clientX - e.container.offsetLeft,
            i = void 0 !== t.offsetY ? t.offsetY : t.clientY - e.container.offsetTop;
            u.x = d.x = r / e.container.clientWidth * 2 - 1,
            u.y = d.y = 2 * - (i / e.container.clientHeight) + 1
          }
        ),
        e.container.addEventListener(
          'mousemove',
          function (t) {
            var r = void 0 !== t.offsetX ? t.offsetX : t.clientX - e.container.offsetLeft,
            i = void 0 !== t.offsetY ? t.offsetY : t.clientY - e.container.offsetTop;
            d.x = r / e.container.clientWidth * 2 - 1,
            d.y = 2 * - (i / e.container.clientHeight) + 1
          }
        ),
        e.container.addEventListener(
          'mouseup',
          function (t) {
            l = !1,
            Math.abs(u.x - d.x) * (e.container.clientWidth / 2) < 5 &&
            Math.abs(u.y - d.y) * (e.container.clientHeight / 2) < 5 &&
            o(c),
            u.x = - 1,
            u.y = - 1
          }
        ),
        e.container.addEventListener(
          'touchstart',
          function (t) {
            return t.touches.length > 1 ? (d.x = - 1, void (d.y = - 1)) : (
              u.x = d.x = (t.touches[0].clientX - e.container.offsetLeft) / e.container.clientWidth * 2 - 1,
              void (
                u.y = d.y = 2 * - (
                  (t.touches[0].clientY - e.container.offsetTop) / e.container.clientHeight
                ) + 1
              )
            )
          }
        ),
        e.container.addEventListener(
          'touchmove',
          function (t) {
            return t.touches.length > 1 ? (d.x = - 1, void (d.y = - 1)) : (
              d.x = (t.touches[0].clientX - e.container.offsetLeft) / e.container.clientWidth * 2 - 1,
              void (
                d.y = 2 * - (
                  (t.touches[0].clientY - e.container.offsetTop) / e.container.clientHeight
                ) + 1
              )
            )
          }
        ),
        e.container.addEventListener(
          'touchend',
          function (t) {
            t.touches.length > 1 &&
            (d.x = - 1, d.y = - 1),
            - 1 != d.x &&
            - 1 != d.y &&
            (
              Math.abs(u.x - d.x) * (e.container.clientWidth / 2) < 10 &&
              Math.abs(u.y - d.y) * (e.container.clientHeight / 2) < 10 &&
              (t.preventDefault(), o(c)),
              d.x = - 1,
              d.y = - 1
            )
          }
        ),
        e.addEventListener(
          'willRender',
          function (t) {
            if (!l) {
              if ( - 1 == d.x || - 1 == d.y) return void (c && (n(c), c = null));
              var o = new i.Vector3(d.x, d.y, 1);
              o.unproject(e.camera),
              a.set(e.camera.position, o.sub(e.camera.position).normalize());
              var s = a.intersectObjects(h).filter(function (e) {
                return e.object.material.opacity > 0
              });
              s.length > 0 ? c != s[0].object &&
              (c && n(c), c = s[0].object, r(c)) : c &&
              (n(c), c = null)
            }
          }
        ),
        e.addEventListener('switchCityScene', function () {
          t()
        }),
        e.addEventListener('finalizeRendering', function () {
          t()
        });
        var f = this;
        this.add = function (e) {
          s.push(e),
          t()
        },
        this.remove = function (e) {
          s.splice(s.indexOf(e), 1),
          t()
        }
      };
      i.EventDispatcher.prototype.apply(o.prototype),
      e.exports = new o(n)
    },
    333: function (e, t, r) {
      'use strict';
      var i = r(13),
      n = new i.Vector3( - 35, 100, 377),
      o = {
        initialCameraPosition: new i.Vector3(299, 784, 1106),
        minPolarAngle: 0,
        maxPolarAngle: Math.PI / 2.5,
        minDistance: 70,
        maxDistance: 900,
        noPanY: !0,
        buttonsROTATE: 2,
        buttonsDOLLY: 1,
        buttonsPAN: 0,
        rotationalInertia: 0.85,
        rotationalInertiaTouch: 0.6,
        panInertia: 0.8,
        autoRotate: !0,
        dollyInertia: 0.0015,
        rotateSpeed: 0.8,
        zoomSpeed: 0.1,
        initialTargetPosition: n,
        target: n.clone(),
        cameraBounds: {
          active: !0,
          centre: new i.Vector2(440, - 172),
          max_distance: 1300
        }
      };
      e.exports = o
    },
    334: function (e, t) {
      'use strict';
      var r = {
        camera: {
          fov: 65,
          near: 20,
          far: 8000
        },
        tiltShift: {
          tiltShiftMaxStrength: 1.5,
          tiltShiftMinStrength: 0.15,
          tiltShiftMaxDistance: 400,
          tiltShiftMinDistance: 300,
          tiltShiftTop: 0.15,
          tiltShiftRight: 0.1,
          tiltShiftBottom: 0.1,
          tiltShiftLeft: 0.1
        },
        dof: {
          maxBlur: 3,
          focus: 1
        },
        skyColor: 16185593,
        clearColor: 0,
        clearColorOpacity: 0,
        desktop: {
          loadingScreen: !1,
          retina: !1,
          tiltShift: !0,
          dof: !0,
          vignette: !0
        },
        mobile: {
          loadingScreen: !0,
          retina: !0,
          tiltShift: !1,
          dof: !1,
          vignette: !1
        }
      };
      e.exports = r
    },
    335: function (e, t, r) {
      'use strict';
      var i = r(13),
      n = function () {
        return new i.Clock
      },
      o = function () {
        return n().getDelta()
      },
      a = function () {
        return 1 - o()
      };
      t.getClock = n,
      t.getDelta = o,
      t.getDeltaTime = a
    },
    345: function (e, t, r) {
      e.exports = {
        'default': r(736),
        __esModule: !0
      }
    },
    347: function (e, t, r) {
      'use strict';
      function i(e) {
        return e &&
        e.__esModule ? e : {
          'default': e
        }
      }
      function n(e) {
        return e &&
        'undefined' != typeof _Symbol &&
        e.constructor === _Symbol ? 'symbol' : typeof e
      }
      t.__esModule = !0;
      var o = r(732),
      a = i(o);
      t['default'] = function (e) {
        return e &&
        'undefined' != typeof a['default'] &&
        e.constructor === a['default'] ? 'symbol' : 'undefined' == typeof e ? 'undefined' : n(e)
      }
    },
    451: function (e, t, r) {
      e.exports = r.p + 'Landmarks_trainstation.67f16f.ctm'
    },
    452: function (e, t, r) {
      e.exports = r.p + 'Landmarks_trainstation_D.5e5626.png'
    },
    532: function (e, t, r) {
      function i(e) {
        return r(n(e))
      }
      function n(e) {
        return o[e] ||
        function () {
          throw new Error('Cannot find module \'' + e + '\'.')
        }()
      }
      var o = {
        'Anchor_01_District_focus.png': 152,
        'Anchor_01_District_outline.png': 153,
        'Anchor_02_Plastic_focus.png': 154,
        'Anchor_02_Plastic_outline.png': 155,
        'Anchor_03_AnansiEmporium_focus.png': 156,
        'Anchor_03_AnansiEmporium_outline.png': 157,
        'Anchor_04_CityAlert_focus.png': 158,
        'Anchor_04_CityAlert_outline.png': 159,
        'Anchor_05_AllCom_focus.png': 160,
        'Anchor_05_AllCom_outline.png': 161,
        'Anchor_GridLeaks_focus.png': 162,
        'Anchor_GridLeaks_outline.png': 163,
        'Anchor_GridNodes_focus.png': 164,
        'Anchor_GridNodes_outline.png': 165,
        'Anchor_ReflectionHubs_focus.png': 166,
        'Anchor_ReflectionHubs_outline.png': 167,
        'Downtown_01_District_focus.png': 168,
        'Downtown_01_District_outline.png': 169,
        'Downtown_02_RunnersLair_focus.png': 170,
        'Downtown_02_RunnersLair_outline.png': 171,
        'Downtown_03_TheRunners_focus.png': 172,
        'Downtown_03_TheRunners_outline.png': 173,
        'Downtown_04_Dashes_focus.png': 174,
        'Downtown_04_Dashes_outline.png': 175,
        'Downtown_05_ElysiumBuilding_focus.png': 176,
        'Downtown_05_ElysiumBuilding_outline.png': 177,
        'Downtown_BeatLE_focus.png': 178,
        'Downtown_BeatLE_outline.png': 179,
        'Downtown_BillboardHacking_focus.png': 180,
        'Downtown_BillboardHacking_outline.png': 181,
        'Downtown_TimeTrials_focus.png': 182,
        'Downtown_TimeTrials_outline.png': 183,
        'OmnistatTunnels_01_BlackNovember_focus.png': 184,
        'OmnistatTunnels_01_BlackNovember_outline.png': 185,
        'OmnistatTunnels_02_Rebecca_focus.png': 186,
        'OmnistatTunnels_02_Rebecca_outline.png': 187,
        'OmnistatTunnels_03_SentryTurretsSniper_focus.png': 188,
        'OmnistatTunnels_03_SentryTurretsSniper_outline.png': 189,
        'OmnistatTunnels_04_OmnistatAgent_focus.png': 190,
        'OmnistatTunnels_04_OmnistatAgent_outline.png': 191,
        'OmnistatTunnels_05_HistoryLesson_focus.png': 192,
        'OmnistatTunnels_05_HistoryLesson_outline.png': 193,
        'Rezoning_01_District_focus.png': 194,
        'Rezoning_01_District_outline.png': 195,
        'Rezoning_02_CallahanConstruction_focus.png': 196,
        'Rezoning_02_CallahanConstruction_outline.png': 197,
        'Rezoning_03_Enforcer_focus.png': 198,
        'Rezoning_03_Enforcer_outline.png': 199,
        'Rezoning_04_ShockProtector_focus.png': 200,
        'Rezoning_04_ShockProtector_outline.png': 201,
        'Rezoning_05_Protector_focus.png': 202,
        'Rezoning_05_Protector_outline.png': 203,
        'billboardHack.png': 204,
        'billboardHack_focus.png': 205,
        'billboardHack_outline.png': 206,
        'delivery.png': 207,
        'delivery_focus.png': 208,
        'delivery_outline.png': 209,
        'diversion.png': 210,
        'diversion_focus.png': 211,
        'diversion_outline.png': 212,
        'gridNode.png': 213,
        'gridNode_focus.png': 214,
        'gridNode_outline.png': 215,
        'missionMain.png': 216,
        'missionMain_focus.png': 217,
        'missionMain_outline.png': 218,
        'missionMain_unselected.png': 219,
        'missionSide.png': 220,
        'missionSide_focus.png': 221,
        'missionSide_outline.png': 222,
        'player.png': 223,
        'reachThis.png': 224,
        'reachThis_focus.png': 225,
        'reachThis_outline.png': 226,
        'runnerKit.png': 227,
        'runnerKit_focus.png': 228,
        'runnerKit_outline.png': 229,
        'runnersRoute.png': 230,
        'runnersRoute_focus.png': 231,
        'runnersRoute_focus1.png': 232,
        'runnersRoute_focus2.png': 233,
        'runnersRoute_focus3.png': 234,
        'runnersRoute_outline.png': 235,
        'runnersRoute_outline1.png': 236,
        'runnersRoute_outline2.png': 237,
        'runnersRoute_outline3.png': 238,
        'safeHouse.png': 239,
        'safeHouse_focus.png': 240,
        'safeHouse_outline.png': 241,
        'securityHub.png': 242,
        'securityHub_focus.png': 243,
        'securityHub_outline.png': 244,
        'thebeat.png': 245,
        'thebeat_outline.png': 246,
        'timeTrial.png': 247,
        'timeTrialCheckpoint.png': 248,
        'timeTrialFinish.png': 249,
        'timeTrial_focus.png': 250,
        'timeTrial_outline.png': 251,
        'underground-down.png': 252,
        'underground-down_focus.png': 253,
        'underground-down_outline.png': 254,
        'underground-up.png': 255,
        'underground-up_focus.png': 256,
        'underground-up_outline.png': 257,
        'Anchor_01_District_focus.png': 359,
        'Anchor_01_District_outline.png': 360,
        'Anchor_02_Plastic_focus.png': 361,
        'Anchor_02_Plastic_outline.png': 362,
        'Anchor_03_AnansiEmporium_focus.png': 363,
        'Anchor_03_AnansiEmporium_outline.png': 364,
        'Anchor_04_CityAlert_focus.png': 365,
        'Anchor_04_CityAlert_outline.png': 366,
        'Anchor_05_AllCom_focus.png': 367,
        'Anchor_05_AllCom_outline.png': 368,
        'Anchor_GridLeaks_focus.png': 369,
        'Anchor_GridLeaks_outline.png': 370,
        'Anchor_GridNodes_focus.png': 371,
        'Anchor_GridNodes_outline.png': 372,
        'Anchor_ReflectionHubs_focus.png': 373,
        'Anchor_ReflectionHubs_outline.png': 374,
        'Downtown_01_District_focus.png': 375,
        'Downtown_01_District_outline.png': 376,
        'Downtown_02_RunnersLair_focus.png': 377,
        'Downtown_02_RunnersLair_outline.png': 378,
        'Downtown_03_TheRunners_focus.png': 379,
        'Downtown_03_TheRunners_outline.png': 380,
        'Downtown_04_Dashes_focus.png': 381,
        'Downtown_04_Dashes_outline.png': 382,
        'Downtown_05_ElysiumBuilding_focus.png': 383,
        'Downtown_05_ElysiumBuilding_outline.png': 384,
        'Downtown_BeatLE_focus.png': 385,
        'Downtown_BeatLE_outline.png': 386,
        'Downtown_BillboardHacking_focus.png': 387,
        'Downtown_BillboardHacking_outline.png': 388,
        'Downtown_TimeTrials_focus.png': 389,
        'Downtown_TimeTrials_outline.png': 390,
        'OmnistatTunnels_01_BlackNovember_focus.png': 391,
        'OmnistatTunnels_01_BlackNovember_outline.png': 392,
        'OmnistatTunnels_02_Rebecca_focus.png': 393,
        'OmnistatTunnels_02_Rebecca_outline.png': 394,
        'OmnistatTunnels_03_SentryTurretsSniper_focus.png': 395,
        'OmnistatTunnels_03_SentryTurretsSniper_outline.png': 396,
        'OmnistatTunnels_04_OmnistatAgent_focus.png': 397,
        'OmnistatTunnels_04_OmnistatAgent_outline.png': 398,
        'OmnistatTunnels_05_HistoryLesson_focus.png': 399,
        'OmnistatTunnels_05_HistoryLesson_outline.png': 400,
        'Rezoning_01_District_focus.png': 401,
        'Rezoning_01_District_outline.png': 402,
        'Rezoning_02_CallahanConstruction_focus.png': 403,
        'Rezoning_02_CallahanConstruction_outline.png': 404,
        'Rezoning_03_Enforcer_focus.png': 405,
        'Rezoning_03_Enforcer_outline.png': 406,
        'Rezoning_04_ShockProtector_focus.png': 407,
        'Rezoning_04_ShockProtector_outline.png': 408,
        'Rezoning_05_Protector_focus.png': 409,
        'Rezoning_05_Protector_outline.png': 410,
        'billboardHack.png': 411,
        'billboardHack_focus.png': 412,
        'billboardHack_outline.png': 258,
        'delivery.png': 413,
        'delivery_focus.png': 414,
        'delivery_outline.png': 259,
        'diversion.png': 415,
        'diversion_focus.png': 416,
        'diversion_outline.png': 260,
        'gridNode.png': 417,
        'gridNode_focus.png': 418,
        'gridNode_outline.png': 261,
        'missionMain.png': 419,
        'missionMain_focus.png': 420,
        'missionMain_outline.png': 262,
        'missionMain_unselected.png': 421,
        'missionSide.png': 422,
        'missionSide_focus.png': 423,
        'missionSide_outline.png': 263,
        'player.png': 99,
        'reachThis.png': 424,
        'reachThis_focus.png': 425,
        'reachThis_outline.png': 264,
        'runnerKit.png': 426,
        'runnerKit_focus.png': 427,
        'runnerKit_outline.png': 265,
        'runnersRoute.png': 428,
        'runnersRoute_focus.png': 429,
        'runnersRoute_focus1.png': 430,
        'runnersRoute_focus2.png': 431,
        'runnersRoute_focus3.png': 432,
        'runnersRoute_outline.png': 266,
        'runnersRoute_outline1.png': 433,
        'runnersRoute_outline2.png': 434,
        'runnersRoute_outline3.png': 435,
        'safeHouse.png': 436,
        'safeHouse_focus.png': 437,
        'safeHouse_outline.png': 267,
        'securityHub.png': 438,
        'securityHub_focus.png': 439,
        'securityHub_outline.png': 268,
        'thebeat.png': 440,
        'thebeat_outline.png': 441,
        'timeTrial.png': 442,
        'timeTrialCheckpoint.png': 443,
        'timeTrialFinish.png': 444,
        'timeTrial_focus.png': 445,
        'timeTrial_outline.png': 269,
        './underground-down.png': 446,
        './underground-down_focus.png': 447,
        './underground-down_outline.png': 270,
        './underground-up.png': 448,
        './underground-up_focus.png': 449,
        './underground-up_outline.png': 450
      };
      i.keys = function () {
        return Object.keys(o)
      },
      i.resolve = n,
      e.exports = i,
      i.id = 532
    },
    663: function (e, t, r) {
      'use strict';
      var i = r(13),
      n = function () {
        var e = this;
        this.rayCaster = new i.Raycaster,
        this.meshMetas = {},
        this.meshes = [],
        this.addMesh = function (e, t) {
          this.meshMetas[e] = t,
          this.meshes.push(e)
        },
        this.findMetaByMesh = function (e) {
          return this.meshMetas[e]
        },
        this.mapRayShooterMutator_fromTop = function (t) {
          var r = e.rayCaster.precision;
          e.rayCaster.precision = 25;
          var n = new i.Vector3;
          n.copy(t),
          n.y += 5000;
          var o = new i.Vector3(0, - 1, 0);
          e.rayCaster.set(n, o);
          var a = e.rayCaster.intersectObjects(e.meshes);
          return e.rayCaster.precision = r,
          a
        };
        var t = this.mapRayShooterMutator_fromTop;
        this.getMetaFromTransform = function (r, i) {
          var n = i ||
          t,
          o = n(r);
          if (0 === o.length) return null;
          var a = e.findMetaByMesh(o[0].object);
          return a
        }
      };
      e.exports = new n
    },
    664: function (e, t, r) {
      'use strict';
      var i = r(13),
      n = (r(128), r(26)),
      o = r(76),
      a = r(663),
      s = r(667),
      h = r(137);
      r(1459);
      var c = n.devCity ||
      window.TheBeatDevConfig &&
      window.TheBeatDevConfig.devCity,
      l = function (e) {
        function t(e, t) {
          o[e] ||
          (o[e] = []),
          o[e].push(t)
        }
        function r() {
          if (l += 1, l == n.length) {
            var t = function (t, r) {
              var i = e.getScene(t),
              n = e.addComposerBlock(i, t);
              r(n),
              n.blockOpacity = 1
            },
            r = function () {
              var r = e.renderSettings.dof ? h.DofBlock : h.RenderBlock;
              t(s.upperSceneName, r),
              t(s.lowerSceneName, r)
            },
            i = !0;
            e.setupRenderChunk(r, i),
            console.timeEnd('loadCityData')
          }
        }
        var n = c ? s.devCityParts : s.cityParts,
        o = {},
        l = 0;
        this.loadCityData = function () {
          console.time('loadCityData');
          var o = new i.CTMLoader,
          s = new i.TextureLoader;
          s.setCrossOrigin(''),
          n.forEach(
            function (n) {
              function h(e) {
                u = e,
                d &&
                l()
              }
              function c(e) {
                d = e,
                u &&
                l()
              }
              function l() {
                var o = new i.MeshBasicMaterial({
                  map: d
                }),
                s = new i.Mesh(u, o);
                s.scale.set(0.01, 0.01, 0.01),
                e.addToScene(n.scene, s),
                r(),
                n.meta &&
                n.meta.name &&
                (a.addMesh(s, n.meta), t(n.meta.name, s))
              }
              var u,
              d;
              o.load(n.meshPath, h, {
                useWorker: !0
              }),
              s.load(n.texturePath, c)
            }
          )
        },
        this.setCityPartFoggy = function (e, t) {
          var r = o[e];
          r &&
          r.forEach(
            function (e) {
              t ? (
                e.material.transparent = !0,
                e.material.opacity = 0.8,
                e.material.color.r = s.foggyColor.r,
                e.material.color.g = s.foggyColor.g,
                e.material.color.b = s.foggyColor.b,
                e.material.needsUpdate = !0
              ) : (
                e.material.transparent = !1,
                e.material.opacity = 1,
                e.material.color.r = 1,
                e.material.color.g = 1,
                e.material.color.b = 1,
                e.material.needsUpdate = !0
              )
            }
          )
        }
      };
      i.EventDispatcher.prototype.apply(l.prototype),
      e.exports = new l(o)
    },
    665: function (e, t, r) {
      'use strict';
      function i(e, t, r, i, o) {
        var a = this,
        s = [],
        h = {},
        c = null,
        l = null,
        u = 1,
        d = !0,
        f = null,
        p = function (e, t) {
          f = new n.WebGLRenderTarget(
            e,
            t,
            {
              minFilter: n.NearestFilter,
              magFilter: n.NearestFilter,
              format: n.RGBAFormat
            }
          )
        },
        m = function () {
          return f
        };
        p(i, o);
        var v = function (e, t) {
          var r = {
            minFilter: n.LinearFilter,
            magFilter: n.LinearFilter,
            format: n.RGBFormat
          };
          c = new n.WebGLRenderTarget(e, t, r),
          a.depthTarget = c,
          l = new n.MeshDepthMaterial
        },
        g = function (i) {
          c &&
          (t.overrideMaterial = l, e.render(t, r, c), t.overrideMaterial = null);
          for (var n = 0; n < s.length; n++) s[n].render(i)
        };
        this.getTarget = m,
        this.target = f,
        this.reset = function () {
        },
        this.render = g,
        this.useDepthTarget = v,
        this.depthTarget = c,
        this.composers = s,
        this.composerHeap = h,
        this.width = i,
        this.height = o,
        this.scene = t,
        this.camera = r,
        this.renderer = e,
        this.blockOpacity = u,
        this.enabled = d
      }
      var n = r(13);
      e.exports = i
    },
    666: function (e, t, r) {
      'use strict';
      var i = r(13),
      n = r(76),
      o = r(332),
      a = r(331),
      s = r(137),
      h = r(333),
      c = function (e, t, n) {
        function o(e, t, r) {
          e.position.y >= - 1 ? r(y, e) : r(x, e)
        }
        function a(e) {
          if (e.iconImage) {
            if (!g[e.iconImage]) {
              var t = r(532) ('./' + e.iconImage);
              g[e.iconImage] = i.ImageUtils.loadTexture(t)
            }
            return new i.SpriteMaterial({
              map: g[e.iconImage],
              blending: i.NormalBlending,
              depthWrite: !1,
              depthTest: !1
            })
          }
          var n = e.getIconImage(),
          o = new i.Texture(n.canvas),
          a = function () {
            o.needsUpdate = !0
          };
          return n.on('change', a),
          a(),
          new i.SpriteMaterial({
            map: o,
            blending: i.NormalBlending,
            depthWrite: !1,
            depthTest: !1
          })
        }
        function c(e) {
          if (e.iconFocusedImage) {
            if (!g[e.iconFocusedImage]) {
              var t = r(532) ('./' + e.iconFocusedImage);
              g[e.iconFocusedImage] = i.ImageUtils.loadTexture(t)
            }
            return new i.SpriteMaterial({
              map: g[e.iconFocusedImage],
              blending: i.NormalBlending,
              depthWrite: !1,
              depthTest: !1
            })
          }
          var n = e.getIconFocusedImage(),
          o = new i.Texture(n.canvas),
          a = function () {
            o.needsUpdate = !0
          };
          return n.on('change', a),
          a(),
          new i.SpriteMaterial({
            map: o,
            blending: i.NormalBlending,
            depthWrite: !1,
            depthTest: !1
          })
        }
        function l(e) {
          var t = e.getTooltip(),
          r = document.createElement('canvas');
          r.width = 1024,
          r.height = 512;
          var n = new i.Texture(r);
          n.premultiplyAlpha = !1;
          var o = r.getContext('2d'),
          a = function () {
            o.drawImage(t.canvas, 512 - t.canvas.width / 2, 224),
            n.needsUpdate = !0
          };
          return t.on('change', a),
          a(),
          new i.SpriteMaterial({
            map: n,
            blending: i.NormalBlending,
            depthWrite: !1,
            depthTest: !1
          })
        }
        function u(e) {
          var t,
          r;
          e._hovered ? (t = 4, r = 3) : e._focused ? (t = 2, r = 1) : (t = 0, r = 0),
          e._focusedSprite ? e._focusedSprite.renderOrder = t : e._sprite &&
          (e._sprite.renderOrder = t),
          e._tooltip &&
          (e._tooltip.renderOrder = r)
        }
        function d(e, t, r) {
          return Math.max(Math.min(e, r), t)
        }
        var f = [],
        p = [],
        m = [],
        v = [],
        g = {},
        y = 'overlayMapIconsTop',
        x = 'overlayMapIconsBot';
        this.add = function (r) {
          r._sprite ||
          (
            r._sprite = new i.Sprite(a(r)),
            r._sprite.position.set(
              r.data.meta.transform.x,
              r.data.meta.transform.y,
              r.data.meta.transform.z
            ),
            r._sprite.scale.set(r.iconSize.x, r.iconSize.y, 1),
            r._sprite.userData.icon = r
          ),
          u(r),
          o(r._sprite, r.typeId, e.addToScene),
          null === r.getTooltip &&
          null === r.onClick ||
          t.add(r._sprite),
          f.push(r._sprite),
          p.push(r._sprite)
        },
        this.remove = function (r) {
          o(r._sprite, r.typeId, e.removeFromScene),
          null === r.getTooltip &&
          null === r.onClick ||
          t.remove(r._sprite),
          f.splice(f.indexOf(r._sprite), 1),
          p.splice(p.indexOf(r._sprite), 1)
        },
        this.focus = function (e) {
          if (!e._focused) {
            e._focused = !0,
            _(e);
            var t = new i.Vector3(
              e.data.meta.transform.x,
              n.orbitControls.target.y,
              e.data.meta.transform.z
            );
            n.panTo(t, 100),
            u(e)
          }
        },
        this.unfocus = function (e) {
          e._focused &&
          (e._focused = !1, e._hovered || w(e), u(e))
        };
        var _ = function (t) {
          if (
            t.iconFocusedImage &&
            (
              t._focusedSprite ||
              (
                t._focusedSprite = new i.Sprite(c(t)),
                t._focusedSprite.position.set(
                  t.data.meta.transform.x,
                  t.data.meta.transform.y,
                  t.data.meta.transform.z
                ),
                t._focusedSprite.scale.set(t.iconSize.x, t.iconSize.y, 1),
                t._focusedSprite.userData.icon = t
              ),
              o(t._focusedSprite, t.typeId, e.addToScene),
              f.push(t._focusedSprite),
              m.push(t._focusedSprite)
            ),
            t.getTooltip
          ) {
            if (!t._tooltip) {
              var r = new i.Sprite(l(t));
              t._tooltip = r,
              t._tooltip.position.set(
                t.data.meta.transform.x,
                t.data.meta.transform.y,
                t.data.meta.transform.z
              ),
              t._tooltip.scale.set(t.tooltipSize.x, t.tooltipSize.y, 1),
              t._tooltip.userData.icon = t
            }
            o(t._tooltip, 'tooltip', e.addToScene),
            f.push(t._tooltip),
            v.push(t._tooltip)
          }
        },
        w = function (t) {
          t.iconFocusedImage &&
          (
            o(t._focusedSprite, t.typeId, e.removeFromScene),
            f.splice(f.indexOf(t._focusedSprite), 1),
            m.splice(m.indexOf(t._focusedSprite), 1)
          ),
          t.getTooltip &&
          (
            o(t._tooltip, 'tooltip', e.removeFromScene),
            f.splice(f.indexOf(t._tooltip), 1),
            v.splice(v.indexOf(t._tooltip), 1)
          )
        };
        t.addEventListener(
          'mouseenter',
          function (t) {
            if ( - 1 != p.indexOf(t.object)) {
              var r = t.object.userData.icon;
              r._hovered = !0,
              null !== r.onClick &&
              (e.container.style.cursor = 'pointer'),
              null === r.getTooltip ||
              r._focused ||
              _(r),
              u(r)
            }
          }
        ),
        t.addEventListener(
          'mouseleave',
          function (t) {
            if ( - 1 != p.indexOf(t.object)) {
              var r = t.object.userData.icon;
              r._hovered = !1,
              null !== r.onClick &&
              (e.container.style.cursor = 'auto'),
              null === r.getTooltip ||
              r._focused ||
              w(r),
              u(r)
            }
          }
        ),
        t.addEventListener(
          'click',
          function (t) {
            if ( - 1 != p.indexOf(t.object)) {
              var r = t.object.userData.icon;
              null !== r.onClick &&
              r.onClick(e)
            }
          }
        ),
        e.addEventListener(
          'willRender',
          function () {
            var t = h.maxDistance - h.minDistance,
            r = (e.camera.userData.radius - h.minDistance) / t;
            f.forEach(
              function (t) {
                if (t.userData.icon._hovered || t.userData.icon._focused) t.material.opacity = 1;
                 else if (
                  t.userData.icon.zoomRange[0] > 0 &&
                  r < t.userData.icon.zoomRange[0] + 0.05
                ) {
                  var n = t.userData.icon.zoomRange[0] - r;
                  n = d(n, - 0.05, 0.05),
                  t.material.opacity = 1 - (n + 0.05) / 0.1
                } else if (
                  t.userData.icon.zoomRange[1] < 1 &&
                  r > t.userData.icon.zoomRange[1] - 0.05
                ) {
                  var o = t.userData.icon.zoomRange[1] - r;
                  o = d(o, - 0.05, 0.05),
                  t.material.opacity = (o + 0.05) / 0.1
                } else t.material.opacity = 1;
                t.userData.originalScale ||
                (t.userData.originalScale = (new i.Vector3).copy(t.scale));
                var a = t.userData.originalScale,
                s = t.position.clone().applyProjection(e.camera.matrixWorldInverse),
                h = - s.z,
                c = e.camera.fov * Math.PI / 180,
                l = 2 * Math.tan(c / 2) * h,
                u = a.y / e.height * l / a.y;
                t.scale.set(a.x * u, a.y * u)
              }
            )
          }
        ),
        e.setupRenderChunk(
          function () {
            var t = e.getScene(y),
            r = e.addComposerBlock(t, y);
            s.RenderBlock(r);
            var i = e.getScene(x),
            n = e.addComposerBlock(i, x);
            s.RenderBlock(n)
          }
        )
      };
      e.exports = new c(n, o, a)
    },
    667: function (e, t, r) {
      'use strict';
      var i = 'scene_top',
      n = 'scene_bot',
      o = {
        upperSceneName: i,
        lowerSceneName: n,
        foggyColor: {
          r: 0.9,
          g: 0.9,
          b: 0.9
        },
        cityParts: [
          {
            meshPath: r(1377),
            texturePath: r(1418),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1378),
            texturePath: r(1419),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1379),
            texturePath: r(1420),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1353),
            texturePath: r(1394),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1354),
            texturePath: r(1395),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1355),
            texturePath: r(1396),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1356),
            texturePath: r(1397),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1357),
            texturePath: r(1398),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1358),
            texturePath: r(1399),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1359),
            texturePath: r(1400),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1360),
            texturePath: r(1401),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1380),
            texturePath: r(1421),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1381),
            texturePath: r(1422),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1382),
            texturePath: r(1423),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1383),
            texturePath: r(1424),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1384),
            texturePath: r(1425),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1385),
            texturePath: r(1426),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1386),
            texturePath: r(1427),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1387),
            texturePath: r(1428),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1388),
            texturePath: r(1429),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1389),
            texturePath: r(1430),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1390),
            texturePath: r(1431),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1391),
            texturePath: r(1432),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1392),
            texturePath: r(1433),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1361),
            texturePath: r(1402),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1362),
            texturePath: r(1404),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1363),
            texturePath: r(1403),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1364),
            texturePath: r(1405),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1366),
            texturePath: r(1407),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1367),
            texturePath: r(1408),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1368),
            texturePath: r(1409),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1369),
            texturePath: r(1410),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1370),
            texturePath: r(1411),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1371),
            texturePath: r(1412),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1365),
            texturePath: r(1406),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(451),
            texturePath: r(452),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1372),
            texturePath: r(1413),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1373),
            texturePath: r(1414),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1374),
            texturePath: r(1415),
            scene: n,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1375),
            texturePath: r(1416),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1393),
            texturePath: r(1434),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1441),
            texturePath: r(1435),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1442),
            texturePath: r(1436),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1443),
            texturePath: r(1437),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1376),
            texturePath: r(1417),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1444),
            texturePath: r(1438),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1445),
            texturePath: r(1439),
            scene: i,
            meta: {
              name: 0
            }
          },
          {
            meshPath: r(1446),
            texturePath: r(1440),
            scene: i,
            meta: {
              name: 0
            }
          }
        ],
        devCityParts: [
          {
            meshPath: r(451),
            texturePath: r(452),
            scene: i,
            meta: {
              name: 0
            }
          }
        ]
      };
      e.exports = o
    },
    668: function (e, t) {
      'use strict';
      var r = function () {
        this.rotationAngleMinimum = - 12.5,
        this.horizontalAngleMaximum = 12.5;
        var e = this,
        t = 4,
        r = 3;
        this.gestureTypes = {
          ERROR: - 1,
          UNDETERMINED: 1,
          PAN: 2,
          PITCH: 3,
          ROTATE_AND_ZOOM: 4
        },
        this.dataPoints = [],
        this.getAverageVectorAngle = function () {
          for (var e = {
            x: 0,
            y: 0
          }, t = {
            x: 0,
            y: 0
          }, r = 0; r < this.dataPoints.length; r++) {
            if (
              null === this.dataPoints[r].fingerA ||
              null === this.dataPoints[r].fingerB
            ) return null;
            e.x += this.dataPoints[r].fingerA.x,
            e.y += this.dataPoints[r].fingerA.y,
            t.x += this.dataPoints[r].fingerB.x,
            t.y += this.dataPoints[r].fingerB.y
          }
          e.x /= this.dataPoints.length,
          e.y /= this.dataPoints.length,
          t.x /= this.dataPoints.length,
          t.y /= this.dataPoints.length;
          var i = 57.295 * Math.atan2(t.y - e.y, t.x - e.x);
          return i
        },
        this.addDataPoint = function (e, t, r) {
          r = void 0 === r ||
          null === r ? 0 : r,
          e = void 0 === e ? null : e,
          t = void 0 === t ? null : t,
          null !== t &&
          e.x > t.x ? this.dataPoints.push({
            fingerA: t,
            fingerB: e,
            deltaTime: r,
            reverse: !0
          }) : this.dataPoints.push({
            fingerA: e,
            fingerB: t,
            deltaTime: r
          })
        },
        this.getEmptyFingerVector = function () {
          return {
            fingerA: {
              x: 0,
              y: 0
            },
            fingerB: {
              x: 0,
              y: 0
            }
          }
        },
        this.getCurrentFingers = function () {
          return e.dataPoints[e.dataPoints.length - 1]
        },
        this.getPreviousFingers = function () {
          return e.dataPoints[e.dataPoints.length - 2]
        },
        this.getPreviousPanPoint = function () {
          return e.getPreviousFingers().fingerA
        },
        this.getCurrentPanPoint = function () {
          return e.getCurrentFingers().fingerA
        },
        this.flush = function () {
          this.dataPoints = []
        },
        this.getGesture = function () {
          return 0 === this.dataPoints.length ? this.gestureTypes.UNDETERMINED : e.isPan() ? this.gestureTypes.PAN : e.isPitch_fromVerticalFingerMovement() ? this.gestureTypes.PITCH : e.isRotateAndZoom() ? this.gestureTypes.ROTATE_AND_ZOOM : this.gestureTypes.UNDETERMINED
        },
        this.isPan = function () {
          for (var t = 0; t < e.dataPoints.length; t++) {
            if (null === e.dataPoints[t].fingerA) return !1;
            if (null !== e.dataPoints[t].fingerB) return !1
          }
          return !0
        },
        this.isPitch_fromVerticalFingerMovement = function () {
          if (this.dataPoints.length < t) return !1;
          for (var i = 0; i < this.dataPoints.length; i++) if (
            null === this.dataPoints[i].fingerA ||
            null === this.dataPoints[i].fingerB
          ) return !1;
          var n = e.dataPoints[0].fingerA.y - e.dataPoints[e.dataPoints.length - 1].fingerA.y,
          o = e.dataPoints[0].fingerA.x - e.dataPoints[e.dataPoints.length - 1].fingerA.x,
          a = e.dataPoints[0].fingerB.y - e.dataPoints[e.dataPoints.length - 1].fingerB.y,
          s = e.dataPoints[0].fingerB.x - e.dataPoints[e.dataPoints.length - 1].fingerB.x,
          h = 0.5 * Math.abs(n),
          c = 0.5 * Math.abs(a);
          return h >= Math.abs(o) &&
          c >= Math.abs(s) &&
          n + h >= a &&
          a >= n - h ? Math.abs(n) > r &&
          Math.abs(a) > r : !1
        },
        this.isRotateAndZoom = function () {
          if (this.dataPoints.length < t) return !1;
          var r = e.getAverageVectorAngle();
          if (null === r) return !1;
          if (r < this.rotationAngleMinimum || r > this.horizontalAngleMaximum) {
            var i = e.dataPoints[0].fingerA.y - e.dataPoints[e.dataPoints.length - 1].fingerA.y,
            n = e.dataPoints[0].fingerA.x - e.dataPoints[e.dataPoints.length - 1].fingerA.x,
            o = e.dataPoints[0].fingerB.y - e.dataPoints[e.dataPoints.length - 1].fingerB.y,
            a = e.dataPoints[0].fingerB.x - e.dataPoints[e.dataPoints.length - 1].fingerB.x,
            s = 0.1 * Math.abs(i),
            h = 0.1 * Math.abs(o);
            return !(s >= Math.abs(n) || h >= Math.abs(a))
          }
          return !1
        }
      };
      e.exports = new r
    },
    669: function (e, t) {
      'use strict';
      var r = function () {
        var e = [],
        t = {},
        r = function (r, i) {
          var n = {
            item: i,
            key: r
          };
          e.push(n),
          t[r] = n
        },
        i = function (t) {
          for (var r = 0; r < e.length; r++) if (e[r].key === t) return r
        },
        n = function (r) {
          var i = e[r];
          return i &&
          (t[i.key] = null, e.splice(r, 1)),
          i
        },
        o = function (r) {
          var n = t[r];
          if (n) {
            t[r] = null;
            var o = i(r);
            o &&
            e.splice(o, 1)
          }
          return n
        };
        this.insert = r,
        this.findIndex = i,
        this.removeUsingKey = o,
        this.removeUsingIndex = n,
        this.array = e,
        this.index = t
      };
      e.exports = r
    },
    670: function (e, t, r) {
      (
        function (e) {
          'use strict';
          function t(e) {
            return e &&
            e.__esModule ? e : {
              'default': e
            }
          }
          var i = r(347),
          n = t(i),
          o = r(671),
          a = a ||
          {
          };
          'object' === (0, n['default']) (e) &&
          (e.exports = a),
          a.CompressionMethod = {
            RAW: 5718354,
            MG1: 3229517,
            MG2: 3295053
          },
          a.Flags = {
            NORMALS: 1
          },
          a.File = function (e) {
            this.load(e)
          },
          a.File.prototype.load = function (e) {
            this.header = new a.FileHeader(e),
            this.body = new a.FileBody(this.header),
            this.getReader().read(e, this.body)
          },
          a.File.prototype.getReader = function () {
            var e;
            switch (this.header.compressionMethod) {
              case a.CompressionMethod.RAW:
                e = new a.ReaderRAW;
                break;
              case a.CompressionMethod.MG1:
                e = new a.ReaderMG1;
                break;
              case a.CompressionMethod.MG2:
                e = new a.ReaderMG2
            }
            return e
          },
          a.FileHeader = function (e) {
            e.readInt32(),
            this.fileFormat = e.readInt32(),
            this.compressionMethod = e.readInt32(),
            this.vertexCount = e.readInt32(),
            this.triangleCount = e.readInt32(),
            this.uvMapCount = e.readInt32(),
            this.attrMapCount = e.readInt32(),
            this.flags = e.readInt32(),
            this.comment = e.readString()
          },
          a.FileHeader.prototype.hasNormals = function () {
            return this.flags & a.Flags.NORMALS
          },
          a.FileBody = function (e) {
            var t = 3 * e.triangleCount,
            r = 3 * e.vertexCount,
            i = e.hasNormals() ? 3 * e.vertexCount : 0,
            n = 2 * e.vertexCount,
            o = 4 * e.vertexCount,
            a = 0,
            s = new ArrayBuffer(4 * (t + r + i + n * e.uvMapCount + o * e.attrMapCount));
            if (
              this.indices = new Uint32Array(s, 0, t),
              this.vertices = new Float32Array(s, 4 * t, r),
              e.hasNormals() &&
              (this.normals = new Float32Array(s, 4 * (t + r), i)),
              e.uvMapCount
            ) for (this.uvMaps = [], a = 0; a < e.uvMapCount; ++a) this.uvMaps[a] = {
              uv: new Float32Array(s, 4 * (t + r + i + a * n), n)
            };
            if (e.attrMapCount) for (this.attrMaps = [], a = 0; a < e.attrMapCount; ++a) this.attrMaps[a] = {
              attr: new Float32Array(s, 4 * (t + r + i + n * e.uvMapCount + a * o), o)
            }
          },
          a.FileMG2Header = function (e) {
            e.readInt32(),
            this.vertexPrecision = e.readFloat32(),
            this.normalPrecision = e.readFloat32(),
            this.lowerBoundx = e.readFloat32(),
            this.lowerBoundy = e.readFloat32(),
            this.lowerBoundz = e.readFloat32(),
            this.higherBoundx = e.readFloat32(),
            this.higherBoundy = e.readFloat32(),
            this.higherBoundz = e.readFloat32(),
            this.divx = e.readInt32(),
            this.divy = e.readInt32(),
            this.divz = e.readInt32(),
            this.sizex = (this.higherBoundx - this.lowerBoundx) / this.divx,
            this.sizey = (this.higherBoundy - this.lowerBoundy) / this.divy,
            this.sizez = (this.higherBoundz - this.lowerBoundz) / this.divz
          },
          a.ReaderRAW = function () {
          },
          a.ReaderRAW.prototype.read = function (e, t) {
            this.readIndices(e, t.indices),
            this.readVertices(e, t.vertices),
            t.normals &&
            this.readNormals(e, t.normals),
            t.uvMaps &&
            this.readUVMaps(e, t.uvMaps),
            t.attrMaps &&
            this.readAttrMaps(e, t.attrMaps)
          },
          a.ReaderRAW.prototype.readIndices = function (e, t) {
            e.readInt32(),
            e.readArrayInt32(t)
          },
          a.ReaderRAW.prototype.readVertices = function (e, t) {
            e.readInt32(),
            e.readArrayFloat32(t)
          },
          a.ReaderRAW.prototype.readNormals = function (e, t) {
            e.readInt32(),
            e.readArrayFloat32(t)
          },
          a.ReaderRAW.prototype.readUVMaps = function (e, t) {
            for (var r = 0; r < t.length; ++r) e.readInt32(),
            t[r].name = e.readString(),
            t[r].filename = e.readString(),
            e.readArrayFloat32(t[r].uv)
          },
          a.ReaderRAW.prototype.readAttrMaps = function (e, t) {
            for (var r = 0; r < t.length; ++r) e.readInt32(),
            t[r].name = e.readString(),
            e.readArrayFloat32(t[r].attr)
          },
          a.ReaderMG1 = function () {
          },
          a.ReaderMG1.prototype.read = function (e, t) {
            this.readIndices(e, t.indices),
            this.readVertices(e, t.vertices),
            t.normals &&
            this.readNormals(e, t.normals),
            t.uvMaps &&
            this.readUVMaps(e, t.uvMaps),
            t.attrMaps &&
            this.readAttrMaps(e, t.attrMaps)
          },
          a.ReaderMG1.prototype.readIndices = function (e, t) {
            e.readInt32(),
            e.readInt32();
            var r = new a.InterleavedStream(t, 3);
            o.decompress(e, e, r, r.data.length),
            a.restoreIndices(t, t.length)
          },
          a.ReaderMG1.prototype.readVertices = function (e, t) {
            e.readInt32(),
            e.readInt32();
            var r = new a.InterleavedStream(t, 1);
            o.decompress(e, e, r, r.data.length)
          },
          a.ReaderMG1.prototype.readNormals = function (e, t) {
            e.readInt32(),
            e.readInt32();
            var r = new a.InterleavedStream(t, 3);
            o.decompress(e, e, r, r.data.length)
          },
          a.ReaderMG1.prototype.readUVMaps = function (e, t) {
            for (var r = 0; r < t.length; ++r) {
              e.readInt32(),
              t[r].name = e.readString(),
              t[r].filename = e.readString(),
              e.readInt32();
              var i = new a.InterleavedStream(t[r].uv, 2);
              o.decompress(e, e, i, i.data.length)
            }
          },
          a.ReaderMG1.prototype.readAttrMaps = function (e, t) {
            for (var r = 0; r < t.length; ++r) {
              e.readInt32(),
              t[r].name = e.readString(),
              e.readInt32();
              var i = new a.InterleavedStream(t[r].attr, 4);
              o.decompress(e, e, i, i.data.length)
            }
          },
          a.ReaderMG2 = function () {
          },
          a.ReaderMG2.prototype.read = function (e, t) {
            this.MG2Header = new a.FileMG2Header(e),
            this.readVertices(e, t.vertices),
            this.readIndices(e, t.indices),
            t.normals &&
            this.readNormals(e, t),
            t.uvMaps &&
            this.readUVMaps(e, t.uvMaps),
            t.attrMaps &&
            this.readAttrMaps(e, t.attrMaps)
          },
          a.ReaderMG2.prototype.readVertices = function (e, t) {
            e.readInt32(),
            e.readInt32();
            var r = new a.InterleavedStream(t, 3);
            o.decompress(e, e, r, r.data.length);
            var i = this.readGridIndices(e, t);
            a.restoreVertices(t, this.MG2Header, i, this.MG2Header.vertexPrecision)
          },
          a.ReaderMG2.prototype.readGridIndices = function (e, t) {
            e.readInt32(),
            e.readInt32();
            var r = new Uint32Array(t.length / 3),
            i = new a.InterleavedStream(r, 1);
            return o.decompress(e, e, i, i.data.length),
            a.restoreGridIndices(r, r.length),
            r
          },
          a.ReaderMG2.prototype.readIndices = function (e, t) {
            e.readInt32(),
            e.readInt32();
            var r = new a.InterleavedStream(t, 3);
            o.decompress(e, e, r, r.data.length),
            a.restoreIndices(t, t.length)
          },
          a.ReaderMG2.prototype.readNormals = function (e, t) {
            e.readInt32(),
            e.readInt32();
            var r = new a.InterleavedStream(t.normals, 3);
            o.decompress(e, e, r, r.data.length);
            var i = a.calcSmoothNormals(t.indices, t.vertices);
            a.restoreNormals(t.normals, i, this.MG2Header.normalPrecision)
          },
          a.ReaderMG2.prototype.readUVMaps = function (e, t) {
            for (var r = 0; r < t.length; ++r) {
              e.readInt32(),
              t[r].name = e.readString(),
              t[r].filename = e.readString();
              var i = e.readFloat32();
              e.readInt32();
              var n = new a.InterleavedStream(t[r].uv, 2);
              o.decompress(e, e, n, n.data.length),
              a.restoreMap(t[r].uv, 2, i)
            }
          },
          a.ReaderMG2.prototype.readAttrMaps = function (e, t) {
            for (var r = 0; r < t.length; ++r) {
              e.readInt32(),
              t[r].name = e.readString();
              var i = e.readFloat32();
              e.readInt32();
              var n = new a.InterleavedStream(t[r].attr, 4);
              o.decompress(e, e, n, n.data.length),
              a.restoreMap(t[r].attr, 4, i)
            }
          },
          a.restoreIndices = function (e, t) {
            var r = 3;
            for (t > 0 && (e[2] += e[0], e[1] += e[0]); t > r; r += 3) e[r] += e[r - 3],
            e[r] === e[r - 3] ? e[r + 1] += e[r - 2] : e[r + 1] += e[r],
            e[r + 2] += e[r]
          },
          a.restoreGridIndices = function (e, t) {
            for (var r = 1; t > r; ++r) e[r] += e[r - 1]
          },
          a.restoreVertices = function (e, t, r, i) {
            for (
              var n,
              o,
              a,
              s,
              h,
              c = new Uint32Array(e.buffer, e.byteOffset, e.length),
              l = t.divx,
              u = l * t.divy,
              d = 2147483647,
              f = 0,
              p = 0,
              m = 0,
              v = r.length;
              v > p;
              m += 3
            ) a = n = r[p++],
            h = ~~(a / u),
            a -= ~~(h * u),
            s = ~~(a / l),
            a -= ~~(s * l),
            o = c[m],
            n === d &&
            (o += f),
            e[m] = t.lowerBoundx + a * t.sizex + i * o,
            e[m + 1] = t.lowerBoundy + s * t.sizey + i * c[m + 1],
            e[m + 2] = t.lowerBoundz + h * t.sizez + i * c[m + 2],
            d = n,
            f = o
          },
          a.restoreNormals = function (e, t, r) {
            for (
              var i,
              n,
              o,
              a,
              s,
              h,
              c,
              l,
              u,
              d,
              f = new Uint32Array(e.buffer, e.byteOffset, e.length),
              p = 0,
              m = e.length,
              v = 1.5707963267948966;
              m > p;
              p += 3
            ) i = f[p] * r,
            n = f[p + 1],
            0 === n ? (e[p] = t[p] * i, e[p + 1] = t[p + 1] * i, e[p + 2] = t[p + 2] * i) : (
              o = 4 >= n ? (f[p + 2] - 2) * v : (4 * f[p + 2] / n - 2) * v,
              n *= r * v,
              a = i * Math.sin(n),
              s = a * Math.cos(o),
              h = a * Math.sin(o),
              c = i * Math.cos(n),
              u = t[p + 1],
              l = t[p] - t[p + 2],
              d = Math.sqrt(2 * u * u + l * l),
              d > 1e-20 &&
              (l /= d, u /= d),
              e[p] = t[p] * c + (t[p + 1] * u - t[p + 2] * l) * h - u * s,
              e[p + 1] = t[p + 1] * c - (t[p + 2] + t[p]) * u * h + l * s,
              e[p + 2] = t[p + 2] * c + (t[p] * l + t[p + 1] * u) * h + u * s
            )
          },
          a.restoreMap = function (e, t, r) {
            for (
              var i,
              n,
              o,
              a = new Uint32Array(e.buffer, e.byteOffset, e.length),
              s = 0,
              h = e.length;
              t > s;
              ++s
            ) for (i = 0, o = s; h > o; o += t) n = a[o],
            i += 1 & n ? - (n + 1 >> 1) : n >> 1,
            e[o] = i * r
          },
          a.calcSmoothNormals = function (e, t) {
            var r,
            i,
            n,
            o,
            a,
            s,
            h,
            c,
            l,
            u,
            d,
            f,
            p,
            m,
            v,
            g = new Float32Array(t.length);
            for (m = 0, v = e.length; v > m; ) r = 3 * e[m++],
            i = 3 * e[m++],
            n = 3 * e[m++],
            h = t[i] - t[r],
            u = t[n] - t[r],
            c = t[i + 1] - t[r + 1],
            d = t[n + 1] - t[r + 1],
            l = t[i + 2] - t[r + 2],
            f = t[n + 2] - t[r + 2],
            o = c * f - l * d,
            a = l * u - h * f,
            s = h * d - c * u,
            p = Math.sqrt(o * o + a * a + s * s),
            p > 1e-10 &&
            (o /= p, a /= p, s /= p),
            g[r] += o,
            g[r + 1] += a,
            g[r + 2] += s,
            g[i] += o,
            g[i + 1] += a,
            g[i + 2] += s,
            g[n] += o,
            g[n + 1] += a,
            g[n + 2] += s;
            for (m = 0, v = g.length; v > m; m += 3) p = Math.sqrt(g[m] * g[m] + g[m + 1] * g[m + 1] + g[m + 2] * g[m + 2]),
            p > 1e-10 &&
            (g[m] /= p, g[m + 1] /= p, g[m + 2] /= p);
            return g
          },
          a.isLittleEndian = function () {
            var e = new ArrayBuffer(2),
            t = new Uint8Array(e),
            r = new Uint16Array(e);
            return t[0] = 1,
            1 === r[0]
          }(),
          a.InterleavedStream = function (e, t) {
            this.data = new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
            this.offset = a.isLittleEndian ? 3 : 0,
            this.count = 4 * t,
            this.len = this.data.length
          },
          a.InterleavedStream.prototype.writeByte = function (e) {
            this.data[this.offset] = e,
            this.offset += this.count,
            this.offset >= this.len &&
            (
              this.offset -= this.len - 4,
              this.offset >= this.count &&
              (this.offset -= this.count + (a.isLittleEndian ? 1 : - 1))
            )
          },
          a.Stream = function (e) {
            this.data = e,
            this.offset = 0
          },
          a.Stream.prototype.TWO_POW_MINUS23 = Math.pow(2, - 23),
          a.Stream.prototype.TWO_POW_MINUS126 = Math.pow(2, - 126),
          a.Stream.prototype.readByte = function () {
            return 255 & this.data[this.offset++]
          },
          a.Stream.prototype.readInt32 = function () {
            var e = this.readByte();
            return e |= this.readByte() << 8,
            e |= this.readByte() << 16,
            e | this.readByte() << 24
          },
          a.Stream.prototype.readFloat32 = function () {
            var e = this.readByte();
            e += this.readByte() << 8;
            var t = this.readByte(),
            r = this.readByte();
            e += (127 & t) << 16;
            var i = (127 & r) << 1 | (128 & t) >>> 7,
            n = 128 & r ? - 1 : 1;
            return 255 === i ? 0 !== e ? NaN : n * (1 / 0) : i > 0 ? n * (1 + e * this.TWO_POW_MINUS23) * Math.pow(2, i - 127) : 0 !== e ? n * e * this.TWO_POW_MINUS126 : 0 * n
          },
          a.Stream.prototype.readString = function () {
            var e = this.readInt32();
            return this.offset += e,
            String.fromCharCode.apply(null, this.data.subarray(this.offset - e, this.offset))
          },
          a.Stream.prototype.readArrayInt32 = function (e) {
            for (var t = 0, r = e.length; r > t; ) e[t++] = this.readInt32();
            return e
          },
          a.Stream.prototype.readArrayFloat32 = function (e) {
            for (var t = 0, r = e.length; r > t; ) e[t++] = this.readFloat32();
            return e
          }
        }
      ).call(t, r(42) (e))
    },
    671: function (e, t, r) {
      (
        function (e) {
          'use strict';
          function t(e) {
            return e &&
            e.__esModule ? e : {
              'default': e
            }
          }
          var i = r(347),
          n = t(i),
          o = o ||
          {
          };
          'object' === (0, n['default']) (e) &&
          (e.exports = o),
          o.OutWindow = function () {
            this._windowSize = 0
          },
          o.OutWindow.prototype.create = function (e) {
            this._buffer &&
            this._windowSize === e ||
            (this._buffer = []),
            this._windowSize = e,
            this._pos = 0,
            this._streamPos = 0
          },
          o.OutWindow.prototype.flush = function () {
            var e = this._pos - this._streamPos;
            if (0 !== e) {
              for (; e--; ) this._stream.writeByte(this._buffer[this._streamPos++]);
              this._pos >= this._windowSize &&
              (this._pos = 0),
              this._streamPos = this._pos
            }
          },
          o.OutWindow.prototype.releaseStream = function () {
            this.flush(),
            this._stream = null
          },
          o.OutWindow.prototype.setStream = function (e) {
            this.releaseStream(),
            this._stream = e
          },
          o.OutWindow.prototype.init = function (e) {
            e ||
            (this._streamPos = 0, this._pos = 0)
          },
          o.OutWindow.prototype.copyBlock = function (e, t) {
            var r = this._pos - e - 1;
            for (0 > r && (r += this._windowSize); t--; ) r >= this._windowSize &&
            (r = 0),
            this._buffer[this._pos++] = this._buffer[r++],
            this._pos >= this._windowSize &&
            this.flush()
          },
          o.OutWindow.prototype.putByte = function (e) {
            this._buffer[this._pos++] = e,
            this._pos >= this._windowSize &&
            this.flush()
          },
          o.OutWindow.prototype.getByte = function (e) {
            var t = this._pos - e - 1;
            return 0 > t &&
            (t += this._windowSize),
            this._buffer[t]
          },
          o.RangeDecoder = function () {
          },
          o.RangeDecoder.prototype.setStream = function (e) {
            this._stream = e
          },
          o.RangeDecoder.prototype.releaseStream = function () {
            this._stream = null
          },
          o.RangeDecoder.prototype.init = function () {
            var e = 5;
            for (this._code = 0, this._range = - 1; e--; ) this._code = this._code << 8 | this._stream.readByte()
          },
          o.RangeDecoder.prototype.decodeDirectBits = function (e) {
            for (var t, r = 0, i = e; i--; ) this._range >>>= 1,
            t = this._code - this._range >>> 31,
            this._code -= this._range & t - 1,
            r = r << 1 | 1 - t,
            0 === (4278190080 & this._range) &&
            (
              this._code = this._code << 8 | this._stream.readByte(),
              this._range <<= 8
            );
            return r
          },
          o.RangeDecoder.prototype.decodeBit = function (e, t) {
            var r = e[t],
            i = (this._range >>> 11) * r;
            return (2147483648 ^ this._code) < (2147483648 ^ i) ? (
              this._range = i,
              e[t] += 2048 - r >>> 5,
              0 === (4278190080 & this._range) &&
              (
                this._code = this._code << 8 | this._stream.readByte(),
                this._range <<= 8
              ),
              0
            ) : (
              this._range -= i,
              this._code -= i,
              e[t] -= r >>> 5,
              0 === (4278190080 & this._range) &&
              (
                this._code = this._code << 8 | this._stream.readByte(),
                this._range <<= 8
              ),
              1
            )
          },
          o.initBitModels = function (e, t) {
            for (; t--; ) e[t] = 1024
          },
          o.BitTreeDecoder = function (e) {
            this._models = [],
            this._numBitLevels = e
          },
          o.BitTreeDecoder.prototype.init = function () {
            o.initBitModels(this._models, 1 << this._numBitLevels)
          },
          o.BitTreeDecoder.prototype.decode = function (e) {
            for (var t = 1, r = this._numBitLevels; r--; ) t = t << 1 | e.decodeBit(this._models, t);
            return t - (1 << this._numBitLevels)
          },
          o.BitTreeDecoder.prototype.reverseDecode = function (e) {
            for (var t, r = 1, i = 0, n = 0; n < this._numBitLevels; ++n) t = e.decodeBit(this._models, r),
            r = r << 1 | t,
            i |= t << n;
            return i
          },
          o.reverseDecode2 = function (e, t, r, i) {
            for (var n, o = 1, a = 0, s = 0; i > s; ++s) n = r.decodeBit(e, t + o),
            o = o << 1 | n,
            a |= n << s;
            return a
          },
          o.LenDecoder = function () {
            this._choice = [],
            this._lowCoder = [],
            this._midCoder = [],
            this._highCoder = new o.BitTreeDecoder(8),
            this._numPosStates = 0
          },
          o.LenDecoder.prototype.create = function (e) {
            for (; this._numPosStates < e; ++this._numPosStates) this._lowCoder[this._numPosStates] = new o.BitTreeDecoder(3),
            this._midCoder[this._numPosStates] = new o.BitTreeDecoder(3)
          },
          o.LenDecoder.prototype.init = function () {
            var e = this._numPosStates;
            for (o.initBitModels(this._choice, 2); e--; ) this._lowCoder[e].init(),
            this._midCoder[e].init();
            this._highCoder.init()
          },
          o.LenDecoder.prototype.decode = function (e, t) {
            return 0 === e.decodeBit(this._choice, 0) ? this._lowCoder[t].decode(e) : 0 === e.decodeBit(this._choice, 1) ? 8 + this._midCoder[t].decode(e) : 16 + this._highCoder.decode(e)
          },
          o.Decoder2 = function () {
            this._decoders = []
          },
          o.Decoder2.prototype.init = function () {
            o.initBitModels(this._decoders, 768)
          },
          o.Decoder2.prototype.decodeNormal = function (e) {
            var t = 1;
            do t = t << 1 | e.decodeBit(this._decoders, t);
            while (256 > t);
            return 255 & t
          },
          o.Decoder2.prototype.decodeWithMatchByte = function (e, t) {
            var r,
            i,
            n = 1;
            do if (
              r = t >> 7 & 1,
              t <<= 1,
              i = e.decodeBit(this._decoders, (1 + r << 8) + n),
              n = n << 1 | i,
              r !== i
            ) {
              for (; 256 > n; ) n = n << 1 | e.decodeBit(this._decoders, n);
              break
            } while (256 > n);
            return 255 & n
          },
          o.LiteralDecoder = function () {
          },
          o.LiteralDecoder.prototype.create = function (e, t) {
            var r;
            if (!this._coders || this._numPrevBits !== t || this._numPosBits !== e) for (
              this._numPosBits = e,
              this._posMask = (1 << e) - 1,
              this._numPrevBits = t,
              this._coders = [],
              r = 1 << this._numPrevBits + this._numPosBits;
              r--;
            ) this._coders[r] = new o.Decoder2
          },
          o.LiteralDecoder.prototype.init = function () {
            for (var e = 1 << this._numPrevBits + this._numPosBits; e--; ) this._coders[e].init()
          },
          o.LiteralDecoder.prototype.getDecoder = function (e, t) {
            return this._coders[((e & this._posMask) << this._numPrevBits) + ((255 & t) >>> 8 - this._numPrevBits)]
          },
          o.Decoder = function () {
            this._outWindow = new o.OutWindow,
            this._rangeDecoder = new o.RangeDecoder,
            this._isMatchDecoders = [],
            this._isRepDecoders = [],
            this._isRepG0Decoders = [],
            this._isRepG1Decoders = [],
            this._isRepG2Decoders = [],
            this._isRep0LongDecoders = [],
            this._posSlotDecoder = [],
            this._posDecoders = [],
            this._posAlignDecoder = new o.BitTreeDecoder(4),
            this._lenDecoder = new o.LenDecoder,
            this._repLenDecoder = new o.LenDecoder,
            this._literalDecoder = new o.LiteralDecoder,
            this._dictionarySize = - 1,
            this._dictionarySizeCheck = - 1,
            this._posSlotDecoder[0] = new o.BitTreeDecoder(6),
            this._posSlotDecoder[1] = new o.BitTreeDecoder(6),
            this._posSlotDecoder[2] = new o.BitTreeDecoder(6),
            this._posSlotDecoder[3] = new o.BitTreeDecoder(6)
          },
          o.Decoder.prototype.setDictionarySize = function (e) {
            return 0 > e ? !1 : (
              this._dictionarySize !== e &&
              (
                this._dictionarySize = e,
                this._dictionarySizeCheck = Math.max(this._dictionarySize, 1),
                this._outWindow.create(Math.max(this._dictionarySizeCheck, 4096))
              ),
              !0
            )
          },
          o.Decoder.prototype.setLcLpPb = function (e, t, r) {
            var i = 1 << r;
            return e > 8 ||
            t > 4 ||
            r > 4 ? !1 : (
              this._literalDecoder.create(t, e),
              this._lenDecoder.create(i),
              this._repLenDecoder.create(i),
              this._posStateMask = i - 1,
              !0
            )
          },
          o.Decoder.prototype.init = function () {
            var e = 4;
            for (
              this._outWindow.init(!1),
              o.initBitModels(this._isMatchDecoders, 192),
              o.initBitModels(this._isRep0LongDecoders, 192),
              o.initBitModels(this._isRepDecoders, 12),
              o.initBitModels(this._isRepG0Decoders, 12),
              o.initBitModels(this._isRepG1Decoders, 12),
              o.initBitModels(this._isRepG2Decoders, 12),
              o.initBitModels(this._posDecoders, 114),
              this._literalDecoder.init();
              e--;
            ) this._posSlotDecoder[e].init();
            this._lenDecoder.init(),
            this._repLenDecoder.init(),
            this._posAlignDecoder.init(),
            this._rangeDecoder.init()
          },
          o.Decoder.prototype.decode = function (e, t, r) {
            var i,
            n,
            a,
            s,
            h,
            c,
            l = 0,
            u = 0,
            d = 0,
            f = 0,
            p = 0,
            m = 0,
            v = 0;
            for (
              this._rangeDecoder.setStream(e),
              this._outWindow.setStream(t),
              this.init();
              0 > r ||
              r > m;
            ) if (
              i = m & this._posStateMask,
              0 === this._rangeDecoder.decodeBit(this._isMatchDecoders, (l << 4) + i)
            ) n = this._literalDecoder.getDecoder(m++, v),
            v = l >= 7 ? n.decodeWithMatchByte(this._rangeDecoder, this._outWindow.getByte(u)) : n.decodeNormal(this._rangeDecoder),
            this._outWindow.putByte(v),
            l = 4 > l ? 0 : l - (10 > l ? 3 : 6);
             else {
              if (1 === this._rangeDecoder.decodeBit(this._isRepDecoders, l)) a = 0,
              0 === this._rangeDecoder.decodeBit(this._isRepG0Decoders, l) ? 0 === this._rangeDecoder.decodeBit(this._isRep0LongDecoders, (l << 4) + i) &&
              (l = 7 > l ? 9 : 11, a = 1) : (
                0 === this._rangeDecoder.decodeBit(this._isRepG1Decoders, l) ? s = d : (
                  0 === this._rangeDecoder.decodeBit(this._isRepG2Decoders, l) ? s = f : (s = p, p = f),
                  f = d
                ),
                d = u,
                u = s
              ),
              0 === a &&
              (
                a = 2 + this._repLenDecoder.decode(this._rangeDecoder, i),
                l = 7 > l ? 8 : 11
              );
               else if (
                p = f,
                f = d,
                d = u,
                a = 2 + this._lenDecoder.decode(this._rangeDecoder, i),
                l = 7 > l ? 7 : 10,
                h = this._posSlotDecoder[5 >= a ? a - 2 : 3].decode(this._rangeDecoder),
                h >= 4
              ) {
                if (c = (h >> 1) - 1, u = (2 | 1 & h) << c, 14 > h) u += o.reverseDecode2(this._posDecoders, u - h - 1, this._rangeDecoder, c);
                 else if (
                  u += this._rangeDecoder.decodeDirectBits(c - 4) << 4,
                  u += this._posAlignDecoder.reverseDecode(this._rangeDecoder),
                  0 > u
                ) {
                  if ( - 1 === u) break;
                  return !1
                }
              } else u = h;
              if (u >= m || u >= this._dictionarySizeCheck) return !1;
              this._outWindow.copyBlock(u, a),
              m += a,
              v = this._outWindow.getByte(0)
            }
            return this._outWindow.flush(),
            this._outWindow.releaseStream(),
            this._rangeDecoder.releaseStream(),
            !0
          },
          o.Decoder.prototype.setDecoderProperties = function (e) {
            var t,
            r,
            i,
            n,
            o;
            return e.size < 5 ? !1 : (
              t = e.readByte(),
              r = t % 9,
              t = ~~(t / 9),
              i = t % 5,
              n = ~~(t / 5),
              this.setLcLpPb(r, i, n) ? (
                o = e.readByte(),
                o |= e.readByte() << 8,
                o |= e.readByte() << 16,
                o += 16777216 * e.readByte(),
                this.setDictionarySize(o)
              ) : !1
            )
          },
          o.decompress = function (e, t, r, i) {
            var n = new o.Decoder;
            if (!n.setDecoderProperties(e)) throw 'Incorrect stream properties';
            if (!n.decode(t, r, i)) throw 'Error in data stream';
            return !0
          }
        }
      ).call(t, r(42) (e))
    },
    732: function (e, t, r) {
      e.exports = {
        'default': r(739),
        __esModule: !0
      }
    },
    736: function (e, t, r) {
      var i = r(29);
      e.exports = function (e, t) {
        return i.create(e, t)
      }
    },
    739: function (e, t, r) {
      r(772),
      r(355),
      e.exports = r(40).Symbol
    },
    742: function (e, t, r) {
      var i = r(29);
      e.exports = function (e) {
        var t = i.getKeys(e),
        r = i.getSymbols;
        if (r) for (var n, o = r(e), a = i.isEnum, s = 0; o.length > s; ) a.call(e, n = o[s++]) &&
        t.push(n);
        return t
      }
    },
    744: function (e, t, r) {
      var i = r(98),
      n = r(29).getNames,
      o = {}.toString,
      a = 'object' == typeof window &&
      Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      s = function (e) {
        try {
          return n(e)
        } catch (t) {
          return a.slice()
        }
      };
      e.exports.get = function (e) {
        return a &&
        '[object Window]' == o.call(e) ? s(e) : n(i(e))
      }
    },
    748: function (e, t, r) {
      var i = r(79);
      e.exports = Array.isArray ||
      function (e) {
        return 'Array' == i(e)
      }
    },
    753: function (e, t, r) {
      var i = r(29),
      n = r(98);
      e.exports = function (e, t) {
        for (var r, o = n(e), a = i.getKeys(o), s = a.length, h = 0; s > h; ) if (o[r = a[h++]] === t) return r
      }
    },
    772: function (e, t, r) {
      'use strict';
      var i = r(29),
      n = r(46),
      o = r(146),
      a = r(94),
      s = r(81),
      h = r(150),
      c = r(95),
      l = r(351),
      u = r(97),
      d = r(354),
      f = r(33),
      p = r(753),
      m = r(744),
      v = r(742),
      g = r(748),
      y = r(63),
      x = r(98),
      _ = r(149),
      w = i.getDesc,
      b = i.setDesc,
      M = i.create,
      S = m.get,
      T = n.Symbol,
      C = n.JSON,
      A = C &&
      C.stringify,
      E = !1,
      P = f('_hidden'),
      D = i.isEnum,
      L = l('symbol-registry'),
      R = l('symbols'),
      B = 'function' == typeof T,
      F = Object.prototype,
      U = a &&
      c(
        function () {
          return 7 != M(b({
          }, 'a', {
            get: function () {
              return b(this, 'a', {
                value: 7
              }).a
            }
          })).a
        }
      ) ? function (e, t, r) {
        var i = w(F, t);
        i &&
        delete F[t],
        b(e, t, r),
        i &&
        e !== F &&
        b(F, t, i)
      }
       : b,
      O = function (e) {
        var t = R[e] = M(T.prototype);
        return t._k = e,
        a &&
        E &&
        U(
          F,
          e,
          {
            configurable: !0,
            set: function (t) {
              o(this, P) &&
              o(this[P], e) &&
              (this[P][e] = !1),
              U(this, e, _(1, t))
            }
          }
        ),
        t
      },
      V = function (e) {
        return 'symbol' == typeof e
      },
      k = function (e, t, r) {
        return r &&
        o(R, t) ? (
          r.enumerable ? (o(e, P) && e[P][t] && (e[P][t] = !1), r = M(r, {
            enumerable: _(0, !1)
          })) : (o(e, P) || b(e, P, _(1, {
          })), e[P][t] = !0),
          U(e, t, r)
        ) : b(e, t, r)
      },
      z = function (e, t) {
        y(e);
        for (var r, i = v(t = x(t)), n = 0, o = i.length; o > n; ) k(e, r = i[n++], t[r]);
        return e
      },
      N = function (e, t) {
        return void 0 === t ? M(e) : z(M(e), t)
      },
      I = function (e) {
        var t = D.call(this, e);
        return t ||
        !o(this, e) ||
        !o(R, e) ||
        o(this, P) &&
        this[P][e] ? t : !0
      },
      G = function (e, t) {
        var r = w(e = x(e), t);
        return !r ||
        !o(R, t) ||
        o(e, P) &&
        e[P][t] ||
        (r.enumerable = !0),
        r
      },
      H = function (e) {
        for (var t, r = S(x(e)), i = [], n = 0; r.length > n; ) o(R, t = r[n++]) ||
        t == P ||
        i.push(t);
        return i
      },
      W = function (e) {
        for (var t, r = S(x(e)), i = [], n = 0; r.length > n; ) o(R, t = r[n++]) &&
        i.push(R[t]);
        return i
      },
      j = function (e) {
        if (void 0 !== e && !V(e)) {
          for (var t, r, i = [
            e
          ], n = 1, o = arguments; o.length > n; ) i.push(o[n++]);
          return t = i[1],
          'function' == typeof t &&
          (r = t),
          !r &&
          g(t) ||
          (t = function (e, t) {
            return r &&
            (t = r.call(this, e, t)),
            V(t) ? void 0 : t
          }),
          i[1] = t,
          A.apply(C, i)
        }
      },
      X = c(
        function () {
          var e = T();
          return '[null]' != A([e]) ||
          '{}' != A({
            a: e
          }) ||
          '{}' != A(Object(e))
        }
      );
      B ||
      (
        T = function () {
          if (V(this)) throw TypeError('Symbol is not a constructor');
          return O(d(arguments.length > 0 ? arguments[0] : void 0))
        },
        h(T.prototype, 'toString', function () {
          return this._k
        }),
        V = function (e) {
          return e instanceof T
        },
        i.create = N,
        i.isEnum = I,
        i.getDesc = G,
        i.setDesc = k,
        i.setDescs = z,
        i.getNames = m.get = H,
        i.getSymbols = W,
        a &&
        !r(148) &&
        h(F, 'propertyIsEnumerable', I, !0)
      );
      var q = {
        'for': function (e) {
          return o(L, e += '') ? L[e] : L[e] = T(e)
        },
        keyFor: function (e) {
          return p(L, e)
        },
        useSetter: function () {
          E = !0
        },
        useSimple: function () {
          E = !1
        }
      };
      i.each.call(
        'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','),
        function (e) {
          var t = f(e);
          q[e] = B ? t : O(t)
        }
      ),
      E = !0,
      s(s.G + s.W, {
        Symbol: T
      }),
      s(s.S, 'Symbol', q),
      s(
        s.S + s.F * !B,
        'Object',
        {
          create: N,
          defineProperty: k,
          defineProperties: z,
          getOwnPropertyDescriptor: G,
          getOwnPropertyNames: H,
          getOwnPropertySymbols: W
        }
      ),
      C &&
      s(s.S + s.F * (!B || X), 'JSON', {
        stringify: j
      }),
      u(T, 'Symbol'),
      u(Math, 'Math', !0),
      u(n.JSON, 'JSON', !0)
    },
    1353: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_1.6fed3e.ctm'
    },
    1354: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_2.1aa907.ctm'
    },
    1355: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_3.53b923.ctm'
    },
    1356: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_4.ff66e2.ctm'
    },
    1357: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_5.e7c767.ctm'
    },
    1358: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_6.539703.ctm'
    },
    1359: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_7.0ee007.ctm'
    },
    1360: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_8.f940e9.ctm'
    },
    1361: function (e, t, r) {
      e.exports = r.p + 'Ground_Playable.dd291e.ctm'
    },
    1362: function (e, t, r) {
      e.exports = r.p + 'Ground_SurroundingCity.496e4f.ctm'
    },
    1363: function (e, t, r) {
      e.exports = r.p + 'Ground_SurroundingCity02.ab12a6.ctm'
    },
    1364: function (e, t, r) {
      e.exports = r.p + 'Ground_Water.e8e565.ctm'
    },
    1365: function (e, t, r) {
      e.exports = r.p + 'Landmarks_KrugerSec.1b6bf5.ctm'
    },
    1366: function (e, t, r) {
      e.exports = r.p + 'Landmarks_ac_crystal_valley_building.e9c99a.ctm'
    },
    1367: function (e, t, r) {
      e.exports = r.p + 'Landmarks_ac_eden_village_anansi_emporium.bc9ad7.ctm'
    },
    1368: function (e, t, r) {
      e.exports = r.p + 'Landmarks_ac_eden_village_bauble_mall.853067.ctm'
    },
    1369: function (e, t, r) {
      e.exports = r.p + 'Landmarks_ct_residental_development_zone_g_area03.dda8c4.ctm'
    },
    1370: function (e, t, r) {
      e.exports = r.p + 'Landmarks_dt_centurian_yards_elysium.a7bad2.ctm'
    },
    1371: function (e, t, r) {
      e.exports = r.p + 'Landmarks_dt_triumvirate_drive_kruger_arms.c6ad96.ctm'
    },
    1372: function (e, t, r) {
      e.exports = r.p + 'Landmarks_tv_regatta_bay_area02.88e7bf.ctm'
    },
    1373: function (e, t, r) {
      e.exports = r.p + 'Landmarks_vista_ac_shimmering_heights_allcom_east.d968ae.ctm'
    },
    1374: function (e, t, r) {
      e.exports = r.p + 'Omnistat.cd2d04.ctm'
    },
    1375: function (e, t, r) {
      e.exports = r.p + 'Roads_Close.59c7b6.ctm'
    },
    1376: function (e, t, r) {
      e.exports = r.p + 'VISTA_CityBuildings_Assets.bf9769.ctm'
    },
    1377: function (e, t, r) {
      e.exports = r.p + 'ac_crystal_valley_area02.35f84f.ctm'
    },
    1378: function (e, t, r) {
      e.exports = r.p + 'ac_eden_village_area03.99e1ac.ctm'
    },
    1379: function (e, t, r) {
      e.exports = r.p + 'ac_shimmering_heights_area01.60270d.ctm'
    },
    1380: function (e, t, r) {
      e.exports = r.p + 'ct_omnistat_tunnels_area01.0bf1ee.ctm'
    },
    1381: function (e, t, r) {
      e.exports = r.p + 'ct_residental_development_zone_g_area02.ad55e7.ctm'
    },
    1382: function (e, t, r) {
      e.exports = r.p + 'ct_residental_development_zone_g_area04.3f2111.ctm'
    },
    1383: function (e, t, r) {
      e.exports = r.p + 'ct_residental_development_zone_g_dreams.0553aa.ctm'
    },
    1384: function (e, t, r) {
      e.exports = r.p + 'ct_residental_development_zone_g_gridnode.db405e.ctm'
    },
    1385: function (e, t, r) {
      e.exports = r.p + 'dt_centurian_yards_area06.fd9e7f.ctm'
    },
    1386: function (e, t, r) {
      e.exports = r.p + 'dt_charter_hill_area05.81d0d4.ctm'
    },
    1387: function (e, t, r) {
      e.exports = r.p + 'dt_concord_plaza_area08.7bbadf.ctm'
    },
    1388: function (e, t, r) {
      e.exports = r.p + 'dt_release_into.c9cff8.ctm'
    },
    1389: function (e, t, r) {
      e.exports = r.p + 'dt_triumvirate_drive_area01.68e713.ctm'
    },
    1390: function (e, t, r) {
      e.exports = r.p + 'dt_triumvirate_drive_area02.85cf80.ctm'
    },
    1391: function (e, t, r) {
      e.exports = r.p + 'dt_triumvirate_drive_area03.a97e3e.ctm'
    },
    1392: function (e, t, r) {
      e.exports = r.p + 'dt_triumvirate_drive_area04.27ce50.ctm'
    },
    1393: function (e, t, r) {
      e.exports = r.p + 'skycity01.bd5c3e.ctm'
    },
    1394: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_1_D.aa7d25.png'
    },
    1395: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_2_D.0dc11b.png'
    },
    1396: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_3_D.f231c6.png'
    },
    1397: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_4_D.d59219.png'
    },
    1398: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_5_D.e91545.png'
    },
    1399: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_6_D.800860.png'
    },
    1400: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_7_D.3fbdfc.png';
    },
    1401: function (e, t, r) {
      e.exports = r.p + 'Buildings_Close_8_D.c9f27f.png'
    },
    1402: function (e, t, r) {
      e.exports = r.p + 'Ground_Playable_D.c71e2f.png'
    },
    1403: function (e, t, r) {
      e.exports = r.p + 'Ground_SurroundingCity02_D.2a7451.png'
    },
    1404: function (e, t, r) {
      e.exports = r.p + 'Ground_SurroundingCity_D.2d19d7.png'
    },
    1405: function (e, t, r) {
      e.exports = r.p + 'Ground_Water_D.d82267.png'
    },
    1406: function (e, t, r) {
      e.exports = r.p + 'Landmarks_KrugerSec_D.db6061.png'
    },
    1407: function (e, t, r) {
      e.exports = r.p + 'Landmarks_ac_crystal_valley_building_D.fe71fe.png'
    },
    1408: function (e, t, r) {
      e.exports = r.p + 'Landmarks_ac_eden_village_anansi_emporium_D.ad6d95.png'
    },
    1409: function (e, t, r) {
      e.exports = r.p + 'Landmarks_ac_eden_village_bauble_mall_D.16f17d.png'
    },
    1410: function (e, t, r) {
      e.exports = r.p + 'Landmarks_ct_residental_development_zone_g_area03_D.f35acb.png'
    },
    1411: function (e, t, r) {
      e.exports = r.p + 'Landmarks_dt_centurian_yards_elysium_D.0bf89c.png'
    },
    1412: function (e, t, r) {
      e.exports = r.p + 'Landmarks_dt_triumvirate_drive_kruger_arms_D.0b3d0e.png'
    },
    1413: function (e, t, r) {
      e.exports = r.p + 'Landmarks_tv_regatta_bay_area02_D.78c541.png'
    },
    1414: function (e, t, r) {
      e.exports = r.p + 'Landmarks_vista_ac_shimmering_heights_allcom_east_D.881c2a.png'
    },
    1415: function (e, t, r) {
      e.exports = r.p + 'Omnistat_D.acb4fa.png'
    },
    1416: function (e, t, r) {
      e.exports = r.p + 'Roads_Close_D.3a4cd2.png'
    },
    1417: function (e, t, r) {
      e.exports = r.p + 'VISTA_CityBuildings_Assets_D.db0691.png'
    },
    1418: function (e, t, r) {
      e.exports = r.p + 'ac_crystal_valley_area02_D.3f670e.png'
    },
    1419: function (e, t, r) {
      e.exports = r.p + 'ac_eden_village_area03_D.e66d54.png'
    },
    1420: function (e, t, r) {
      e.exports = r.p + 'ac_shimmering_heights_area01_D.67054d.png'
    },
    1421: function (e, t, r) {
      e.exports = r.p + 'ct_omnistat_tunnels_area01_D.fb9cc3.png'
    },
    1422: function (e, t, r) {
      e.exports = r.p + 'ct_residental_development_zone_g_area02_D.d25a14.png'
    },
    1423: function (e, t, r) {
      e.exports = r.p + 'ct_residental_development_zone_g_area04_D.a562ed.png'
    },
    1424: function (e, t, r) {
      e.exports = r.p + 'ct_residental_development_zone_g_dreams_D.aab6f9.png'
    },
    1425: function (e, t, r) {
      e.exports = r.p + 'ct_residental_development_zone_g_gridnode_D.da7ef1.png'
    },
    1426: function (e, t, r) {
      e.exports = r.p + 'dt_centurian_yards_area06_D.691eaa.png'
    },
    1427: function (e, t, r) {
      e.exports = r.p + 'dt_charter_hill_area05_D.e8a862.png'
    },
    1428: function (e, t, r) {
      e.exports = r.p + 'dt_concord_plaza_area08_D.ab809f.png'
    },
    1429: function (e, t, r) {
      e.exports = r.p + 'dt_release_into_D.dbe3ef.png'
    },
    1430: function (e, t, r) {
      e.exports = r.p + 'dt_triumvirate_drive_area01_D.566f3f.png'
    },
    1431: function (e, t, r) {
      e.exports = r.p + 'dt_triumvirate_drive_area02_D.a09412.png'
    },
    1432: function (e, t, r) {
      e.exports = r.p + 'dt_triumvirate_drive_area03_D.8c2295.png'
    },
    1433: function (e, t, r) {
      e.exports = r.p + 'dt_triumvirate_drive_area04_D.37cf93.png'
    },
    1434: function (e, t, r) {
      e.exports = r.p + 'skycity01_D.3b72e9.png'
    },
    1435: function (e, t, r) {
      e.exports = r.p + 'tv_ocean_pier_area01_D.efb02d.png'
    },
    1436: function (e, t, r) {
      e.exports = r.p + 'tv_ocean_pier_area03_D.3b6f8a.png'
    },
    1437: function (e, t, r) {
      e.exports = r.p + 'tv_regatta_bay_area04_D.18b69e.png'
    },
    1438: function (e, t, r) {
      e.exports = r.p + 'vista_dt_noth_north_D.2b4a6b.png'
    },
    1439: function (e, t, r) {
      e.exports = r.p + 'vista_dt_south_west_D.30438d.png'
    },
    1440: function (e, t, r) {
      e.exports = r.p + 'vista_release_northeast_D.6d3bcb.png'
    },
    1441: function (e, t, r) {
      e.exports = r.p + 'tv_ocean_pier_area01.28cbf4.ctm'
    },
    1442: function (e, t, r) {
      e.exports = r.p + 'tv_ocean_pier_area03.cc6475.ctm'
    },
    1443: function (e, t, r) {
      e.exports = r.p + 'tv_regatta_bay_area04.074ed9.ctm'
    },
    1444: function (e, t, r) {
      e.exports = r.p + 'vista_dt_noth_north.c5f2e3.ctm'
    },
    1445: function (e, t, r) {
      e.exports = r.p + 'vista_dt_south_west.8b78c3.ctm'
    },
    1446: function (e, t, r) {
      e.exports = r.p + 'vista_release_northeast.d5ab19.ctm'
    },
    1453: function (e, t, r) {
      var i = r(13);
      i.BokehPass = function (e, t, r) {
        this.scene = e,
        this.camera = t;
        var n = void 0 !== r.focus ? r.focus : 1,
        o = void 0 !== r.aspect ? r.aspect : t.aspect,
        a = void 0 !== r.aperture ? r.aperture : 0.025,
        s = void 0 !== r.maxblur ? r.maxblur : 1,
        h = r.width ||
        window.innerWidth ||
        1,
        c = r.height ||
        window.innerHeight ||
        1;
        this.renderTargetColor = new i.WebGLRenderTarget(
          h,
          c,
          {
            minFilter: i.LinearFilter,
            magFilter: i.LinearFilter,
            format: i.RGBFormat
          }
        ),
        this.renderTargetDepth = this.renderTargetColor.clone(),
        this.materialDepth = new i.MeshDepthMaterial,
        void 0 === i.BokehShader &&
        console.error('THREE.BokehPass relies on THREE.BokehShader');
        var l = i.BokehShader,
        u = i.UniformsUtils.clone(l.uniforms);
        u.tDepth.value = this.renderTargetDepth,
        u.focus.value = n,
        u.aspect.value = o,
        u.aperture.value = a,
        u.maxblur.value = s,
        this.materialBokeh = new i.ShaderMaterial({
          uniforms: u,
          vertexShader: l.vertexShader,
          fragmentShader: l.fragmentShader
        }),
        this.uniforms = u,
        this.enabled = !0,
        this.needsSwap = !1,
        this.renderToScreen = !1,
        this.clear = !1,
        this.camera2 = new i.OrthographicCamera( - 1, 1, 1, - 1, 0, 1),
        this.scene2 = new i.Scene,
        this.quad2 = new i.Mesh(new i.PlaneBufferGeometry(2, 2), null),
        this.scene2.add(this.quad2)
      },
      i.BokehPass.prototype = {
        render: function (e, t, r, i, n) {
          this.quad2.material = this.materialBokeh,
          this.scene.overrideMaterial = this.materialDepth,
          e.render(this.scene, this.camera, this.renderTargetDepth, !0),
          this.uniforms.tColor.value = r,
          this.renderToScreen ? e.render(this.scene2, this.camera2) : e.render(this.scene2, this.camera2, t, this.clear),
          this.scene.overrideMaterial = null
        }
      }
    },
    1454: function (e, t, r) {
      var i = r(13);
      i.EffectComposer = function (e, t) {
        if (this.renderer = e, void 0 === t) {
          var r = window.innerWidth ||
          1,
          n = window.innerHeight ||
          1,
          o = {
            minFilter: i.LinearFilter,
            magFilter: i.LinearFilter,
            format: i.RGBAFormat,
            stencilBuffer: !1
          };
          t = new i.WebGLRenderTarget(r, n, o)
        }
        this.renderTarget1 = t,
        this.renderTarget2 = t.clone(),
        this.writeBuffer = this.renderTarget1,
        this.readBuffer = this.renderTarget2,
        this.passes = [],
        void 0 === i.CopyShader &&
        console.error('THREE.EffectComposer relies on THREE.CopyShader'),
        this.copyPass = new i.ShaderPass(i.CopyShader)
      },
      i.EffectComposer.prototype = {
        swapBuffers: function () {
          var e = this.readBuffer;
          this.readBuffer = this.writeBuffer,
          this.writeBuffer = e
        },
        addPass: function (e) {
          this.passes.push(e)
        },
        insertPass: function (e, t) {
          this.passes.splice(t, 0, e)
        },
        render: function (e) {
          this.writeBuffer = this.renderTarget1,
          this.readBuffer = this.renderTarget2;
          var t,
          r,
          n = !1,
          o = this.passes.length;
          for (r = 0; o > r; r++) if (t = this.passes[r], t.enabled) {
            if (
              t.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
              t.needsSwap
            ) {
              if (n) {
                var a = this.renderer.context;
                a.stencilFunc(a.NOTEQUAL, 1, 4294967295),
                this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e),
                a.stencilFunc(a.EQUAL, 1, 4294967295)
              }
              this.swapBuffers()
            }
            t instanceof i.MaskPass ? n = !0 : t instanceof i.ClearMaskPass &&
            (n = !1)
          }
        },
        reset: function (e) {
          void 0 === e &&
          (
            e = this.renderTarget1.clone(),
            e.width = window.innerWidth,
            e.height = window.innerHeight
          ),
          this.renderTarget1 = e,
          this.renderTarget2 = e.clone(),
          this.writeBuffer = this.renderTarget1,
          this.readBuffer = this.renderTarget2
        },
        setSize: function (e, t) {
          var r = this.renderTarget1.clone();
          r.width = e,
          r.height = t,
          this.reset(r)
        }
      }
    },
    1455: function (e, t, r) {
      var i = r(13);
      i.MaskPass = function (e, t) {
        this.scene = e,
        this.camera = t,
        this.enabled = !0,
        this.clear = !0,
        this.needsSwap = !1,
        this.inverse = !1
      },
      i.MaskPass.prototype = {
        render: function (e, t, r, i) {
          var n = e.context;
          n.colorMask(!1, !1, !1, !1),
          n.depthMask(!1);
          var o,
          a;
          this.inverse ? (o = 0, a = 1) : (o = 1, a = 0),
          n.enable(n.STENCIL_TEST),
          n.stencilOp(n.REPLACE, n.REPLACE, n.REPLACE),
          n.stencilFunc(n.ALWAYS, o, 4294967295),
          n.clearStencil(a),
          e.render(this.scene, this.camera, r, this.clear),
          e.render(this.scene, this.camera, t, this.clear),
          n.colorMask(!0, !0, !0, !0),
          n.depthMask(!0),
          n.stencilFunc(n.EQUAL, 1, 4294967295),
          n.stencilOp(n.KEEP, n.KEEP, n.KEEP)
        }
      },
      i.ClearMaskPass = function () {
        this.enabled = !0
      },
      i.ClearMaskPass.prototype = {
        render: function (e, t, r, i) {
          var n = e.context;
          n.disable(n.STENCIL_TEST)
        }
      }
    },
    1456: function (e, t, r) {
      function i(e) {
        return e &&
        e.__esModule ? e : {
          'default': e
        }
      }
      var n = r(13),
      o = r(345),
      a = i(o),
      s = r(335),
      h = r(668);
      n.OrbitControls = function (e, t) {
        function r() {
          return - 2 * Math.PI / 60 / 60 * w.autoRotateSpeed * s.getDeltaTime()
        }
        function i() {
          return Math.pow(0.95, w.zoomSpeed)
        }
        function o(e) {
          if (w.enabled !== !1 && w.noMouse !== !0) {
            if (e.preventDefault(), G = !1, W = !0, e.button === w.buttons.ROTATE) {
              if (w.noRotate === !0) return;
              X = j.ROTATE,
              M.set(e.clientX, e.clientY)
            } else if (e.button === w.buttons.DOLLY) {
              if (w.noZoom === !0) return;
              X = j.DOLLY,
              B.set(e.clientX, e.clientY)
            } else if (e.button === w.buttons.PAN) {
              if (w.noPan === !0) return;
              X = j.PAN,
              C.set(e.clientX, e.clientY)
            }
            document.addEventListener('mousemove', a, !1),
            document.addEventListener('mouseup', c, !1),
            w.dispatchEvent($)
          }
        }
        function a(e) {
          if (w.enabled !== !1 && w.noMouse !== !0) {
            e.preventDefault();
            w.domElement === document ? w.domElement.body : w.domElement;
            if (X === j.ROTATE) {
              if (w.rotationalInertia = w.rotationalInertia, w.noRotate === !0) return;
              S.set(e.clientX, e.clientY),
              T.subVectors(S, M),
              w.rotateLeft(2 * Math.PI * T.x / window.innerWidth * w.rotateSpeed),
              w.rotateUp(2 * Math.PI * T.y / window.innerHeight * w.rotateSpeed),
              M.copy(S)
            } else if (X === j.DOLLY) {
              if (w.noZoom === !0) return;
              F.set(e.clientX, e.clientY),
              U.subVectors(F, B),
              Math.abs(U.y) > Math.abs(U.x) &&
              (U.y > 0 ? w.dollyIn() : w.dollyOut()),
              B.copy(F)
            } else if (X === j.PAN) {
              if (w.noPan === !0) return;
              A.set(e.clientX, e.clientY),
              E.subVectors(A, C),
              q.x = E.x,
              q.y = E.y,
              w.pan(E.x, E.y),
              C.copy(A),
              Y = s.getClock().elapsedTime
            }
            w.update()
          }
        }
        function c(e) {
          X === j.ROTATE &&
          (V = k, O = z),
          w.enabled !== !1 &&
          (
            document.removeEventListener('mousemove', a, !1),
            document.removeEventListener('mouseup', c, !1),
            s.getClock().elapsedTime - Y >= 0.1 &&
            (q.x = 0, q.y = 0),
            G === !1 &&
            (W = !1),
            w.dispatchEvent(ee),
            X = j.NONE
          )
        }
        function l(e) {
          w.enabled !== !1 &&
          W &&
          e.preventDefault()
        }
        function u(e) {
          if (w.enabled !== !1 && w.noZoom !== !0) {
            e.preventDefault();
            var t = 0;
            void 0 !== e.wheelDelta ? t = e.wheelDelta : void 0 !== e.detail &&
            (t = - e.detail),
            _ += 0 > t ? 0.01 : - 0.01,
            _ = Math.min(_, 1.05),
            _ = Math.max(_, 0.95),
            w.dispatchEvent($),
            w.dispatchEvent(ee)
          }
        }
        function d(e) {
          var t = {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
          };
          if (1 == e.touches.length) h.addDataPoint(t);
           else if (2 == e.touches.length) {
            var r = {
              x: e.touches[1].pageX,
              y: e.touches[1].pageY
            };
            h.addDataPoint(t, r)
          }
        }
        function f(e) {
          w.enabled !== !1 &&
          w.noTouch !== !0 &&
          (h.flush(), X = j.NONE, d(e), w.dispatchEvent($))
        }
        function p() {
          var e = h.getPreviousPanPoint(),
          t = h.getCurrentPanPoint();
          C.set(e.x, e.y),
          A.set(t.x, t.y),
          E.subVectors(A, C);
          var r = Math.abs(E.x) + Math.abs(E.y) > 0;
          r ? (q.x = E.x, q.y = E.y, Q = !0) : (Q || (q.x = E.x, q.y = E.y), Q = !1),
          w.pan(E.x, E.y),
          K.x = E.x,
          K.y = E.y,
          w.update()
        }
        function m() {
          var e = h.getCurrentFingers(),
          t = h.getPreviousFingers(),
          r = e.fingerA.y - t.fingerA.y,
          i = e.fingerB.y - t.fingerB.y,
          n = (r + i) / 2,
          o = 0.001 * n;
          w.rotateUp(o)
        }
        function v() {
          w.rotationalInertia = w.rotationalInertiaTouch;
          var e,
          t,
          r = h.getCurrentFingers(),
          i = h.getPreviousFingers();
          i.reverse ? (e = i.fingerB.x - i.fingerA.x, t = i.fingerB.y - i.fingerA.y) : (e = i.fingerA.x - i.fingerB.x, t = i.fingerA.y - i.fingerB.y);
          var n,
          o,
          a = Math.atan(t / e);
          r.reverse ? (n = r.fingerB.x - r.fingerA.x, o = r.fingerB.y - r.fingerA.y) : (n = r.fingerA.x - r.fingerB.x, o = r.fingerA.y - r.fingerB.y);
          var s = Math.atan(o / n),
          c = s - a;
          c < - (Math.PI / 2) ? c += Math.PI : c > Math.PI / 2 &&
          (c -= Math.PI),
          Math.abs(c) > 0.001 &&
          w.rotateLeft( - c / Math.PI * 1.1)
        }
        function g() {
          var e,
          t = h.getCurrentFingers(),
          r = h.getPreviousFingers(),
          i = t.fingerA.x - t.fingerB.x,
          n = t.fingerA.y - t.fingerB.y,
          o = Math.sqrt(i * i + n * n),
          a = r.fingerA.x - r.fingerB.x,
          s = r.fingerA.y - r.fingerB.y,
          c = Math.sqrt(a * a + s * s),
          l = 1.01;
          c > o ? (e = c / o, e > l && w.dollyOut(e)) : o > c &&
          (e = o / c, e > l && w.dollyIn(e))
        }
        function y(e) {
          if (w.enabled !== !1 && w.noTouch !== !0) {
            if (e.preventDefault(), e.stopPropagation(), d(e), X === j.NONE) {
              var t = h.getGesture(),
              r = {};
              r[h.gestureTypes.PAN] = j.TOUCH_PAN,
              r[h.gestureTypes.PITCH] = j.TOUCH_PITCH,
              r[h.gestureTypes.ROTATE_AND_ZOOM] = j.TOUCH_ROTATE_DOLLY,
              X = void 0 !== r[t] ? r[t] : j.NONE,
              X === j.TOUCH_PITCH &&
              (M.set(e.touches[0].pageX, e.touches[0].pageY), M.copy(S)),
              j.TOUCH_ROTATE_DOLLY &&
              (M.copy(S), Z = !0)
            }
            switch (X) {
              case j.TOUCH_PAN:
                w.noPan === !1 &&
                p();
                break;
              case j.TOUCH_PITCH:
                w.noRotate === !1 &&
                m();
                break;
              case j.TOUCH_ROTATE_DOLLY:
                w.noRotate === !1 &&
                v(),
                w.noZoom === !1 &&
                g()
            }
          }
        }
        function x() {
          w.dispatchEvent(ee),
          X = j.NONE
        }
        this.object = e,
        this.domElement = void 0 !== t ? t : document,
        this.enabled = !0,
        this.target = new n.Vector3,
        this.center = this.target,
        this.noZoom = !1,
        this.zoomSpeed = 1,
        this.minDistance = 0,
        this.maxDistance = 1 / 0,
        this.noRotate = !1,
        this.rotateSpeed = 1,
        this.noPan = !1,
        this.noPanX = !1,
        this.noPanY = !1,
        this.noPanZ = !1,
        this.keyPanSpeed = 7,
        this.autoRotate = !1,
        this.autoRotateSpeed = 0.5,
        this.autoRotateCancelOnMove = !0,
        this.minPolarAngle = 0,
        this.maxPolarAngle = Math.PI,
        this.rotationalInertia = 0,
        this.rotationalInertiaTouch = 0,
        this.panInertia = 0,
        this.dollyInertia = 0,
        this.noMouse = !1,
        this.buttons = {
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2
        },
        this.noTouch = !1,
        this.cameraBounds = null;
        var _ = 1,
        w = this,
        b = 0.000001,
        M = new n.Vector2,
        S = new n.Vector2,
        T = new n.Vector2,
        C = new n.Vector2,
        A = new n.Vector2,
        E = new n.Vector2,
        P = new n.Vector3,
        D = new n.Vector3,
        L = 0,
        R = 0,
        B = new n.Vector2,
        F = new n.Vector2,
        U = new n.Vector2,
        O = 0,
        V = 0,
        k = 0,
        z = 0,
        N = 1,
        I = new n.Vector3,
        G = !1,
        H = new n.Vector3,
        W = !1,
        j = {
          NONE: - 1,
          ROTATE: 0,
          DOLLY: 1,
          PAN: 2,
          TOUCH_ROTATE_DOLLY: 3,
          TOUCH_PITCH: 4,
          TOUCH_PAN: 5,
          TOUCH_TWOFINGER: 6
        },
        X = j.ROTATE,
        q = new n.Vector2,
        Y = 0,
        K = new n.Vector2,
        Q = !1,
        Z = !0;
        this.target0 = this.target.clone(),
        this.position0 = this.object.position.clone();
        var J = {
          type: 'change'
        },
        $ = {
          type: 'start'
        },
        ee = {
          type: 'end'
        };
        this.rotateLeft = function (e) {
          void 0 === e &&
          (e = r()),
          V -= e
        },
        this.rotateUp = function (e) {
          void 0 === e &&
          (e = r()),
          O -= e
        },
        this.panLeft = function (e) {
          var t = this.object.matrix.elements;
          P.set(this.noPanX ? 0 : t[0], this.noPanY ? 0 : t[1], this.noPanZ ? 0 : t[2]),
          P.multiplyScalar( - e),
          I.add(P)
        },
        this.panUp = function (e) {
          this.noPanY &&
          (e /= Math.cos(L));
          var t = this.object.matrix.elements;
          P.set(this.noPanX ? 0 : t[4], this.noPanY ? 0 : t[5], this.noPanZ ? 0 : t[6]),
          P.multiplyScalar(e),
          I.add(P)
        },
        this.pan = function (e, t) {
          var r = w.domElement === document ? w.domElement.body : w.domElement;
          if (void 0 !== w.object.fov) {
            var i = w.object.position,
            n = i.clone().sub(w.target),
            o = n.length();
            o *= Math.tan(w.object.fov / 2 * Math.PI / 180),
            w.panLeft(2 * e * o / r.clientHeight),
            w.panUp(2 * t * o / r.clientHeight)
          } else void 0 !== w.object.top ? (
            w.panLeft(e * (w.object.right - w.object.left) / r.clientWidth),
            w.panUp(t * (w.object.top - w.object.bottom) / r.clientHeight)
          ) : console.warn(
            'WARNING: THREE.OrbitControls.js encountered an unknown camera type - pan disabled.'
          )
        },
        this.dollyIn = function (e) {
          void 0 === e &&
          (e = i()),
          N /= e
        },
        this.dollyOut = function (e) {
          void 0 === e &&
          (e = i()),
          N *= e
        },
        this.update = function () {
          if (N *= _, 1 > _) {
            var e = 1 + this.dollyInertia;
            _ *= 1 * e + (1 - s.getDeltaTime()),
            _ = Math.min(_, 1)
          } else if (_ > 1) {
            var e = 1 - this.dollyInertia;
            _ *= e * s.getDeltaTime(),
            _ = Math.max(_, 1)
          }
          var t = this.object.position;
          D.copy(t).sub(this.target),
          R = Math.atan2(D.x, D.z),
          L = Math.atan2(Math.sqrt(D.x * D.x + D.z * D.z), D.y),
          this.autoRotate &&
          (
            this.autoRotateCancelOnMove &&
            X != j.ROTATE ? this.autoRotate = !1 : this.rotateLeft(r())
          ),
          R += V,
          L += O,
          L = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, L)),
          L = Math.max(b, Math.min(Math.PI - b, L));
          var i = D.length() * N;
          if (
            i = Math.max(this.minDistance, Math.min(this.maxDistance, i)),
            this.object.userData.radius = i,
            this.target.add(I),
            D.x = i * Math.sin(L) * Math.sin(R),
            D.y = i * Math.cos(L),
            D.z = i * Math.sin(L) * Math.cos(R),
            t.copy(this.target).add(D),
            this.object.lookAt(this.target),
            X != j.ROTATE ? (
              V *= this.rotationalInertia * s.getDeltaTime(),
              O *= this.rotationalInertia * s.getDeltaTime(),
              X == j.PAN &&
              (k = V, z = O, V = 0, O = 0)
            ) : (k = V, z = O, V = 0, O = 0),
            Math.abs(V) <= 0.001 &&
            (V = 0),
            Math.abs(O) <= 0.001 &&
            (O = 0),
            N = 1,
            I.set(0, 0, 0),
            X != j.PAN &&
            X != j.TOUCH_PAN &&
            (
              w.pan(q.x, q.y),
              q.multiplyScalar(
                this.panInertia * s.getDeltaTime(),
                this.panInertia * s.getDeltaTime()
              )
            ),
            Math.abs(q.x) + Math.abs(q.y) <= 0.001 &&
            (q.x = 0, q.y = 0),
            H.distanceTo(this.object.position) > 0.1 &&
            (
              this.dispatchEvent(J),
              H.copy(this.object.position),
              this.state != j.NONE &&
              (G = !0)
            ),
            this.cameraBounds &&
            this.cameraBounds.active
          ) {
            var o = new n.Vector2(this.target.x, this.target.z),
            a = o.distanceTo(this.cameraBounds.centre);
            if (a > this.cameraBounds.max_distance) {
              var h = o.subVectors(o, this.cameraBounds.centre);
              h.normalize(),
              this.target.x = h.x * this.cameraBounds.max_distance + this.cameraBounds.centre.x,
              this.target.z = h.y * this.cameraBounds.max_distance + this.cameraBounds.centre.y
            }
          }
        },
        this.reset = function () {
          X = j.NONE,
          q.x = 0,
          q.y = 0,
          k = 0,
          z = 0,
          this.target.copy(this.target0),
          this.object.position.copy(this.position0),
          h.flush(),
          this.update()
        };
        this.domElement.addEventListener('mousedown', o, !1),
        this.domElement.addEventListener('contextmenu', l, !1),
        this.domElement.addEventListener('mousewheel', u, !1),
        this.domElement.addEventListener('DOMMouseScroll', u, !1),
        this.domElement.addEventListener('touchstart', f, !1),
        this.domElement.addEventListener('touchend', x, !1),
        this.domElement.addEventListener('touchmove', y, !1)
      },
      n.OrbitControls.prototype = (0, a['default']) (n.EventDispatcher.prototype)
    },
    1457: function (e, t, r) {
      var i = r(13);
      i.RenderPass = function (e, t, r, n, o) {
        this.scene = e,
        this.camera = t,
        this.overrideMaterial = r,
        this.clearColor = n,
        this.clearAlpha = void 0 !== o ? o : 1,
        this.oldClearColor = new i.Color,
        this.oldClearAlpha = 1,
        this.enabled = !0,
        this.clear = !0,
        this.needsSwap = !1
      },
      i.RenderPass.prototype = {
        render: function (e, t, r, i) {
          this.scene.overrideMaterial = this.overrideMaterial,
          this.clearColor &&
          (
            this.oldClearColor.copy(e.getClearColor()),
            this.oldClearAlpha = e.getClearAlpha(),
            e.setClearColor(this.clearColor, this.clearAlpha)
          ),
          e.render(this.scene, this.camera, r, this.clear),
          this.clearColor &&
          e.setClearColor(this.oldClearColor, this.oldClearAlpha),
          this.scene.overrideMaterial = null
        }
      }
    },
    1458: function (e, t, r) {
      var i = r(13);
      i.ShaderPass = function (e, t) {
        this.textureID = void 0 !== t ? t : 'tDiffuse',
        this.uniforms = i.UniformsUtils.clone(e.uniforms),
        this.material = new i.ShaderMaterial({
          uniforms: this.uniforms,
          vertexShader: e.vertexShader,
          fragmentShader: e.fragmentShader
        }),
        this.renderToScreen = !1,
        this.enabled = !0,
        this.needsSwap = !0,
        this.clear = !1,
        this.camera = new i.OrthographicCamera( - 1, 1, 1, - 1, 0, 1),
        this.scene = new i.Scene,
        this.quad = new i.Mesh(new i.PlaneBufferGeometry(2, 2), null),
        this.scene.add(this.quad)
      },
      i.ShaderPass.prototype = {
        render: function (e, t, r, i) {
          this.uniforms[this.textureID] &&
          (this.uniforms[this.textureID].value = r),
          this.quad.material = this.material,
          this.renderToScreen ? e.render(this.scene, this.camera) : e.render(this.scene, this.camera, t, this.clear)
        }
      }
    },
    1459: function (e, t, r) {
      function i(e) {
        return e &&
        e.__esModule ? e : {
          'default': e
        }
      }
      var n = r(13),
      o = r(345),
      a = i(o),
      s = r(670),
      h = r(1724);
      n.CTMLoader = function (e) {
        n.Loader.call(this, e)
      },
      n.CTMLoader.prototype = (0, a['default']) (n.Loader.prototype),
      n.CTMLoader.prototype.constructor = n.CTMLoader,
      n.CTMLoader.prototype.loadParts = function (e, t, r) {
        r = r ||
        {
        };
        var i = this,
        n = new XMLHttpRequest,
        o = r.basePath ? r.basePath : this.extractUrlBase(e);
        n.onreadystatechange = function () {
          if (4 === n.readyState && (200 === n.status || 0 === n.status)) {
            for (
              var e = function (e) {
                c += 1,
                h.push(e),
                c === a.offsets.length &&
                t(h, s)
              },
              a = JSON.parse(n.responseText),
              s = [],
              h = [],
              c = 0,
              l = 0;
              l < a.materials.length;
              l++
            ) s[l] = i.createMaterial(a.materials[l], o);
            var u = o + a.data,
            d = {
              useWorker: r.useWorker,
              offsets: a.offsets
            };
            i.load(u, e, d)
          }
        },
        n.open('GET', e, !0),
        n.setRequestHeader('Content-Type', 'text/plain'),
        n.send(null)
      },
      n.CTMLoader.prototype.load = function (e, t, r) {
        r = r ||
        {
        };
        var i = this,
        n = void 0 !== r.offsets ? r.offsets : [
          0
        ],
        o = new XMLHttpRequest,
        a = null,
        c = 0;
        o.onreadystatechange = function () {
          if (4 === o.readyState) if (200 === o.status || 0 === o.status) {
            var l = new Uint8Array(o.response);
            Date.now();
            if (r.useWorker) {
              var u = r.worker ||
              new h;
              u.onmessage = function (e) {
                for (var r = e.data, n = 0; n < r.length; n++) {
                  var o = r[n];
                  i.createModel(o, t)
                }
              },
              u.postMessage({
                data: l,
                offsets: n
              })
            } else for (var d = 0; d < n.length; d++) {
              var f = new s.Stream(l);
              f.offset = n[d];
              var p = new s.File(f);
              i.createModel(p, t)
            }
          } else console.error('Couldn\'t load [' + e + '] [' + o.status + ']');
           else 3 === o.readyState ? a &&
          (
            0 === c &&
            (c = o.getResponseHeader('Content-Length')),
            a({
              total: c,
              loaded: o.responseText.length
            })
          ) : 2 === o.readyState &&
          (c = o.getResponseHeader('Content-Length'))
        },
        o.open('GET', e, !0),
        o.responseType = 'arraybuffer',
        o.send(null)
      },
      n.CTMLoader.prototype.createModel = function (e, t) {
        var r = function () {
          n.BufferGeometry.call(this),
          this.materials = [];
          var t,
          r,
          i = e.body.indices,
          o = e.body.vertices,
          a = e.body.normals,
          s = e.body.uvMaps;
          void 0 !== s &&
          s.length > 0 &&
          (t = s[0].uv);
          var h = e.body.attrMaps;
          void 0 !== h &&
          h.length > 0 &&
          'Color' === h[0].name &&
          (r = h[0].attr),
          this.addAttribute('index', new n.BufferAttribute(i, 1)),
          this.addAttribute('position', new n.BufferAttribute(o, 3)),
          void 0 !== a &&
          this.addAttribute('normal', new n.BufferAttribute(a, 3)),
          void 0 !== t &&
          this.addAttribute('uv', new n.BufferAttribute(t, 2)),
          void 0 !== r &&
          this.addAttribute('color', new n.BufferAttribute(r, 4))
        };
        r.prototype = (0, a['default']) (n.BufferGeometry.prototype),
        r.prototype.constructor = r;
        var i = new r;
        i.computeOffsets(),
        void 0 === i.attributes.normal &&
        i.computeVertexNormals(),
        t(i)
      }
    },
    1460: function (e, t, r) {
      var i = r(13);
      i.BlendShader = {
        uniforms: {
          tDiffuse1: {
            type: 't',
            value: null
          },
          tDiffuse2: {
            type: 't',
            value: null
          },
          mixRatio: {
            type: 'f',
            value: 0.5
          },
          opacity: {
            type: 'f',
            value: 1
          }
        },
        vertexShader: [
          'varying vec2 vUv;',
          'void main() {',
          'vUv = uv;',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform float opacity;',
          'uniform float mixRatio;',
          'uniform sampler2D tDiffuse1;',
          'uniform sampler2D tDiffuse2;',
          'varying vec2 vUv;',
          'void main() {',
          'vec4 texel1 = texture2D( tDiffuse1, vUv );',
          'vec4 texel2 = texture2D( tDiffuse2, vUv );',
          'gl_FragColor = opacity * mix( texel1, texel2, mixRatio );',
          '}'
        ].join('\n')
      }
    },
    1461: function (e, t, r) {
      var i = r(13);
      i.ColoredVignetteShader = {
        uniforms: {
          tDiffuse: {
            type: 't',
            value: null
          },
          offset: {
            type: 'f',
            value: 1
          },
          vignetteRGB: {
            type: 'v3',
            value: new i.Vector3(1, 1, 1)
          }
        },
        vertexShader: [
          'varying vec2 vUv;',
          'void main() {',
          'vUv = uv;',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform float offset;',
          'uniform vec3 vignetteRGB;',
          'uniform sampler2D tDiffuse;',
          'varying vec2 vUv;',
          'void main() {',
          'vec4 texel = texture2D( tDiffuse, vUv );',
          'vec2 uv = ( vUv - vec2( 0.5 ) ) * vec2( offset );',
          'gl_FragColor = vec4( mix( texel.rgb, vignetteRGB, dot( uv, uv ) ), texel.a );',
          '}'
        ].join('\n')
      }
    },
    1462: function (e, t, r) {
      var i = r(13);
      i.CopyShader = {
        uniforms: {
          tDiffuse: {
            type: 't',
            value: null
          },
          opacity: {
            type: 'f',
            value: 1
          }
        },
        vertexShader: [
          'varying vec2 vUv;',
          'void main() {',
          'vUv = uv;',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform float opacity;',
          'uniform sampler2D tDiffuse;',
          'varying vec2 vUv;',
          'void main() {',
          'vec4 texel = texture2D( tDiffuse, vUv );',
          'gl_FragColor = opacity * texel;',
          '}'
        ].join('\n')
      }
    },
    1463: function (e, t, r) {
      var i = r(13);
      i.DofHorizontalShader = {
        uniforms: {
          tDiffuse: {
            type: 't',
            value: 0,
            texture: null
          },
          tDepth: {
            type: 't',
            value: 1,
            texture: null
          },
          focus: {
            type: 'f',
            value: 1
          },
          maxblur: {
            type: 'f',
            value: 1
          },
          h: {
            type: 'f',
            value: 1 / 512
          }
        },
        vertexShader: [
          'varying vec2 vUv;',
          'void main() {',
          'vUv = vec2( uv.x, uv.y );',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform sampler2D tDiffuse;',
          'uniform sampler2D tDepth;',
          'uniform float focus;',
          'uniform float maxblur;',
          'uniform float h;',
          'varying vec2 vUv;',
          'void main() {',
          'float hf = h * maxblur * (abs(texture2D(tDepth, vUv).x) - focus);',
          'vec4 sum = vec4( 0.0 );',
          'sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hf, vUv.y ) ) * 0.051;',
          'sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hf, vUv.y ) ) * 0.0918;',
          'sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hf, vUv.y ) ) * 0.12245;',
          'sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hf, vUv.y ) ) * 0.1531;',
          'sum += texture2D( tDiffuse, vec2( vUv.x,            vUv.y ) ) * 0.1633;',
          'sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hf, vUv.y ) ) * 0.1531;',
          'sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hf, vUv.y ) ) * 0.12245;',
          'sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hf, vUv.y ) ) * 0.0918;',
          'sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hf, vUv.y ) ) * 0.051;',
          'gl_FragColor = sum;',
          '}'
        ].join('\n')
      }
    },
    1464: function (e, t, r) {
      var i = r(13);
      i.DofVerticalShader = {
        uniforms: {
          tDiffuse: {
            type: 't',
            value: 0,
            texture: null
          },
          tDepth: {
            type: 't',
            value: 1,
            texture: null
          },
          focus: {
            type: 'f',
            value: 1
          },
          maxblur: {
            type: 'f',
            value: 1
          },
          v: {
            type: 'f',
            value: 1 / 512
          }
        },
        vertexShader: [
          'varying vec2 vUv;',
          'void main() {',
          'vUv = vec2( uv.x, uv.y );',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform sampler2D tDiffuse;',
          'uniform sampler2D tDepth;',
          'uniform float focus;',
          'uniform float maxblur;',
          'uniform float v;',
          'varying vec2 vUv;',
          'void main() {',
          'float vf = v * maxblur * (abs(texture2D(tDepth, vUv).y) - focus);',
          'vec4 sum = vec4( 0.0 );',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vf ) ) * 0.051;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vf ) ) * 0.0918;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vf ) ) * 0.12245;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vf ) ) * 0.1531;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y            ) ) * 0.1633;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vf ) ) * 0.1531;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vf ) ) * 0.12245;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vf ) ) * 0.0918;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vf ) ) * 0.051;',
          'gl_FragColor = sum;',
          '}'
        ].join('\n')
      }
    },
    1465: function (e, t, r) {
      var i = r(13);
      i.HorizontalTiltShiftShader = {
        uniforms: {
          tDiffuse: {
            type: 't',
            value: null
          },
          h: {
            type: 'f',
            value: 1 / 512
          },
          top: {
            type: 'f',
            value: 0.5
          },
          bottom: {
            type: 'f',
            value: 0.5
          },
          left: {
            type: 'f',
            value: 0.8
          },
          right: {
            type: 'f',
            value: 0.2
          }
        },
        vertexShader: [
          'varying vec2 vUv;',
          'void main() {',
          'vUv = uv;',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform sampler2D tDiffuse;',
          'uniform float h;',
          'uniform float top;',
          'uniform float bottom;',
          'uniform float left;',
          'uniform float right;',
          'varying vec2 vUv;',
          'void main() {',
          'vec4 sum = vec4( 0.0 );',
          'float hh = h * ( clamp( vUv.y - top, 0.0, 1.0 ) + clamp( bottom - vUv.y, 0.0, 1.0 ) + clamp( vUv.x - left, 0.0, 1.0 ) + clamp( right - vUv.x, 0.0, 1.0 ) );',
          'sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;',
          'sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;',
          'sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;',
          'sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;',
          'sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;',
          'sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;',
          'sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;',
          'sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;',
          'gl_FragColor = sum;',
          '}'
        ].join('\n')
      }
    },
    1466: function (e, t, r) {
      var i = r(13);
      i.OverlayShader = {
        uniforms: {
          tDiffuse1: {
            type: 't',
            value: null
          },
          tDiffuse2: {
            type: 't',
            value: null
          },
          opacity: {
            type: 'f',
            value: 1
          }
        },
        vertexShader: [
          'varying vec2 vUv;',
          'void main() {',
          'vUv = uv;',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform float opacity;',
          'uniform sampler2D tDiffuse1;',
          'uniform sampler2D tDiffuse2;',
          'varying vec2 vUv;',
          'void main() {',
          'vec4 texel1 = texture2D( tDiffuse1, vUv );',
          'vec4 texel2 = texture2D( tDiffuse2, vUv );',
          'vec4 sum;',
          'if (texel2.a > 0.0) {',
          'texel2.rgb = texel2.rgb / texel2.a;',
          'sum.rgb = mix(texel1.rgb, texel2.rgb, texel2.a * opacity);',
          'sum.a = clamp(texel1.a + (texel2.a * opacity), 0.0, 1.0);',
          '} else {',
          'sum = texel1;',
          '}',
          'gl_FragColor = sum;',
          '}'
        ].join('\n')
      }
    },
    1467: function (e, t, r) {
      var i = r(13);
      i.VerticalTiltShiftShader = {
        uniforms: {
          tDiffuse: {
            type: 't',
            value: null
          },
          v: {
            type: 'f',
            value: 1 / 512
          },
          top: {
            type: 'f',
            value: 0.5
          },
          bottom: {
            type: 'f',
            value: 0.5
          },
          left: {
            type: 'f',
            value: 0.8
          },
          right: {
            type: 'f',
            value: 0.2
          }
        },
        vertexShader: [
          'varying vec2 vUv;',
          'void main() {',
          'vUv = uv;',
          'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
          '}'
        ].join('\n'),
        fragmentShader: [
          'uniform sampler2D tDiffuse;',
          'uniform float v;',
          'uniform float top;',
          'uniform float bottom;',
          'uniform float left;',
          'uniform float right;',
          'varying vec2 vUv;',
          'void main() {',
          'vec4 sum = vec4( 0.0 );',
          'float vv = v * ( clamp( vUv.y - top, 0.0, 1.0 ) + clamp( bottom - vUv.y, 0.0, 1.0 ) + clamp( vUv.x - left, 0.0, 1.0 ) + clamp( right - vUv.x, 0.0, 1.0 ) );',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;',
          'sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;',
          'gl_FragColor = sum;',
          '}'
        ].join('\n')
      }
    },
    1693: function (e, t, r) {
      var i = function () {
        function e(e, t, r) {
          var i = document.createElement(e);
          return i.id = t,
          i.style.cssText = r,
          i
        }
        function t(t, r, i) {
          var n = e('div', t, 'padding:0 0 3px 3px;text-align:left;background:' + i),
          o = e(
            'div',
            t + 'Text',
            'font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:' + r
          );
          o.innerHTML = t.toUpperCase(),
          n.appendChild(o);
          var a = e('div', t + 'Graph', 'width:74px;height:30px;background:' + r);
          n.appendChild(a);
          for (var s = 0; 74 > s; s++) a.appendChild(
            e(
              'span',
              '',
              'width:1px;height:30px;float:left;opacity:0.9;background:' + i
            )
          );
          return n
        }
        function r(e) {
          for (var t = c.children, r = 0; r < t.length; r++) t[r].style.display = r === e ? 'block' : 'none';
          h = e
        }
        function i(e, t) {
          var r = e.appendChild(e.firstChild);
          r.style.height = Math.min(30, 30 - 30 * t) + 'px'
        }
        var n = self.performance &&
        self.performance.now ? self.performance.now.bind(performance) : Date.now,
        o = n(),
        a = o,
        s = 0,
        h = 0,
        c = e('div', 'stats', 'width:80px;opacity:0.9;cursor:pointer');
        c.addEventListener(
          'mousedown',
          function (e) {
            e.preventDefault(),
            r(++h % c.children.length)
          },
          !1
        );
        var l = 0,
        u = 1 / 0,
        d = 0,
        f = t('fps', '#0ff', '#002'),
        p = f.children[0],
        m = f.children[1];
        c.appendChild(f);
        var v = 0,
        g = 1 / 0,
        y = 0,
        x = t('ms', '#0f0', '#020'),
        _ = x.children[0],
        w = x.children[1];
        if (c.appendChild(x), self.performance && self.performance.memory) {
          var b = 0,
          M = 1 / 0,
          S = 0,
          T = t('mb', '#f08', '#201'),
          C = T.children[0],
          A = T.children[1];
          c.appendChild(T)
        }
        return r(h),
        {
          REVISION: 14,
          domElement: c,
          setMode: r,
          begin: function () {
            o = n()
          },
          end: function () {
            var e = n();
            if (
              v = e - o,
              g = Math.min(g, v),
              y = Math.max(y, v),
              _.textContent = (0 | v) + ' MS (' + (0 | g) + '-' + (0 | y) + ')',
              i(w, v / 200),
              s++,
              e > a + 1000 &&
              (
                l = Math.round(1000 * s / (e - a)),
                u = Math.min(u, l),
                d = Math.max(d, l),
                p.textContent = l + ' FPS (' + u + '-' + d + ')',
                i(m, l / 100),
                a = e,
                s = 0,
                void 0 !== b
              )
            ) {
              var t = performance.memory.usedJSHeapSize,
              r = performance.memory.jsHeapSizeLimit;
              b = Math.round(9.54e-7 * t),
              M = Math.min(M, b),
              S = Math.max(S, b),
              C.textContent = b + ' MB (' + M + '-' + S + ')',
              i(A, t / r)
            }
            return e
          },
          update: function () {
            o = this.end()
          }
        }
      };
      e.exports = i
    },
    1723: function (e, t) {
      var r = window.URL ||
      window.webkitURL;
      e.exports = function (e, t) {
        try {
          try {
            var i;
            try {
              i = new Blob([e], {
                type: 'application/javascript'
              })
            } catch (n) {
              var o = window.BlobBuilder ||
              window.WebKitBlobBuilder ||
              window.MozBlobBuilder ||
              window.MSBlobBuilder;
              i = new o,
              i.append(e),
              i = i.getBlob()
            }
            return new Worker(r.createObjectURL(i))
          } catch (n) {
            return new Worker('data:application/javascript,' + encodeURIComponent(e))
          }
        } catch (n) {
          return new Worker(t);
        }
      }
    },
    1724: function (e, t, r) {
      e.exports = function () {
        return r(1723) (
          '!function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";var o=r(15);onmessage=function(e){for(var t=[],r=0;r<e.data.offsets.length;r++){var n=new o.Stream(e.data.data);n.offset=e.data.offsets[r],t[r]=new o.File(n)}self.postMessage(t),self.close()}},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t,r){var o=r(27),n=r(22);e.exports=function(e){return o(n(e))}},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e){return e&&"undefined"!=typeof _Symbol&&e.constructor===_Symbol?"symbol":typeof e}t.__esModule=!0;var i=r(17),s=o(i);t["default"]=function(e){return e&&"undefined"!=typeof s["default"]&&e.constructor===s["default"]?"symbol":"undefined"==typeof e?"undefined":n(e)}},function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t,r){e.exports=!r(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,r){var o=r(2),n="__core-js_shared__",i=o[n]||(o[n]={});e.exports=function(e){return i[e]||(i[e]={})}},function(e,t){var r=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+o).toString(36))}},function(e,t,r){var o=r(11)("wks"),n=r(12),i=r(2).Symbol;e.exports=function(e){return o[e]||(o[e]=i&&i[e]||(i||n)("Symbol."+e))}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var o=r(4),n=t(o),i=r(16),s=s||{};"object"===(0,n["default"])(e)&&(e.exports=s),s.CompressionMethod={RAW:5718354,MG1:3229517,MG2:3295053},s.Flags={NORMALS:1},s.File=function(e){this.load(e)},s.File.prototype.load=function(e){this.header=new s.FileHeader(e),this.body=new s.FileBody(this.header),this.getReader().read(e,this.body)},s.File.prototype.getReader=function(){var e;switch(this.header.compressionMethod){case s.CompressionMethod.RAW:e=new s.ReaderRAW;break;case s.CompressionMethod.MG1:e=new s.ReaderMG1;break;case s.CompressionMethod.MG2:e=new s.ReaderMG2}return e},s.FileHeader=function(e){e.readInt32(),this.fileFormat=e.readInt32(),this.compressionMethod=e.readInt32(),this.vertexCount=e.readInt32(),this.triangleCount=e.readInt32(),this.uvMapCount=e.readInt32(),this.attrMapCount=e.readInt32(),this.flags=e.readInt32(),this.comment=e.readString()},s.FileHeader.prototype.hasNormals=function(){return this.flags&s.Flags.NORMALS},s.FileBody=function(e){var t=3*e.triangleCount,r=3*e.vertexCount,o=e.hasNormals()?3*e.vertexCount:0,n=2*e.vertexCount,i=4*e.vertexCount,s=0,a=new ArrayBuffer(4*(t+r+o+n*e.uvMapCount+i*e.attrMapCount));if(this.indices=new Uint32Array(a,0,t),this.vertices=new Float32Array(a,4*t,r),e.hasNormals()&&(this.normals=new Float32Array(a,4*(t+r),o)),e.uvMapCount)for(this.uvMaps=[],s=0;s<e.uvMapCount;++s)this.uvMaps[s]={uv:new Float32Array(a,4*(t+r+o+s*n),n)};if(e.attrMapCount)for(this.attrMaps=[],s=0;s<e.attrMapCount;++s)this.attrMaps[s]={attr:new Float32Array(a,4*(t+r+o+n*e.uvMapCount+s*i),i)}},s.FileMG2Header=function(e){e.readInt32(),this.vertexPrecision=e.readFloat32(),this.normalPrecision=e.readFloat32(),this.lowerBoundx=e.readFloat32(),this.lowerBoundy=e.readFloat32(),this.lowerBoundz=e.readFloat32(),this.higherBoundx=e.readFloat32(),this.higherBoundy=e.readFloat32(),this.higherBoundz=e.readFloat32(),this.divx=e.readInt32(),this.divy=e.readInt32(),this.divz=e.readInt32(),this.sizex=(this.higherBoundx-this.lowerBoundx)/this.divx,this.sizey=(this.higherBoundy-this.lowerBoundy)/this.divy,this.sizez=(this.higherBoundz-this.lowerBoundz)/this.divz},s.ReaderRAW=function(){},s.ReaderRAW.prototype.read=function(e,t){this.readIndices(e,t.indices),this.readVertices(e,t.vertices),t.normals&&this.readNormals(e,t.normals),t.uvMaps&&this.readUVMaps(e,t.uvMaps),t.attrMaps&&this.readAttrMaps(e,t.attrMaps)},s.ReaderRAW.prototype.readIndices=function(e,t){e.readInt32(),e.readArrayInt32(t)},s.ReaderRAW.prototype.readVertices=function(e,t){e.readInt32(),e.readArrayFloat32(t)},s.ReaderRAW.prototype.readNormals=function(e,t){e.readInt32(),e.readArrayFloat32(t)},s.ReaderRAW.prototype.readUVMaps=function(e,t){for(var r=0;r<t.length;++r)e.readInt32(),t[r].name=e.readString(),t[r].filename=e.readString(),e.readArrayFloat32(t[r].uv)},s.ReaderRAW.prototype.readAttrMaps=function(e,t){for(var r=0;r<t.length;++r)e.readInt32(),t[r].name=e.readString(),e.readArrayFloat32(t[r].attr)},s.ReaderMG1=function(){},s.ReaderMG1.prototype.read=function(e,t){this.readIndices(e,t.indices),this.readVertices(e,t.vertices),t.normals&&this.readNormals(e,t.normals),t.uvMaps&&this.readUVMaps(e,t.uvMaps),t.attrMaps&&this.readAttrMaps(e,t.attrMaps)},s.ReaderMG1.prototype.readIndices=function(e,t){e.readInt32(),e.readInt32();var r=new s.InterleavedStream(t,3);i.decompress(e,e,r,r.data.length),s.restoreIndices(t,t.length)},s.ReaderMG1.prototype.readVertices=function(e,t){e.readInt32(),e.readInt32();var r=new s.InterleavedStream(t,1);i.decompress(e,e,r,r.data.length)},s.ReaderMG1.prototype.readNormals=function(e,t){e.readInt32(),e.readInt32();var r=new s.InterleavedStream(t,3);i.decompress(e,e,r,r.data.length)},s.ReaderMG1.prototype.readUVMaps=function(e,t){for(var r=0;r<t.length;++r){e.readInt32(),t[r].name=e.readString(),t[r].filename=e.readString(),e.readInt32();var o=new s.InterleavedStream(t[r].uv,2);i.decompress(e,e,o,o.data.length)}},s.ReaderMG1.prototype.readAttrMaps=function(e,t){for(var r=0;r<t.length;++r){e.readInt32(),t[r].name=e.readString(),e.readInt32();var o=new s.InterleavedStream(t[r].attr,4);i.decompress(e,e,o,o.data.length)}},s.ReaderMG2=function(){},s.ReaderMG2.prototype.read=function(e,t){this.MG2Header=new s.FileMG2Header(e),this.readVertices(e,t.vertices),this.readIndices(e,t.indices),t.normals&&this.readNormals(e,t),t.uvMaps&&this.readUVMaps(e,t.uvMaps),t.attrMaps&&this.readAttrMaps(e,t.attrMaps)},s.ReaderMG2.prototype.readVertices=function(e,t){e.readInt32(),e.readInt32();var r=new s.InterleavedStream(t,3);i.decompress(e,e,r,r.data.length);var o=this.readGridIndices(e,t);s.restoreVertices(t,this.MG2Header,o,this.MG2Header.vertexPrecision)},s.ReaderMG2.prototype.readGridIndices=function(e,t){e.readInt32(),e.readInt32();var r=new Uint32Array(t.length/3),o=new s.InterleavedStream(r,1);return i.decompress(e,e,o,o.data.length),s.restoreGridIndices(r,r.length),r},s.ReaderMG2.prototype.readIndices=function(e,t){e.readInt32(),e.readInt32();var r=new s.InterleavedStream(t,3);i.decompress(e,e,r,r.data.length),s.restoreIndices(t,t.length)},s.ReaderMG2.prototype.readNormals=function(e,t){e.readInt32(),e.readInt32();var r=new s.InterleavedStream(t.normals,3);i.decompress(e,e,r,r.data.length);var o=s.calcSmoothNormals(t.indices,t.vertices);s.restoreNormals(t.normals,o,this.MG2Header.normalPrecision)},s.ReaderMG2.prototype.readUVMaps=function(e,t){for(var r=0;r<t.length;++r){e.readInt32(),t[r].name=e.readString(),t[r].filename=e.readString();var o=e.readFloat32();e.readInt32();var n=new s.InterleavedStream(t[r].uv,2);i.decompress(e,e,n,n.data.length),s.restoreMap(t[r].uv,2,o)}},s.ReaderMG2.prototype.readAttrMaps=function(e,t){for(var r=0;r<t.length;++r){e.readInt32(),t[r].name=e.readString();var o=e.readFloat32();e.readInt32();var n=new s.InterleavedStream(t[r].attr,4);i.decompress(e,e,n,n.data.length),s.restoreMap(t[r].attr,4,o)}},s.restoreIndices=function(e,t){var r=3;for(t>0&&(e[2]+=e[0],e[1]+=e[0]);t>r;r+=3)e[r]+=e[r-3],e[r]===e[r-3]?e[r+1]+=e[r-2]:e[r+1]+=e[r],e[r+2]+=e[r]},s.restoreGridIndices=function(e,t){for(var r=1;t>r;++r)e[r]+=e[r-1]},s.restoreVertices=function(e,t,r,o){for(var n,i,s,a,d,c=new Uint32Array(e.buffer,e.byteOffset,e.length),h=t.divx,u=h*t.divy,f=2147483647,p=0,l=0,_=0,y=r.length;y>l;_+=3)s=n=r[l++],d=~~(s/u),s-=~~(d*u),a=~~(s/h),s-=~~(a*h),i=c[_],n===f&&(i+=p),e[_]=t.lowerBoundx+s*t.sizex+o*i,e[_+1]=t.lowerBoundy+a*t.sizey+o*c[_+1],e[_+2]=t.lowerBoundz+d*t.sizez+o*c[_+2],f=n,p=i},s.restoreNormals=function(e,t,r){for(var o,n,i,s,a,d,c,h,u,f,p=new Uint32Array(e.buffer,e.byteOffset,e.length),l=0,_=e.length,y=1.5707963267948966;_>l;l+=3)o=p[l]*r,n=p[l+1],0===n?(e[l]=t[l]*o,e[l+1]=t[l+1]*o,e[l+2]=t[l+2]*o):(i=4>=n?(p[l+2]-2)*y:(4*p[l+2]/n-2)*y,n*=r*y,s=o*Math.sin(n),a=s*Math.cos(i),d=s*Math.sin(i),c=o*Math.cos(n),u=t[l+1],h=t[l]-t[l+2],f=Math.sqrt(2*u*u+h*h),f>1e-20&&(h/=f,u/=f),e[l]=t[l]*c+(t[l+1]*u-t[l+2]*h)*d-u*a,e[l+1]=t[l+1]*c-(t[l+2]+t[l])*u*d+h*a,e[l+2]=t[l+2]*c+(t[l]*h+t[l+1]*u)*d+u*a)},s.restoreMap=function(e,t,r){for(var o,n,i,s=new Uint32Array(e.buffer,e.byteOffset,e.length),a=0,d=e.length;t>a;++a)for(o=0,i=a;d>i;i+=t)n=s[i],o+=1&n?-(n+1>>1):n>>1,e[i]=o*r},s.calcSmoothNormals=function(e,t){var r,o,n,i,s,a,d,c,h,u,f,p,l,_,y,m=new Float32Array(t.length);for(_=0,y=e.length;y>_;)r=3*e[_++],o=3*e[_++],n=3*e[_++],d=t[o]-t[r],u=t[n]-t[r],c=t[o+1]-t[r+1],f=t[n+1]-t[r+1],h=t[o+2]-t[r+2],p=t[n+2]-t[r+2],i=c*p-h*f,s=h*u-d*p,a=d*f-c*u,l=Math.sqrt(i*i+s*s+a*a),l>1e-10&&(i/=l,s/=l,a/=l),m[r]+=i,m[r+1]+=s,m[r+2]+=a,m[o]+=i,m[o+1]+=s,m[o+2]+=a,m[n]+=i,m[n+1]+=s,m[n+2]+=a;for(_=0,y=m.length;y>_;_+=3)l=Math.sqrt(m[_]*m[_]+m[_+1]*m[_+1]+m[_+2]*m[_+2]),l>1e-10&&(m[_]/=l,m[_+1]/=l,m[_+2]/=l);return m},s.isLittleEndian=function(){var e=new ArrayBuffer(2),t=new Uint8Array(e),r=new Uint16Array(e);return t[0]=1,1===r[0]}(),s.InterleavedStream=function(e,t){this.data=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),this.offset=s.isLittleEndian?3:0,this.count=4*t,this.len=this.data.length},s.InterleavedStream.prototype.writeByte=function(e){this.data[this.offset]=e,this.offset+=this.count,this.offset>=this.len&&(this.offset-=this.len-4,this.offset>=this.count&&(this.offset-=this.count+(s.isLittleEndian?1:-1)))},s.Stream=function(e){this.data=e,this.offset=0},s.Stream.prototype.TWO_POW_MINUS23=Math.pow(2,-23),s.Stream.prototype.TWO_POW_MINUS126=Math.pow(2,-126),s.Stream.prototype.readByte=function(){return 255&this.data[this.offset++]},s.Stream.prototype.readInt32=function(){var e=this.readByte();return e|=this.readByte()<<8,e|=this.readByte()<<16,e|this.readByte()<<24},s.Stream.prototype.readFloat32=function(){var e=this.readByte();e+=this.readByte()<<8;var t=this.readByte(),r=this.readByte();e+=(127&t)<<16;var o=(127&r)<<1|(128&t)>>>7,n=128&r?-1:1;return 255===o?0!==e?NaN:n*(1/0):o>0?n*(1+e*this.TWO_POW_MINUS23)*Math.pow(2,o-127):0!==e?n*e*this.TWO_POW_MINUS126:0*n},s.Stream.prototype.readString=function(){var e=this.readInt32();return this.offset+=e,String.fromCharCode.apply(null,this.data.subarray(this.offset-e,this.offset))},s.Stream.prototype.readArrayInt32=function(e){for(var t=0,r=e.length;r>t;)e[t++]=this.readInt32();return e},s.Stream.prototype.readArrayFloat32=function(e){for(var t=0,r=e.length;r>t;)e[t++]=this.readFloat32();return e}}).call(t,r(14)(e))},function(e,t,r){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var o=r(4),n=t(o),i=i||{};"object"===(0,n["default"])(e)&&(e.exports=i),i.OutWindow=function(){this._windowSize=0},i.OutWindow.prototype.create=function(e){this._buffer&&this._windowSize===e||(this._buffer=[]),this._windowSize=e,this._pos=0,this._streamPos=0},i.OutWindow.prototype.flush=function(){var e=this._pos-this._streamPos;if(0!==e){for(;e--;)this._stream.writeByte(this._buffer[this._streamPos++]);this._pos>=this._windowSize&&(this._pos=0),this._streamPos=this._pos}},i.OutWindow.prototype.releaseStream=function(){this.flush(),this._stream=null},i.OutWindow.prototype.setStream=function(e){this.releaseStream(),this._stream=e},i.OutWindow.prototype.init=function(e){e||(this._streamPos=0,this._pos=0)},i.OutWindow.prototype.copyBlock=function(e,t){var r=this._pos-e-1;for(0>r&&(r+=this._windowSize);t--;)r>=this._windowSize&&(r=0),this._buffer[this._pos++]=this._buffer[r++],this._pos>=this._windowSize&&this.flush()},i.OutWindow.prototype.putByte=function(e){this._buffer[this._pos++]=e,this._pos>=this._windowSize&&this.flush()},i.OutWindow.prototype.getByte=function(e){var t=this._pos-e-1;return 0>t&&(t+=this._windowSize),this._buffer[t]},i.RangeDecoder=function(){},i.RangeDecoder.prototype.setStream=function(e){this._stream=e},i.RangeDecoder.prototype.releaseStream=function(){this._stream=null},i.RangeDecoder.prototype.init=function(){var e=5;for(this._code=0,this._range=-1;e--;)this._code=this._code<<8|this._stream.readByte()},i.RangeDecoder.prototype.decodeDirectBits=function(e){for(var t,r=0,o=e;o--;)this._range>>>=1,t=this._code-this._range>>>31,this._code-=this._range&t-1,r=r<<1|1-t,0===(4278190080&this._range)&&(this._code=this._code<<8|this._stream.readByte(),this._range<<=8);return r},i.RangeDecoder.prototype.decodeBit=function(e,t){var r=e[t],o=(this._range>>>11)*r;return(2147483648^this._code)<(2147483648^o)?(this._range=o,e[t]+=2048-r>>>5,0===(4278190080&this._range)&&(this._code=this._code<<8|this._stream.readByte(),this._range<<=8),0):(this._range-=o,this._code-=o,e[t]-=r>>>5,0===(4278190080&this._range)&&(this._code=this._code<<8|this._stream.readByte(),this._range<<=8),1)},i.initBitModels=function(e,t){for(;t--;)e[t]=1024},i.BitTreeDecoder=function(e){this._models=[],this._numBitLevels=e},i.BitTreeDecoder.prototype.init=function(){i.initBitModels(this._models,1<<this._numBitLevels)},i.BitTreeDecoder.prototype.decode=function(e){for(var t=1,r=this._numBitLevels;r--;)t=t<<1|e.decodeBit(this._models,t);return t-(1<<this._numBitLevels)},i.BitTreeDecoder.prototype.reverseDecode=function(e){for(var t,r=1,o=0,n=0;n<this._numBitLevels;++n)t=e.decodeBit(this._models,r),r=r<<1|t,o|=t<<n;return o},i.reverseDecode2=function(e,t,r,o){for(var n,i=1,s=0,a=0;o>a;++a)n=r.decodeBit(e,t+i),i=i<<1|n,s|=n<<a;return s},i.LenDecoder=function(){this._choice=[],this._lowCoder=[],this._midCoder=[],this._highCoder=new i.BitTreeDecoder(8),this._numPosStates=0},i.LenDecoder.prototype.create=function(e){for(;this._numPosStates<e;++this._numPosStates)this._lowCoder[this._numPosStates]=new i.BitTreeDecoder(3),this._midCoder[this._numPosStates]=new i.BitTreeDecoder(3)},i.LenDecoder.prototype.init=function(){var e=this._numPosStates;for(i.initBitModels(this._choice,2);e--;)this._lowCoder[e].init(),this._midCoder[e].init();this._highCoder.init()},i.LenDecoder.prototype.decode=function(e,t){return 0===e.decodeBit(this._choice,0)?this._lowCoder[t].decode(e):0===e.decodeBit(this._choice,1)?8+this._midCoder[t].decode(e):16+this._highCoder.decode(e)},i.Decoder2=function(){this._decoders=[]},i.Decoder2.prototype.init=function(){i.initBitModels(this._decoders,768)},i.Decoder2.prototype.decodeNormal=function(e){var t=1;do t=t<<1|e.decodeBit(this._decoders,t);while(256>t);return 255&t},i.Decoder2.prototype.decodeWithMatchByte=function(e,t){var r,o,n=1;do if(r=t>>7&1,t<<=1,o=e.decodeBit(this._decoders,(1+r<<8)+n),n=n<<1|o,r!==o){for(;256>n;)n=n<<1|e.decodeBit(this._decoders,n);break}while(256>n);return 255&n},i.LiteralDecoder=function(){},i.LiteralDecoder.prototype.create=function(e,t){var r;if(!this._coders||this._numPrevBits!==t||this._numPosBits!==e)for(this._numPosBits=e,this._posMask=(1<<e)-1,this._numPrevBits=t,this._coders=[],r=1<<this._numPrevBits+this._numPosBits;r--;)this._coders[r]=new i.Decoder2},i.LiteralDecoder.prototype.init=function(){for(var e=1<<this._numPrevBits+this._numPosBits;e--;)this._coders[e].init()},i.LiteralDecoder.prototype.getDecoder=function(e,t){return this._coders[((e&this._posMask)<<this._numPrevBits)+((255&t)>>>8-this._numPrevBits)]},i.Decoder=function(){this._outWindow=new i.OutWindow,this._rangeDecoder=new i.RangeDecoder,this._isMatchDecoders=[],this._isRepDecoders=[],this._isRepG0Decoders=[],this._isRepG1Decoders=[],this._isRepG2Decoders=[],this._isRep0LongDecoders=[],this._posSlotDecoder=[],this._posDecoders=[],this._posAlignDecoder=new i.BitTreeDecoder(4),this._lenDecoder=new i.LenDecoder,this._repLenDecoder=new i.LenDecoder,this._literalDecoder=new i.LiteralDecoder,this._dictionarySize=-1,this._dictionarySizeCheck=-1,this._posSlotDecoder[0]=new i.BitTreeDecoder(6),this._posSlotDecoder[1]=new i.BitTreeDecoder(6),this._posSlotDecoder[2]=new i.BitTreeDecoder(6),this._posSlotDecoder[3]=new i.BitTreeDecoder(6)},i.Decoder.prototype.setDictionarySize=function(e){return 0>e?!1:(this._dictionarySize!==e&&(this._dictionarySize=e,this._dictionarySizeCheck=Math.max(this._dictionarySize,1),this._outWindow.create(Math.max(this._dictionarySizeCheck,4096))),!0)},i.Decoder.prototype.setLcLpPb=function(e,t,r){var o=1<<r;return e>8||t>4||r>4?!1:(this._literalDecoder.create(t,e),this._lenDecoder.create(o),this._repLenDecoder.create(o),this._posStateMask=o-1,!0)},i.Decoder.prototype.init=function(){var e=4;for(this._outWindow.init(!1),i.initBitModels(this._isMatchDecoders,192),i.initBitModels(this._isRep0LongDecoders,192),i.initBitModels(this._isRepDecoders,12),i.initBitModels(this._isRepG0Decoders,12),i.initBitModels(this._isRepG1Decoders,12),i.initBitModels(this._isRepG2Decoders,12),i.initBitModels(this._posDecoders,114),this._literalDecoder.init();e--;)this._posSlotDecoder[e].init();this._lenDecoder.init(),this._repLenDecoder.init(),this._posAlignDecoder.init(),this._rangeDecoder.init()},i.Decoder.prototype.decode=function(e,t,r){var o,n,s,a,d,c,h=0,u=0,f=0,p=0,l=0,_=0,y=0;for(this._rangeDecoder.setStream(e),this._outWindow.setStream(t),this.init();0>r||r>_;)if(o=_&this._posStateMask,0===this._rangeDecoder.decodeBit(this._isMatchDecoders,(h<<4)+o))n=this._literalDecoder.getDecoder(_++,y),y=h>=7?n.decodeWithMatchByte(this._rangeDecoder,this._outWindow.getByte(u)):n.decodeNormal(this._rangeDecoder),this._outWindow.putByte(y),h=4>h?0:h-(10>h?3:6);else{if(1===this._rangeDecoder.decodeBit(this._isRepDecoders,h))s=0,0===this._rangeDecoder.decodeBit(this._isRepG0Decoders,h)?0===this._rangeDecoder.decodeBit(this._isRep0LongDecoders,(h<<4)+o)&&(h=7>h?9:11,s=1):(0===this._rangeDecoder.decodeBit(this._isRepG1Decoders,h)?a=f:(0===this._rangeDecoder.decodeBit(this._isRepG2Decoders,h)?a=p:(a=l,l=p),p=f),f=u,u=a),0===s&&(s=2+this._repLenDecoder.decode(this._rangeDecoder,o),h=7>h?8:11);else if(l=p,p=f,f=u,s=2+this._lenDecoder.decode(this._rangeDecoder,o),h=7>h?7:10,d=this._posSlotDecoder[5>=s?s-2:3].decode(this._rangeDecoder),d>=4){if(c=(d>>1)-1,u=(2|1&d)<<c,14>d)u+=i.reverseDecode2(this._posDecoders,u-d-1,this._rangeDecoder,c);else if(u+=this._rangeDecoder.decodeDirectBits(c-4)<<4,u+=this._posAlignDecoder.reverseDecode(this._rangeDecoder),0>u){if(-1===u)break;return!1}}else u=d;if(u>=_||u>=this._dictionarySizeCheck)return!1;this._outWindow.copyBlock(u,s),_+=s,y=this._outWindow.getByte(0)}return this._outWindow.flush(),this._outWindow.releaseStream(),this._rangeDecoder.releaseStream(),!0},i.Decoder.prototype.setDecoderProperties=function(e){var t,r,o,n,i;return e.size<5?!1:(t=e.readByte(),r=t%9,t=~~(t/9),o=t%5,n=~~(t/5),this.setLcLpPb(r,o,n)?(i=e.readByte(),i|=e.readByte()<<8,i|=e.readByte()<<16,i+=16777216*e.readByte(),this.setDictionarySize(i)):!1)},i.decompress=function(e,t,r,o){var n=new i.Decoder;if(!n.setDecoderProperties(e))throw"Incorrect stream properties";if(!n.decode(t,r,o))throw"Error in data stream";return!0}}).call(t,r(14)(e))},function(e,t,r){e.exports={"default":r(18),__esModule:!0}},function(e,t,r){r(35),r(34),e.exports=r(6).Symbol},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,r){var o=r(29);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t,r){var o=r(19);e.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can\'t call method on  "+e);return e}},function(e,t,r){var o=r(1);e.exports=function(e){var t=o.getKeys(e),r=o.getSymbols;if(r)for(var n,i=r(e),s=o.isEnum,a=0;i.length>a;)s.call(e,n=i[a++])&&t.push(n);return t}},function(e,t,r){var o=r(2),n=r(6),i=r(21),s="prototype",a=function(e,t,r){var d,c,h,u=e&a.F,f=e&a.G,p=e&a.S,l=e&a.P,_=e&a.B,y=e&a.W,m=f?n:n[t]||(n[t]={}),v=f?o:p?o[t]:(o[t]||{})[s];f&&(r=t);for(d in r)c=!u&&v&&d in v,c&&d in m||(h=c?v[d]:r[d],m[d]=f&&"function"!=typeof v[d]?r[d]:_&&c?i(h,o):y&&v[d]==h?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[s]=e[s],t}(h):l&&"function"==typeof h?i(Function.call,h):h,l&&((m[s]||(m[s]={}))[d]=h))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,e.exports=a},function(e,t,r){var o=r(3),n=r(1).getNames,i={}.toString,s="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return n(e)}catch(t){return s.slice()}};e.exports.get=function(e){return s&&"[object Window]"==i.call(e)?a(e):n(o(e))}},function(e,t,r){var o=r(1),n=r(10);e.exports=r(7)?function(e,t,r){return o.setDesc(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},function(e,t,r){var o=r(5);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t,r){var o=r(5);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,r){var o=r(1),n=r(3);e.exports=function(e,t){for(var r,i=n(e),s=o.getKeys(i),a=s.length,d=0;a>d;)if(i[r=s[d++]]===t)return r}},function(e,t){e.exports=!0},function(e,t,r){e.exports=r(26)},function(e,t,r){var o=r(1).setDesc,n=r(9),i=r(13)("toStringTag");e.exports=function(e,t,r){e&&!n(e=r?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},function(e,t){},function(e,t,r){"use strict";var o=r(1),n=r(2),i=r(9),s=r(7),a=r(24),d=r(32),c=r(8),h=r(11),u=r(33),f=r(12),p=r(13),l=r(30),_=r(25),y=r(23),m=r(28),v=r(20),g=r(3),w=r(10),D=o.getDesc,M=o.setDesc,S=o.create,B=_.get,b=n.Symbol,I=n.JSON,R=I&&I.stringify,x=!1,P=p("_hidden"),O=o.isEnum,A=h("symbol-registry"),W=h("symbols"),F="function"==typeof b,G=Object.prototype,C=s&&c(function(){return 7!=S(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(e,t,r){var o=D(G,t);o&&delete G[t],M(e,t,r),o&&e!==G&&M(G,t,o)}:M,z=function(e){var t=W[e]=S(b.prototype);return t._k=e,s&&x&&C(G,e,{configurable:!0,set:function(t){i(this,P)&&i(this[P],e)&&(this[P][e]=!1),C(this,e,w(1,t))}}),t},N=function(e){return"symbol"==typeof e},L=function(e,t,r){return r&&i(W,t)?(r.enumerable?(i(e,P)&&e[P][t]&&(e[P][t]=!1),r=S(r,{enumerable:w(0,!1)})):(i(e,P)||M(e,P,w(1,{})),e[P][t]=!0),C(e,t,r)):M(e,t,r)},T=function(e,t){v(e);for(var r,o=y(t=g(t)),n=0,i=o.length;i>n;)L(e,r=o[n++],t[r]);return e},k=function(e,t){return void 0===t?S(e):T(S(e),t)},U=function(e){var t=O.call(this,e);return t||!i(this,e)||!i(W,e)||i(this,P)&&this[P][e]?t:!0},j=function(e,t){var r=D(e=g(e),t);return!r||!i(W,t)||i(e,P)&&e[P][t]||(r.enumerable=!0),r},E=function(e){for(var t,r=B(g(e)),o=[],n=0;r.length>n;)i(W,t=r[n++])||t==P||o.push(t);return o},V=function(e){for(var t,r=B(g(e)),o=[],n=0;r.length>n;)i(W,t=r[n++])&&o.push(W[t]);return o},H=function(e){if(void 0!==e&&!N(e)){for(var t,r,o=[e],n=1,i=arguments;i.length>n;)o.push(i[n++]);return t=o[1],"function"==typeof t&&(r=t),!r&&m(t)||(t=function(e,t){return r&&(t=r.call(this,e,t)),N(t)?void 0:t}),o[1]=t,R.apply(I,o)}},J=c(function(){var e=b();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))});F||(b=function(){if(N(this))throw TypeError("Symbol is not a constructor");return z(f(arguments.length>0?arguments[0]:void 0))},d(b.prototype,"toString",function(){return this._k}),N=function(e){return e instanceof b},o.create=k,o.isEnum=U,o.getDesc=j,o.setDesc=L,o.setDescs=T,o.getNames=_.get=E,o.getSymbols=V,s&&!r(31)&&d(G,"propertyIsEnumerable",U,!0));var q={"for":function(e){return i(A,e+="")?A[e]:A[e]=b(e)},keyFor:function(e){return l(A,e)},useSetter:function(){x=!0},useSimple:function(){x=!1}};o.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=p(e);q[e]=F?t:z(t)}),x=!0,a(a.G+a.W,{Symbol:b}),a(a.S,"Symbol",q),a(a.S+a.F*!F,"Object",{create:k,defineProperty:L,defineProperties:T,getOwnPropertyDescriptor:j,getOwnPropertyNames:E,getOwnPropertySymbols:V}),I&&a(a.S+a.F*(!F||J),"JSON",{stringify:H}),u(b,"Symbol"),u(Math,"Math",!0),u(n.JSON,"JSON",!0)}]);',
          r.p + '42766b.worker.js'
        )
      }
    }
  }
);
