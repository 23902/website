/**
 * @file jquery.breadcrumbs-generator
 * @version 1.0.2
 * @author Yuusaku Miyazaki <toumin.m7@gmail.com>
 * @license MIT
 */
/** @external jQuery */
(function (factory) {
  if(typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'), window, document);
  } else {
    factory(jQuery, window, document);
  }
}(function($, window, document, undefined) {

/**
 * @function external:jQuery.prototype.breadcrumbsGenerator
 * @arg {object} [option] - Options user sent
 * @arg {string} [option.sitemaps='.main-nav'] - jQuery selector for sitemap
 * @arg {string} [option.index_type='/'] - Filename of directory index
 */
$.fn.breadcrumbsGenerator = function(option) {
  return this.each(function() {
    new $.breadcrumbsGenerator(this, option);
  });
};

/**
 * @class external:jQuery.breadcrumbsGenerator
 * @arg {object} elem - Target element to apply this plugin
 * @arg {object} option - Options user sent
 * @prop {object} elem - Target element to apply this plugin
 * @prop {object} option - Initialized options
 */
$.breadcrumbsGenerator = function(elem, option) {
  this.elem = elem;
  this.option = this._setOption(option);
  this._main();
}

$.extend($.breadcrumbsGenerator.prototype, /** @lends external:jQuery.breadcrumbsGenerator.prototype */ {
  /**
   * Initialize options
   * @private
   * @arg {object} option - Options user sent.
   * @return {object} initialized options.
   */
  _setOption: function(option) {
    return $.extend({
      sitemaps  : '.main-nav',
      //index_type: 'index.html'
    }, option);
  },

  /**
   * Generate breadcrumbs
   * @private
   */
  _main: function() {
    var target_path = window.location.pathname.split('/').pop();
    var target_elem = $(this.option.sitemaps).find('a.is-active[href*="' + target_path + '"]');
    //console.log(target_elem.length)

    //  Evacuate contents before emptize
    var origin_elem = $(this.elem).children();

    $(this.elem).empty();
    var self = this;
    if(target_elem.length > 0){
      $(target_elem[0])
      .parentsUntil(this.option.sitemaps)
      .filter(':has(> a[href])')
      .each(function() {
        $('<span>')
          .append($(this).children('a').clone())
          .prependTo(self.elem);
      });
    }
    else{
      var page_title = jQuery('h2.page-title').text();
      jQuery('#breadcrumbs').append('<span>' + ' ' + page_title +'</span>')
    }

    // Restore evacuated contents
    $(this.elem).prepend(origin_elem);

    // Remove link from current page in breadcrumbs
    $(this.elem)
      .find('a[href*="' + target_path + '"]')
      .each(function() {
        $(this).parent().text($(this).text());
      });
  }
}); // end of "$.extend"

}));
