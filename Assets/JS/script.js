//Get div and display current time
$("#currentDay").html(moment().format('LLLL'));

//Get TimeBlock and set attribute
// $(".block8").html("test")
// $(".block8").attr("class","form-control")
// $(".block9").html("test")
// $(".block9").attr("class","form-control")
// $(".block10").html("test")
// $(".block10").attr("class","form-control")
// $(".block11").html("test")
// $(".block11").attr("class","form-control")
// $(".block12").html("test")
// $(".block12").attr("class","form-control")
// $(".block1").html("test")
// $(".block1").attr("class","form-control")
// $(".block2").html("test")
// $(".block2").attr("class","form-control")
// $(".block3").html("test")
// $(".block3").attr("class","form-control")
// $(".block4").html("test")
// $(".block4").attr("class","form-control")
// $(".block5").html("test")
// $(".block5").attr("class","form-control")

//Set timeblock color codes

var currentHour = moment().format("H")


for (var i=8; i<18; i++){
    if(currentHour > i){
        $(".block"+i).addClass("past")
    } else if (parseInt(currentHour)===i){
        $(".block"+i).addClass("current")
    } else{
        $(".block"+i).addClass("future")
    }
    var local=localStorage.getItem("hour"+i)
    if(local !== null){
        $(".block"+i).text(local)

    }
}

$(".btn").click(function(){
    var selectedHour = $(this).val()
    var textToSave=$(".block"+selectedHour).val()
    localStorage.setItem("hour"+selectedHour,textToSave)
})