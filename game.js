var grille = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
];

function getNombreCellulesMortes(x, y, alive = false) {
    var _state = 0;
    var cell = 0;
    var _maxX = grille.length - 1;
    var _maxY = grille[0].length - 1;
    if(alive) {
        cell = 1;
    }
    if (x > 0 && y > 0 && grille[x-1][y-1] == cell)
        _state++;
    if (y > 0 && grille[x][y-1] == cell)
        _state++;
    if (x < _maxX && y > 0 && grille[x+1][y-1] == cell)
        _state++;
    if (x > 0 && grille[x-1][y] == cell)
        _state++;
    if (x < _maxX && grille[x+1][y] == cell)
        _state++;
    if (x > 0 && y < _maxY && grille[x-1][y+1] == cell)
        _state++;
    if (y < _maxY && grille[x][y+1] == cell)
        _state++;
    if (y < _maxY && x < _maxX && grille[x+1][y+1] == cell)
        _state++;

    return _state;
}

// On parcours la grille
for (indexLigne = 0; indexLigne < 5; indexLigne++) {
    for (indexColonne = 0; indexColonne < 5; indexColonne++) {

    }
}


function checkAlive(x, y) {
    if(getNombreCellulesMortes(x,y) == 3){
        return 0;
    }
    return 1;
}