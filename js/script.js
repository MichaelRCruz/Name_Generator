var wdi_38_names = ["Kevin", "Andrew", "Aaron", "Paul", "Michael", "Emily", "Viviana", "Darin", "Gaye", "Antonio", "Josh"];

function eachName() {
  index = Math.floor(Math.random() * wdi_38_names.length)
  name = wdi_38_names[index];
  document.getElementById("name").innerHTML = name;
  wdi_38_names.splice(index, 1);
  console.log(wdi_38_names.length);
}

function reloadArray() {
  wdi_38_names = ["Kevin", "Andrew", "Aaron", "Paul", "Michael", "Emily", "Viviana", "Darin", "Gaye", "Antonio", "Josh"];
}

function clickMe() {
  (wdi_38_names.length > 0) ? eachName() : reloadArray();
}
