// Level 3 (Grade 6)
level_3_current = "all";
level_3a = document.getElementById("level_3a");
level_3b = document.getElementById("level_3b");
level_3c = document.getElementById("level_3c");
level_3d = document.getElementById("level_3d");
level_3_filter_ico = document.getElementById("grade-6-filter");
level_3_filter_text = document.getElementById("grade-6-filter-text");

function level_3_filter_ico_update(){
  if (level_3_current !== "all"){
    level_3_filter_ico.classList.remove("btn-primary");
    level_3_filter_ico.classList.add("btn-warning");
  } else {
    level_3_filter_ico.classList.remove("btn-warning");
    level_3_filter_ico.classList.add("btn-primary");
  };

  switch(level_3_current){
    case "3a":
    level_3_filter_text.innerText = "Level 3A";
    break;
    case "3b":
    level_3_filter_text.innerText = "Level 3B";
    break;
    case "3c":
    level_3_filter_text.innerText = "Level 3C";
    break;
    case "3d":
    level_3_filter_text.innerText = "Level 3D";
    break;
    default:
    level_3_filter_text.innerText = "Filter"
  }

}

function show_level_3a(){
  level_3a.style.display = "";
  level_3b.style.display = "none";
  level_3c.style.display = "none";
  level_3d.style.display = "none";
  level_3_current = "3a";
  level_3_filter_ico_update();
};

function show_level_3b(){
  level_3a.style.display = "none";
  level_3b.style.display = "";
  level_3c.style.display = "none";
  level_3d.style.display = "none";
  level_3_current = "3b";
  level_3_filter_ico_update();
};

function show_level_3c(){
  level_3a.style.display = "none";
  level_3b.style.display = "none";
  level_3c.style.display = "";
  level_3d.style.display = "none";
  level_3_current = "3c";
  level_3_filter_ico_update();
};

function show_level_3d(){
  level_3a.style.display = "none";
  level_3b.style.display = "none";
  level_3c.style.display = "none";
  level_3d.style.display = "";
  level_3_current = "3d";
  level_3_filter_ico_update();
}

function show_level_3all(){
  level_3a.style.display = "";
  level_3b.style.display = "";
  level_3c.style.display = "";
  level_3d.style.display = "";
  level_3_current = "all";
  level_3_filter_ico_update();
}

// Level 4 (Grade 7)
level_4_current = "all";
level_4a = document.getElementById("level_4a");
level_4b = document.getElementById("level_4b");
level_4c = document.getElementById("level_4c");
level_4d = document.getElementById("level_4d");
level_4_filter_ico = document.getElementById("grade-7-filter");
level_4_filter_text = document.getElementById("grade-7-filter-text");

function level_4_filter_ico_update(){
  if (level_4_current !== "all"){
    level_4_filter_ico.classList.remove("btn-primary");
    level_4_filter_ico.classList.add("btn-warning");
  } else {
    level_4_filter_ico.classList.remove("btn-warning");
    level_4_filter_ico.classList.add("btn-primary");
  };

  switch(level_4_current){
    case "4a":
    level_4_filter_text.innerText = "Level 4A";
    break;
    case "4b":
    level_4_filter_text.innerText = "Level 4B";
    break;
    case "4c":
    level_4_filter_text.innerText = "Level 4C";
    break;
    case "4d":
    level_4_filter_text.innerText = "Level 4D";
    break;
    default:
    level_4_filter_text.innerText = "Filter"
  }

}

function show_level_4a(){
  level_4a.style.display = "";
  level_4b.style.display = "none";
  level_4c.style.display = "none";
  level_4d.style.display = "none";
  level_4_current = "4a";
  level_4_filter_ico_update();
};

function show_level_4b(){
  level_4a.style.display = "none";
  level_4b.style.display = "";
  level_4c.style.display = "none";
  level_4d.style.display = "none";
  level_4_current = "4b";
  level_4_filter_ico_update();
};

function show_level_4c(){
  level_4a.style.display = "none";
  level_4b.style.display = "none";
  level_4c.style.display = "";
  level_4d.style.display = "none";
  level_4_current = "4c";
  level_4_filter_ico_update();
};

function show_level_4d(){
  level_4a.style.display = "none";
  level_4b.style.display = "none";
  level_4c.style.display = "none";
  level_4d.style.display = "";
  level_4_current = "4d";
  level_4_filter_ico_update();
}

function show_level_4all(){
  level_4a.style.display = "";
  level_4b.style.display = "";
  level_4c.style.display = "";
  level_4d.style.display = "";
  level_4_current = "all";
  level_4_filter_ico_update();
}

// Level 5 (Grade 8)
level_5_current = "all";
level_5a = document.getElementById("level_5a");
level_5b = document.getElementById("level_5b");
level_5c = document.getElementById("level_5c");
level_5d = document.getElementById("level_5d");
level_5_filter_ico = document.getElementById("grade-8-filter");
level_5_filter_text = document.getElementById("grade-8-filter-text");

function level_5_filter_ico_update(){
  if (level_5_current !== "all"){
    level_5_filter_ico.classList.remove("btn-primary");
    level_5_filter_ico.classList.add("btn-warning");
  } else {
    level_5_filter_ico.classList.remove("btn-warning");
    level_5_filter_ico.classList.add("btn-primary");
  };

  switch(level_5_current){
    case "5a":
    level_5_filter_text.innerText = "Level 5A";
    break;
    case "5b":
    level_5_filter_text.innerText = "Level 5B";
    break;
    case "5c":
    level_5_filter_text.innerText = "Level 5C";
    break;
    case "5d":
    level_5_filter_text.innerText = "Level 5D";
    break;
    default:
    level_5_filter_text.innerText = "Filter"
  }

}

function show_level_5a(){
  level_5a.style.display = "";
  level_5b.style.display = "none";
  level_5c.style.display = "none";
  level_5d.style.display = "none";
  level_5_current = "5a";
  level_5_filter_ico_update();
};

function show_level_5b(){
  level_5a.style.display = "none";
  level_5b.style.display = "";
  level_5c.style.display = "none";
  level_5d.style.display = "none";
  level_5_current = "5b";
  level_5_filter_ico_update();
};

function show_level_5c(){
  level_5a.style.display = "none";
  level_5b.style.display = "none";
  level_5c.style.display = "";
  level_5d.style.display = "none";
  level_5_current = "5c";
  level_5_filter_ico_update();
};

function show_level_5d(){
  level_5a.style.display = "none";
  level_5b.style.display = "none";
  level_5c.style.display = "none";
  level_5d.style.display = "";
  level_5_current = "5d";
  level_5_filter_ico_update();
}

function show_level_5all(){
  level_5a.style.display = "";
  level_5b.style.display = "";
  level_5c.style.display = "";
  level_5d.style.display = "";
  level_5_current = "all";
  level_5_filter_ico_update();
}