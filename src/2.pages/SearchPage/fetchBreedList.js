async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];
  let breed;
  if (!animal) return [];

  const res = await fetch(`http://localhost:5000/api/pets?breed=${breed}`);

  if (!res.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }

  return res.json();
}

export default fetchBreedList;
