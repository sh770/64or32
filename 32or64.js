// Generated by CoffeeScript 1.7.1
(function() {
  window.ThirtyTwoorSixtyFour = function() {
    if (window.navigator.platform === 'MacIntel') {
      return 64;
    }
    if (window.navigator.platform === 'Win32') {
      return 32;
    }
    if (window.navigator.platform === 'Win64' && window.navigator.cpuClass === 'x64') {
      return 64;
    }
    if (window.navigator.platform === 'Win32' && window.navigator.cpuClass === 'x86') {
      return 64;
    }
    if (window.navigator.platform === 'Win32') {
      return 64;
    }
    if (window.navigator.platform === 'Linux i686') {
      return 32;
    }
    if (window.navigator.platform === 'Linux i686') {
      return 64;
    }
    if (window.navigator.platform === 'Linux x86_64') {
      return 64;
    }
    return "<Error>";
  };

  document.write("Your computer is <div id='bit'>" + (ThirtyTwoorSixtyFour()) + "</div> bit.");

}).call(this);
