const db = {
  user: []
}

export default {
  getData: () => db,
  setData: (key, value) => {
    db[key] = value
    return db
  }, 
}
