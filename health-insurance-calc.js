// this program will calculate and print the risk factor 
// for the health insurance

function calcAgePoints() {
    agepts = 0;
    if (document.getElementById("age").value < 30)
        agepts = 0;
        
    elif (document.getElementById("age").value >= 31 && document.getElementById("age").value < 45)
        agepts = 10;

    elif (document.getElementById("age").value >= 46 && document.getElementById("age").value < 60)
        agepts = 20;

    elif (document.getElementById("age").value >= 61)
        agepts = 30;
    return agepts;
}

function calcBodyMassIndex() {
    bmipts = 0;
    bmi = (703 * (document.getElementById("weight").value) / Math.pow(document.getElementById("height").value,2));
    if (bmi >= 18.5 && bmi <= 24.9)
        bmipts = 0;
    elif (bmi >= 25.0 && bmi <= 29.9)
        bmipts = 30;
    elif (bmi >= 30.0 && bmi <= 34.9)
        bmipts = 75;
    return bmipts;
}

function calcBP() {
    bppts = 0;
    document.getElementById("sysbp").value = sys;
    document.getElementById("diabp").value = dia;
    if (sys < 120 && dia < 80)
        bppts = 0;
    elif (sys >= 120 && sys <= 129 && dia < 80)
        bppts = 15;
    elif (sys >= 130 && sys <= 139 || dia >= 80 && dia <= 89)
        bppts = 30;
    elif(sys >= 140 && sys <= 179 || dia >= 90 && dia <= 119)
        bppts = 75;
    elif (sys >= 180 && dia >= 120)
        bppts = 100;
    return bppts;
}

function calcHistory() {
    hispts = 0;
    document.getElementById("diabetes") = diab;
    document.getElementById("cancer") = cancer;
    document.getElementById("alz") = alz;
    if (diab == "y")
        hispts = hispts + 10;
    elif (diab == "n")
        hispts = hispts + 0;
    if (cancer == "y")
        hispts = hispts + 10;
    elif(cancer == "n")
        hispts = hispts + 0;
    if (alz == "y")
        hispts = hispts + 10;
    elif (alz == "n")
        hispts = hispts + 10
    return hispts;
}

function calcRisk() {
    var agev = calAgePoints();
    document.getElementById("agepts").value = agev;
    var bmi = calcBodyMassIndex();
    document.getElementById("bmipts").value = bmi;
    var index = (703 * (document.getElementById("weight").value) / Math.pow(document.getElementById("height").value,2));
    document.getElementById("index").value = index;
    var bp = calcBP();
    var pressure;
    if (bp == 0) 
        pressure = "normal";
    elif (bp == 15) 
        pressure = "elevated";
    elif (bp == 30)
        pressure = "stage 1";
    elif (bp == 75)
        pressure = "stage 2";
    elif (bp == 100)
        pressure = "crisis";
    document.getElementById("bp").value = pressure;
    var hist = calcHistory();
    document.getElementById("hispts").value = hist;
    var risk = agev + bmi + bp + hist;
    if (risk <= 20)
        alert("Based on these scores, the patient is low-risk.");
    elif(risk >=21 && risk <= 50)
        alert("Based on these scores, the patient is moderate-risk.");
    elif (risk >= 51 && risk <= 70)
        alert("Based on these scores, the patient is high-risk.");
    elif (risk >= 71)
        alert("Based on these scores, the patient is uninsurable."); 
}

