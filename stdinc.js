const incstr = `
<div class="container-fluid">
        <div id="toppad">
        <button onclick="ToggleNav()" style="background-color: transparent; border: none;" class="navbtn"><img src="img/hamburger.png" width="25" height="25"></button>
        <a href="index.html">
                <img src="img/icon.ico" width="30" height="30">
             </a>
        </div>
        <div class="nav rbx-navbar hidden-xs hidden-sm col-md-4 col-lg-3">
            <padding></padding>
            <padding></padding>
            <li>
                <a href="games.html">Games</a>
            </li>
            <!--<li> 
                <a href="catalog.html">Catalog</a>
            </li> -->
            
        </div>
        <div class="rbx-navbar-header">
            <div data-behavior="nav-notification" class="rbx-nav-collapse" onselectstart="return false;">
                <div class="rbx-nav-notification hide rbx-font-xs" title="0"></div>
            </div>
            <div class="navbar-header">
                <a class="navbar-brand" href="index.html"><span class="logo"></span></a>
            </div>
              <div>
	
                 <input class="form-control rbx-input-field" onkeydown="if(event.key === 'Enter'){ search(); }" id="searchbar" type="text" placeholder="Search" style="width: 200px;" maxlength="120">
                    <button type="button" onclick="search()" class="rbx-input-group-btn" style="background-image: url(img/search_icon.png); background-repeat: no-repeat; height: 25px; transform: translate(-35px, 2.5px); border: hidden;"></button>
    
    </div>
    
</div>
</div>

<div id="nav" style="display: none; z-index: 1000; position: fixed; top: 40px; left: 0;">
        <nav>
            <a href="index.html">
            <button class="navbarbtn">Home</button>
            </a>
            <button class="navbarbtn" onclick="gotoprofile()">Profile</button>
            <textarea class="navbarbtn" style="padding: 3px; width: 96%; resize: none;" id="userid" placeholder="put your roblox userid here"></textarea>
            <button class="navbarbtn" onclick="saveid()">Save userid</button>
        </nav>
    </div>
`
document.body.insertAdjacentHTML('afterbegin',incstr);
console.log("CURRENT HTML INCLUDE", incstr);
