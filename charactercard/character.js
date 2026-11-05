const  character= {
    
    sections: [
        {name: 'Veywrath', class: 'Rogue', strength: 6, stealth: 9, 
            deception: 10, intelligence: 8, charisma: 5, src: 'images/snake.png', alt: 'Veywrath the Rogue'},
        {name: 'Pipkin', class: 'Druid', strength: 2, stealth: 5, 
            deception: 2, intelligence: 5, charisma: 10, src: 'images/bunny.png', alt: 'Pipkin the Druid'},
        {name: 'Korrath', class: 'Sorcerer', strength: 7, stealth: 9, 
            deception: 2, intelligence: 10, charisma: 6, src: 'images/owl.png', alt: 'Korrath the Sorcerer'},
        {name: 'Thistlewick', class: 'Paladin', strength: 3, stealth: 9, 
            deception: 7, intelligence: 7, charisma: 8, src: 'images/weasel.png', alt: 'Thistlewick the Paladin'},
        {name: 'GoldWreath', class: 'Warrior', strength: 10, stealth: 1, 
            deception: 0, intelligence: 10, charisma: 3, src: 'images/lion.png', alt: 'GoldWreath the Warrior'},
        {name: 'Aeltharion', class: 'Wizard', strength: 9, stealth: 2, 
            deception: 5, intelligence: 8, charisma: 7, src: 'images/unicorn.png', alt: 'Aeltharion the Wizard'},
    ],

    level: 1,
    health: 100,

    attacked: function() {
        if (this.health <= 0) {
            alert("Your character has been defeated.");
        } else {
            this.health -= 20;
        }
    },

    levelUp: function() {
        if (this.health <= 0) {
            alert("Your character has been defeated and cannot level up.");
            return;
        } else {this.level += 1;}
        
    }

}

function chooseCharacter(characterName) {
    const selectedCharacter = character.sections.find(c => c.name.toLowerCase()
     === characterName.toLowerCase());
    return selectedCharacter;
}

const characterSelect = document.querySelector('#character-select');
characterSelect.addEventListener('change', function() {
    const selectedName = characterSelect.value;
  
    //this if statement makes it reset if they have it on the choose character
    //selection.

    if (selectedName === "") {
        document.querySelector('.characterName').textContent = "Choose Your Character";
        document.querySelector('.class').textContent = "";
        document.querySelector('.strength').textContent = "";
        document.querySelector('.stealth').textContent = "";
        document.querySelector('.deception').textContent = "";
        document.querySelector('.intelligence').textContent = "";
        document.querySelector('.charisma').textContent = "";
        document.querySelector('.health').textContent = "";
        document.querySelector('.level').textContent = "";
        document.querySelector('.image').src = "images/default.png";
        document.querySelector('.image').alt = "Default Character Image";

        return;
    }
    
    const selectedCharacter = chooseCharacter(selectedName);

    if(!selectedCharacter) {
        return;
    }

    //below code resets health if you switch characters
    character.health = 100;
    character.level = 1;

    document.querySelector('.characterName').textContent = selectedCharacter.name;
    document.querySelector('.class').textContent = selectedCharacter.class;
    document.querySelector('.health').textContent = character.health;
    document.querySelector('.level').textContent = character.level;
    document.querySelector('.strength').textContent = selectedCharacter.strength;
    document.querySelector('.stealth').textContent = selectedCharacter.stealth;
    document.querySelector('.deception').textContent = selectedCharacter.deception;
    document.querySelector('.intelligence').textContent = selectedCharacter.intelligence;
    document.querySelector('.charisma').textContent = selectedCharacter.charisma;
    document.querySelector('.image').src = selectedCharacter.src;
    document.querySelector('.image').alt = selectedCharacter.alt;
})


const attackButton = document.querySelector('.attack');
attackButton.addEventListener('click', function() {
    if (characterSelect.value === "") {
        alert("Please select a character before attacking.");
        return;
    }
    else {
        character.attacked();
    }
    document.querySelector('.health').textContent = character.health;
});

const levelUpButton = document.querySelector('.levelup');
levelUpButton.addEventListener('click', function() {
    if (characterSelect.value === "") {
        alert("Please select a character before leveling up.");
        return;
    }
    character.levelUp();
    document.querySelector('.level').textContent = character.level;
});

// if statements in the event of attact or level up prevent user from
// clicking the buttons before choosing a character.