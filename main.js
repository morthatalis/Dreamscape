        //storage&cache
        let userid = localStorage.getItem("userid");
        let displayname = sessionStorage.getItem("displayname");
        let navtoggle = sessionStorage.getItem("navtoggle");
        const nav = document.getElementById("nav");
        const mainpage = document.getElementById("mainpage");
        const homeText = document.getElementById("hometext");
        const played = localStorage.getItem("playedgames");
        const recentlyplayed = document.getElementById("recentlyplayed");
        const searchbar = document.getElementById("searchbar");
        const overlay = document.getElementById("overlay");
        const inputuserid = document.getElementById("inputuserid");
        if (navtoggle == "false") {
                nav.style.display = "none";
                mainpage.style.transform = "translateX(0px)";
                mainpage.style.width = "100%";
        } else {
                nav.style.display = "block";
                                mainpage.style.transform = "translateX(200px)";
                //width
                mainpage.style.width = "calc(100%-200px)";

                //transform: translateX();
                
        }
         function opensettings() {
      overlay.classList.add("active");
    }
    function closesettings() {
        if (!(!userid || isNaN(Number(userid)) || Number(userid) < 0)) { 
         overlay.classList.remove("active");
        } else {
            window.alert("bro put in your username lil bro");
        }
    }
    function savesettings() {
        //localStorage.setItem("userid", inputuserid.value);
        fetch("https://cors-anywhere-72ib.onrender.com/https://users.roblox.com/v1/usernames/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usernames: [inputuserid.value],
                excludeBannedUsers: false
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0].id); 
            localStorage.setItem("userid", data.data[0].id);
            localStorage.setItem("Username", inputuserid.value);
            window.location.reload();
        })


    }
        

        if (!userid || isNaN(Number(userid)) || Number(userid) < 0) {
        opensettings();
        
        window.alert("Please input a roblox userid (either yours or a random one) to use this website");
        
        } else {
            
            fetch("https://cors-anywhere-72ib.onrender.com/https://users.roblox.com/v1/users/" + userid)
            .then(response => response.json())
            .then(data => {
            sessionStorage.setItem("displayname", data.displayName);
            localStorage.setItem("savedname", data.displayName);

            const homeText = document.getElementById("hometext");
            //homeText.InnerText = data.displayName;
            displayname = data.displayName;
            inputuserid.value = localStorage.getItem("Username");
            //console.log("fetched"+ data.displayName);
        })
        .catch(error => console.error("Error fetching data:", error));
        }

        //functions
        //console.log(userid);
        function ToggleNav() {
            if (nav.style.display === "none" || nav.style.display === "") {
                nav.style.display = "block";
                              mainpage.style.transform = "translateX(200px)";
                //width
                mainpage.style.width = "calc(100%-220px)";
                sessionStorage.setItem("navtoggle", "true")
            } else {
                nav.style.display = "none";
                //transform: translateX();
                                mainpage.style.transform = "translateX(0px)";
                mainpage.style.width = "100%";  
                sessionStorage.setItem("navtoggle", "false")
            }
        }
        function saveid() {
            //localStorage.setItem("userid", );
            //document.getElementById("username")
            location.reload()
        }
        function gotoprofile() {
            if (! isNaN(Number(userid))) {
                window.location = "user.html?id=" + userid
            }
        }
        function search() {
            window.location = "search.html?q=" + searchbar.value + "&type=games"
        }
        


// Close popup when clicking outside
    overlay.addEventListener("click", function(e) {
      if (e.target === overlay) {
        closesettings();
      }
    });
    