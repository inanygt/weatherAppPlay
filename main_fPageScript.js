let goButton = document.getElementById("goButton");

goButton.addEventListener("click", function () {
   let user = document.getElementById("user").value;
   let bdate = document.getElementById("bdate").value;
   let location = document.getElementById("location").value;

   let loginObject = {
      user: user,
      bdate: bdate,
      location: location,
   };

   localStorage.setItem("loginObject", JSON.stringify(loginObject));
   window.location.href = "main_sPage.html";
});

let enter = document.getElementById("location");

enter.addEventListener("keypress", function (e) {
   if (e.key === "Enter") {
      document.getElementById("goButton").click();
   }
});
