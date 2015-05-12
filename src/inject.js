Element.prototype.prependChild = function(child) { this.insertBefore(child, this.firstChild); };


var cron = function() {
  var totalBadges = 0;
  $('.buffer .badge').each(function(i,n){
    var bufferBadge = $(n).text();
    if (bufferBadge) {
      totalBadges += parseInt(bufferBadge, 10);
    }
  });
  console.log('totalBadges::' + totalBadges);
};


if (document.location.hostname == 'www.irccloud.com') {
  setInterval(cron, 5000);
}
