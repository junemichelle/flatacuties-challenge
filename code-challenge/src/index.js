// Your code here;

let characters = [
  {
    id: 1,
    name: "Mr. Cute",
    image: "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
    votes: 0,
  },
  {
    id: 2,
    name: "Mx. Monkey",
    image:
      "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
    votes: 0,
  },
  {
    id: 3,
    name: "Ms. Zebra",
    image: "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
    votes: 0,
  },
  {
    id: 4,
    name: "Dr. Lion",
    image:
      "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
    votes: 0,
  },
  {
    id: 5,
    name: "Mme. Panda",
    image: "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
    votes: 0,
  },
];

let selectedCharacter = 0;

characterBar();

function characterBar() {
  let characterBar = document.getElementById("character-bar");
  console.log(characterBar);

  let string = "";
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    string +=
      `<span onclick="detailedInfo(${i})" id="${character.id}">` +
      `${character.name}</span>`;
  }
  characterBar.innerHTML = string;
  detailedInfo(0);
}

function detailedInfo(id) {
  let character = characters[id];
  selectedCharacter = id;
  let characterName = document.getElementById("name");
  let characterImage = document.getElementById("image");
  let characterVotes = document.getElementById("vote-count");

  characterName.innerText = character.name;
  characterImage.src = character.image;
  characterVotes.innerText = character.votes;
}

let votesForm = document.getElementById("votes-form");
votesForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputVotes = document.getElementById("votes");
  let votes = parseInt(inputVotes.value);

  if (!votes) return;

  let character = characters[selectedCharacter];
  character.votes += votes;
  detailedInfo(selectedCharacter);
  inputVotes.value = "";
});

let resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function () {
  let character = characters[selectedCharacter];
  character.votes = 0;
  detailedInfo(selectedCharacter);
});
