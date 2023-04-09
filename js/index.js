new Vue({
    el: '#app',
    data: {
        left: {
            active: true
        },
        right: {
            leftcla: true
        },
        divHei: 0,
        he: 0,
        ct:0,
        lm:0,
    },
    methods: {
        getHtmlHeight() {
            this.he = window.innerHeight;
            this.ct = window.innerHeight-270;
            this.divHei = window.innerHeight - 50;
            this.lm= window.innerHeight - 270;
        },
        change(e){

            $('.ow').hide();
            $('.dom'+e).show("slow");
        },
    },
    mounted() {
        this.getHtmlHeight();

    }
})

$(document).keypress(function(e) {
    if((e.which == 13 && e.ctrlKey) || (e.which == 10 && e.ctrlKey)){
        // 这里实现换行

        var content = $(".answer").val();

    }
});
$(document).off('click', '.add').on('click',".add",function () {
    let content;
    let now = new Date();

    let year = now.getFullYear(); //得到年份

    let month = now.getMonth()+1;//得到月份

    let date = now.getDate();//得到日期

    let hour= now.getHours();//得到小时数

    let minute= now.getMinutes();//得到分钟数

    let second= now.getSeconds();//得到秒数

    let time=year+'/'+month+'/'+date+' '+hour+':'+minute+':'+second;

    let num=parseInt(localStorage.getItem('num'))+1;
    localStorage.setItem('num',num)
    content="      <div class=\"li\" id="+num+"   >\n" +
        "            <div class=\"xin\">新的聊天</div>\n" +
        "            <div style=\"display: flex; justify-content: space-between\">\n" +
        "                <div class=\"yitiao\">1条对话</div>\n" +
        "                <div class=\"time\">"+time+"</div>\n" +
        "            </div>\n" +
        "        </div>";
    $('.addct').append(content)
});

$("body").on("click",".li",function(){


    $(".li").removeClass("onli");
    $(this).addClass('onli');
    $('.ow').hide();
    $('.dom'+$(this).attr('id')).show("slow");
});
$('.ow').hide();
$('.dom1').show();

if(!localStorage.getItem('num'))
{
    localStorage.setItem('num',1)
}