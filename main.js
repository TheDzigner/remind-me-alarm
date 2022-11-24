 var input_name = 

 document.querySelector('header input')

var date_container = 

document.querySelector('.date-container')

const showDateFun = () =>{

  

var date = new Date();

var hour = date.getHours() % 12 || 12

var isAm = date.getHours() < 12

var minutes = date.getMinutes()

var second = date.getSeconds()

var year = date.getFullYear()

var day = date.getDay()

var month = date.getMonth()

var greeting = 

document.querySelector('header h1')

var days = 

['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

var months = 

['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct', 'Nov','Dec']

greeting.innerHTML = `

 <h1>

 ${isAm ? 'Good Morning' : 'Good Afternoon'}

 </h1>

`

  date_container.innerHTML = `

  <span>

  ${hour.toString().padStart(2,'0')} : ${minutes.toString().padStart(2,'0')} : ${second.toString().padStart(2,'0')} ${isAm ? 'AM' : 'PM' }

  </span>

  <p>

  ${days[day]}, ${months[month]}, ${year}

  </p>

  `

  

  

}

setInterval(()=>{

  showDateFun()

},1000)

input_name.addEventListener('input',function(){

  if (this.value.lenght == 0 || this.value == '') {

    this.placeholder= 'John Doe'

  } else {

    localStorage.setItem('username', this.value)

  }

})

const displayName = () =>{

  var getName = 

  localStorage.getItem('username');

  

  if (getName == null || getName == '' || getName == ' ') {

    input_name.value = 'John Doe'

    input_name.focus()

  } else {

    input_name.value = getName

  }

}

window.onload = displayName

var select_hours = 

document.querySelector('#hours')

var select_minutes = 

document.querySelector('#minutes')

var select_seconds = 

document.querySelector('#seconds')

var select_ampm = 

document.querySelector('#ampm')

var setAlarm_btn = 

document.querySelector('#setAlarm')

var resetAlarm_btn = 

document.querySelector('#resetAlarm')

var alarm_detail = 

document.querySelector('.alarm-container h3')

var getH = localStorage.getItem('hours')

  var getM = localStorage.getItem('minutes')

  var getS = localStorage.getItem('seconds')

  var getAmpm = localStorage.getItem('ampm')

  for (var i = 1; i <= 12; i++) {

    var Option = `

    <option value=${i.toString().padStart(2,'0')}>${i.toString().padStart(2,'0')}</option>

    `

    select_hours.insertAdjacentHTML('beforeend', Option)

  }

  for (var i = 0; i <= 59; i++) {

    var Option = `

    <option value=${i.toString().padStart(2,'0')}>${i.toString().padStart(2,'0')}</option>

    `

    select_minutes.insertAdjacentHTML('beforeend',Option)

  }

   for (var i = 0; i <= 59; i++) {

    var Option = `

    <option value=${i.toString().padStart(2,'0')}>${i.toString().padStart(2,'0')}</option>

    `

    select_seconds.insertAdjacentHTML('beforeend', Option)

  }

  select_hours.addEventListener('change',function(){

    localStorage.setItem('hours', this.value)

})

select_minutes.addEventListener('change',function(){

    localStorage.setItem('minutes', this.value)

})

select_seconds.addEventListener('change',function(){

    localStorage.setItem('seconds', this.value)

})

select_ampm.addEventListener('change',function(){

    localStorage.setItem('ampm', this.value)

})

setAlarm_btn.addEventListener('click',function(){

  

 alarm_detail.innerHTML =

   `

    <h3> Your Alarm have been setup for ${select_hours.value} : ${select_minutes.value} : ${select_seconds.value} ${select_ampm.value}</h3>

     `

    

})

window.addEventListener('load',function(){

  

  if (getH == null && getM == null && getS == null && getAmpm == null) {

    

    alarm_detail.innerHTML =

    `

   <h3> No alarm have been setting up yet </h3>

    `

  } 

  

   else {

    alarm_detail.innerHTML =

    `

   <h3> Your Alarm have been setup for ${getH} : ${getM} : ${getS} ${getAmpm}</h3>

    `

  }  

  

  

  

})

