function calculate(){

    var total1 = parseInt(document.getElementById("Jake1").innerText) +
               parseInt(document.getElementById("Jake2").innerText) +
               parseInt(document.getElementById("Jake3").innerText);
    var avg1 = total1/3;

    document.getElementById("JakeTotal").innerText = total1;
    document.getElementById("JakeAvg").innerText = avg1;
  
    var total2 = parseInt(document.getElementById("Jackie1").innerText) +
               parseInt(document.getElementById("Jackie2").innerText) +
               parseInt(document.getElementById("Jackie3").innerText);
    var avg2 = total2/3;
    document.getElementById("JackieTotal").innerText = total2;
    document.getElementById("JackieAvg").innerText = avg2;
  
    var total3 = parseInt(document.getElementById("Deykin1").innerText) +
               parseInt(document.getElementById("Deykin2").innerText) +
               parseInt(document.getElementById("Deykin3").innerText);
    var avg3 = total3/3;
    document.getElementById("DeykinTotal").innerText = total3;
    document.getElementById("DeykinAvg").innerText = avg3;
  }