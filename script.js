// DOM manipulations

document.getElementById("reveal-fact").addEventListener("click", function () {
  const fact = document.getElementById("fact");
  if (fact.style.display === "none") {
    fact.style.display = "block";
  } else {
    fact.style.display = "none";
  }
});