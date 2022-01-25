import $ from "jquery";

const computedHtml =`
        <div class="showNumber">
            <span class="output">100</span>
        </div>
        <button class="add">+10</button>
        <button class="sub">-10</button>
        <button class="multiply">*2</button>
        <button class="divide">÷2</button>
`
$('.computed').html(computedHtml)

let  currentNumber =  localStorage.getItem('currentNumber')*1||$('.showNumber >span').text()*1
$('.showNumber  >span').text(currentNumber)

$('.add').bind('click',()=>{
    let countEnd = currentNumber+=10
    $('.showNumber >span').text(countEnd)
    localStorage.setItem('currentNumber',countEnd.toString())
})
$('.sub').bind('click',()=>{
    let countEnd = currentNumber-=10
    $('.showNumber >span').text(countEnd)
    localStorage.setItem('currentNumber',countEnd.toString())
})
$('.multiply').bind('click',()=>{
    let countEnd = currentNumber*=2
    $('.showNumber >span').text(countEnd)
    localStorage.setItem('currentNumber',countEnd.toString())
})
$('.divide').bind('click',()=>{
    let countEnd = currentNumber/=2
    $('.showNumber >span').text(countEnd)
    localStorage.setItem('currentNumber',countEnd.toString())
})
