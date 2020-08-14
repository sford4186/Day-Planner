//Get div and display current time
$("#currentDay").html(moment().format('LLLL'));


//Set timeblock and color codes

//Get Current time
var currentHour = moment().format("H")

//add color codes based on current time
for (var i=8; i<18; i++){
    if(currentHour > i){
        $(".block"+i).addClass("past")
    } else if (parseInt(currentHour)===i){
        $(".block"+i).addClass("current")
    } else{
        $(".block"+i).addClass("future")
    }
    //get event and hour selected by the user
    var local=localStorage.getItem("hour"+i)
    if(local !== null){
        $(".block"+i).text(local)

    }
}
//save selected hour and text entered by the user
$(".btn").click(function(){
    var selectedHour = $(this).val()
    var textToSave=$(".block"+selectedHour).val()
    localStorage.setItem("hour"+selectedHour,textToSave)
})