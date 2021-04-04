function timer() {
  const wait = action(); // timer замыкание
  const navs = [...document.querySelectorAll('.wait')];

  if(!navs.length) return;

  navs.forEach(nav => {
    nav.addEventListener('input', e => {
      wait(1000, nav)
    })
  })



  //timer
  function action() {

    let timerId;
    let status = false;

    return function(ms = 2000, nav = null) {
      if(timerId) {
        clearTimeout(timerId);
        resetData()
      }
      if(status) return;

      status = true

      timerId = setTimeout(() => {
        resetData()

        // action //
        console.log('action')
        // end action //

      }, ms)

    }
    function resetData() {
      timerId = null
      status = false
    }
  }
}


// filterArrayByWord
function filterArrayByWord(data, nav) {
  const word = nav.value

  const result = data.filter(e => {
    return e.title.toLowerCase().indexOf(word.toLowerCase()) > -1;
  })

  return result
}




//only number validate
(() => {
  const inputs = [...document.querySelectorAll('.numberValidate')];

  if(!inputs.length) return;

  inputs.forEach(input => {
    input.addEventListener('keypress', validate);
  })

  function validate(e) {
    const event = e || window.event;
    const regex = /[0-9]|\./;

    let key = event.keyCode || event.which;
    key = String.fromCharCode( key );

    if( regex.test(key) ) return;

    event.returnValue = false;
    if(event.preventDefault) event.preventDefault();
  }
})()
