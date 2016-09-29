var wdi_38_names = ["Adrianna", "Andrew", "Christian", "Daniel", "David", "Desi", "Emily", "Jenny", "Kate", "Kevin", "Matt", "Michael", "Ramin", "Taylor"];

function eachName() {
  index = Math.floor(Math.random() * wdi_38_names.length)
  name = wdi_38_names[index];
  document.getElementById("name").innerHTML = name;
  wdi_38_names.splice(index, 1);
  console.log(wdi_38_names.length);
}

function reloadArray() {
  wdi_38_names = ["Adrianna", "Andrew", "Christian", "Daniel", "David", "Desi", "Emily", "Jenny", "Kate", "Kevin", "Matt", "Michael", "Ramin", "Taylor"];
}

function clickMe() {
  (wdi_38_names.length > 0) ? eachName() : reloadArray();
}
