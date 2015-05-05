Element.prototype.prependChild = function(child) { this.insertBefore(child, this.firstChild); };

var addCss = function() {
  var head  = document.getElementsByTagName('head')[0];
  if (head) {
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githubusercontent.com/moul/irccloud-desktop-app/master/src/irccloud-dark.css';
    link.media = 'all';
    head.appendChild(link);
    // head.prependChild(link, head);
  }
};

if (document.location.hostname == 'www.irccloud.com') {
  addCss();
}
