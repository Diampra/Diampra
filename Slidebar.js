function openNav() {
    document.getElementById("sideBar").style.width = "100%";
    document.getElementById("sideNav").style.width = "40%";
    // document.getElementById("MAdv").style.display = 'none';
    document.getElementById("Icon_feather-menu").style.display = 'none';
    // console.log(document.getElementById("MAdv").style.display);
  }
  
  /*Close navigation*/
  function exitNav() {
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("sideNav").style.width = "0";
    // document.getElementById("MAdv").style.display = "flex";
    document.getElementById("Icon_feather-menu").style.display = 'flex';
  }