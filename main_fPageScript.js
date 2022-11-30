
    let goButton = document.getElementById("goButton");
    
    goButton.addEventListener('click', function () {
        let user = document.getElementById("user").value;
        let bdate = document.getElementById("bdate").value;
        let location = document.getElementById("location").value;
        console.log(user, bdate, location)

        let loginObject = {
            user : user,
            bdate : bdate,
            location : location
        }
        
        localStorage.setItem('loginObject', JSON.stringify(loginObject));
        window.location.href = "main_sPage.html";       
        });


        

    