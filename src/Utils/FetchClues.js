//Shuffle Function from https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function shuffle(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

async function fetchCategories() {
  const res = await fetch('http://jservice.io/api/categories?count=50');
  return res.json();
}
async function fetchCluesByCategory(id) {
  const res = await fetch('http://jservice.io/api/category?id=' + id);
  return res.json();
}


export default async function FetchClues() {
  let categories = await fetchCategories();
  shuffle(categories);

  let promises = Array.from(Array(6), (_, i) => new Promise((resolve, reject) => {
    try {
      resolve(fetchCluesByCategory(categories[i].id));
    } catch(e) {
      reject(e)
    }
  }));

  let clueSet = await Promise.all(promises);

  for(let i = 0; i < clueSet.length; i++) {
    let clues = clueSet[i].clues;
    let modifiedClues = new Array(5).fill(null);

    shuffle(clues);

    for(let j = 0; j < 5; j++) {
      clues[j].value = 200 * (j + 1);
      modifiedClues[j] = clues[j];
    }

    clueSet[i].clues = modifiedClues;
  }

  return clueSet;
}