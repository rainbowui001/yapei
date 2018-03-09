$(function () {
    $(".tab>button").click(function () {
      $(this).siblings().removeClass("active");
      $(this).eq(index).addClass("active");
        var index=$(this).index(); 
        if(0 !=index) {
            $('.carousel').eq(index).show();
            $('.carousel').eq(index).siblings().hide();
        } 
      
          //取指定的索引值   

    })
})
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
var checkin = $('#dpd1').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.update(newDate);
    }
    checkin.hide();
    $('#dpd2')[0].focus();
}).data('datepicker');

var checkout = $('#dpd2').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    checkout.hide();
}).data('datepicker');

var checkin3 = $('#dpd3').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return '';
    }
}).on('changeDate', function (ev) {
    checkin3.hide();
    $('#dpd4')[0].focus();
}).data('datepicker');

var checkout4 = $('#dpd4').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return '';
    }
}).on('changeDate', function (ev) {
    checkout4.hide();
}).data('datepicker');