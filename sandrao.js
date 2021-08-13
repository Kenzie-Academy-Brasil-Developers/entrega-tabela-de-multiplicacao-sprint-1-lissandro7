function multiplos(norte) {
    const armazenarOne = [];

    for (let c = 0; c <= norte; c++) {
        const armazenarTwo = [];
        
        for (let i = 0; i <= norte; i++) {
            const sul = i * c;
            armazenarTwo.push(sul);
        }
        armazenarOne.push(armazenarTwo);
    } 
    console.table(armazenarOne);
    return armazenarOne;
}
multiplos(7);