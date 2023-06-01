var arr = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'd'];
  var password = "";
  for (var i = 0; i < 6; i++) {
    var myIndex = Math.floor(Math.random() * arr.length);
    password += arr[myIndex];
  }
  document.getElementById("number").innerHTML =password
