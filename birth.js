function wishu(){
const wishes = [
    "Wishing you a day filled with love and cheer!",
    "May your birthday be as wonderful as you are!",
    "Here's to another year of fabulous you!",
    "Cheers to you on your special day!",
    "May all your wishes come true!",
    "Celebrate your day to the fullest!",
];
    const randomIndex = Math.floor(Math.random() * wishes.length);
    document.getElementById("wish").value = wishes[randomIndex];
    console.log('wish');
}