function loadAvatar(e) {
  e.preventDefault();
  // get form values
  let t = document.getElementById('type');
  let type = t.options[t.selectedIndex].value;
  let name = document.getElementById('name').value;
  let width = document.getElementById('width').value;
  let height = document.getElementById('height').value;
  let c = document.getElementById('color');
  let color =c.options[c.selectedIndex].value;
  let m = document.getElementById('mood');
  let mood = m.options[m.selectedIndex].value;

//create color code
let backgroundColor = getColor(color);

//create url
let url = "https://avatars.dicebear.com/v2/" + type + "/" + name + ".svg?";

if(backgroundColor !== "")
{
  url += "options[background]=%23" + backgroundColor;
}
if(width !== "")
{
  url += "&options[width]=" + width;
}

if(height !== "")
{
  url += "&options[height]=" + height;
}

url +="&options[mood][]=" + mood;

updateAvatar(url);

}

function updateAvatar(url) {
  document.getElementById('avatar').src = url;
}

function getColor(colorName) {
  let colorCode;
  if(colorName === "white")
  {
    colorCode = "ffffff";
  }
  else if(colorName === "pink")
  {
    colorCode = "ffccff";
  }
  else if(colorName === "red")
  {
    colorCode = "ff9999";
  }
  else if(colorName === "orange")
  {
    colorCode = "ffc299";
  }
  else if(colorName === "yellow")
  {
    colorCode = "ffff99";
  }
  else if(colorName === "green")
  {
    colorCode = "ccffb3";
  }
  else if(colorName === "blue")
  {
    colorCode = "b3ecff";
  }
  else if(colorName === "indigo")
  {
    colorCode = "9999ff";
  }
  else if(colorName === "purple")
  {
    colorCode = "ccb3ff";
  }
  else if(colorName === "light gray")
  {
    colorCode = "d9d9d9";
  }
  else if(colorName === "cream")
  {
    colorCode = "fff2e6";
  }
  else {
    colorCode = "";
  }
  return colorCode;
}

document.getElementById('getButton').addEventListener('click', loadAvatar);
