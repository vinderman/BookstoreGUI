const obj = {
  name: ''
}

Object.defineProperty(obj, name, {
  get() {
    return obj.name
  },

  set(value) {
    obj.name = value
  }
})

export default obj



