// jQuery on Load of DOM
$(function() {
  // /* Number API CB Pattern */
  // function getRandomNum() {
  //   // return Math.floor(Math.random() * 101);
  //   return 21;
  // }
  // function getNumberFact() {
  //   return $.getJSON(`http://numbersapi.com/${getRandomNum()}/trivia?json`);
  // }
  // // numberAPI STufffffffffff
  // const numberPromises = [];
  // for (let i = 0; i < 4; i++) {
  //   numberPromises.push(getNumberFact());
  // }
  // Promise.all(numberPromises)
  //   .then(numberResults => {
  //     displayResultsToDom(numberResults);
  //   })
  //   .catch(err => {
  //     $('#numbers-container')
  //       .empty()
  //       .append($('<div>').text(`Fav Error: ${err['responseText']}`));
  //   });
  // function displayResultsToDom(results) {
  //   results.forEach(randomNumberResults => {
  //     $('#numbers-container')
  //       .append($('<div>').text(`Fav Number: ${randomNumberResults['number']}`))
  //       .append($('<div>').text(randomNumberResults['text']));
  //   });
  // }
  // let deckId = undefined;
  // // grab a deck
  // $.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
  //   .then(deckInfo => {
  //     deckId = deckInfo['deck_id'];
  //     $('#playingcards-container').append(
  //       $('<button>')
  //         .text('Gimme a card!')
  //         .on('click', drawCard)
  //     );
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // function drawCard() {
  //   $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  //     .then(cardObj => {
  //       const card = {
  //         value: cardObj['cards'][0]['value'],
  //         suit: cardObj['cards'][0]['suit']
  //       };
  //       displayCardResultsToDom(card);
  //     })
  //     .catch(err => console.log(err));
  // }
  // function displayCardResultsToDom(card) {
  //   $('#playingcards-container')
  //     .append($('<div>').text(`Card Value: ${card['value']}`))
  //     .append($('<div>').text(`Card Suit: ${card['suit']}`));
  // }
  // // grab a deck
  // //  display grabbing a card
  // //  create a event listener
  // // on click of grab card
  // //  turn off listener
  // //  grab card
  // //  turn back on listener
  // // $.getJSON(
  // //   `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`,
  // //   apiResponse => {
  // //     deckId = apiResponse['deck_id'];
  // //     $.getJSON(
  // //       `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
  // //       cardObj => {
  // //         const card = {
  // //           value: cardObj['cards'][0]['value'],
  // //           suit: cardObj['cards'][0]['suit']
  // //         };
  // //         displayCardResultsToDom(card);
  // //         $.getJSON(
  // //           `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
  //           cardObj => {
  //             const card2 = {
  //               value: cardObj['cards'][0]['value'],
  //               suit: cardObj['cards'][0]['suit']
  //             };
  //             displayCardResultsToDom(card2);
  //           }
  //         );
  //       }
  //     );
  //   }
  // );
  /* Number API Promise Pattern */
  // const favNumber = 21;
  // $.getJSON(`http://numbersapi.com/${favNumber}/trivia?json`)
  //   .then(apiResult => {
  //     $('#numbers-container')
  //       .empty()
  //       .append($('<div>').text(`Fav Number: ${apiResult['number']}`))
  //       .append($('<div>').text(apiResult['text']));
  //   })
  //   .catch(err => {
  //     $('#numbers-container')
  //       .empty()
  //       .append($('<div>').text(`Fav Error: ${err['responseText']}`));
  //   });
});
