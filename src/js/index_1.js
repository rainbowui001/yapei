$(function () {
    $(".tab>button").click(function () {
        $(this).siblings().removeClass("showButton");
        $(this).addClass("showButton");
        var index = $(this).index();
        var content =$(this).parents(".contentNav").siblings(".tab-content").find(".carousel").eq(index);
        content.show();
        content.siblings().hide();
    })
})
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);


var checkin1 = $('#trigger_info2_0').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    checkin1.hide();
}).data('datepicker');

var checkin2 = $('#trigger_info2_8').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    checkin2.hide();
}).data('datepicker');

var checkin3 = $('#trigger_info2_9').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    checkin3.hide();
}).data('datepicker');

var checkin4 = $('#trigger_info2_12').fdatepicker({
    format: 'yyyy-mm-dd',
    onRender: function (date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
    }
}).on('changeDate', function (ev) {
    checkin4.hide();
}).data('datepicker');

