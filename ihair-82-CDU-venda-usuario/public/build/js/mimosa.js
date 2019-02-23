/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  function(a, b, c) {
    function d(c) {
      var d = b.console;
      f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
    }

    function e(b, c, e, f) {
      if (Object.defineProperty) try {
        return void Object.defineProperty(b, c, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return d(f), e
          },
          set: function(a) {
            d(f), e = a
          }
        })
      } catch (g) {}
      a._definePropertyBroken = !0, b[c] = e
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
      f = {}, a.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", {
        size: 1
      }).attr("size") && a.attrFn,
      h = a.attr,
      i = a.attrHooks.value && a.attrHooks.value.get || function() {
        return null
      },
      j = a.attrHooks.value && a.attrHooks.value.set || function() {
        return c
      },
      k = /^(?:input|button)$/i,
      l = /^[238]$/,
      m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
      var j = e.toLowerCase(),
        o = b && b.nodeType;
      return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
        get: function(b, d) {
          var e, f = a.prop(b, d);
          return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
        },
        set: function(b, c, d) {
          var e;
          return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
      }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
    }, a.attrHooks.value = {
      get: function(a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
      },
      set: function(a, b) {
        var c = (a.nodeName || "").toLowerCase();
        return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
      }
    };
    var o, p, q = a.fn.init,
      r = a.find,
      s = a.parseJSON,
      t = /^\s*</,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, e, f) {
      var g, h;
      return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
    }, a.fn.init.prototype = a.fn, a.find = function(a) {
      var b = Array.prototype.slice.call(arguments);
      if ("string" == typeof a && u.test(a)) try {
        document.querySelector(a)
      } catch (c) {
        a = a.replace(v, function(a, b, c, d) {
          return "[" + b + c + '"' + d + '"]'
        });
        try {
          document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
        } catch (e) {
          d("Attribute selector with '#' was not fixed: " + b[0])
        }
      }
      return r.apply(this, b)
    };
    var x;
    for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    a.parseJSON = function(a) {
      return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
    }, a.uaMatch = function(a) {
      a = a.toLowerCase();
      var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
      return {
        browser: b[1] || "",
        version: b[2] || "0"
      }
    }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
      function b(a, c) {
        return new b.fn.init(a, c)
      }
      a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
        var f = a.fn.init.call(this, d, e, c);
        return f instanceof b ? f : b(f)
      }, b.fn.init.prototype = b.fn;
      var c = b(document);
      return d("jQuery.sub() is deprecated"), b
    }, a.fn.size = function() {
      return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var y = !1;
    a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
      var d = a.cssHooks[c] && a.cssHooks[c].get;
      d && (a.cssHooks[c].get = function() {
        var a;
        return y = !0, a = d.apply(this, arguments), y = !1, a
      })
    }), a.swap = function(a, b, c, e) {
      var f, g, h = {};
      y || d("jQuery.swap() is undocumented and deprecated");
      for (g in b) h[g] = a.style[g], a.style[g] = b[g];
      f = c.apply(a, e || []);
      for (g in b) a.style[g] = h[g];
      return f
    }, a.ajaxSetup({
      converters: {
        "text json": a.parseJSON
      }
    });
    var z = a.fn.data;
    a.fn.data = function(b) {
      var e, f, g = this[0];
      return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
    };
    var A = /\/(java|ecma)script/i;
    a.clean || (a.clean = function(b, c, e, f) {
      c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
      var g, h, i, j, k = [];
      if (a.merge(k, a.buildFragment(b, c).childNodes), e)
        for (i = function(a) {
            return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
          }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
      return k
    });
    var B = a.event.add,
      C = a.event.remove,
      D = a.event.trigger,
      E = a.fn.toggle,
      F = a.fn.live,
      G = a.fn.die,
      H = a.fn.load,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      J = new RegExp("\\b(?:" + I + ")\\b"),
      K = /(?:^|\s)hover(\.\S+|)\b/,
      L = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
      };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
      a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
    }, a.event.remove = function(a, b, c, d, e) {
      C.call(this, a, L(b) || "", c, d, e)
    }, a.each(["load", "unload", "error"], function(b, c) {
      a.fn[c] = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
      }
    }), a.fn.toggle = function(b, c) {
      if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
      d("jQuery.fn.toggle(handler, handler...) is deprecated");
      var e = arguments,
        f = b.guid || a.guid++,
        g = 0,
        h = function(c) {
          var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
          return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
        };
      for (h.guid = f; g < e.length;) e[g++].guid = f;
      return this.click(h)
    }, a.fn.live = function(b, c, e) {
      return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
    }, a.fn.die = function(b, c) {
      return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
    }, a.event.trigger = function(a, b, c, e) {
      return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
    }, a.each(I.split("|"), function(b, c) {
      a.event.special[c] = {
        setup: function() {
          var b = this;
          return b !== document && (a.event.add(document, c + "." + a.guid, function() {
            a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
          }), a._data(this, c, a.guid++)), !1
        },
        teardown: function() {
          return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
        }
      }
    }), a.event.special.ready = {
      setup: function() {
        this === document && d("'ready' event is deprecated")
      }
    };
    var M = a.fn.andSelf || a.fn.addBack,
      N = a.fn.find;
    if (a.fn.andSelf = function() {
        return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
      }, a.fn.find = function(a) {
        var b = N.apply(this, arguments);
        return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
      }, a.Callbacks) {
      var O = a.Deferred,
        P = [
          ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
          ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
          ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
        ];
      a.Deferred = function(b) {
        var c = O(),
          e = c.promise();
        return c.pipe = e.pipe = function() {
          var b = arguments;
          return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
            a.each(P, function(f, g) {
              var h = a.isFunction(b[f]) && b[f];
              c[g[1]](function() {
                var b = h && h.apply(this, arguments);
                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
              })
            }), b = null
          }).promise()
        }, c.isResolved = function() {
          return d("deferred.isResolved is deprecated"), "resolved" === c.state()
        }, c.isRejected = function() {
          return d("deferred.isRejected is deprecated"), "rejected" === c.state()
        }, b && b.call(c, c), c
      }
    }
  }(jQuery, window);

/*!
 * WooCommerce Add to Cart JS
 */
jQuery(function(a){return"undefined"!=typeof wc_add_to_cart_params&&(a(document).on("click",".add_to_cart_button",function(){var b=a(this);if(b.is(".ajax_add_to_cart")){if(!b.attr("data-product_id"))return!0;b.removeClass("added"),b.addClass("loading");var c={};return a.each(b.data(),function(a,b){c[a]=b}),a(document.body).trigger("adding_to_cart",[b,c]),a.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),c,function(c){if(c)return c.error&&c.product_url?void(window.location=c.product_url):"yes"===wc_add_to_cart_params.cart_redirect_after_add?void(window.location=wc_add_to_cart_params.cart_url):void a(document.body).trigger("added_to_cart",[c.fragments,c.cart_hash,b])}),!1}return!0}),void a(document.body).on("added_to_cart",function(b,c,d,e){var f=window.location.toString().replace("add-to-cart","added-to-cart");e="undefined"!=typeof e&&e,e&&e.removeClass("loading"),c&&a.each(c,function(b){a(b).addClass("updating")}),a(".shop_table.cart, .updating, .cart_totals").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}}),e&&(e.addClass("added"),wc_add_to_cart_params.is_cart||0!==e.parent().find(".added_to_cart").length||e.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>")),c&&(a.each(c,function(b,c){a(b).replaceWith(c)}),a(document.body).trigger("wc_fragments_loaded")),a(".widget_shopping_cart, .updating").stop(!0).css("opacity","1").unblock(),a(".shop_table.cart").load(f+" .shop_table.cart:eq(0) > *",function(){a(".shop_table.cart").stop(!0).css("opacity","1").unblock(),a(document.body).trigger("cart_page_refreshed")}),a(".cart_totals").load(f+" .cart_totals:eq(0) > *",function(){a(".cart_totals").stop(!0).css("opacity","1").unblock()})}))});
window.jQuery( document ).ready( function ( $ ) {
	$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.addClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.addClass( 'vc-woocommerce-add-to-cart-loading' )
			.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
	} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
		if ( 'undefined' === typeof($button) ) {
			$button = $( '.vc-gitem-add-to-cart-loading-btn' );
		}
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.removeClass( 'vc-woocommerce-add-to-cart-loading' )
			.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
	} );
} );

// Generated by CoffeeScript 1.6.2
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
  var t = [].indexOf || function(t) {
      for (var e = 0, n = this.length; e < n; e++) {
        if (e in this && this[e] === t) return e
      }
      return -1
    },
    e = [].slice;
  (function(t, e) {
    if (typeof define === "function" && define.amd) {
      return define("waypoints", ["jquery"], function(n) {
        return e(n, t)
      })
    } else {
      return e(t.jQuery, t)
    }
  })(this, function(n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, "ontouchstart") >= 0;
    s = {
      horizontal: {},
      vertical: {}
    };
    f = 1;
    a = {};
    u = "waypoints-context-id";
    p = "resize.waypoints";
    y = "scroll.waypoints";
    v = 1;
    w = "waypoints-waypoint-ids";
    g = "waypoint";
    m = "waypoints";
    o = function() {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = "context" + f++;
        this.oldScroll = {
          x: t.scrollLeft(),
          y: t.scrollTop()
        };
        this.waypoints = {
          horizontal: {},
          vertical: {}
        };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function() {
          var t;
          if (!(e.didScroll || c)) {
            e.didScroll = true;
            t = function() {
              e.doScroll();
              return e.didScroll = false
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle)
          }
        });
        t.bind(p, function() {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function() {
              n[m]("refresh");
              return e.didResize = false
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle)
          }
        })
      }
      t.prototype.doScroll = function() {
        var t, e = this;
        t = {
          horizontal: {
            newScroll: this.$element.scrollLeft(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left"
          },
          vertical: {
            newScroll: this.$element.scrollTop(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up"
          }
        };
        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]("refresh")
        }
        n.each(t, function(t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function(t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e)
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e)
            }
          });
          l.sort(function(t, e) {
            return t.offset - e.offset
          });
          if (!o) {
            l.reverse()
          }
          return n.each(l, function(t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i])
            }
          })
        });
        return this.oldScroll = {
          x: t.horizontal.newScroll,
          y: t.vertical.newScroll
        }
      };
      t.prototype.refresh = function() {
        var t, e, r, i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
          }
        };
        return n.each(t, function(t, e) {
          return n.each(i.waypoints[t], function(t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element)
            } else if (typeof i === "string") {
              i = parseFloat(i);
              if (r.options.offset.indexOf("%") > -1) {
                i = Math.ceil(e.contextDimension * i / 100)
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if (r.options.onlyOnScroll && l != null || !r.enabled) {
              return
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward])
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward])
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward])
            }
          })
        })
      };
      t.prototype.checkEmpty = function() {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(" "));
          return delete a[this.id]
        }
      };
      return t
    }();
    l = function() {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === "bottom-in-view") {
          r.offset = function() {
            var t;
            t = n[m]("viewportHeight");
            if (!n.isWindow(e.element)) {
              t = e.$element.height()
            }
            return t - n(this).outerHeight()
          }
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? "horizontal" : "vertical";
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = "waypoints" + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i)
      }
      t.prototype.trigger = function(t) {
        if (!this.enabled) {
          return
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t)
        }
        if (this.options.triggerOnce) {
          return this.destroy()
        }
      };
      t.prototype.disable = function() {
        return this.enabled = false
      };
      t.prototype.enable = function() {
        this.context.refresh();
        return this.enabled = true
      };
      t.prototype.destroy = function() {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty()
      };
      t.getWaypointsByElement = function(t) {
        var e, r;
        r = n(t).data(w);
        if (!r) {
          return []
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function(t) {
          return e[t]
        })
      };
      return t
    }();
    d = {
      init: function(t, e) {
        var r;
        if (e == null) {
          e = {}
        }
        if ((r = e.handler) == null) {
          e.handler = t
        }
        this.each(function() {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i)
          }
          i = n(i);
          r = a[i.data(u)];
          if (!r) {
            r = new o(i)
          }
          return new l(t, r, e)
        });
        n[m]("refresh");
        return this
      },
      disable: function() {
        return d._invoke(this, "disable")
      },
      enable: function() {
        return d._invoke(this, "enable")
      },
      destroy: function() {
        return d._invoke(this, "destroy")
      },
      prev: function(t, e) {
        return d._traverse.call(this, t, e, function(t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1])
          }
        })
      },
      next: function(t, e) {
        return d._traverse.call(this, t, e, function(t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1])
          }
        })
      },
      _traverse: function(t, e, i) {
        var o, l;
        if (t == null) {
          t = "vertical"
        }
        if (e == null) {
          e = r
        }
        l = h.aggregate(e);
        o = [];
        this.each(function() {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t])
        });
        return this.pushStack(o)
      },
      _invoke: function(t, e) {
        t.each(function() {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function(t, n) {
            n[e]();
            return true
          })
        });
        return this
      }
    };
    n.fn[g] = function() {
      var t, r;
      r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (d[r]) {
        return d[r].apply(this, t)
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments)
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r])
      } else if (!r) {
        return n.error("jQuery Waypoints needs a callback function or handler option.")
      } else {
        return n.error("The " + r + " method does not exist in jQuery Waypoints.")
      }
    };
    n.fn[g].defaults = {
      context: r,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };
    h = {
      refresh: function() {
        return n.each(a, function(t, e) {
          return e.refresh()
        })
      },
      viewportHeight: function() {
        var t;
        return (t = r.innerHeight) != null ? t : i.height()
      },
      aggregate: function(t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
        }
        if (!e) {
          return []
        }
        r = {
          horizontal: [],
          vertical: []
        };
        n.each(r, function(t, i) {
          n.each(e[t], function(t, e) {
            return i.push(e)
          });
          i.sort(function(t, e) {
            return t.offset - e.offset
          });
          r[t] = n.map(i, function(t) {
            return t.element
          });
          return r[t] = n.unique(r[t])
        });
        return r
      },
      above: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "vertical", function(t, e) {
          return e.offset <= t.oldScroll.y
        })
      },
      below: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "vertical", function(t, e) {
          return e.offset > t.oldScroll.y
        })
      },
      left: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "horizontal", function(t, e) {
          return e.offset <= t.oldScroll.x
        })
      },
      right: function(t) {
        if (t == null) {
          t = r
        }
        return h._filter(t, "horizontal", function(t, e) {
          return e.offset > t.oldScroll.x
        })
      },
      enable: function() {
        return h._invoke("enable")
      },
      disable: function() {
        return h._invoke("disable")
      },
      destroy: function() {
        return h._invoke("destroy")
      },
      extendFn: function(t, e) {
        return d[t] = e
      },
      _invoke: function(t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function(e, n) {
          n[t]();
          return true
        })
      },
      _filter: function(t, e, r) {
        var i, o;
        i = a[n(t).data(u)];
        if (!i) {
          return []
        }
        o = [];
        n.each(i.waypoints[e], function(t, e) {
          if (r(i, e)) {
            return o.push(e)
          }
        });
        o.sort(function(t, e) {
          return t.offset - e.offset
        });
        return n.map(o, function(t) {
          return t.element
        })
      }
    };
    n[m] = function() {
      var t, n;
      n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
      if (h[n]) {
        return h[n].apply(null, t)
      } else {
        return h.aggregate.call(null, n)
      }
    };
    n[m].settings = {
      resizeThrottle: 100,
      scrollThrottle: 30
    };
    return i.load(function() {
      return n[m]("refresh")
    })
  })
}).call(this);

/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

! function(a) {
  var b = function() {
      "use strict";
      return {
        isMsie: function() {
          return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
        },
        isBlankString: function(a) {
          return !a || /^\s*$/.test(a)
        },
        escapeRegExChars: function(a) {
          return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        isString: function(a) {
          return "string" == typeof a
        },
        isNumber: function(a) {
          return "number" == typeof a
        },
        isArray: a.isArray,
        isFunction: a.isFunction,
        isObject: a.isPlainObject,
        isUndefined: function(a) {
          return "undefined" == typeof a
        },
        toStr: function(a) {
          return b.isUndefined(a) || null === a ? "" : a + ""
        },
        bind: a.proxy,
        each: function(b, c) {
          function d(a, b) {
            return c(b, a)
          }
          a.each(b, d)
        },
        map: a.map,
        filter: a.grep,
        every: function(b, c) {
          var d = !0;
          return b ? (a.each(b, function(a, e) {
            return (d = c.call(null, e, a, b)) ? void 0 : !1
          }), !!d) : d
        },
        some: function(b, c) {
          var d = !1;
          return b ? (a.each(b, function(a, e) {
            return (d = c.call(null, e, a, b)) ? !1 : void 0
          }), !!d) : d
        },
        mixin: a.extend,
        getUniqueId: function() {
          var a = 0;
          return function() {
            return a++
          }
        }(),
        templatify: function(b) {
          function c() {
            return String(b)
          }
          return a.isFunction(b) ? b : c
        },
        defer: function(a) {
          setTimeout(a, 0)
        },
        debounce: function(a, b, c) {
          var d, e;
          return function() {
            var f, g, h = this,
              i = arguments;
            return f = function() {
              d = null, c || (e = a.apply(h, i))
            }, g = c && !d, clearTimeout(d), d = setTimeout(f, b), g && (e = a.apply(h, i)), e
          }
        },
        throttle: function(a, b) {
          var c, d, e, f, g, h;
          return g = 0, h = function() {
              g = new Date, e = null, f = a.apply(c, d)
            },
            function() {
              var i = new Date,
                j = b - (i - g);
              return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
            }
        },
        noop: function() {}
      }
    }(),
    c = "0.10.5",
    d = function() {
      "use strict";

      function a(a) {
        return a = b.toStr(a), a ? a.split(/\s+/) : []
      }

      function c(a) {
        return a = b.toStr(a), a ? a.split(/\W+/) : []
      }

      function d(a) {
        return function() {
          var c = [].slice.call(arguments, 0);
          return function(d) {
            var e = [];
            return b.each(c, function(c) {
              e = e.concat(a(b.toStr(d[c])))
            }), e
          }
        }
      }
      return {
        nonword: c,
        whitespace: a,
        obj: {
          nonword: d(c),
          whitespace: d(a)
        }
      }
    }(),
    e = function() {
      "use strict";

      function c(c) {
        this.maxSize = b.isNumber(c) ? c : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = a.noop)
      }

      function d() {
        this.head = this.tail = null
      }

      function e(a, b) {
        this.key = a, this.val = b, this.prev = this.next = null
      }
      return b.mixin(c.prototype, {
        set: function(a, b) {
          var c, d = this.list.tail;
          this.size >= this.maxSize && (this.list.remove(d), delete this.hash[d.key]), (c = this.hash[a]) ? (c.val = b, this.list.moveToFront(c)) : (c = new e(a, b), this.list.add(c), this.hash[a] = c, this.size++)
        },
        get: function(a) {
          var b = this.hash[a];
          return b ? (this.list.moveToFront(b), b.val) : void 0
        },
        reset: function() {
          this.size = 0, this.hash = {}, this.list = new d
        }
      }), b.mixin(d.prototype, {
        add: function(a) {
          this.head && (a.next = this.head, this.head.prev = a), this.head = a, this.tail = this.tail || a
        },
        remove: function(a) {
          a.prev ? a.prev.next = a.next : this.head = a.next, a.next ? a.next.prev = a.prev : this.tail = a.prev
        },
        moveToFront: function(a) {
          this.remove(a), this.add(a)
        }
      }), c
    }(),
    f = function() {
      "use strict";

      function a(a) {
        this.prefix = ["__", a, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + b.escapeRegExChars(this.prefix))
      }

      function c() {
        return (new Date).getTime()
      }

      function d(a) {
        return JSON.stringify(b.isUndefined(a) ? null : a)
      }

      function e(a) {
        return JSON.parse(a)
      }
      var f, g;
      try {
        f = window.localStorage, f.setItem("~~~", "!"), f.removeItem("~~~")
      } catch (h) {
        f = null
      }
      return g = f && window.JSON ? {
        _prefix: function(a) {
          return this.prefix + a
        },
        _ttlKey: function(a) {
          return this._prefix(a) + this.ttlKey
        },
        get: function(a) {
          return this.isExpired(a) && this.remove(a), e(f.getItem(this._prefix(a)))
        },
        set: function(a, e, g) {
          return b.isNumber(g) ? f.setItem(this._ttlKey(a), d(c() + g)) : f.removeItem(this._ttlKey(a)), f.setItem(this._prefix(a), d(e))
        },
        remove: function(a) {
          return f.removeItem(this._ttlKey(a)), f.removeItem(this._prefix(a)), this
        },
        clear: function() {
          var a, b, c = [],
            d = f.length;
          for (a = 0; d > a; a++)(b = f.key(a)).match(this.keyMatcher) && c.push(b.replace(this.keyMatcher, ""));
          for (a = c.length; a--;) this.remove(c[a]);
          return this
        },
        isExpired: function(a) {
          var d = e(f.getItem(this._ttlKey(a)));
          return b.isNumber(d) && c() > d ? !0 : !1
        }
      } : {
        get: b.noop,
        set: b.noop,
        remove: b.noop,
        clear: b.noop,
        isExpired: b.noop
      }, b.mixin(a.prototype, g), a
    }(),
    g = function() {
      "use strict";

      function c(b) {
        b = b || {}, this.cancelled = !1, this.lastUrl = null, this._send = b.transport ? d(b.transport) : a.ajax, this._get = b.rateLimiter ? b.rateLimiter(this._get) : this._get, this._cache = b.cache === !1 ? new e(0) : i
      }

      function d(c) {
        return function(d, e) {
          function f(a) {
            b.defer(function() {
              h.resolve(a)
            })
          }

          function g(a) {
            b.defer(function() {
              h.reject(a)
            })
          }
          var h = a.Deferred();
          return c(d, e, f, g), h
        }
      }
      var f = 0,
        g = {},
        h = 6,
        i = new e(10);
      return c.setMaxPendingRequests = function(a) {
        h = a
      }, c.resetCache = function() {
        i.reset()
      }, b.mixin(c.prototype, {
        _get: function(a, b, c) {
          function d(b) {
            c && c(null, b), k._cache.set(a, b)
          }

          function e() {
            c && c(!0)
          }

          function i() {
            f--, delete g[a], k.onDeckRequestArgs && (k._get.apply(k, k.onDeckRequestArgs), k.onDeckRequestArgs = null)
          }
          var j, k = this;
          this.cancelled || a !== this.lastUrl || ((j = g[a]) ? j.done(d).fail(e) : h > f ? (f++, g[a] = this._send(a, b).done(d).fail(e).always(i)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
        },
        get: function(a, c, d) {
          var e;
          return b.isFunction(c) && (d = c, c = {}), this.cancelled = !1, this.lastUrl = a, (e = this._cache.get(a)) ? b.defer(function() {
            d && d(null, e)
          }) : this._get(a, c, d), !!e
        },
        cancel: function() {
          this.cancelled = !0
        }
      }), c
    }(),
    h = function() {
      "use strict";

      function c(b) {
        b = b || {}, b.datumTokenizer && b.queryTokenizer || a.error("datumTokenizer and queryTokenizer are both required"), this.datumTokenizer = b.datumTokenizer, this.queryTokenizer = b.queryTokenizer, this.reset()
      }

      function d(a) {
        return a = b.filter(a, function(a) {
          return !!a
        }), a = b.map(a, function(a) {
          return a.toLowerCase()
        })
      }

      function e() {
        return {
          ids: [],
          children: {}
        }
      }

      function f(a) {
        for (var b = {}, c = [], d = 0, e = a.length; e > d; d++) b[a[d]] || (b[a[d]] = !0, c.push(a[d]));
        return c
      }

      function g(a, b) {
        function c(a, b) {
          return a - b
        }
        var d = 0,
          e = 0,
          f = [];
        a = a.sort(c), b = b.sort(c);
        for (var g = a.length, h = b.length; g > d && h > e;) a[d] < b[e] ? d++ : a[d] > b[e] ? e++ : (f.push(a[d]), d++, e++);
        return f
      }
      return b.mixin(c.prototype, {
        bootstrap: function(a) {
          this.datums = a.datums, this.trie = a.trie
        },
        add: function(a) {
          var c = this;
          a = b.isArray(a) ? a : [a], b.each(a, function(a) {
            var f, g;
            f = c.datums.push(a) - 1, g = d(c.datumTokenizer(a)), b.each(g, function(a) {
              var b, d, g;
              for (b = c.trie, d = a.split(""); g = d.shift();) b = b.children[g] || (b.children[g] = e()), b.ids.push(f)
            })
          })
        },
        get: function(a) {
          var c, e, h = this;
          return c = d(this.queryTokenizer(a)), b.each(c, function(a) {
            var b, c, d, f;
            if (e && 0 === e.length) return !1;
            for (b = h.trie, c = a.split(""); b && (d = c.shift());) b = b.children[d];
            return b && 0 === c.length ? (f = b.ids.slice(0), void(e = e ? g(e, f) : f)) : (e = [], !1)
          }), e ? b.map(f(e), function(a) {
            return h.datums[a]
          }) : []
        },
        reset: function() {
          this.datums = [], this.trie = e()
        },
        serialize: function() {
          return {
            datums: this.datums,
            trie: this.trie
          }
        }
      }), c
    }(),
    i = function() {
      "use strict";

      function d(a) {
        return a.local || null
      }

      function e(d) {
        var e, f;
        return f = {
          url: null,
          thumbprint: "",
          ttl: 864e5,
          filter: null,
          ajax: {}
        }, (e = d.prefetch || null) && (e = b.isString(e) ? {
          url: e
        } : e, e = b.mixin(f, e), e.thumbprint = c + e.thumbprint, e.ajax.type = e.ajax.type || "GET", e.ajax.dataType = e.ajax.dataType || "json", !e.url && a.error("prefetch requires url to be set")), e
      }

      function f(c) {
        function d(a) {
          return function(c) {
            return b.debounce(c, a)
          }
        }

        function e(a) {
          return function(c) {
            return b.throttle(c, a)
          }
        }
        var f, g;
        return g = {
          url: null,
          cache: !0,
          wildcard: "%QUERY",
          replace: null,
          rateLimitBy: "debounce",
          rateLimitWait: 300,
          send: null,
          filter: null,
          ajax: {}
        }, (f = c.remote || null) && (f = b.isString(f) ? {
          url: f
        } : f, f = b.mixin(g, f), f.rateLimiter = /^throttle$/i.test(f.rateLimitBy) ? e(f.rateLimitWait) : d(f.rateLimitWait), f.ajax.type = f.ajax.type || "GET", f.ajax.dataType = f.ajax.dataType || "json", delete f.rateLimitBy, delete f.rateLimitWait, !f.url && a.error("remote requires url to be set")), f
      }
      return {
        local: d,
        prefetch: e,
        remote: f
      }
    }();
  ! function(c) {
    "use strict";

    function e(b) {
      b && (b.local || b.prefetch || b.remote) || a.error("one of local, prefetch, or remote is required"), this.limit = b.limit || 5, this.sorter = j(b.sorter), this.dupDetector = b.dupDetector || k, this.local = i.local(b), this.prefetch = i.prefetch(b), this.remote = i.remote(b), this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null, this.index = new h({
        datumTokenizer: b.datumTokenizer,
        queryTokenizer: b.queryTokenizer
      }), this.storage = this.cacheKey ? new f(this.cacheKey) : null
    }

    function j(a) {
      function c(b) {
        return b.sort(a)
      }

      function d(a) {
        return a
      }
      return b.isFunction(a) ? c : d
    }

    function k() {
      return !1
    }
    var l, m;
    return l = c.Bloodhound, m = {
      data: "data",
      protocol: "protocol",
      thumbprint: "thumbprint"
    }, c.Bloodhound = e, e.noConflict = function() {
      return c.Bloodhound = l, e
    }, e.tokenizers = d, b.mixin(e.prototype, {
      _loadPrefetch: function(b) {
        function c(a) {
          f.clear(), f.add(b.filter ? b.filter(a) : a), f._saveToStorage(f.index.serialize(), b.thumbprint, b.ttl)
        }
        var d, e, f = this;
        return (d = this._readFromStorage(b.thumbprint)) ? (this.index.bootstrap(d), e = a.Deferred().resolve()) : e = a.ajax(b.url, b.ajax).done(c), e
      },
      _getFromRemote: function(a, b) {
        function c(a, c) {
          b(a ? [] : f.remote.filter ? f.remote.filter(c) : c)
        }
        var d, e, f = this;
        if (this.transport) return a = a || "", e = encodeURIComponent(a), d = this.remote.replace ? this.remote.replace(this.remote.url, a) : this.remote.url.replace(this.remote.wildcard, e), this.transport.get(d, this.remote.ajax, c)
      },
      _cancelLastRemoteRequest: function() {
        this.transport && this.transport.cancel()
      },
      _saveToStorage: function(a, b, c) {
        this.storage && (this.storage.set(m.data, a, c), this.storage.set(m.protocol, location.protocol, c), this.storage.set(m.thumbprint, b, c))
      },
      _readFromStorage: function(a) {
        var b, c = {};
        return this.storage && (c.data = this.storage.get(m.data), c.protocol = this.storage.get(m.protocol), c.thumbprint = this.storage.get(m.thumbprint)), b = c.thumbprint !== a || c.protocol !== location.protocol, c.data && !b ? c.data : null
      },
      _initialize: function() {
        function c() {
          e.add(b.isFunction(f) ? f() : f)
        }
        var d, e = this,
          f = this.local;
        return d = this.prefetch ? this._loadPrefetch(this.prefetch) : a.Deferred().resolve(), f && d.done(c), this.transport = this.remote ? new g(this.remote) : null, this.initPromise = d.promise()
      },
      initialize: function(a) {
        return !this.initPromise || a ? this._initialize() : this.initPromise
      },
      add: function(a) {
        this.index.add(a)
      },
      get: function(a, c) {
        function d(a) {
          var d = f.slice(0);
          b.each(a, function(a) {
            var c;
            return c = b.some(d, function(b) {
              return e.dupDetector(a, b)
            }), !c && d.push(a), d.length < e.limit
          }), c && c(e.sorter(d))
        }
        var e = this,
          f = [],
          g = !1;
        f = this.index.get(a), f = this.sorter(f).slice(0, this.limit), f.length < this.limit ? g = this._getFromRemote(a, d) : this._cancelLastRemoteRequest(), g || (f.length > 0 || !this.transport) && c && c(f)
      },
      clear: function() {
        this.index.reset()
      },
      clearPrefetchCache: function() {
        this.storage && this.storage.clear()
      },
      clearRemoteCache: function() {
        this.transport && g.resetCache()
      },
      ttAdapter: function() {
        return b.bind(this.get, this)
      }
    }), e
  }(this);
  var j = function() {
      return {
        wrapper: '<span class="twitter-typeahead"></span>',
        dropdown: '<span class="tt-dropdown-menu"></span>',
        dataset: '<div class="tt-dataset-%CLASS%"></div>',
        suggestions: '<span class="tt-suggestions"></span>',
        suggestion: '<div class="tt-suggestion"></div>'
      }
    }(),
    k = function() {
      "use strict";
      var a = {
        wrapper: {
          position: "relative",
          display: "inline-block"
        },
        hint: {
          position: "absolute",
          top: "0",
          left: "0",
          borderColor: "transparent",
          boxShadow: "none",
          opacity: "1"
        },
        input: {
          position: "relative",
          verticalAlign: "top",
          backgroundColor: "transparent"
        },
        inputWithNoHint: {
          position: "relative",
          verticalAlign: "top"
        },
        dropdown: {
          position: "absolute",
          top: "100%",
          left: "0",
          zIndex: "100",
          display: "none"
        },
        suggestions: {
          display: "block"
        },
        suggestion: {
          whiteSpace: "nowrap",
          cursor: "pointer"
        },
        suggestionChild: {
          whiteSpace: "normal"
        },
        ltr: {
          left: "0",
          right: "auto"
        },
        rtl: {
          left: "auto",
          right: " 0"
        }
      };
      return b.isMsie() && b.mixin(a.input, {
        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
      }), b.isMsie() && b.isMsie() <= 7 && b.mixin(a.input, {
        marginTop: "-1px"
      }), a
    }(),
    l = function() {
      "use strict";

      function c(b) {
        b && b.el || a.error("EventBus initialized without el"), this.$el = a(b.el)
      }
      var d = "typeahead:";
      return b.mixin(c.prototype, {
        trigger: function(a) {
          var b = [].slice.call(arguments, 1);
          this.$el.trigger(d + a, b)
        }
      }), c
    }(),
    m = function() {
      "use strict";

      function a(a, b, c, d) {
        var e;
        if (!c) return this;
        for (b = b.split(i), c = d ? h(c, d) : c, this._callbacks = this._callbacks || {}; e = b.shift();) this._callbacks[e] = this._callbacks[e] || {
          sync: [],
          async: []
        }, this._callbacks[e][a].push(c);
        return this
      }

      function b(b, c, d) {
        return a.call(this, "async", b, c, d)
      }

      function c(b, c, d) {
        return a.call(this, "sync", b, c, d)
      }

      function d(a) {
        var b;
        if (!this._callbacks) return this;
        for (a = a.split(i); b = a.shift();) delete this._callbacks[b];
        return this
      }

      function e(a) {
        var b, c, d, e, g;
        if (!this._callbacks) return this;
        for (a = a.split(i), d = [].slice.call(arguments, 1);
          (b = a.shift()) && (c = this._callbacks[b]);) e = f(c.sync, this, [b].concat(d)), g = f(c.async, this, [b].concat(d)), e() && j(g);
        return this
      }

      function f(a, b, c) {
        function d() {
          for (var d, e = 0, f = a.length; !d && f > e; e += 1) d = a[e].apply(b, c) === !1;
          return !d
        }
        return d
      }

      function g() {
        var a;
        return a = window.setImmediate ? function(a) {
          setImmediate(function() {
            a()
          })
        } : function(a) {
          setTimeout(function() {
            a()
          }, 0)
        }
      }

      function h(a, b) {
        return a.bind ? a.bind(b) : function() {
          a.apply(b, [].slice.call(arguments, 0))
        }
      }
      var i = /\s+/,
        j = g();
      return {
        onSync: c,
        onAsync: b,
        off: d,
        trigger: e
      }
    }(),
    n = function(a) {
      "use strict";

      function c(a, c, d) {
        for (var e, f = [], g = 0, h = a.length; h > g; g++) f.push(b.escapeRegExChars(a[g]));
        return e = d ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")", c ? new RegExp(e) : new RegExp(e, "i")
      }
      var d = {
        node: null,
        pattern: null,
        tagName: "strong",
        className: null,
        wordsOnly: !1,
        caseSensitive: !1
      };
      return function(e) {
        function f(b) {
          var c, d, f;
          return (c = h.exec(b.data)) && (f = a.createElement(e.tagName), e.className && (f.className = e.className), d = b.splitText(c.index), d.splitText(c[0].length), f.appendChild(d.cloneNode(!0)), b.parentNode.replaceChild(f, d)), !!c
        }

        function g(a, b) {
          for (var c, d = 3, e = 0; e < a.childNodes.length; e++) c = a.childNodes[e], c.nodeType === d ? e += b(c) ? 1 : 0 : g(c, b)
        }
        var h;
        e = b.mixin({}, d, e), e.node && e.pattern && (e.pattern = b.isArray(e.pattern) ? e.pattern : [e.pattern], h = c(e.pattern, e.caseSensitive, e.wordsOnly), g(e.node, f))
      }
    }(window.document),
    o = function() {
      "use strict";

      function c(c) {
        var e, f, h, i, j = this;
        c = c || {}, c.input || a.error("input is missing"), e = b.bind(this._onBlur, this), f = b.bind(this._onFocus, this), h = b.bind(this._onKeydown, this), i = b.bind(this._onInput, this), this.$hint = a(c.hint), this.$input = a(c.input).on("blur.tt", e).on("focus.tt", f).on("keydown.tt", h), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = b.noop), b.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(a) {
          g[a.which || a.keyCode] || b.defer(b.bind(j._onInput, j, a))
        }) : this.$input.on("input.tt", i), this.query = this.$input.val(), this.$overflowHelper = d(this.$input)
      }

      function d(b) {
        return a('<pre aria-hidden="true"></pre>').css({
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "pre",
          fontFamily: b.css("font-family"),
          fontSize: b.css("font-size"),
          fontStyle: b.css("font-style"),
          fontVariant: b.css("font-variant"),
          fontWeight: b.css("font-weight"),
          wordSpacing: b.css("word-spacing"),
          letterSpacing: b.css("letter-spacing"),
          textIndent: b.css("text-indent"),
          textRendering: b.css("text-rendering"),
          textTransform: b.css("text-transform")
        }).insertAfter(b)
      }

      function e(a, b) {
        return c.normalizeQuery(a) === c.normalizeQuery(b)
      }

      function f(a) {
        return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey
      }
      var g;
      return g = {
        9: "tab",
        27: "esc",
        37: "left",
        39: "right",
        13: "enter",
        38: "up",
        40: "down"
      }, c.normalizeQuery = function(a) {
        return (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
      }, b.mixin(c.prototype, m, {
        _onBlur: function() {
          this.resetInputValue(), this.trigger("blurred")
        },
        _onFocus: function() {
          this.trigger("focused")
        },
        _onKeydown: function(a) {
          var b = g[a.which || a.keyCode];
          this._managePreventDefault(b, a), b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
        },
        _onInput: function() {
          this._checkInputValue()
        },
        _managePreventDefault: function(a, b) {
          var c, d, e;
          switch (a) {
            case "tab":
              d = this.getHint(), e = this.getInputValue(), c = d && d !== e && !f(b);
              break;
            case "up":
            case "down":
              c = !f(b);
              break;
            default:
              c = !1
          }
          c && b.preventDefault()
        },
        _shouldTrigger: function(a, b) {
          var c;
          switch (a) {
            case "tab":
              c = !f(b);
              break;
            default:
              c = !0
          }
          return c
        },
        _checkInputValue: function() {
          var a, b, c;
          a = this.getInputValue(), b = e(a, this.query), c = b ? this.query.length !== a.length : !1, this.query = a, b ? c && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
        },
        focus: function() {
          this.$input.focus()
        },
        blur: function() {
          this.$input.blur()
        },
        getQuery: function() {
          return this.query
        },
        setQuery: function(a) {
          this.query = a
        },
        getInputValue: function() {
          return this.$input.val()
        },
        setInputValue: function(a, b) {
          this.$input.val(a), b ? this.clearHint() : this._checkInputValue()
        },
        resetInputValue: function() {
          this.setInputValue(this.query, !0)
        },
        getHint: function() {
          return this.$hint.val()
        },
        setHint: function(a) {
          this.$hint.val(a)
        },
        clearHint: function() {
          this.setHint("")
        },
        clearHintIfInvalid: function() {
          var a, b, c, d;
          a = this.getInputValue(), b = this.getHint(), c = a !== b && 0 === b.indexOf(a), d = "" !== a && c && !this.hasOverflow(), !d && this.clearHint()
        },
        getLanguageDirection: function() {
          return (this.$input.css("direction") || "ltr").toLowerCase()
        },
        hasOverflow: function() {
          var a = this.$input.width() - 2;
          return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= a
        },
        isCursorAtEnd: function() {
          var a, c, d;
          return a = this.$input.val().length, c = this.$input[0].selectionStart, b.isNumber(c) ? c === a : document.selection ? (d = document.selection.createRange(), d.moveStart("character", -a), a === d.text.length) : !0
        },
        destroy: function() {
          this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
        }
      }), c
    }(),
    p = function() {
      "use strict";

      function c(c) {
        c = c || {}, c.templates = c.templates || {}, c.source || a.error("missing source"), c.name && !f(c.name) && a.error("invalid dataset name: " + c.name), this.query = null, this.highlight = !!c.highlight, this.name = c.name || b.getUniqueId(), this.source = c.source, this.displayFn = d(c.display || c.displayKey), this.templates = e(c.templates, this.displayFn), this.$el = a(j.dataset.replace("%CLASS%", this.name))
      }

      function d(a) {
        function c(b) {
          return b[a]
        }
        return a = a || "value", b.isFunction(a) ? a : c
      }

      function e(a, c) {
        function d(a) {
          return "<p>" + c(a) + "</p>"
        }
        return {
          empty: a.empty && b.templatify(a.empty),
          header: a.header && b.templatify(a.header),
          footer: a.footer && b.templatify(a.footer),
          suggestion: a.suggestion || d
        }
      }

      function f(a) {
        return /^[_a-zA-Z0-9-]+$/.test(a)
      }
      var g = "ttDataset",
        h = "ttValue",
        i = "ttDatum";
      return c.extractDatasetName = function(b) {
        return a(b).data(g)
      }, c.extractValue = function(b) {
        return a(b).data(h)
      }, c.extractDatum = function(b) {
        return a(b).data(i)
      }, b.mixin(c.prototype, m, {
        _render: function(c, d) {
          function e() {
            return p.templates.empty({
              query: c,
              isEmpty: !0
            })
          }

          function f() {
            function e(b) {
              var c;
              return c = a(j.suggestion).append(p.templates.suggestion(b)).data(g, p.name).data(h, p.displayFn(b)).data(i, b), c.children().each(function() {
                a(this).css(k.suggestionChild)
              }), c
            }
            var f, l;
            return f = a(j.suggestions).css(k.suggestions), l = b.map(d, e), f.append.apply(f, l), p.highlight && n({
              className: "tt-highlight",
              node: f[0],
              pattern: c
            }), f
          }

          function l() {
            return p.templates.header({
              query: c,
              isEmpty: !o
            })
          }

          function m() {
            return p.templates.footer({
              query: c,
              isEmpty: !o
            })
          }
          if (this.$el) {
            var o, p = this;
            this.$el.empty(), o = d && d.length, !o && this.templates.empty ? this.$el.html(e()).prepend(p.templates.header ? l() : null).append(p.templates.footer ? m() : null) : o && this.$el.html(f()).prepend(p.templates.header ? l() : null).append(p.templates.footer ? m() : null), this.trigger("rendered")
          }
        },
        getRoot: function() {
          return this.$el
        },
        update: function(a) {
          function b(b) {
            c.canceled || a !== c.query || c._render(a, b)
          }
          var c = this;
          this.query = a, this.canceled = !1, this.source(a, b)
        },
        cancel: function() {
          this.canceled = !0
        },
        clear: function() {
          this.cancel(), this.$el.empty(), this.trigger("rendered")
        },
        isEmpty: function() {
          return this.$el.is(":empty")
        },
        destroy: function() {
          this.$el = null
        }
      }), c
    }(),
    q = function() {
      "use strict";

      function c(c) {
        var e, f, g, h = this;
        c = c || {}, c.menu || a.error("menu is required"), this.isOpen = !1, this.isEmpty = !0, this.datasets = b.map(c.datasets, d), e = b.bind(this._onSuggestionClick, this), f = b.bind(this._onSuggestionMouseEnter, this), g = b.bind(this._onSuggestionMouseLeave, this), this.$menu = a(c.menu).on("click.tt", ".tt-suggestion", e).on("mouseenter.tt", ".tt-suggestion", f).on("mouseleave.tt", ".tt-suggestion", g), b.each(this.datasets, function(a) {
          h.$menu.append(a.getRoot()), a.onSync("rendered", h._onRendered, h)
        })
      }

      function d(a) {
        return new p(a)
      }
      return b.mixin(c.prototype, m, {
        _onSuggestionClick: function(b) {
          this.trigger("suggestionClicked", a(b.currentTarget))
        },
        _onSuggestionMouseEnter: function(b) {
          this._removeCursor(), this._setCursor(a(b.currentTarget), !0)
        },
        _onSuggestionMouseLeave: function() {
          this._removeCursor()
        },
        _onRendered: function() {
          function a(a) {
            return a.isEmpty()
          }
          this.isEmpty = b.every(this.datasets, a), this.isEmpty ? this._hide() : this.isOpen && this._show(), this.trigger("datasetRendered")
        },
        _hide: function() {
          this.$menu.hide()
        },
        _show: function() {
          this.$menu.css("display", "block")
        },
        _getSuggestions: function() {
          return this.$menu.find(".tt-suggestion")
        },
        _getCursor: function() {
          return this.$menu.find(".tt-cursor").first()
        },
        _setCursor: function(a, b) {
          a.first().addClass("tt-cursor"), !b && this.trigger("cursorMoved")
        },
        _removeCursor: function() {
          this._getCursor().removeClass("tt-cursor")
        },
        _moveCursor: function(a) {
          var b, c, d, e;
          if (this.isOpen) {
            if (c = this._getCursor(), b = this._getSuggestions(), this._removeCursor(), d = b.index(c) + a, d = (d + 1) % (b.length + 1) - 1, -1 === d) return void this.trigger("cursorRemoved"); - 1 > d && (d = b.length - 1), this._setCursor(e = b.eq(d)), this._ensureVisible(e)
          }
        },
        _ensureVisible: function(a) {
          var b, c, d, e;
          b = a.position().top, c = b + a.outerHeight(!0), d = this.$menu.scrollTop(), e = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10), 0 > b ? this.$menu.scrollTop(d + b) : c > e && this.$menu.scrollTop(d + (c - e))
        },
        close: function() {
          this.isOpen && (this.isOpen = !1, this._removeCursor(), this._hide(), this.trigger("closed"))
        },
        open: function() {
          this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
        },
        setLanguageDirection: function(a) {
          this.$menu.css("ltr" === a ? k.ltr : k.rtl)
        },
        moveCursorUp: function() {
          this._moveCursor(-1)
        },
        moveCursorDown: function() {
          this._moveCursor(1)
        },
        getDatumForSuggestion: function(a) {
          var b = null;
          return a.length && (b = {
            raw: p.extractDatum(a),
            value: p.extractValue(a),
            datasetName: p.extractDatasetName(a)
          }), b
        },
        getDatumForCursor: function() {
          return this.getDatumForSuggestion(this._getCursor().first())
        },
        getDatumForTopSuggestion: function() {
          return this.getDatumForSuggestion(this._getSuggestions().first())
        },
        update: function(a) {
          function c(b) {
            b.update(a)
          }
          b.each(this.datasets, c)
        },
        empty: function() {
          function a(a) {
            a.clear()
          }
          b.each(this.datasets, a), this.isEmpty = !0
        },
        isVisible: function() {
          return this.isOpen && !this.isEmpty
        },
        destroy: function() {
          function a(a) {
            a.destroy()
          }
          this.$menu.off(".tt"), this.$menu = null, b.each(this.datasets, a)
        }
      }), c
    }(),
    r = function() {
      "use strict";

      function c(c) {
        var e, f, g;
        c = c || {}, c.input || a.error("missing input"), this.isActivated = !1, this.autoselect = !!c.autoselect, this.minLength = b.isNumber(c.minLength) ? c.minLength : 1, this.$node = d(c.input, c.withHint), e = this.$node.find(".tt-dropdown-menu"), f = this.$node.find(".tt-input"), g = this.$node.find(".tt-hint"), f.on("blur.tt", function(a) {
          var c, d, g;
          c = document.activeElement, d = e.is(c), g = e.has(c).length > 0, b.isMsie() && (d || g) && (a.preventDefault(), a.stopImmediatePropagation(), b.defer(function() {
            f.focus()
          }))
        }), e.on("mousedown.tt", function(a) {
          a.preventDefault()
        }), this.eventBus = c.eventBus || new l({
          el: f
        }), this.dropdown = new q({
          menu: e,
          datasets: c.datasets
        }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this), this.input = new o({
          input: f,
          hint: g
        }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this), this._setLanguageDirection()
      }

      function d(b, c) {
        var d, f, h, i;
        d = a(b), f = a(j.wrapper).css(k.wrapper), h = a(j.dropdown).css(k.dropdown), i = d.clone().css(k.hint).css(e(d)), i.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", !0).attr({
          autocomplete: "off",
          spellcheck: "false",
          tabindex: -1
        }), d.data(g, {
          dir: d.attr("dir"),
          autocomplete: d.attr("autocomplete"),
          spellcheck: d.attr("spellcheck"),
          style: d.attr("style")
        }), d.addClass("tt-input").attr({
          autocomplete: "off",
          spellcheck: !1
        }).css(c ? k.input : k.inputWithNoHint);
        try {
          !d.attr("dir") && d.attr("dir", "auto")
        } catch (l) {}
        return d.wrap(f).parent().prepend(c ? i : null).append(h)
      }

      function e(a) {
        return {
          backgroundAttachment: a.css("background-attachment"),
          backgroundClip: a.css("background-clip"),
          backgroundColor: a.css("background-color"),
          backgroundImage: a.css("background-image"),
          backgroundOrigin: a.css("background-origin"),
          backgroundPosition: a.css("background-position"),
          backgroundRepeat: a.css("background-repeat"),
          backgroundSize: a.css("background-size")
        }
      }

      function f(a) {
        var c = a.find(".tt-input");
        b.each(c.data(g), function(a, d) {
          b.isUndefined(a) ? c.removeAttr(d) : c.attr(d, a)
        }), c.detach().removeData(g).removeClass("tt-input").insertAfter(a), a.remove()
      }
      var g = "ttAttrs";
      return b.mixin(c.prototype, {
        _onSuggestionClicked: function(a, b) {
          var c;
          (c = this.dropdown.getDatumForSuggestion(b)) && this._select(c)
        },
        _onCursorMoved: function() {
          var a = this.dropdown.getDatumForCursor();
          this.input.setInputValue(a.value, !0), this.eventBus.trigger("cursorchanged", a.raw, a.datasetName)
        },
        _onCursorRemoved: function() {
          this.input.resetInputValue(), this._updateHint()
        },
        _onDatasetRendered: function() {
          this._updateHint()
        },
        _onOpened: function() {
          this._updateHint(), this.eventBus.trigger("opened")
        },
        _onClosed: function() {
          this.input.clearHint(), this.eventBus.trigger("closed")
        },
        _onFocused: function() {
          this.isActivated = !0, this.dropdown.open()
        },
        _onBlurred: function() {
          this.isActivated = !1, this.dropdown.empty(), this.dropdown.close()
        },
        _onEnterKeyed: function(a, b) {
          var c, d;
          c = this.dropdown.getDatumForCursor(), d = this.dropdown.getDatumForTopSuggestion(), c ? (this._select(c), b.preventDefault()) : this.autoselect && d && (this._select(d), b.preventDefault())
        },
        _onTabKeyed: function(a, b) {
          var c;
          (c = this.dropdown.getDatumForCursor()) ? (this._select(c), b.preventDefault()) : this._autocomplete(!0)
        },
        _onEscKeyed: function() {
          this.dropdown.close(), this.input.resetInputValue()
        },
        _onUpKeyed: function() {
          var a = this.input.getQuery();
          this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorUp(), this.dropdown.open()
        },
        _onDownKeyed: function() {
          var a = this.input.getQuery();
          this.dropdown.isEmpty && a.length >= this.minLength ? this.dropdown.update(a) : this.dropdown.moveCursorDown(), this.dropdown.open()
        },
        _onLeftKeyed: function() {
          "rtl" === this.dir && this._autocomplete()
        },
        _onRightKeyed: function() {
          "ltr" === this.dir && this._autocomplete()
        },
        _onQueryChanged: function(a, b) {
          this.input.clearHintIfInvalid(), b.length >= this.minLength ? this.dropdown.update(b) : this.dropdown.empty(), this.dropdown.open(), this._setLanguageDirection()
        },
        _onWhitespaceChanged: function() {
          this._updateHint(), this.dropdown.open()
        },
        _setLanguageDirection: function() {
          var a;
          this.dir !== (a = this.input.getLanguageDirection()) && (this.dir = a, this.$node.css("direction", a), this.dropdown.setLanguageDirection(a))
        },
        _updateHint: function() {
          var a, c, d, e, f, g;
          a = this.dropdown.getDatumForTopSuggestion(), a && this.dropdown.isVisible() && !this.input.hasOverflow() ? (c = this.input.getInputValue(), d = o.normalizeQuery(c), e = b.escapeRegExChars(d), f = new RegExp("^(?:" + e + ")(.+$)", "i"), g = f.exec(a.value), g ? this.input.setHint(c + g[1]) : this.input.clearHint()) : this.input.clearHint()
        },
        _autocomplete: function(a) {
          var b, c, d, e;
          b = this.input.getHint(), c = this.input.getQuery(), d = a || this.input.isCursorAtEnd(), b && c !== b && d && (e = this.dropdown.getDatumForTopSuggestion(), e && this.input.setInputValue(e.value), this.eventBus.trigger("autocompleted", e.raw, e.datasetName))
        },
        _select: function(a) {
          this.input.setQuery(a.value), this.input.setInputValue(a.value, !0), this._setLanguageDirection(), this.eventBus.trigger("selected", a.raw, a.datasetName), this.dropdown.close(), b.defer(b.bind(this.dropdown.empty, this.dropdown))
        },
        open: function() {
          this.dropdown.open()
        },
        close: function() {
          this.dropdown.close()
        },
        setVal: function(a) {
          a = b.toStr(a), this.isActivated ? this.input.setInputValue(a) : (this.input.setQuery(a), this.input.setInputValue(a, !0)), this._setLanguageDirection()
        },
        getVal: function() {
          return this.input.getQuery()
        },
        destroy: function() {
          this.input.destroy(), this.dropdown.destroy(), f(this.$node), this.$node = null
        }
      }), c
    }();
  ! function() {
    "use strict";
    var c, d, e;
    c = a.fn.typeahead, d = "ttTypeahead", e = {
      initialize: function(c, e) {
        function f() {
          var f, g, h = a(this);
          b.each(e, function(a) {
            a.highlight = !!c.highlight
          }), g = new r({
            input: h,
            eventBus: f = new l({
              el: h
            }),
            withHint: b.isUndefined(c.hint) ? !0 : !!c.hint,
            minLength: c.minLength,
            autoselect: c.autoselect,
            datasets: e
          }), h.data(d, g)
        }
        return e = b.isArray(e) ? e : [].slice.call(arguments, 1), c = c || {}, this.each(f)
      },
      open: function() {
        function b() {
          var b, c = a(this);
          (b = c.data(d)) && b.open()
        }
        return this.each(b)
      },
      close: function() {
        function b() {
          var b, c = a(this);
          (b = c.data(d)) && b.close()
        }
        return this.each(b)
      },
      val: function(b) {
        function c() {
          var c, e = a(this);
          (c = e.data(d)) && c.setVal(b)
        }

        function e(a) {
          var b, c;
          return (b = a.data(d)) && (c = b.getVal()), c
        }
        return arguments.length ? this.each(c) : e(this.first())
      },
      destroy: function() {
        function b() {
          var b, c = a(this);
          (b = c.data(d)) && (b.destroy(), c.removeData(d))
        }
        return this.each(b)
      }
    }, a.fn.typeahead = function(b) {
      var c;
      return e[b] && "initialize" !== b ? (c = this.filter(function() {
        return !!a(this).data(d)
      }), e[b].apply(c, [].slice.call(arguments, 1))) : e.initialize.apply(this, arguments)
    }, a.fn.typeahead.noConflict = function() {
      return a.fn.typeahead = c, this
    }
  }()
}(window.jQuery);

/*!

 handlebars v2.0.0

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
! function(a, b) {
  "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? module.exports = b() : a.Handlebars = a.Handlebars || b()
}(this, function() {
  var a = function() {
      "use strict";

      function a(a) {
        this.string = a
      }
      var b;
      return a.prototype.toString = function() {
        return "" + this.string
      }, b = a
    }(),
    b = function(a) {
      "use strict";

      function b(a) {
        return i[a]
      }

      function c(a) {
        for (var b = 1; b < arguments.length; b++)
          for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
        return a
      }

      function d(a) {
        return a instanceof h ? a.toString() : null == a ? "" : a ? (a = "" + a, k.test(a) ? a.replace(j, b) : a) : a + ""
      }

      function e(a) {
        return a || 0 === a ? n(a) && 0 === a.length ? !0 : !1 : !0
      }

      function f(a, b) {
        return (a ? a + "." : "") + b
      }
      var g = {},
        h = a,
        i = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;"
        },
        j = /[&<>"'`]/g,
        k = /[&<>"'`]/;
      g.extend = c;
      var l = Object.prototype.toString;
      g.toString = l;
      var m = function(a) {
        return "function" == typeof a
      };
      m(/x/) && (m = function(a) {
        return "function" == typeof a && "[object Function]" === l.call(a)
      });
      var m;
      g.isFunction = m;
      var n = Array.isArray || function(a) {
        return a && "object" == typeof a ? "[object Array]" === l.call(a) : !1
      };
      return g.isArray = n, g.escapeExpression = d, g.isEmpty = e, g.appendContextPath = f, g
    }(a),
    c = function() {
      "use strict";

      function a(a, b) {
        var d;
        b && b.firstLine && (d = b.firstLine, a += " - " + d + ":" + b.firstColumn);
        for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++) this[c[f]] = e[c[f]];
        d && (this.lineNumber = d, this.column = b.firstColumn)
      }
      var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
      return a.prototype = new Error, b = a
    }(),
    d = function(a, b) {
      "use strict";

      function c(a, b) {
        this.helpers = a || {}, this.partials = b || {}, d(this)
      }

      function d(a) {
        a.registerHelper("helperMissing", function() {
          if (1 === arguments.length) return void 0;
          throw new g("Missing helper: '" + arguments[arguments.length - 1].name + "'")
        }), a.registerHelper("blockHelperMissing", function(b, c) {
          var d = c.inverse,
            e = c.fn;
          if (b === !0) return e(this);
          if (b === !1 || null == b) return d(this);
          if (k(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : d(this);
          if (c.data && c.ids) {
            var g = q(c.data);
            g.contextPath = f.appendContextPath(c.data.contextPath, c.name), c = {
              data: g
            }
          }
          return e(b, c)
        }), a.registerHelper("each", function(a, b) {
          if (!b) throw new g("Must pass iterator to #each");
          var c, d, e = b.fn,
            h = b.inverse,
            i = 0,
            j = "";
          if (b.data && b.ids && (d = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."), l(a) && (a = a.call(this)), b.data && (c = q(b.data)), a && "object" == typeof a)
            if (k(a))
              for (var m = a.length; m > i; i++) c && (c.index = i, c.first = 0 === i, c.last = i === a.length - 1, d && (c.contextPath = d + i)), j += e(a[i], {
                data: c
              });
            else
              for (var n in a) a.hasOwnProperty(n) && (c && (c.key = n, c.index = i, c.first = 0 === i, d && (c.contextPath = d + n)), j += e(a[n], {
                data: c
              }), i++);
          return 0 === i && (j = h(this)), j
        }), a.registerHelper("if", function(a, b) {
          return l(a) && (a = a.call(this)), !b.hash.includeZero && !a || f.isEmpty(a) ? b.inverse(this) : b.fn(this)
        }), a.registerHelper("unless", function(b, c) {
          return a.helpers["if"].call(this, b, {
            fn: c.inverse,
            inverse: c.fn,
            hash: c.hash
          })
        }), a.registerHelper("with", function(a, b) {
          l(a) && (a = a.call(this));
          var c = b.fn;
          if (f.isEmpty(a)) return b.inverse(this);
          if (b.data && b.ids) {
            var d = q(b.data);
            d.contextPath = f.appendContextPath(b.data.contextPath, b.ids[0]), b = {
              data: d
            }
          }
          return c(a, b)
        }), a.registerHelper("log", function(b, c) {
          var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
          a.log(d, b)
        }), a.registerHelper("lookup", function(a, b) {
          return a && a[b]
        })
      }
      var e = {},
        f = a,
        g = b,
        h = "2.0.0";
      e.VERSION = h;
      var i = 6;
      e.COMPILER_REVISION = i;
      var j = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1"
      };
      e.REVISION_CHANGES = j;
      var k = f.isArray,
        l = f.isFunction,
        m = f.toString,
        n = "[object Object]";
      e.HandlebarsEnvironment = c, c.prototype = {
        constructor: c,
        logger: o,
        log: p,
        registerHelper: function(a, b) {
          if (m.call(a) === n) {
            if (b) throw new g("Arg not supported with multiple helpers");
            f.extend(this.helpers, a)
          } else this.helpers[a] = b
        },
        unregisterHelper: function(a) {
          delete this.helpers[a]
        },
        registerPartial: function(a, b) {
          m.call(a) === n ? f.extend(this.partials, a) : this.partials[a] = b
        },
        unregisterPartial: function(a) {
          delete this.partials[a]
        }
      };
      var o = {
        methodMap: {
          0: "debug",
          1: "info",
          2: "warn",
          3: "error"
        },
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        log: function(a, b) {
          if (o.level <= a) {
            var c = o.methodMap[a];
            "undefined" != typeof console && console[c] && console[c].call(console, b)
          }
        }
      };
      e.logger = o;
      var p = o.log;
      e.log = p;
      var q = function(a) {
        var b = f.extend({}, a);
        return b._parent = a, b
      };
      return e.createFrame = q, e
    }(b, c),
    e = function(a, b, c) {
      "use strict";

      function d(a) {
        var b = a && a[0] || 1,
          c = m;
        if (b !== c) {
          if (c > b) {
            var d = n[c],
              e = n[b];
            throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
          }
          throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
        }
      }

      function e(a, b) {
        if (!b) throw new l("No environment passed to template");
        if (!a || !a.main) throw new l("Unknown template object: " + typeof a);
        b.VM.checkRevision(a.compiler);
        var c = function(c, d, e, f, g, h, i, j, m) {
            g && (f = k.extend({}, f, g));
            var n = b.VM.invokePartial.call(this, c, e, f, h, i, j, m);
            if (null == n && b.compile) {
              var o = {
                helpers: h,
                partials: i,
                data: j,
                depths: m
              };
              i[e] = b.compile(c, {
                data: void 0 !== j,
                compat: a.compat
              }, b), n = i[e](f, o)
            }
            if (null != n) {
              if (d) {
                for (var p = n.split("\n"), q = 0, r = p.length; r > q && (p[q] || q + 1 !== r); q++) p[q] = d + p[q];
                n = p.join("\n")
              }
              return n
            }
            throw new l("The partial " + e + " could not be compiled when running in runtime-only mode")
          },
          d = {
            lookup: function(a, b) {
              for (var c = a.length, d = 0; c > d; d++)
                if (a[d] && null != a[d][b]) return a[d][b]
            },
            lambda: function(a, b) {
              return "function" == typeof a ? a.call(b) : a
            },
            escapeExpression: k.escapeExpression,
            invokePartial: c,
            fn: function(b) {
              return a[b]
            },
            programs: [],
            program: function(a, b, c) {
              var d = this.programs[a],
                e = this.fn(a);
              return b || c ? d = f(this, a, e, b, c) : d || (d = this.programs[a] = f(this, a, e)), d
            },
            data: function(a, b) {
              for (; a && b--;) a = a._parent;
              return a
            },
            merge: function(a, b) {
              var c = a || b;
              return a && b && a !== b && (c = k.extend({}, b, a)), c
            },
            noop: b.VM.noop,
            compilerInfo: a.compiler
          },
          e = function(b, c) {
            c = c || {};
            var f = c.data;
            e._setup(c), !c.partial && a.useData && (f = i(b, f));
            var g;
            return a.useDepths && (g = c.depths ? [b].concat(c.depths) : [b]), a.main.call(d, b, d.helpers, d.partials, f, g)
          };
        return e.isTop = !0, e._setup = function(c) {
          c.partial ? (d.helpers = c.helpers, d.partials = c.partials) : (d.helpers = d.merge(c.helpers, b.helpers), a.usePartial && (d.partials = d.merge(c.partials, b.partials)))
        }, e._child = function(b, c, e) {
          if (a.useDepths && !e) throw new l("must pass parent depths");
          return f(d, b, a[b], c, e)
        }, e
      }

      function f(a, b, c, d, e) {
        var f = function(b, f) {
          return f = f || {}, c.call(a, b, a.helpers, a.partials, f.data || d, e && [b].concat(e))
        };
        return f.program = b, f.depth = e ? e.length : 0, f
      }

      function g(a, b, c, d, e, f, g) {
        var h = {
          partial: !0,
          helpers: d,
          partials: e,
          data: f,
          depths: g
        };
        if (void 0 === a) throw new l("The partial " + b + " could not be found");
        return a instanceof Function ? a(c, h) : void 0
      }

      function h() {
        return ""
      }

      function i(a, b) {
        return b && "root" in b || (b = b ? o(b) : {}, b.root = a), b
      }
      var j = {},
        k = a,
        l = b,
        m = c.COMPILER_REVISION,
        n = c.REVISION_CHANGES,
        o = c.createFrame;
      return j.checkRevision = d, j.template = e, j.program = f, j.invokePartial = g, j.noop = h, j
    }(b, c, d),
    f = function(a, b, c, d, e) {
      "use strict";
      var f, g = a,
        h = b,
        i = c,
        j = d,
        k = e,
        l = function() {
          var a = new g.HandlebarsEnvironment;
          return j.extend(a, g), a.SafeString = h, a.Exception = i, a.Utils = j, a.escapeExpression = j.escapeExpression, a.VM = k, a.template = function(b) {
            return k.template(b, a)
          }, a
        },
        m = l();
      return m.create = l, m["default"] = m, f = m
    }(d, a, c, b, e),
    g = function(a) {
      "use strict";

      function b(a) {
        a = a || {}, this.firstLine = a.first_line, this.firstColumn = a.first_column, this.lastColumn = a.last_column, this.lastLine = a.last_line
      }
      var c, d = a,
        e = {
          ProgramNode: function(a, c, d) {
            b.call(this, d), this.type = "program", this.statements = a, this.strip = c
          },
          MustacheNode: function(a, c, d, f, g) {
            if (b.call(this, g), this.type = "mustache", this.strip = f, null != d && d.charAt) {
              var h = d.charAt(3) || d.charAt(2);
              this.escaped = "{" !== h && "&" !== h
            } else this.escaped = !!d;
            this.sexpr = a instanceof e.SexprNode ? a : new e.SexprNode(a, c), this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
          },
          SexprNode: function(a, c, d) {
            b.call(this, d), this.type = "sexpr", this.hash = c;
            var e = this.id = a[0],
              f = this.params = a.slice(1);
            this.isHelper = !(!f.length && !c), this.eligibleHelper = this.isHelper || e.isSimple
          },
          PartialNode: function(a, c, d, e, f) {
            b.call(this, f), this.type = "partial", this.partialName = a, this.context = c, this.hash = d, this.strip = e, this.strip.inlineStandalone = !0
          },
          BlockNode: function(a, c, d, e, f) {
            b.call(this, f), this.type = "block", this.mustache = a, this.program = c, this.inverse = d, this.strip = e, d && !c && (this.isInverse = !0)
          },
          RawBlockNode: function(a, c, f, g) {
            if (b.call(this, g), a.sexpr.id.original !== f) throw new d(a.sexpr.id.original + " doesn't match " + f, this);
            c = new e.ContentNode(c, g), this.type = "block", this.mustache = a, this.program = new e.ProgramNode([c], {}, g)
          },
          ContentNode: function(a, c) {
            b.call(this, c), this.type = "content", this.original = this.string = a
          },
          HashNode: function(a, c) {
            b.call(this, c), this.type = "hash", this.pairs = a
          },
          IdNode: function(a, c) {
            b.call(this, c), this.type = "ID";
            for (var e = "", f = [], g = 0, h = "", i = 0, j = a.length; j > i; i++) {
              var k = a[i].part;
              if (e += (a[i].separator || "") + k, ".." === k || "." === k || "this" === k) {
                if (f.length > 0) throw new d("Invalid path: " + e, this);
                ".." === k ? (g++, h += "../") : this.isScoped = !0
              } else f.push(k)
            }
            this.original = e, this.parts = f, this.string = f.join("."), this.depth = g, this.idName = h + this.string, this.isSimple = 1 === a.length && !this.isScoped && 0 === g, this.stringModeValue = this.string
          },
          PartialNameNode: function(a, c) {
            b.call(this, c), this.type = "PARTIAL_NAME", this.name = a.original
          },
          DataNode: function(a, c) {
            b.call(this, c), this.type = "DATA", this.id = a, this.stringModeValue = a.stringModeValue, this.idName = "@" + a.stringModeValue
          },
          StringNode: function(a, c) {
            b.call(this, c), this.type = "STRING", this.original = this.string = this.stringModeValue = a
          },
          NumberNode: function(a, c) {
            b.call(this, c), this.type = "NUMBER", this.original = this.number = a, this.stringModeValue = Number(a)
          },
          BooleanNode: function(a, c) {
            b.call(this, c), this.type = "BOOLEAN", this.bool = a, this.stringModeValue = "true" === a
          },
          CommentNode: function(a, c) {
            b.call(this, c), this.type = "comment", this.comment = a, this.strip = {
              inlineStandalone: !0
            }
          }
        };
      return c = e
    }(c),
    h = function() {
      "use strict";
      var a, b = function() {
        function a() {
          this.yy = {}
        }
        var b = {
            trace: function() {},
            yy: {},
            symbols_: {
              error: 2,
              root: 3,
              program: 4,
              EOF: 5,
              program_repetition0: 6,
              statement: 7,
              mustache: 8,
              block: 9,
              rawBlock: 10,
              partial: 11,
              CONTENT: 12,
              COMMENT: 13,
              openRawBlock: 14,
              END_RAW_BLOCK: 15,
              OPEN_RAW_BLOCK: 16,
              sexpr: 17,
              CLOSE_RAW_BLOCK: 18,
              openBlock: 19,
              block_option0: 20,
              closeBlock: 21,
              openInverse: 22,
              block_option1: 23,
              OPEN_BLOCK: 24,
              CLOSE: 25,
              OPEN_INVERSE: 26,
              inverseAndProgram: 27,
              INVERSE: 28,
              OPEN_ENDBLOCK: 29,
              path: 30,
              OPEN: 31,
              OPEN_UNESCAPED: 32,
              CLOSE_UNESCAPED: 33,
              OPEN_PARTIAL: 34,
              partialName: 35,
              param: 36,
              partial_option0: 37,
              partial_option1: 38,
              sexpr_repetition0: 39,
              sexpr_option0: 40,
              dataName: 41,
              STRING: 42,
              NUMBER: 43,
              BOOLEAN: 44,
              OPEN_SEXPR: 45,
              CLOSE_SEXPR: 46,
              hash: 47,
              hash_repetition_plus0: 48,
              hashSegment: 49,
              ID: 50,
              EQUALS: 51,
              DATA: 52,
              pathSegments: 53,
              SEP: 54,
              $accept: 0,
              $end: 1
            },
            terminals_: {
              2: "error",
              5: "EOF",
              12: "CONTENT",
              13: "COMMENT",
              15: "END_RAW_BLOCK",
              16: "OPEN_RAW_BLOCK",
              18: "CLOSE_RAW_BLOCK",
              24: "OPEN_BLOCK",
              25: "CLOSE",
              26: "OPEN_INVERSE",
              28: "INVERSE",
              29: "OPEN_ENDBLOCK",
              31: "OPEN",
              32: "OPEN_UNESCAPED",
              33: "CLOSE_UNESCAPED",
              34: "OPEN_PARTIAL",
              42: "STRING",
              43: "NUMBER",
              44: "BOOLEAN",
              45: "OPEN_SEXPR",
              46: "CLOSE_SEXPR",
              50: "ID",
              51: "EQUALS",
              52: "DATA",
              54: "SEP"
            },
            productions_: [0, [3, 2],
              [4, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [7, 1],
              [10, 3],
              [14, 3],
              [9, 4],
              [9, 4],
              [19, 3],
              [22, 3],
              [27, 2],
              [21, 3],
              [8, 3],
              [8, 3],
              [11, 5],
              [11, 4],
              [17, 3],
              [17, 1],
              [36, 1],
              [36, 1],
              [36, 1],
              [36, 1],
              [36, 1],
              [36, 3],
              [47, 1],
              [49, 3],
              [35, 1],
              [35, 1],
              [35, 1],
              [41, 2],
              [30, 1],
              [53, 3],
              [53, 1],
              [6, 0],
              [6, 2],
              [20, 0],
              [20, 1],
              [23, 0],
              [23, 1],
              [37, 0],
              [37, 1],
              [38, 0],
              [38, 1],
              [39, 0],
              [39, 2],
              [40, 0],
              [40, 1],
              [48, 1],
              [48, 2]
            ],
            performAction: function(a, b, c, d, e, f) {
              var g = f.length - 1;
              switch (e) {
                case 1:
                  return d.prepareProgram(f[g - 1].statements, !0), f[g - 1];
                case 2:
                  this.$ = new d.ProgramNode(d.prepareProgram(f[g]), {}, this._$);
                  break;
                case 3:
                  this.$ = f[g];
                  break;
                case 4:
                  this.$ = f[g];
                  break;
                case 5:
                  this.$ = f[g];
                  break;
                case 6:
                  this.$ = f[g];
                  break;
                case 7:
                  this.$ = new d.ContentNode(f[g], this._$);
                  break;
                case 8:
                  this.$ = new d.CommentNode(f[g], this._$);
                  break;
                case 9:
                  this.$ = new d.RawBlockNode(f[g - 2], f[g - 1], f[g], this._$);
                  break;
                case 10:
                  this.$ = new d.MustacheNode(f[g - 1], null, "", "", this._$);
                  break;
                case 11:
                  this.$ = d.prepareBlock(f[g - 3], f[g - 2], f[g - 1], f[g], !1, this._$);
                  break;
                case 12:
                  this.$ = d.prepareBlock(f[g - 3], f[g - 2], f[g - 1], f[g], !0, this._$);
                  break;
                case 13:
                  this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                  break;
                case 14:
                  this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                  break;
                case 15:
                  this.$ = {
                    strip: d.stripFlags(f[g - 1], f[g - 1]),
                    program: f[g]
                  };
                  break;
                case 16:
                  this.$ = {
                    path: f[g - 1],
                    strip: d.stripFlags(f[g - 2], f[g])
                  };
                  break;
                case 17:
                  this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                  break;
                case 18:
                  this.$ = new d.MustacheNode(f[g - 1], null, f[g - 2], d.stripFlags(f[g - 2], f[g]), this._$);
                  break;
                case 19:
                  this.$ = new d.PartialNode(f[g - 3], f[g - 2], f[g - 1], d.stripFlags(f[g - 4], f[g]), this._$);
                  break;
                case 20:
                  this.$ = new d.PartialNode(f[g - 2], void 0, f[g - 1], d.stripFlags(f[g - 3], f[g]), this._$);
                  break;
                case 21:
                  this.$ = new d.SexprNode([f[g - 2]].concat(f[g - 1]), f[g], this._$);
                  break;
                case 22:
                  this.$ = new d.SexprNode([f[g]], null, this._$);
                  break;
                case 23:
                  this.$ = f[g];
                  break;
                case 24:
                  this.$ = new d.StringNode(f[g], this._$);
                  break;
                case 25:
                  this.$ = new d.NumberNode(f[g], this._$);
                  break;
                case 26:
                  this.$ = new d.BooleanNode(f[g], this._$);
                  break;
                case 27:
                  this.$ = f[g];
                  break;
                case 28:
                  f[g - 1].isHelper = !0, this.$ = f[g - 1];
                  break;
                case 29:
                  this.$ = new d.HashNode(f[g], this._$);
                  break;
                case 30:
                  this.$ = [f[g - 2], f[g]];
                  break;
                case 31:
                  this.$ = new d.PartialNameNode(f[g], this._$);
                  break;
                case 32:
                  this.$ = new d.PartialNameNode(new d.StringNode(f[g], this._$), this._$);
                  break;
                case 33:
                  this.$ = new d.PartialNameNode(new d.NumberNode(f[g], this._$));
                  break;
                case 34:
                  this.$ = new d.DataNode(f[g], this._$);
                  break;
                case 35:
                  this.$ = new d.IdNode(f[g], this._$);
                  break;
                case 36:
                  f[g - 2].push({
                    part: f[g],
                    separator: f[g - 1]
                  }), this.$ = f[g - 2];
                  break;
                case 37:
                  this.$ = [{
                    part: f[g]
                  }];
                  break;
                case 38:
                  this.$ = [];
                  break;
                case 39:
                  f[g - 1].push(f[g]);
                  break;
                case 48:
                  this.$ = [];
                  break;
                case 49:
                  f[g - 1].push(f[g]);
                  break;
                case 52:
                  this.$ = [f[g]];
                  break;
                case 53:
                  f[g - 1].push(f[g])
              }
            },
            table: [{
              3: 1,
              4: 2,
              5: [2, 38],
              6: 3,
              12: [2, 38],
              13: [2, 38],
              16: [2, 38],
              24: [2, 38],
              26: [2, 38],
              31: [2, 38],
              32: [2, 38],
              34: [2, 38]
            }, {
              1: [3]
            }, {
              5: [1, 4]
            }, {
              5: [2, 2],
              7: 5,
              8: 6,
              9: 7,
              10: 8,
              11: 9,
              12: [1, 10],
              13: [1, 11],
              14: 16,
              16: [1, 20],
              19: 14,
              22: 15,
              24: [1, 18],
              26: [1, 19],
              28: [2, 2],
              29: [2, 2],
              31: [1, 12],
              32: [1, 13],
              34: [1, 17]
            }, {
              1: [2, 1]
            }, {
              5: [2, 39],
              12: [2, 39],
              13: [2, 39],
              16: [2, 39],
              24: [2, 39],
              26: [2, 39],
              28: [2, 39],
              29: [2, 39],
              31: [2, 39],
              32: [2, 39],
              34: [2, 39]
            }, {
              5: [2, 3],
              12: [2, 3],
              13: [2, 3],
              16: [2, 3],
              24: [2, 3],
              26: [2, 3],
              28: [2, 3],
              29: [2, 3],
              31: [2, 3],
              32: [2, 3],
              34: [2, 3]
            }, {
              5: [2, 4],
              12: [2, 4],
              13: [2, 4],
              16: [2, 4],
              24: [2, 4],
              26: [2, 4],
              28: [2, 4],
              29: [2, 4],
              31: [2, 4],
              32: [2, 4],
              34: [2, 4]
            }, {
              5: [2, 5],
              12: [2, 5],
              13: [2, 5],
              16: [2, 5],
              24: [2, 5],
              26: [2, 5],
              28: [2, 5],
              29: [2, 5],
              31: [2, 5],
              32: [2, 5],
              34: [2, 5]
            }, {
              5: [2, 6],
              12: [2, 6],
              13: [2, 6],
              16: [2, 6],
              24: [2, 6],
              26: [2, 6],
              28: [2, 6],
              29: [2, 6],
              31: [2, 6],
              32: [2, 6],
              34: [2, 6]
            }, {
              5: [2, 7],
              12: [2, 7],
              13: [2, 7],
              16: [2, 7],
              24: [2, 7],
              26: [2, 7],
              28: [2, 7],
              29: [2, 7],
              31: [2, 7],
              32: [2, 7],
              34: [2, 7]
            }, {
              5: [2, 8],
              12: [2, 8],
              13: [2, 8],
              16: [2, 8],
              24: [2, 8],
              26: [2, 8],
              28: [2, 8],
              29: [2, 8],
              31: [2, 8],
              32: [2, 8],
              34: [2, 8]
            }, {
              17: 21,
              30: 22,
              41: 23,
              50: [1, 26],
              52: [1, 25],
              53: 24
            }, {
              17: 27,
              30: 22,
              41: 23,
              50: [1, 26],
              52: [1, 25],
              53: 24
            }, {
              4: 28,
              6: 3,
              12: [2, 38],
              13: [2, 38],
              16: [2, 38],
              24: [2, 38],
              26: [2, 38],
              28: [2, 38],
              29: [2, 38],
              31: [2, 38],
              32: [2, 38],
              34: [2, 38]
            }, {
              4: 29,
              6: 3,
              12: [2, 38],
              13: [2, 38],
              16: [2, 38],
              24: [2, 38],
              26: [2, 38],
              28: [2, 38],
              29: [2, 38],
              31: [2, 38],
              32: [2, 38],
              34: [2, 38]
            }, {
              12: [1, 30]
            }, {
              30: 32,
              35: 31,
              42: [1, 33],
              43: [1, 34],
              50: [1, 26],
              53: 24
            }, {
              17: 35,
              30: 22,
              41: 23,
              50: [1, 26],
              52: [1, 25],
              53: 24
            }, {
              17: 36,
              30: 22,
              41: 23,
              50: [1, 26],
              52: [1, 25],
              53: 24
            }, {
              17: 37,
              30: 22,
              41: 23,
              50: [1, 26],
              52: [1, 25],
              53: 24
            }, {
              25: [1, 38]
            }, {
              18: [2, 48],
              25: [2, 48],
              33: [2, 48],
              39: 39,
              42: [2, 48],
              43: [2, 48],
              44: [2, 48],
              45: [2, 48],
              46: [2, 48],
              50: [2, 48],
              52: [2, 48]
            }, {
              18: [2, 22],
              25: [2, 22],
              33: [2, 22],
              46: [2, 22]
            }, {
              18: [2, 35],
              25: [2, 35],
              33: [2, 35],
              42: [2, 35],
              43: [2, 35],
              44: [2, 35],
              45: [2, 35],
              46: [2, 35],
              50: [2, 35],
              52: [2, 35],
              54: [1, 40]
            }, {
              30: 41,
              50: [1, 26],
              53: 24
            }, {
              18: [2, 37],
              25: [2, 37],
              33: [2, 37],
              42: [2, 37],
              43: [2, 37],
              44: [2, 37],
              45: [2, 37],
              46: [2, 37],
              50: [2, 37],
              52: [2, 37],
              54: [2, 37]
            }, {
              33: [1, 42]
            }, {
              20: 43,
              27: 44,
              28: [1, 45],
              29: [2, 40]
            }, {
              23: 46,
              27: 47,
              28: [1, 45],
              29: [2, 42]
            }, {
              15: [1, 48]
            }, {
              25: [2, 46],
              30: 51,
              36: 49,
              38: 50,
              41: 55,
              42: [1, 52],
              43: [1, 53],
              44: [1, 54],
              45: [1, 56],
              47: 57,
              48: 58,
              49: 60,
              50: [1, 59],
              52: [1, 25],
              53: 24
            }, {
              25: [2, 31],
              42: [2, 31],
              43: [2, 31],
              44: [2, 31],
              45: [2, 31],
              50: [2, 31],
              52: [2, 31]
            }, {
              25: [2, 32],
              42: [2, 32],
              43: [2, 32],
              44: [2, 32],
              45: [2, 32],
              50: [2, 32],
              52: [2, 32]
            }, {
              25: [2, 33],
              42: [2, 33],
              43: [2, 33],
              44: [2, 33],
              45: [2, 33],
              50: [2, 33],
              52: [2, 33]
            }, {
              25: [1, 61]
            }, {
              25: [1, 62]
            }, {
              18: [1, 63]
            }, {
              5: [2, 17],
              12: [2, 17],
              13: [2, 17],
              16: [2, 17],
              24: [2, 17],
              26: [2, 17],
              28: [2, 17],
              29: [2, 17],
              31: [2, 17],
              32: [2, 17],
              34: [2, 17]
            }, {
              18: [2, 50],
              25: [2, 50],
              30: 51,
              33: [2, 50],
              36: 65,
              40: 64,
              41: 55,
              42: [1, 52],
              43: [1, 53],
              44: [1, 54],
              45: [1, 56],
              46: [2, 50],
              47: 66,
              48: 58,
              49: 60,
              50: [1, 59],
              52: [1, 25],
              53: 24
            }, {
              50: [1, 67]
            }, {
              18: [2, 34],
              25: [2, 34],
              33: [2, 34],
              42: [2, 34],
              43: [2, 34],
              44: [2, 34],
              45: [2, 34],
              46: [2, 34],
              50: [2, 34],
              52: [2, 34]
            }, {
              5: [2, 18],
              12: [2, 18],
              13: [2, 18],
              16: [2, 18],
              24: [2, 18],
              26: [2, 18],
              28: [2, 18],
              29: [2, 18],
              31: [2, 18],
              32: [2, 18],
              34: [2, 18]
            }, {
              21: 68,
              29: [1, 69]
            }, {
              29: [2, 41]
            }, {
              4: 70,
              6: 3,
              12: [2, 38],
              13: [2, 38],
              16: [2, 38],
              24: [2, 38],
              26: [2, 38],
              29: [2, 38],
              31: [2, 38],
              32: [2, 38],
              34: [2, 38]
            }, {
              21: 71,
              29: [1, 69]
            }, {
              29: [2, 43]
            }, {
              5: [2, 9],
              12: [2, 9],
              13: [2, 9],
              16: [2, 9],
              24: [2, 9],
              26: [2, 9],
              28: [2, 9],
              29: [2, 9],
              31: [2, 9],
              32: [2, 9],
              34: [2, 9]
            }, {
              25: [2, 44],
              37: 72,
              47: 73,
              48: 58,
              49: 60,
              50: [1, 74]
            }, {
              25: [1, 75]
            }, {
              18: [2, 23],
              25: [2, 23],
              33: [2, 23],
              42: [2, 23],
              43: [2, 23],
              44: [2, 23],
              45: [2, 23],
              46: [2, 23],
              50: [2, 23],
              52: [2, 23]
            }, {
              18: [2, 24],
              25: [2, 24],
              33: [2, 24],
              42: [2, 24],
              43: [2, 24],
              44: [2, 24],
              45: [2, 24],
              46: [2, 24],
              50: [2, 24],
              52: [2, 24]
            }, {
              18: [2, 25],
              25: [2, 25],
              33: [2, 25],
              42: [2, 25],
              43: [2, 25],
              44: [2, 25],
              45: [2, 25],
              46: [2, 25],
              50: [2, 25],
              52: [2, 25]
            }, {
              18: [2, 26],
              25: [2, 26],
              33: [2, 26],
              42: [2, 26],
              43: [2, 26],
              44: [2, 26],
              45: [2, 26],
              46: [2, 26],
              50: [2, 26],
              52: [2, 26]
            }, {
              18: [2, 27],
              25: [2, 27],
              33: [2, 27],
              42: [2, 27],
              43: [2, 27],
              44: [2, 27],
              45: [2, 27],
              46: [2, 27],
              50: [2, 27],
              52: [2, 27]
            }, {
              17: 76,
              30: 22,
              41: 23,
              50: [1, 26],
              52: [1, 25],
              53: 24
            }, {
              25: [2, 47]
            }, {
              18: [2, 29],
              25: [2, 29],
              33: [2, 29],
              46: [2, 29],
              49: 77,
              50: [1, 74]
            }, {
              18: [2, 37],
              25: [2, 37],
              33: [2, 37],
              42: [2, 37],
              43: [2, 37],
              44: [2, 37],
              45: [2, 37],
              46: [2, 37],
              50: [2, 37],
              51: [1, 78],
              52: [2, 37],
              54: [2, 37]
            }, {
              18: [2, 52],
              25: [2, 52],
              33: [2, 52],
              46: [2, 52],
              50: [2, 52]
            }, {
              12: [2, 13],
              13: [2, 13],
              16: [2, 13],
              24: [2, 13],
              26: [2, 13],
              28: [2, 13],
              29: [2, 13],
              31: [2, 13],
              32: [2, 13],
              34: [2, 13]
            }, {
              12: [2, 14],
              13: [2, 14],
              16: [2, 14],
              24: [2, 14],
              26: [2, 14],
              28: [2, 14],
              29: [2, 14],
              31: [2, 14],
              32: [2, 14],
              34: [2, 14]
            }, {
              12: [2, 10]
            }, {
              18: [2, 21],
              25: [2, 21],
              33: [2, 21],
              46: [2, 21]
            }, {
              18: [2, 49],
              25: [2, 49],
              33: [2, 49],
              42: [2, 49],
              43: [2, 49],
              44: [2, 49],
              45: [2, 49],
              46: [2, 49],
              50: [2, 49],
              52: [2, 49]
            }, {
              18: [2, 51],
              25: [2, 51],
              33: [2, 51],
              46: [2, 51]
            }, {
              18: [2, 36],
              25: [2, 36],
              33: [2, 36],
              42: [2, 36],
              43: [2, 36],
              44: [2, 36],
              45: [2, 36],
              46: [2, 36],
              50: [2, 36],
              52: [2, 36],
              54: [2, 36]
            }, {
              5: [2, 11],
              12: [2, 11],
              13: [2, 11],
              16: [2, 11],
              24: [2, 11],
              26: [2, 11],
              28: [2, 11],
              29: [2, 11],
              31: [2, 11],
              32: [2, 11],
              34: [2, 11]
            }, {
              30: 79,
              50: [1, 26],
              53: 24
            }, {
              29: [2, 15]
            }, {
              5: [2, 12],
              12: [2, 12],
              13: [2, 12],
              16: [2, 12],
              24: [2, 12],
              26: [2, 12],
              28: [2, 12],
              29: [2, 12],
              31: [2, 12],
              32: [2, 12],
              34: [2, 12]
            }, {
              25: [1, 80]
            }, {
              25: [2, 45]
            }, {
              51: [1, 78]
            }, {
              5: [2, 20],
              12: [2, 20],
              13: [2, 20],
              16: [2, 20],
              24: [2, 20],
              26: [2, 20],
              28: [2, 20],
              29: [2, 20],
              31: [2, 20],
              32: [2, 20],
              34: [2, 20]
            }, {
              46: [1, 81]
            }, {
              18: [2, 53],
              25: [2, 53],
              33: [2, 53],
              46: [2, 53],
              50: [2, 53]
            }, {
              30: 51,
              36: 82,
              41: 55,
              42: [1, 52],
              43: [1, 53],
              44: [1, 54],
              45: [1, 56],
              50: [1, 26],
              52: [1, 25],
              53: 24
            }, {
              25: [1, 83]
            }, {
              5: [2, 19],
              12: [2, 19],
              13: [2, 19],
              16: [2, 19],
              24: [2, 19],
              26: [2, 19],
              28: [2, 19],
              29: [2, 19],
              31: [2, 19],
              32: [2, 19],
              34: [2, 19]
            }, {
              18: [2, 28],
              25: [2, 28],
              33: [2, 28],
              42: [2, 28],
              43: [2, 28],
              44: [2, 28],
              45: [2, 28],
              46: [2, 28],
              50: [2, 28],
              52: [2, 28]
            }, {
              18: [2, 30],
              25: [2, 30],
              33: [2, 30],
              46: [2, 30],
              50: [2, 30]
            }, {
              5: [2, 16],
              12: [2, 16],
              13: [2, 16],
              16: [2, 16],
              24: [2, 16],
              26: [2, 16],
              28: [2, 16],
              29: [2, 16],
              31: [2, 16],
              32: [2, 16],
              34: [2, 16]
            }],
            defaultActions: {
              4: [2, 1],
              44: [2, 41],
              47: [2, 43],
              57: [2, 47],
              63: [2, 10],
              70: [2, 15],
              73: [2, 45]
            },
            parseError: function(a) {
              throw new Error(a)
            },
            parse: function(a) {
              function b() {
                var a;
                return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
              }
              var c = this,
                d = [0],
                e = [null],
                f = [],
                g = this.table,
                h = "",
                i = 0,
                j = 0,
                k = 0;
              this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
              var l = this.lexer.yylloc;
              f.push(l);
              var m = this.lexer.options && this.lexer.options.ranges;
              "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
              for (var n, o, p, q, r, s, t, u, v, w = {};;) {
                if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                  var x = "";
                  if (!k) {
                    v = [];
                    for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                    x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                      text: this.lexer.match,
                      token: this.terminals_[n] || n,
                      line: this.lexer.yylineno,
                      loc: l,
                      expected: v
                    })
                  }
                }
                if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                switch (q[0]) {
                  case 1:
                    d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                    break;
                  case 2:
                    if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                        first_line: f[f.length - (t || 1)].first_line,
                        last_line: f[f.length - 1].last_line,
                        first_column: f[f.length - (t || 1)].first_column,
                        last_column: f[f.length - 1].last_column
                      }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                    t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                    break;
                  case 3:
                    return !0
                }
              }
              return !0
            }
          },
          c = function() {
            var a = {
              EOF: 1,
              parseError: function(a, b) {
                if (!this.yy.parser) throw new Error(a);
                this.yy.parser.parseError(a, b)
              },
              setInput: function(a) {
                return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                  first_line: 1,
                  first_column: 0,
                  last_line: 1,
                  last_column: 0
                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
              },
              input: function() {
                var a = this._input[0];
                this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
                var b = a.match(/(?:\r\n?|\n).*/g);
                return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
              },
              unput: function(a) {
                var b = a.length,
                  c = a.split(/(?:\r\n?|\n)/g);
                this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
                var d = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
                var e = this.yylloc.range;
                return this.yylloc = {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.first_column,
                  last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
              },
              more: function() {
                return this._more = !0, this
              },
              less: function(a) {
                this.unput(this.match.slice(a))
              },
              pastInput: function() {
                var a = this.matched.substr(0, this.matched.length - this.match.length);
                return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
              },
              upcomingInput: function() {
                var a = this.match;
                return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
              },
              showPosition: function() {
                var a = this.pastInput(),
                  b = new Array(a.length + 1).join("-");
                return a + this.upcomingInput() + "\n" + b + "^"
              },
              next: function() {
                if (this.done) return this.EOF;
                this._input || (this.done = !0);
                var a, b, c, d, e;
                this._more || (this.yytext = "", this.match = "");
                for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
                return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                  first_line: this.yylloc.last_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.last_column,
                  last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                  text: "",
                  token: null,
                  line: this.yylineno
                })
              },
              lex: function() {
                var a = this.next();
                return "undefined" != typeof a ? a : this.lex()
              },
              begin: function(a) {
                this.conditionStack.push(a)
              },
              popState: function() {
                return this.conditionStack.pop()
              },
              _currentRules: function() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
              },
              topState: function() {
                return this.conditionStack[this.conditionStack.length - 2]
              },
              pushState: function(a) {
                this.begin(a)
              }
            };
            return a.options = {}, a.performAction = function(a, b, c, d) {
              function e(a, c) {
                return b.yytext = b.yytext.substr(a, b.yyleng - c)
              }
              switch (c) {
                case 0:
                  if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 12;
                  break;
                case 1:
                  return 12;
                case 2:
                  return this.popState(), 12;
                case 3:
                  return b.yytext = b.yytext.substr(5, b.yyleng - 9), this.popState(), 15;
                case 4:
                  return 12;
                case 5:
                  return e(0, 4), this.popState(), 13;
                case 6:
                  return 45;
                case 7:
                  return 46;
                case 8:
                  return 16;
                case 9:
                  return this.popState(), this.begin("raw"), 18;
                case 10:
                  return 34;
                case 11:
                  return 24;
                case 12:
                  return 29;
                case 13:
                  return this.popState(), 28;
                case 14:
                  return this.popState(), 28;
                case 15:
                  return 26;
                case 16:
                  return 26;
                case 17:
                  return 32;
                case 18:
                  return 31;
                case 19:
                  this.popState(), this.begin("com");
                  break;
                case 20:
                  return e(3, 5), this.popState(), 13;
                case 21:
                  return 31;
                case 22:
                  return 51;
                case 23:
                  return 50;
                case 24:
                  return 50;
                case 25:
                  return 54;
                case 26:
                  break;
                case 27:
                  return this.popState(), 33;
                case 28:
                  return this.popState(), 25;
                case 29:
                  return b.yytext = e(1, 2).replace(/\\"/g, '"'), 42;
                case 30:
                  return b.yytext = e(1, 2).replace(/\\'/g, "'"), 42;
                case 31:
                  return 52;
                case 32:
                  return 44;
                case 33:
                  return 44;
                case 34:
                  return 43;
                case 35:
                  return 50;
                case 36:
                  return b.yytext = e(1, 2), 50;
                case 37:
                  return "INVALID";
                case 38:
                  return 5
              }
            }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
              mu: {
                rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                inclusive: !1
              },
              emu: {
                rules: [2],
                inclusive: !1
              },
              com: {
                rules: [5],
                inclusive: !1
              },
              raw: {
                rules: [3, 4],
                inclusive: !1
              },
              INITIAL: {
                rules: [0, 1, 38],
                inclusive: !0
              }
            }, a
          }();
        return b.lexer = c, a.prototype = b, b.Parser = a, new a
      }();
      return a = b
    }(),
    i = function(a) {
      "use strict";

      function b(a, b) {
        return {
          left: "~" === a.charAt(2),
          right: "~" === b.charAt(b.length - 3)
        }
      }

      function c(a, b, c, d, i, k) {
        if (a.sexpr.id.original !== d.path.original) throw new j(a.sexpr.id.original + " doesn't match " + d.path.original, a);
        var l = c && c.program,
          m = {
            left: a.strip.left,
            right: d.strip.right,
            openStandalone: f(b.statements),
            closeStandalone: e((l || b).statements)
          };
        if (a.strip.right && g(b.statements, null, !0), l) {
          var n = c.strip;
          n.left && h(b.statements, null, !0), n.right && g(l.statements, null, !0), d.strip.left && h(l.statements, null, !0), e(b.statements) && f(l.statements) && (h(b.statements), g(l.statements))
        } else d.strip.left && h(b.statements, null, !0);
        return i ? new this.BlockNode(a, l, b, m, k) : new this.BlockNode(a, b, l, m, k)
      }

      function d(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
          var i = a[c],
            j = i.strip;
          if (j) {
            var k = e(a, c, b, "partial" === i.type),
              l = f(a, c, b),
              m = j.openStandalone && k,
              n = j.closeStandalone && l,
              o = j.inlineStandalone && k && l;
            j.right && g(a, c, !0), j.left && h(a, c, !0), o && (g(a, c), h(a, c) && "partial" === i.type && (i.indent = /([ \t]+$)/.exec(a[c - 1].original) ? RegExp.$1 : "")), m && (g((i.program || i.inverse).statements), h(a, c)), n && (g(a, c), h((i.inverse || i.program).statements))
          }
        }
        return a
      }

      function e(a, b, c) {
        void 0 === b && (b = a.length);
        var d = a[b - 1],
          e = a[b - 2];
        return d ? "content" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c
      }

      function f(a, b, c) {
        void 0 === b && (b = -1);
        var d = a[b + 1],
          e = a[b + 2];
        return d ? "content" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c
      }

      function g(a, b, c) {
        var d = a[null == b ? 0 : b + 1];
        if (d && "content" === d.type && (c || !d.rightStripped)) {
          var e = d.string;
          d.string = d.string.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.string !== e
        }
      }

      function h(a, b, c) {
        var d = a[null == b ? a.length - 1 : b - 1];
        if (d && "content" === d.type && (c || !d.leftStripped)) {
          var e = d.string;
          return d.string = d.string.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.string !== e, d.leftStripped
        }
      }
      var i = {},
        j = a;
      return i.stripFlags = b, i.prepareBlock = c, i.prepareProgram = d, i
    }(c),
    j = function(a, b, c, d) {
      "use strict";

      function e(a) {
        return a.constructor === h.ProgramNode ? a : (g.yy = k, g.parse(a))
      }
      var f = {},
        g = a,
        h = b,
        i = c,
        j = d.extend;
      f.parser = g;
      var k = {};
      return j(k, i, h), f.parse = e, f
    }(h, g, i, b),
    k = function(a, b) {
      "use strict";

      function c() {}

      function d(a, b, c) {
        if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode) throw new h("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
        b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
        var d = c.parse(a),
          e = (new c.Compiler).compile(d, b);
        return (new c.JavaScriptCompiler).compile(e, b)
      }

      function e(a, b, c) {
        function d() {
          var d = c.parse(a),
            e = (new c.Compiler).compile(d, b),
            f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
          return c.template(f)
        }
        if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode) throw new h("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
        b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
        var e, f = function(a, b) {
          return e || (e = d()), e.call(this, a, b)
        };
        return f._setup = function(a) {
          return e || (e = d()), e._setup(a)
        }, f._child = function(a, b, c) {
          return e || (e = d()), e._child(a, b, c)
        }, f
      }

      function f(a, b) {
        if (a === b) return !0;
        if (i(a) && i(b) && a.length === b.length) {
          for (var c = 0; c < a.length; c++)
            if (!f(a[c], b[c])) return !1;
          return !0
        }
      }
      var g = {},
        h = a,
        i = b.isArray,
        j = [].slice;
      return g.Compiler = c, c.prototype = {
        compiler: c,
        equals: function(a) {
          var b = this.opcodes.length;
          if (a.opcodes.length !== b) return !1;
          for (var c = 0; b > c; c++) {
            var d = this.opcodes[c],
              e = a.opcodes[c];
            if (d.opcode !== e.opcode || !f(d.args, e.args)) return !1
          }
          for (b = this.children.length, c = 0; b > c; c++)
            if (!this.children[c].equals(a.children[c])) return !1;
          return !0
        },
        guid: 0,
        compile: function(a, b) {
          this.opcodes = [], this.children = [], this.depths = {
            list: []
          }, this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds;
          var c = this.options.knownHelpers;
          if (this.options.knownHelpers = {
              helperMissing: !0,
              blockHelperMissing: !0,
              each: !0,
              "if": !0,
              unless: !0,
              "with": !0,
              log: !0,
              lookup: !0
            }, c)
            for (var d in c) this.options.knownHelpers[d] = c[d];
          return this.accept(a)
        },
        accept: function(a) {
          return this[a.type](a)
        },
        program: function(a) {
          for (var b = a.statements, c = 0, d = b.length; d > c; c++) this.accept(b[c]);
          return this.isSimple = 1 === d, this.depths.list = this.depths.list.sort(function(a, b) {
            return a - b
          }), this
        },
        compileProgram: function(a) {
          var b, c = (new this.compiler).compile(a, this.options),
            d = this.guid++;
          this.usePartial = this.usePartial || c.usePartial, this.children[d] = c;
          for (var e = 0, f = c.depths.list.length; f > e; e++) b = c.depths.list[e], 2 > b || this.addDepth(b - 1);
          return d
        },
        block: function(a) {
          var b = a.mustache,
            c = a.program,
            d = a.inverse;
          c && (c = this.compileProgram(c)), d && (d = this.compileProgram(d));
          var e = b.sexpr,
            f = this.classifySexpr(e);
          "helper" === f ? this.helperSexpr(e, c, d) : "simple" === f ? (this.simpleSexpr(e), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("blockValue", e.id.original)) : (this.ambiguousSexpr(e, c, d), this.opcode("pushProgram", c), this.opcode("pushProgram", d), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
        },
        hash: function(a) {
          var b, c, d = a.pairs;
          for (this.opcode("pushHash"), b = 0, c = d.length; c > b; b++) this.pushParam(d[b][1]);
          for (; b--;) this.opcode("assignToHash", d[b][0]);
          this.opcode("popHash")
        },
        partial: function(a) {
          var b = a.partialName;
          this.usePartial = !0, a.hash ? this.accept(a.hash) : this.opcode("push", "undefined"), a.context ? this.accept(a.context) : (this.opcode("getContext", 0), this.opcode("pushContext")), this.opcode("invokePartial", b.name, a.indent || ""), this.opcode("append")
        },
        content: function(a) {
          a.string && this.opcode("appendContent", a.string)
        },
        mustache: function(a) {
          this.sexpr(a.sexpr), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
        },
        ambiguousSexpr: function(a, b, c) {
          var d = a.id,
            e = d.parts[0],
            f = null != b || null != c;
          this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.ID(d), this.opcode("invokeAmbiguous", e, f)
        },
        simpleSexpr: function(a) {
          var b = a.id;
          "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth), this.opcode("getContext", b.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
        },
        helperSexpr: function(a, b, c) {
          var d = this.setupFullMustacheParams(a, b, c),
            e = a.id,
            f = e.parts[0];
          if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);
          else {
            if (this.options.knownHelpersOnly) throw new h("You specified knownHelpersOnly, but used the unknown helper " + f, a);
            e.falsy = !0, this.ID(e), this.opcode("invokeHelper", d.length, e.original, e.isSimple)
          }
        },
        sexpr: function(a) {
          var b = this.classifySexpr(a);
          "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
        },
        ID: function(a) {
          this.addDepth(a.depth), this.opcode("getContext", a.depth);
          var b = a.parts[0];
          b ? this.opcode("lookupOnContext", a.parts, a.falsy, a.isScoped) : this.opcode("pushContext")
        },
        DATA: function(a) {
          this.options.data = !0, this.opcode("lookupData", a.id.depth, a.id.parts)
        },
        STRING: function(a) {
          this.opcode("pushString", a.string)
        },
        NUMBER: function(a) {
          this.opcode("pushLiteral", a.number)
        },
        BOOLEAN: function(a) {
          this.opcode("pushLiteral", a.bool)
        },
        comment: function() {},
        opcode: function(a) {
          this.opcodes.push({
            opcode: a,
            args: j.call(arguments, 1)
          })
        },
        addDepth: function(a) {
          0 !== a && (this.depths[a] || (this.depths[a] = !0, this.depths.list.push(a)))
        },
        classifySexpr: function(a) {
          var b = a.isHelper,
            c = a.eligibleHelper,
            d = this.options;
          if (c && !b) {
            var e = a.id.parts[0];
            d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1)
          }
          return b ? "helper" : c ? "ambiguous" : "simple"
        },
        pushParams: function(a) {
          for (var b = 0, c = a.length; c > b; b++) this.pushParam(a[b])
        },
        pushParam: function(a) {
          this.stringParams ? (a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", a.stringModeValue, a.type), "sexpr" === a.type && this.sexpr(a)) : (this.trackIds && this.opcode("pushId", a.type, a.idName || a.stringModeValue), this.accept(a))
        },
        setupFullMustacheParams: function(a, b, c) {
          var d = a.params;
          return this.pushParams(d), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.hash(a.hash) : this.opcode("emptyHash"), d
        }
      }, g.precompile = d, g.compile = e, g
    }(c, b),
    l = function(a, b) {
      "use strict";

      function c(a) {
        this.value = a
      }

      function d() {}
      var e, f = a.COMPILER_REVISION,
        g = a.REVISION_CHANGES,
        h = b;
      d.prototype = {
        nameLookup: function(a, b) {
          return d.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']"
        },
        depthedLookup: function(a) {
          return this.aliases.lookup = "this.lookup", 'lookup(depths, "' + a + '")'
        },
        compilerInfo: function() {
          var a = f,
            b = g[a];
          return [a, b]
        },
        appendToBuffer: function(a) {
          return this.environment.isSimple ? "return " + a + ";" : {
            appendToBuffer: !0,
            content: a,
            toString: function() {
              return "buffer += " + a + ";"
            }
          }
        },
        initializeBuffer: function() {
          return this.quotedString("")
        },
        namespace: "Handlebars",
        compile: function(a, b, c, d) {
          this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || {
            programs: [],
            environments: []
          }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
            list: []
          }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.depths.list.length || this.options.compat;
          var e, f, g, i = a.opcodes;
          for (f = 0, g = i.length; g > f; f++) e = i[f], this[e.opcode].apply(this, e.args);
          if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new h("Compile completed with content left on stack");
          var j = this.createFunctionContext(d);
          if (this.isChild) return j;
          var k = {
              compiler: this.compilerInfo(),
              main: j
            },
            l = this.context.programs;
          for (f = 0, g = l.length; g > f; f++) l[f] && (k[f] = l[f]);
          return this.environment.usePartial && (k.usePartial = !0), this.options.data && (k.useData = !0), this.useDepths && (k.useDepths = !0), this.options.compat && (k.compat = !0), d || (k.compiler = JSON.stringify(k.compiler), k = this.objectLiteral(k)), k
        },
        preamble: function() {
          this.lastContext = 0, this.source = []
        },
        createFunctionContext: function(a) {
          var b = "",
            c = this.stackVars.concat(this.registers.list);
          c.length > 0 && (b += ", " + c.join(", "));
          for (var d in this.aliases) this.aliases.hasOwnProperty(d) && (b += ", " + d + "=" + this.aliases[d]);
          var e = ["depth0", "helpers", "partials", "data"];
          this.useDepths && e.push("depths");
          var f = this.mergeSource(b);
          return a ? (e.push(f), Function.apply(this, e)) : "function(" + e.join(",") + ") {\n  " + f + "}"
        },
        mergeSource: function(a) {
          for (var b, c, d = "", e = !this.forceBuffer, f = 0, g = this.source.length; g > f; f++) {
            var h = this.source[f];
            h.appendToBuffer ? b = b ? b + "\n    + " + h.content : h.content : (b && (d ? d += "buffer += " + b + ";\n  " : (c = !0, d = b + ";\n  "), b = void 0), d += h + "\n  ", this.environment.isSimple || (e = !1))
          }
          return e ? (b || !d) && (d += "return " + (b || '""') + ";\n") : (a += ", buffer = " + (c ? "" : this.initializeBuffer()), d += b ? "return buffer + " + b + ";\n" : "return buffer;\n"), a && (d = "var " + a.substring(2) + (c ? "" : ";\n  ") + d), d
        },
        blockValue: function(a) {
          this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
          var b = [this.contextName(0)];
          this.setupParams(a, 0, b);
          var c = this.popStack();
          b.splice(1, 0, c), this.push("blockHelperMissing.call(" + b.join(", ") + ")")
        },
        ambiguousBlockValue: function() {
          this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
          var a = [this.contextName(0)];
          this.setupParams("", 0, a, !0), this.flushInline();
          var b = this.topStack();
          a.splice(1, 0, b), this.pushSource("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }")
        },
        appendContent: function(a) {
          this.pendingContent && (a = this.pendingContent + a), this.pendingContent = a
        },
        append: function() {
          this.flushInline();
          var a = this.popStack();
          this.pushSource("if (" + a + " != null) { " + this.appendToBuffer(a) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
        },
        appendEscaped: function() {
          this.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
        },
        getContext: function(a) {
          this.lastContext = a
        },
        pushContext: function() {
          this.pushStackLiteral(this.contextName(this.lastContext))
        },
        lookupOnContext: function(a, b, c) {
          var d = 0,
            e = a.length;
          for (c || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[d++])); e > d; d++) this.replaceStack(function(c) {
            var e = this.nameLookup(c, a[d], "context");
            return b ? " && " + e : " != null ? " + e + " : " + c
          })
        },
        lookupData: function(a, b) {
          a ? this.pushStackLiteral("this.data(data, " + a + ")") : this.pushStackLiteral("data");
          for (var c = b.length, d = 0; c > d; d++) this.replaceStack(function(a) {
            return " && " + this.nameLookup(a, b[d], "data")
          })
        },
        resolvePossibleLambda: function() {
          this.aliases.lambda = "this.lambda", this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
        },
        pushStringParam: function(a, b) {
          this.pushContext(), this.pushString(b), "sexpr" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
        },
        emptyHash: function() {
          this.pushStackLiteral("{}"), this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}"))
        },
        pushHash: function() {
          this.hash && this.hashes.push(this.hash), this.hash = {
            values: [],
            types: [],
            contexts: [],
            ids: []
          }
        },
        popHash: function() {
          var a = this.hash;
          this.hash = this.hashes.pop(), this.trackIds && this.push("{" + a.ids.join(",") + "}"), this.stringParams && (this.push("{" + a.contexts.join(",") + "}"), this.push("{" + a.types.join(",") + "}")), this.push("{\n    " + a.values.join(",\n    ") + "\n  }")
        },
        pushString: function(a) {
          this.pushStackLiteral(this.quotedString(a))
        },
        push: function(a) {
          return this.inlineStack.push(a), a
        },
        pushLiteral: function(a) {
          this.pushStackLiteral(a)
        },
        pushProgram: function(a) {
          null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null)
        },
        invokeHelper: function(a, b, c) {
          this.aliases.helperMissing = "helpers.helperMissing";
          var d = this.popStack(),
            e = this.setupHelper(a, b),
            f = (c ? e.name + " || " : "") + d + " || helperMissing";
          this.push("((" + f + ").call(" + e.callParams + "))")
        },
        invokeKnownHelper: function(a, b) {
          var c = this.setupHelper(a, b);
          this.push(c.name + ".call(" + c.callParams + ")")
        },
        invokeAmbiguous: function(a, b) {
          this.aliases.functionType = '"function"', this.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
          var c = this.popStack();
          this.emptyHash();
          var d = this.setupHelper(0, a, b),
            e = this.lastHelper = this.nameLookup("helpers", a, "helper");
          this.push("((helper = (helper = " + e + " || " + c + ") != null ? helper : helperMissing" + (d.paramsInit ? "),(" + d.paramsInit : "") + "),(typeof helper === functionType ? helper.call(" + d.callParams + ") : helper))")
        },
        invokePartial: function(a, b) {
          var c = [this.nameLookup("partials", a, "partial"), "'" + b + "'", "'" + a + "'", this.popStack(), this.popStack(), "helpers", "partials"];
          this.options.data ? c.push("data") : this.options.compat && c.push("undefined"), this.options.compat && c.push("depths"), this.push("this.invokePartial(" + c.join(", ") + ")")
        },
        assignToHash: function(a) {
          var b, c, d, e = this.popStack();
          this.trackIds && (d = this.popStack()), this.stringParams && (c = this.popStack(), b = this.popStack());
          var f = this.hash;
          b && f.contexts.push("'" + a + "': " + b), c && f.types.push("'" + a + "': " + c), d && f.ids.push("'" + a + "': " + d), f.values.push("'" + a + "': (" + e + ")")
        },
        pushId: function(a, b) {
          "ID" === a || "DATA" === a ? this.pushString(b) : "sexpr" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
        },
        compiler: d,
        compileChildren: function(a, b) {
          for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
            c = e[f], d = new this.compiler;
            var h = this.matchExistingProgram(c);
            null == h ? (this.context.programs.push(""), h = this.context.programs.length, c.index = h, c.name = "program" + h, this.context.programs[h] = d.compile(c, b, this.context, !this.precompile), this.context.environments[h] = c, this.useDepths = this.useDepths || d.useDepths) : (c.index = h, c.name = "program" + h)
          }
        },
        matchExistingProgram: function(a) {
          for (var b = 0, c = this.context.environments.length; c > b; b++) {
            var d = this.context.environments[b];
            if (d && d.equals(a)) return b
          }
        },
        programExpression: function(a) {
          var b = this.environment.children[a],
            c = (b.depths.list, this.useDepths),
            d = [b.index, "data"];
          return c && d.push("depths"), "this.program(" + d.join(", ") + ")"
        },
        useRegister: function(a) {
          this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
        },
        pushStackLiteral: function(a) {
          return this.push(new c(a))
        },
        pushSource: function(a) {
          this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), a && this.source.push(a)
        },
        pushStack: function(a) {
          this.flushInline();
          var b = this.incrStack();
          return this.pushSource(b + " = " + a + ";"), this.compileStack.push(b), b
        },
        replaceStack: function(a) {
          {
            var b, d, e, f = "";
            this.isInline()
          }
          if (!this.isInline()) throw new h("replaceStack on non-inline");
          var g = this.popStack(!0);
          if (g instanceof c) f = b = g.value, e = !0;
          else {
            d = !this.stackSlot;
            var i = d ? this.incrStack() : this.topStackName();
            f = "(" + this.push(i) + " = " + g + ")", b = this.topStack()
          }
          var j = a.call(this, b);
          e || this.popStack(), d && this.stackSlot--, this.push("(" + f + j + ")")
        },
        incrStack: function() {
          return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
        },
        topStackName: function() {
          return "stack" + this.stackSlot
        },
        flushInline: function() {
          var a = this.inlineStack;
          if (a.length) {
            this.inlineStack = [];
            for (var b = 0, d = a.length; d > b; b++) {
              var e = a[b];
              e instanceof c ? this.compileStack.push(e) : this.pushStack(e)
            }
          }
        },
        isInline: function() {
          return this.inlineStack.length
        },
        popStack: function(a) {
          var b = this.isInline(),
            d = (b ? this.inlineStack : this.compileStack).pop();
          if (!a && d instanceof c) return d.value;
          if (!b) {
            if (!this.stackSlot) throw new h("Invalid stack pop");
            this.stackSlot--
          }
          return d
        },
        topStack: function() {
          var a = this.isInline() ? this.inlineStack : this.compileStack,
            b = a[a.length - 1];
          return b instanceof c ? b.value : b
        },
        contextName: function(a) {
          return this.useDepths && a ? "depths[" + a + "]" : "depth" + a
        },
        quotedString: function(a) {
          return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
        },
        objectLiteral: function(a) {
          var b = [];
          for (var c in a) a.hasOwnProperty(c) && b.push(this.quotedString(c) + ":" + a[c]);
          return "{" + b.join(",") + "}"
        },
        setupHelper: function(a, b, c) {
          var d = [],
            e = this.setupParams(b, a, d, c),
            f = this.nameLookup("helpers", b, "helper");
          return {
            params: d,
            paramsInit: e,
            name: f,
            callParams: [this.contextName(0)].concat(d).join(", ")
          }
        },
        setupOptions: function(a, b, c) {
          var d, e, f, g = {},
            h = [],
            i = [],
            j = [];
          g.name = this.quotedString(a), g.hash = this.popStack(), this.trackIds && (g.hashIds = this.popStack()), this.stringParams && (g.hashTypes = this.popStack(), g.hashContexts = this.popStack()), e = this.popStack(), f = this.popStack(), (f || e) && (f || (f = "this.noop"), e || (e = "this.noop"), g.fn = f, g.inverse = e);
          for (var k = b; k--;) d = this.popStack(), c[k] = d, this.trackIds && (j[k] = this.popStack()), this.stringParams && (i[k] = this.popStack(), h[k] = this.popStack());
          return this.trackIds && (g.ids = "[" + j.join(",") + "]"), this.stringParams && (g.types = "[" + i.join(",") + "]", g.contexts = "[" + h.join(",") + "]"), this.options.data && (g.data = "data"), g
        },
        setupParams: function(a, b, c, d) {
          var e = this.objectLiteral(this.setupOptions(a, b, c));
          return d ? (this.useRegister("options"), c.push("options"), "options=" + e) : (c.push(e), "")
        }
      };
      for (var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), j = d.RESERVED_WORDS = {}, k = 0, l = i.length; l > k; k++) j[i[k]] = !0;
      return d.isValidJavaScriptVariableName = function(a) {
        return !d.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)
      }, e = d
    }(d, c),
    m = function(a, b, c, d, e) {
      "use strict";
      var f, g = a,
        h = b,
        i = c.parser,
        j = c.parse,
        k = d.Compiler,
        l = d.compile,
        m = d.precompile,
        n = e,
        o = g.create,
        p = function() {
          var a = o();
          return a.compile = function(b, c) {
            return l(b, c, a)
          }, a.precompile = function(b, c) {
            return m(b, c, a)
          }, a.AST = h, a.Compiler = k, a.JavaScriptCompiler = n, a.Parser = i, a.parse = j, a
        };
      return g = p(), g.create = p, g["default"] = g, f = g
    }(f, g, j, k, l);
  return m
});

! function(e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  function n(e) {
    return u.raw ? e : encodeURIComponent(e)
  }

  function o(e) {
    return u.raw ? e : decodeURIComponent(e)
  }

  function i(e) {
    return n(u.json ? JSON.stringify(e) : String(e))
  }

  function t(e) {
    0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
    } catch (n) {}
  }

  function r(n, o) {
    var i = u.raw ? n : t(n);
    return e.isFunction(o) ? o(i) : i
  }
  var c = /\+/g,
    u = e.cookie = function(t, c, s) {
      if (arguments.length > 1 && !e.isFunction(c)) {
        if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
          var a = s.expires,
            d = s.expires = new Date;
          d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
        }
        return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
      }
      for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
        var x = p[l].split("="),
          g = o(x.shift()),
          j = x.join("=");
        if (t === g) {
          f = r(j, c);
          break
        }
        t || void 0 === (j = r(j)) || (f[g] = j)
      }
      return f
    };
  u.defaults = {}, e.removeCookie = function(n, o) {
    return e.cookie(n, "", e.extend({}, o, {
      expires: -1
    })), !e.cookie(n)
  }
});

;
window.Modernizr = function(a, b, c) {
  function x(a) {
    i.cssText = a
  }

  function y(a, b) {
    return x(l.join(a + ";") + (b || ""))
  }

  function z(a, b) {
    return typeof a === b
  }

  function A(a, b) {
    return !!~("" + a).indexOf(b)
  }

  function B(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!A(e, "-") && i[e] !== c) return b == "pfx" ? e : !0
    }
    return !1
  }

  function C(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
    }
    return !1
  }

  function D(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + n.join(d + " ") + d).split(" ");
    return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
  }
  var d = "2.6.2",
    e = {},
    f = b.documentElement,
    g = "modernizr",
    h = b.createElement(g),
    i = h.style,
    j, k = {}.toString,
    l = " -webkit- -moz- -o- -ms- ".split(" "),
    m = "Webkit Moz O ms",
    n = m.split(" "),
    o = m.toLowerCase().split(" "),
    p = {},
    q = {},
    r = {},
    s = [],
    t = s.slice,
    u, v = {}.hasOwnProperty,
    w;
  !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
    return v.call(a, b)
  } : w = function(a, b) {
    return b in a && z(a.constructor.prototype[b], "undefined")
  }, Function.prototype.bind || (Function.prototype.bind = function(b) {
    var c = this;
    if (typeof c != "function") throw new TypeError;
    var d = t.call(arguments, 1),
      e = function() {
        if (this instanceof e) {
          var a = function() {};
          a.prototype = c.prototype;
          var f = new a,
            g = c.apply(f, d.concat(t.call(arguments)));
          return Object(g) === g ? g : f
        }
        return c.apply(b, d.concat(t.call(arguments)))
      };
    return e
  }), p.opacity = function() {
    return y("opacity:.55"), /^0.55$/.test(i.opacity)
  }, p.cssanimations = function() {
    return D("animationName")
  };
  for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
  return e.addTest = function(a, b) {
      if (typeof a == "object")
        for (var d in a) w(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b
      }
      return e
    }, x(""), h = j = null,
    function(a, b) {
      function k(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
      }

      function l() {
        var a = r.elements;
        return typeof a == "string" ? a.split(" ") : a
      }

      function m(a) {
        var b = i[a[g]];
        return b || (b = {}, h++, a[g] = h, i[h] = b), b
      }

      function n(a, c, f) {
        c || (c = b);
        if (j) return c.createElement(a);
        f || (f = m(c));
        var g;
        return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
      }

      function o(a, c) {
        a || (a = b);
        if (j) return a.createDocumentFragment();
        c = c || m(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = l(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d
      }

      function p(a, b) {
        b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
          return r.shivMethods ? n(c, a, b) : b.createElem(c)
        }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
          return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
        }) + ");return n}")(r, b.frag)
      }

      function q(a) {
        a || (a = b);
        var c = m(a);
        return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
      }
      var c = a.html5 || {},
        d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        f, g = "_html5shiv",
        h = 0,
        i = {},
        j;
      (function() {
        try {
          var a = b.createElement("a");
          a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
            b.createElement("a");
            var a = b.createDocumentFragment();
            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
          }()
        } catch (c) {
          f = !0, j = !0
        }
      })();
      var r = {
        elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: c.shivCSS !== !1,
        supportsUnknownElements: j,
        shivMethods: c.shivMethods !== !1,
        type: "default",
        shivDocument: q,
        createElement: n,
        createDocumentFragment: o
      };
      a.html5 = r, q(b)
    }(this, b), e._version = d, e._prefixes = l, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
      return B([a])
    }, e.testAllProps = D, e
}(this, this.document);

! function(t) {
  ! function(t) {
    t.fn.vAlign = function() {
      return this.each(function() {
        var e = t(this).outerHeight();
        t(this).css("margin-bottom", -e / 2)
      })
    }
  }(t),
  function(t) {
    function e(t) {
      return "object" == typeof t ? t : {
        top: t,
        left: t
      }
    }
    var n = t.scrollTo = function(e, n, o) {
      t(window).scrollTo(e, n, o)
    };
    n.defaults = {
      axis: "xy",
      duration: parseFloat(t.fn.$) >= 1.3 ? 0 : 1,
      limit: !0
    }, n.window = function() {
      return t(window)._scrollable()
    }, t.fn._scrollable = function() {
      return this.map(function() {
        var e = this,
          n = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
        if (!n) return e;
        var o = (e.contentWindow || e).document || e.ownerDocument || e;
        return /webkit/i.test(navigator.userAgent) || "BackCompat" == o.compatMode ? o.body : o.documentElement
      })
    }, t.fn.scrollTo = function(o, i, r) {
      return "object" == typeof i && (r = i, i = 0), "function" == typeof r && (r = {
        onAfter: r
      }), "max" == o && (o = 9e9), r = t.extend({}, n.defaults, r), i = i || r.duration, r.queue = r.queue && r.axis.length > 1, r.queue && (i /= 2), r.offset = e(r.offset), r.over = e(r.over), this._scrollable().each(function() {
        function a(t) {
          u.animate(l, i, r.easing, t && function() {
            t.call(this, o, r)
          })
        }
        if (null != o) {
          var s, c = this,
            u = t(c),
            f = o,
            l = {},
            m = u.is("html,body");
          switch (typeof f) {
            case "number":
            case "string":
              if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                f = e(f);
                break
              }
              if (f = t(f, this), !f.length) return;
            case "object":
              (f.is || f.style) && (s = (f = t(f)).offset())
          }
          t.each(r.axis.split(""), function(t, e) {
            var o = "x" == e ? "Left" : "Top",
              i = o.toLowerCase(),
              d = "scroll" + o,
              h = c[d],
              b = n.max(c, e);
            if (s) l[d] = s[i] + (m ? 0 : h - u.offset()[i]), r.margin && (l[d] -= parseInt(f.css("margin" + o)) || 0, l[d] -= parseInt(f.css("border" + o + "Width")) || 0), l[d] += r.offset[i] || 0, r.over[i] && (l[d] += f["x" == e ? "width" : "height"]() * r.over[i]);
            else {
              var w = f[i];
              l[d] = w.slice && "%" == w.slice(-1) ? parseFloat(w) / 100 * b : w
            }
            r.limit && /^\d+$/.test(l[d]) && (l[d] = l[d] <= 0 ? 0 : Math.min(l[d], b)), !t && r.queue && (h != l[d] && a(r.onAfterFirst), delete l[d])
          }), a(r.onAfter)
        }
      }).end()
    }, n.max = function(e, n) {
      var o = "x" == n ? "Width" : "Height",
        i = "scroll" + o;
      if (!t(e).is("html,body")) return e[i] - t(e)[o.toLowerCase()]();
      var r = "client" + o,
        a = e.ownerDocument.documentElement,
        s = e.ownerDocument.body;
      return Math.max(a[i], s[i]) - Math.min(a[r], s[r])
    }
  }(t)
}(jQuery);

! function(n, e, t) {
  n.jRespond = function(n) {
    var e = [],
      i = [],
      r = n,
      o = "",
      u = "",
      l = 0,
      f = 100,
      c = 500,
      a = c,
      h = function() {
        var n = 0;
        return n = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth
      },
      d = function(n) {
        if (n.length === t) g(n);
        else
          for (var e = 0; e < n.length; e++) g(n[e])
      },
      g = function(n) {
        var r = n.breakpoint,
          l = n.enter || t;
        e.push(n), i.push(!1), m(r) && (l !== t && l.call(null, {
          entering: o,
          exiting: u
        }), i[e.length - 1] = !0)
      },
      p = function() {
        for (var n = [], r = [], l = 0; l < e.length; l++) {
          var f = e[l].breakpoint,
            c = e[l].enter || t,
            a = e[l].exit || t;
          "*" === f ? (c !== t && n.push(c), a !== t && r.push(a)) : m(f) ? (c === t || i[l] || n.push(c), i[l] = !0) : (a !== t && i[l] && r.push(a), i[l] = !1)
        }
        for (var h = {
            entering: o,
            exiting: u
          }, d = 0; d < r.length; d++) r[d].call(null, h);
        for (var g = 0; g < n.length; g++) n[g].call(null, h)
      },
      s = function(n) {
        for (var e = !1, t = 0; t < r.length; t++)
          if (n >= r[t].enter && n <= r[t].exit) {
            e = !0;
            break
          } e && o !== r[t].label ? (u = o, o = r[t].label, p()) : e || "" === o || (o = "", p())
      },
      m = function(n) {
        if ("object" == typeof n) {
          if (n.join().indexOf(o) >= 0) return !0
        } else {
          if ("*" === n) return !0;
          if ("string" == typeof n && o === n) return !0
        }
      },
      v = function() {
        var n = h();
        n !== l ? (a = f, s(n)) : a = c, l = n, setTimeout(v, a)
      };
    return v(), {
      addFunc: function(n) {
        d(n)
      },
      getBreakpoint: function() {
        return o
      }
    }
  }
}(this, this.document);

! function(a) {
  a.fn.hoverIntent = function(b, c, d) {
    var e = {
      interval: 100,
      sensitivity: 6,
      timeout: 0
    };
    e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
      over: b,
      out: c,
      selector: d
    }) : a.extend(e, {
      over: b,
      out: b,
      selector: c
    });
    var f, g, h, i, j = function(a) {
        f = a.pageX, g = a.pageY
      },
      k = function(b, c) {
        return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = !0, e.over.apply(c, [b])) : (h = f, i = g, c.hoverIntent_t = setTimeout(function() {
          k(b, c)
        }, e.interval), void 0)
      },
      l = function(a, b) {
        return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = !1, e.out.apply(b, [a])
      },
      m = function(b) {
        var c = a.extend({}, b),
          d = this;
        d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" === b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function() {
          k(c, d)
        }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
          l(c, d)
        }, e.timeout)))
      };
    return this.on({
      "mouseenter.hoverIntent": m,
      "mouseleave.hoverIntent": m
    }, e.selector)
  }
}(jQuery);

! function(n) {
  n.jPanelMenu = function(e) {
    ("undefined" == typeof e || null == e) && (e = {});
    var t = {
      options: n.extend({
        menu: "#menu",
        panel: "body",
        trigger: ".menu-trigger",
        excludedPanelContent: "style, script",
        clone: !0,
        keepEventHandlers: !1,
        direction: "left",
        openPosition: "250px",
        animated: !0,
        closeOnContentClick: !0,
        keyboardShortcuts: [{
          code: 27,
          open: !1,
          close: !0
        }, {
          code: 37,
          open: !1,
          close: !0
        }, {
          code: 39,
          open: !0,
          close: !0
        }, {
          code: 77,
          open: !0,
          close: !0
        }],
        duration: 150,
        openDuration: e.duration || 150,
        closeDuration: e.duration || 150,
        easing: "ease-in-out",
        openEasing: e.easing || "ease-in-out",
        closeEasing: e.easing || "ease-in-out",
        before: function() {},
        beforeOpen: function() {},
        beforeClose: function() {},
        after: function() {},
        afterOpen: function() {},
        afterClose: function() {},
        beforeOn: function() {},
        afterOn: function() {},
        beforeOff: function() {},
        afterOff: function() {}
      }, e),
      settings: {
        transitionsSupported: "WebkitTransition" in document.body.style || "MozTransition" in document.body.style || "msTransition" in document.body.style || "OTransition" in document.body.style || "Transition" in document.body.style,
        transformsSupported: "WebkitTransform" in document.body.style || "MozTransform" in document.body.style || "msTransform" in document.body.style || "OTransform" in document.body.style || "Transform" in document.body.style,
        cssPrefix: "",
        panelPosition: "static",
        positionUnits: "px"
      },
      menu: "#jPanelMenu-menu",
      panel: ".jPanelMenu-panel",
      timeouts: {},
      clearTimeouts: function() {
        clearTimeout(t.timeouts.open), clearTimeout(t.timeouts.afterOpen), clearTimeout(t.timeouts.afterClose)
      },
      setPositionUnits: function() {
        for (var n = !1, e = ["%", "px", "em"], o = 0; o < e.length; o++) {
          var i = e[o];
          t.options.openPosition.toString().substr(-i.length) == i && (n = !0, t.settings.positionUnits = i)
        }
        n || (t.options.openPosition = parseInt(t.options.openPosition) + t.settings.positionUnits)
      },
      computePositionStyle: function(n, e) {
        var o = n ? t.options.openPosition : "0" + t.settings.positionUnits,
          i = {};
        if (t.settings.transformsSupported) {
          var s = n && "right" == t.options.direction ? "-" : "",
            r = "translate3d(" + s + o + ",0,0)",
            a = "transform";
          e ? (i = "", "" != t.settings.cssPrefix && (i = t.settings.cssPrefix + a + ":" + r + ";"), i += a + ":" + r + ";") : ("" != t.settings.cssPrefix && (i[t.settings.cssPrefix + a] = r), i[a] = r)
        } else e ? (i = "", i = t.options.direction + ": " + o + ";") : i[t.options.direction] = o;
        return i
      },
      setCSSPrefix: function() {
        t.settings.cssPrefix = t.getCSSPrefix()
      },
      setjPanelMenuStyles: function() {
        var e = "background:#fff",
          o = n("html").css("background-color"),
          i = n("body").css("background-color"),
          s = function(e) {
            var t = [];
            return n.each(["background-color", "background-image", "background-position", "background-repeat", "background-attachment", "background-size", "background-clip"], function(n, o) {
              "" !== e.css(o) && t.push(o + ":" + e.css(o))
            }), t.join(";")
          };
        "transparent" !== i && "rgba(0, 0, 0, 0)" !== i ? e = s(n("body")) : "transparent" !== o && "rgba(0, 0, 0, 0)" !== o && (e = s(n("html"))), 0 == n("#jPanelMenu-style-master").length && n("body").append('<style id="jPanelMenu-style-master">body{width:100%}.jPanelMenu,body{overflow-x:hidden}#jPanelMenu-menu{display:block;position:fixed;top:0;' + t.options.direction + ":0;height:100%;z-index:-1;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.jPanelMenu-panel{position:static;" + t.options.direction + ":0;top:0;z-index:2;width:100%;min-height:100%;" + e + ";}</style>")
      },
      setMenuState: function(e) {
        var o = e ? "open" : "closed";
        n(t.options.panel).attr("data-menu-position", o)
      },
      getMenuState: function() {
        return n(t.options.panel).attr("data-menu-position")
      },
      menuIsOpen: function() {
        return "open" == t.getMenuState() ? !0 : !1
      },
      setMenuStyle: function(e) {
        n(t.menu).css(e)
      },
      setPanelStyle: function(e) {
        n(t.panel).css(e)
      },
      showMenu: function() {
        t.setMenuStyle({
          display: "block"
        }), t.setMenuStyle({
          "z-index": "1"
        })
      },
      hideMenu: function() {
        t.setMenuStyle({
          "z-index": "-1"
        }), t.setMenuStyle({
          display: "none"
        })
      },
      enableTransitions: function(e, o) {
        var i = e / 1e3,
          s = t.getCSSEasingFunction(o);
        t.disableTransitions(), n("body").append('<style id="jPanelMenu-style-transitions">.jPanelMenu-panel{' + t.settings.cssPrefix + "transition: all " + i + "s " + s + "; transition: all " + i + "s " + s + ";}</style>")
      },
      disableTransitions: function() {
        n("#jPanelMenu-style-transitions").remove()
      },
      getCSSEasingFunction: function(n) {
        switch (n) {
          case "linear":
            return n;
          case "ease":
            return n;
          case "ease-in":
            return n;
          case "ease-out":
            return n;
          case "ease-in-out":
            return n;
          default:
            return "ease-in-out"
        }
      },
      getJSEasingFunction: function(n) {
        switch (n) {
          case "linear":
            return n;
          default:
            return "swing"
        }
      },
      getVendorPrefix: function() {
        if ("result" in arguments.callee) return arguments.callee.result;
        var n = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
          e = document.getElementsByTagName("script")[0];
        for (var t in e.style)
          if (n.test(t)) return arguments.callee.result = t.match(n)[0];
        return arguments.callee.result = "WebkitOpacity" in e.style ? "Webkit" : "KhtmlOpacity" in e.style ? "Khtml" : ""
      },
      getCSSPrefix: function() {
        var n = t.getVendorPrefix();
        return "" != n ? "-" + n.toLowerCase() + "-" : ""
      },
      openMenu: function(e) {
        ("undefined" == typeof e || null == e) && (e = t.options.animated), t.clearTimeouts(), t.options.before(), t.options.beforeOpen(), t.setMenuState(!0), t.showMenu();
        var o = {
          none: e ? !1 : !0,
          transitions: e && t.settings.transitionsSupported ? !0 : !1
        };
        if (o.transitions || o.none) {
          o.none && t.disableTransitions(), o.transitions && t.enableTransitions(t.options.openDuration, t.options.openEasing);
          var i = t.computePositionStyle(!0);
          t.setPanelStyle(i), t.timeouts.afterOpen = setTimeout(function() {
            t.options.after(), t.options.afterOpen(), t.initiateContentClickListeners()
          }, t.options.openDuration)
        } else {
          var s = t.getJSEasingFunction(t.options.openEasing),
            r = {};
          r[t.options.direction] = t.options.openPosition, n(t.panel).stop().animate(r, t.options.openDuration, s, function() {
            t.options.after(), t.options.afterOpen(), t.initiateContentClickListeners()
          })
        }
      },
      closeMenu: function(e) {
        ("undefined" == typeof e || null == e) && (e = t.options.animated), t.clearTimeouts(), t.options.before(), t.options.beforeClose(), t.setMenuState(!1);
        var o = {
          none: e ? !1 : !0,
          transitions: e && t.settings.transitionsSupported ? !0 : !1
        };
        if (o.transitions || o.none) {
          o.none && t.disableTransitions(), o.transitions && t.enableTransitions(t.options.closeDuration, t.options.closeEasing);
          var i = t.computePositionStyle();
          t.setPanelStyle(i), t.timeouts.afterClose = setTimeout(function() {
            t.disableTransitions(), t.hideMenu(), t.options.after(), t.options.afterClose(), t.destroyContentClickListeners()
          }, t.options.closeDuration)
        } else {
          var s = t.getJSEasingFunction(t.options.closeEasing),
            r = {};
          r[t.options.direction] = 0 + t.settings.positionUnits, n(t.panel).stop().animate(r, t.options.closeDuration, s, function() {
            t.hideMenu(), t.options.after(), t.options.afterClose(), t.destroyContentClickListeners()
          })
        }
      },
      triggerMenu: function(n) {
        t.menuIsOpen() ? t.closeMenu(n) : t.openMenu(n)
      },
      initiateClickListeners: function() {
        n(document).on("click touchend", t.options.trigger, function(n) {
          t.triggerMenu(t.options.animated), n.preventDefault()
        })
      },
      destroyClickListeners: function() {
        n(document).off("click touchend", t.options.trigger, null)
      },
      initiateContentClickListeners: function() {
        return t.options.closeOnContentClick ? (n(document).on("click touchend", t.panel, function(n) {
          t.menuIsOpen() && t.closeMenu(t.options.animated), n.preventDefault()
        }), void 0) : !1
      },
      destroyContentClickListeners: function() {
        return t.options.closeOnContentClick ? (n(document).off("click touchend", t.panel, null), void 0) : !1
      },
      initiateKeyboardListeners: function() {
        var e = ["input", "textarea", "select"];
        n(document).on("keydown", function(o) {
          var i = n(o.target),
            s = !1;
          if (n.each(e, function() {
              i.is(this.toString()) && (s = !0)
            }), s) return !0;
          for (mapping in t.options.keyboardShortcuts)
            if (o.which == t.options.keyboardShortcuts[mapping].code) {
              var r = t.options.keyboardShortcuts[mapping];
              r.open && r.close ? t.triggerMenu(t.options.animated) : !r.open || r.close || t.menuIsOpen() ? !r.open && r.close && t.menuIsOpen() && t.closeMenu(t.options.animated) : t.openMenu(t.options.animated), o.preventDefault()
            }
        })
      },
      destroyKeyboardListeners: function() {
        n(document).off("keydown", null)
      },
      setupMarkup: function() {
        n("html").addClass("jPanelMenu"), n(t.options.panel + " > *").not(t.menu + ", " + t.options.excludedPanelContent).wrapAll('<div class="' + t.panel.replace(".", "") + '"/>');
        var e = t.options.clone ? n(t.options.menu).clone(t.options.keepEventHandlers) : n(t.options.menu);
        e.attr("id", t.menu.replace("#", "")).insertAfter(t.options.panel + " > " + t.panel)
      },
      resetMarkup: function() {
        n("html").removeClass("jPanelMenu"), n(t.options.panel + " > " + t.panel + " > *").unwrap(), n(t.menu).remove()
      },
      init: function() {
        t.options.beforeOn(), t.setPositionUnits(), t.setCSSPrefix(), t.initiateClickListeners(), "[object Array]" === Object.prototype.toString.call(t.options.keyboardShortcuts) && t.initiateKeyboardListeners(), t.setjPanelMenuStyles(), t.setMenuState(!1), t.setupMarkup(), t.setPanelStyle({
          position: t.options.animated && "static" === t.settings.panelPosition ? "relative" : t.settings.panelPosition
        }), t.setMenuStyle({
          width: t.options.openPosition
        }), t.closeMenu(!1), t.options.afterOn()
      },
      destroy: function() {
        t.options.beforeOff(), t.closeMenu(), t.destroyClickListeners(), "[object Array]" === Object.prototype.toString.call(t.options.keyboardShortcuts) && t.destroyKeyboardListeners(), t.resetMarkup();
        var n = {};
        n[t.options.direction] = "auto", t.options.afterOff()
      }
    };
    return {
      on: t.init,
      off: t.destroy,
      trigger: t.triggerMenu,
      open: t.openMenu,
      close: t.closeMenu,
      isOpen: t.menuIsOpen,
      menu: t.menu,
      getMenu: function() {
        return n(t.menu)
      },
      panel: t.panel,
      getPanel: function() {
        return n(t.panel)
      },
      setPosition: function(n) {
        ("undefined" == typeof n || null == n) && (n = t.options.openPosition), t.options.openPosition = n, t.setMenuStyle({
          width: t.options.openPosition
        })
      }
    }
  }
}(jQuery);

function vc_js() {
  vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_googleplus(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_google_fonts(), vc_gridBehaviour(), vc_rowBehaviour(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500)
}

function getSizeName() {
  var screen_w = jQuery(window).width();
  return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && 1169 > screen_w ? "desktop" : 768 < screen_w && 959 > screen_w ? "tablet" : 300 < screen_w && 767 > screen_w ? "mobile" : 300 > screen_w ? "mobile_portrait" : ""
}

function loadScript(url, $obj, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript", script.readyState && (script.onreadystatechange = function() {
    "loaded" !== script.readyState && "complete" !== script.readyState || (script.onreadystatechange = null, callback())
  }), script.src = url, $obj.get(0).appendChild(script)
}

function vc_ttaActivation() {
  jQuery("[data-vc-accordion]").on("show.vc.accordion", function(e) {
    var $ = window.jQuery,
      ui = {};
    ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui)
  })
}

function vc_accordionActivate(event, ui) {
  if (ui.newPanel.length && ui.newHeader.length) {
    var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
      $round_charts = ui.newPanel.find(".vc_round-chart"),
      $line_charts = ui.newPanel.find(".vc_line-chart"),
      $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
    "undefined" != typeof jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
      var grid = jQuery(this).data("vcGrid");
      grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
      reload: !1
    }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
      reload: !1
    }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function() {
      jQuery(this).isotope("layout")
    })
  }
}

function initVideoBackgrounds() {
  return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds()
}

function vc_initVideoBackgrounds() {
  jQuery("[data-vc-video-bg]").each(function() {
    var youtubeUrl, youtubeId, $element = jQuery(this);
    $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), youtubeId = vcExtractYoutubeId(youtubeUrl), youtubeId && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function(event, $grid) {
      $element.has($grid).length && vcResizeVideoBackground($element)
    })) : $element.find(".vc_video-bg").remove()
  })
}

function insertYoutubeVideoAsBackground($element, youtubeId, counter) {
  if ("undefined" == typeof YT || "undefined" == typeof YT.Player) return counter = "undefined" == typeof counter ? 0 : counter, 100 < counter ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function() {
    insertYoutubeVideoAsBackground($element, youtubeId, counter++)
  }, 100);
  var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
  new YT.Player($container[0], {
    width: "100%",
    height: "100%",
    videoId: youtubeId,
    playerVars: {
      playlist: youtubeId,
      iv_load_policy: 3,
      enablejsapi: 1,
      disablekb: 1,
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      loop: 1,
      wmode: "transparent"
    },
    events: {
      onReady: function(event) {
        event.target.mute().setLoop(!0)
      }
    }
  }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function() {
    vcResizeVideoBackground($element)
  })
}

function vcResizeVideoBackground($element) {
  var iframeW, iframeH, marginLeft, marginTop, containerW = $element.innerWidth(),
    containerH = $element.innerHeight(),
    ratio1 = 16,
    ratio2 = 9;
  containerW / containerH < ratio1 / ratio2 ? (iframeW = containerH * (ratio1 / ratio2), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px", iframeW += "px", iframeH += "px") : (iframeW = containerW, iframeH = containerW * (ratio2 / ratio1), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px", iframeW += "px", iframeH += "px"), $element.find(".vc_video-bg iframe").css({
    maxWidth: "1000%",
    marginLeft: marginLeft,
    marginTop: marginTop,
    width: iframeW,
    height: iframeH
  })
}

function vcExtractYoutubeId(url) {
  if ("undefined" == typeof url) return !1;
  var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
  return null !== id && id[1]
}

function vc_googleMapsPointer() {
  var $ = window.jQuery,
    $wpbGmapsWidget = $(".wpb_gmaps_widget");
  $wpbGmapsWidget.click(function() {
    $("iframe", this).css("pointer-events", "auto")
  }), $wpbGmapsWidget.mouseleave(function() {
    $("iframe", this).css("pointer-events", "none")
  }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none")
}
document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ",
  function() {
    for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ")
  }(), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function($parent) {
    var $slider = $parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider");
    $slider.each(function() {
      var this_element = jQuery(this),
        sliderSpeed = 800,
        sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval")),
        sliderFx = this_element.attr("data-flex_fx"),
        slideshow = !0;
      0 === sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
        animation: sliderFx,
        slideshow: slideshow,
        slideshowSpeed: sliderTimeout,
        sliderSpeed: sliderSpeed,
        smoothHeight: !0
      })
    })
  }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function() {
    0 < jQuery(".wpb_googleplus").length && ! function() {
      var po = document.createElement("script");
      po.type = "text/javascript", po.async = !0, po.src = "//apis.google.com/js/plusone.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(po, s)
    }()
  }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function() {
    0 < jQuery(".wpb_pinterest").length && ! function() {
      var po = document.createElement("script");
      po.type = "text/javascript", po.async = !0, po.src = "//assets.pinterest.com/js/pinit.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(po, s)
    }()
  }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function() {
    "undefined" != typeof jQuery.fn.waypoint && jQuery(".vc_progress_bar").waypoint(function() {
      jQuery(this).find(".vc_single_bar").each(function(index) {
        var $this = jQuery(this),
          bar = $this.find(".vc_bar"),
          val = bar.data("percentage-value");
        setTimeout(function() {
          bar.css({
            width: val + "%"
          })
        }, 200 * index)
      })
    }, {
      offset: "85%"
    })
  }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function() {
    "undefined" != typeof jQuery.fn.waypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function() {
      jQuery(this).addClass("wpb_start_animation animated")
    }, {
      offset: "85%"
    })
  }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function($el) {
    function event(e) {
      e && e.preventDefault && e.preventDefault();
      var title = jQuery(this),
        element = title.closest(".vc_toggle"),
        content = element.find(".vc_toggle_content");
      element.hasClass("vc_toggle_active") ? content.slideUp({
        duration: 300,
        complete: function() {
          element.removeClass("vc_toggle_active")
        }
      }) : content.slideDown({
        duration: 300,
        complete: function() {
          element.addClass("vc_toggle_active")
        }
      })
    }
    $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").click(event) : $el.find(".vc_toggle_title").unbind("click").click(event) : jQuery(".vc_toggle_title").unbind("click").on("click", event)
  }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function($tab) {
    if (jQuery.ui) {
      var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
        ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
        old_version = 1 === parseInt(ver[0]) && 9 > parseInt(ver[1]);
      $call.each(function(index) {
        var $tabs, interval = jQuery(this).attr("data-interval"),
          tabs_array = [];
        if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
            show: function(event, ui) {
              wpb_prepare_tab_content(event, ui)
            },
            beforeActivate: function(event, ui) {
              1 !== ui.newPanel.index() && ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")
            },
            activate: function(event, ui) {
              wpb_prepare_tab_content(event, ui)
            }
          }), interval && 0 < interval) try {
          $tabs.tabs("rotate", 1e3 * interval)
        } catch (e) {
          window.console && window.console.log && console.log(e)
        }
        jQuery(this).find(".wpb_tab").each(function() {
          tabs_array.push(this.id)
        }), jQuery(this).find(".wpb_tabs_nav li").click(function(e) {
          return e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1
        }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e) {
          if (e.preventDefault(), old_version) {
            var index = $tabs.tabs("option", "selected");
            jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, 0 > index ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)
          } else {
            var index = $tabs.tabs("option", "active"),
              length = $tabs.find(".wpb_tab").length;
            index = jQuery(this).parent().hasClass("wpb_next_slide") ? index + 1 >= length ? 0 : index + 1 : 0 > index - 1 ? length - 1 : index - 1, $tabs.tabs("option", "active", index)
          }
        })
      })
    }
  }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function() {
    jQuery(".wpb_accordion").each(function(index) {
      var $tabs, $this = jQuery(this),
        active_tab = ($this.attr("data-interval"), !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab")) && parseInt($this.data("active-tab")) - 1),
        collapsible = !1 === active_tab || "yes" === $this.data("collapsible");
      $tabs = $this.find(".wpb_accordion_wrapper").accordion({
        header: "> div > h3",
        autoHeight: !1,
        heightStyle: "content",
        active: active_tab,
        collapsible: collapsible,
        navigation: !0,
        activate: vc_accordionActivate,
        change: function(event, ui) {
          "undefined" != typeof jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel)
        }
      }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function() {})
    })
  }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function() {
    var layout_modes = {
      fitrows: "fitRows",
      masonry: "masonry"
    };
    jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function() {
      var $container = jQuery(this),
        $thumbs = $container.find(".wpb_thumbnails"),
        layout_mode = $thumbs.attr("data-layout-mode");
      $thumbs.isotope({
        itemSelector: ".isotope-item",
        layoutMode: "undefined" == typeof layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
      }), $container.find(".categories_filter a").data("isotope", $thumbs).click(function(e) {
        e.preventDefault();
        var $thumbs = jQuery(this).data("isotope");
        jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
          filter: jQuery(this).attr("data-filter")
        })
      }), jQuery(window).bind("load resize", function() {
        $thumbs.isotope("layout")
      })
    })
  }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function($parent) {
    var $carousel = $parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel");
    $carousel.each(function() {
      var $this = jQuery(this);
      if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
        $this.data("carousel_enabled", !0);
        var carousel_speed = (getColumnsCount(jQuery(this)), 500);
        jQuery(this).hasClass("columns_count_1") && (carousel_speed = 900);
        var carousele_li = jQuery(this).find(".wpb_thumbnails-fluid li");
        carousele_li.css({
          "margin-right": carousele_li.css("margin-left"),
          "margin-left": 0
        });
        var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
        fluid_ul.width(fluid_ul.width() + 300), jQuery(window).resize(function() {
          var before_resize = screen_size;
          screen_size = getSizeName(), before_resize != screen_size && window.setTimeout("location.reload()", 20)
        })
      }
    })
  }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function() {
    jQuery(".wpb_gallery_slides").each(function(index) {
      var $imagesGrid, this_element = jQuery(this);
      if (this_element.hasClass("wpb_slider_nivo")) {
        var sliderSpeed = 800,
          sliderTimeout = 1e3 * this_element.attr("data-interval");
        0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
          effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
          slices: 15,
          boxCols: 8,
          boxRows: 4,
          animSpeed: sliderSpeed,
          pauseTime: sliderTimeout,
          startSlide: 0,
          directionNav: !0,
          directionNavHide: !0,
          controlNav: !0,
          keyboardNav: !1,
          pauseOnHover: !0,
          manualAdvance: !1,
          prevText: "Prev",
          nextText: "Next"
        })
      } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function() {
        $imagesGrid.isotope({
          itemSelector: ".isotope-item",
          layoutMode: "fitRows"
        })
      }) : this_element.find(".wpb_image_grid_ul").isotope({
        itemSelector: ".isotope-item",
        layoutMode: "fitRows"
      }))
    })
  }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function() {
    try {
      jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
        animationSpeed: "normal",
        hook: "data-rel",
        padding: 15,
        opacity: .7,
        showTitle: !0,
        allowresize: !0,
        counter_separator_label: "/",
        hideflash: !1,
        deeplinking: !1,
        modal: !1,
        callback: function() {
          var url = location.href;
          url.indexOf("#!prettyPhoto") > -1 && (location.hash = "")
        },
        social_tools: ""
      })
    } catch (err) {
      window.console && window.console.log && console.log(err)
    }
  }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function() {
    return !1
  }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function() {
    function fullWidthRow() {
      var $elements = $('[data-vc-full-width="true"]');
      $.each($elements, function(key, item) {
        var $el = $(this);
        $el.addClass("vc_hidden");
        var $el_full = $el.next(".vc_row-full-width");
        if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
          var el_margin_left = parseInt($el.css("margin-left"), 10),
            el_margin_right = parseInt($el.css("margin-right"), 10),
            offset = 0 - $el_full.offset().left - el_margin_left,
            width = $(window).width();
          if ($el.css({
              position: "relative",
              left: offset,
              "box-sizing": "border-box",
              width: $(window).width()
            }), !$el.data("vcStretchContent")) {
            var padding = -1 * offset;
            0 > padding && (padding = 0);
            var paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right;
            0 > paddingRight && (paddingRight = 0), $el.css({
              "padding-left": padding + "px",
              "padding-right": paddingRight + "px"
            })
          }
          $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
            el: $el,
            offset: offset,
            marginLeft: el_margin_left,
            marginRight: el_margin_right,
            elFull: $el_full,
            width: width
          })
        }
      }), $(document).trigger("vc-full-width-row", $elements)
    }

    function parallaxRow() {
      var vcSkrollrOptions, callSkrollInit = !1;
      return window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function() {
        var skrollrSpeed, skrollrSize, skrollrStart, skrollrEnd, $parallaxElement, parallaxImage, youtubeId;
        callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), $parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this)), $parallaxElement.height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), youtubeId = vcExtractYoutubeId(parallaxImage), youtubeId ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : "undefined" != typeof parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrSpeed = skrollrSize - 100, skrollrStart = -skrollrSpeed, skrollrEnd = 0, $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: " + skrollrEnd + "%;")
      }), !(!callSkrollInit || !window.skrollr) && (vcSkrollrOptions = {
        forceHeight: !1,
        smoothScrolling: !1,
        mobileCheck: function() {
          return !1
        }
      }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll)
    }

    function fullHeightRow() {
      var $element = $(".vc_row-o-full-height:first");
      if ($element.length) {
        var $window, windowHeight, offsetTop, fullHeight;
        $window = $(window), windowHeight = $window.height(), offsetTop = $element.offset().top, offsetTop < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh"))
      }
      $(document).trigger("vc-full-height-row", $element)
    }

    function fixIeFlexbox() {
      var ua = window.navigator.userAgent,
        msie = ua.indexOf("MSIE ");
      (msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function() {
        "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')
      })
    }
    var $ = window.jQuery;
    $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), fixIeFlexbox(), vc_initVideoBackgrounds(), parallaxRow()
  }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function() {
    jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid()
  }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function(el) {
    for (var find = !1, i = 1; !1 === find;) {
      if (el.hasClass("columns_count_" + i)) return find = !0, i;
      i++
    }
  });
var screen_size = getSizeName();
"function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function(event, ui) {
  var $ui_panel, $google_maps, panel = ui.panel || ui.newPanel,
    $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
    $round_charts = panel.find(".vc_round-chart"),
    $line_charts = panel.find(".vc_line-chart"),
    $carousel = panel.find('[data-ride="vc_carousel"]');
  if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
      var grid = jQuery(this).data("vcGrid");
      grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function() {
      var grid = jQuery(this).data("vcGrid");
      grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry()
    }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
      reload: !1
    }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
      reload: !1
    }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
    var $frame = $google_maps.find("iframe");
    $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready")
  }
  panel.parents(".isotope").length && panel.parents(".isotope").each(function() {
    jQuery(this).isotope("layout")
  })
}), "function" != typeof window.vc_googleMapsPointer, jQuery(document).ready(function($) {
  window.vc_js()
});

/*!
 * Packery PACKAGED | Metafizzy | http://packery.metafizzy.co
 */
(function(t) {
  "use strict";

  function e(t) {
    return RegExp("(^|\\s+)" + t + "(\\s+|$)")
  }

  function i(t, e) {
    var i = n(t, e) ? r : o;
    i(t, e)
  }
  var n, o, r;
  "classList" in document.documentElement ? (n = function(t, e) {
    return t.classList.contains(e)
  }, o = function(t, e) {
    t.classList.add(e)
  }, r = function(t, e) {
    t.classList.remove(e)
  }) : (n = function(t, i) {
    return e(i).test(t.className)
  }, o = function(t, e) {
    n(t, e) || (t.className = t.className + " " + e)
  }, r = function(t, i) {
    t.className = t.className.replace(e(i), " ")
  }), t.classie = {
    hasClass: n,
    addClass: o,
    removeClass: r,
    toggleClass: i,
    has: n,
    add: o,
    remove: r,
    toggle: i
  }
})(window),
function(t) {
  "use strict";

  function e() {}

  function i(t, e) {
    if (o) return e.indexOf(t);
    for (var i = e.length; i--;)
      if (e[i] === t) return i;
    return -1
  }
  var n = e.prototype,
    o = Array.prototype.indexOf ? !0 : !1;
  n._getEvents = function() {
    return this._events || (this._events = {})
  }, n.getListeners = function(t) {
    var e = this._getEvents();
    return e[t] || (e[t] = [])
  }, n.addListener = function(t, e) {
    var n = this.getListeners(t);
    return -1 === i(e, n) && n.push(e), this
  }, n.on = n.addListener, n.removeListener = function(t, e) {
    var n = this.getListeners(t),
      o = i(e, n);
    return -1 !== o && (n.splice(o, 1), 0 === n.length && this.removeEvent(t)), this
  }, n.off = n.removeListener, n.addListeners = function(t, e) {
    return this.manipulateListeners(!1, t, e)
  }, n.removeListeners = function(t, e) {
    return this.manipulateListeners(!0, t, e)
  }, n.manipulateListeners = function(t, e, i) {
    var n, o, r = t ? this.removeListener : this.addListener,
      s = t ? this.removeListeners : this.addListeners;
    if ("object" == typeof e)
      for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
    else
      for (n = i.length; n--;) r.call(this, e, i[n]);
    return this
  }, n.removeEvent = function(t) {
    return t ? delete this._getEvents()[t] : delete this._events, this
  }, n.emitEvent = function(t, e) {
    for (var i, n = this.getListeners(t), o = n.length; o--;) i = e ? n[o].apply(null, e) : n[o](), i === !0 && this.removeListener(t, n[o]);
    return this
  }, n.trigger = n.emitEvent, n.emit = function(t) {
    var e = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t, e)
  }, "function" == typeof define && define.amd ? define(function() {
    return e
  }) : t.EventEmitter = e
}(this),
function(t) {
  "use strict";
  var e = document.documentElement,
    i = function() {};
  e.addEventListener ? i = function(t, e, i) {
    t.addEventListener(e, i, !1)
  } : e.attachEvent && (i = function(e, i, n) {
    e[i + n] = n.handleEvent ? function() {
      var e = t.event;
      e.target = e.target || e.srcElement, n.handleEvent.call(n, e)
    } : function() {
      var i = t.event;
      i.target = i.target || i.srcElement, n.call(e, i)
    }, e.attachEvent("on" + i, e[i + n])
  });
  var n = function() {};
  e.removeEventListener ? n = function(t, e, i) {
    t.removeEventListener(e, i, !1)
  } : e.detachEvent && (n = function(t, e, i) {
    t.detachEvent("on" + e, t[e + i]), delete t[e + i]
  });
  var o = {
    bind: i,
    unbind: n
  };
  "function" == typeof define && define.amd ? define(o) : t.eventie = o
}(this),
function(t) {
  "use strict";

  function e(t) {
    e.isReady ? t() : e.on("ready", t)
  }

  function i(t) {
    var i = "readystatechange" === t.type && "complete" !== r.readyState;
    e.isReady || i || (e.isReady = !0, e.emit("ready", t))
  }
  var n = t.EventEmitter,
    o = t.eventie,
    r = t.document;
  e.isReady = !1;
  for (var s in n.prototype) e[s] = n.prototype[s];
  o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i), t.docReady = e
}(this),
function(t) {
  "use strict";

  function e(t) {
    if (t) {
      if ("string" == typeof n[t]) return t;
      t = t.charAt(0).toUpperCase() + t.slice(1);
      for (var e, o = 0, r = i.length; r > o; o++)
        if (e = i[o] + t, "string" == typeof n[e]) return e
    }
  }
  var i = "Webkit Moz ms Ms O".split(" "),
    n = document.documentElement.style;
  "function" == typeof define && define.amd ? define(function() {
    return e
  }) : t.getStyleProperty = e
}(window),
function(t) {
  "use strict";

  function e(t) {
    var e = parseFloat(t),
      i = -1 === t.indexOf("%") && !isNaN(e);
    return i && e
  }

  function i() {
    for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0, i = s.length; i > e; e++) {
      var n = s[e];
      t[n] = 0
    }
    return t
  }

  function n(t) {
    function n(t) {
      if ("object" == typeof t && t.nodeType) {
        var n = r(t);
        if ("none" === n.display) return i();
        var h = {};
        h.width = t.offsetWidth, h.height = t.offsetHeight;
        for (var p = h.isBorderBox = !(!a || !n[a] || "border-box" !== n[a]), c = 0, u = s.length; u > c; c++) {
          var l = s[c],
            d = n[l],
            f = parseFloat(d);
          h[l] = isNaN(f) ? 0 : f
        }
        var m = h.paddingLeft + h.paddingRight,
          y = h.paddingTop + h.paddingBottom,
          g = h.marginLeft + h.marginRight,
          v = h.marginTop + h.marginBottom,
          x = h.borderLeftWidth + h.borderRightWidth,
          E = h.borderTopWidth + h.borderBottomWidth,
          w = p && o,
          S = e(n.width);
        S !== !1 && (h.width = S + (w ? 0 : m + x));
        var T = e(n.height);
        return T !== !1 && (h.height = T + (w ? 0 : y + E)), h.innerWidth = h.width - (m + x), h.innerHeight = h.height - (y + E), h.outerWidth = h.width + g, h.outerHeight = h.height + v, h
      }
    }
    var o, a = t("boxSizing");
    return function() {
      if (a) {
        var t = document.createElement("div");
        t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[a] = "border-box";
        var i = document.body || document.documentElement;
        i.appendChild(t);
        var n = r(t);
        o = 200 === e(n.width), i.removeChild(t)
      }
    }(), n
  }
  var o = document.defaultView,
    r = o && o.getComputedStyle ? function(t) {
      return o.getComputedStyle(t, null)
    } : function(t) {
      return t.currentStyle
    },
    s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  "function" == typeof define && define.amd ? define(["get-style-property"], n) : t.getSize = n(t.getStyleProperty)
}(window),
function(t, e) {
  "use strict";

  function i() {}

  function n(t) {
    t.prototype.option || (t.prototype.option = function(t) {
      e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
    })
  }

  function o(t, i) {
    e.fn[t] = function(n) {
      if ("string" == typeof n) {
        for (var o = r.call(arguments, 1), a = 0, h = this.length; h > a; a++) {
          var p = this[a],
            c = e.data(p, t);
          if (c)
            if (e.isFunction(c[n]) && "_" !== n.charAt(0)) {
              var u = c[n].apply(c, o);
              if (void 0 !== u) return u
            } else s("no such method '" + n + "' for " + t + " instance");
          else s("cannot call methods on " + t + " prior to initialization; " + "attempted to call '" + n + "'")
        }
        return this
      }
      return this.each(function() {
        var o = e.data(this, t);
        o ? (o.option(n), o._init()) : (o = new i(this, n), e.data(this, t, o))
      })
    }
  }
  if (e) {
    var r = Array.prototype.slice,
      s = "undefined" == typeof console ? i : function(t) {
        console.error(t)
      };
    e.bridget = function(t, e) {
      n(e), o(t, e)
    }
  }
}(window, window.jQuery),
function(t, e) {
  "use strict";

  function i(t, e) {
    return t[a](e)
  }

  function n(t) {
    var e = document.createDocumentFragment();
    e.appendChild(t)
  }

  function o(t, e) {
    t.parentNode || n(t);
    for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++)
      if (i[o] === t) return !0;
    return !1
  }

  function r(t, e) {
    return t.parentNode || n(t), i(t, e)
  }
  var s, a = function() {
    for (var t = ["matchesSelector", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], i = 0, n = t.length; n > i; i++) {
      var o = t[i];
      if (e[o]) return o
    }
  }();
  if (a) {
    var h = document.createElement("div"),
      p = i(h, "div");
    s = p ? i : r
  } else s = o;
  "function" == typeof define && define.amd ? define(function() {
    return s
  }) : window.matchesSelector = s
}(this, Element.prototype),
function(t) {
  "use strict";

  function e(t) {
    for (var i in e.defaults) this[i] = e.defaults[i];
    for (i in t) this[i] = t[i]
  }
  var i = t.Packery = function() {};
  i.Rect = e, e.defaults = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }, e.prototype.contains = function(t) {
    var e = t.width || 0,
      i = t.height || 0;
    return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
  }, e.prototype.overlaps = function(t) {
    var e = this.x + this.width,
      i = this.y + this.height,
      n = t.x + t.width,
      o = t.y + t.height;
    return n > this.x && e > t.x && o > this.y && i > t.y
  }, e.prototype.getMaximalFreeRects = function(t) {
    if (!this.overlaps(t)) return !1;
    var i, n = [],
      o = this.x + this.width,
      r = this.y + this.height,
      s = t.x + t.width,
      a = t.y + t.height;
    return this.y < t.y && (i = new e({
      x: this.x,
      y: this.y,
      width: this.width,
      height: t.y - this.y
    }), n.push(i)), o > s && (i = new e({
      x: s,
      y: this.y,
      width: o - s,
      height: this.height
    }), n.push(i)), r > a && (i = new e({
      x: this.x,
      y: a,
      width: this.width,
      height: r - a
    }), n.push(i)), this.x < t.x && (i = new e({
      x: this.x,
      y: this.y,
      width: t.x - this.x,
      height: this.height
    }), n.push(i)), n
  }, e.prototype.canFit = function(t) {
    return this.width >= t.width && this.height >= t.height
  }
}(window),
function(t) {
  "use strict";

  function e(t, e) {
    this.width = t || 0, this.height = e || 0, this.reset()
  }
  var i = t.Packery,
    n = i.Rect;
  e.prototype.reset = function() {
    this.spaces = [], this.newSpaces = [];
    var t = new n({
      x: 0,
      y: 0,
      width: this.width,
      height: this.height
    });
    this.spaces.push(t)
  }, e.prototype.pack = function(t) {
    for (var e = 0, i = this.spaces.length; i > e; e++) {
      var n = this.spaces[e];
      if (n.canFit(t)) {
        this.placeInSpace(t, n);
        break
      }
    }
  }, e.prototype.placeInSpace = function(t, e) {
    t.x = e.x, t.y = e.y, this.placed(t)
  }, e.prototype.placed = function(t) {
    for (var i = [], n = 0, o = this.spaces.length; o > n; n++) {
      var r = this.spaces[n],
        s = r.getMaximalFreeRects(t);
      s ? i.push.apply(i, s) : i.push(r)
    }
    this.spaces = i, e.mergeRects(this.spaces), this.spaces.sort(e.spaceSorterTopLeft)
  }, e.mergeRects = function(t) {
    for (var e = 0, i = t.length; i > e; e++) {
      var n = t[e];
      if (n) {
        var o = t.slice(0);
        o.splice(e, 1);
        for (var r = 0, s = 0, a = o.length; a > s; s++) {
          var h = o[s],
            p = e > s ? 0 : 1;
          n.contains(h) && (t.splice(s + p - r, 1), r++)
        }
      }
    }
    return t
  }, e.spaceSorterTopLeft = function(t, e) {
    return t.y - e.y || t.x - e.x
  }, e.spaceSorterLeftTop = function(t, e) {
    return t.x - e.x || t.y - e.y
  }, i.Packer = e
}(window),
function(t) {
  "use strict";

  function e(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }

  function i(t, e) {
    this.element = t, this.packery = e, this.position = {
      x: 0,
      y: 0
    }, this.rect = new o, this.placeRect = new o, this.element.style.position = "absolute"
  }
  var n = t.Packery,
    o = n.Rect,
    r = t.getSize,
    s = t.getStyleProperty,
    a = t.EventEmitter,
    h = document.defaultView,
    p = h && h.getComputedStyle ? function(t) {
      return h.getComputedStyle(t, null)
    } : function(t) {
      return t.currentStyle
    },
    c = s("transition"),
    u = s("transform"),
    l = c && u,
    d = !!s("perspective"),
    f = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "otransitionend",
      transition: "transitionend"
    } [c],
    m = {
      WebkitTransform: "-webkit-transform",
      MozTransform: "-moz-transform",
      OTransform: "-o-transform",
      transform: "transform"
    } [u];
  e(i.prototype, a.prototype), i.prototype.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, i.prototype.getSize = function() {
    this.size = r(this.element)
  }, i.prototype.css = function(t) {
    var e = this.element.style;
    for (var i in t) e[i] = t[i]
  }, i.prototype.getPosition = function() {
    var t = p(this.element),
      e = parseInt(t.left, 10),
      i = parseInt(t.top, 10);
    e = isNaN(e) ? 0 : e, i = isNaN(i) ? 0 : i;
    var n = this.packery.elementSize;
    e -= n.paddingLeft, i -= n.paddingTop, this.position.x = e, this.position.y = i
  };
  var y = d ? function(t, e) {
    return "translate3d( " + t + "px, " + e + "px, 0)"
  } : function(t, e) {
    return "translate( " + t + "px, " + e + "px)"
  };
  i.prototype._transitionTo = function(t, e) {
    this.getPosition();
    var i = this.position.x,
      n = this.position.y,
      o = parseInt(t, 10),
      r = parseInt(e, 10),
      s = o === this.position.x && r === this.position.y;
    if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
    var a = t - i,
      h = e - n,
      p = {};
    p[m] = y(a, h), this.transition(p, this.layoutPosition)
  }, i.prototype.goTo = function(t, e) {
    this.setPosition(t, e), this.layoutPosition()
  }, i.prototype.moveTo = l ? i.prototype._transitionTo : i.prototype.goTo, i.prototype.setPosition = function(t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
  }, i.prototype.layoutPosition = function() {
    var t = this.packery.elementSize;
    this.css({
      left: this.position.x + t.paddingLeft + "px",
      top: this.position.y + t.paddingTop + "px"
    }), this.emitEvent("layout", [this])
  }, i.prototype._nonTransition = function(t, e) {
    this.css(t), e && e.call(this)
  }, i.prototype._transition = function(t, e) {
    this.transitionStyle = t;
    var i = [];
    for (var n in t) i.push(n);
    var o = {};
    o[c + "Property"] = i.join(","), o[c + "Duration"] = this.packery.options.transitionDuration, this.element.addEventListener(f, this, !1), e && this.on("transitionEnd", function(t) {
      return e.call(t), !0
    }), this.css(o), this.css(t), this.isTransitioning = !0
  }, i.prototype.transition = i.prototype[c ? "_transition" : "_nonTransition"], i.prototype.onwebkitTransitionEnd = function(t) {
    this.ontransitionend(t)
  }, i.prototype.onotransitionend = function(t) {
    this.ontransitionend(t)
  }, i.prototype.ontransitionend = function(t) {
    if (t.target === this.element) {
      this.onTransitionEnd && (this.onTransitionEnd(), delete this.onTransitionEnd), this.removeTransitionStyles();
      var e = {};
      for (var i in this.transitionStyle) e[i] = "";
      this.css(e), this.element.removeEventListener(f, this, !1), delete this.transitionStyle, this.isTransitioning = !1, this.emitEvent("transitionEnd", [this])
    }
  }, i.prototype.removeTransitionStyles = function() {
    var t = {};
    t[c + "Property"] = "", t[c + "Duration"] = "", this.css(t)
  }, i.prototype.remove = function() {
    var t = {
      opacity: 0
    };
    t[m] = "scale(0.001)", this.transition(t, this.removeElem)
  }, i.prototype.removeElem = function() {
    this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
  }, i.prototype.reveal = c ? function() {
    var t = {
      opacity: 0
    };
    t[m] = "scale(0.001)", this.css(t);
    var e = this.element.offsetHeight,
      i = {
        opacity: 1
      };
    i[m] = "scale(1)", this.transition(i), e = null
  } : function() {}, i.prototype.destroy = function() {
    this.css({
      position: "",
      left: "",
      top: ""
    })
  }, i.prototype.dragStart = function() {
    this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && u && (this.element.style[u] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
  }, i.prototype.dragMove = function(t, e) {
    this.didDrag = !0;
    var i = this.packery.elementSize;
    t -= i.paddingLeft, e -= i.paddingTop, this.positionPlaceRect(t, e)
  }, i.prototype.dragStop = function() {
    this.getPosition();
    var t = this.position.x !== this.placeRect.x,
      e = this.position.y !== this.placeRect.y;
    this.needsPositioning = t || e, this.didDrag = !1
  }, i.prototype.positionPlaceRect = function(t, e, i) {
    this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, i)
  }, i.prototype.getPlaceRectCoord = function(t, e, i) {
    var n = e ? "Width" : "Height",
      o = this.size["outer" + n],
      r = this.packery[e ? "columnWidth" : "rowHeight"],
      s = this.packery.elementSize["inner" + n];
    e || (s = Math.max(s, this.packery.maxY), this.packery.rowHeight || (s -= this.packery.gutter));
    var a;
    if (r) {
      r += this.packery.gutter, s += e ? this.packery.gutter : 0, t = Math.round(t / r);
      var h = Math[e ? "floor" : "ceil"](s / r);
      h -= Math.ceil(o / r), a = h
    } else a = s - o;
    return t = i ? t : Math.min(t, a), t *= r || 1, Math.max(0, t)
  }, i.prototype.copyPlaceRectPosition = function() {
    this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
  }, n.Item = i
}(window),
function(t) {
  "use strict";

  function e(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }

  function i(t) {
    var e = [];
    if ("number" == typeof t.length)
      for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
    else e.push(t);
    return e
  }

  function n(t, i) {
    if (!t || !g(t)) return m && m.error("bad Packery element: " + t), void 0;
    this.element = t, this.options = e({}, this.options), e(this.options, i);
    var n = ++x;
    this.element.packeryGUID = n, E[n] = this, this._create(), this.options.isInitLayout && this.layout()
  }
  var o = t.Packery,
    r = o.Rect,
    s = o.Packer,
    a = o.Item,
    h = t.classie,
    p = t.docReady,
    c = t.EventEmitter,
    u = t.eventie,
    l = t.getSize,
    d = t.matchesSelector,
    f = t.document,
    m = t.console,
    y = t.jQuery,
    g = "object" == typeof HTMLElement ? function(t) {
      return t instanceof HTMLElement
    } : function(t) {
      return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
    },
    v = Array.prototype.indexOf ? function(t, e) {
      return t.indexOf(e)
    } : function(t, e) {
      for (var i = 0, n = t.length; n > i; i++)
        if (t[i] === e) return i;
      return -1
    },
    x = 0,
    E = {};
  e(n.prototype, c.prototype), n.prototype.options = {
    containerStyle: {
      position: "relative"
    },
    isInitLayout: !0,
    isResizeBound: !0,
    transitionDuration: "0.4s"
  }, n.prototype._create = function() {
    this.packer = new s, this.reloadItems(), this.stampedElements = [], this.stamp(this.options.stamped);
    var t = this.options.containerStyle;
    e(this.element.style, t), this.options.isResizeBound && this.bindResize();
    var i = this;
    this.handleDraggabilly = {
      dragStart: function(t) {
        i.itemDragStart(t.element)
      },
      dragMove: function(t) {
        i.itemDragMove(t.element, t.position.x, t.position.y)
      },
      dragEnd: function(t) {
        i.itemDragEnd(t.element)
      }
    }, this.handleUIDraggable = {
      start: function(t) {
        i.itemDragStart(t.currentTarget)
      },
      drag: function(t, e) {
        i.itemDragMove(t.currentTarget, e.position.left, e.position.top)
      },
      stop: function(t) {
        i.itemDragEnd(t.currentTarget)
      }
    }
  }, n.prototype.reloadItems = function() {
    this.items = this._getItems(this.element.children)
  }, n.prototype._getItems = function(t) {
    for (var e = this._filterFindItemElements(t), i = [], n = 0, o = e.length; o > n; n++) {
      var r = e[n],
        s = new a(r, this);
      i.push(s)
    }
    return i
  }, n.prototype._filterFindItemElements = function(t) {
    t = i(t);
    var e = this.options.itemSelector;
    if (!e) return t;
    for (var n = [], o = 0, r = t.length; r > o; o++) {
      var s = t[o];
      d(s, e) && n.push(s);
      for (var a = s.querySelectorAll(e), h = 0, p = a.length; p > h; h++) n.push(a[h])
    }
    return n
  }, n.prototype.getItemElements = function() {
    for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
    return t
  }, n.prototype.layout = function() {
    this._prelayout();
    var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, t), this._isLayoutInited = !0
  }, n.prototype._init = n.prototype.layout, n.prototype._prelayout = function() {
    this.elementSize = l(this.element), this._getMeasurements(), this.packer.width = this.elementSize.innerWidth + this.gutter, this.packer.height = Number.POSITIVE_INFINITY, this.packer.reset(), this.maxY = 0, this.placeStampedElements()
  }, n.prototype._getMeasurements = function() {
    this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
  }, n.prototype._getMeasurement = function(t, e) {
    var i, n = this.options[t];
    n ? ("string" == typeof n ? i = this.element.querySelector(n) : g(n) && (i = n), this[t] = i ? l(i)[e] : n) : this[t] = 0
  }, n.prototype.layoutItems = function(t, e) {
    var i = this._getLayoutItems(t);
    this._itemsOn(i, "layout", function() {
      this.emitEvent("layoutComplete", [this, i])
    });
    for (var n = 0, o = i.length; o > n; n++) {
      var r = i[n];
      this._packItem(r), this._layoutItem(r, e)
    }
    var s = this.elementSize,
      a = this.maxY - this.gutter;
    s.isBorderBox && (a += s.paddingBottom + s.paddingTop + s.borderTopWidth + s.borderBottomWidth), this.element.style.height = a + "px"
  }, n.prototype._getLayoutItems = function(t) {
    for (var e = [], i = 0, n = t.length; n > i; i++) {
      var o = t[i];
      o.isIgnored || e.push(o)
    }
    return e
  }, n.prototype._packItem = function(t) {
    this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxY(t.rect)
  }, n.prototype._setMaxY = function(t) {
    this.maxY = Math.max(t.y + t.height, this.maxY)
  }, n.prototype._setRectSize = function(t, e) {
    var i = l(t),
      n = i.outerWidth,
      o = i.outerHeight,
      r = this.columnWidth + this.gutter,
      s = this.rowHeight + this.gutter;
    n = this.columnWidth ? Math.ceil(n / r) * r : n + this.gutter, o = this.rowHeight ? Math.ceil(o / s) * s : o + this.gutter, e.width = Math.min(n, this.packer.width), e.height = o
  }, n.prototype._layoutItem = function(t, e) {
    var i = t.rect;
    e ? t.goTo(i.x, i.y) : t.moveTo(i.x, i.y)
  }, n.prototype._itemsOn = function(t, e, i) {
    function n() {
      return o++, o === r && i.call(s), !0
    }
    for (var o = 0, r = t.length, s = this, a = 0, h = t.length; h > a; a++) {
      var p = t[a];
      p.on(e, n)
    }
  }, n.prototype.stamp = function(t) {
    if (t) {
      "string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t), this.stampedElements.push.apply(this.stampedElements, t);
      for (var e = 0, n = t.length; n > e; e++) {
        var o = t[e];
        this.ignore(o)
      }
    }
  }, n.prototype.unstamp = function(t) {
    if (t) {
      t = i(t);
      for (var e = 0, n = t.length; n > e; e++) {
        var o = t[e],
          r = v(this.stampedElements, o); - 1 !== r && this.stampedElements.splice(r, 1), this.unignore(o)
      }
    }
  }, n.prototype.placeStampedElements = function() {
    if (this.stampedElements && this.stampedElements.length) {
      this._getBounds();
      for (var t = 0, e = this.stampedElements.length; e > t; t++) {
        var i = this.stampedElements[t];
        this.placeStamp(i)
      }
    }
  }, n.prototype._getBounds = function() {
    var t = this.element.getBoundingClientRect();
    this._boundingLeft = t.left + this.elementSize.paddingLeft, this._boundingTop = t.top + this.elementSize.paddingTop
  }, n.prototype.placeStamp = function(t) {
    var e, i = this.getItem(t);
    e = i && i.isPlacing ? i.placeRect : this._getElementOffsetRect(t), this._setRectSize(t, e), this.packer.placed(e), this._setMaxY(e)
  }, n.prototype._getElementOffsetRect = function(t) {
    var e = t.getBoundingClientRect(),
      i = new r({
        x: e.left - this._boundingLeft,
        y: e.top - this._boundingTop
      });
    return i.x -= this.elementSize.borderLeftWidth, i.y -= this.elementSize.borderTopWidth, i
  }, n.prototype.handleEvent = function(t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, n.prototype.bindResize = function() {
    this.isResizeBound || (u.bind(t, "resize", this), this.isResizeBound = !0)
  }, n.prototype.unbindResize = function() {
    u.unbind(t, "resize", this), this.isResizeBound = !1
  }, n.prototype.onresize = function() {
    function t() {
      e.resize()
    }
    this.resizeTimeout && clearTimeout(this.resizeTimeout);
    var e = this;
    this.resizeTimeout = setTimeout(t, 100)
  }, n.prototype.resize = function() {
    var t = l(this.element);
    t.innerWidth !== this.elementSize.innerWidth && (this.layout(), delete this.resizeTimeout)
  }, n.prototype.addItems = function(t) {
    var e = this._getItems(t);
    if (e.length) return this.items.push.apply(this.items, e), e
  }, n.prototype.appended = function(t) {
    var e = this.addItems(t);
    e.length && (this.layoutItems(e, !0), this.reveal(e))
  }, n.prototype.prepended = function(t) {
    var e = this._getItems(t);
    if (e.length) {
      var i = this.items.slice(0);
      this.items = e.concat(i), this._prelayout(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
    }
  }, n.prototype.reveal = function(t) {
    if (t && t.length)
      for (var e = 0, i = t.length; i > e; e++) {
        var n = t[e];
        n.reveal()
      }
  }, n.prototype.getItem = function(t) {
    for (var e = 0, i = this.items.length; i > e; e++) {
      var n = this.items[e];
      if (n.element === t) return n
    }
  }, n.prototype.getItems = function(t) {
    if (t && t.length) {
      for (var e = [], i = 0, n = t.length; n > i; i++) {
        var o = t[i],
          r = this.getItem(o);
        r && e.push(r)
      }
      return e
    }
  }, n.prototype.remove = function(t) {
    t = i(t);
    var e = this.getItems(t);
    this._itemsOn(e, "remove", function() {
      this.emitEvent("removeComplete", [this, e])
    });
    for (var n = 0, o = e.length; o > n; n++) {
      var r = e[n];
      r.remove();
      var s = v(this.items, r);
      this.items.splice(s, 1)
    }
  }, n.prototype.ignore = function(t) {
    var e = this.getItem(t);
    e && (e.isIgnored = !0)
  }, n.prototype.unignore = function(t) {
    var e = this.getItem(t);
    e && delete e.isIgnored
  }, n.prototype.sortItemsByPosition = function() {
    this.items.sort(function(t, e) {
      return t.position.y - e.position.y || t.position.x - e.position.x
    })
  }, n.prototype.fit = function(t, e, i) {
    function n() {
      s++, 2 === s && r.emitEvent("fitComplete", [r, o])
    }
    var o = this.getItem(t);
    if (o) {
      this._getMeasurements(), this.stamp(o.element), o.getSize(), o.isPlacing = !0, e = void 0 === e ? o.rect.x : e, i = void 0 === i ? o.rect.y : i, o.positionPlaceRect(e, i, !0);
      var r = this,
        s = 0;
      o.on("layout", function() {
        return n(), !0
      }), this.on("layoutComplete", function() {
        return n(), !0
      }), o.moveTo(o.placeRect.x, o.placeRect.y), this.layout(), this.unstamp(o.element), this.sortItemsByPosition(), o.isPlacing = !1, o.copyPlaceRectPosition()
    }
  }, n.prototype.itemDragStart = function(t) {
    this.stamp(t);
    var e = this.getItem(t);
    e && e.dragStart()
  }, n.prototype.itemDragMove = function(t, e, i) {
    function n() {
      r.layout(), delete r.dragTimeout
    }
    var o = this.getItem(t);
    o && o.dragMove(e, i);
    var r = this;
    this.clearDragTimeout(), this.dragTimeout = setTimeout(n, 40)
  }, n.prototype.clearDragTimeout = function() {
    this.dragTimeout && clearTimeout(this.dragTimeout)
  }, n.prototype.itemDragEnd = function(t) {
    function e() {
      return s++, s !== r ? !0 : (n && (h.remove(n.element, "is-positioning-post-drag"), n.isPlacing = !1, n.copyPlaceRectPosition()), a.unstamp(t), a.sortItemsByPosition(), n && o && a.emitEvent("dragItemPositioned", [a, n]), !0)
    }
    var i, n = this.getItem(t);
    if (n && (i = n.didDrag, n.dragStop()), !n || !i && !n.needsPositioning) return this.unstamp(t), void 0;
    h.add(n.element, "is-positioning-post-drag");
    var o = n.needsPositioning,
      r = o ? 2 : 1,
      s = 0,
      a = this;
    o ? (n.on("layout", e), n.moveTo(n.placeRect.x, n.placeRect.y)) : n && n.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout()
  }, n.prototype.bindDraggabillyEvents = function(t) {
    t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
  }, n.prototype.bindUIDraggableEvents = function(t) {
    t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
  }, n.prototype.destroy = function() {
    this.element.style.position = "", this.element.style.height = "", delete this.element.packeryGUID;
    for (var t = 0, e = this.items.length; e > t; t++) {
      var i = this.items[t];
      i.destroy()
    }
    this.unbindResize()
  }, n.data = function(t) {
    var e = t.packeryGUID;
    return e && E[e]
  }, p(function() {
    for (var t = f.querySelectorAll(".js-packery"), e = 0, i = t.length; i > e; e++) {
      var o, r = t[e],
        s = r.getAttribute("data-packery-options");
      try {
        o = s && JSON.parse(s)
      } catch (a) {
        m && m.error("Error parsing data-packery-options on " + r.nodeName.toLowerCase() + (r.id ? "#" + r.id : "") + ": " + a);
        continue
      }
      var h = new n(r, o);
      y && y.data(r, "packery", h)
    }
  }), y && y.bridget && y.bridget("packery", n), n.Rect = r, n.Packer = s, n.Item = a, t.Packery = n
}(window);

! function(e) {
  e.fn.tipr = function(t) {
    var n = e.extend({
      speed: 300,
      mode: "bottom"
    }, t);
    return this.each(function() {
      var t = ".tipr_container_" + n.mode;
      e(this).hover(function() {
        var i = e(this).offset(),
          r = '<div class="tipr_container_' + n.mode + '" style="position:absolute;top:' + i.top + "px;left:" + i.left + 'px"><div class="tipr_point_' + n.mode + '"><div class="tipr_content">' + e(this).attr("data-tip") + "</div></div></div>";
        e("body").append(r);
        var o = e(t).outerWidth(),
          s = e(this).outerWidth(),
          a = s / 2 - o / 2;
        e(t).css("margin-left", a + "px"), e(this).removeAttr("title"), e(t).fadeIn(n.speed)
      }, function() {
        e(t).remove()
      })
    })
  }
}(jQuery),
function() {
  "use strict";

  function e() {}

  function t(e, t) {
    for (var n = e.length; n--;)
      if (e[n].listener === t) return n;
    return -1
  }
  var n = e.prototype;
  n.getListeners = function(e) {
    var t, n, i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = []);
    return t
  }, n.flattenListeners = function(e) {
    var t, n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n
  }, n.getListenersAsObject = function(e) {
    var t, n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n
  }, n.addListener = function(e, n) {
    var i, r = this.getListenersAsObject(e),
      o = "object" == typeof n;
    for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
      listener: n,
      once: !1
    });
    return this
  }, n.on = n.addListener, n.addOnceListener = function(e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    })
  }, n.once = n.addOnceListener, n.defineEvent = function(e) {
    return this.getListeners(e), this
  }, n.defineEvents = function(e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this
  }, n.removeListener = function(e, n) {
    var i, r, o = this.getListenersAsObject(e);
    for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
    return this
  }, n.off = n.removeListener, n.addListeners = function(e, t) {
    return this.manipulateListeners(!1, e, t)
  }, n.removeListeners = function(e, t) {
    return this.manipulateListeners(!0, e, t)
  }, n.manipulateListeners = function(e, t, n) {
    var i, r, o = e ? this.removeListener : this.addListener,
      s = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp)
      for (i = n.length; i--;) o.call(this, t, n[i]);
    else
      for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this
  }, n.removeEvent = function(e) {
    var t, n = typeof e,
      i = this._getEvents();
    if ("string" === n) delete i[e];
    else if ("object" === n)
      for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
    else delete this._events;
    return this
  }, n.emitEvent = function(e, t) {
    var n, i, r, o, s = this.getListenersAsObject(e);
    for (r in s)
      if (s.hasOwnProperty(r))
        for (i = s[r].length; i--;) n = s[r][i], o = n.listener.apply(this, t || []), (o === this._getOnceReturnValue() || n.once === !0) && this.removeListener(e, s[r][i].listener);
    return this
  }, n.trigger = n.emitEvent, n.emit = function(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t)
  }, n.setOnceReturnValue = function(e) {
    return this._onceReturnValue = e, this
  }, n._getOnceReturnValue = function() {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, n._getEvents = function() {
    return this._events || (this._events = {})
  }, "function" == typeof define && define.amd ? define(function() {
    return e
  }) : "undefined" != typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this),
  function(e) {
    "use strict";
    var t = document.documentElement,
      n = function() {};
    t.addEventListener ? n = function(e, t, n) {
      e.addEventListener(t, n, !1)
    } : t.attachEvent && (n = function(t, n, i) {
      t[n + i] = i.handleEvent ? function() {
        var t = e.event;
        t.target = t.target || t.srcElement, i.handleEvent.call(i, t)
      } : function() {
        var n = e.event;
        n.target = n.target || n.srcElement, i.call(t, n)
      }, t.attachEvent("on" + n, t[n + i])
    });
    var i = function() {};
    t.removeEventListener ? i = function(e, t, n) {
      e.removeEventListener(t, n, !1)
    } : t.detachEvent && (i = function(e, t, n) {
      e.detachEvent("on" + t, e[t + n]);
      try {
        delete e[t + n]
      } catch (i) {
        e[t + n] = void 0
      }
    });
    var r = {
      bind: n,
      unbind: i
    };
    "function" == typeof define && define.amd ? define(r) : e.eventie = r
  }(this),
  function(e) {
    "use strict";

    function t(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function n(e) {
      return "[object Array]" === c.call(e)
    }

    function i(e) {
      var t = [];
      if (n(e)) t = e;
      else if ("number" == typeof e.length)
        for (var i = 0, r = e.length; r > i; i++) t.push(e[i]);
      else t.push(e);
      return t
    }

    function r(e, n) {
      function r(e, n, s) {
        if (!(this instanceof r)) return new r(e, n);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = i(e), this.options = t({}, this.options), "function" == typeof n ? s = n : t(this.options, n), s && this.on("always", s), this.getImages(), o && (this.jqDeferred = new o.Deferred);
        var a = this;
        setTimeout(function() {
          a.check()
        })
      }

      function c(e) {
        this.img = e
      }
      r.prototype = new e, r.prototype.options = {}, r.prototype.getImages = function() {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
          var n = this.elements[e];
          "IMG" === n.nodeName && this.addImage(n);
          for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
            var s = i[r];
            this.addImage(s)
          }
        }
      }, r.prototype.addImage = function(e) {
        var t = new c(e);
        this.images.push(t)
      }, r.prototype.check = function() {
        function e(e, r) {
          return t.options.debug && a && s.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
        }
        var t = this,
          n = 0,
          i = this.images.length;
        if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
        for (var r = 0; i > r; r++) {
          var o = this.images[r];
          o.on("confirm", e), o.check()
        }
      }, r.prototype.progress = function(e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function() {
          t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify(t, e)
        })
      }, r.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function() {
          if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
            var n = t.hasAnyBroken ? "reject" : "resolve";
            t.jqDeferred[n](t)
          }
        })
      }, o && (o.fn.imagesLoaded = function(e, t) {
        var n = new r(this, e, t);
        return n.jqDeferred.promise(o(this))
      });
      var h = {};
      return c.prototype = new e, c.prototype.check = function() {
        var e = h[this.img.src];
        if (e) return this.useCached(e), void 0;
        if (h[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
        var t = this.proxyImage = new Image;
        n.bind(t, "load", this), n.bind(t, "error", this), t.src = this.img.src
      }, c.prototype.useCached = function(e) {
        if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
        else {
          var t = this;
          e.on("confirm", function(e) {
            return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
          })
        }
      }, c.prototype.confirm = function(e, t) {
        this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
      }, c.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
      }, c.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindProxyEvents()
      }, c.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindProxyEvents()
      }, c.prototype.unbindProxyEvents = function() {
        n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this)
      }, r
    }
    var o = e.jQuery,
      s = e.console,
      a = void 0 !== s,
      c = Object.prototype.toString;
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], r) : e.imagesLoaded = r(e.EventEmitter, e.eventie)
  }(window), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || jQuery(function(e) {
    $elements = e(".bery_banner, .bery_bg, .parallax_img").find("[data-velocity]");
    var t = e(".header-wrapper").outerHeight() + e("#wpadminbar").outerHeight();
    e(window).bind("resize.bery-parallax", function() {
      {
        var t = e(window).height();
        e(window).scrollTop()
      }
      $elements.each(function() {
        var n = e(this),
          i = n.parents(".bery_banner, .bery_bg, .parallax_img");
        if (!n.hasClass("parallax_text") && !n.hasClass("parallax_img_inner")) {
          i.outerHeight() < e(window).height() ? n.css("height", t) : n.css("height", "");
          var r = i.outerHeight() / 2 - i.outerHeight() / 2;
          n.css("margin-top", -r)
        }
        n.css("opacity", "1")
      }), e(window).trigger("scroll.bery-parallax")
    }), e(window).bind("scroll.bery-parallax", function() {
      var n = e(window).height(),
        i = e(window).scrollTop();
      $elements.each(function() {
        var r = e(this),
          o = r.parents(".bery_banner, .bery_bg, .parallax_img"),
          s = o.offset().top - i;
        if (!(s > n || s + o.outerHeight() + t < 0)) {
          var a = 1 - r.data("velocity"),
            c = (e(window).height() / 2 - o.outerHeight() / 2, (s - t) / n * .7),
            h = -s + s * a,
            f = -s + t + (s - t) * a,
            u = r.hasClass("parallax_text") ? f : h;
          r.css({
            webkitTransform: "translate3d(0px, " + u + "px , 0px)"
          }), r.css({
            mozTransform: "translate3d(0px, " + u + "px , 0px)"
          }), r.css({
            Transform: "translate3d(0px, " + u + "px , 0px)"
          }), r.hasClass("parallax_text") && r.css("opacity", 1 - Math.abs(c))
        }
      })
    }), e(window).bind("DOMNodeInserted", function() {
      e(window).trigger("resize.bery-parallax")
    }), e(window).trigger("resize")
  });

! function(t, a, i, r) {
  t.fn.wc_variation_form_lightbox = function() {
    return t.fn.wc_variation_form_lightbox.find_matching_variations = function(a, i) {
      for (var r = [], n = 0; n < a.length; n++) {
        var e = a[n];
        e.variation_id, t.fn.wc_variation_form_lightbox.variations_match(e.attributes, i) && r.push(e)
      }
      return r
    }, t.fn.wc_variation_form_lightbox.variations_match = function(t, a) {
      var i = !0;
      for (attr_name in t) {
        var n = t[attr_name],
          e = a[attr_name];
        n !== r && e !== r && 0 != n.length && 0 != e.length && n != e && (i = !1)
      }
      return i
    }, this.unbind("check_variations update_variation_values found_variation"), this.find(".reset_variations").unbind("click"), this.find(".variations select").unbind("change focusin"), $form = this.on("click", ".reset_variations", function() {
      t(this).closest(".variations_form").find(".variations select").val("").change();
      var a = t(this).closest(".product").find(".sku"),
        i = t(this).closest(".product").find(".product_weight"),
        r = t(this).closest(".product").find(".product_dimensions");
      return a.attr("data-o_sku") && a.text(a.attr("data-o_sku")), i.attr("data-o_weight") && i.text(i.attr("data-o_weight")), r.attr("data-o_dimensions") && r.text(r.attr("data-o_dimensions")), !1
    }).on("change", ".variations select", function() {
      $variation_form = t(this).closest(".variations_form"), $variation_form.find("input[name=variation_id]").val("").change(), $variation_form.trigger("woocommerce_variation_select_change").trigger("check_variations", ["", !1]), t(this).blur(), t().uniform && t.isFunction(t.uniform.update) && t.uniform.update()
    }).on("focusin touchstart", ".variations select", function() {
      $variation_form = t(this).closest(".variations_form"), $variation_form.trigger("woocommerce_variation_select_focusin").trigger("check_variations", [t(this).attr("name"), !0])
    }).on("check_variations", function(i, r, n) {
      var e = !0,
        o = !1,
        s = {},
        _ = t(this),
        d = _.find(".reset_variations");
      _.find(".variations select").each(function() {
        0 == t(this).val().length ? e = !1 : o = !0, r && t(this).attr("name") == r ? (e = !1, s[t(this).attr("name")] = "") : (value = t(this).val(), s[t(this).attr("name")] = value)
      });
      var c = parseInt(_.data("product_id")),
        v = _.data("product_variations");
      v || (v = a.product_variations[c]), v || (v = a.product_variations), v || (v = a["product_variations_" + c]);
      var u = t.fn.wc_variation_form_lightbox.find_matching_variations(v, s);
      if (e) {
        var f = u.shift();
        f ? (_.find("input[name=variation_id]").val(f.variation_id).change(), _.trigger("found_variation", [f])) : (_.find(".variations select").val(""), n || _.trigger("reset_image"), alert(woocommerce_params.i18n_no_matching_variations_text))
      } else _.trigger("update_variation_values", [u]), n || _.trigger("reset_image"), r || _.find(".single_variation_wrap").slideUp("200");
      o ? "hidden" == d.css("visibility") && d.css("visibility", "visible").hide().fadeIn() : d.css("visibility", "hidden")
    }).on("reset_image", function() {
      var a = t(this).closest(".product"),
        i = a.find("div.images img:eq(0)"),
        n = a.find("div.images a.zoom:eq(0)"),
        e = i.attr("data-o_src"),
        o = i.attr("data-o_title"),
        s = i.attr("data-o_alt"),
        _ = n.attr("data-o_href");
      e != r && i.attr("src", e), _ != r && n.attr("href", _), o != r && (i.attr("title", o), n.attr("title", o)), s != r && i.attr("alt", s)
    }).on("update_variation_values", function(a, i) {
      $variation_form = t(this).closest(".variations_form"), $variation_form.find(".variations select").each(function(a, r) {
        current_attr_select = t(r), current_attr_select.data("attribute_options") || current_attr_select.data("attribute_options", current_attr_select.find("option:gt(0)").get()), current_attr_select.find("option:gt(0)").remove(), current_attr_select.append(current_attr_select.data("attribute_options")), current_attr_select.find("option:gt(0)").removeClass("active");
        var n = current_attr_select.attr("name");
        for (num in i)
          if ("undefined" != typeof i[num]) {
            var e = i[num].attributes;
            for (attr_name in e) {
              var o = e[attr_name];
              attr_name == n && (o ? (o = t("<div/>").html(o).text(), o = o.replace(/'/g, "\\'"), o = o.replace(/"/g, '\\"'), current_attr_select.find('option[value="' + o + '"]').addClass("active")) : current_attr_select.find("option:gt(0)").addClass("active"))
            }
          } current_attr_select.find("option:gt(0):not(.active)").remove()
      }), $variation_form.trigger("woocommerce_update_variation_values")
    }).on("found_variation", function(a, i) {
      var n = t(this),
        e = t(this).closest(".product"),
        o = e.find("div.images img:eq(0)"),
        s = e.find("div.images a.zoom:eq(0)"),
        _ = o.attr("data-o_src"),
        d = o.attr("data-o_title"),
        c = o.attr("data-o_alt"),
        v = s.attr("data-o_href"),
        u = i.image_src,
        f = i.image_link,
        l = i.image_title,
        m = i.image_alt;
      n.find(".variations_button").show(), n.find(".single_variation").html(i.price_html + i.availability_html), _ == r && (_ = o.attr("src") ? o.attr("src") : "", o.attr("data-o_src", _)), v == r && (v = s.attr("href") ? s.attr("href") : "", s.attr("data-o_href", v)), d == r && (d = o.attr("title") ? o.attr("title") : "", o.attr("data-o_title", d)), c == r && (c = o.attr("alt") ? o.attr("alt") : "", o.attr("data-o_alt", c)), u && u.length > 1 ? (o.attr("src", u).attr("alt", m).attr("title", l), s.attr("href", f).attr("title", l)) : (o.attr("src", _).attr("alt", c).attr("title", d), s.attr("href", v).attr("title", d));
      var h = n.find(".single_variation_wrap"),
        g = e.find(".product_meta").find(".sku"),
        p = e.find(".product_weight"),
        w = e.find(".product_dimensions");
      g.attr("data-o_sku") || g.attr("data-o_sku", g.text()), p.attr("data-o_weight") || p.attr("data-o_weight", p.text()), w.attr("data-o_dimensions") || w.attr("data-o_dimensions", w.text()), i.sku ? g.text(i.sku) : g.text(g.attr("data-o_sku")), i.weight ? p.text(i.weight) : p.text(p.attr("data-o_weight")), i.dimensions ? w.text(i.dimensions) : w.text(w.attr("data-o_dimensions")), h.find(".quantity").show(), !i.is_in_stock && !i.backorders_allowed && n.find(".variations_button").hide(), i.min_qty ? h.find("input[name=quantity]").attr("min", i.min_qty).val(i.min_qty) : h.find("input[name=quantity]").removeAttr("min"), i.max_qty ? h.find("input[name=quantity]").attr("max", i.max_qty) : h.find("input[name=quantity]").removeAttr("max"), "yes" == i.is_sold_individually && (h.find("input[name=quantity]").val("1"), h.find(".quantity").hide()), h.slideDown("200").trigger("show_variation", [i])
    }), $form.trigger("wc_variation_form_lightbox"), $form
  }, t(function() {
    t(".variations_form").wc_variation_form_lightbox(), t(".variations_form .variations select").change()
  })
}(jQuery, window, document);

/*! Magnific Popup
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function(e) {
  var t, n, i, o, r, a, s, l = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    u = "BeforeAppend",
    p = "MarkupParse",
    f = "Open",
    m = "Change",
    g = "mfp",
    h = "." + g,
    v = "mfp-ready",
    C = "mfp-removing",
    y = "mfp-prevent-close",
    w = function() {},
    b = !!window.jQuery,
    I = e(window),
    x = function(e, n) {
      t.ev.on(g + e + h, n)
    },
    k = function(t, n, i, o) {
      var r = document.createElement("div");
      return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
    },
    T = function(n, i) {
      t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
    },
    E = function(n) {
      return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
    },
    _ = function() {
      e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
    },
    S = function() {
      var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition) return !0;
      for (; t.length;)
        if (t.pop() + "Transition" in e) return !0;
      return !1
    };
  w.prototype = {
    constructor: w,
    init: function() {
      var n = navigator.appVersion;
      t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
    },
    open: function(n) {
      i || (i = e(document.body));
      var r;
      if (n.isObj === !1) {
        t.items = n.items.toArray(), t.index = 0;
        var s, l = n.items;
        for (r = 0; l.length > r; r++)
          if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
            t.index = r;
            break
          }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
      if (t.isOpen) return t.updateItemHTML(), void 0;
      t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function() {
        t.close()
      }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function(e) {
        t._checkIfClose(e.target) && t.close()
      }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
      var c = e.magnificPopup.modules;
      for (r = 0; c.length > r; r++) {
        var d = c[r];
        d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
      }
      T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, n, i) {
        n.close_replaceWith = E(i.type)
      }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
        overflow: t.st.overflowY,
        overflowX: "hidden",
        overflowY: t.st.overflowY
      }) : t.wrap.css({
        top: I.scrollTop(),
        position: "absolute"
      }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
        height: o.height(),
        position: "absolute"
      }), t.st.enableEscapeKey && o.on("keyup" + h, function(e) {
        27 === e.keyCode && t.close()
      }), I.on("resize" + h, function() {
        t.updateSize()
      }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
      var u = t.wH = I.height(),
        m = {};
      if (t.fixedContentPos && t._hasScrollBar(u)) {
        var g = t._getScrollbarSize();
        g && (m.marginRight = g)
      }
      t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
      var C = t.st.mainClass;
      return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
        t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
      }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
    },
    close: function() {
      t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function() {
        t._close()
      }, t.st.removalDelay)) : t._close())
    },
    _close: function() {
      T(l);
      var n = C + " " + v + " ";
      if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var i = {
          marginRight: ""
        };
        t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
      }
      o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
    },
    updateSize: function(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
          i = window.innerHeight * n;
        t.wrap.css("height", i), t.wH = i
      } else t.wH = e || I.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
    },
    updateItemHTML: function() {
      var n = t.items[t.index];
      t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
      var i = n.type;
      if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var o = t.st[i] ? t.st[i].markup : !1;
        T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
      }
      r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
      var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
      t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
    },
    appendContent: function(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
    },
    parseEl: function(n) {
      var i = t.items[n],
        o = i.type;
      if (i = i.tagName ? {
          el: e(i)
        } : {
          data: i,
          src: i.src
        }, i.el) {
        for (var r = t.types, a = 0; r.length > a; a++)
          if (i.el.hasClass("mfp-" + r[a])) {
            o = r[a];
            break
          } i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
      }
      return i.type = o || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, T("ElementParse", i), t.items[n]
    },
    addGroup: function(e, n) {
      var i = function(i) {
        i.mfpEl = this, t._openClick(i, e, n)
      };
      n || (n = {});
      var o = "click.magnificPopup";
      n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
    },
    _openClick: function(n, i, o) {
      var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
      if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
        var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
        if (a)
          if (e.isFunction(a)) {
            if (!a.call(t)) return !0
          } else if (a > I.width()) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
      }
    },
    updateStatus: function(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
        var o = {
          status: e,
          text: i
        };
        T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
          e.stopImmediatePropagation()
        }), t.container.addClass("mfp-s-" + e), n = e
      }
    },
    _checkIfClose: function(n) {
      if (!e(n).hasClass(y)) {
        var i = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0
        } else if (o && e.contains(document, n)) return !0;
        return !1
      }
    },
    _addClassToMFP: function(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e)
    },
    _removeClassFromMFP: function(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
    },
    _hasScrollBar: function(e) {
      return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
    },
    _setFocus: function() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
    },
    _onFocusIn: function(n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
    },
    _parseMarkup: function(t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function(e, n) {
        if (void 0 === n || n === !1) return !0;
        if (o = e.split("_"), o.length > 1) {
          var i = t.find(h + "-" + o[0]);
          if (i.length > 0) {
            var r = o[1];
            "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
          }
        } else t.find(h + "-" + e).html(n)
      })
    },
    _getScrollbarSize: function() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
      }
      return t.scrollbarSize
    }
  }, e.magnificPopup = {
    instance: null,
    proto: w.prototype,
    modules: [],
    open: function(t, n) {
      return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
    },
    close: function() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close()
    },
    registerModule: function(t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, e.fn.magnificPopup = function(n) {
    _();
    var i = e(this);
    if ("string" == typeof n)
      if ("open" === n) {
        var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
          a = parseInt(arguments[1], 10) || 0;
        r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
          mfpEl: o
        }, i, r)
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
    return i
  };
  var P, O, z, M = "inline",
    B = function() {
      z && (O.after(z.addClass(P)).detach(), z = null)
    };
  e.magnificPopup.registerModule(M, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function() {
        t.types.push(M), x(l + "." + M, function() {
          B()
        })
      },
      getInline: function(n, i) {
        if (B(), n.src) {
          var o = t.st.inline,
            r = e(n.src);
          if (r.length) {
            var a = r[0].parentNode;
            a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
          } else t.updateStatus("error", o.tNotFound), r = e("<div>");
          return n.inlineElement = r, r
        }
        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
      }
    }
  });
  var F, H = "ajax",
    L = function() {
      F && i.removeClass(F)
    },
    A = function() {
      L(), t.req && t.req.abort()
    };
  e.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function() {
        t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
      },
      getAjax: function(n) {
        F && i.addClass(F), t.updateStatus("loading");
        var o = e.extend({
          url: n.src,
          success: function(i, o, r) {
            var a = {
              data: i,
              xhr: r
            };
            T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function() {
              t.wrap.addClass(v)
            }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
          },
          error: function() {
            L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
          }
        }, t.st.ajax.settings);
        return t.req = e.ajax(o), ""
      }
    }
  });
  var j, N = function(n) {
    if (n.data && void 0 !== n.data.title) return n.data.title;
    var i = t.st.image.titleSrc;
    if (i) {
      if (e.isFunction(i)) return i.call(t, n);
      if (n.el) return n.el.attr(i) || ""
    }
    return ""
  };
  e.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function() {
        var e = t.st.image,
          n = ".image";
        t.types.push("image"), x(f + n, function() {
          "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
        }), x(l + n, function() {
          e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
        }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
      },
      resizeImage: function() {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
        }
      },
      _onImageHasSize: function(e) {
        e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
      },
      findImageSize: function(e) {
        var n = 0,
          i = e.img[0],
          o = function(r) {
            j && clearInterval(j), j = setInterval(function() {
              return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
            }, r)
          };
        o(1)
      },
      getImage: function(n, i) {
        var o = 0,
          r = function() {
            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
          },
          a = function() {
            n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
          },
          s = t.st.image,
          l = i.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
        }
        return t._parseMarkup(i, {
          title: N(n),
          img_replaceWith: n.img
        }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
      }
    }
  });
  var W, R = function() {
    return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
  };
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function(e) {
        return e.is("img") ? e : e.find("img")
      }
    },
    proto: {
      initZoom: function() {
        var e, n = t.st.zoom,
          i = ".zoom";
        if (n.enabled && t.supportsTransition) {
          var o, r, a = n.duration,
            s = function(e) {
              var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                r = "transition";
              return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
            },
            d = function() {
              t.content.css("visibility", "visible")
            };
          x("BuildControls" + i, function() {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
              r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                r.css(t._getOffset(!0)), o = setTimeout(function() {
                  d(), setTimeout(function() {
                    r.remove(), e = r = null, T("ZoomAnimationEnded")
                  }, 16)
                }, a)
              }, 16)
            }
          }), x(c + i, function() {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = a, !e) {
                if (e = t._getItemToZoom(), !e) return;
                r = s(e)
              }
              r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                r.css(t._getOffset())
              }, 16)
            }
          }), x(l + i, function() {
            t._allowZoom() && (d(), r && r.remove(), e = null)
          })
        }
      },
      _allowZoom: function() {
        return "image" === t.currItem.type
      },
      _getItemToZoom: function() {
        return t.currItem.hasSize ? t.currItem.img : !1
      },
      _getOffset: function(n) {
        var i;
        i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
        var o = i.offset(),
          r = parseInt(i.css("padding-top"), 10),
          a = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: i.width(),
          height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
        };
        return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
      }
    }
  });
  var Z = "iframe",
    q = "//about:blank",
    D = function(e) {
      if (t.currTemplate[Z]) {
        var n = t.currTemplate[Z].find("iframe");
        n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
      }
    };
  e.magnificPopup.registerModule(Z, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function() {
        t.types.push(Z), x("BeforeChange", function(e, t, n) {
          t !== n && (t === Z ? D() : n === Z && D(!0))
        }), x(l + "." + Z, function() {
          D()
        })
      },
      getIframe: function(n, i) {
        var o = n.src,
          r = t.st.iframe;
        e.each(r.patterns, function() {
          return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
        });
        var a = {};
        return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
      }
    }
  });
  var K = function(e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e
    },
    Y = function(e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function() {
        var n = t.st.gallery,
          i = ".mfp-gallery",
          r = Boolean(e.fn.mfpFastClick);
        return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function() {
          n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
            return t.items.length > 1 ? (t.next(), !1) : void 0
          }), o.on("keydown" + i, function(e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
          })
        }), x("UpdateStatus" + i, function(e, n) {
          n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
        }), x(p + i, function(e, i, o, r) {
          var a = t.items.length;
          o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
        }), x("BuildControls" + i, function() {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
              o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
              a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
              s = r ? "mfpFastClick" : "click";
            o[s](function() {
              t.prev()
            }), a[s](function() {
              t.next()
            }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
          }
        }), x(m + i, function() {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
            t.preloadNearbyImages(), t._preloadTimeout = null
          }, 16)
        }), x(l + i, function() {
          o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
        }), void 0) : !1
      },
      next: function() {
        t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
      },
      prev: function() {
        t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
      },
      goTo: function(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML()
      },
      preloadNearbyImages: function() {
        var e, n = t.st.gallery.preload,
          i = Math.min(n[0], t.items.length),
          o = Math.min(n[1], t.items.length);
        for (e = 1;
          (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
        for (e = 1;
          (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
      },
      _preloadItem: function(n) {
        if (n = K(n), !t.items[n].preloaded) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
            i.hasSize = !0
          }).on("error.mfploader", function() {
            i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
          }).attr("src", i.src)), i.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  e.magnificPopup.registerModule(U, {
      options: {
        replaceSrc: function(e) {
          return e.src.replace(/\.\w+$/, function(e) {
            return "@2x" + e
          })
        },
        ratio: 1
      },
      proto: {
        initRetina: function() {
          if (window.devicePixelRatio > 1) {
            var e = t.st.retina,
              n = e.ratio;
            n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function(e, t) {
              t.img.css({
                "max-width": t.img[0].naturalWidth / n,
                width: "100%"
              })
            }), x("ElementParse." + U, function(t, i) {
              i.src = e.replaceSrc(i, n)
            }))
          }
        }
      }
    }),
    function() {
      var t = 1e3,
        n = "ontouchstart" in window,
        i = function() {
          I.off("touchmove" + r + " touchend" + r)
        },
        o = "mfpFastClick",
        r = "." + o;
      e.fn.mfpFastClick = function(o) {
        return e(this).each(function() {
          var a, s = e(this);
          if (n) {
            var l, c, d, u, p, f;
            s.on("touchstart" + r, function(e) {
              u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function(e) {
                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
              }).on("touchend" + r, function(e) {
                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                  a = !1
                }, t), o())
              })
            })
          }
          s.on("click" + r, function() {
            a || o()
          })
        })
      }, e.fn.destroyMfpFastClick = function() {
        e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
      }
    }(), _()
})(window.jQuery || window.Zepto);

! function(a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null
    }, this._states = {
      current: {},
      tags: {
        initializing: ["busy"],
        animating: ["busy"],
        dragging: ["interacting"]
      }
    }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
      this._handlers[c] = a.proxy(this[c], this)
    }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
      this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
    }, this)), a.each(e.Workers, a.proxy(function(b, c) {
      this._pipe.push({
        filter: c.filter,
        run: a.proxy(c.run, this)
      })
    }, this)), this.setup(), this.initialize()
  }
  e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Type = {
    Event: "event",
    State: "state"
  }, e.Plugins = {}, e.Workers = [{
    filter: ["width", "settings"],
    run: function() {
      this._width = this.$element.width()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      a.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      this.$stage.children(".cloned").remove()
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      var b = this.settings.margin || "",
        c = !this.settings.autoWidth,
        d = this.settings.rtl,
        e = {
          width: "auto",
          "margin-left": d ? b : "",
          "margin-right": d ? "" : b
        };
      !c && this.$stage.children().css(e), a.css = e
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
        c = null,
        d = this._items.length,
        e = !this.settings.autoWidth,
        f = [];
      for (a.items = {
          merge: !1,
          width: b
        }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
      this._widths = f
    }
  }, {
    filter: ["items", "settings"],
    run: function() {
      var b = [],
        c = this._items,
        d = this.settings,
        e = Math.max(2 * d.items, 4),
        f = 2 * Math.ceil(c.length / 2),
        g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
        h = "",
        i = "";
      for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
      this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
      this._coordinates = f
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function() {
      var a = this.settings.stagePadding,
        b = this._coordinates,
        c = {
          width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
          "padding-left": a || "",
          "padding-right": a || ""
        };
      this.$stage.css(c)
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      var b = this._coordinates.length,
        c = !this.settings.autoWidth,
        d = this.$stage.children();
      if (c && a.items.merge)
        for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
      else c && (a.css.width = a.items.width, d.css(a.css))
    }
  }, {
    filter: ["items"],
    run: function() {
      this._coordinates.length < 1 && this.$stage.removeAttr("style")
    }
  }, {
    filter: ["width", "items", "settings"],
    run: function(a) {
      a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
    }
  }, {
    filter: ["position"],
    run: function() {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"],
    run: function() {
      var a, b, c, d, e = this.settings.rtl ? 1 : -1,
        f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f,
        h = g + this.width() * e,
        i = [];
      for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
    }
  }], e.prototype.initialize = function() {
    if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
      var b, c, e;
      b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e && this.preloadAutoWidthImages(b)
    }
    this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
  }, e.prototype.setup = function() {
    var b = this.viewport(),
      c = this.options.responsive,
      d = -1,
      e = null;
    c ? (a.each(c, function(a) {
      b >= a && a > d && (d = Number(a))
    }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    }))
  }, e.prototype.optionsLogic = function() {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function(b) {
    var c = this.trigger("prepare", {
      content: b
    });
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
      content: c.data
    }), c.data
  }, e.prototype.update = function() {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
        return this[a]
      }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid")
  }, e.prototype.width = function(a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, e.prototype.refresh = function() {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
  }, e.prototype.onThrottledResize = function() {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function() {
    return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
  }, e.prototype.registerEventHandlers = function() {
    a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
      return !1
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
  }, e.prototype.onDragStart = function(b) {
    var d = null;
    3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
      x: d[16 === d.length ? 12 : 4],
      y: d[16 === d.length ? 13 : 5]
    }) : (d = this.$stage.position(), d = {
      x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
      y: d.top
    }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
      var d = this.difference(this._drag.pointer, this.pointer(b));
      a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
    }, this)))
  }, e.prototype.onDragMove = function(a) {
    var b = null,
      c = null,
      d = null,
      e = this.difference(this._drag.pointer, this.pointer(a)),
      f = this.difference(this._drag.stage.start, e);
    this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), c = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
  }, e.prototype.onDragEnd = function(b) {
    var d = this.difference(this._drag.pointer, this.pointer(b)),
      e = this._drag.stage.current,
      f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
    a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
      return !1
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
  }, e.prototype.closest = function(b, c) {
    var d = -1,
      e = 30,
      f = this.width(),
      g = this.coordinates();
    return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
      return b > h - e && h + e > b ? d = a : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), -1 === d
    }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
  }, e.prototype.animate = function(b) {
    var c = this.speed() > 0;
    this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px,0px)",
      transition: this.speed() / 1e3 + "s"
    }) : c ? this.$stage.animate({
      left: b + "px"
    }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
      left: b + "px"
    })
  }, e.prototype.is = function(a) {
    return this._states.current[a] && this._states.current[a] > 0
  }, e.prototype.current = function(a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {
        property: {
          name: "position",
          value: a
        }
      });
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, e.prototype.invalidate = function(b) {
    return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
      return b
    })
  }, e.prototype.reset = function(a) {
    a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function(b, c) {
    var e = this._items.length,
      f = c ? 0 : this._clones.length;
    return !a.isNumeric(b) || 1 > e ? b = d : (0 > b || b >= e + f) && (b = ((b - f / 2) % e + e) % e + f / 2), b
  }, e.prototype.relative = function(a) {
    return a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function(a) {
    var b, c = this.settings,
      d = this._coordinates.length,
      e = Math.abs(this._coordinates[d - 1]) - this._width,
      f = -1;
    if (c.loop) d = this._clones.length / 2 + this._items.length - 1;
    else if (c.autoWidth || c.merge)
      for (; d - f > 1;) Math.abs(this._coordinates[b = d + f >> 1]) < e ? f = b : d = b;
    else d = c.center ? this._items.length - 1 : this._items.length - c.items;
    return a && (d -= this._clones.length / 2), Math.max(d, 0)
  }, e.prototype.minimum = function(a) {
    return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function(a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function(a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function(b) {
    var c = this._clones.length / 2,
      e = c + this._items.length,
      f = function(a) {
        return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
      };
    return b === d ? a.map(this._clones, function(a, b) {
      return f(b)
    }) : a.map(this._clones, function(a, c) {
      return a === b ? f(c) : null
    })
  }, e.prototype.speed = function(a) {
    return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function(b) {
    var c = null;
    return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
      return this.coordinates(b)
    }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
  }, e.prototype.duration = function(a, b, c) {
    return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function(a, b) {
    var c = this.current(),
      d = null,
      e = a - this.relative(c),
      f = (e > 0) - (0 > e),
      g = this._items.length,
      h = this.minimum(),
      i = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && i >= d - e && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
  }, e.prototype.next = function(a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function(a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.onTransitionEnd = function(a) {
    return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
  }, e.prototype.viewport = function() {
    var d;
    if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
    else if (b.innerWidth) d = b.innerWidth;
    else {
      if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
      d = c.documentElement.clientWidth
    }
    return d
  }, e.prototype.replace = function(b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
      return 1 === this.nodeType
    }).each(a.proxy(function(a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function(b, c) {
    var e = this.relative(this._current);
    c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
      content: b,
      position: c
    }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
      content: b,
      position: c
    })
  }, e.prototype.remove = function(a) {
    a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }))
  }, e.prototype.preloadAutoWidthImages = function(b) {
    b.each(a.proxy(function(b, c) {
      this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
        c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
      }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
    }, this))
  }, e.prototype.destroy = function() {
    this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
    for (var d in this._plugins) this._plugins[d].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
  }, e.prototype.op = function(a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case "<":
        return d ? a > c : c > a;
      case ">":
        return d ? c > a : a > c;
      case ">=":
        return d ? c >= a : a >= c;
      case "<=":
        return d ? a >= c : c >= a
    }
  }, e.prototype.on = function(a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function(a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function(b, c, d, f, g) {
    var h = {
        item: {
          count: this._items.length,
          index: this.current()
        }
      },
      i = a.camelCase(a.grep(["on", b, d], function(a) {
        return a
      }).join("-").toLowerCase()),
      j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
        relatedTarget: this
      }, h, c));
    return this._supress[b] || (a.each(this._plugins, function(a, b) {
      b.onTrigger && b.onTrigger(j)
    }), this.register({
      type: e.Type.Event,
      name: b
    }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
  }, e.prototype.enter = function(b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
      this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
    }, this))
  }, e.prototype.leave = function(b) {
    a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
      this._states.current[b]--
    }, this))
  }, e.prototype.register = function(b) {
    if (b.type === e.Type.Event) {
      if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
        var c = a.event.special[b.name]._default;
        a.event.special[b.name]._default = function(a) {
          return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
        }, a.event.special[b.name].owl = !0
      }
    } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
      return a.inArray(c, this._states.tags[b.name]) === d
    }, this)))
  }, e.prototype.suppress = function(b) {
    a.each(b, a.proxy(function(a, b) {
      this._supress[b] = !0
    }, this))
  }, e.prototype.release = function(b) {
    a.each(b, a.proxy(function(a, b) {
      delete this._supress[b]
    }, this))
  }, e.prototype.pointer = function(a) {
    var c = {
      x: null,
      y: null
    };
    return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
  }, e.prototype.difference = function(a, b) {
    return {
      x: a.x - b.x,
      y: a.y - b.y
    }
  }, a.fn.owlCarousel = function(b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var d = a(this),
        f = d.data("owl.carousel");
      f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
        f.register({
          type: e.Type.Event,
          name: c
        }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
          a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
        }, f))
      })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
    })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._interval = null, this._visible = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.autoRefresh && this.watch()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
  }, e.prototype.watch = function() {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
  }, e.prototype.refresh = function() {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
  }, e.prototype.destroy = function() {
    var a, c;
    b.clearInterval(this._interval);
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
          for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
              this.load(b)
            }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f)), h), f++
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    lazyLoad: !1
  }, e.prototype.load = function(c) {
    var d = this._core.$stage.children().eq(c),
      e = d && d.find(".owl-lazy");
    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
      var e, f = a(d),
        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
        f.css({
          "background-image": "url(" + g + ")",
          opacity: "1"
        }), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  }, e.prototype.destroy = function() {
    var a, b;
    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._handlers = {
      "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.autoHeight && this.update()
      }, this),
      "changed.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
      }, this),
      "loaded.owl.lazy": a.proxy(function(a) {
        a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  e.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, e.prototype.update = function() {
    var b = this._core._current,
      c = b + this._core.settings.items,
      d = this._core.$stage.children().toArray().slice(b, c);
    heights = [], maxheight = 0, a.each(d, function(b, c) {
      heights.push(a(c).height())
    }), maxheight = Math.max.apply(null, heights), this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass)
  }, e.prototype.destroy = function() {
    var a, b;
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._videos = {}, this._playing = null, this._handlers = {
      "initialized.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.register({
          type: "state",
          name: "playing",
          tags: ["interacting"]
        })
      }, this),
      "resize.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
      }, this),
      "refreshed.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
      }, this),
      "changed.owl.carousel": a.proxy(function(a) {
        a.namespace && "position" === a.property.name && this._playing && this.stop()
      }, this),
      "prepared.owl.carousel": a.proxy(function(b) {
        if (b.namespace) {
          var c = a(b.content).find(".owl-video");
          c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
      this.play(a)
    }, this))
  };
  e.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, e.prototype.fetch = function(a, b) {
    var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
      d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
      e = a.attr("data-width") || this._core.settings.videoWidth,
      f = a.attr("data-height") || this._core.settings.videoHeight,
      g = a.attr("href");
    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
    else {
      if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
      c = "vimeo"
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, e.prototype.thumbnail = function(b, c) {
    var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
      h = b.find("img"),
      i = "src",
      j = "",
      k = this._core.settings,
      l = function(a) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
      };
    return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
      type: "GET",
      url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function(a) {
        f = a[0].thumbnail_large, l(f)
      }
    }))
  }, e.prototype.stop = function() {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
  }, e.prototype.play = function(b) {
    var c, d = a(b.target),
      e = d.closest("." + this._core.settings.itemClass),
      f = this._videos[e.attr("data-video")],
      g = f.width || "100%",
      h = f.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="http://www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type && (c = '<iframe src="http://player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
  }, e.prototype.isInFullScreen = function() {
    var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return b && a(b).parent().hasClass("owl-video-frame")
  }, e.prototype.destroy = function() {
    var a, b;
    this._core.$element.off("click.owl.video");
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function(a) {
        a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
        a.namespace && (this.swapping = "translated" == a.type)
      }, this),
      "translate.owl.carousel": a.proxy(function(a) {
        a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {
    animateOut: !1,
    animateIn: !1
  }, e.prototype.swap = function() {
    if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
      this.core.speed(0);
      var b, c = a.proxy(this.clear, this),
        d = this.core.$stage.children().eq(this.previous),
        e = this.core.$stage.children().eq(this.next),
        f = this.core.settings.animateIn,
        g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
        left: b + "px"
      }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
    }
  }, e.prototype.clear = function(b) {
    a(b.target).css({
      left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
  }, e.prototype.destroy = function() {
    var a, b;
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  var e = function(b) {
    this._core = b, this._interval = null, this._paused = !1, this._handlers = {
      "changed.owl.carousel": a.proxy(function(a) {
        a.namespace && "settings" === a.property.name && (this._core.settings.autoplay ? this.play() : this.stop())
      }, this),
      "initialized.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.autoplay && this.play()
      }, this),
      "play.owl.autoplay": a.proxy(function(a, b, c) {
        a.namespace && this.play(b, c)
      }, this),
      "stop.owl.autoplay": a.proxy(function(a) {
        a.namespace && this.stop()
      }, this),
      "mouseover.owl.autoplay": a.proxy(function() {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
      }, this),
      "mouseleave.owl.autoplay": a.proxy(function() {
        this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
      }, this)
    }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
  };
  e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, e.prototype.play = function(d, e) {
    this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._interval = b.setInterval(a.proxy(function() {
      this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
    }, this), d || this._core.settings.autoplayTimeout))
  }, e.prototype.stop = function() {
    this._core.is("rotating") && (b.clearInterval(this._interval), this._core.leave("rotating"))
  }, e.prototype.pause = function() {
    this._core.is("rotating") && (this._paused = !0)
  }, e.prototype.destroy = function() {
    var a, b;
    this.stop();
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  "use strict";
  var e = function(b) {
    this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function(b) {
        b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot") + "</div>")
      }, this),
      "added.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
      }, this),
      "remove.owl.carousel": a.proxy(function(a) {
        a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
      }, this),
      "changed.owl.carousel": a.proxy(function(a) {
        a.namespace && "position" == a.property.name && this.draw()
      }, this),
      "initialized.owl.carousel": a.proxy(function(a) {
        a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
      }, this),
      "refreshed.owl.carousel": a.proxy(function(a) {
        a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  e.Defaults = {
    nav: !1,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
  }, e.prototype.initialize = function() {
    var b, c = this._core.settings;
    this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
      this.prev(c.navSpeed)
    }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
      this.next(c.navSpeed)
    }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
      var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(d, c.dotsSpeed)
    }, this));
    for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
  }, e.prototype.destroy = function() {
    var a, b, c, d;
    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
    for (b in this._controls) this._controls[b].remove();
    for (d in this.overides) this._core[d] = this._overrides[d];
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, e.prototype.update = function() {
    var a, b, c, d = this._core.clones().length / 2,
      e = d + this._core.items().length,
      f = this._core.maximum(!0),
      g = this._core.settings,
      h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
    if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
      for (this._pages = [], a = d, b = 0, c = 0; e > a; a++) {
        if (b >= h || 0 === b) {
          if (this._pages.push({
              start: Math.min(f, a - d),
              end: a - d + h - 1
            }), Math.min(f, a - d) === f) break;
          b = 0, ++c
        }
        b += this._core.mergers(this._core.relative(a))
      }
  }, e.prototype.draw = function() {
    var b, c = this._core.settings,
      d = this._core.items().length <= c.items,
      e = this._core.relative(this._core.current()),
      f = c.loop || c.rewind;
    this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : 0 > b && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
  }, e.prototype.onTrigger = function(b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
    }
  }, e.prototype.current = function() {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, a.proxy(function(a, c) {
      return a.start <= b && a.end >= b
    }, this)).pop()
  }, e.prototype.getPosition = function(b) {
    var c, d, e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, e.prototype.next = function(b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, e.prototype.prev = function(b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, e.prototype.to = function(b, c, d) {
    var e;
    d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  "use strict";
  var e = function(c) {
    this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function(c) {
        c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
      }, this),
      "prepared.owl.carousel": a.proxy(function(b) {
        if (b.namespace) {
          var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
          if (!c) return;
          this._hashes[c] = b.content
        }
      }, this),
      "changed.owl.carousel": a.proxy(function(c) {
        if (c.namespace && "position" === c.property.name) {
          var d = this._core.items(this._core.relative(this._core.current())),
            e = a.map(this._hashes, function(a, b) {
              return a === d ? b : null
            }).join();
          if (!e || b.location.hash.slice(1) === e) return;
          b.location.hash = e
        }
      }, this)
    }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
      var c = b.location.hash.substring(1),
        e = this._core.$stage.children(),
        f = this._hashes[c] && e.index(this._hashes[c]);
      f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
    }, this))
  };
  e.Defaults = {
    URLhashListener: !1
  }, e.prototype.destroy = function() {
    var c, d;
    a(b).off("hashchange.owl.navigation");
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
  function e(b, c) {
    var e = !1,
      f = b.charAt(0).toUpperCase() + b.slice(1);
    return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
      return g[b] !== d ? (e = c ? b : !0, !1) : void 0
    }), e
  }

  function f(a) {
    return e(a, !0)
  }
  var g = a("<support>").get(0).style,
    h = "Webkit Moz O ms".split(" "),
    i = {
      transition: {
        end: {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd",
          transition: "transitionend"
        }
      },
      animation: {
        end: {
          WebkitAnimation: "webkitAnimationEnd",
          MozAnimation: "animationend",
          OAnimation: "oAnimationEnd",
          animation: "animationend"
        }
      }
    },
    j = {
      csstransforms: function() {
        return !!e("transform")
      },
      csstransforms3d: function() {
        return !!e("perspective")
      },
      csstransitions: function() {
        return !!e("transition")
      },
      cssanimations: function() {
        return !!e("animation")
      }
    };
  j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
! function(a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
  "use strict";
  var b = window.Slick || {};
  b = function() {
    function c(c, d) {
      var f, e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
    }
    var b = 0;
    return c
  }(), b.prototype.activateADA = function() {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    })
  }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;
    else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
      a(c).attr("data-slick-index", b)
    }), e.$slidesCache = e.$slides, e.reinit()
  }, b.prototype.animateHeight = function() {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed)
    }
  }, b.prototype.animateSlide = function(b, c) {
    var d = {},
      e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
      },
      complete: function() {
        c && c.call()
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
      e.disableTransition(), c.call()
    }, e.options.speed))
  }, b.prototype.getNavTarget = function() {
    var b = this,
      c = b.options.asNavFor;
    return c && null !== c && (c = a(c).not(b.$slider)), c
  }, b.prototype.asNavFor = function(b) {
    var c = this,
      d = c.getNavTarget();
    null !== d && "object" == typeof d && d.each(function() {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0)
    })
  }, b.prototype.applyTransition = function(a) {
    var b = this,
      c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.autoPlay = function() {
    var a = this;
    a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
  }, b.prototype.autoPlayClear = function() {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer)
  }, b.prototype.autoPlayIterator = function() {
    var a = this,
      b = a.currentSlide + a.options.slidesToScroll;
    a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
  }, b.prototype.buildArrows = function() {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, b.prototype.buildDots = function() {
    var c, d, b = this;
    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, b.prototype.buildOut = function() {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
  }, b.prototype.buildRows = function() {
    var b, c, d, e, f, g, h, a = this;
    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");
        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");
          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k))
          }
          i.appendChild(j)
        }
        e.appendChild(i)
      }
      a.$slider.empty().append(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, b.prototype.checkResponsive = function(b, c) {
    var e, f, g, d = this,
      h = !1,
      i = d.$slider.width(),
      j = window.innerWidth || a(window).width();
    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;
      for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
    }
  }, b.prototype.changeSlide = function(b, c) {
    var f, g, h, d = this,
      e = a(b.currentTarget);
    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;
      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;
      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;
      default:
        return
    }
  }, b.prototype.checkNavigable = function(a) {
    var c, d, b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
    else
      for (var e in c) {
        if (a < c[e]) {
          a = d;
          break
        }
        d = c[e]
      }
    return a
  }, b.prototype.cleanUpEvents = function() {
    var b = this;
    b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.cleanUpSlideEvents = function() {
    var b = this;
    b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.cleanUpRows = function() {
    var b, a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
  }, b.prototype.clickHandler = function(a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
  }, b.prototype.destroy = function(b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      a(this).attr("style", a(this).data("originalStyling"))
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
  }, b.prototype.disableTransition = function(a) {
    var b = this,
      c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.fadeSlide = function(a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function() {
      c.disableTransition(a), b.call()
    }, c.options.speed))
  }, b.prototype.fadeSlideOut = function(a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }))
  }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
  }, b.prototype.focusHandler = function() {
    var b = this;
    b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function() {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
      }, 0)
    })
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
    var a = this;
    return a.currentSlide
  }, b.prototype.getDotCount = function() {
    var a = this,
      b = 0,
      c = 0,
      d = 0;
    if (a.options.infinite === !0)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else if (a.options.centerMode === !0) d = a.slideCount;
    else if (a.options.asNavFor)
      for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
    return d - 1
  }, b.prototype.getLeft = function(a) {
    var c, d, f, b = this,
      e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
  }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
    var b = this;
    return b.options[a]
  }, b.prototype.getNavigableIndexes = function() {
    var e, a = this,
      b = 0,
      c = 0,
      d = [];
    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d
  }, b.prototype.getSlick = function() {
    return this
  }, b.prototype.getSlideCount = function() {
    var c, d, e, b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
  }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b)
  }, b.prototype.init = function(b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
  }, b.prototype.initADA = function() {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      })
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
  }, b.prototype.initArrowEvents = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, a.changeSlide))
  }, b.prototype.initDotEvents = function() {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.initSlideEvents = function() {
    var b = this;
    b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
  }, b.prototype.initializeEvents = function() {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.initUI = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
  }, b.prototype.keyHandler = function(a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: b.options.rtl === !0 ? "previous" : "next"
      }
    }))
  }, b.prototype.lazyLoad = function() {
    function g(c) {
      a("img[data-lazy]", c).each(function() {
        var c = a(this),
          d = a(this).attr("data-lazy"),
          e = document.createElement("img");
        e.onload = function() {
          c.animate({
            opacity: 0
          }, 100, function() {
            c.attr("src", d).animate({
              opacity: 1
            }, 200, function() {
              c.removeAttr("data-lazy").removeClass("slick-loading")
            }), b.$slider.trigger("lazyLoaded", [b, c, d])
          })
        }, e.onerror = function() {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
        }, e.src = d
      })
    }
    var c, d, e, f, b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
  }, b.prototype.loadSlider = function() {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
  }, b.prototype.next = b.prototype.slickNext = function() {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    })
  }, b.prototype.orientationChange = function() {
    var a = this;
    a.checkResponsive(), a.setPosition()
  }, b.prototype.pause = b.prototype.slickPause = function() {
    var a = this;
    a.autoPlayClear(), a.paused = !0
  }, b.prototype.play = b.prototype.slickPlay = function() {
    var a = this;
    a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
  }, b.prototype.postSlide = function(a) {
    var b = this;
    b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
  }, b.prototype.prev = b.prototype.slickPrev = function() {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, b.prototype.preventDefault = function(a) {
    a.preventDefault()
  }, b.prototype.progressiveLazyLoad = function(b) {
    b = b || 1;
    var e, f, g, c = this,
      d = a("img[data-lazy]", c.$slider);
    d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function() {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
    }, g.onerror = function() {
      3 > b ? setTimeout(function() {
        c.progressiveLazyLoad(b + 1)
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
  }, b.prototype.refresh = function(b) {
    var d, e, c = this;
    e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1)
  }, b.prototype.registerBreakpoints = function() {
    var c, d, e, b = this,
      f = b.options.responsive || null;
    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";
      for (c in f)
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
        } b.breakpoints.sort(function(a, c) {
        return b.options.mobileFirst ? a - c : c - a
      })
    }
  }, b.prototype.reinit = function() {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
  }, b.prototype.resize = function() {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
    }, 50))
  }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
  }, b.prototype.setCSS = function(a) {
    var d, e, b = this,
      c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
  }, b.prototype.setDimensions = function() {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
  }, b.prototype.setFade = function() {
    var c, b = this;
    b.$slides.each(function(d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      })
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    })
  }, b.prototype.setHeight = function() {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b)
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function() {
    var c, d, e, f, h, b = this,
      g = !1;
    if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
    else if ("multiple" === h) a.each(e, function(a, c) {
      b.options[a] = c
    });
    else if ("responsive" === h)
      for (d in f)
        if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
        else {
          for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
          b.options.responsive.push(f[d])
        } g && (b.unload(), b.reinit())
  }, b.prototype.setPosition = function() {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
  }, b.prototype.setProps = function() {
    var a = this,
      b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
  }, b.prototype.setSlideClasses = function(a) {
    var c, d, e, f, b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
      d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
  }, b.prototype.setupInfinite = function() {
    var c, d, e, b = this;
    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        a(this).attr("id", "")
      })
    }
  }, b.prototype.interrupt = function(a) {
    var b = this;
    a || b.autoPlay(), b.interrupted = a
  }, b.prototype.selectHandler = function(b) {
    var c = this,
      d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
      e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
  }, b.prototype.slideHandler = function(a, b, c) {
    var d, e, f, g, j, h = null,
      i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
      i.postSlide(d)
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
      i.postSlide(d)
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
      i.postSlide(e)
    })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
      i.postSlide(e)
    }) : i.postSlide(e))))
  }, b.prototype.startLoad = function() {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
  }, b.prototype.swipeDirection = function() {
    var a, b, c, d, e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
  }, b.prototype.swipeEnd = function(a) {
    var c, d, b = this;
    if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {
        case "left":
        case "down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
          break;
        case "right":
        case "up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
      }
      "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
  }, b.prototype.swipeHandler = function(a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;
      case "move":
        b.swipeMove(a);
        break;
      case "end":
        b.swipeEnd(a)
    }
  }, b.prototype.swipeMove = function(a) {
    var d, e, f, g, h, b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
  }, b.prototype.swipeStart = function(a) {
    var c, b = this;
    return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
  }, b.prototype.unload = function() {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, b.prototype.unslick = function(a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy()
  }, b.prototype.updateArrows = function() {
    var b, a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, b.prototype.updateDots = function() {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, b.prototype.visibility = function() {
    var a = this;
    a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
  }, a.fn.slick = function() {
    var f, g, a = this,
      c = arguments[0],
      d = Array.prototype.slice.call(arguments, 1),
      e = a.length;
    for (f = 0; e > f; f++)
      if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    return a
  }
});

! function(t, e, i, s) {
  function o(e, i) {
    this.element = e, this.options = t.extend({}, r, i), this._defaults = r, this._name = n, this.init()
  }
  var n = "stellar",
    r = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function(t) {
        t.hide()
      },
      showElement: function(t) {
        t.show()
      }
    },
    a = {
      scroll: {
        getLeft: function(t) {
          return t.scrollLeft()
        },
        setLeft: function(t, e) {
          t.scrollLeft(e)
        },
        getTop: function(t) {
          return t.scrollTop()
        },
        setTop: function(t, e) {
          t.scrollTop(e)
        }
      },
      position: {
        getLeft: function(t) {
          return -1 * parseInt(t.css("left"), 10)
        },
        getTop: function(t) {
          return -1 * parseInt(t.css("top"), 10)
        }
      },
      margin: {
        getLeft: function(t) {
          return -1 * parseInt(t.css("margin-left"), 10)
        },
        getTop: function(t) {
          return -1 * parseInt(t.css("margin-top"), 10)
        }
      },
      transform: {
        getLeft: function(t) {
          var e = getComputedStyle(t[0])[c];
          return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[4], 10) : 0
        },
        getTop: function(t) {
          var e = getComputedStyle(t[0])[c];
          return "none" !== e ? -1 * parseInt(e.match(/(-?[0-9]+)/g)[5], 10) : 0
        }
      }
    },
    l = {
      position: {
        setLeft: function(t, e) {
          t.css("left", e)
        },
        setTop: function(t, e) {
          t.css("top", e)
        }
      },
      transform: {
        setPosition: function(t, e, i, s, o) {
          t[0].style[c] = "translate3d(" + (e - i) + "px, " + (s - o) + "px, 0)"
        }
      }
    },
    f = function() {
      var e, i = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        s = t("script")[0].style,
        o = "";
      for (e in s)
        if (i.test(e)) {
          o = e.match(i)[0];
          break
        } return "WebkitOpacity" in s && (o = "Webkit"), "KhtmlOpacity" in s && (o = "Khtml"),
        function(t) {
          return o + (o.length > 0 ? t.charAt(0).toUpperCase() + t.slice(1) : t)
        }
    }(),
    c = f("transform"),
    h = t("<div />", {
      style: "background:#fff"
    }).css("background-position-x") !== s,
    p = h ? function(t, e, i) {
      t.css({
        "background-position-x": e,
        "background-position-y": i
      })
    } : function(t, e, i) {
      t.css("background-position", e + " " + i)
    },
    d = h ? function(t) {
      return [t.css("background-position-x"), t.css("background-position-y")]
    } : function(t) {
      return t.css("background-position").split(" ")
    },
    u = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
      setTimeout(t, 1e3 / 60)
    };
  o.prototype = {
    init: function() {
      this.options.name = n + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
        firstLoad: !0
      }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
    },
    _defineElements: function() {
      this.element === i.body && (this.element = e), this.$scrollElement = t(this.element), this.$element = this.element === e ? t("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== s ? t(this.options.viewportElement) : this.$scrollElement[0] === e || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
    },
    _defineGetters: function() {
      var t = this,
        e = a[t.options.scrollProperty];
      this._getScrollLeft = function() {
        return e.getLeft(t.$scrollElement)
      }, this._getScrollTop = function() {
        return e.getTop(t.$scrollElement)
      }
    },
    _defineSetters: function() {
      var e = this,
        i = a[e.options.scrollProperty],
        s = l[e.options.positionProperty],
        o = i.setLeft,
        n = i.setTop;
      this._setScrollLeft = "function" == typeof o ? function(t) {
        o(e.$scrollElement, t)
      } : t.noop, this._setScrollTop = "function" == typeof n ? function(t) {
        n(e.$scrollElement, t)
      } : t.noop, this._setPosition = s.setPosition || function(t, i, o, n, r) {
        e.options.horizontalScrolling && s.setLeft(t, i, o), e.options.verticalScrolling && s.setTop(t, n, r)
      }
    },
    _handleWindowLoadAndResize: function() {
      var i = this,
        s = t(e);
      i.options.responsive && s.bind("load." + this.name, function() {
        i.refresh()
      }), s.bind("resize." + this.name, function() {
        i._detectViewport(), i.options.responsive && i.refresh()
      })
    },
    refresh: function(i) {
      var s = this,
        o = s._getScrollLeft(),
        n = s._getScrollTop();
      i && i.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), i && i.firstLoad && /WebKit/.test(navigator.userAgent) && t(e).load(function() {
        var t = s._getScrollLeft(),
          e = s._getScrollTop();
        s._setScrollLeft(t + 1), s._setScrollTop(e + 1), s._setScrollLeft(t), s._setScrollTop(e)
      }), this._setScrollLeft(o), this._setScrollTop(n)
    },
    _detectViewport: function() {
      var t = this.$viewportElement.offset(),
        e = null !== t && t !== s;
      this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = e ? t.top : 0, this.viewportOffsetLeft = e ? t.left : 0
    },
    _findParticles: function() {
      {
        var e = this;
        this._getScrollLeft(), this._getScrollTop()
      }
      if (this.particles !== s)
        for (var i = this.particles.length - 1; i >= 0; i--) this.particles[i].$element.data("stellar-elementIsActive", s);
      this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function() {
        var i, o, n, r, a, l, f, c, h, p = t(this),
          d = 0,
          u = 0,
          g = 0,
          m = 0;
        if (p.data("stellar-elementIsActive")) {
          if (p.data("stellar-elementIsActive") !== this) return
        } else p.data("stellar-elementIsActive", this);
        e.options.showElement(p), p.data("stellar-startingLeft") ? (p.css("left", p.data("stellar-startingLeft")), p.css("top", p.data("stellar-startingTop"))) : (p.data("stellar-startingLeft", p.css("left")), p.data("stellar-startingTop", p.css("top"))), n = p.position().left, r = p.position().top, a = "auto" === p.css("margin-left") ? 0 : parseInt(p.css("margin-left"), 10), l = "auto" === p.css("margin-top") ? 0 : parseInt(p.css("margin-top"), 10), c = p.offset().left - a, h = p.offset().top - l, p.parents().each(function() {
          var e = t(this);
          return e.data("stellar-offset-parent") === !0 ? (d = g, u = m, f = e, !1) : (g += e.position().left, m += e.position().top, void 0)
        }), i = p.data("stellar-horizontal-offset") !== s ? p.data("stellar-horizontal-offset") : f !== s && f.data("stellar-horizontal-offset") !== s ? f.data("stellar-horizontal-offset") : e.horizontalOffset, o = p.data("stellar-vertical-offset") !== s ? p.data("stellar-vertical-offset") : f !== s && f.data("stellar-vertical-offset") !== s ? f.data("stellar-vertical-offset") : e.verticalOffset, e.particles.push({
          $element: p,
          $offsetParent: f,
          isFixed: "fixed" === p.css("position"),
          horizontalOffset: i,
          verticalOffset: o,
          startingPositionLeft: n,
          startingPositionTop: r,
          startingOffsetLeft: c,
          startingOffsetTop: h,
          parentOffsetLeft: d,
          parentOffsetTop: u,
          stellarRatio: p.data("stellar-ratio") !== s ? p.data("stellar-ratio") : 1,
          width: p.outerWidth(!0),
          height: p.outerHeight(!0),
          isHidden: !1
        })
      })
    },
    _findBackgrounds: function() {
      var e, i = this,
        o = this._getScrollLeft(),
        n = this._getScrollTop();
      this.backgrounds = [], this.options.parallaxBackgrounds && (e = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (e = e.add(this.$element)), e.each(function() {
        var e, r, a, l, f, c, h, u = t(this),
          g = d(u),
          m = 0,
          v = 0,
          L = 0,
          _ = 0;
        if (u.data("stellar-backgroundIsActive")) {
          if (u.data("stellar-backgroundIsActive") !== this) return
        } else u.data("stellar-backgroundIsActive", this);
        u.data("stellar-backgroundStartingLeft") ? p(u, u.data("stellar-backgroundStartingLeft"), u.data("stellar-backgroundStartingTop")) : (u.data("stellar-backgroundStartingLeft", g[0]), u.data("stellar-backgroundStartingTop", g[1])), a = "auto" === u.css("margin-left") ? 0 : parseInt(u.css("margin-left"), 10), l = "auto" === u.css("margin-top") ? 0 : parseInt(u.css("margin-top"), 10), f = u.offset().left - a - o, c = u.offset().top - l - n, u.parents().each(function() {
          var e = t(this);
          return e.data("stellar-offset-parent") === !0 ? (m = L, v = _, h = e, !1) : (L += e.position().left, _ += e.position().top, void 0)
        }), e = u.data("stellar-horizontal-offset") !== s ? u.data("stellar-horizontal-offset") : h !== s && h.data("stellar-horizontal-offset") !== s ? h.data("stellar-horizontal-offset") : i.horizontalOffset, r = u.data("stellar-vertical-offset") !== s ? u.data("stellar-vertical-offset") : h !== s && h.data("stellar-vertical-offset") !== s ? h.data("stellar-vertical-offset") : i.verticalOffset, i.backgrounds.push({
          $element: u,
          $offsetParent: h,
          isFixed: "fixed" === u.css("background-attachment"),
          horizontalOffset: e,
          verticalOffset: r,
          startingValueLeft: g[0],
          startingValueTop: g[1],
          startingBackgroundPositionLeft: isNaN(parseInt(g[0], 10)) ? 0 : parseInt(g[0], 10),
          startingBackgroundPositionTop: isNaN(parseInt(g[1], 10)) ? 0 : parseInt(g[1], 10),
          startingPositionLeft: u.position().left,
          startingPositionTop: u.position().top,
          startingOffsetLeft: f,
          startingOffsetTop: c,
          parentOffsetLeft: m,
          parentOffsetTop: v,
          stellarRatio: u.data("stellar-background-ratio") === s ? 1 : u.data("stellar-background-ratio")
        })
      }))
    },
    _reset: function() {
      var t, e, i, s, o;
      for (o = this.particles.length - 1; o >= 0; o--) t = this.particles[o], e = t.$element.data("stellar-startingLeft"), i = t.$element.data("stellar-startingTop"), this._setPosition(t.$element, e, e, i, i), this.options.showElement(t.$element), t.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
      for (o = this.backgrounds.length - 1; o >= 0; o--) s = this.backgrounds[o], s.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), p(s.$element, s.startingValueLeft, s.startingValueTop)
    },
    destroy: function() {
      this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = t.noop, t(e).unbind("load." + this.name).unbind("resize." + this.name)
    },
    _setOffsets: function() {
      var i = this,
        s = t(e);
      s.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), s.bind("resize.horizontal-" + this.name, function() {
        i.horizontalOffset = i.options.horizontalOffset()
      })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), s.bind("resize.vertical-" + this.name, function() {
        i.verticalOffset = i.options.verticalOffset()
      })) : this.verticalOffset = this.options.verticalOffset
    },
    _repositionElements: function() {
      var t, e, i, s, o, n, r, a, l, f, c = this._getScrollLeft(),
        h = this._getScrollTop(),
        d = !0,
        u = !0;
      if (this.currentScrollLeft !== c || this.currentScrollTop !== h || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
        for (this.currentScrollLeft = c, this.currentScrollTop = h, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, f = this.particles.length - 1; f >= 0; f--) t = this.particles[f], e = t.isFixed ? 1 : 0, this.options.horizontalScrolling ? (n = (c + t.horizontalOffset + this.viewportOffsetLeft + t.startingPositionLeft - t.startingOffsetLeft + t.parentOffsetLeft) * -(t.stellarRatio + e - 1) + t.startingPositionLeft, a = n - t.startingPositionLeft + t.startingOffsetLeft) : (n = t.startingPositionLeft, a = t.startingOffsetLeft), this.options.verticalScrolling ? (r = (h + t.verticalOffset + this.viewportOffsetTop + t.startingPositionTop - t.startingOffsetTop + t.parentOffsetTop) * -(t.stellarRatio + e - 1) + t.startingPositionTop, l = r - t.startingPositionTop + t.startingOffsetTop) : (r = t.startingPositionTop, l = t.startingOffsetTop), this.options.hideDistantElements && (u = !this.options.horizontalScrolling || a + t.width > (t.isFixed ? 0 : c) && a < (t.isFixed ? 0 : c) + this.viewportWidth + this.viewportOffsetLeft, d = !this.options.verticalScrolling || l + t.height > (t.isFixed ? 0 : h) && l < (t.isFixed ? 0 : h) + this.viewportHeight + this.viewportOffsetTop), u && d ? (t.isHidden && (this.options.showElement(t.$element), t.isHidden = !1), this._setPosition(t.$element, n, t.startingPositionLeft, r, t.startingPositionTop)) : t.isHidden || (this.options.hideElement(t.$element), t.isHidden = !0);
        for (f = this.backgrounds.length - 1; f >= 0; f--) i = this.backgrounds[f], e = i.isFixed ? 0 : 1, s = this.options.horizontalScrolling ? (c + i.horizontalOffset - this.viewportOffsetLeft - i.startingOffsetLeft + i.parentOffsetLeft - i.startingBackgroundPositionLeft) * (e - i.stellarRatio) + "px" : i.startingValueLeft, o = this.options.verticalScrolling ? (h + i.verticalOffset - this.viewportOffsetTop - i.startingOffsetTop + i.parentOffsetTop - i.startingBackgroundPositionTop) * (e - i.stellarRatio) + "px" : i.startingValueTop, p(i.$element, s, o)
      }
    },
    _handleScrollEvent: function() {
      var t = this,
        e = !1,
        i = function() {
          t._repositionElements(), e = !1
        },
        s = function() {
          e || (u(i), e = !0)
        };
      this.$scrollElement.bind("scroll." + this.name, s), s()
    },
    _startAnimationLoop: function() {
      var t = this;
      this._animationLoop = function() {
        u(t._animationLoop), t._repositionElements()
      }, this._animationLoop()
    }
  }, t.fn[n] = function(e) {
    var i = arguments;
    return e === s || "object" == typeof e ? this.each(function() {
      t.data(this, "plugin_" + n) || t.data(this, "plugin_" + n, new o(this, e))
    }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
      var s = t.data(this, "plugin_" + n);
      s instanceof o && "function" == typeof s[e] && s[e].apply(s, Array.prototype.slice.call(i, 1)), "destroy" === e && t.data(this, "plugin_" + n, null)
    }) : void 0
  }, t[n] = function() {
    var i = t(e);
    return i.stellar.apply(i, Array.prototype.slice.call(arguments, 0))
  }, t[n].scrollProperty = a, t[n].positionProperty = l, e.Stellar = o
}(jQuery, this, document);

! function() {
  var t = !1;
  window.JQClass = function() {}, JQClass.classes = {}, JQClass.extend = function e(i) {
    function n() {
      !t && this._init && this._init.apply(this, arguments)
    }
    var s = this.prototype;
    t = !0;
    var o = new this;
    t = !1;
    for (var a in i) o[a] = "function" == typeof i[a] && "function" == typeof s[a] ? function(t, e) {
      return function() {
        var i = this._super;
        this._super = function(e) {
          return s[t].apply(this, e || [])
        };
        var n = e.apply(this, arguments);
        return this._super = i, n
      }
    }(a, i[a]) : i[a];
    return n.prototype = o, n.prototype.constructor = n, n.extend = e, n
  }
}(),
function($) {
  function camelCase(t) {
    return t.replace(/-([a-z])/g, function(t, e) {
      return e.toUpperCase()
    })
  }
  JQClass.classes.JQPlugin = JQClass.extend({
    name: "plugin",
    defaultOptions: {},
    regionalOptions: {},
    _getters: [],
    _getMarker: function() {
      return "is-" + this.name
    },
    _init: function() {
      $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
      var t = camelCase(this.name);
      $[t] = this, $.fn[t] = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return $[t]._isNotChained(e, i) ? $[t][e].apply($[t], [this[0]].concat(i)) : this.each(function() {
          if ("string" == typeof e) {
            if ("_" === e[0] || !$[t][e]) throw "Unknown method: " + e;
            $[t][e].apply($[t], [this].concat(i))
          } else $[t]._attach(this, e)
        })
      }
    },
    setDefaults: function(t) {
      $.extend(this.defaultOptions, t || {})
    },
    _isNotChained: function(t, e) {
      return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) ? !0 : $.inArray(t, this._getters) > -1
    },
    _attach: function(t, e) {
      if (t = $(t), !t.hasClass(this._getMarker())) {
        t.addClass(this._getMarker()), e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
        var i = $.extend({
          name: this.name,
          elem: t,
          options: e
        }, this._instSettings(t, e));
        t.data(this.name, i), this._postAttach(t, i), this.option(t, e)
      }
    },
    _instSettings: function() {
      return {}
    },
    _postAttach: function() {},
    _getMetadata: function(elem) {
      try {
        var data = elem.data(this.name.toLowerCase()) || "";
        data = data.replace(/'/g, '"'), data = data.replace(/([a-zA-Z0-9]+):/g, function(t, e, i) {
          var n = data.substring(0, i).match(/"/g);
          return n && n.length % 2 !== 0 ? e + ":" : '"' + e + '":'
        }), data = $.parseJSON("{" + data + "}");
        for (var name in data) {
          var value = data[name];
          "string" == typeof value && value.match(/^new Date\((.*)\)$/) && (data[name] = eval(value))
        }
        return data
      } catch (e) {
        return {}
      }
    },
    _getInst: function(t) {
      return $(t).data(this.name) || {}
    },
    option: function(t, e, i) {
      t = $(t);
      var n = t.data(this.name);
      if (!e || "string" == typeof e && null == i) {
        var s = (n || {}).options;
        return s && e ? s[e] : s
      }
      if (t.hasClass(this._getMarker())) {
        var s = e || {};
        "string" == typeof e && (s = {}, s[e] = i), this._optionsChanged(t, n, s), $.extend(n.options, s)
      }
    },
    _optionsChanged: function() {},
    destroy: function(t) {
      t = $(t), t.hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)), t.removeData(this.name).removeClass(this._getMarker()))
    },
    _preDestroy: function() {}
  }), $.JQPlugin = {
    createPlugin: function(t, e) {
      "object" == typeof t && (e = t, t = "JQPlugin"), t = camelCase(t);
      var i = camelCase(e.name);
      JQClass.classes[i] = JQClass.classes[t].extend(e), new JQClass.classes[i]
    }
  }
}(jQuery),
function(t) {
  var e = "countdown",
    i = 0,
    n = 1,
    s = 2,
    o = 3,
    a = 4,
    r = 5,
    l = 6;
  t.JQPlugin.createPlugin({
    name: e,
    defaultOptions: {
      until: null,
      since: null,
      timezone: null,
      serverSync: null,
      format: "dHMS",
      layout: "",
      compact: !1,
      padZeroes: !1,
      significant: 0,
      description: "",
      expiryUrl: "",
      expiryText: "",
      alwaysExpire: !1,
      onExpiry: null,
      onTick: null,
      tickInterval: 1
    },
    regionalOptions: {
      "": {
        labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
        labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
        compactLabels: ["y", "m", "w", "d"],
        whichLabels: null,
        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        timeSeparator: ":",
        isRTL: !1
      }
    },
    _getters: ["getTimes"],
    _rtlClass: e + "-rtl",
    _sectionClass: e + "-section",
    _amountClass: e + "-amount",
    _periodClass: e + "-period",
    _rowClass: e + "-row",
    _holdingClass: e + "-holding",
    _showClass: e + "-show",
    _descrClass: e + "-descr",
    _timerElems: [],
    _init: function() {
      function e(t) {
        var r = 1e12 > t ? s ? performance.now() + performance.timing.navigationStart : n() : t || n();
        r - a >= 1e3 && (i._updateElems(), a = r), o(e)
      }
      var i = this;
      this._super(), this._serverSyncs = [];
      var n = "function" == typeof Date.now ? Date.now : function() {
          return (new Date).getTime()
        },
        s = window.performance && "function" == typeof window.performance.now,
        o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
        a = 0;
      !o || t.noRequestAnimationFrame ? (t.noRequestAnimationFrame = null, setInterval(function() {
        i._updateElems()
      }, 980)) : (a = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || n(), o(e))
    },
    UTCDate: function(t, e, i, n, s, o, a, r) {
      "object" == typeof e && e.constructor == Date && (r = e.getMilliseconds(), a = e.getSeconds(), o = e.getMinutes(), s = e.getHours(), n = e.getDate(), i = e.getMonth(), e = e.getFullYear());
      var l = new Date;
      return l.setUTCFullYear(e), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(n || 1), l.setUTCHours(s || 0), l.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)), l.setUTCSeconds(a || 0), l.setUTCMilliseconds(r || 0), l
    },
    periodsToSeconds: function(t) {
      return 31557600 * t[0] + 2629800 * t[1] + 604800 * t[2] + 86400 * t[3] + 3600 * t[4] + 60 * t[5] + t[6]
    },
    _instSettings: function() {
      return {
        _periods: [0, 0, 0, 0, 0, 0, 0]
      }
    },
    _addElem: function(t) {
      this._hasElem(t) || this._timerElems.push(t)
    },
    _hasElem: function(e) {
      return t.inArray(e, this._timerElems) > -1
    },
    _removeElem: function(e) {
      this._timerElems = t.map(this._timerElems, function(t) {
        return t == e ? null : t
      })
    },
    _updateElems: function() {
      for (var t = this._timerElems.length - 1; t >= 0; t--) this._updateCountdown(this._timerElems[t])
    },
    _optionsChanged: function(e, i, n) {
      n.layout && (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(i.options, n);
      var s = i.options.timezone != n.timezone;
      t.extend(i.options, n), this._adjustSettings(e, i, null != n.until || null != n.since || s);
      var o = new Date;
      (i._since && i._since < o || i._until && i._until > o) && this._addElem(e[0]), this._updateCountdown(e, i)
    },
    _updateCountdown: function(e, i) {
      if (e = e.jquery ? e : t(e), i = i || this._getInst(e)) {
        if (e.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), t.isFunction(i.options.onTick)) {
          var n = "lap" != i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
          (1 == i.options.tickInterval || this.periodsToSeconds(n) % i.options.tickInterval == 0) && i.options.onTick.apply(e[0], [n])
        }
        var s = "pause" != i._hold && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime());
        if (s && !i._expiring) {
          if (i._expiring = !0, this._hasElem(e[0]) || i.options.alwaysExpire) {
            if (this._removeElem(e[0]), t.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(e[0], []), i.options.expiryText) {
              var o = i.options.layout;
              i.options.layout = i.options.expiryText, this._updateCountdown(e[0], i), i.options.layout = o
            }
            i.options.expiryUrl && (window.location = i.options.expiryUrl)
          }
          i._expiring = !1
        } else "pause" == i._hold && this._removeElem(e[0])
      }
    },
    _resetExtraLabels: function(t, e) {
      for (var i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && (t[i] = e[i]);
      for (var i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof e[i] && (t[i] = null)
    },
    _adjustSettings: function(e, i, n) {
      for (var s, o = 0, a = null, r = 0; r < this._serverSyncs.length; r++)
        if (this._serverSyncs[r][0] == i.options.serverSync) {
          a = this._serverSyncs[r][1];
          break
        } if (null != a) o = i.options.serverSync ? a : 0, s = new Date;
      else {
        var l = t.isFunction(i.options.serverSync) ? i.options.serverSync.apply(e[0], []) : null;
        s = new Date, o = l ? s.getTime() - l.getTime() : 0, this._serverSyncs.push([i.options.serverSync, o])
      }
      var p = i.options.timezone;
      p = null == p ? -s.getTimezoneOffset() : p, (n || !n && null == i._until && null == i._since) && (i._since = i.options.since, null != i._since && (i._since = this.UTCDate(p, this._determineTime(i._since, null)), i._since && o && i._since.setMilliseconds(i._since.getMilliseconds() + o)), i._until = this.UTCDate(p, this._determineTime(i.options.until, s)), o && i._until.setMilliseconds(i._until.getMilliseconds() + o)), i._show = this._determineShow(i)
    },
    _preDestroy: function(t) {
      this._removeElem(t[0]), t.empty()
    },
    pause: function(t) {
      this._hold(t, "pause")
    },
    lap: function(t) {
      this._hold(t, "lap")
    },
    resume: function(t) {
      this._hold(t, null)
    },
    toggle: function(e) {
      var i = t.data(e, this.name) || {};
      this[i._hold ? "resume" : "pause"](e)
    },
    toggleLap: function(e) {
      var i = t.data(e, this.name) || {};
      this[i._hold ? "resume" : "lap"](e)
    },
    _hold: function(e, i) {
      var n = t.data(e, this.name);
      if (n) {
        if ("pause" == n._hold && !i) {
          n._periods = n._savePeriods;
          var s = n._since ? "-" : "+";
          n[n._since ? "_since" : "_until"] = this._determineTime(s + n._periods[0] + "y" + s + n._periods[1] + "o" + s + n._periods[2] + "w" + s + n._periods[3] + "d" + s + n._periods[4] + "h" + s + n._periods[5] + "m" + s + n._periods[6] + "s"), this._addElem(e)
        }
        n._hold = i, n._savePeriods = "pause" == i ? n._periods : null, t.data(e, this.name, n), this._updateCountdown(e, n)
      }
    },
    getTimes: function(e) {
      var i = t.data(e, this.name);
      return i ? "pause" == i._hold ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
    },
    _determineTime: function(t, e) {
      var i = this,
        n = function(t) {
          var e = new Date;
          return e.setTime(e.getTime() + 1e3 * t), e
        },
        s = function(t) {
          t = t.toLowerCase();
          for (var e = new Date, n = e.getFullYear(), s = e.getMonth(), o = e.getDate(), a = e.getHours(), r = e.getMinutes(), l = e.getSeconds(), p = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, _ = p.exec(t); _;) {
            switch (_[2] || "s") {
              case "s":
                l += parseInt(_[1], 10);
                break;
              case "m":
                r += parseInt(_[1], 10);
                break;
              case "h":
                a += parseInt(_[1], 10);
                break;
              case "d":
                o += parseInt(_[1], 10);
                break;
              case "w":
                o += 7 * parseInt(_[1], 10);
                break;
              case "o":
                s += parseInt(_[1], 10), o = Math.min(o, i._getDaysInMonth(n, s));
                break;
              case "y":
                n += parseInt(_[1], 10), o = Math.min(o, i._getDaysInMonth(n, s))
            }
            _ = p.exec(t)
          }
          return new Date(n, s, o, a, r, l, 0)
        },
        o = null == t ? e : "string" == typeof t ? s(t) : "number" == typeof t ? n(t) : t;
      return o && o.setMilliseconds(0), o
    },
    _getDaysInMonth: function(t, e) {
      return 32 - new Date(t, e, 32).getDate()
    },
    _normalLabels: function(t) {
      return t
    },
    _generateHTML: function(e) {
      var p = this;
      e._periods = e._hold ? e._periods : this._calculatePeriods(e, e._show, e.options.significant, new Date);
      for (var _ = !1, u = 0, c = e.options.significant, h = t.extend({}, e._show), d = i; l >= d; d++) _ |= "?" == e._show[d] && e._periods[d] > 0, h[d] = "?" != e._show[d] || _ ? e._show[d] : null, u += h[d] ? 1 : 0, c -= e._periods[d] > 0 ? 1 : 0;
      for (var m = [!1, !1, !1, !1, !1, !1, !1], d = l; d >= i; d--) e._show[d] && (e._periods[d] ? m[d] = !0 : (m[d] = c > 0, c--));
      var g = e.options.compact ? e.options.compactLabels : e.options.labels,
        f = e.options.whichLabels || this._normalLabels,
        w = function(t) {
          var i = e.options["compactLabels" + f(e._periods[t])];
          return h[t] ? p._translateDigits(e, e._periods[t]) + (i ? i[t] : g[t]) + " " : ""
        },
        y = e.options.padZeroes ? 2 : 1,
        v = function(t) {
          var i = e.options["labels" + f(e._periods[t])];
          return !e.options.significant && h[t] || e.options.significant && m[t] ? '<span class="' + p._sectionClass + '"><span class="' + p._amountClass + '">' + p._minDigits(e, e._periods[t], y) + '</span><span class="' + p._periodClass + '">' + (i ? i[t] : g[t]) + "</span></span>" : ""
        };
      return e.options.layout ? this._buildLayout(e, h, e.options.layout, e.options.compact, e.options.significant, m) : (e.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (e._hold ? " " + this._holdingClass : "") + '">' + w(i) + w(n) + w(s) + w(o) + (h[a] ? this._minDigits(e, e._periods[a], 2) : "") + (h[r] ? (h[a] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[r], 2) : "") + (h[l] ? (h[a] || h[r] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[l], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (e.options.significant || u) + (e._hold ? " " + this._holdingClass : "") + '">' + v(i) + v(n) + v(s) + v(o) + v(a) + v(r) + v(l)) + "</span>" + (e.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + e.options.description + "</span>" : "")
    },
    _buildLayout: function(e, p, _, u, c, h) {
      for (var d = e.options[u ? "compactLabels" : "labels"], m = e.options.whichLabels || this._normalLabels, g = function(t) {
          return (e.options[(u ? "compactLabels" : "labels") + m(e._periods[t])] || d)[t]
        }, f = function(t, i) {
          return e.options.digits[Math.floor(t / i) % 10]
        }, w = {
          desc: e.options.description,
          sep: e.options.timeSeparator,
          yl: g(i),
          yn: this._minDigits(e, e._periods[i], 1),
          ynn: this._minDigits(e, e._periods[i], 2),
          ynnn: this._minDigits(e, e._periods[i], 3),
          y1: f(e._periods[i], 1),
          y10: f(e._periods[i], 10),
          y100: f(e._periods[i], 100),
          y1000: f(e._periods[i], 1e3),
          ol: g(n),
          on: this._minDigits(e, e._periods[n], 1),
          onn: this._minDigits(e, e._periods[n], 2),
          onnn: this._minDigits(e, e._periods[n], 3),
          o1: f(e._periods[n], 1),
          o10: f(e._periods[n], 10),
          o100: f(e._periods[n], 100),
          o1000: f(e._periods[n], 1e3),
          wl: g(s),
          wn: this._minDigits(e, e._periods[s], 1),
          wnn: this._minDigits(e, e._periods[s], 2),
          wnnn: this._minDigits(e, e._periods[s], 3),
          w1: f(e._periods[s], 1),
          w10: f(e._periods[s], 10),
          w100: f(e._periods[s], 100),
          w1000: f(e._periods[s], 1e3),
          dl: g(o),
          dn: this._minDigits(e, e._periods[o], 1),
          dnn: this._minDigits(e, e._periods[o], 2),
          dnnn: this._minDigits(e, e._periods[o], 3),
          d1: f(e._periods[o], 1),
          d10: f(e._periods[o], 10),
          d100: f(e._periods[o], 100),
          d1000: f(e._periods[o], 1e3),
          hl: g(a),
          hn: this._minDigits(e, e._periods[a], 1),
          hnn: this._minDigits(e, e._periods[a], 2),
          hnnn: this._minDigits(e, e._periods[a], 3),
          h1: f(e._periods[a], 1),
          h10: f(e._periods[a], 10),
          h100: f(e._periods[a], 100),
          h1000: f(e._periods[a], 1e3),
          ml: g(r),
          mn: this._minDigits(e, e._periods[r], 1),
          mnn: this._minDigits(e, e._periods[r], 2),
          mnnn: this._minDigits(e, e._periods[r], 3),
          m1: f(e._periods[r], 1),
          m10: f(e._periods[r], 10),
          m100: f(e._periods[r], 100),
          m1000: f(e._periods[r], 1e3),
          sl: g(l),
          sn: this._minDigits(e, e._periods[l], 1),
          snn: this._minDigits(e, e._periods[l], 2),
          snnn: this._minDigits(e, e._periods[l], 3),
          s1: f(e._periods[l], 1),
          s10: f(e._periods[l], 10),
          s100: f(e._periods[l], 100),
          s1000: f(e._periods[l], 1e3)
        }, y = _, v = i; l >= v; v++) {
        var D = "yowdhms".charAt(v),
          C = new RegExp("\\{" + D + "<\\}([\\s\\S]*)\\{" + D + ">\\}", "g");
        y = y.replace(C, !c && p[v] || c && h[v] ? "$1" : "")
      }
      return t.each(w, function(t, e) {
        var i = new RegExp("\\{" + t + "\\}", "g");
        y = y.replace(i, e)
      }), y
    },
    _minDigits: function(t, e, i) {
      return e = "" + e, e.length >= i ? this._translateDigits(t, e) : (e = "0000000000" + e, this._translateDigits(t, e.substr(e.length - i)))
    },
    _translateDigits: function(t, e) {
      return ("" + e).replace(/[0-9]/g, function(e) {
        return t.options.digits[e]
      })
    },
    _determineShow: function(t) {
      var e = t.options.format,
        p = [];
      return p[i] = e.match("y") ? "?" : e.match("Y") ? "!" : null, p[n] = e.match("o") ? "?" : e.match("O") ? "!" : null, p[s] = e.match("w") ? "?" : e.match("W") ? "!" : null, p[o] = e.match("d") ? "?" : e.match("D") ? "!" : null, p[a] = e.match("h") ? "?" : e.match("H") ? "!" : null, p[r] = e.match("m") ? "?" : e.match("M") ? "!" : null, p[l] = e.match("s") ? "?" : e.match("S") ? "!" : null, p
    },
    _calculatePeriods: function(t, e, p, _) {
      t._now = _, t._now.setMilliseconds(0);
      var u = new Date(t._now.getTime());
      t._since ? _.getTime() < t._since.getTime() ? t._now = _ = u : _ = t._since : (u.setTime(t._until.getTime()), _.getTime() > t._until.getTime() && (t._now = _ = u));
      var c = [0, 0, 0, 0, 0, 0, 0];
      if (e[i] || e[n]) {
        var h = this._getDaysInMonth(_.getFullYear(), _.getMonth()),
          d = this._getDaysInMonth(u.getFullYear(), u.getMonth()),
          m = u.getDate() == _.getDate() || u.getDate() >= Math.min(h, d) && _.getDate() >= Math.min(h, d),
          g = function(t) {
            return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds()
          },
          f = Math.max(0, 12 * (u.getFullYear() - _.getFullYear()) + u.getMonth() - _.getMonth() + (u.getDate() < _.getDate() && !m || m && g(u) < g(_) ? -1 : 0));
        c[i] = e[i] ? Math.floor(f / 12) : 0, c[n] = e[n] ? f - 12 * c[i] : 0, _ = new Date(_.getTime());
        var w = _.getDate() == h,
          y = this._getDaysInMonth(_.getFullYear() + c[i], _.getMonth() + c[n]);
        _.getDate() > y && _.setDate(y), _.setFullYear(_.getFullYear() + c[i]), _.setMonth(_.getMonth() + c[n]), w && _.setDate(y)
      }
      var v = Math.floor((u.getTime() - _.getTime()) / 1e3),
        D = function(t, i) {
          c[t] = e[t] ? Math.floor(v / i) : 0, v -= c[t] * i
        };
      if (D(s, 604800), D(o, 86400), D(a, 3600), D(r, 60), D(l, 1), v > 0 && !t._since)
        for (var C = [1, 12, 4.3482, 7, 24, 60, 60], M = l, T = 1, b = l; b >= i; b--) e[b] && (c[M] >= T && (c[M] = 0, v = 1), v > 0 && (c[b]++, v = 0, M = b, T = 1)), T *= C[b];
      if (p)
        for (var b = i; l >= b; b++) p && c[b] ? p-- : p || (c[b] = 0);
      return c
    }
  })
}(jQuery);

/*!
 * @name        image-zoom
 * @author      Matt Hinchliffe <http://maketea.co.uk>
 * @modified    Monday, March 16th, 2015
 * @version     2.3.0
 */
! function(a) {
  "use strict";

  function b(b, c) {
    this.$target = a(b), this.opts = a.extend({}, i, c, this.$target.data()), void 0 === this.isOpen && this._init()
  }
  var c, d, e, f, g, h, i = {
    loadingNotice: "Loading image",
    errorNotice: "The image could not be loaded",
    errorDuration: 2500,
    preventClicks: !0,
    onShow: a.noop,
    onHide: a.noop,
    onMove: a.noop
  };
  b.prototype._init = function() {
    this.$link = this.$target.find("a"), this.$image = this.$target.find("img"), this.$flyout = a('<div class="easyzoom-flyout" />'), this.$notice = a('<div class="easyzoom-notice" />'), this.$target.on({
      "mousemove.easyzoom touchmove.easyzoom": a.proxy(this._onMove, this),
      "mouseleave.easyzoom touchend.easyzoom": a.proxy(this._onLeave, this),
      "mouseenter.easyzoom touchstart.easyzoom": a.proxy(this._onEnter, this)
    }), this.opts.preventClicks && this.$target.on("click.easyzoom", function(a) {
      a.preventDefault()
    })
  }, b.prototype.show = function(a, b) {
    var g, h, i, j, k = this;
    return this.isReady ? (this.$target.append(this.$flyout), g = this.$target.width(), h = this.$target.height(), i = this.$flyout.width(), j = this.$flyout.height(), c = this.$zoom.width() - i, d = this.$zoom.height() - j, e = c / g, f = d / h, this.isOpen = !0, this.opts.onShow.call(this), void(a && this._move(a))) : this._loadImage(this.$link.attr("href"), function() {
      (k.isMouseOver || !b) && k.show(a)
    })
  }, b.prototype._onEnter = function(a) {
    var b = a.originalEvent.touches;
    this.isMouseOver = !0, b && 1 != b.length || (a.preventDefault(), this.show(a, !0))
  }, b.prototype._onMove = function(a) {
    this.isOpen && (a.preventDefault(), this._move(a))
  }, b.prototype._onLeave = function() {
    this.isMouseOver = !1, this.isOpen && this.hide()
  }, b.prototype._onLoad = function(a) {
    a.target.width && (this.isReady = !0, this.$notice.detach(), this.$flyout.html(this.$zoom), this.$target.removeClass("is-loading").addClass("is-ready"), a.data.call && a.data())
  }, b.prototype._onError = function() {
    var a = this;
    this.$notice.text(this.opts.errorNotice), this.$target.removeClass("is-loading").addClass("is-error"), this.detachNotice = setTimeout(function() {
      a.$notice.detach(), a.detachNotice = null
    }, this.opts.errorDuration)
  }, b.prototype._loadImage = function(b, c) {
    var d = new Image;
    this.$target.addClass("is-loading").append(this.$notice.text(this.opts.loadingNotice)), this.$zoom = a(d).on("error", a.proxy(this._onError, this)).on("load", c, a.proxy(this._onLoad, this)), d.style.position = "absolute", d.src = b
  }, b.prototype._move = function(a) {
    if (0 === a.type.indexOf("touch")) {
      var b = a.touches || a.originalEvent.touches;
      g = b[0].pageX, h = b[0].pageY
    } else g = a.pageX || g, h = a.pageY || h;
    var i = this.$target.offset(),
      j = h - i.top,
      k = g - i.left,
      l = Math.ceil(j * f),
      m = Math.ceil(k * e);
    if (0 > m || 0 > l || m > c || l > d) this.hide();
    else {
      var n = -1 * l,
        o = -1 * m;
      this.$zoom.css({
        top: n,
        left: o
      }), this.opts.onMove.call(this, n, o)
    }
  }, b.prototype.hide = function() {
    this.isOpen && (this.$flyout.detach(), this.isOpen = !1, this.opts.onHide.call(this))
  }, b.prototype.swap = function(b, c, d) {
    this.hide(), this.isReady = !1, this.detachNotice && clearTimeout(this.detachNotice), this.$notice.parent().length && this.$notice.detach(), this.$target.removeClass("is-loading is-ready is-error"), this.$image.attr({
      src: b,
      srcset: a.isArray(d) ? d.join() : d
    }), this.$link.attr("href", c)
  }, b.prototype.teardown = function() {
    this.hide(), this.$target.off(".easyzoom").removeClass("is-loading is-ready is-error"), this.detachNotice && clearTimeout(this.detachNotice), delete this.$link, delete this.$zoom, delete this.$image, delete this.$notice, delete this.$flyout, delete this.isOpen, delete this.isReady
  }, a.fn.easyZoom = function(c) {
    return this.each(function() {
      var d = a.data(this, "easyZoom");
      d ? void 0 === d.isOpen && d._init() : a.data(this, "easyZoom", new b(this, c))
    })
  }, "function" == typeof define && define.amd ? define(function() {
    return b
  }) : "undefined" != typeof module && module.exports && (module.exports = b)
}(jQuery);

/*! WOW - v1.0.3 - 2015-01-14
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function() {
  var a, b, c, d, e, f = function(a, b) {
      return function() {
        return a.apply(b, arguments)
      }
    },
    g = [].indexOf || function(a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (b in this && this[b] === a) return b;
      return -1
    };
  b = function() {
    function a() {}
    return a.prototype.extend = function(a, b) {
      var c, d;
      for (c in b) d = b[c], null == a[c] && (a[c] = d);
      return a
    }, a.prototype.isMobile = function(a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }, a.prototype.addEvent = function(a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }, a.prototype.removeEvent = function(a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }, a.prototype.innerHeight = function() {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, a
  }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
    function a() {
      this.keys = [], this.values = []
    }
    return a.prototype.get = function(a) {
      var b, c, d, e, f;
      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
        if (c = f[b], c === a) return this.values[b]
    }, a.prototype.set = function(a, b) {
      var c, d, e, f, g;
      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
        if (d = g[c], d === a) return void(this.values[c] = b);
      return this.keys.push(a), this.values.push(b)
    }, a
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }
    return a.notSupported = !0, a.prototype.observe = function() {}, a
  }()), d = this.getComputedStyle || function(a) {
    return this.getPropertyValue = function(b) {
      var c;
      return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
        return b.toUpperCase()
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
    }, this
  }, e = /(\-([a-z]){1})/g, this.WOW = function() {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c
    }
    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null
    }, e.prototype.init = function() {
      var a;
      return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, e.prototype.start = function() {
      var b, c, d, e;
      if (this.stopped = !1, this.boxes = function() {
          var a, c, d, e;
          for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
          return e
        }.call(this), this.all = function() {
          var a, c, d, e;
          for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
          return e
        }.call(this), this.boxes.length)
        if (this.disabled()) this.resetStyle();
        else
          for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
      return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
        return function(b) {
          var c, d, e, f, g;
          for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function() {
            var a, b, e, f;
            for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c));
            return f
          }.call(a));
          return g
        }
      }(this)).observe(document.body, {
        childList: !0,
        subtree: !0
      }) : void 0
    }, e.prototype.stop = function() {
      return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
    }, e.prototype.sync = function() {
      return a.notSupported ? this.doSync(this.element) : void 0
    }, e.prototype.doSync = function(a) {
      var b, c, d, e, f;
      if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        return f
      }
    }, e.prototype.show = function(a) {
      return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(a) : void 0
    }, e.prototype.applyStyle = function(a, b) {
      var c, d, e;
      return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
        return function() {
          return f.customStyle(a, b, d, c, e)
        }
      }(this))
    }, e.prototype.animate = function() {
      return "requestAnimationFrame" in window ? function(a) {
        return window.requestAnimationFrame(a)
      } : function(a) {
        return a()
      }
    }(), e.prototype.resetStyle = function() {
      var a, b, c, d, e;
      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
      return e
    }, e.prototype.customStyle = function(a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
        animationDuration: c
      }), d && this.vendorSet(a.style, {
        animationDelay: d
      }), e && this.vendorSet(a.style, {
        animationIterationCount: e
      }), this.vendorSet(a.style, {
        animationName: b ? "none" : this.cachedAnimationName(a)
      }), a
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
      var c, d, e, f;
      f = [];
      for (c in b) d = b[c], a["" + c] = d, f.push(function() {
        var b, f, g, h;
        for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
        return h
      }.call(this));
      return f
    }, e.prototype.vendorCSS = function(a, b) {
      var c, e, f, g, h, i;
      for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++) f = i[g], c = c || e.getPropertyCSSValue("-" + f + "-" + b);
      return c
    }, e.prototype.animationName = function(a) {
      var b;
      try {
        b = this.vendorCSS(a, "animation-name").cssText
      } catch (c) {
        b = d(a).getPropertyValue("animation-name")
      }
      return "none" === b ? "" : b
    }, e.prototype.cacheAnimationName = function(a) {
      return this.animationNameCache.set(a, this.animationName(a))
    }, e.prototype.cachedAnimationName = function(a) {
      return this.animationNameCache.get(a)
    }, e.prototype.scrollHandler = function() {
      return this.scrolled = !0
    }, e.prototype.scrollCallback = function() {
      var a;
      return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
        var b, c, d, e;
        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        return e
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
    }, e.prototype.offsetTop = function(a) {
      for (var b; void 0 === a.offsetTop;) a = a.parentNode;
      for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
      return b
    }, e.prototype.isVisible = function(a) {
      var b, c, d, e, f;
      return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
    }, e.prototype.util = function() {
      return null != this._util ? this._util : this._util = new b
    }, e.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, e
  }()
}).call(this);

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.6
 *
 */
(function(e) {
  e.fn.extend({
    slimScroll: function(g) {
      var a = e.extend({
        width: "auto",
        height: "250px",
        size: "7px",
        color: "#000",
        position: "right",
        distance: "1px",
        start: "top",
        opacity: .4,
        alwaysVisible: !1,
        disableFadeOut: !1,
        railVisible: !1,
        railColor: "#333",
        railOpacity: .2,
        railDraggable: !0,
        railClass: "slimScrollRail",
        barClass: "slimScrollBar",
        wrapperClass: "slimScrollDiv",
        allowPageScroll: !1,
        wheelStep: 20,
        touchScrollStep: 200,
        borderRadius: "7px",
        railBorderRadius: "7px"
      }, g);
      this.each(function() {
        function v(d) {
          if (r) {
            d = d || window.event;
            var c = 0;
            d.wheelDelta && (c = -d.wheelDelta / 120);
            d.detail && (c = d.detail / 3);
            e(d.target || d.srcTarget || d.srcElement).closest("." + a.wrapperClass).is(b.parent()) && m(c, !0);
            d.preventDefault && !k && d.preventDefault();
            k || (d.returnValue = !1)
          }
        }

        function m(d, e, g) {
          k = !1;
          var f = d,
            h = b.outerHeight() - c.outerHeight();
          e && (f = parseInt(c.css("top")) + d * parseInt(a.wheelStep) / 100 * c.outerHeight(), f = Math.min(Math.max(f, 0), h), f = 0 < d ? Math.ceil(f) : Math.floor(f), c.css({
            top: f + "px"
          }));
          l = parseInt(c.css("top")) / (b.outerHeight() - c.outerHeight());
          f = l * (b[0].scrollHeight - b.outerHeight());
          g && (f = d, d = f / b[0].scrollHeight * b.outerHeight(), d = Math.min(Math.max(d, 0), h), c.css({
            top: d + "px"
          }));
          b.scrollTop(f);
          b.trigger("slimscrolling", ~~f);
          w();
          p()
        }

        function x() {
          u = Math.max(b.outerHeight() / b[0].scrollHeight * b.outerHeight(), 30);
          c.css({
            height: u + "px"
          });
          var a = u == b.outerHeight() ? "none" : "block";
          c.css({
            display: a
          })
        }

        function w() {
          x();
          clearTimeout(B);
          l == ~~l ? (k = a.allowPageScroll, C != l && b.trigger("slimscroll", 0 == ~~l ? "top" : "bottom")) : k = !1;
          C = l;
          u >= b.outerHeight() ? k = !0 : (c.stop(!0,
            !0).fadeIn("fast"), a.railVisible && h.stop(!0, !0).fadeIn("fast"))
        }

        function p() {
          a.alwaysVisible || (B = setTimeout(function() {
            a.disableFadeOut && r || y || z || (c.fadeOut("slow"), h.fadeOut("slow"))
          }, 1E3))
        }
        var r, y, z, B, A, u, l, C, k = !1,
          b = e(this);
        if (b.parent().hasClass(a.wrapperClass)) {
          var n = b.scrollTop(),
            c = b.closest("." + a.barClass),
            h = b.closest("." + a.railClass);
          x();
          if (e.isPlainObject(g)) {
            if ("height" in g && "auto" == g.height) {
              b.parent().css("height", "auto");
              b.css("height", "auto");
              var q = b.parent().parent().height();
              b.parent().css("height",
                q);
              b.css("height", q)
            }
            if ("scrollTo" in g) n = parseInt(a.scrollTo);
            else if ("scrollBy" in g) n += parseInt(a.scrollBy);
            else if ("destroy" in g) {
              c.remove();
              h.remove();
              b.unwrap();
              return
            }
            m(n, !1, !0)
          }
        } else if (!(e.isPlainObject(g) && "destroy" in g)) {
          a.height = "auto" == a.height ? b.parent().height() : a.height;
          n = e("<div></div>").addClass(a.wrapperClass).css({
            position: "relative",
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          b.css({
            overflow: "hidden",
            width: a.width,
            height: a.height
          });
          var h = e("<div></div>").addClass(a.railClass).css({
              width: a.size,
              height: "100%",
              position: "absolute",
              top: 0,
              display: a.alwaysVisible && a.railVisible ? "block" : "none",
              "border-radius": a.railBorderRadius,
              background: a.railColor,
              opacity: a.railOpacity,
              zIndex: 90
            }),
            c = e("<div></div>").addClass(a.barClass).css({
              background: a.color,
              width: a.size,
              position: "absolute",
              top: 0,
              opacity: a.opacity,
              display: a.alwaysVisible ? "block" : "none",
              "border-radius": a.borderRadius,
              BorderRadius: a.borderRadius,
              MozBorderRadius: a.borderRadius,
              WebkitBorderRadius: a.borderRadius,
              zIndex: 99
            }),
            q = "right" == a.position ? {
              right: a.distance
            } : {
              left: a.distance
            };
          h.css(q);
          c.css(q);
          b.wrap(n);
          b.parent().append(c);
          b.parent().append(h);
          a.railDraggable && c.bind("mousedown", function(a) {
            var b = e(document);
            z = !0;
            t = parseFloat(c.css("top"));
            pageY = a.pageY;
            b.bind("mousemove.slimscroll", function(a) {
              currTop = t + a.pageY - pageY;
              c.css("top", currTop);
              m(0, c.position().top, !1)
            });
            b.bind("mouseup.slimscroll", function(a) {
              z = !1;
              p();
              b.unbind(".slimscroll")
            });
            return !1
          }).bind("selectstart.slimscroll", function(a) {
            a.stopPropagation();
            a.preventDefault();
            return !1
          });
          h.hover(function() {
            w()
          }, function() {
            p()
          });
          c.hover(function() {
            y = !0
          }, function() {
            y = !1
          });
          b.hover(function() {
            r = !0;
            w();
            p()
          }, function() {
            r = !1;
            p()
          });
          b.bind("touchstart", function(a, b) {
            a.originalEvent.touches.length && (A = a.originalEvent.touches[0].pageY)
          });
          b.bind("touchmove", function(b) {
            k || b.originalEvent.preventDefault();
            b.originalEvent.touches.length && (m((A - b.originalEvent.touches[0].pageY) / a.touchScrollStep, !0), A = b.originalEvent.touches[0].pageY)
          });
          x();
          "bottom" === a.start ? (c.css({
              top: b.outerHeight() - c.outerHeight()
            }),
            m(0, !0)) : "top" !== a.start && (m(e(a.start).position().top, null, !0), a.alwaysVisible || c.hide());
          window.addEventListener ? (this.addEventListener("DOMMouseScroll", v, !1), this.addEventListener("mousewheel", v, !1)) : document.attachEvent("onmousewheel", v)
        }
      });
      return this
    }
  });
  e.fn.extend({
    slimscroll: e.fn.slimScroll
  })
})(jQuery);

var enable_live_search = null;
function check_iOS() {
  for (var a = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]; a.length;)
    if (navigator.platform === a.pop()) return !0;
  return !1
}

function loadMorePortfolio(a, b, c, d, e) {
  return a.ajax({
    url: e,
    type: "post",
    dataType: "json",
    data: {
      action: "get_more_portfolio",
      page: d,
      category: b,
      col: c
    },
    beforeSend: function() {
      a(".loadmore-portfolio").before('<div id="ajax-loading"></div>'), a(".loadmore-portfolio").hide(), a(".portfolio-list").css({
        overflow: "hidden"
      })
    },
    success: function(b) {
      a("#ajax-loading").remove(), a(".loadmore-portfolio").show(), b.success ? (a(".portfolio-list").isotope("insert", a(b.result)).isotope({
        itemSelector: ".portfolio-item"
      }), setTimeout(function() {
        a(".portfolio-list").isotope({
          itemSelector: ".portfolio-item"
        })
      }, 800), d >= b.max && a(".loadmore-portfolio").addClass("end-portfolio").html(b.alert).removeClass("loadmore-portfolio")) : a(".loadmore-portfolio").addClass("end-portfolio").html(b.alert).removeClass("loadmore-portfolio"), load_flag = !1
    }
  }), !1
}

function lt_corousel_deal(a, b) {
  b(".main-images-" + a).owlCarousel({
    items: 1,
    nav: !1,
    lazyLoad: !0,
    autoplaySpeed: 600,
    dots: !1,
    autoHeight: !0,
    autoplay: !0,
    loop: !0,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !0,
    responsiveClass: !0,
    navText: ["", ""],
    navSpeed: 600
  }), b(".main-images-" + a).on("change.owl.carousel", function(c) {
    var d = c.relatedTarget.relative(c.property.value),
      e = b(".product-thumbnails-" + a + " .owl-item");
    b(".product-thumbnails-" + a + " .active-thumbnail").removeClass("active-thumbnail"), b(".product-thumbnails-" + a).find(".owl-item").eq(d).addClass("active-thumbnail"), e.trigger("to.owl.carousel", [d, 300, !0])
  }).data("owl.carousel"), b(".product-thumbnails-" + a + " .owl-item").owlCarousel(), b(".product-thumbnails-" + a).owlCarousel({
    items: 4,
    loop: !1,
    nav: !1,
    autoplay: !1,
    dots: !1,
    autoHeight: !0,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    responsiveClass: !0,
    navText: ["", ""],
    navSpeed: 600,
    responsive: {
      0: {
        items: 3,
        nav: !1
      },
      600: {
        items: 4,
        nav: !1
      },
      1000: {
        items: 4,
        nav: !1
      }
    }
  }).on("click", ".owl-item", function() {
    var c = b(this).index();
    b(".main-images-" + a).trigger("to.owl.carousel", [c, 300, !0])
  }), b("body").on("click", ".product-thumbnails-" + a + " .owl-item a", function(a) {
    a.preventDefault()
  })
}

function lt_corousel_deal_thumbVertical(a, b) {
  var c = parseInt(b(".y-thumb-images-" + a).attr("data-change")),
    d = parseInt(b(".y-thumb-images-" + a).attr("data-speed")),
    e = parseInt(b(".y-thumb-images-" + a).attr("data-delay")),
    f = b(".y-thumb-images-" + a).attr("data-top"),
    g = b(".y-thumb-images-" + a).attr("data-show") ? b(".y-thumb-images-" + a).attr("data-show") : "1",
    h = "0" === b(".y-thumb-images-" + a).attr("data-autoplay") ? !1 : !0,
    e = e ? e : 3e3,
    d = d ? d : 1e3,
    c = c ? c : !1,
    i = "1" === b(".y-thumb-images-" + a).attr("data-dot") ? !0 : !1,
    j = "1" === b(".y-thumb-images-" + a).attr("data-arrows") ? !0 : !1,
    f = "1" === f ? !0 : !1,
    k = {
      vertical: !0,
      verticalSwiping: !0,
      slidesToShow: g,
      dots: i,
      arrows: j
    };
  c && (k.slidesToScroll = c), k.asNavFor = ".y-main-images-" + a, k.slidesToScroll = 1, k.centerMode = !0, f && (k.centerPadding = "0px"), k.focusOnSelect = !0, k.responsive = [{
    breakpoint: 500,
    settings: {
      slidesToShow: 2
    }
  }], b(".y-main-images-" + a).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: h,
    autoplaySpeed: e,
    speed: d,
    arrows: j,
    asNavFor: ".y-thumb-images-" + a
  }), b(".y-thumb-images-" + a).slick(k)
}

function lt_Ajax_filter(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  a.ajax({
    url: b,
    type: "get",
    dataType: "json",
    data: {
      action: "lt_products_page",
      catId: e,
      taxonomy: o,
      orderby: f,
      baseUrl: c,
      variations: g,
      hasPrice: h,
      min_price: i,
      max_price: j,
      hasSearch: k,
      s: l,
      paged: d,
      top: n,
      lt_load_ajax: "1"
    },
    beforeSend: function() {
      a(".lt-content-page-products").append('<div class="opacity-3"><div class="please-wait type2"></div></div>'), a(".col-sidebar").append('<div class="opacity-2"></div>'), a(".lt-filter-by-cat").addClass("lt-disable").removeClass("lt-active"), a(m).parents("ul.children").length && a(m).parents("ul.children").show(), a(".lt-tranparent").click(), a(".black-window, .white-window, .cart-close a").click(), a.magnificPopup.close()
    },
    success: function(b) {
      a(".lt-filter-by-cat").removeClass("lt-disable"), a("#lt-hidden-current-cat").attr({
        href: c,
        "data-id": e,
        "data-taxonomy": o
      }), "" === c && (0 === k ? c = b.shop_url : 1 === k && (c = b.base_url));
      var m = !1;
      if (1 != k) {
        var q = /\?/g;
        m = q.test(c)
      }
      var r = "";
      if (d)
        if (m || 1 == k || 0 == b.friendly) r = "&paged=" + d;
        else {
          var s = c.length;
          c += c.length && "/" !== c.substring(s - 1, s) ? "/" : "", c += "page/" + d + "/"
        } if (1 == k ? (c += m ? "&" : "?", c += "s=" + encodeURI(l) + "&page=search&post_type=product", m = !0) : (a(".lt-results-blog-search").length > 0 && a(".lt-results-blog-search").remove(), a('input[name="hasSearch"]').length > 0 && a('input[name="hasSearch"]').remove()), c += r, g.length > 0)
        for (var t = g.length, u = 0; t > u; u++) {
          var v = "or" === g[u].type ? "&query_type_" + g[u].taxonomy + "=" + g[u].type : "";
          c += m ? "&" : "?", c += "filter_" + g[u].taxonomy + "=" + g[u].slug.toString() + v, m = !0
        }
      1 == h && i && j && (c += m ? "&" : "?", c += "min_price=" + i + "&max_price=" + j, m = !0), f && "menu_order" !== f && (c += m ? "&" : "?", c += "orderby=" + f, m = !0), a("li.cat-item-" + e + " > .lt-filter-by-cat").addClass("lt-active"), a(".tag-link-" + e).addClass("lt-active"), e && (a('select[name="product_cat"] option').removeAttr("selected"), a('select[name="product_cat"] option[data-term_id="' + e + '"]').attr("selected", !0)), a('input[name="s"]').val(l), a(".opacity-2").remove(), a(".opacity-3").remove(), a(".lt_shop_description").length > 0 && (a(".lt_shop_description").html(b.description), "" !== b.description ? a(".lt_shop_description").hasClass("margin-bottom-20") || a(".lt_shop_description").addClass("margin-bottom-20") : a(".lt_shop_description").removeClass("margin-bottom-20")), wow_enable ? a(".lt-content-page-products .products").hide().html(b.content).fadeIn(1e3) : a(".lt-content-page-products .products").html(b.content), a(".lt-content-page-products .products .tip-top").tipr({
        mode: "top"
      });
      var w = b.select_order;
      if (w && (w = a(w).html()), a(".lt-filter-order").html(w), "" === w ? a(".lt-order-label").hide() : a(".lt-order-label").show(), a(".filters-container-down").html(b.pagination), a(".lt-breadcrumb").replaceWith(b.breadcrumb), "1" == n && (a(".lt-cat-header").remove(), a("#position-lt-cat-header").after(b.cat_header), a(".lt-recommend-product").remove(), a("#position-lt-recommend-product").after(b.recommend_products)), loadingCarousel(a), loadingSCCarosel(a), subStringName(a), a.isEmptyObject(b.variations) || a.each(b.variations, function(b, c) {
          a.isEmptyObject(c) || a.each(c, function(b, c) {
            a("." + b).length && a("." + b + " span.count").html("(" + c + ")")
          })
        }), p) {
        var x = a(".category-page").offset().top;
        a("html, body").animate({
          scrollTop: x - 95
        }, 700)
      }
      window.history.pushState(null, "", c)
    },
    error: function() {
      a(".opacity-2").remove(), a(".opacity-3").remove(), a(".lt-filter-by-cat").removeClass("lt-disable")
    }
  })
}

function lt_setVariations(a, b, c) {
  return a(".lt-filter-var-chosen").each(function() {
    var d = a(this).attr("data-attr"),
      e = a(this).attr("data-term_id"),
      f = a(this).attr("data-term_slug"),
      g = a(this).attr("data-type"),
      h = b.length;
    if (-1 === c.indexOf(d)) b.push({
      taxonomy: d,
      values: [e],
      slug: [f],
      type: g
    }), c.push(d);
    else
      for (var i = 0; h > i; i++)
        if (b[i].taxonomy.length && b[i].taxonomy === d) {
          b[i].values.push(e), b[i].slug.push(f);
          break
        }
  }), b
}

function loadingCarousel(a) {
  a(".lt-slider").each(function() {
    if (!a(this).hasClass("owl-loaded")) {
      var b = a(this).attr("data-columns"),
        c = a(this).attr("data-columns-small"),
        d = a(this).attr("data-columns-tablet"),
        e = "true" === a(this).attr("data-autoplay") ? !0 : !1,
        f = "false" === a(this).attr("data-hover_pause") ? !1 : !0,
        g = "true" === a(this).attr("data-loop") ? !0 : !1,
        h = "true" === a(this).attr("data-disable-nav") ? !1 : !0,
        i = "true" === a(this).attr("data-dot") ? !0 : !1,
        j = parseInt(a(this).attr("data-margin")),
        k = parseInt(a(this).attr("data-speed")),
        l = parseInt(a(this).attr("data-delay")),
        m = "true" === a(this).attr("data-disable-drag") ? !1 : !0,
        n = a(this).attr("data-padding") ? a(this).attr("data-padding") : !1;
      k || (k = 600), l || (l = 3e3);
      var o = {
        nav: h,
        autoplay: e,
        autoplaySpeed: k,
        loop: g,
        dots: i,
        autoplayTimeout: l,
        autoplayHoverPause: f,
        responsiveClass: !0,
        navText: ["", ""],
        navSpeed: 600,
        lazyLoad: !0,
        touchDrag: m,
        mouseDrag: m,
        responsive: {
          0: {
            items: c,
            nav: !1
          },
          600: {
            items: d
          },
          1e3: {
            items: b
          }
        }
      };
      j && (o.margin = j), a(this).owlCarousel(o), n && a(this).find("> .owl-stage-outer").css({
        "padding-bottom": n,
        "margin-bottom": "-" + n
      })
    }
  })
}

function loadingSCCarosel(a) {
  a(".lt-sc-carousel").length && a(".lt-sc-carousel").each(function() {
    var b = a(this);
    if (!a(b).hasClass("owl-loaded")) {
      var c = a(b).attr("data-contruct"),
        d = a("#item-slider-" + c),
        e = a(d).find(".banner").length ? a(d).find(".banner").height() : 0;
      if (e) {
        var f = '<div class="lt-carousel-loadding" style="height: ' + e + 'px"><div class="please-wait type2"></div></div>';
        a(d).parent().append(f)
      }
      var g = "true" === a(b).attr("data-nav") ? !0 : !1,
        h = "true" === a(b).attr("data-dots") ? !0 : !1,
        i = "false" === a(b).attr("data-autoplay") ? !1 : !0,
        j = parseInt(a(b).attr("data-speed")),
        k = parseInt(a(b).attr("data-itemSmall")),
        l = parseInt(a(b).attr("data-itemTablet")),
        m = parseInt(a(b).attr("data-items")),
        j = j ? j : 3e3;
      k = k ? k : 1, l = l ? l : 1, m = m ? m : 1, d.owlCarousel({
        loop: !0,
        nav: g,
        dots: h,
        autoplay: i,
        autoplaySpeed: j,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        navText: ["", ""],
        navSpeed: j,
        dotsSpeed: j,
        responsiveClass: !0,
        callbacks: !0,
        responsive: {
          0: {
            items: k,
            nav: !1
          },
          600: {
            items: l,
            nav: !1
          },
          1e3: {
            items: m
          }
        }
      }), d.find(".owl-item").each(function() {
        var b = a(this);
        if (a(b).find(".banner .banner-inner").length) {
          var c = a(b).find(".banner .banner-inner");
          if (a(c).removeAttr("class").removeAttr("style").addClass("banner-inner"), a(b).hasClass("active")) {
            var d = a(c).attr("data-animation");
            setTimeout(function() {
              a(c).show(), a(c).addClass("animated").addClass(d).css({
                visibility: "visible",
                "animation-duration": "1s",
                "animation-delay": "0ms",
                "animation-name": d
              })
            }, 200)
          }
        }
      }), d.on("translated.owl.carousel", function(b) {
        var c = b.target;
        a(c).find(".owl-item").length && a(c).find(".owl-item").each(function() {
          var b = a(this);
          if (a(b).find(".banner .banner-inner").length) {
            var c = a(b).find(".banner .banner-inner"),
              d = a(c).attr("data-animation");
            a(c).removeClass("animated").removeClass(d).removeAttr("style"), a(b).hasClass("active") && setTimeout(function() {
              a(c).show(), a(c).addClass("animated").addClass(d).css({
                visibility: "visible",
                "animation-duration": "1s",
                "animation-delay": "0ms",
                "animation-name": d
              })
            }, 200)
          }
        })
      }), a(d).parent().find(".lt-carousel-loadding").remove()
    }
  })
}

function subStringName(a) {
  if (a('input[name="lt_cutting_product_name"]').length) {
    var b = parseInt(a('input[name="lt_cutting_product_name"]').val());
    b = b ? b : 15, a(".product-item p.name a").each(function() {
      if (!a(this).hasClass("lt-subed")) {
        var c = a(this).parents(".name");
        a(c).addClass("lt-subed");
        var d = a(c).width(),
          e = a(this).text();
        150 >= d && e.length > b ? a(this).text(e.substring(0, b) + " ...") : 150 >= d - 50 && e.length > b + 8 && a(this).text(e.substring(0, b + 8) + " ...")
      }
    })
  }
}

function loadCountDown(a) {
  a(".countdown").length > 0 && a(".countdown").each(function() {
    var b = a(this);
    if (!a(b).hasClass("countdown-loaded")) {
      var c = new Date(b.data("countdown"));
      a(b).countdown({
        until: c,
        format: "dHMS"
      }), a(b).hasClass("pause") && a(b).countdown("pause"), a(b).addClass("countdown-loaded")
    }
  })
}

function loadToltip(a) {
  /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || (a(".yith-wcwl-wishlistexistsbrowse.show").each(function() {
    var b = a(this).find("a").text();
    a(this).find("a").attr("data-tip", b).addClass("tip-top")
  }), a(".tip,.tip-bottom").tipr(), a("#main-content .tip-top, .footer .tip-top, .absolute-footer .tip-top, .tip-top, .quick-view .tip-top").tipr({
    mode: "top"
  }), a("#top-bar .tip-top, #header-outer-wrap .tip-top").tipr({
    mode: "bottom"
  }))
}

function loadHeightDeal(a, b) {
  b = void 0 == b ? !1 : b, b ? a(".lt-products-deal").each(function() {
    var b = a(this),
      c = a(b).find(".lt-deal-left"),
      d = a(b).find(".lt-deal-right"),
      e = a(d).find(".product-item").length,
      f = a(d).hasClass("large-9") ? 4 : 3;
    e >= f && a(d).length > 0 && a(c).length > 0 && a(c).height() !== a(d).height() && a(c).find(".lt-sc-pdeal").css("height", a(d).height() - 6)
  }) : a(".lt-products-deal").each(function() {
    var b = a(this),
      c = a(b).find(".lt-deal-left"),
      d = a(b).find(".lt-deal-right");
    if (1 === a(c).length && 1 === a(d).length) {
      var e = a(d).find(".product-item").length,
        f = a(d).hasClass("large-9") ? 4 : 3;
      e >= f ? a(d).length > 0 && a(c).length > 0 && a(c).height() !== a(d).height() && (a(c).find(".lt-sc-pdeal").css("height", a(d).height() - 6), a(c).find(".lt-sc-p-info").css("position", "absolute")) : a(c).find(".lt-sc-p-info").css("position", "relative")
    }
  })
}

function reLoadingWindow() {
  window.location.reload()
}

function rendUrlThumb(a, b) {
  if (b('input[name="lt-product-thumb-size"]').length > 0) {
    if (void 0 !== a) {
      var c = b('input[name="lt-product-thumb-size"]').val(),
        d = a.split("."),
        d = "." + d[d.length - 1],
        e = a.replace(d, "-" + c + d);
      return e
    }
    return ""
  }
}

function reponseCarousel(a) {
  var b = a(window).width();
  if (a(".banner-image").length > 0) {
    var c, d, e = /(large-\d+)/g;
    a(".banner-image").each(function() {
      var f = a(this),
        g = a(f).parent();
      c = 12;
      var h = a(f).parents(".columns");
      if (a(h).length > 0) {
        var i = a(h).attr("class").match(e);
        c = null !== i ? parseInt(i[0].replace("large-", "")) : c
      }
      var j = parseInt(a(f).attr("data-height"));
      if (d = 12 / c, 946 > b) {
        var k = b / 1200;
        a(g).height(j * k * d), a(g).find(".banner-content").css({
          "font-size": (100 * d * k).toString() + "%"
        })
      } else a(g).height(j), a(g).find(".banner-content").css({
        "font-size": "100%"
      })
    })
  }
}
jQuery(window).trigger("resize").trigger("scroll");
var doc = document.documentElement;
doc.setAttribute("data-useragent", navigator.userAgent);
var fullwidth = 1200,
  iOS = check_iOS(),
  _event = iOS ? "click, mousemove" : "click",
  globalTimeout = null,
  load_flag = !1,
  page_load = 1;
jQuery(document).ready(function(a) {
  "use strict";
  if (a(window).stellar(), a("body #lt-before-load").length > 0 && a("body #lt-before-load").fadeOut(300), a("#lt-menu-vertical-header .vertical-menu-wrapper").length) {
    a("#lt-menu-vertical-header .vertical-menu-wrapper").attr("data-over", "0");
    var b = 200,
      c = 1 + a("#lt-menu-vertical-header .vertical-menu-wrapper").height();
    a("#lt-menu-vertical-header .vertical-menu-wrapper .lt-megamenu").find(">.nav-dropdown").each(function() {
      a(this).css({
        width: 0
      }), a(this).find(">.div-sub").css({
        "min-height": c
      })
    }), a("body").on("mousemove", "#lt-menu-vertical-header .vertical-menu-wrapper .lt-megamenu", function() {
      var b = a(this);
      a("#lt-menu-vertical-header .vertical-menu-wrapper .lt-megamenu").removeClass("lt-curent-hover"), a(b).addClass("lt-curent-hover");
      var c;
      a("#lt-menu-vertical-header .vertical-menu-wrapper .lt-megamenu").each(function() {
        if (a(this).hasClass("cols-5") || a(this).hasClass("fullwidth") ? c = 940 : a(this).hasClass("cols-2") ? c = 620 : a(this).hasClass("cols-3") ? c = 720 : a(this).hasClass("cols-4") && (c = 820), a(this).hasClass("lt-curent-hover")) {
          var b = a("#lt-menu-vertical-header .vertical-menu-wrapper").attr("data-over");
          "0" === b ? (a("#lt-menu-vertical-header .vertical-menu-wrapper").attr("data-over", "1"), a(this).find(">.nav-dropdown").css({
            width: 0
          }).animate({
            width: c
          }, 50)) : a(this).find(">.nav-dropdown").css({
            width: c
          })
        } else a(this).find(">.nav-dropdown").css({
          width: c
        })
      })
    }), a("body").on("mouseover", "#lt-menu-vertical-header .vertical-menu-wrapper .menu-item-has-children.default-menu", function() {
      var c = a("#lt-menu-vertical-header .vertical-menu-wrapper").attr("data-over");
      "0" === c ? (a("#lt-menu-vertical-header .vertical-menu-wrapper").attr("data-over", "1"), a(this).find("> .nav-dropdown > .div-sub > .sub-menu").css({
        width: 0
      }).animate({
        width: b
      }, 150)) : a(this).find("> .nav-dropdown > .div-sub > .sub-menu").css({
        width: b
      });
      var d;
      a("#lt-menu-vertical-header .vertical-menu-wrapper .lt-megamenu").each(function() {
        a(this).hasClass("cols-5") || a(this).hasClass("fullwidth") ? d = 940 : a(this).hasClass("cols-2") ? d = 620 : a(this).hasClass("cols-3") ? d = 720 : a(this).hasClass("cols-4") && (d = 820), a(this).find(">.nav-dropdown").css({
          width: d
        })
      })
    }), a("body").on("mouseleave", "#lt-menu-vertical-header .vertical-menu-wrapper", function() {
      a("#lt-menu-vertical-header .vertical-menu-wrapper").attr("data-over", "0"), a("#lt-menu-vertical-header .vertical-menu-wrapper .lt-megamenu > .nav-dropdown").css({
        width: 0
      }), a("#lt-menu-vertical-header .vertical-menu-wrapper .menu-item-has-children.default-menu > .nav-dropdown > .div-sub > .sub-menu").css({
        width: 0
      })
    })
  }
  if (a("#wpadminbar").length > 0) {
    a("head").append('<style type="text/css" media="screen">#wpadminbar {position: fixed !important;}</style>');
    var d = a("#wpadminbar").height();
    a(".fixed-header-area").css({
      "margin-top": d
    }), a(window).resize(function() {
      d = a("#wpadminbar").height(), a(".fixed-header-area").css({
        "margin-top": d
      })
    })
  }
  var e = a.jPanelMenu({
      menu: "#site-navigation",
      trigger: ".mobile-menu a.mobile_toggle",
      duration: 300,
      afterClose: function() {
        a(".jPanelMenu-panel").css({
          transform: "none"
        })
      }
    }),
    f = jRespond([{
      label: "small",
      enter: 0,
      exit: 768
    }, {
      label: "medium",
      enter: 768,
      exit: 980
    }, {
      label: "large",
      enter: 980,
      exit: 1e4
    }]);
  if (f.addFunc({
      breakpoint: ["small", "medium"],
      enter: function() {
        if (e.on(), a("#lt-menu-vertical-header .vertical-menu-wrapper").length) {
          var b = a("#lt-menu-vertical-header .vertical-menu-wrapper").html(),
            c = a("#lt-menu-vertical-header .lt-title-vertical-menu").html(),
            d = '<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-parent-item default-menu root-item li_accordion"><a href="javascript:void(0);">' + c + '</a><div class="nav-dropdown-mobile"><div class="div-sub"><ul class="sub-menu">' + b + "</ul></div></div></li>";
          a("#jPanelMenu-menu").append(d)
        }
        a("#jPanelMenu-menu").addClass("lt-menu-accordion"), a("#jPanelMenu-menu .nav-dropdown").attr("class", "nav-dropdown-mobile").removeAttr("style").find(">.div-sub").removeAttr("style"), a("#jPanelMenu-menu .nav-dropdown-mobile").find(".sub-menu").removeAttr("style"), a("#jPanelMenu-menu .nav-column-links").addClass("nav-dropdown-mobile"), a("#jPanelMenu-menu").find("hr.hr-lt-megamenu").remove(), a("#jPanelMenu-menu.lt-menu-accordion li").each(function() {
          a(this).hasClass("menu-item-has-children") && (a(this).addClass("li_accordion"), a(this).hasClass("current-menu-ancestor") || a(this).hasClass("current-menu-parent") ? (a(this).addClass("active"), a(this).prepend('<a href="javascript:void(0);" class="accordion"><span class="icon fa fa-minus-square-o"></span></a>')) : a(this).prepend('<a href="javascript:void(0);" class="accordion"><span class="icon fa fa-plus-square-o"></span></a>').find(">.nav-dropdown-mobile").hide())
        });
        var f = a("#heading-menu-mobile").html(),
          g = a("#mobile-account").html();
        if (a("#jPanelMenu-menu").prepend('<li class="menu-item root-item menu-item-heading">' + f + "</li>"), a("#jPanelMenu-menu").append('<li class="menu-item root-item menu-item-account">' + g + "</li>"), a("#wpadminbar").length > 0) {
          var h = a("#wpadminbar").height();
          a("#jPanelMenu-menu").css({
            top: h
          });
          var i = a("#wpadminbar").html();
          a("#wpadminbar").remove(), a("body").prepend('<div id="wpadminbar">' + i + "</div>")
        }
      },
      exit: function() {
        e.off()
      }
    }), a("body").on("click", ".lt-menu-accordion .li_accordion > a.accordion", function(b) {
      b.preventDefault();
      var c = a(this).parent(),
        d = a(c).parent();
      if (a(c).hasClass("active")) a(c).find(">.nav-dropdown-mobile").slideUp(300).parent().removeClass("active"), a(this).find("span").removeClass("fa-minus-square-o").addClass("fa-plus-square-o");
      else {
        var e = a(d).children("li.active");
        a(e).removeClass("active").children(".nav-dropdown-mobile").css({
          height: "auto"
        }).slideUp(300), a(c).children(".nav-dropdown-mobile").slideDown(300).parent().addClass("active"), a(e).find("> a.accordion > span").removeClass("fa-minus-square-o").addClass("fa-plus-square-o"), a(this).find("span").removeClass("fa-plus-square-o").addClass("fa-minus-square-o")
      }
      return !1
    }), a(".lt-accordion .li_accordion > a.accordion").length > 0 && a("body").on("click", ".lt-accordion .li_accordion > a.accordion", function() {
      var b = a(this).parent(),
        c = a(b).parent();
      if (a(b).hasClass("active")) a(b).removeClass("active").children(".children").slideUp(300), a(this).find("span").removeClass("pe-7s-less").addClass("pe-7s-plus");
      else {
        a(c).removeClass("current-cat-parent").removeClass("current-cat");
        var d = a(c).children("li.active");
        a(d).removeClass("active").children(".children").slideUp(300), a(b).addClass("active").children(".children").slideDown(300), a(d).find(">a.accordion>span").removeClass("pe-7s-less").addClass("pe-7s-plus"), a(this).find("span").removeClass("pe-7s-plus").addClass("pe-7s-less")
      }
      return !1
    }), a("body").on("click", ".product-summary .quick-view", function() {
      var b = a(this).parents(".product-item").find(".inner-wrap");
      a(b).css({
        opacity: .3
      }), a(b).after('<div class="please-wait type2" style="top:40%"></div>')
    }), a("body").on("click", ".product_list_widget .quick-view", function() {
      a(this).parents(".item-product-widget").find(".images").append('<div class="please-wait type2"><span></span><span></span><span></span></div>')
    }), a("body").on("click", ".quick-view", function(b) {
      var c = a(this),
        d = a(c).parents(".product-item").find(".inner-wrap"),
        e = a(d).find(".product-img"),
        f = a(c).attr("data-prod"),
        g = a(c).attr("data-head_type"),
        h = "1" === a(c).attr("data-from_wishlist") ? "1" : "0",
        i = {
          action: "jck_quickview",
          product: f,
          head_type: g,
          wishlist: h
        };
      a.post(ajaxurl, i, function(b) {
        a.magnificPopup.open({
          mainClass: "my-mfp-zoom-in",
          items: {
            src: '<div class="product-lightbox">' + b + "</div>",
            type: "inline"
          },
          callbacks: {
            afterClose: function() {
              var b = a(c).parents(".product-summary");
              a(b).addClass("hidden-tag"), setTimeout(function() {
                a(b).removeClass("hidden-tag")
              }, 100)
            }
          }
        }), a(c).hasClass("lt-view-from-wishlist") && (a(".wishlist-item").animate({
          opacity: 1
        }, 500), a(".wishlist-close a").click()), a(".please-wait,.color-overlay").remove(), a(e).removeAttr("style"), a(d).animate({
          opacity: 1
        }, 500), setTimeout(function() {
          a(".main-image-slider").owlCarousel({
            items: 1,
            loop: !0,
            nav: !0,
            autoplay: !0,
            autoplaySpeed: 500,
            dots: !1,
            autoplayTimeout: 3e3,
            autoplayHoverPause: !0,
            responsiveClass: !0,
            navText: ["", ""],
            navSpeed: 500
          }), a(".product-lightbox form").wc_variation_form_lightbox(), a(".product-lightbox form select").change()
        }, 600)
      }), b.preventDefault()
    }), f.addFunc({
      breakpoint: ["large", "medium"],
      enter: function() {
        a(".category-tree").hoverIntent(function() {
          a(this).find(".nav-dropdown").fadeIn(50), a(this).addClass("active")
        }, function() {
          a(this).find("nav-dropdown").fadeOut(50), a(this).removeClass("active")
        }), a("body").on("click", ".category-tree .nav-dropdown ul > li", function() {
          var b = a.trim(a(this).text()),
            c = 8;
          a(".category-tree > .category-inner span").html(b).text(function(a, b) {
            return b.length > c ? b.substr(0, c) + "..." : void 0
          })
        })
      },
      exit: function() {}
    }), a(".setting-dropdown").hoverIntent(function() {
      a(this).addClass("active")
    }, function() {
      a(this).removeClass("active")
    }), (a("a.product-lightbox-btn").length > 0 || a("a.product-video-popup").length > 0) && (a(".main-images").magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
      removalDelay: 300,
      closeOnContentClick: !0,
      gallery: {
        enabled: !0,
        navigateByImgClick: !1,
        preload: [0, 1]
      },
      image: {
        verticalFit: !1,
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      },
      callbacks: {
        beforeOpen: function() {
          var b = a(".product-video-popup").attr("href");
          if (b) {
            this.st.mainClass = "has-product-video";
            var c = a.magnificPopup.instance;
            c.items.push({
              src: b,
              type: "iframe"
            }), c.updateItemHTML()
          }
        },
        open: function() {}
      }
    }), a("body").on("click", ".product-lightbox-btn", function(b) {
      a(".product-images-slider").find(".owl-item.active a").click(), b.preventDefault()
    }), a("body").on("click", "a.product-video-popup", function(b) {
      a(".product-images-slider").find(".first a").click();
      var c = a.magnificPopup.instance;
      c.prev(), b.preventDefault()
    })), a("*[id^='attachment'] a, .entry-content a[href$='.jpg'], .entry-content a[href$='.jpeg']").magnificPopup({
      type: "image",
      tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
      closeOnContentClick: !0,
      mainClass: "my-mfp-zoom-in",
      image: {
        verticalFit: !1
      }
    }), a(".gallery a[href$='.jpg'],.gallery a[href$='.jpeg'],.featured-item a[href$='.jpeg'],.featured-item a[href$='.gif'],.featured-item a[href$='.jpg'], .page-featured-item .slider > a, .page-featured-item .page-inner a > img, .gallery a[href$='.png'], .gallery a[href$='.jpeg'], .gallery a[href$='.gif']").parent().magnificPopup({
      delegate: "a",
      type: "image",
      tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
      mainClass: "my-mfp-zoom-in",
      gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    }), a("#main-content").waypoint(function() {
      a("#top-link").toggleClass("active")
    }, {
      offset: "-100%"
    }), a(window).scroll(function() {
      if (!a("body").find("fixNav-enabled")) return !1;
      var b = a(".fixed-header-area"),
        c = a(this).scrollTop(),
        d = a(".header-wrapper").height() + 50;
      c > d ? b.hasClass("fixed-already") || b.stop().addClass("fixed-already") : b.hasClass("fixed-already") && b.stop().removeClass("fixed-already")
    }), a(".header-fold-btn").length > 0 && a("body").on("click", ".header-fold-btn", function() {
      var b = a(this).parent().parent();
      return a(b).toggleClass("fold-active"), !1
    }), a(window).resize(function() {
      var b = a(".header-wrapper"),
        c = a("body").width();
      if (b.hasClass("header-transparent")) {
        var d = b.height(),
          e = a(".lt-sc-carousel-warper").first();
        768 > c && (d = 0), e.css({
          marginTop: -d
        })
      }
      var f = a(".black-window").hasClass("cart-window"),
        g = a(".black-window").hasClass("wishlist-window"),
        h = a(".black-window").hasClass("log-window");
      if (c > 945 && !f && !g && !h && (a(".col-sidebar").length > 0 && a(".col-sidebar").removeAttr("style"), a(".warpper-mobile-search").length > 0 && !a(".warpper-mobile-search").hasClass("show-in-desk") && a(".warpper-mobile-search").hide(), a(".black-window").length > 0 && a(".black-window").hide()), a("#lt-menu-vertical-header .lt-vertical-header").length) {
        var i = a("#lt-menu-vertical-header .lt-vertical-header").width() + .5;
        a("#lt-menu-vertical-header .vertical-menu-container").css("width", i)
      }
    }), a("#lt-menu-vertical-header .lt-vertical-header").length) {
    var g = a("#lt-menu-vertical-header .lt-vertical-header").width() + .5;
    a("#lt-menu-vertical-header .vertical-menu-container").css("width", g)
  }
  if (a("#top-link").length > 0 && a("body").on("click", "#top-link", function() {
      a("html, body").animate({
        scrollTop: 0
      }, 800)
    }), a(".scroll-to").length > 0 && a(".scroll-to").each(function() {
      var b = a(this).data("link"),
        c = a(this).offset().top,
        d = a(this).data("title");
      a(this).data("bullet", "true") && a(".scroll-to-bullets").append('<a href="' + b + '"><strong>' + d + "</strong><span></span></a><br />"), a("body").on("click", 'a[href="' + b + '"]', function() {
        a.scrollTo(c, 500)
      }), a(this).waypoint(function() {
        a(".scroll-to-bullets a").removeClass("active"), a(".scroll-to-bullets").find('a[href="' + b + '"]').toggleClass("active")
      }, {
        offset: "0"
      })
    }), a(".progress-bar").length > 0 && a(".progress-bar").each(function() {
      var b = a(this).find(".bar-meter"),
        c = a(this).find(".bar-number"),
        d = a(b).attr("data-meter");
      a(this).waypoint(function() {
        a(b).css({
          width: 0,
          "max-width": d + "%"
        }), a(b).delay(50).animate({
          width: d + "%"
        }, 400), a(c).delay(400).show(), setTimeout(function() {
          a(c).css("opacity", 1)
        }, 400)
      }, {
        offset: d + "%",
        triggerOnce: !0
      })
    }), a(".show-theme-options").length > 0 && a("body").on("click", ".show-theme-options", function() {
      return a(this).parent().toggleClass("open"), a(window).resize(), !1
    }), a(".wide-button").length > 0 && a("body").on("click", ".wide-button", function(b) {
      a("body").removeClass("boxed"), a(this).addClass("active"), a(".config-options").find(".ss-content .boxed-button").removeClass("active"), a.cookie("layout", null, {
        path: "/"
      }), a(window).resize(), a(".ss-patterns-content").fadeOut(500), a(".lt-sc-carousel").resize()
    }), a(".boxed-button").length > 0) {
    var h = a.cookie("layout");
    "boxed" === h && a(".ss-patterns-content").show(), a("body").on("click", ".boxed-button", function() {
      a("body").addClass("boxed"), a(this).addClass("active"), a(".config-options").find(".ss-content .wide-button").removeClass("active"), a.cookie("layout", "boxed", {
        path: "/"
      }), a(window).resize(), a(".ss-patterns-content").fadeIn(500), a(".lt-sc-carousel").resize()
    })
  }
  a(".ss-color").length > 0 && a("body").on("click", ".ss-color", function() {
    var b = a(this).attr("data-style");
    a("head").append('<link rel="stylesheet" href="' + b + '" type="text/css" />'), null != a.cookie("data-style") && a.cookie("data-style") != b && a.cookie("data-style", null, {
      path: "/"
    }), a.cookie("data-style", b, {
      path: "/"
    })
  }), null != a.cookie("data-style") && a("head").append('<link rel="stylesheet" href="' + a.cookie("data-style") + '" type="text/css" />'), a(".ss-image").length > 0 && a("body").on("click", ".ss-image", function() {
    var b = a(this).attr("data-pattern");
    a("html").css({
      "background-image": "url('" + b + "')",
      "background-attachment": "fixed"
    }), a("body").css("background-color", "transparent"), null != a.cookie("data-bg") && a.cookie("data-bg") !== b && a.cookie("data-bg", null, {
      path: "/"
    }), a.cookie("data-bg", b, {
      path: "/"
    })
  }), null != a.cookie("data-bg") && (a("html").css({
    "background-image": "url('" + a.cookie("data-bg") + "')",
    "background-attachment": "fixed"
  }), a("body").css("background-color", "transparent")), a(".collapses .collapses-title a").length > 0 && a("body").on("click", ".collapses .collapses-title a", function(b) {
    var c = a(this).parents(".collapses-group"),
      d = a(this).parents(".collapses");
    if (a(d).hasClass("active")) a(d).removeClass("active").find(".collapses-inner").slideUp(200);
    else {
      var e = a(c).find(".collapses.active");
      a(e).removeClass("active").find(".collapses-inner").slideUp(200), a(d).addClass("active").find(".collapses-inner").slideDown(200)
    }
    return !1
  }), a(".lt-accordions-content .lt-accordion-title a").length > 0 && a("body").on(_event, ".lt-accordions-content .lt-accordion-title a", function() {
    var b = a(this).parents(".lt-accordions-content"),
      c = a(this).attr("data-id");
    return a(this).hasClass("active") ? (a(this).removeClass("active"), a("#lt-secion-" + c).removeClass("active").slideUp(200)) : (a(b).find(".lt-accordion-title a").removeClass("active"), a(b).find(".lt-panel.active").removeClass("active").slideUp(200), a("#lt-secion-" + c).addClass("active").slideDown(200), a(this).addClass("active")), !1
  }), a(".lt-tabs-content ul.lt-tabs li a").length > 0 && a("body").on(_event, ".lt-tabs-content ul.lt-tabs li a", function(b) {
    b.preventDefault();
    var c = a(this);
    if (!a(c).parent().hasClass("active")) {
      var d = a(c).parents(".lt-tabs-content"),
        e = a(c).attr("data-id"),
        f = a(c).parent().attr("data-show");
      a(d).find("ul li").removeClass("active"), a(c).parent().addClass("active"), a(d).find("div.lt-panel").removeClass("active").hide(), a(e).addClass("active").show();
      var g = a(e).find(".group-slider"),
        h = a(e).find(".lt_load_ajax");
      if (wow_enable ? (a(e).find(".product-item").length > 0 || a(e).find(".product_list_widget").length > 0) && (a(e).css({
          opacity: "0.9"
        }).append('<div class="please-wait type2" style="top:45%"></div>'), a(d).find(".wow").css({
          visibility: "hidden",
          "animation-name": "none",
          opacity: "0"
        }), a(g).length < 1 ? (a(e).find(".wow").removeClass("animated").css({
          "animation-name": "fadeInUp"
        }), a(e).find(".wow").each(function() {
          var b = a(this),
            c = parseInt(a(b).attr("data-wow-delay"));
          setTimeout(function() {
            a(b).css({
              visibility: "visible"
            }), a(b).animate({
              opacity: 1
            }, c), a(".please-wait").length && (a(e).css({
              opacity: 1
            }), a(".please-wait").remove())
          }, c)
        })) : (a(e).find(".owl-stage").css({
          opacity: "0"
        }), setTimeout(function() {
          a(e).find(".owl-stage").css({
            opacity: "1"
          })
        }, 500), a(e).find(".wow").each(function() {
          var b = a(this);
          a(b).css({
            "animation-name": "fadeInUp",
            visibility: "visible",
            opacity: 0
          });
          var c = parseInt(a(b).attr("data-wow-delay"));
          c += "0" === f ? 500 : 0, setTimeout(function() {
            a(b).animate({
              opacity: 1
            }, c), a(".please-wait").length && (a(e).css({
              opacity: 1
            }), a(".please-wait").remove())
          }, c)
        }))) : a(g).length && (a(e).css({
          opacity: .9
        }).append('<div class="please-wait type2" style="top:45%"></div>'), a(e).find(".owl-stage").css({
          opacity: "0"
        }), setTimeout(function() {
          a(e).find(".owl-stage").css({
            opacity: "1"
          }), a(".please-wait").length && (a(e).css({
            opacity: 1
          }), a(".please-wait").remove())
        }, 300)), a(h).length > 0) {
        a(e).css({
          opacity: .9
        }).append('<div class="please-wait type2" style="top:45%"></div>');
        var i = a(h).attr("data-shortcode"),
          j = a(h).find(".lt-shortcode-content").text();
        j && i && a.ajax({
          url: ajaxurl,
          type: "post",
          data: {
            action: "lt_load_ajax_shortcode",
            shortcode: j,
            shortcode_name: i,
            lt_load_ajax: "1"
          },
          beforeSend: function() {},
          success: function(b) {
            a("#yith-wcwl-popup-message").length < 1 && a("body").prepend('<div id="yith-wcwl-popup-message" style="display: none;"><div id="yith-wcwl-message"></div></div>'), a(h).replaceWith(b), loadingCarousel(a), loadingSCCarosel(a), loadCountDown(a), loadToltip(a);
            var c = a(e).find(".lt-products-deal");
            a(c).length > 0 && loadHeightDeal(a, !1), a(".please-wait").length > 0 && (a(e).css({
              opacity: 1
            }), a(".please-wait").remove())
          }
        })
      }
    }
    return !1
  }), a.countdown.regionalOptions[""] = {
    labels: [lee_countdown_l10n.years, lee_countdown_l10n.months, lee_countdown_l10n.weeks, lee_countdown_l10n.days, lee_countdown_l10n.hours, lee_countdown_l10n.minutes, lee_countdown_l10n.seconds],
    labels1: [lee_countdown_l10n.year, lee_countdown_l10n.month, lee_countdown_l10n.week, lee_countdown_l10n.day, lee_countdown_l10n.hour, lee_countdown_l10n.minute, lee_countdown_l10n.second],
    compactLabels: ["y", "m", "w", "d"],
    whichLabels: null,
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    timeSeparator: ":",
    isRTL: !0
  }, a.countdown.setDefaults(a.countdown.regionalOptions[""]), loadCountDown(a), loadToltip(a), a(".bery_banner .center").length > 0 && (a(".bery_banner .center").vAlign(), a(window).resize(function() {
    a(".bery_banner .center").vAlign()
  })), a(".col_hover_focus").length > 0 && a("body").on("hover", ".col_hover_focus", function() {
    a(this).parent().find(".columns > *").css("opacity", "0.5")
  }, function() {
    a(this).parent().find(".columns > *").css("opacity", "1")
  }), a(".add-to-cart-grid.product_type_simple").length > 0 && a("body").on("click", ".add-to-cart-grid.product_type_simple", function() {
    a(".mini-cart").addClass("active cart-active"), a(".mini-cart").hover(function() {
      a(".cart-active").removeClass("cart-active")
    }), setTimeout(function() {
      a(".cart-active").removeClass("active")
    }, 5e3)
  }), a(".row ~ br").remove(), a(".columns ~ br").remove(), a(".columns ~ p").remove(), a("#megaMenu").wrap("<li/>"), a("select.ninja-forms-field,select.addon-select").wrap('<div class="custom select-wrapper"/>'), a(window).resize(), loadingCarousel(a), loadingSCCarosel(a), setInterval(function() {
    var b = a(".owl-carousel").data("owlCarousel");
    "undefined" != typeof b && b !== !1 && b.updateVars()
  }, 1500), a(".product-title a").each(function() {
    var b = a.trim(a(this).text()),
      c = 20;
    a(this).html(b).text(function(a, b) {
      return b.length > c ? b.substr(0, c) + "..." : void 0
    })
  }), a(".main-images").owlCarousel({
    items: 1,
    nav: !1,
    autoplaySpeed: 600,
    dots: !1,
    autoHeight: !0,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    responsiveClass: !0,
    navText: ["", ""],
    navSpeed: 600
  }), a(".main-images").on("change.owl.carousel", function(b) {
    var c = b.relatedTarget.relative(b.property.value),
      d = a(".product-thumbnails .owl-item");
    a(".active-thumbnail").removeClass("active-thumbnail"), a(".product-thumbnails").find(".owl-item").eq(c).addClass("active-thumbnail"), d.trigger("to.owl.carousel", [c, 300, !0])
  }).data("owl.carousel"), a("body").on("click", ".main-images a", function(a) {
    a.preventDefault()
  }), a(".product-thumbnails .owl-item").owlCarousel(), a(".product-thumbnails").owlCarousel({
    items: 4,
    nav: !1,
    autoplay: !1,
    dots: !1,
    autoHeight: !0,
    autoplayTimeout: 3e3,
    autoplayHoverPause: !0,
    responsiveClass: !0,
    navText: ["", ""],
    navSpeed: 600,
    responsive: {
      0: {
        items: 2,
        nav: !1
      },
      600: {
        items: 3,
        nav: !0
      },
      1000: {
        items: 4
      }
    }
  }).on("click", ".owl-item", function() {
    var b = a(this).index();
    a(".main-images").trigger("to.owl.carousel", [b, 300, !0])
  }), a("body").on("click", ".product-thumbnails .owl-item a", function(a) {
    a.preventDefault()
  }), a(".language-filter select").length > 0 && a("body").on("change", ".language-filter select", function() {
    window.location = a(this).val()
  });
  var i = a.cookie("leetheme_popup_closed");
  a(".lt-popup").magnificPopup({
    items: {
      src: "#lt-popup",
      type: "inline"
    },
    removalDelay: 300,
    fixedContentPos: !1,
    callbacks: {
      beforeOpen: function() {
        this.st.mainClass = "my-mfp-slide-bottom"
      },
      beforeClose: function() {
        var b = a("#showagain:checked").val();
        "do-not-show" === b && a.cookie("leetheme_popup_closed", "do-not-show", {
          expires: 1,
          path: "/"
        })
      }
    }
  }), "do-not-show" !== i && a(".lt-popup").length > 0 && a("body").hasClass("open-popup") && a(".lt-popup").magnificPopup("open"), a("body").delegate().on("click", ".product-interactions .btn-compare", function() {
    var b = a(this).parents(".product-interactions");
    return b.find(".compare-button .compare").trigger("click"), !1
  }), a("body").delegate().on("click", ".product-interactions .btn-wishlist", function() {
    var b = a(this),
      c = a(b).parents(".product-interactions");
    return c.find(".add_to_wishlist").trigger("click"), a(b).find(".wishlist-icon").hasClass("added") || setTimeout(function() {
      a(b).find(".wishlist-icon").addClass("added")
    }, 550), !1
  });
  var j = !1,
    k = !1;
  if (a(".wishlist-number").length > 0 && (a("body").on("click", ".btn-wishlist, .product-info .add_to_wishlist, .ajax_add_to_cart.btn-from-wishlist", function() {
      k = !0, a(this).ajaxSuccess(function(b, c, d) {
        if (b = d = null, "object" == typeof c) {
          var e = c.responseText.substring(0, 1);
          if ("{" === e) {
            var f = JSON.parse(c.responseText);
            (void 0 !== f.user_wishlists && void 0 !== f.result || void 0 !== f.fragments) && ("true" !== f.result && void 0 === f.fragments || !a(".wishlist-number .lt-sl").length || j || (j = !0, a.ajax({
              url: ajaxurl,
              type: "post",
              dataType: "json",
              data: {
                action: "lt_update_wishlist"
              },
              beforeSend: function() {},
              success: function(b) {
                a(".wishlist_sidebar").replaceWith(b.list);
                var c = parseInt(b.count);
                a(".wishlist-number .lt-sl").html(c), c > 0 ? a(".wishlist-number").removeClass("lt-product-empty") : 0 !== c || a(".wishlist-number").hasClass("lt-product-empty") || a(".wishlist-number").addClass("lt-product-empty")
              }
            })))
          }
        }
      }).ajaxComplete(function() {
        j = k = !1
      })
    }), a("body").on("click", ".lt-remove_from_wishlist", function() {
      var b = a(this).attr("data-prod_id"),
        c = a(".wishlist_table").attr("data-id"),
        d = a(".wishlist_table").attr("data-pagination"),
        e = a(".wishlist_table").attr("data-per-page"),
        f = a(".wishlist_table").attr("data-page");
      return a.ajax({
        url: ajaxurl,
        type: "post",
        dataType: "json",
        data: {
          action: "lt_remove_from_wishlist",
          pid: b,
          wishlist_id: c,
          pagination: d,
          per_page: e,
          current_page: f
        },
        beforeSend: function() {
          a.magnificPopup.close(), a(".black-window").fadeIn(200).addClass("wishlist-window"), a("#lt-wishlist-sidebar").show().animate({
            right: 0
          }, 500), a(".lt-wishlist-fog").show().html('<div class="please-wait type2"></div>')
        },
        success: function(b) {
          if ("0" === b.error) {
            a(".lt-wishlist-fog").hide(), a(".wishlist_sidebar").replaceWith(b.list);
            var c = parseInt(b.count);
            a(".wishlist-number .lt-sl").html(c), c > 0 ? a(".wishlist-number").removeClass("lt-product-empty") : 0 !== c || a(".wishlist-number").hasClass("lt-product-empty") || (a(".wishlist-number").addClass("lt-product-empty"), a(".wishlist-close a").click())
          }
        }
      }), !1
    })), a(".compare-number").length > 0 && a("body").on("click", ".btn-compare, .yith-woocompare-widget .compare", function() {
      j = !0, a(this).ajaxSuccess(function(b, c, d) {
        if (b = d = null, a(".compare-number .lt-sl").length && !k) {
          k = !0;
          var e, f, g = !1;
          if ("object" == typeof c) {
            if (e = c.responseText.substring(0, 1), "{" === e) {
              var h = JSON.parse(c.responseText);
              void 0 !== h.widget_table ? (f = "<ul>" + JSON.parse(c.responseText).widget_table + "</ul>", g = !0) : g = !1
            } else e = c.responseText.trim().substring(0, 4), "<li>" === e ? (f = "<li>No products to compare</li>" === c.responseText ? "<ul></ul>" : "<ul>" + c.responseText + "</ul>", g = !0) : g = !1;
            if (g) {
              var i = a(f).find("li").length;
              i = i ? i : 0, a(".compare-number .lt-sl").html(i), i > 0 ? a(".compare-number").removeClass("lt-product-empty") : 0 != i || a(".compare-number").hasClass("lt-product-empty") || a(".compare-number").addClass("lt-product-empty")
            }
          }
        }
      }).ajaxComplete(function() {
        k = j = !1
      }).ajaxError(function() {
        k = j = !1
      })
    }), /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) "undefined" != typeof wc_add_to_cart_variation_params && (a.fn.wc_variations_image_update = function(b) {
    if (b && b.image && b.image.src && b.image.src.length > 1) {
      a(".main-images .owl-item:eq(0) img").attr("src", b.image.url).removeAttr("srcset"), a(".main-images .owl-item:eq(0) a").attr("href", b.image.url);
      var c;
      if ("undefined" !== b.image.thumb_src) c = b.image.thumb_src;
      else {
        var d = a(".product-thumbnails .owl-item:eq(0)");
        "undefined" == typeof a(d).attr("data-thumb_org") && a(d).attr("data-thumb_org", a(d).find("img").attr("src")), c = a(d).attr("data-thumb_org")
      }
      c && a(".product-thumbnails .owl-item:eq(0) img").attr("src", c).removeAttr("srcset")
    } else {
      var e = a(".nasa-product-details-page .woocommerce-main-image").attr("data-o_href");
      a(".main-images .owl-item:eq(0) img").attr("src", e).removeAttr("srcset"), a(".main-images .owl-item:eq(0) a").attr("href", e);
      var d = a(".product-thumbnails .owl-item:eq(0)");
      "undefined" == typeof a(d).attr("data-thumb_org") && a(d).attr("data-thumb_org", a(d).find("img").attr("src"));
      var c = a(d).attr("data-thumb_org");
      c && a(".product-thumbnails .owl-item:eq(0) img").attr("src", c)
    }
  });
  else {
    var l = a("body").hasClass("product-zoom") ? !0 : !1;
    if (l) var m = a(".product-zoom .easyzoom").easyZoom({
        loadingNotice: ""
      }),
      n = m.data("easyZoom");
    "undefined" != typeof wc_add_to_cart_variation_params && (a.fn.wc_variations_image_update = function(b) {
      if (b && b.image && b.image.src && b.image.src.length > 1) {
        l ? n.swap(b.image.url, b.image.url) : (a(".main-images .owl-item:eq(0) img").attr("src", b.image.url), a(".main-images .owl-item:eq(0) a").attr("href", b.image.url)), a(".main-images .owl-item:eq(0) img").removeAttr("srcset");
        var c;
        if ("undefined" !== b.image.thumb_src) c = b.image.thumb_src;
        else {
          var d = a(".product-thumbnails .owl-item:eq(0)");
          "undefined" == typeof a(d).attr("data-thumb_org") && a(d).attr("data-thumb_org", a(d).find("img").attr("src")), c = a(d).attr("data-thumb_org")
        }
        c && a(".product-thumbnails .owl-item:eq(0) img").attr("src", c).removeAttr("srcset")
      } else {
        var e = a(".nasa-product-details-page .woocommerce-main-image").attr("data-o_href");
        l ? n.swap(e, e) : (a(".main-images .owl-item:eq(0) img").attr("src", e), a(".main-images .owl-item:eq(0) a").attr("href", e));
        var d = a(".product-thumbnails .owl-item:eq(0)");
        "undefined" == typeof a(d).attr("data-thumb_org") && a(d).attr("data-thumb_org", a(d).find("img").attr("src"));
        var c = a(d).attr("data-thumb_org");
        c && a(".product-thumbnails .owl-item:eq(0) img").attr("src", c)
      }
    })
  }
  if (a("body").on("click", ".load-more-btn", function() {
      if (!load_flag) {
        load_flag = !0;
        var b = a(this).attr("data-infinite"),
          c = a(".shortcode_" + b).attr("data-product-type"),
          d = parseInt(a(".shortcode_" + b).attr("data-next-page")),
          e = parseInt(a(".shortcode_" + b).attr("data-cat")),
          f = parseInt(a(".shortcode_" + b).attr("data-post-per-page")),
          g = a(".shortcode_" + b).attr("data-is-deals"),
          h = parseInt(a(".shortcode_" + b).attr("data-max-pages"));
        return a.ajax({
          url: ajaxurl,
          type: "post",
          data: {
            action: "moreProduct",
            page: d,
            type: c,
            cat: e,
            post_per_page: f,
            is_deals: g
          },
          beforeSend: function() {
            a(".load-more-btn." + b).before('<div id="ajax-loading" class="absolute"></div>'), a(".load-more-btn." + b).css("opacity", "0")
          },
          success: function(c) {
            a(".load-more-btn." + b).css("opacity", "1"), a(".shortcode_" + b).append(c).fadeIn(1e3), a(".shortcode_" + b).attr("data-next-page", d + 1), d == h && (a(".load-more-btn." + b).addClass("end-product"), a(".load-more-btn." + b).html("ALL PRODUCTS LOADED").removeClass("load-more-btn")), loadingCarousel(a), a("#ajax-loading").remove(), a(".tip, .tip-bottom").tipr(), a(".products-infinite .tip-top").tipr({
              mode: "top"
            }), load_flag = !1
          }
        }), !1
      }
    }),
    a("body").find("input.qty:not(.product-quantity input.qty)").each(function() {
      var b = parseFloat(a(this).attr("min"));
      b && b > 0 && parseFloat(a(this).val()) < b && a(this).val(b)
    }), a("body").on("click", ".plus, .minus", function() {
      var b = a(this).parents(".quantity").find(".qty"),
        c = a(this).parent().parent().find(".single_add_to_cart_button"),
        d = parseFloat(b.val()),
        e = parseFloat(b.attr("max")),
        f = parseFloat(b.attr("min")),
        g = b.attr("step");
      d = d ? d : 0, e = e ? e : "", f = f ? f : 1, ("any" === g || "" === g || void 0 === g || "NaN" === parseFloat(g)) && (g = 1), a(this).is(".plus") ? e && (e == d || d > e) ? (b.val(e), c.length > 0 && c.attr("data-quantity", e)) : (b.val(d + parseFloat(g)), c.length > 0 && c.attr("data-quantity", d + parseFloat(g))) : f && (f == d || f > d) ? (b.val(f), c.length > 0 && c.attr("data-quantity", f)) : d > 0 && (b.val(d - parseFloat(g)), c.length > 0 && c.attr("data-quantity", d - parseFloat(g))), b.trigger("change")
    }), a(".header-type-4 .lt_search_full .icon").length > 0 && a("body").on("click", ".header-type-4 .lt_search_full .icon", function() {
      a(this).parents(".lt_search_full").find("form.lt-ajaxsearchform").submit()
    }), "1" == search_options.enable_live_search) {
    var o = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace("title"),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: ajaxurl + "?action=live_search_products",
      remote: {
        url: ajaxurl + "?action=live_search_products&s=%QUERY",
        ajax: {
          data: {
            cat: a(".lt-cats-search").val()
          },
          beforeSend: function() {
            0 == a(".live-search-input").parent().find(".loader-search").length && a(".live-search-input").parent().append('<div class="please-wait dark"><span></span><span></span><span></span></div>')
          },
          success: function() {
            a(".please-wait").remove()
          },
          error: function() {
            a(".please-wait").remove()
          }
        }
      }
    });
    o.initialize(), a(".live-search-input").typeahead({
      minLength: 3,
      hint: !0,
      highlight: !1,
      backdrop: {
        opacity: .8,
        filter: "alpha(opacity=80)",
        "background-color": "#eaf3ff"
      },
      backdropOnFocus: !0
    }, {
      name: "search",
      source: o.ttAdapter(),
      displayKey: "title",
      templates: {
        empty: '<p class="empty-message" style="padding:0;margin:0;font-size:100%;">Sorry. No results match your search.</p>',
        // suggestion: Handlebars.compile(search_options.live_search_template)
      }
    })
  }
  if (a("body").on("mouseover", ".search-dropdown", function() {
      a(this).addClass("active")
    }).on("mouseout", ".search-dropdown", function() {
      a(this).removeClass("active")
    }), a(".banner.hover-lax .banner-image").length > 0) {
    var p = a(window).width();
    a(window).resize(function() {
      p = a(window).width(), 768 >= p && a(".banner.hover-lax").css("background-position", "center center")
    }), a("body").on("mousemove", ".banner.hover-lax", function(b) {
      var c = a(this),
        d = a(c).attr("data-minwidth") ? a(c).attr("data-minwidth") : 768;
      if (p > d) {
        var e = -1 * b.pageX / 6,
          f = -1 * b.pageY / 6;
        a(c).css("background-position", e + "px " + f + "px")
      } else a(c).css("background-position", "center center")
    })
  }
  if (a(".portfolio-list").length > 0) {
    var q = a(".portfolio-list").attr("data-columns"),
      r = a(".portfolio-list");
    a(r).isotope({
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
      filter: "*"
    }), a(r).parent().find(".portfolio-tabs li a").on("click", function() {
      var b = a(this).attr("data-filter");
      return a(r).parent().find(".portfolio-tabs li").removeClass("active"), a(this).parents("li").hasClass("active") || a(this).parents("li").addClass("active"), a(r).isotope({
        filter: b
      }), !1
    });
    var s = a(".loadmore-portfolio").attr("data-category");
    load_flag = !0, loadMorePortfolio(a, s, q, page_load, ajaxurl), a("body").on("click", ".loadmore-portfolio", function() {
      var b = a(this);
      if (!load_flag) {
        load_flag = !0;
        var c = a(b).attr("data-category");
        return page_load++, loadMorePortfolio(a, c, q, page_load, ajaxurl), !1
      }
    })
  }
  if (a("body").on("click", ".portfolio-image-view", function(b) {
      var c = a(this).attr("data-src");
      a.magnificPopup.open({
        closeOnContentClick: !0,
        items: {
          src: '<div class="portfolio-lightbox"><img src="' + c + '" /></div>',
          type: "inline"
        }
      }), a(".please-wait,.color-overlay").remove(), b.preventDefault()
    }), a("body").on("click", ".mobile-search", function() {
      a(".black-window").fadeIn(200), a(".warpper-mobile-search").show().animate({
        top: 0
      }, 500), a(".warpper-mobile-search").find('input[name="s"]').val("").focus()
    }), a("body").on("click", ".desk-search", function() {
      var b = a(this).parent().find(".lt-show-search-form"),
        c = a("#site-navigation"),
        d = "500px",
        e = a(".top-bar-has-search").length > 0 ? !0 : !1;
      a(c).length > 0 && a(c).width() && !e && (d = a(c).width());
      var f = a(this);
      setTimeout(function() {
        a(f).toggleClass("open")
      }, 300), e || a(c).animate({
        opacity: 0
      }, 200), a(b).show().animate({
        width: d
      }, 300).removeClass("lt-over-hide").after('<div class="lt-tranparent" />');
      var g = a(b).find('input[name="s"]');
      a(g).hasClass("lt-not-radius") || a(g).addClass("lt-not-radius"), a(g).css({
        "padding-left": "15px",
        "padding-right": "15px"
      }).val("").focus()
    }), a("body").on("click", ".lt-tranparent", function() {
      var b = a(this).parent().find(".lt-show-search-form"),
        c = a(".desk-search");
      setTimeout(function() {
        a(c).toggleClass("open")
      }, 200), a(b).find('input[name="s"]').css({
        padding: 0
      }), a(b).addClass("lt-over-hide").animate({
        width: 0
      }, 200).hide(200);
      var d = a(".header-container").find(".header-nav");
      a(d).length > 0 && a(d).animate({
        opacity: 1
      }, 200), a(this).remove()
    }), a("body").on("click", ".toggle-sidebar, .cart-link, .wishlist-link", function() {
      a(".jPanelMenu-panel").length > 0 && "closed" === a("body").attr("data-menu-position") && a(".jPanelMenu-panel").attr("style", "position: relative; transform: none")
    }), a("body").on("click", ".toggle-sidebar", function() {
      a(".black-window").fadeIn(200), a(".col-sidebar").hasClass("left") ? a(".col-sidebar").show().animate({
        left: 0
      }, 500) : a(".col-sidebar").show().animate({
        right: 0
      }, 500)
    }), a("body").on("click", ".cart-link", function() {
      a(".black-window").fadeIn(200).addClass("cart-window"), a("#cart-sidebar").show().animate({
        right: 0
      }, 500)
    }), a("body").on("click", ".wishlist-link", function() {
      a(".black-window").fadeIn(200).addClass("wishlist-window"), a("#lt-wishlist-sidebar").show().animate({
        right: 0
      }, 500)
    }), a("body").on("click", ".black-window, .white-window, .cart-close a, .wishlist-close a, .login-register-close a", function() {
      a(".black-window").hasClass("cart-window") && a(".black-window").removeClass("cart-window"), a(".black-window").hasClass("wishlist-window") && a(".black-window").removeClass("wishlist-window"), a(".black-window").hasClass("log-window") && a(".black-window").removeClass("log-window"), a(".warpper-mobile-search").length > 0 && (a(".warpper-mobile-search").animate({
        top: "-100%"
      }, 200).hide(200), a(".warpper-mobile-search").hasClass("show-in-desk") && setTimeout(function() {
        a(".warpper-mobile-search").removeClass("show-in-desk")
      }, 300));
      var b = a("body").width();
      a(".col-sidebar").length > 0 && 945 >= b && (a(".col-sidebar").hasClass("left") ? a(".col-sidebar").animate({
        left: "-100%"
      }, 200).hide(200) : a(".col-sidebar").animate({
        right: "-100%"
      }, 200).hide(200)), a("#cart-sidebar").length > 0 && a("#cart-sidebar").animate({
        right: "-100%"
      }, 200).hide(200), a("#lt-wishlist-sidebar").length > 0 && a("#lt-wishlist-sidebar").animate({
        right: "-100%"
      }, 200).hide(200), a(".lt-login-register-warper").length > 0 && a(".lt-login-register-warper").animate({
        top: "-110%"
      }, 300).hide(200), a(".black-window, .white-window").fadeOut(200)
    }), a(document).on("keyup", function(b) {
      27 === b.keyCode && (a(".lt-tranparent").click(), a(".black-window, .white-window, .cart-close a, .wishlist-close a, .login-register-close a").click(), a.magnificPopup.close())
    }), a("body").on("click", ".add_to_cart_button", function() {
      a.magnificPopup.close(), setTimeout(function() {
        a(".black-window").fadeIn(200).addClass("cart-window"), a("#lt-wishlist-sidebar").hide().animate({
          right: "-100%"
        }, 500), a("#cart-sidebar").show().animate({
          right: 0
        }, 500)
      }, 200)
    }), a(".lt-cart-fog").length && a("body").ajaxSend(function() {
      a(".lt-cart-fog").show().html('<div class="please-wait type2"></div>')
    }).ajaxComplete(function() {
      a(".lt-cart-fog").hide()
    }).ajaxError(function() {
      a(".lt-cart-fog").hide()
    }), a("body").on("click", ".remove.item-in-cart", function() {
      var b = a(this),
        c = a(b).attr("data-key"),
        d = a(b).attr("data-id");
      a(".remove.item-in-cart").removeClass("remove"), c && d && a.ajax({
        url: ajaxurl,
        type: "post",
        dataType: "json",
        data: {
          action: "lt_cart_remove_item",
          item_key: c
        },
        beforeSend: function() {},
        success: function(b) {
          if (b.succes) {
            if (a("#item-" + d).remove(), a('.add_to_cart_button[data-product_id="' + d + '"]').length > 0 && a('.add_to_cart_button[data-product_id="' + d + '"]').hasClass("added") && a('.add_to_cart_button[data-product_id="' + d + '"]').removeClass("added"), a(".cart_sidebar .mini-cart-item").length < 1) {
              var c = a(".empty.hidden-tag").html();
              a(".cart_sidebar").html(c), setTimeout(function() {
                a(".black-window").removeClass("cart-window"), a("#cart-sidebar").animate({
                  right: "-100%"
                }, 200).hide(200), a(".black-window").fadeOut(200)
              }, 200)
            }
            a(".products-number .lt-sl").html(b.sl), a(".total-price").length > 0 && a(".total-price").html(b.pr), a(".total-items").length > 0 && a(".total-items").html(b.sl), a("#cart-sidebar .item-in-cart").addClass("remove"), b.sl > 0 ? a(".products-number").removeClass("lt-product-empty") : 0 != b.sl || a(".products-number").hasClass("lt-product-empty") || a(".products-number").addClass("lt-product-empty")
          }
        },
        error: function() {
          a("#cart-sidebar .item-in-cart").addClass("remove")
        }
      })
    }), a("body").on("click", ".lt_add_to_cart", function() {
      var b = a(this),
        c = a(b).attr("data-product_id");
      if (c) {
        var d = a(b).parents("#lt_form_add_product_" + c),
          e = a(d).attr("data-type"),
          f = a(d).find('.quantity input[name="quantity"]').val(),
          g = a(d).find('input[name="variation_id"]').length > 0 ? a(d).find('input[name="variation_id"]').val() : 0,
          h = {},
          i = a(b).attr("data-head_type");
        if ((a(b).hasClass("lt_add_to_cart_variation") || "variations" === e) && !g) return !1;
        if (g && a(d).find(".variations").length > 0) {
          var j = a(d).find(".variations");
          a(j).find("select").each(function() {
            h[a(this).attr("name")] = a(this).val()
          });
          var k = {},
            l = "1" === a(b).attr("data-from_wishlist") ? "1" : "0";
          a(".wishlist_table").length > 0 && a(".wishlist_table").find("tr#yith-wcwl-row-" + c).length > 0 && (k = {
            from_wishlist: l,
            wishlist_id: a(".wishlist_table").attr("data-id"),
            pagination: a(".wishlist_table").attr("data-pagination"),
            per_page: a(".wishlist_table").attr("data-per-page"),
            current_page: a(".wishlist_table").attr("data-page")
          })
        }
        a.ajax({
          url: ajaxurl,
          type: "post",
          dataType: "json",
          data: {
            action: "lt_single_add_to_cart",
            product_id: c,
            quantity: f,
            product_type: e,
            variation_id: g,
            variation: h,
            head_type: i,
            data_wislist: k
          },
          beforeSend: function() {
            a.magnificPopup.close(), a(".black-window").fadeIn(200).addClass("cart-window"), a("#cart-sidebar").show().animate({
              right: 0
            }, 500), a(".lt-cart-fog").show().html('<div class="please-wait type2"></div>')
          },
          success: function(b) {
            var d = b.fragments;
            if (d && (a.each(d, function(b, c) {
                a(b).addClass("updating"), a(b).replaceWith(c)
              }), a(".lt-cart-fog").hide()), a(".wishlist_sidebar").length > 0 && void 0 != b.wishlist) {
              if (a(".wishlist_sidebar").replaceWith(b.wishlist), a(".wishlist-number .lt-sl").length > 0) {
                var e = parseInt(b.wishlistcount);
                a(".wishlist-number .lt-sl").html(e), e > 0 ? a(".wishlist-number").removeClass("lt-product-empty") : 0 !== e || a(".wishlist-number").hasClass("lt-product-empty") || (a(".wishlist-number").addClass("lt-product-empty"), a(".wishlist-close a").click())
              }
              a(".add-to-wishlist-" + c).length > 0 && (a(".add-to-wishlist-" + c).find(".yith-wcwl-add-button").show(), a(".add-to-wishlist-" + c).find(".yith-wcwl-wishlistaddedbrowse").hide(), a(".add-to-wishlist-" + c).find(".yith-wcwl-wishlistexistsbrowse").hide())
            }
          }
        })
      }
      return !1
    }), a("body").on("click", ".product_type_variable", function() {
      var b = a(this);
      if (a(b).hasClass("btn-from-wishlist")) {
        var c = a(b).parents(".add-to-cart-wishlist"),
          d = a(b).parents(".product-wishlist-info").find(".wishlist-item");
        a(d).css({
          opacity: .3
        }), a(d).after('<div class="please-wait type2" style="top:40%; left: 45%;"></div>'), a(c).find(".quick-view").click()
      } else {
        var c = a(b).parents(".product-interactions");
        a(c).length < 1 && (c = a(b).parents(".item-product-widget")), a(c).find(".quick-view").click()
      }
      return !1
    }), a("body").on("click", ".ajax_add_to_cart_variable", function() {
      return a(this).parent().find(".quick-view").click(), !1
    }), a(".lt-sc-pdeal-block").length > 0 && a(".lt-sc-pdeal-block").each(function() {
      if (!a(this).hasClass("no-slide")) {
        var b = a(this).attr("data-id");
        lt_corousel_deal(b, a)
      }
    }), a(".lt-sc-pdeal-full").length > 0 && a(".lt-sc-pdeal-full").each(function() {
      var b = a(this).attr("data-id");
      lt_corousel_deal_thumbVertical(b, a)
    }), a(".lt-post-slider").length > 0) {
    var t = parseInt(a(".lt-post-slider").attr("data-show"));
    a(".lt-post-slider").owlCarousel({
      items: t,
      loop: !0,
      nav: !1,
      autoplay: !0,
      dots: !1,
      autoHeight: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      responsiveClass: !0,
      navText: ["", ""],
      navSpeed: 600,
      responsive: {
        0: {
          items: 1,
          nav: !1
        },
        600: {
          items: 1,
          nav: !1
        },
        1000: {
          items: t,
          nav: !1
        }
      }
    })
  }
  if (a(".lt-promotion-close").length > 0) {
    var u = a(".lt-promotion-news").outerHeight();
    "hide" !== a.cookie("promotion") && (a(".lt-position-relative").animate({
      height: u + "px"
    }, 500), a(".lt-promotion-news").fadeIn(500)), a("body").on("click", ".lt-promotion-close", function() {
      a.cookie("promotion", "hide", {
        path: "/"
      }), a(".lt-promotion-show").show(), a(".lt-position-relative").animate({
        height: "0px"
      }, 500), a(".lt-promotion-news").fadeOut(500)
    }), a("body").on("click", ".lt-promotion-show", function() {
      a.cookie("promotion", "show", {
        path: "/"
      }), a(".lt-promotion-show").hide(), a(".lt-position-relative").animate({
        height: u + "px"
      }, 500), a(".lt-promotion-news").fadeIn(500)
    })
  }
  a(".lt-vertical-slider").length > 0 && a(".lt-vertical-slider").each(function() {
    var b = parseInt(a(this).attr("data-change")),
      c = parseInt(a(this).attr("data-speed")),
      d = parseInt(a(this).attr("data-delay")),
      e = a(this).attr("data-show") ? a(this).attr("data-show") : "1",
      f = "0" === a(this).attr("data-autoplay") ? !1 : !0,
      d = d ? d : 3e3,
      c = c ? c : 1e3,
      b = b ? b : !1,
      g = "1" === a(this).attr("data-dot") ? !0 : !1,
      h = "1" === a(this).attr("data-arrows") ? !0 : !1,
      i = {
        vertical: !0,
        verticalSwiping: !0,
        slidesToShow: e,
        autoplay: f,
        autoplaySpeed: d,
        speed: c,
        dots: g,
        arrows: h
      };
    b && (i.slidesToScroll = b), a(this).slick(i)
  }), reponseCarousel(a), a(window).resize(function() {
    reponseCarousel(a)
  });
  var v = 0,
    w = 0,
    x = "0";
  if (a(".price_slider_wrapper").length && (a(".price_slider_wrapper").find("input").attr("readonly", !0), a(".price_slider_wrapper").find("button").remove(), v = parseFloat(a(".price_slider_wrapper").find('input[name="min_price"]').val()), w = parseFloat(a(".price_slider_wrapper").find('input[name="max_price"]').val()), x = a(".lt_hasPrice").length ? a(".lt_hasPrice").val() : "0", "1" === x && a(".reset_price").show()), a(".price_slider").length && (a(".price_slider").on("slidestop", function() {
      var b = a(this).parents("form");
      if (!(a(".lt-has-filter-ajax").length < 1)) {
        var c = parseFloat(a(b).find('input[name="min_price"]').val()),
          d = parseFloat(a(b).find('input[name="max_price"]').val());
        if (0 > c && (c = 0), c > d && (d = c), c != v || d != w) {
          v = c, w = d, x = "1", a(".lt_hasPrice").length && (a(".lt_hasPrice").val("1"), a(".reset_price").fadeIn(200));
          var e = a(".current-cat > .lt-filter-by-cat"),
            f = a('select[name="orderby"]').val(),
            g = !1,
            h = null,
            i = "",
            j = "";
          a(e).length && (h = a(e).attr("data-id"), i = a(e).attr("data-taxonomy"), j = a(e).attr("href"));
          var k = lt_setVariations(a, [], []),
            l = a("input#lt_hasSearch").length > 0 && "" !== a("input#lt_hasSearch").val() ? 1 : 0,
            m = 1 === l ? a("input#lt_hasSearch").val() : "";
          lt_Ajax_filter(a, ajaxurl, j, g, h, f, k, x, c, d, l, m, e, "0", i, !0)
        }
        return !1
      }
      a(b).submit()
    }), a("body").on("click", ".reset_price", function() {
      if (a(".lt_hasPrice").length && "1" === a(".lt_hasPrice").val()) {
        var b = a(this).parents("form");
        if (a(".lt-has-filter-ajax").length < 1) a(b).submit();
        else {
          var c = a("#min_price").attr("data-min"),
            d = a("#max_price").attr("data-max");
          a(".price_slider").slider("values", 0, c), a(".price_slider").slider("values", 1, d), a("#min_price").val(c), a("#max_price").val(d);
          var e = a('input[name="lt_currency_pos"]').val(),
            f = c,
            g = d;
          switch (e) {
            case "left":
              f = woocommerce_price_slider_params.currency_format_symbol + c, g = woocommerce_price_slider_params.currency_format_symbol + d;
              break;
            case "right":
              f = c + woocommerce_price_slider_params.currency_format_symbol, g = d + woocommerce_price_slider_params.currency_format_symbol;
              break;
            case "left_space":
              f = woocommerce_price_slider_params.currency_format_symbol + " " + c, g = woocommerce_price_slider_params.currency_format_symbol + " " + d;
              break;
            case "right_space":
              f = c + " " + woocommerce_price_slider_params.currency_format_symbol, g = d + " " + woocommerce_price_slider_params.currency_format_symbol
          }
          a(".price_slider_amount .price_label span.from").html(f), a(".price_slider_amount .price_label span.to").html(g);
          var h = 0,
            i = 0;
          x = "0", a(".lt_hasPrice").length && (a(".lt_hasPrice").val("0"), a(".reset_price").fadeOut(200));
          var j = a(".current-cat > .lt-filter-by-cat"),
            k = a('select[name="orderby"]').val(),
            l = !1,
            m = null,
            n = "",
            o = "";
          a(j).length && (m = a(j).attr("data-id"), n = a(j).attr("data-taxonomy"), o = a(j).attr("href"));
          var p = lt_setVariations(a, [], []),
            q = a("input#lt_hasSearch").length > 0 && "" !== a("input#lt_hasSearch").val() ? 1 : 0,
            r = 1 === q ? a("input#lt_hasSearch").val() : "";
          lt_Ajax_filter(a, ajaxurl, o, l, m, k, p, x, h, i, q, r, j, "0", n, !0)
        }
      }
      return !1
    })), a(".lt-tag-cloud").length) {
    var y = parseInt(a(".lt-has-filter-ajax").find(".current-cat a").attr("data-id")),
      z = /(tag-link-\d+)/g;
    a(".lt-tag-cloud").each(function() {
      var b, c = a(this),
        d = a(c).attr("data-taxonomy");
      a(c).find("a").each(function() {
        var c = a(this).attr("class"),
          e = c.match(z);
        b = e.length > 0 ? parseInt(e[0].replace("tag-link-", "")) : !1, b && (a(this).addClass("lt-filter-by-cat").attr("data-id", b).attr("data-taxonomy", d).removeAttr("style"), b === y && a(this).addClass("lt-active"))
      })
    })
  }
  if (a("body").on("click", ".lt-filter-by-cat", function() {
      if (!(a(".lt-has-filter-ajax").length < 1)) {
        if (!a(this).hasClass("lt-disable") && !a(this).hasClass("lt-active")) {
          a("li.cat-item").removeClass("current-cat");
          var b = a(this),
            c = a(b).attr("data-id"),
            d = a(b).attr("data-taxonomy"),
            e = a('select[name="orderby"]').val(),
            f = a(b).attr("href"),
            g = !1;
          if (c) {
            var h = [];
            a(".lt-filter-by-variations").each(function() {
              a(this).hasClass("lt-filter-var-chosen") && (a(this).parent().removeClass("chosen lt-chosen"), a(this).removeClass("lt-filter-var-chosen"))
            });
            var i = null,
              j = null;
            if ("1" === x) {
              var k = a(".price_slider").parents("form");
              a(k).length && (i = parseFloat(a(k).find('input[name="min_price"]').val()), j = parseFloat(a(k).find('input[name="max_price"]').val()), 0 > i && (i = 0), i > j && (j = i))
            }
            a("input#lt_hasSearch").val(""), lt_Ajax_filter(a, ajaxurl, f, g, c, e, h, x, i, j, 0, "", b, "1", d, !0)
          }
        }
        return !1
      }
    }), a(".woocommerce-ordering").length > 0 && a(".lt-has-filter-ajax").length > 0) {
    var A = a(".woocommerce-ordering").parent(),
      B = a(".woocommerce-ordering").html();
    a(A).html(B)
  }
  a(".lt-order-label").length && (a('select[name="orderby"]').length ? a(".lt-order-label").show() : a(".lt-order-label").hide()), a("body").on("change", 'select[name="orderby"]', function() {
    if (!(a(".lt-has-filter-ajax").length < 0)) {
      var b = a(".current-cat > .lt-filter-by-cat"),
        c = a(this).val(),
        d = !1,
        e = null,
        f = "",
        g = "";
      a(b).length && (e = a(b).attr("data-id"), f = a(b).attr("data-taxonomy"), g = a(b).attr("href"));
      var h = lt_setVariations(a, [], []),
        i = null,
        j = null;
      if ("1" === x) {
        var k = a(".price_slider").parents("form");
        a(k).length && (i = parseFloat(a(k).find('input[name="min_price"]').val()), j = parseFloat(a(k).find('input[name="max_price"]').val()), 0 > i && (i = 0), i > j && (j = i))
      }
      var l = a("input#lt_hasSearch").length > 0 && "" !== a("input#lt_hasSearch").val() ? 1 : 0,
        m = 1 === l ? a("input#lt_hasSearch").val() : "";
      return lt_Ajax_filter(a, ajaxurl, g, d, e, c, h, x, i, j, l, m, b, "0", f, !0), !1
    }
  }), a("body").on("click", ".lt-pagination-ajax .page-numbers", function() {
    if (!a(this).hasClass("lt-current")) {
      var b = a(".current-cat > .lt-filter-by-cat"),
        c = a('select[name="orderby"]').val(),
        d = a(this).attr("data-page"),
        e = null,
        f = "",
        g = "";
      "1" === d && (d = !1), a(b).length && (e = a(b).attr("data-id"), f = a(b).attr("data-taxonomy"), g = a(b).attr("href"));
      var h = lt_setVariations(a, [], []),
        i = null,
        j = null;
      if ("1" === x) {
        var k = a(".price_slider").parents("form");
        a(k).length && (i = parseFloat(a(k).find('input[name="min_price"]').val()), j = parseFloat(a(k).find('input[name="max_price"]').val()), 0 > i && (i = 0), i > j && (j = i))
      }
      var l = a("input#lt_hasSearch").length > 0 && "" !== a("input#lt_hasSearch").val() ? 1 : 0,
        m = 1 === l ? a("input#lt_hasSearch").val() : "";
      return lt_Ajax_filter(a, ajaxurl, g, d, e, c, h, x, i, j, l, m, b, "0", f, !0), !1
    }
  }), a("body").on("click", ".lt-filter-by-variations", function() {
    if (!(a(".lt-has-filter-ajax").length < 1)) {
      var b = a(".current-cat > .lt-filter-by-cat"),
        c = a('select[name="orderby"]').val(),
        d = !1,
        e = null,
        f = "",
        g = "";
      a(b).length && (e = a(b).attr("data-id"), f = a(b).attr("data-taxonomy"), g = a(b).attr("href"));
      var h = [],
        i = [],
        j = !1;
      a(this).hasClass("lt-filter-var-chosen") ? (a(this).parent().removeClass("chosen lt-chosen").show(), a(this).removeClass("lt-filter-var-chosen")) : (a(this).parent().addClass("chosen lt-chosen"), a(this).addClass("lt-filter-var-chosen")), j = !0, j && (h = lt_setVariations(a, h, i));
      var k = null,
        l = null;
      if ("1" === x) {
        var m = a(".price_slider").parents("form");
        a(m).length && (k = parseFloat(a(m).find('input[name="min_price"]').val()), l = parseFloat(a(m).find('input[name="max_price"]').val()), 0 > k && (k = 0), k > l && (l = k))
      }
      var n = a("input#lt_hasSearch").length > 0 && "" !== a("input#lt_hasSearch").val() ? 1 : 0,
        o = 1 === n ? a("input#lt_hasSearch").val() : "";
      return lt_Ajax_filter(a, ajaxurl, g, d, e, c, h, x, k, l, n, o, b, "0", f, !0), !1
    }
  });
  var C = a.cookie("gridcookie");
  if (C && ("grid" == C ? (a("ul.products").removeClass("list"), a("ul.products").hasClass("grid") || a("ul.products").addClass("grid"), a(".productList").removeClass("active"), a(".productGrid").hasClass("active") || a(".productGrid").addClass("active")) : (a("ul.products").removeClass("grid"), a("ul.products").hasClass("list") || a("ul.products").addClass("list"), a(".productGrid").removeClass("active"), a(".productList").hasClass("active") || a(".productList").addClass("active"))), a("body").on("click", ".lt-change-layout", function() {
      return a(this).hasClass("active") ? !1 : void(a(this).hasClass("productGrid") ? (a.cookie("gridcookie", "grid", {
        path: "/"
      }), a("ul.products").removeClass("list").addClass("grid"), a(".productList").removeClass("active"), a(".productGrid").addClass("active")) : (a.cookie("gridcookie", "list", {
        path: "/"
      }), a("ul.products").removeClass("grid").addClass("list"), a(".productList").addClass("active"), a(".productGrid").removeClass("active")))
    }), a("body").on("click", ".lt_logout_menu a", function() {
      a('input[name="lt_logout_menu"]').length && (window.location.href = a('input[name="lt_logout_menu"]').val())
    }), a("body").on("click", ".lt_show_manual > a", function() {
      var b = a(this),
        c = a(b).attr("data-show"),
        d = a(b).parent();
      "1" === c ? (a(d).parent().find(".lt-show-less").each(function() {
        a(this).slideDown(200)
      }), setTimeout(function() {
        a(b).animate({
          left: "10%"
        }, 250)
      }, 250), setTimeout(function() {
        a(b).animate({
          left: "-100%"
        }, 350), a(d).find(".lt-hidden").animate({
          left: "0"
        }, 350)
      }, 500)) : (a(d).parent().find(".lt-show-less").each(function() {
        a(this).hasClass("lt-chosen") || a(this).slideUp(200)
      }), setTimeout(function() {
        a(b).animate({
          left: "10%"
        }, 250)
      }, 250), setTimeout(function() {
        a(b).animate({
          left: "-100%"
        }, 350), a(d).find(".lt-show").animate({
          left: "0"
        }, 350)
      }, 500))
    }), a(".product-item p.name a").length && subStringName(a), a(".lt-login-register-ajax").length > 0 && a("#lt-login-register-form").length > 0 && (a("body").on("click", ".lt-login-register-ajax", function() {
      return "1" === a(this).attr("data-enable") ? (a(".mobile-menu a.mobile_toggle").click(), a(".black-window").fadeIn(200).addClass("log-window"), a(".lt-login-register-warper").show().animate({
        top: "5%"
      }, 500), !1) : void 0
    }), a("body").on("click", ".lt-switch-register", function() {
      a("#lt-login-register-form .lt-message").html(""), a(".lt_register-form").show(), a(".lt_login-form").hide()
    }), a("body").on("click", ".lt-switch-login", function() {
      a("#lt-login-register-form .lt-message").html(""), a(".lt_register-form").hide(), a(".lt_login-form").show()
    }), a("body").on("click", '.lt_login-form input[type="submit"][name="lt_login"]', function() {
      var b = a(this).parents("form.login"),
        c = a(b).serializeArray();
      return a.ajax({
        url: ajaxurl,
        type: "post",
        dataType: "json",
        data: {
          action: "lt_process_login",
          data: c,
          login: !0
        },
        beforeSend: function() {
          a("#lt-login-register-form #lt_customer_login").css({
            opacity: .3
          }), a("#lt-login-register-form #lt_customer_login").after('<div class="please-wait type2"></div>')
        },
        success: function(b) {
          a("#lt-login-register-form #lt_customer_login").css({
            opacity: 1
          }), a(".please-wait").remove();
          var c = "0" === b.error ? "lt-success" : "lt-error";
          a("#lt-login-register-form .lt-message").html('<h4 class="' + c + '">' + b.mess + "</h4>"), "0" === b.error ? (a("#lt-login-register-form .lt-form-content").remove(), window.location.href = b.redirect) : setTimeout(function() {
            window.location.reload()
          }, 2e3)
        }
      }), !1
    }), a("body").on("click", '.lt_register-form input[type="submit"][name="lt_register"]', function() {
      var b = a(this).parents("form.register"),
        c = a(b).serializeArray();
      return a.ajax({
        url: ajaxurl,
        type: "post",
        dataType: "json",
        data: {
          action: "lt_process_register",
          data: c,
          register: !0
        },
        beforeSend: function() {
          a("#lt-login-register-form #lt_customer_login").css({
            opacity: .3
          }), a("#lt-login-register-form #lt_customer_login").after('<div class="please-wait type2"></div>')
        },
        success: function(b) {
          a("#lt-login-register-form #lt_customer_login").css({
            opacity: 1
          }), a(".please-wait").remove();
          var c = "0" === b.error ? "lt-success" : "lt-error";
          a("#lt-login-register-form .lt-message").html('<h4 class="' + c + '">' + b.mess + "</h4>"), "0" === b.error ? (a("#lt-login-register-form .lt-form-content").remove(), window.location.href = b.redirect) : setTimeout(function() {
            window.location.reload()
          }, 2e3)
        }
      }), !1
    })), loadHeightDeal(a, !1), a(window).scroll(function() {
      loadHeightDeal(a, !1)
    }).resize(function() {
      loadHeightDeal(a, !0)
    }), a(".lt_load_ajax").length > 0) {
    var D = {};
    a(".lt_load_ajax").each(function() {
      var b = a(this),
        c = a(b).parent(),
        d = a(b).attr("data-id");
      (!a(c).hasClass("lt-panel") || a(c).hasClass("active")) && (D["ajax_lt_sc_" + d] = a(b).find(".lt-shortcode-content").text())
    }), D && a.ajax({
      url: ajaxurl,
      type: "post",
      dataType: "json",
      data: {
        action: "lt_load_ajax",
        shortcode: D,
        lt_load_ajax: "1"
      },
      beforeSend: function() {},
      success: function(b) {
        a("#yith-wcwl-popup-message").length < 1 && a("body").prepend('<div id="yith-wcwl-popup-message" style="display: none;"><div id="yith-wcwl-message"></div></div>'), a(".lt_load_ajax").each(function() {
          var c = a(this);
          void 0 !== b["ajax_lt_sc_" + a(c).attr("data-id")] && a(c).replaceWith(b["ajax_lt_sc_" + a(c).attr("data-id")]).hide().fadeIn(200)
        }), a(".please-wait").length && a(".please-wait").remove(), loadingCarousel(a), loadingSCCarosel(a), loadCountDown(a), loadToltip(a), a(".lt-products-deal").length > 0 && loadHeightDeal(a, !1), reponseCarousel(a)
      }
    })
  }
  a("body").on("click", ".lt-nav-icon-slider", function() {
    var b = a(this),
      c = a(b).parents(".lt-nav-carousel-wrap"),
      d = a(b).attr("data-do"),
      e = a(c).attr("data-id");
    if (1 === a(e).length) switch (d) {
      case "next":
        a(e).find(".owl-nav .owl-next").click();
        break;
      case "prev":
        a(e).find(".owl-nav .owl-prev").click()
    }
  })
});

! function(a, b) {
  "use strict";

  function c() {
    if (!e) {
      e = !0;
      var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
        h = !!navigator.userAgent.match(/Trident.*rv:11\./),
        i = b.querySelectorAll("iframe.wp-embedded-content");
      for (c = 0; c < i.length; c++)
        if (d = i[c], !d.getAttribute("data-secret")) {
          if (f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f), g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
        } else;
    }
  }
  var d = !1,
    e = !1;
  if (b.querySelector)
    if (a.addEventListener) d = !0;
  if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
    if (a.wp.receiveEmbedMessage = function(c) {
        var d = c.data;
        if (d.secret || d.message || d.value)
          if (!/[^a-zA-Z0-9]/.test(d.secret)) {
            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
              k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
            for (e = 0; e < k.length; e++) k[e].style.display = "none";
            for (e = 0; e < j.length; e++)
              if (f = j[e], c.source === f.contentWindow) {
                if (f.removeAttribute("style"), "height" === d.message) {
                  if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                  else if (200 > ~~g) g = 200;
                  f.height = g
                }
                if ("link" === d.message)
                  if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                    if (b.activeElement === f) a.top.location.href = d.value
              } else;
          }
      }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);

jQuery(document).ready(function(b) {
  function l() {
    h.off("change");
    h = b('.wishlist_table tbody input[type="checkbox"]');
    "undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox();
    k();
    m()
  }

  function t() {
    var a = b(".woocommerce-message");
    0 == a.length ? b("#yith-wcwl-form").prepend(yith_wcwl_l10n.labels.added_to_cart_message) : a.fadeOut(300, function() {
      b(this).replaceWith(yith_wcwl_l10n.labels.added_to_cart_message).fadeIn()
    })
  }

  function u(a) {
    var c = a.data("product-id"),
      d = b(".add-to-wishlist-" + c),
      c = {
        add_to_wishlist: c,
        product_type: a.data("product-type"),
        action: yith_wcwl_l10n.actions.add_to_wishlist_action
      };
    if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
      var e = a.parents(".yith-wcwl-popup-footer").prev(".yith-wcwl-popup-content"),
        f = e.find(".wishlist-select"),
        g = e.find(".wishlist-name"),
        e = e.find(".wishlist-visibility");
      c.wishlist_id = f.val();
      c.wishlist_name = g.val();
      c.wishlist_visibility = e.val()
    }
    q() ? b.ajax({
        type: "POST",
        url: yith_wcwl_l10n.ajax_url,
        data: c,
        dataType: "json",
        beforeSend: function() {
          a.siblings(".ajax-loading").css("visibility",
            "visible")
        },
        complete: function() {
          a.siblings(".ajax-loading").css("visibility", "hidden")
        },
        success: function(a) {
          var c = b("#yith-wcwl-popup-message"),
            e = a.result,
            f = a.message;
          if (yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in) {
            var g = b("select.wishlist-select");
            "undefined" != typeof b.prettyPhoto && "undefined" != typeof b.prettyPhoto.close && b.prettyPhoto.close();
            g.each(function(d) {
              d = b(this);
              var c = d.find("option"),
                c = c.slice(1, c.length - 1);
              c.remove();
              if ("undefined" != typeof a.user_wishlists)
                for (c in c =
                  0, a.user_wishlists) "1" != a.user_wishlists[c].is_default && b("<option>").val(a.user_wishlists[c].ID).html(a.user_wishlists[c].wishlist_name).insertBefore(d.find("option:last-child"))
            })
          }
          b("#yith-wcwl-message").html(f);
          c.css("margin-left", "-" + b(c).width() + "px").fadeIn();
          window.setTimeout(function() {
            c.fadeOut()
          }, 2E3);
          "true" == e ? ((!yith_wcwl_l10n.multi_wishlist || !yith_wcwl_l10n.is_user_logged_in || yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in && yith_wcwl_l10n.hide_add_button) && d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"),
            d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href", a.wishlist_url), d.find(".yith-wcwl-wishlistaddedbrowse").show().removeClass("hide").addClass("show").find("a").attr("href", a.wishlist_url)) : "exists" == e ? ((!yith_wcwl_l10n.multi_wishlist || !yith_wcwl_l10n.is_user_logged_in || yith_wcwl_l10n.multi_wishlist && yith_wcwl_l10n.is_user_logged_in && yith_wcwl_l10n.hide_add_button) && d.find(".yith-wcwl-add-button").hide().removeClass("show").addClass("hide"),
            d.find(".yith-wcwl-wishlistexistsbrowse").show().removeClass("hide").addClass("show").find("a").attr("href", a.wishlist_url), d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide").find("a").attr("href", a.wishlist_url)) : (d.find(".yith-wcwl-add-button").show().removeClass("hide").addClass("show"), d.find(".yith-wcwl-wishlistexistsbrowse").hide().removeClass("show").addClass("hide"), d.find(".yith-wcwl-wishlistaddedbrowse").hide().removeClass("show").addClass("hide"));
          b("body").trigger("added_to_wishlist")
        }
      }) :
      alert(yith_wcwl_l10n.labels.cookie_disabled)
  }

  function v(a) {
    var c = a.parents(".cart.wishlist_table"),
      d = c.data("pagination"),
      e = c.data("per-page"),
      f = c.data("page");
    a = a.parents("[data-row-id]");
    c.find(".pagination-row");
    a = a.data("row-id");
    var g = c.data("id"),
      n = c.data("token"),
      d = {
        action: yith_wcwl_l10n.actions.remove_from_wishlist_action,
        remove_from_wishlist: a,
        pagination: d,
        per_page: e,
        current_page: f,
        wishlist_id: g,
        wishlist_token: n
      };
    b("#yith-wcwl-message").html("&nbsp;");
    "undefined" != typeof b.fn.block && c.fadeTo("400",
      "0.6").block({
      message: null,
      overlayCSS: {
        background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
        backgroundSize: "16px 16px",
        opacity: .6
      }
    });
    b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + " #yith-wcwl-form", d, function() {
      "undefined" != typeof b.fn.unblock && c.stop(!0).css("opacity", "1").unblock();
      l();
      b("body").trigger("removed_from_wishlist")
    })
  }

  function w(a, c) {
    var d = a.data("product-id"),
      e = b(document).find(".cart.wishlist_table"),
      f = e.data("pagination"),
      g = e.data("per-page"),
      n = e.data("id"),
      h = e.data("token"),
      d = {
        action: yith_wcwl_l10n.actions.reload_wishlist_and_adding_elem_action,
        pagination: f,
        per_page: g,
        wishlist_id: n,
        wishlist_token: h,
        add_to_wishlist: d,
        product_type: a.data("product-type")
      };
    q() ? b.ajax({
      type: "POST",
      url: yith_wcwl_l10n.ajax_url,
      data: d,
      dataType: "html",
      beforeSend: function() {
        "undefined" != typeof b.fn.block && e.fadeTo("400", "0.6").block({
          message: null,
          overlayCSS: {
            background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
            backgroundSize: "16px 16px",
            opacity: .6
          }
        })
      },
      success: function(a) {
        a = b(a).find("#yith-wcwl-form");
        c.replaceWith(a);
        l()
      }
    }) : alert(yith_wcwl_l10n.labels.cookie_disabled)
  }

  function x(a) {
    var c = a.parents(".cart.wishlist_table"),
      d = c.data("token"),
      e = c.data("id"),
      f = a.parents("[data-row-id]").data("row-id");
    a = a.val();
    var g = c.data("pagination"),
      h = c.data("per-page"),
      k = c.data("page"),
      d = {
        action: yith_wcwl_l10n.actions.move_to_another_wishlist_action,
        wishlist_token: d,
        wishlist_id: e,
        destination_wishlist_token: a,
        item_id: f,
        pagination: g,
        per_page: h,
        current_page: k
      };
    "" != a && ("undefined" != typeof b.fn.block && c.fadeTo("400", "0.6").block({
      message: null,
      overlayCSS: {
        background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
        backgroundSize: "16px 16px",
        opacity: .6
      }
    }), b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + " #yith-wcwl-form", d, function() {
      "undefined" != typeof b.fn.unblock && c.stop(!0).css("opacity", "1").unblock();
      l();
      b("body").trigger("moved_to_another_wishlist")
    }))
  }

  function r(a) {
    var c = b(this);
    a.preventDefault();
    c.parents(".wishlist-title").next().show();
    c.parents(".wishlist-title").hide()
  }

  function y(a) {
    var c = b(this);
    a.preventDefault();
    c.parents(".hidden-title-form").hide();
    c.parents(".hidden-title-form").prev().show()
  }

  function q() {
    if (navigator.cookieEnabled) return !0;
    document.cookie = "cookietest=1";
    var a = -1 != document.cookie.indexOf("cookietest=");
    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    return a
  }

  function z() {
    if (0 != b(".yith-wcwl-add-to-wishlist").length && 0 == b("#yith-wcwl-popup-message").length) {
      var a = b("<div>").attr("id",
          "yith-wcwl-message"),
        a = b("<div>").attr("id", "yith-wcwl-popup-message").html(a).hide();
      b("body").prepend(a)
    }
  }

  function k() {
    h.on("change", function() {
      var a = "",
        c = b(this).parents(".cart.wishlist_table"),
        d = c.data("id"),
        c = c.data("token"),
        e = document.URL;
      h.filter(":checked").each(function() {
        var c = b(this);
        a += 0 != a.length ? "," : "";
        a += c.parents("[data-row-id]").data("row-id")
      });
      e = p(e, "wishlist_products_to_add_to_cart", a);
      e = p(e, "wishlist_token", c);
      e = p(e, "wishlist_id", d);
      b("#custom_add_to_cart").attr("href", e)
    })
  }

  function m() {
    "undefined" !=
    typeof b.prettyPhoto && b('a[data-rel^="prettyPhoto[add_to_wishlist_"]').add('a[data-rel="prettyPhoto[ask_an_estimate]"]').unbind("click").prettyPhoto({
      hook: "data-rel",
      social_tools: !1,
      theme: "pp_woocommerce",
      horizontal_padding: 20,
      opacity: .8,
      deeplinking: !1
    })
  }

  function p(a, b, d) {
    d = b + "=" + d;
    a = a.replace(new RegExp("(&|\\?)" + b + "=[^&]*"), "$1" + d); - 1 < a.indexOf(b + "=") || (a = -1 < a.indexOf("?") ? a + ("&" + d) : a + ("?" + d));
    return a
  }
  var A = "undefined" !== typeof wc_add_to_cart_params && null !== wc_add_to_cart_params ? wc_add_to_cart_params.cart_redirect_after_add :
    "",
    h = b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
  b(document).on("yith_wcwl_init", function() {
    var a = b(this),
      c = b('.wishlist_table tbody input[type="checkbox"]:not(:disabled)');
    a.on("click", ".add_to_wishlist", function(a) {
      var c = b(this);
      a.preventDefault();
      u(c);
      return !1
    });
    a.on("click", ".remove_from_wishlist", function(a) {
      var c = b(this);
      a.preventDefault();
      v(c);
      return !1
    });
    a.on("adding_to_cart", "body", function(a, b, c) {
      "undefined" != typeof b && "undefined" != typeof c && 0 != b.closest(".wishlist_table").length &&
        (c.remove_from_wishlist_after_add_to_cart = b.closest("[data-row-id]").data("row-id"), c.wishlist_id = b.closest(".wishlist_table").data("id"), wc_add_to_cart_params.cart_redirect_after_add = yith_wcwl_l10n.redirect_to_cart)
    });
    a.on("added_to_cart", "body", function(a) {
      wc_add_to_cart_params.cart_redirect_after_add = A;
      a = b(".wishlist_table");
      a.find(".added").removeClass("added");
      a.find(".added_to_cart").remove()
    });
    a.on("added_to_cart", "body", t);
    a.on("cart_page_refreshed", "body", l);
    a.on("click", ".show-title-form",
      r);
    a.on("click", ".wishlist-title-with-form h2", r);
    a.on("click", ".hide-title-form", y);
    a.on("change", ".change-wishlist", function(a) {
      a = b(this);
      x(a);
      return !1
    });
    a.on("change", ".yith-wcwl-popup-content .wishlist-select", function(a) {
      a = b(this);
      "new" == a.val() ? a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").css("display", "table-row") : a.parents(".yith-wcwl-first-row").next(".yith-wcwl-second-row").hide()
    });
    a.on("change", "#bulk_add_to_cart", function() {
      b(this).is(":checked") ? c.attr("checked", "checked").change() :
        c.removeAttr("checked").change()
    });
    a.on("click", "#custom_add_to_cart", function(a) {
      var d = b(this),
        f = d.parents(".cart.wishlist_table");
      yith_wcwl_l10n.ajax_add_to_cart_enabled && (a.preventDefault(), "undefined" != typeof b.fn.block && f.fadeTo("400", "0.6").block({
        message: null,
        overlayCSS: {
          background: "transparent url(" + yith_wcwl_l10n.ajax_loader_url + ") no-repeat center",
          backgroundSize: "16px 16px",
          opacity: .6
        }
      }), b("#yith-wcwl-form").load(yith_wcwl_l10n.ajax_url + d.attr("href") + " #yith-wcwl-form", {
          action: yith_wcwl_l10n.actions.bulk_add_to_cart_action
        },
        function() {
          "undefined" != typeof b.fn.unblock && f.stop(!0).css("opacity", "1").unblock();
          c.off("change");
          c = b('.wishlist_table tbody input[type="checkbox"]');
          "undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox();
          k();
          m()
        }))
    });
    a.on("click", ".yith-wfbt-add-wishlist", function(a) {
      a.preventDefault();
      a = b(this);
      var c = b("#yith-wcwl-form");
      b("html, body").animate({
        scrollTop: c.offset().top
      }, 500);
      w(a, c)
    });
    z();
    k();
    m()
  }).trigger("yith_wcwl_init");
  "undefined" != typeof b.fn.selectBox && b("select.selectBox").selectBox()
});

/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});
(function($) {

	'use strict';

	if (typeof _wpcf7 == 'undefined' || _wpcf7 === null) {
		return;
	}

	_wpcf7 = $.extend({
		cached: 0
	}, _wpcf7);

	$.fn.wpcf7InitForm = function() {
		this.ajaxForm({
			beforeSubmit: function(arr, $form, options) {
				$form.wpcf7ClearResponseOutput();
				$form.find('[aria-invalid]').attr('aria-invalid', 'false');
				$form.find('img.ajax-loader').css({ visibility: 'visible' });
				return true;
			},
			beforeSerialize: function($form, options) {
				$form.find('[placeholder].placeheld').each(function(i, n) {
					$(n).val('');
				});
				return true;
			},
			data: { '_wpcf7_is_ajax_call': 1 },
			dataType: 'json',
			success: $.wpcf7AjaxSuccess,
			error: function(xhr, status, error, $form) {
				var e = $('<div class="ajax-error"></div>').text(error.message);
				$form.after(e);
			}
		});

		if (_wpcf7.cached) {
			this.wpcf7OnloadRefill();
		}

		this.wpcf7ToggleSubmit();

		this.find('.wpcf7-submit').wpcf7AjaxLoader();

		this.find('.wpcf7-acceptance').click(function() {
			$(this).closest('form').wpcf7ToggleSubmit();
		});

		this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();

		this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();

		this.find('[placeholder]').wpcf7Placeholder();

		if (_wpcf7.jqueryUi && ! _wpcf7.supportHtml5.date) {
			this.find('input.wpcf7-date[type="date"]').each(function() {
				$(this).datepicker({
					dateFormat: 'yy-mm-dd',
					minDate: new Date($(this).attr('min')),
					maxDate: new Date($(this).attr('max'))
				});
			});
		}

		if (_wpcf7.jqueryUi && ! _wpcf7.supportHtml5.number) {
			this.find('input.wpcf7-number[type="number"]').each(function() {
				$(this).spinner({
					min: $(this).attr('min'),
					max: $(this).attr('max'),
					step: $(this).attr('step')
				});
			});
		}

		this.find('.wpcf7-character-count').wpcf7CharacterCount();

		this.find('.wpcf7-validates-as-url').change(function() {
			$(this).wpcf7NormalizeUrl();
		});

		this.find('.wpcf7-recaptcha').wpcf7Recaptcha();
	};

	$.wpcf7AjaxSuccess = function(data, status, xhr, $form) {
		if (! $.isPlainObject(data) || $.isEmptyObject(data)) {
			return;
		}

		var $responseOutput = $form.find('div.wpcf7-response-output');

		$form.wpcf7ClearResponseOutput();

		$form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
		$form.removeClass('invalid spam sent failed');

		if (data.captcha) {
			$form.wpcf7RefillCaptcha(data.captcha);
		}

		if (data.quiz) {
			$form.wpcf7RefillQuiz(data.quiz);
		}

		if (data.invalids) {
			$.each(data.invalids, function(i, n) {
				$form.find(n.into).wpcf7NotValidTip(n.message);
				$form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
				$form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
			});

			$responseOutput.addClass('wpcf7-validation-errors');
			$form.addClass('invalid');

			$(data.into).trigger('wpcf7:invalid');
			$(data.into).trigger('invalid.wpcf7'); // deprecated

		} else if (1 == data.spam) {
			$form.find('[name="g-recaptcha-response"]').each(function() {
				if ('' == $(this).val()) {
					var $recaptcha = $(this).closest('.wpcf7-form-control-wrap');
					$recaptcha.wpcf7NotValidTip(_wpcf7.recaptcha.messages.empty);
				}
			});

			$responseOutput.addClass('wpcf7-spam-blocked');
			$form.addClass('spam');

			$(data.into).trigger('wpcf7:spam');
			$(data.into).trigger('spam.wpcf7'); // deprecated

		} else if (1 == data.mailSent) {
			$responseOutput.addClass('wpcf7-mail-sent-ok');
			$form.addClass('sent');

			if (data.onSentOk) {
				$.each(data.onSentOk, function(i, n) { eval(n) });
			}

			$(data.into).trigger('wpcf7:mailsent');
			$(data.into).trigger('mailsent.wpcf7'); // deprecated

		} else {
			$responseOutput.addClass('wpcf7-mail-sent-ng');
			$form.addClass('failed');

			$(data.into).trigger('wpcf7:mailfailed');
			$(data.into).trigger('mailfailed.wpcf7'); // deprecated
		}

		if (data.onSubmit) {
			$.each(data.onSubmit, function(i, n) { eval(n) });
		}

		$(data.into).trigger('wpcf7:submit');
		$(data.into).trigger('submit.wpcf7'); // deprecated

		if (1 == data.mailSent) {
			$form.resetForm();
		}

		$form.find('[placeholder].placeheld').each(function(i, n) {
			$(n).val($(n).attr('placeholder'));
		});

		$responseOutput.append(data.message).slideDown('fast');
		$responseOutput.attr('role', 'alert');

		$.wpcf7UpdateScreenReaderResponse($form, data);
	};

	$.fn.wpcf7ExclusiveCheckbox = function() {
		return this.find('input:checkbox').click(function() {
			var name = $(this).attr('name');
			$(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
		});
	};

	$.fn.wpcf7Placeholder = function() {
		if (_wpcf7.supportHtml5.placeholder) {
			return this;
		}

		return this.each(function() {
			$(this).val($(this).attr('placeholder'));
			$(this).addClass('placeheld');

			$(this).focus(function() {
				if ($(this).hasClass('placeheld'))
					$(this).val('').removeClass('placeheld');
			});

			$(this).blur(function() {
				if ('' == $(this).val()) {
					$(this).val($(this).attr('placeholder'));
					$(this).addClass('placeheld');
				}
			});
		});
	};

	$.fn.wpcf7AjaxLoader = function() {
		return this.each(function() {
			var loader = $('<img class="ajax-loader" />')
				.attr({ src: _wpcf7.loaderUrl, alt: _wpcf7.sending })
				.css('visibility', 'hidden');

			$(this).after(loader);
		});
	};

	$.fn.wpcf7ToggleSubmit = function() {
		return this.each(function() {
			var form = $(this);

			if (this.tagName.toLowerCase() != 'form') {
				form = $(this).find('form').first();
			}

			if (form.hasClass('wpcf7-acceptance-as-validation')) {
				return;
			}

			var submit = form.find('input:submit');
			if (! submit.length) return;

			var acceptances = form.find('input:checkbox.wpcf7-acceptance');
			if (! acceptances.length) return;

			submit.removeAttr('disabled');
			acceptances.each(function(i, n) {
				n = $(n);
				if (n.hasClass('wpcf7-invert') && n.is(':checked')
				|| ! n.hasClass('wpcf7-invert') && ! n.is(':checked')) {
					submit.attr('disabled', 'disabled');
				}
			});
		});
	};

	$.fn.wpcf7ToggleCheckboxFreetext = function() {
		return this.each(function() {
			var $wrap = $(this).closest('.wpcf7-form-control');

			if ($(this).find(':checkbox, :radio').is(':checked')) {
				$(this).find(':input.wpcf7-free-text').prop('disabled', false);
			} else {
				$(this).find(':input.wpcf7-free-text').prop('disabled', true);
			}

			$wrap.find(':checkbox, :radio').change(function() {
				var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
				var $freetext = $(':input.wpcf7-free-text', $wrap);

				if ($cb.is(':checked')) {
					$freetext.prop('disabled', false).focus();
				} else {
					$freetext.prop('disabled', true);
				}
			});
		});
	};

	$.fn.wpcf7CharacterCount = function() {
		return this.each(function() {
			var $count = $(this);
			var name = $count.attr('data-target-name');
			var down = $count.hasClass('down');
			var starting = parseInt($count.attr('data-starting-value'), 10);
			var maximum = parseInt($count.attr('data-maximum-value'), 10);
			var minimum = parseInt($count.attr('data-minimum-value'), 10);

			var updateCount = function($target) {
				var length = $target.val().length;
				var count = down ? starting - length : length;
				$count.attr('data-current-value', count);
				$count.text(count);

				if (maximum && maximum < length) {
					$count.addClass('too-long');
				} else {
					$count.removeClass('too-long');
				}

				if (minimum && length < minimum) {
					$count.addClass('too-short');
				} else {
					$count.removeClass('too-short');
				}
			};

			$count.closest('form').find(':input[name="' + name + '"]').each(function() {
				updateCount($(this));

				$(this).keyup(function() {
					updateCount($(this));
				});
			});
		});
	};

	$.fn.wpcf7NormalizeUrl = function() {
		return this.each(function() {
			var val = $.trim($(this).val());

			if (val && ! val.match(/^[a-z][a-z0-9.+-]*:/i)) { // check the scheme part
				val = val.replace(/^\/+/, '');
				val = 'http://' + val;
			}

			$(this).val(val);
		});
	};

	$.fn.wpcf7NotValidTip = function(message) {
		return this.each(function() {
			var $into = $(this);

			$into.find('span.wpcf7-not-valid-tip').remove();
			$into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');

			if ($into.is('.use-floating-validation-tip *')) {
				$('.wpcf7-not-valid-tip', $into).mouseover(function() {
					$(this).wpcf7FadeOut();
				});

				$(':input', $into).focus(function() {
					$('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
				});
			}
		});
	};

	$.fn.wpcf7FadeOut = function() {
		return this.each(function() {
			$(this).animate({
				opacity: 0
			}, 'fast', function() {
				$(this).css({'z-index': -100});
			});
		});
	};

	$.fn.wpcf7OnloadRefill = function() {
		return this.each(function() {
			var url = $(this).attr('action');

			if (0 < url.indexOf('#')) {
				url = url.substr(0, url.indexOf('#'));
			}

			var id = $(this).find('input[name="_wpcf7"]').val();
			var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();

			$.getJSON(url,
				{ _wpcf7_is_ajax_call: 1, _wpcf7: id, _wpcf7_request_ver: $.now() },
				function(data) {
					if (data && data.captcha) {
						$('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
					}

					if (data && data.quiz) {
						$('#' + unitTag).wpcf7RefillQuiz(data.quiz);
					}
				}
			);
		});
	};

	$.fn.wpcf7RefillCaptcha = function(captcha) {
		return this.each(function() {
			var form = $(this);

			$.each(captcha, function(i, n) {
				form.find(':input[name="' + i + '"]').clearFields();
				form.find('img.wpcf7-captcha-' + i).attr('src', n);
				var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
				form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
			});
		});
	};

	$.fn.wpcf7RefillQuiz = function(quiz) {
		return this.each(function() {
			var form = $(this);

			$.each(quiz, function(i, n) {
				form.find(':input[name="' + i + '"]').clearFields();
				form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
				form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
			});
		});
	};

	$.fn.wpcf7ClearResponseOutput = function() {
		return this.each(function() {
			$(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
			$(this).find('span.wpcf7-not-valid-tip').remove();
			$(this).find('img.ajax-loader').css({ visibility: 'hidden' });
		});
	};

	$.fn.wpcf7Recaptcha = function() {
		return this.each(function() {
			var events = 'wpcf7:spam wpcf7:mailsent wpcf7:mailfailed';
			$(this).closest('div.wpcf7').on(events, function(e) {
				if (recaptchaWidgets && grecaptcha) {
					$.each(recaptchaWidgets, function(index, value) {
						grecaptcha.reset(value);
					});
				}
			});
		});
	};

	$.wpcf7UpdateScreenReaderResponse = function($form, data) {
		$('.wpcf7 .screen-reader-response').html('').attr('role', '');

		if (data.message) {
			var $response = $form.siblings('.screen-reader-response').first();
			$response.append(data.message);

			if (data.invalids) {
				var $invalids = $('<ul></ul>');

				$.each(data.invalids, function(i, n) {
					if (n.idref) {
						var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
					} else {
						var $li = $('<li></li>').append(n.message);
					}

					$invalids.append($li);
				});

				$response.append($invalids);
			}

			$response.attr('role', 'alert').focus();
		}
	};

	$.wpcf7SupportHtml5 = function() {
		var features = {};
		var input = document.createElement('input');

		features.placeholder = 'placeholder' in input;

		var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];

		$.each(inputTypes, function(index, value) {
			input.setAttribute('type', value);
			features[value] = input.type !== 'text';
		});

		return features;
	};

	$(function() {
		_wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
		$('div.wpcf7 > form').wpcf7InitForm();
	});

})(jQuery);

/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
! function() {
  "use strict";

  function a(a) {
    function b(b, d) {
      var f, p, q = b == window,
        r = d && void 0 !== d.message ? d.message : void 0;
      if (d = a.extend({}, a.blockUI.defaults, d || {}), !d.ignoreIfBlocked || !a(b).data("blockUI.isBlocked")) {
        if (d.overlayCSS = a.extend({}, a.blockUI.defaults.overlayCSS, d.overlayCSS || {}), f = a.extend({}, a.blockUI.defaults.css, d.css || {}), d.onOverlayClick && (d.overlayCSS.cursor = "pointer"), p = a.extend({}, a.blockUI.defaults.themedCSS, d.themedCSS || {}), r = void 0 === r ? d.message : r, q && n && c(window, {
            fadeOut: 0
          }), r && "string" != typeof r && (r.parentNode || r.jquery)) {
          var s = r.jquery ? r[0] : r,
            t = {};
          a(b).data("blockUI.history", t), t.el = s, t.parent = s.parentNode, t.display = s.style.display, t.position = s.style.position, t.parent && t.parent.removeChild(s)
        }
        a(b).data("blockUI.onUnblock", d.onUnblock);
        var u, v, w, x, y = d.baseZ;
        u = a(k || d.forceIframe ? '<iframe class="blockUI" style="z-index:' + y++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + d.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), v = a(d.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + y++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + y++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), d.theme && q ? (x = '<div class="blockUI ' + d.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (y + 10) + ';display:none;position:fixed">', d.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (d.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : d.theme ? (x = '<div class="blockUI ' + d.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (y + 10) + ';display:none;position:absolute">', d.title && (x += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (d.title || "&nbsp;") + "</div>"), x += '<div class="ui-widget-content ui-dialog-content"></div>', x += "</div>") : x = q ? '<div class="blockUI ' + d.blockMsgClass + ' blockPage" style="z-index:' + (y + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + d.blockMsgClass + ' blockElement" style="z-index:' + (y + 10) + ';display:none;position:absolute"></div>', w = a(x), r && (d.theme ? (w.css(p), w.addClass("ui-widget-content")) : w.css(f)), d.theme || v.css(d.overlayCSS), v.css("position", q ? "fixed" : "absolute"), (k || d.forceIframe) && u.css("opacity", 0);
        var z = [u, v, w],
          A = a(q ? "body" : b);
        a.each(z, function() {
          this.appendTo(A)
        }), d.theme && d.draggable && a.fn.draggable && w.draggable({
          handle: ".ui-dialog-titlebar",
          cancel: "li"
        });
        var B = m && (!a.support.boxModel || a("object,embed", q ? null : b).length > 0);
        if (l || B) {
          if (q && d.allowBodyStretch && a.support.boxModel && a("html,body").css("height", "100%"), (l || !a.support.boxModel) && !q) var C = i(b, "borderTopWidth"),
            D = i(b, "borderLeftWidth"),
            E = C ? "(0 - " + C + ")" : 0,
            F = D ? "(0 - " + D + ")" : 0;
          a.each(z, function(a, b) {
            var c = b[0].style;
            if (c.position = "absolute", a < 2) q ? c.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + d.quirksmodeOffsetHack + ') + "px"') : c.setExpression("height", 'this.parentNode.offsetHeight + "px"'), q ? c.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : c.setExpression("width", 'this.parentNode.offsetWidth + "px"'), F && c.setExpression("left", F), E && c.setExpression("top", E);
            else if (d.centerY) q && c.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), c.marginTop = 0;
            else if (!d.centerY && q) {
              var e = d.css && d.css.top ? parseInt(d.css.top, 10) : 0,
                f = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + e + ') + "px"';
              c.setExpression("top", f)
            }
          })
        }
        if (r && (d.theme ? w.find(".ui-widget-content").append(r) : w.append(r), (r.jquery || r.nodeType) && a(r).show()), (k || d.forceIframe) && d.showOverlay && u.show(), d.fadeIn) {
          var G = d.onBlock ? d.onBlock : j,
            H = d.showOverlay && !r ? G : j,
            I = r ? G : j;
          d.showOverlay && v._fadeIn(d.fadeIn, H), r && w._fadeIn(d.fadeIn, I)
        } else d.showOverlay && v.show(), r && w.show(), d.onBlock && d.onBlock.bind(w)();
        if (e(1, b, d), q ? (n = w[0], o = a(d.focusableElements, n), d.focusInput && setTimeout(g, 20)) : h(w[0], d.centerX, d.centerY), d.timeout) {
          var J = setTimeout(function() {
            q ? a.unblockUI(d) : a(b).unblock(d)
          }, d.timeout);
          a(b).data("blockUI.timeout", J)
        }
      }
    }

    function c(b, c) {
      var f, g = b == window,
        h = a(b),
        i = h.data("blockUI.history"),
        j = h.data("blockUI.timeout");
      j && (clearTimeout(j), h.removeData("blockUI.timeout")), c = a.extend({}, a.blockUI.defaults, c || {}), e(0, b, c), null === c.onUnblock && (c.onUnblock = h.data("blockUI.onUnblock"), h.removeData("blockUI.onUnblock"));
      var k;
      k = g ? a(document.body).children().filter(".blockUI").add("body > .blockUI") : h.find(">.blockUI"), c.cursorReset && (k.length > 1 && (k[1].style.cursor = c.cursorReset), k.length > 2 && (k[2].style.cursor = c.cursorReset)), g && (n = o = null), c.fadeOut ? (f = k.length, k.stop().fadeOut(c.fadeOut, function() {
        0 === --f && d(k, i, c, b)
      })) : d(k, i, c, b)
    }

    function d(b, c, d, e) {
      var f = a(e);
      if (!f.data("blockUI.isBlocked")) {
        b.each(function(a, b) {
          this.parentNode && this.parentNode.removeChild(this)
        }), c && c.el && (c.el.style.display = c.display, c.el.style.position = c.position, c.el.style.cursor = "default", c.parent && c.parent.appendChild(c.el), f.removeData("blockUI.history")), f.data("blockUI.static") && f.css("position", "static"), "function" == typeof d.onUnblock && d.onUnblock(e, d);
        var g = a(document.body),
          h = g.width(),
          i = g[0].style.width;
        g.width(h - 1).width(h), g[0].style.width = i
      }
    }

    function e(b, c, d) {
      var e = c == window,
        g = a(c);
      if ((b || (!e || n) && (e || g.data("blockUI.isBlocked"))) && (g.data("blockUI.isBlocked", b), e && d.bindEvents && (!b || d.showOverlay))) {
        var h = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
        b ? a(document).bind(h, d, f) : a(document).unbind(h, f)
      }
    }

    function f(b) {
      if ("keydown" === b.type && b.keyCode && 9 == b.keyCode && n && b.data.constrainTabKey) {
        var c = o,
          d = !b.shiftKey && b.target === c[c.length - 1],
          e = b.shiftKey && b.target === c[0];
        if (d || e) return setTimeout(function() {
          g(e)
        }, 10), !1
      }
      var f = b.data,
        h = a(b.target);
      return h.hasClass("blockOverlay") && f.onOverlayClick && f.onOverlayClick(b), h.parents("div." + f.blockMsgClass).length > 0 || 0 === h.parents().children().filter("div.blockUI").length
    }

    function g(a) {
      if (o) {
        var b = o[a === !0 ? o.length - 1 : 0];
        b && b.focus()
      }
    }

    function h(a, b, c) {
      var d = a.parentNode,
        e = a.style,
        f = (d.offsetWidth - a.offsetWidth) / 2 - i(d, "borderLeftWidth"),
        g = (d.offsetHeight - a.offsetHeight) / 2 - i(d, "borderTopWidth");
      b && (e.left = f > 0 ? f + "px" : "0"), c && (e.top = g > 0 ? g + "px" : "0")
    }

    function i(b, c) {
      return parseInt(a.css(b, c), 10) || 0
    }
    a.fn._fadeIn = a.fn.fadeIn;
    var j = a.noop || function() {},
      k = /MSIE/.test(navigator.userAgent),
      l = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
      m = (document.documentMode || 0, a.isFunction(document.createElement("div").style.setExpression));
    a.blockUI = function(a) {
      b(window, a)
    }, a.unblockUI = function(a) {
      c(window, a)
    }, a.growlUI = function(b, c, d, e) {
      var f = a('<div class="growlUI"></div>');
      b && f.append("<h1>" + b + "</h1>"), c && f.append("<h2>" + c + "</h2>"), void 0 === d && (d = 3e3);
      var g = function(b) {
        b = b || {}, a.blockUI({
          message: f,
          fadeIn: "undefined" != typeof b.fadeIn ? b.fadeIn : 700,
          fadeOut: "undefined" != typeof b.fadeOut ? b.fadeOut : 1e3,
          timeout: "undefined" != typeof b.timeout ? b.timeout : d,
          centerY: !1,
          showOverlay: !1,
          onUnblock: e,
          css: a.blockUI.defaults.growlCSS
        })
      };
      g();
      f.css("opacity");
      f.mouseover(function() {
        g({
          fadeIn: 0,
          timeout: 3e4
        });
        var b = a(".blockMsg");
        b.stop(), b.fadeTo(300, 1)
      }).mouseout(function() {
        a(".blockMsg").fadeOut(1e3)
      })
    }, a.fn.block = function(c) {
      if (this[0] === window) return a.blockUI(c), this;
      var d = a.extend({}, a.blockUI.defaults, c || {});
      return this.each(function() {
        var b = a(this);
        d.ignoreIfBlocked && b.data("blockUI.isBlocked") || b.unblock({
          fadeOut: 0
        })
      }), this.each(function() {
        "static" == a.css(this, "position") && (this.style.position = "relative", a(this).data("blockUI.static", !0)), this.style.zoom = 1, b(this, c)
      })
    }, a.fn.unblock = function(b) {
      return this[0] === window ? (a.unblockUI(b), this) : this.each(function() {
        c(this, b)
      })
    }, a.blockUI.version = 2.7, a.blockUI.defaults = {
      message: "<h1>Please wait...</h1>",
      title: null,
      draggable: !0,
      theme: !1,
      css: {
        padding: 0,
        margin: 0,
        width: "30%",
        top: "40%",
        left: "35%",
        textAlign: "center",
        color: "#000",
        border: "3px solid #aaa",
        backgroundColor: "#fff",
        cursor: "wait"
      },
      themedCSS: {
        width: "30%",
        top: "40%",
        left: "35%"
      },
      overlayCSS: {
        backgroundColor: "#000",
        opacity: .6,
        cursor: "wait"
      },
      cursorReset: "default",
      growlCSS: {
        width: "350px",
        top: "10px",
        left: "",
        right: "10px",
        border: "none",
        padding: "5px",
        opacity: .6,
        cursor: "default",
        color: "#fff",
        backgroundColor: "#000",
        "-webkit-border-radius": "10px",
        "-moz-border-radius": "10px",
        "border-radius": "10px"
      },
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
      forceIframe: !1,
      baseZ: 1e3,
      centerX: !0,
      centerY: !0,
      allowBodyStretch: !0,
      bindEvents: !0,
      constrainTabKey: !0,
      fadeIn: 200,
      fadeOut: 400,
      timeout: 0,
      showOverlay: !0,
      focusInput: !0,
      focusableElements: ":input:enabled:visible",
      onBlock: null,
      onUnblock: null,
      onOverlayClick: null,
      quirksmodeOffsetHack: 4,
      blockMsgClass: "blockMsg",
      ignoreIfBlocked: !1
    };
    var n = null,
      o = []
  }
  "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
}();

/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(a) {
  var b = !1;
  if ("function" == typeof define && define.amd && (define(a), b = !0), "object" == typeof exports && (module.exports = a(), b = !0), !b) {
    var c = window.Cookies,
      d = window.Cookies = a();
    d.noConflict = function() {
      return window.Cookies = c, d
    }
  }
}(function() {
  function a() {
    for (var a = 0, b = {}; a < arguments.length; a++) {
      var c = arguments[a];
      for (var d in c) b[d] = c[d]
    }
    return b
  }

  function b(c) {
    function d(b, e, f) {
      var g;
      if ("undefined" != typeof document) {
        if (arguments.length > 1) {
          if (f = a({
              path: "/"
            }, d.defaults, f), "number" == typeof f.expires) {
            var h = new Date;
            h.setMilliseconds(h.getMilliseconds() + 864e5 * f.expires), f.expires = h
          }
          try {
            g = JSON.stringify(e), /^[\{\[]/.test(g) && (e = g)
          } catch (a) {}
          return e = c.write ? c.write(e, b) : encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), b = encodeURIComponent(String(b)), b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), b = b.replace(/[\(\)]/g, escape), document.cookie = [b, "=", e, f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
        }
        b || (g = {});
        for (var i = document.cookie ? document.cookie.split("; ") : [], j = /(%[0-9A-Z]{2})+/g, k = 0; k < i.length; k++) {
          var l = i[k].split("="),
            m = l.slice(1).join("=");
          '"' === m.charAt(0) && (m = m.slice(1, -1));
          try {
            var n = l[0].replace(j, decodeURIComponent);
            if (m = c.read ? c.read(m, n) : c(m, n) || m.replace(j, decodeURIComponent), this.json) try {
              m = JSON.parse(m)
            } catch (a) {}
            if (b === n) {
              g = m;
              break
            }
            b || (g[n] = m)
          } catch (a) {}
        }
        return g
      }
    }
    return d.set = d, d.get = function(a) {
      return d.call(d, a)
    }, d.getJSON = function() {
      return d.apply({
        json: !0
      }, [].slice.call(arguments))
    }, d.defaults = {}, d.remove = function(b, c) {
      d(b, "", a(c, {
        expires: -1
      }))
    }, d.withConverter = b, d
  }
  return b(function() {})
});

jQuery(function(a) {
  a(".woocommerce-ordering").on("change", "select.orderby", function() {
    a(this).closest("form").submit()
  }), a("input.qty:not(.product-quantity input.qty)").each(function() {
    var b = parseFloat(a(this).attr("min"));
    b >= 0 && parseFloat(a(this).val()) < b && a(this).val(b)
  }), jQuery(".woocommerce-store-notice__dismiss-link").click(function() {
    Cookies.set("store_notice", "hidden", {
      path: "/"
    }), jQuery(".woocommerce-store-notice").hide()
  }), "hidden" === Cookies.get("store_notice") ? jQuery(".woocommerce-store-notice").hide() : jQuery(".woocommerce-store-notice").show()
});

jQuery(document).ready(function(a) {
  function b(a, b) {
    a = escape(a), b = escape(b);
    var c = document.location.search,
      d = a + "=" + b,
      e = new RegExp("(&|\\?)" + a + "=[^&]*");
    return c = c.replace(e, "$1" + d), RegExp.$1 || (c += (c.length > 0 ? "&" : "?") + d), c
  }
  a(document).on("click", ".product a.compare:not(.added)", function(b) {
    b.preventDefault();
    var c = a(this),
      d = {
        action: yith_woocompare.actionadd,
        id: c.data("product_id"),
        context: "frontend"
      },
      e = a(".yith-woocompare-widget ul.products-list");
    "undefined" != typeof a.fn.block && (c.block({
      message: null,
      overlayCSS: {
        background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
        backgroundSize: "16px 16px",
        opacity: .6
      }
    }), e.block({
      message: null,
      overlayCSS: {
        background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
        backgroundSize: "16px 16px",
        opacity: .6
      }
    })), a.ajax({
      type: "post",
      url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionadd),
      data: d,
      dataType: "json",
      success: function(b) {
        "undefined" != typeof a.fn.block && (c.unblock(), e.unblock()), c.addClass("added").attr("href", b.table_url).text(yith_woocompare.added_label), e.html(b.widget_table), "yes" == yith_woocompare.auto_open && a("body").trigger("yith_woocompare_open_popup", {
          response: b.table_url,
          button: c
        })
      }
    })
  }), a(document).on("click", ".product a.compare.added", function(b) {
    b.preventDefault();
    var c = this.href;
    "undefined" != typeof c && a("body").trigger("yith_woocompare_open_popup", {
      response: c,
      button: a(this)
    })
  }), a("body").on("yith_woocompare_open_popup", function(b, c) {
    var d = c.response;
    if (a(window).width() >= 768) a.colorbox({
      href: d,
      iframe: !0,
      width: "90%",
      height: "90%",
      className: "yith_woocompare_colorbox",
      onClosed: function() {
        var b = a(".yith-woocompare-widget ul.products-list"),
          c = {
            action: yith_woocompare.actionreload,
            context: "frontend"
          };
        "undefined" != typeof a.fn.block && b.block({
          message: null,
          overlayCSS: {
            background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
            backgroundSize: "16px 16px",
            opacity: .6
          }
        }), a.ajax({
          type: "post",
          url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionreload),
          data: c,
          success: function(c) {
            "undefined" != typeof a.fn.block && b.unblock().html(c), b.html(c)
          }
        })
      }
    }), a(window).resize(function() {
      a.colorbox.resize({
        width: "90%",
        height: "90%"
      })
    });
    else {
      var e = d.split("?"),
        f = "iframe";
      if (e.length >= 2) {
        for (var g = encodeURIComponent(f) + "=", h = e[1].split(/[&;]/g), i = h.length; i-- > 0;) h[i].lastIndexOf(g, 0) !== -1 && h.splice(i, 1);
        d = e[0] + "?" + h.join("&")
      }
      window.open(d, yith_woocompare.table_title)
    }
  }), a(document).on("click", ".remove a", function(b) {
    b.preventDefault();
    var c = a(this),
      d = {
        action: yith_woocompare.actionremove,
        id: c.data("product_id"),
        context: "frontend"
      };
    a("td.product_" + d.id + ", th.product_" + d.id);
    "undefined" != typeof a.fn.block && c.block({
      message: null,
      overlayCSS: {
        background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
        backgroundSize: "16px 16px",
        opacity: .6
      }
    }), a.ajax({
      type: "post",
      url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionremove),
      data: d,
      dataType: "html",
      success: function(b) {
        var d = a(b).filter("table.compare-list");
        a("body > table.compare-list").replaceWith(d), a('.compare[data-product_id="' + c.data("product_id") + '"]', window.parent.document).removeClass("added").html(yith_woocompare.button_text), a(window).trigger("yith_woocompare_product_removed")
      }
    })
  }), a(".yith-woocompare-open a, a.yith-woocompare-open").on("click", function(c) {
    c.preventDefault(), a("body").trigger("yith_woocompare_open_popup", {
      response: b("action", yith_woocompare.actionview) + "&iframe=true"
    })
  }), a(".yith-woocompare-widget").on("click", "a.compare", function(b) {
    b.preventDefault(), a("body").trigger("yith_woocompare_open_popup", {
      response: a(this).attr("href")
    })
  }).on("click", "li a.remove, a.clear-all", function(b) {
    b.preventDefault();
    var c = a(".yith-woocompare-widget .products-list").data("lang"),
      d = a(this),
      e = d.data("product_id"),
      f = {
        action: yith_woocompare.actionremove,
        id: e,
        context: "frontend",
        responseType: "product_list",
        lang: c
      },
      g = d.parents(".yith-woocompare-widget").find("ul.products-list");
    "undefined" != typeof a.fn.block && g.block({
      message: null,
      overlayCSS: {
        background: "#fff url(" + yith_woocompare.loader + ") no-repeat center",
        backgroundSize: "16px 16px",
        opacity: .6
      }
    }), a.ajax({
      type: "post",
      url: yith_woocompare.ajaxurl.toString().replace("%%endpoint%%", yith_woocompare.actionremove),
      data: f,
      dataType: "html",
      success: function(b) {
        "all" == e ? a(".compare.added").removeClass("added").html(yith_woocompare.button_text) : a('.compare[data-product_id="' + e + '"]').removeClass("added").html(yith_woocompare.button_text), g.html(b), "undefined" != typeof a.fn.block && g.unblock()
      }
    })
  })
});

/**
 * jQuery SelectBox
 *
 * v1.2.0
 * github.com/marcj/jquery-selectBox
 */
(function(a){var b=this.SelectBox=function(c,d){if(c instanceof jQuery){if(c.length>0){c=c[0]}else{return}}this.typeTimer=null;this.typeSearch="";this.isMac=navigator.platform.match(/mac/i);d="object"===typeof d?d:{};this.selectElement=c;if(!d.mobile&&navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)){return false}if("select"!==c.tagName.toLowerCase()){return false}this.init(d)};b.prototype.version="1.2.0";b.prototype.init=function(o){var j=a(this.selectElement);if(j.data("selectBox-control")){return false}var f=a('<a class="selectBox" />'),h=j.attr("multiple")||parseInt(j.attr("size"))>1,d=o||{},c=parseInt(j.prop("tabindex"))||0,m=this;f.width(j.outerWidth()).addClass(j.attr("class")).attr("title",j.attr("title")||"").attr("tabindex",c).css("display","inline-block").bind("focus.selectBox",function(){if(this!==document.activeElement&&document.body!==document.activeElement){a(document.activeElement).blur()}if(f.hasClass("selectBox-active")){return}f.addClass("selectBox-active");j.trigger("focus")}).bind("blur.selectBox",function(){if(!f.hasClass("selectBox-active")){return}f.removeClass("selectBox-active");j.trigger("blur")});if(!a(window).data("selectBox-bindings")){a(window).data("selectBox-bindings",true).bind("scroll.selectBox",this.hideMenus).bind("resize.selectBox",this.hideMenus)}if(j.attr("disabled")){f.addClass("selectBox-disabled")}j.bind("click.selectBox",function(p){f.focus();p.preventDefault()});if(h){o=this.getOptions("inline");f.append(o).data("selectBox-options",o).addClass("selectBox-inline selectBox-menuShowing").bind("keydown.selectBox",function(p){m.handleKeyDown(p)}).bind("keypress.selectBox",function(p){m.handleKeyPress(p)}).bind("mousedown.selectBox",function(p){if(1!==p.which){return}if(a(p.target).is("A.selectBox-inline")){p.preventDefault()}if(!f.hasClass("selectBox-focus")){f.focus()}}).insertAfter(j);if(!j[0].style.height){var n=j.attr("size")?parseInt(j.attr("size")):5;var e=f.clone().removeAttr("id").css({position:"absolute",top:"-9999em"}).show().appendTo("body");e.find(".selectBox-options").html("<li><a>\u00A0</a></li>");var l=parseInt(e.find(".selectBox-options A:first").html("&nbsp;").outerHeight());e.remove();f.height(l*n)}this.disableSelection(f)}else{var i=a('<span class="selectBox-label" />'),k=a('<span class="selectBox-arrow" />');i.attr("class",this.getLabelClass()).text(this.getLabelText());o=this.getOptions("dropdown");o.appendTo("BODY");f.data("selectBox-options",o).addClass("selectBox-dropdown").append(i).append(k).bind("mousedown.selectBox",function(p){if(1===p.which){if(f.hasClass("selectBox-menuShowing")){m.hideMenus()}else{p.stopPropagation();o.data("selectBox-down-at-x",p.screenX).data("selectBox-down-at-y",p.screenY);m.showMenu()}}}).bind("keydown.selectBox",function(p){m.handleKeyDown(p)}).bind("keypress.selectBox",function(p){m.handleKeyPress(p)}).bind("open.selectBox",function(q,p){if(p&&p._selectBox===true){return}m.showMenu()}).bind("close.selectBox",function(q,p){if(p&&p._selectBox===true){return}m.hideMenus()}).insertAfter(j);var g=f.width()-k.outerWidth()-parseInt(i.css("paddingLeft"))||0-parseInt(i.css("paddingRight"))||0;i.width(g);this.disableSelection(f)}j.addClass("selectBox").data("selectBox-control",f).data("selectBox-settings",d).hide()};b.prototype.getOptions=function(j){var f;var c=a(this.selectElement);var e=this;var d=function(i,k){i.children("OPTION, OPTGROUP").each(function(){if(a(this).is("OPTION")){if(a(this).length>0){e.generateOptions(a(this),k)}else{k.append("<li>\u00A0</li>")}}else{var l=a('<li class="selectBox-optgroup" />');l.text(a(this).attr("label"));k.append(l);k=d(a(this),k)}});return k};switch(j){case"inline":f=a('<ul class="selectBox-options" />');f=d(c,f);f.find("A").bind("mouseover.selectBox",function(i){e.addHover(a(this).parent())}).bind("mouseout.selectBox",function(i){e.removeHover(a(this).parent())}).bind("mousedown.selectBox",function(i){if(1!==i.which){return}i.preventDefault();if(!c.selectBox("control").hasClass("selectBox-active")){c.selectBox("control").focus()}}).bind("mouseup.selectBox",function(i){if(1!==i.which){return}e.hideMenus();e.selectOption(a(this).parent(),i)});this.disableSelection(f);return f;case"dropdown":f=a('<ul class="selectBox-dropdown-menu selectBox-options" />');f=d(c,f);f.data("selectBox-select",c).css("display","none").appendTo("BODY").find("A").bind("mousedown.selectBox",function(i){if(i.which===1){i.preventDefault();if(i.screenX===f.data("selectBox-down-at-x")&&i.screenY===f.data("selectBox-down-at-y")){f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y");e.hideMenus()}}}).bind("mouseup.selectBox",function(i){if(1!==i.which){return}if(i.screenX===f.data("selectBox-down-at-x")&&i.screenY===f.data("selectBox-down-at-y")){return}else{f.removeData("selectBox-down-at-x").removeData("selectBox-down-at-y")}e.selectOption(a(this).parent());e.hideMenus()}).bind("mouseover.selectBox",function(i){e.addHover(a(this).parent())}).bind("mouseout.selectBox",function(i){e.removeHover(a(this).parent())});var h=c.attr("class")||"";if(""!==h){h=h.split(" ");for(var g in h){f.addClass(h[g]+"-selectBox-dropdown-menu")}}this.disableSelection(f);return f}};b.prototype.getLabelClass=function(){var c=a(this.selectElement).find("OPTION:selected");return("selectBox-label "+(c.attr("class")||"")).replace(/\s+$/,"")};b.prototype.getLabelText=function(){var c=a(this.selectElement).find("OPTION:selected");return c.text()||"\u00A0"};b.prototype.setLabel=function(){var c=a(this.selectElement);var d=c.data("selectBox-control");if(!d){return}d.find(".selectBox-label").attr("class",this.getLabelClass()).text(this.getLabelText())};b.prototype.destroy=function(){var c=a(this.selectElement);var e=c.data("selectBox-control");if(!e){return}var d=e.data("selectBox-options");d.remove();e.remove();c.removeClass("selectBox").removeData("selectBox-control").data("selectBox-control",null).removeData("selectBox-settings").data("selectBox-settings",null).show()};b.prototype.refresh=function(){var c=a(this.selectElement),e=c.data("selectBox-control"),f=e.hasClass("selectBox-dropdown"),d=e.hasClass("selectBox-menuShowing");c.selectBox("options",c.html());if(f&&d){this.showMenu()}};b.prototype.showMenu=function(){var e=this,d=a(this.selectElement),j=d.data("selectBox-control"),h=d.data("selectBox-settings"),f=j.data("selectBox-options");if(j.hasClass("selectBox-disabled")){return false}this.hideMenus();var g=parseInt(j.css("borderBottomWidth"))||0;f.width(j.innerWidth()).css({top:j.offset().top+j.outerHeight()-g,left:j.offset().left});if(d.triggerHandler("beforeopen")){return false}var i=function(){d.triggerHandler("open",{_selectBox:true})};switch(h.menuTransition){case"fade":f.fadeIn(h.menuSpeed,i);break;case"slide":f.slideDown(h.menuSpeed,i);break;default:f.show(h.menuSpeed,i);break}if(!h.menuSpeed){i()}var c=f.find(".selectBox-selected:first");this.keepOptionInView(c,true);this.addHover(c);j.addClass("selectBox-menuShowing");a(document).bind("mousedown.selectBox",function(k){if(1===k.which){if(a(k.target).parents().andSelf().hasClass("selectBox-options")){return}e.hideMenus()}})};b.prototype.hideMenus=function(){if(a(".selectBox-dropdown-menu:visible").length===0){return}a(document).unbind("mousedown.selectBox");a(".selectBox-dropdown-menu").each(function(){var d=a(this),c=d.data("selectBox-select"),g=c.data("selectBox-control"),e=c.data("selectBox-settings");if(c.triggerHandler("beforeclose")){return false}var f=function(){c.triggerHandler("close",{_selectBox:true})};if(e){switch(e.menuTransition){case"fade":d.fadeOut(e.menuSpeed,f);break;case"slide":d.slideUp(e.menuSpeed,f);break;default:d.hide(e.menuSpeed,f);break}if(!e.menuSpeed){f()}g.removeClass("selectBox-menuShowing")}else{a(this).hide();a(this).triggerHandler("close",{_selectBox:true});a(this).removeClass("selectBox-menuShowing")}})};b.prototype.selectOption=function(d,j){var c=a(this.selectElement);d=a(d);var k=c.data("selectBox-control"),h=c.data("selectBox-settings");if(k.hasClass("selectBox-disabled")){return false}if(0===d.length||d.hasClass("selectBox-disabled")){return false}if(c.attr("multiple")){if(j.shiftKey&&k.data("selectBox-last-selected")){d.toggleClass("selectBox-selected");var e;if(d.index()>k.data("selectBox-last-selected").index()){e=d.siblings().slice(k.data("selectBox-last-selected").index(),d.index())}else{e=d.siblings().slice(d.index(),k.data("selectBox-last-selected").index())}e=e.not(".selectBox-optgroup, .selectBox-disabled");if(d.hasClass("selectBox-selected")){e.addClass("selectBox-selected")}else{e.removeClass("selectBox-selected")}}else{if((this.isMac&&j.metaKey)||(!this.isMac&&j.ctrlKey)){d.toggleClass("selectBox-selected")}else{d.siblings().removeClass("selectBox-selected");d.addClass("selectBox-selected")}}}else{d.siblings().removeClass("selectBox-selected");d.addClass("selectBox-selected")}if(k.hasClass("selectBox-dropdown")){k.find(".selectBox-label").text(d.text())}var f=0,g=[];if(c.attr("multiple")){k.find(".selectBox-selected A").each(function(){g[f++]=a(this).attr("rel")})}else{g=d.find("A").attr("rel")}k.data("selectBox-last-selected",d);if(c.val()!==g){c.val(g);this.setLabel();c.trigger("change")}return true};b.prototype.addHover=function(d){d=a(d);var c=a(this.selectElement),f=c.data("selectBox-control"),e=f.data("selectBox-options");e.find(".selectBox-hover").removeClass("selectBox-hover");d.addClass("selectBox-hover")};b.prototype.getSelectElement=function(){return this.selectElement};b.prototype.removeHover=function(d){d=a(d);var c=a(this.selectElement),f=c.data("selectBox-control"),e=f.data("selectBox-options");e.find(".selectBox-hover").removeClass("selectBox-hover")};b.prototype.keepOptionInView=function(e,d){if(!e||e.length===0){return}var c=a(this.selectElement),j=c.data("selectBox-control"),g=j.data("selectBox-options"),h=j.hasClass("selectBox-dropdown")?g:g.parent(),i=parseInt(e.offset().top-h.position().top),f=parseInt(i+e.outerHeight());if(d){h.scrollTop(e.offset().top-h.offset().top+h.scrollTop()-(h.height()/2))}else{if(i<0){h.scrollTop(e.offset().top-h.offset().top+h.scrollTop())}if(f>h.height()){h.scrollTop((e.offset().top+e.outerHeight())-h.offset().top+h.scrollTop()-h.height())}}};b.prototype.handleKeyDown=function(c){var k=a(this.selectElement),g=k.data("selectBox-control"),l=g.data("selectBox-options"),e=k.data("selectBox-settings"),f=0,h=0;if(g.hasClass("selectBox-disabled")){return}switch(c.keyCode){case 8:c.preventDefault();this.typeSearch="";break;case 9:case 27:this.hideMenus();this.removeHover();break;case 13:if(g.hasClass("selectBox-menuShowing")){this.selectOption(l.find("LI.selectBox-hover:first"),c);if(g.hasClass("selectBox-dropdown")){this.hideMenus()}}else{this.showMenu()}break;case 38:case 37:c.preventDefault();if(g.hasClass("selectBox-menuShowing")){var d=l.find(".selectBox-hover").prev("LI");f=l.find("LI:not(.selectBox-optgroup)").length;h=0;while(d.length===0||d.hasClass("selectBox-disabled")||d.hasClass("selectBox-optgroup")){d=d.prev("LI");if(d.length===0){if(e.loopOptions){d=l.find("LI:last")}else{d=l.find("LI:first")}}if(++h>=f){break}}this.addHover(d);this.selectOption(d,c);this.keepOptionInView(d)}else{this.showMenu()}break;case 40:case 39:c.preventDefault();if(g.hasClass("selectBox-menuShowing")){var j=l.find(".selectBox-hover").next("LI");f=l.find("LI:not(.selectBox-optgroup)").length;h=0;while(0===j.length||j.hasClass("selectBox-disabled")||j.hasClass("selectBox-optgroup")){j=j.next("LI");if(j.length===0){if(e.loopOptions){j=l.find("LI:first")}else{j=l.find("LI:last")}}if(++h>=f){break}}this.addHover(j);this.selectOption(j,c);this.keepOptionInView(j)}else{this.showMenu()}break}};b.prototype.handleKeyPress=function(e){var c=a(this.selectElement),f=c.data("selectBox-control"),d=f.data("selectBox-options");if(f.hasClass("selectBox-disabled")){return}switch(e.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:if(!f.hasClass("selectBox-menuShowing")){this.showMenu()}e.preventDefault();clearTimeout(this.typeTimer);this.typeSearch+=String.fromCharCode(e.charCode||e.keyCode);d.find("A").each(function(){if(a(this).text().substr(0,this.typeSearch.length).toLowerCase()===this.typeSearch.toLowerCase()){this.addHover(a(this).parent());this.selectOption(a(this).parent(),e);this.keepOptionInView(a(this).parent());return false}});this.typeTimer=setTimeout(function(){this.typeSearch=""},1000);break}};b.prototype.enable=function(){var c=a(this.selectElement);c.prop("disabled",false);var d=c.data("selectBox-control");if(!d){return}d.removeClass("selectBox-disabled")};b.prototype.disable=function(){var c=a(this.selectElement);c.prop("disabled",true);var d=c.data("selectBox-control");if(!d){return}d.addClass("selectBox-disabled")};b.prototype.setValue=function(f){var c=a(this.selectElement);c.val(f);f=c.val();if(null===f){f=c.children().first().val();c.val(f)}var g=c.data("selectBox-control");if(!g){return}var e=c.data("selectBox-settings"),d=g.data("selectBox-options");this.setLabel();d.find(".selectBox-selected").removeClass("selectBox-selected");d.find("A").each(function(){if(typeof(f)==="object"){for(var h=0;h<f.length;h++){if(a(this).attr("rel")==f[h]){a(this).parent().addClass("selectBox-selected")}}}else{if(a(this).attr("rel")==f){a(this).parent().addClass("selectBox-selected")}}});if(e.change){e.change.call(c)}};b.prototype.setOptions=function(m){var l=a(this.selectElement),f=l.data("selectBox-control"),d=l.data("selectBox-settings"),k;switch(typeof(m)){case"string":l.html(m);break;case"object":l.html("");for(var g in m){if(m[g]===null){continue}if(typeof(m[g])==="object"){var c=a('<optgroup label="'+g+'" />');for(var e in m[g]){c.append('<option value="'+e+'">'+m[g][e]+"</option>")}l.append(c)}else{var h=a('<option value="'+g+'">'+m[g]+"</option>");l.append(h)}}break}if(!f){return}f.data("selectBox-options").remove();k=f.hasClass("selectBox-dropdown")?"dropdown":"inline";m=this.getOptions(k);f.data("selectBox-options",m);switch(k){case"inline":f.append(m);break;case"dropdown":this.setLabel();a("BODY").append(m);break}};b.prototype.disableSelection=function(c){a(c).css("MozUserSelect","none").bind("selectstart",function(d){d.preventDefault()})};b.prototype.generateOptions=function(e,f){var c=a("<li />"),d=a("<a />");c.addClass(e.attr("class"));c.data(e.data());d.attr("rel",e.val()).text(e.text());c.append(d);if(e.attr("disabled")){c.addClass("selectBox-disabled")}if(e.attr("selected")){c.addClass("selectBox-selected")}f.append(c)};a.extend(a.fn,{selectBox:function(e,c){var d;switch(e){case"control":return a(this).data("selectBox-control");case"settings":if(!c){return a(this).data("selectBox-settings")}a(this).each(function(){a(this).data("selectBox-settings",a.extend(true,a(this).data("selectBox-settings"),c))});break;case"options":if(undefined===c){return a(this).data("selectBox-control").data("selectBox-options")}a(this).each(function(){if(d=a(this).data("selectBox")){d.setOptions(c)}});break;case"value":if(undefined===c){return a(this).val()}a(this).each(function(){if(d=a(this).data("selectBox")){d.setValue(c)}});break;case"refresh":a(this).each(function(){if(d=a(this).data("selectBox")){d.refresh()}});break;case"enable":a(this).each(function(){if(d=a(this).data("selectBox")){d.enable(this)}});break;case"disable":a(this).each(function(){if(d=a(this).data("selectBox")){d.disable()}});break;case"destroy":a(this).each(function(){if(d=a(this).data("selectBox")){d.destroy();a(this).data("selectBox",null)}});break;case"instance":return a(this).data("selectBox");default:a(this).each(function(g,f){if(!a(f).data("selectBox")){a(f).data("selectBox",new b(f,e))}});break}return a(this)}})})(jQuery);