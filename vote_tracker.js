var idx, idx2;
var kittenPics = [];

var showKitten = function () {
  idx = Math.floor(Math.random() * kittenPics.length);
  do {
    idx2 = Math.floor(Math.random() * kittenPics.length);
    $('#FirstPhoto').attr('src', kittenPics[idx].link);
    $('#SecondPhoto').attr('src', kittenPics[idx2].link);
  }
  while(idx === idx2);
}

$.ajax ({
  url: "https://api.imgur.com/3/album/L540t/images",
  headers: {
    'Authorization': 'Client-ID 30485aebdd4f8af'
  }
}).done(function(res) {
  kittenPics = res.data;
  showKitten();
})

var $first = $('#FirstPhoto');
var $second = $('#SecondPhoto');

$first.on('click', function(e) {
  e.preventDefault();
  $('img').removeClass('winner');
  $(this).addClass('winner');
  kittenPics[idx].vote += 1;
  $("h4#idx").text('This cat now has ' + kittenPics[idx].vote + ' votes!')
  var idx3 = Math.floor(Math.random() * kittenPics.length);
  idx2 = idx3;
  $('img').not('.winner').attr('src', kittenPics[idx3].link);
});

$second.on('click', function(e) {
  e.preventDefault();
  $('img').removeClass('winner');
  $(this).addClass('winner');
  kittenPics[idx2].vote += 1;
  $("h4#idx2").text('This cat now has ' + kittenPics[idx2].vote + ' votes!')
  var idx3 = Math.floor(Math.random() * kittenPics.length);
  idx = idx3;
  $('img').not('.winner').attr('src', kittenPics[idx3].link);
});

console.log;
//The text needs to clear from the screen for the photo that DOESN'T receive a
//vote. Perhaps it should be an onclick event that adds votes to the winning
//photo while simultaneously clearing text underneath the losing photo. Can't
//figure it out.

