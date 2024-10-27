//on the client side. we will have an input to get the user's input and a button they can click
//when they enter a string that string will be posted to the backend and get a response back

document.querySelector('#heads').addEventListener('click', (e) => checkToss(e));
document.querySelector('#tails').addEventListener('click', (e) => checkToss(e));


function checkToss(e) {
  const userToss = e.target.id;
  const url = `/api?choice=${userToss}`;

  fetch(url)
    .then((resp) => resp.json())
    .then((res) => {
      // document.querySelector('#result').textContent = `${word} ${res.result ? 'is' : 'IS NOT'} a palindrome `; 
      console.log(res);
    })
    .catch((err) => console.log(err));
}

