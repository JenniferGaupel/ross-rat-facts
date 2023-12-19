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
                   "Rats are naturally suspicious",
                   "Rats know your secrets",
                   "Rats are known to cannibalize their weak or dead, especially in overpopulated environments",
                   "A pair of brown rats can produce as many as 2,000 descendants in a year",
                   "Rats can survive being flushed down toilets, often re-entering buildings through the same pipes",
                   "Rat bites and scratches can result in rat-bite fever",
                   "Some rat species are aggressive",
                   "Rats are capable of chewing through concrete and metal",
                   "In crowded conditions, rats can display aggressive behavior, leading to rat wars",
                   "Urban rat populations are often immune to common rat poisons, leading to super colonies resistant to extermination",
                   "Rats have very sharp and strong incisors, capable of inflicting serious injuries",
                   "Rats can survive falls from significant heights",
                   "Rats are in your walls right now",
                   "Don't look now, but the rats are right behind you",
                   "Rat colonies can exist undetected within walls and ceilings",
                   "Rats are nocturnal and elusive",
                   "Some rats can grow to be as large as a cat.",
                  ]

function showRatFact(){
    let fact_index = Math.floor(Math.random() * rat_facts.length)
    let fact = rat_facts[fact_index];
    document.getElementById("rat-facts").style.backgroundColor = "#0FFF50";
    document.getElementById("rat-facts").innerHTML = fact;
}