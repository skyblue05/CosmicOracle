var userData = {}; // Object to store user data

// para changing imgs

var para = document.getElementById("para");
var typed = new Typed(".para", {
  strings: ["Get your 2024 Future by Date of Birth"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

function goToPage1() {
  document.getElementById("page2").style.display = "none";
  document.getElementById("page1").style.display = "block";
  document.getElementById("page3").style.display = "none";
  document.getElementById("result").style.display = "none";
}

function goToPage2() {
  userData.name = document.getElementById("name").value;
  userData.dob = document.getElementById("dob").value;

  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
  document.getElementById("page3").style.display = "none";
  document.getElementById("result").style.display = "none";

  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;

  if (name === "" || dob === "") {
    alert("Please fill in all required fields.");
    return goToPage1(); // Prevents form submission
  }
}

function goToPage3() {
  userData.study = document.getElementById("study").checked;
  userData.health = document.getElementById("health").checked;
  userData.hobbies = document.getElementById("hobbies").checked;
  userData.business = document.getElementById("business").checked;
  userData.job = document.getElementById("job").checked;

  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";
}

function calculateResult() {
  document.getElementById("page3").style.display = "none";
  document.getElementById("result").style.display = "block";

  let resultText = document.getElementById("resultText");
  switch (true) {
    case dob.value == 1 ||
      dob.value == 10 ||
      dob.value == 19 ||
      dob.value == 28:
      resultText.textContent =
        "Number 1: (People born on 1, 10, 19, and 28 of any month): If you are born on the 1st, 10th, 19th, or 28th of any month then the year 2024 will be pleasant and progressive for you in many respects. This year you should work hard in your workplace because there are good chances of profit and progress. There will be happiness, peace, and mutual harmony in family life.You will get happiness from children. The year will be exciting and pleasant for lovers, love will deepen. The four months of the year, April, May, August, and September, are most special for you. You will get good opportunities in these months, take advantage of the opportunity.";
      break;
    case dob.value == 2 ||
      dob.value == 11 ||
      dob.value == 20 ||
      dob.value == 29:
      resultText.textContent =
        "Number 2: (People born on 2, 11, 20, and 29 of any month)      If your date of birth is the 2nd, 11th, 20th, or 29th of any month then you are a number two person. This year is going to fulfill your unfulfilled desires for you. If you try, your position in the job will be better. If your promotion was stopped last year then you can get this happiness this year. Income will increase. There will be many types of happiness in family life. A couple wishing to have a child may attain the happiness of having a child. Your health will also be good this year, take care of your eating habits. The month from March to April will be especially beneficial for you.";
      break;
    case dob.value == 3 ||
      dob.value == 12 ||
      dob.value == 21 ||
      dob.value == 30:
      resultText.textContent =
        "Number 3: (People born on 3, 12, 21, and 30 of any month) this year can be full of complications and ups and downs. You will have to proceed very carefully in the workplace, otherwise you may have to face problems. Avoid getting into trouble with officials. The thought of changing jobs may come to your mind. You have to be careful in financial matters, investing in risky areas can be harmful. You may have to face unexpected problems in family life. Small disputes will continue with your spouse. If you are waiting for love in your life then there is a strong possibility of having a secret love affair this year. The mind of the students will remain distracted due to which the results in the field of education may be affected. The month of March will be pleasant for you.";
      break;
    case dob.value == 4 ||
      dob.value == 13 ||
      dob.value == 22 ||
      dob.value == 31:
      resultText.textContent =
        "Number 4: (People born on 4, 13, 22, and 31 of any month) The year 2024 has brought the light of hope for you. This year you can benefit from your negotiation skills in job and business. Your workplace superiors and colleagues will be impressed by you. If you want to start some new work then you should try this year, you will be successful. There will be opportunities for profit from time to time. There will be happiness and harmony in family life.This year, students will be happy to get pleasant results for their hard work. The months of August and September will be favorable for you in every way.";
      break;
    case dob.value == 5 || dob.value == 14 || dob.value == 23:
      resultText.textContent =
        "Number 5: (People born on 5, 14, and 23 of any month) This year will be pleasant from a health point of view. You will be happy and cheerful most of the time. People who want to buy a vehicle will be successful in their endeavors. Well, your income will also be good this year. You will feel better in your job and business than last year. Even if your income is good, your savings may still reduce as your expenses on material comforts will increase this year. Love and cooperation will increase in family life, but you must control your mind and speech. The last quarter of the year will be especially pleasant for you.";
      break;
    case dob.value == 6 || dob.value == 15 || dob.value == 24:
      resultText.textContent =
        "Number 6: (People born on 6, 15, and 24 of any month) For those whose date of birth is 6, 15, or 24, the year 2024 will be progressive from a work point of view. There will be coordination with officers on the job.Even your opponents will be impressed by your efficiency and dedication.There may be profit opportunities in business. There may be some celebration in the family. You will get happiness from children. There may be normal fluctuations in health, although the possibility of major problems is less. The middle of the year will be encouraging for you.";
      break;
    case dob.value == 7 || dob.value == 16 || dob.value == 25:
      resultText.textContent =
        "Number 7 (People born on 7, 16, and 25 of any month) If your date of birth is 7, 16, or 25 then this year is good for you to show your efficiency and ability. With your hard work and dedication, you can move towards success in your job and business. You may get an opportunity for advancement. Your expenses will increase due to which there will be fluctuations in the budget. Can travel a lot. Some differences will emerge in family life which will have to be handled wisely. take care of your health.";
      break;
    case dob.value == 8 || dob.value == 17 || dob.value == 26:
      resultText.textContent =
        "Number 8: (People born on 8, 17, and 26 of any month) People whose birthday is on the 8th, 17th, or 26th have a radix number of 8. This year may be a struggle for them. You may be disappointed by not getting benefits for your hard work. If you are thinking of starting any new work this year, then proceed with caution otherwise you may suffer losses. Along with financial matters, you will have to be careful in business also, there is a possibility of increasing financial problems this year. There may be turmoil and a lack of mutual coordination in family life. You may also worry about your children. Avoid carelessness in health matters and be cautious while walking on the road and doing risky work.";
      break;
    case dob.value == 9 || dob.value == 18 || dob.value == 27:
      resultText.textContent =
        "Number 9: (People born on 9, 18, and 27 of any month) The year 2024 is favorable for those whose birthday is on the 9th, 18th, 27th. People born on this date come under the number 9. This year, the influence of people with radix number 9 may increase in their jobs. If you are also in the race for promotion, then you may get this good news this year. Family life will be romantic and joyful. In terms of health, this year is more favorable for you than last year.";
      break;
    default:
      resultText.textContent =
        "Please Enter Valid Details, Refresh the Page or Click on Edit Button";
  }
}
