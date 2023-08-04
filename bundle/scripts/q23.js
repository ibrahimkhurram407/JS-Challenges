let q23_array = [
  "https://www.rd.com/wp-content/uploads/2023/04/Hilarious-Cat-Memes-FT.jpg",
  "https://www.rd.com/wp-content/uploads/2023/04/Hilarious-Cat-Memes-FT.jpg",
  "https://thumbs.dreamstime.com/z/metal-dice-metal-dice-isolated-white-background-212549923.jpg",
  "https://www.rd.com/wp-content/uploads/2023/04/Hilarious-Cat-Memes-FT.jpg",
  "https://todaysparent.mblycdn.com/tp/resized/2017/06/1200x630/when-your-kid-becomes-a-meme.jpg"
];


function q23Main () {
    let img = document.getElementById("q23-img");
    random = Math.floor(Math.random() * 5);
    img.setAttribute("alt", "meme" + random);
    img.setAttribute("src", q23_array[random]);
}