var idx, idx2;

function Kitten(image) {
  this.image = image;
  this.votes = 0;
}

var images = [];
  images.push('images/01.jpg');
  images.push('images/02.jpg');
  images.push('images/03.jpg');
  images.push('images/04.jpg');
  images.push('images/05.jpg');
  images.push('images/06.jpg');
  images.push('images/07.jpg');
  images.push('images/08.jpg');
  images.push('images/09.jpg');
  images.push('images/10.jpg');
  images.push('images/11.jpg');
  images.push('images/12.jpg');
  images.push('images/13.jpg');
  images.push('images/14.jpg');

var kittenPics = [];
for (var i = 0; i < images.length; i++) {
  kittenPics.push(new Kitten(images[i]));
}

var showKitten = function () {
  idx = Math.floor(Math.random() * kittenPics.length);
  do {
    idx2 = Math.floor(Math.random() * kittenPics.length);
    $('#FirstPhoto').attr('src', kittenPics[idx].image);
    $('#SecondPhoto').attr('src', kittenPics[idx2].image);}
  while(idx === idx2);
}

showKitten();

var $first = $('#FirstPhoto');
var $second = $('#SecondPhoto');
$first.on('click', function() {
  kittenPics[idx].votes +=1;
  console.log(kittenPics[idx].votes);
  showKitten();
})

$second.on('click', function() {
  kittenPics[idx2].votes +=1;
  console.log(kittenPics[idx2].votes);
  showKitten();
})


