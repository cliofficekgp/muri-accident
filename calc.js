const fs = require('fs');
const content = fs.readFileSync('presentation/script.js', 'utf8');
let dist = 0;
let lines = content.split('\n');
let print = false;
lines.forEach(line => {
    const match = line.match(/{ t: \"[0-9:]+\", s: [0-9]+, d: [0-9]+/g);
    if(match) {
        match.forEach(m => {
            const parts = m.match(/{ t: \"([0-9:]+)\", s: ([0-9]+), d: ([0-9]+)/);
            dist += parseInt(parts[3]);
            if(parts[1] === '01:38:50') print = true;
            if(print) console.log(parts[1] + ' -> dist: ' + dist);
            if(parts[1] === '01:39:12') print = false;
        });
    }
});
