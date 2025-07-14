function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    if (!dobInput) {
        document.getElementById("result").innerText = "Please select your date of birth.";
        return;
    }
    

    let currentYear = new Date()
    let birthYear = new Date(dobInput)

    if (currentYear < birthYear){
        document.getElementById("result").innerText = "Please Enter Valid date.";
        return;
    }

    let birthMonth = birthYear.getMonth();
    console.log(birthMonth);
    birthYear = birthYear.getFullYear();
    let currentMonth = currentYear.getMonth();
    currentYear= currentYear.getFullYear()
    let age = currentYear - birthYear - 1;

    let Month = currentMonth - birthMonth;
    if (age < 0){
        age = 0;
    }
    if (Month < 0 ){
        Month= Month + 11;
    }
    document.getElementById("result").innerText = `You are ${age} years  and ${Month} Old.`;
}
