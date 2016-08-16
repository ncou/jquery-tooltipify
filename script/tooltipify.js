$.fn.tooltipify = function() {
  var tt = $('.tt');

  toggle_off = function() {
    tt.removeClass('visible');
  }

  toggle_on = function() {
    var self = $(this);
    tt.text(self.data('tooltip'));
    tt.addClass('visible');

    var offset = self.offset();
    var width = self.innerWidth();
    var height = self.innerHeight();
    var tt_width = tt.innerWidth();
    var tt_height = tt.innerHeight();
    var arrow_height = 10;

    tt.css({
      top: (offset.top - tt_height - arrow_height),
      left: (offset.left + (width / 2) - (tt_width / 2))
    });
  }

  this.on('mouseenter', toggle_on);
  this.on('mouseleave', toggle_off);
}

$('[data-tooltip]').tooltipify();