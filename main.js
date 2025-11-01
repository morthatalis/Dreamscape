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


        if (!userid || isNaN(Number(userid)) || Number(userid) < 0) {
        window.alert("Please put your Roblox userid in the sidenav to actually use this site");
        } else {
            puter.net.fetch("https://users.roblox.com/v1/users/" + userid)
            .then(response => response.json())
            .then(data => {
            sessionStorage.setItem("displayname", data.displayName)
            const homeText = document.getElementById("hometext");
            displayname = data.displayName;
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
            localStorage.setItem("userid", document.getElementById("userid").value);
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
