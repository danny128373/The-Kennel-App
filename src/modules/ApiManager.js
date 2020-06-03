const remoteURL = "http://localhost:5002"

export default {

  get(id, collection) {
    return fetch(`${remoteURL}/${collection}/${id}`).then(e => e.json())
  },
  getAll(collection) {
    return fetch(`${remoteURL}/${collection}`).then(e => e.json())
  },
  delete(id, collection) {
    return fetch(`${remoteURL}/${collection}/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  post(newAnimal, collection) {
    return fetch(`${remoteURL}/${collection}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },
  update(editedAnimal, collection) {
    return fetch(`${remoteURL}/${collection}/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },
  // Add this method to the AnimalManager object
  getRandomId(collection) {
    return fetch(`${remoteURL}/${collection}`)
      .then(result => result.json())
      .then(animals => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        const randomAnimal = animals[randomIndex];
        return randomAnimal.id;
      });
  }
}