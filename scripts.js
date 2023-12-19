const rat_facts = ["Rats are generally slender with a pointed head",
                   "Rats can be found on every continent except Antarctica",
                   "Rats are efficient multipliers",
                   "Rats live underground",
                   "Rat teeth never stop growing",
                   "Rats have eyes on either side of their head that can move in opposite directions",
                   "Giant African pouched rats have been trained to detect tuberculosis in humans",
                   "Rats can count to 10",
                   "Rats experience slow-wave sleep and even have dreams when they're asleep",
                   "Rats like macaroni cheese, scrambled eggs and boiled corn",
                   "Rats have belly buttons",
                   "Rats have a 'foldable' skeleton",
                   "Rats are the second most successful mammals in the world, behind humans",
                   "Rats are naturally suspicious"
                  ]

function showRatFact(){
    let fact_index = Math.floor(Math.random() * 15)
    let fact = rat_facts[fact_index];
    document.getElementById("rat-facts").style.backgroundColor = "#0FFF50";
    document.getElementById("rat-facts").innerHTML = fact;
}