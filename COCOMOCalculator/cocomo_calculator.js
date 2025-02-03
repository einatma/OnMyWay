function calculateCOCOMO() {
    const kloc = parseFloat(document.getElementById('kloc').value);
    const eaf = parseFloat(document.getElementById('eaf').value);
    const projectType = document.getElementById('project-type').value;
    
    const parameters = {
        organic: { a: 2.4, b: 1.05, c: 2.5, d: 0.38 },
        semidetached: { a: 3.0, b: 1.12, c: 2.5, d: 0.35 },
        embedded: { a: 3.6, b: 1.20, c: 2.5, d: 0.32 }
    };
    
    const { a, b, c, d } = parameters[projectType];
    const effort = a * eaf * Math.pow(kloc, b);
    const tdev = c * Math.pow(effort, d);
    const team = effort / tdev;
    
    document.getElementById('effort').innerText = effort.toFixed(2);
    document.getElementById('tdev').innerText = tdev.toFixed(2);
    document.getElementById('team').innerText = team.toFixed(2);
}