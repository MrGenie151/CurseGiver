const punishments = [
    "Go into a popular server of your choice and say “Nyaa” in a feminine voice in the vc and then leave.",
    "You need to send a picture of the rock to someone random they know.",
    "Send 2 screenshots of your search history to a friend",
    '<img src="puro pfp.png" class="pfp">Set your PFP to Puro (the image to the left) for one week.',
    'Nothing happens, feel lucky.',
    'Send this website to someone else.',
    "Be somebody's slave that you choose for the day, but the person you choose must be active.",
    'Screenshot your recently used emoji list, and send.',
    "Act like a SIMP, to whoever you want.",
    "Add UwU to the end of your username for the day.<br />(If you don't have perms then reroll.)",
    "You encountered Sans! Make a Sans pun to pass.",
    "Change your PFP to the opposite gender of your current PFP for 5 days.",
    "S-stutter in y-your next 10 m-messages.",
    "Change your PFP to the next image sent in chat for 3 days.",
    'Say "I SIMP for Astolfo"',
    "Act as a furry for a day.",
    "Change your PFP to Anime Catgirl for 12 days.",
    "Go outside and touch grass.",
    'Say "I love you :heart:" to anyone random here.',
    "Roleplay as a Kawaii Neko for a day.",
    "Combine two different punishments.",
    'Say "N-nyaaa~! :3"',
    "Be a furry for a week."
]

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getRandomArrVal(array) {
    let rand = Math.floor(Math.random() * array.length)
    return array[rand]
}

$("#giver").click(function(){
    let text = $("#ptext")
    text.html(getRandomArrVal(punishments))

    $("#result").show()
})