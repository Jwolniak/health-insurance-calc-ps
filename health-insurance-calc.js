// this program will calculate and print the risk factor 
// for the health insurance

function calcAgePoints() {
    var agepts = 0;
    if (document.getElementById("age") < 30)
        agepts = 0;
        
    elif (document.getElementById("age") >= 31 && document.getElementById("age") < 45)
        agepts = 10;

    elif (document.getElementById("age") >= 46 && document.getElementById("age") < 60)
        agepts = 20;

    elif (document.getElementById("age") >= 61)
        agepts = 30;
    return agepts;
}

function calcBodyMassIndex() {
    var bmipts = 0;
    bmi = (703 * (document.getElementById("weight")) / Math.pow(document.getElementById("height"),2));
    if (bmi >= 18.5 && bmi <= 24.9)
        bmipts = 0;
    elif (bmi >= 25.0 && bmi <= 29.9)
        bmipts = 30;
    elif (bmi >= 30.0 && bmi <= 34.9)
        bmipts = 75;
    return bmipts;
}

function calcBP() {
    var bppts = 0;
    document.getElementById("sysbp") = sys;
    document.getElementById("diabp") = dia;
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
    var hispts = 0;
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
    agev = calAgePoints();
    bmi = calcBodyMassIndex();
    index = (703 * (document.getElementById("weight")) / (document.getElementById("height")^2));
    bp = calcBP();
    pressure;
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
    var hist = calcHistroy();
    var risk = age + bmi + bp + hist;
    if (risk <= 20)
        print("Based on these scores, the patient is low-risk.");
    elif(risk >=21 && risk <= 50)
        print("Based on these scores, the patient is moderate-risk.");
    elif (risk >= 51 && risk <= 70)
        print("Based on these scores, the patient is high-risk.");
    elif (risk >= 71)
        print("Based on these scores, the patient is uninsurable.");

}
