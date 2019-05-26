(function($){
  // Plugin definition.
  $.fn.skpscrollnav = function(options){
    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var settings = $.extend({}, $.fn.skpscrollnav.defaults, options );
    // Plugin defaults – added as a property on our plugin function.
    $.fn.skpscrollnav.defaults = {};

    // Our plugin implementation code goes here.
    return this.each(function() {
        // Plugin code would go here...
        var $accordion = $(this);
        var $accordionItems = $accordion.find('ul li');
        var width = 0;
        $.each($accordionItems,function(){
          var $accordionItem = $(this);
          width = width+$accordionItem.width();        
        });
        if(width>0){
          $accordion.find('ul').css('width',width+'px');
        }
    });
  };
})(jQuery);