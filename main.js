/*
En el juego de casino Blackjack, un jugador puede determinar si tiene una ventaja en la siguiente mano sobre la casa 
llevando la cuenta del número relativo de cartas altas y bajas que quedan en la baraja. Esto se llama cuenta de tarjetas.

Tener más cartas altas en la baraja es una ventaja para el jugador. 
Se le asigna un valor a cada carta de acuerdo a la siguiente tabla. 
Cuando el conteo es positivo, el jugador debería apostar alto. Cuando el conteo da 0 o negativo, el jugador debería apostar bajo.

|--------------------|  |--------------------|
| Cambios del conteo |  |        Cartas      |  
|--------------------|  |--------------------|
|        +1          |  |   2, 3, 4, 5, 6    | // APOSTAR ALTOA
|--------------------|  |--------------------|
|         0          |  |       7, 8, 9      | |-----------------|
|--------------------|  |--------------------| |   APOSTAR BAJO  |
|         -1         |  |10, 'J','Q','K','A' | |-----------------|
|--------------------|  |--------------------|
Escribirás una función para contar cartas. Recibirá un parámetro card (carta)
que puede ser un número o una cadena y aumentar o reducir la variable global count (conteo) 
de acuerdo al valor de la carta (observa la tabla). La función devolverá una cadena con el conteo actual 
y la cadena Bet (Apuesta) si el conteo es positivo, o Hold (Espera) si el conteo es cero o negativo. 
El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.
*/

let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6){
        count += 1;
    } else if(card == 7 || card == 8 || card == 9){
        count += 0;
    }else if(card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A'){
        count -= 1;
    }
    if (count <= 0){
        return String(count) + " Hold";
    }else{
        return String(count) + " Bet"
    }
    // Cambia solo el código encima de esta línea
}
console.log(cc(2), cc(3), cc(4), cc('5'), cc('6'));