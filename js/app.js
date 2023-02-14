
var url = window.location.href;


document.getElementById("share-btn").addEventListener("click", function () {
    console.log("clicked")
  var platform = prompt("Enter the name of the platform you want to share on (Facebook, Twitter, LinkedIn)");

  if (platform === null || platform === "") {
    return;
  }

  if (platform.toLowerCase() === "facebook") {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url));
  } else if (platform.toLowerCase() === "twitter") {
    window.open("https://twitter.com/share?url=" + encodeURIComponent(url));
  } else if (platform.toLowerCase() === "linkedin") {
    window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(url));
  } else {
    alert("Invalid platform name");
  }
});




document.getElementById("articless").addEventListener("click", function () {
    document.getElementById("articles").style.display = "block";
    document.getElementById("short-stories").style.display = "none";
    document.getElementById("essay").style.display = "none";
    document.getElementById("Poems").style.display = "none";
  });
  
  document.getElementById("storiess").addEventListener("click", function() {
    document.getElementById("articles").style.display = "none";
    document.getElementById("short-stories").style.display = "block";
    document.getElementById("essay").style.display = "none";
    document.getElementById("Poems").style.display = "none";
  });
  
  document.getElementById("essays").addEventListener("click", function() {
    document.getElementById("articles").style.display = "none";
    document.getElementById("short-stories").style.display = "none";
    document.getElementById("essay").style.display = "block";
    document.getElementById("Poems").style.display = "none";
  });
  
  document.getElementById("poemss").addEventListener("click", function() {
    document.getElementById("articles").style.display = "none";
    document.getElementById("short-stories").style.display = "none";
    document.getElementById("essay").style.display = "none";
    document.getElementById("Poems").style.display = "block";
  });
  