function score() {
  let maths = document.getElementById("maths").value;
  let sci = document.getElementById("sci").value;
  let eng = document.getElementById("eng").value;
  let hindi = document.getElementById("hindi").value;
  let eco = document.getElementById("eco").value;
  let total = parseFloat(maths)+parseFloat(eng)+parseFloat(sci)+parseFloat(eco)+parseFloat(hindi);
  let perc = total/5;
  
  let grade = " ";
  if (perc >=80){
    grade ="A";
  }else if (perc >=65 && perc <80){
    grade = "B";
  }else if (perc >=50 && perc< 65){
    grade ="C";
  }else if(perc >=40 && perc<50){
    grade ="D";
  }else{
    grade ="F";
  }
  if(perc > 40){
  document.getElementById("score").innerHTML = "Your grade is " + grade +" and percentage is " +perc +"% . You Passed";
  }
  else {
    document.getElementById("score").innerHTML = "You Failed";
  }
}
