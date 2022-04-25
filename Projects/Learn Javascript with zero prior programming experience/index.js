let usualSuspects = [
    {size: 100, name: "pig", eyes: "blue", smokes: true},
    {size: 45, name: "cat", eyes: "green", smokes: false},
    {size: 80, name: "dog", eyes: "blue", smokes: false},
    {size: 30, name: "lizard", eyes: "yellow", smokes: true},
    {size: 20, name: "mouse", eyes: "black", smokes: false},
    {size: 60, name: "duck", eyes: "yellow", smokes: true}
];

let suspects = [];
for(let usualSuspect of usualSuspects){
    if(usualSuspect.size > 40){
        if(usualSuspect.name.length === 3){
            if(usualSuspect.eyes === "blue"){
                if(usualSuspect.smokes === true){
                   suspects.push(usualSuspect);
                }
            }
        }
    }
}
    