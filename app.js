// update case
function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}
document.getElementById('case-plus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    updateCaseNumber(false);
});

//phone update
function updatePhoneNumber(isIncreasing){
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if(isIncreasing){
        phoneNumber = parseInt(phoneNumber) + 1;
    }else if(phoneNumber > 0){
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    //update phone total
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;
}
document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-number');
    updatePhoneNumber(true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneInput = document.getElementById('phone-number');
    updatePhoneNumber(false);
});
 