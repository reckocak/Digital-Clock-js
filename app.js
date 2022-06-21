const clock = function () {
    function digitalClock() {
    let now = new Date(),
        h = now.getHours(),
        m = now.getMinutes(),
        s = now.getSeconds();
    m = leadingZero(m);
    s = leadingZero(s);
    document.querySelector('.clock').innerHTML = h + ':' + m + ':' + s;
    setTimeout(digitalClock, 500);
  }
  
  function leadingZero(num) {
    num = (num < 10 ? '0' : '' )+ num;  
    return num;
  }
  document.addEventListener('DOMContentLoaded', digitalClock);
}();