function myFunction() {
    var checkBox = document.getElementById("check");
    var ul = document.getElementById("show");
    var btn = document.getElementById("btn")
    var cancel = document.getElementById("cancel")
    
    btn.style.display = "none";
    if (checkBox.checked == true){
        ul.style.left = "0";
        cancel.style.display = "block";
        
    } else {
        btn.style.display = "block";
        cancel.style.display = "none";
        ul.style.left = "-100%";
    }
  }