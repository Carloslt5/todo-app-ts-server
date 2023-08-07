import mongoose from 'mongoose'

export default (): void => {
  const MONGO_URI =
    process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/todo-app'

  mongoose.connect(MONGO_URI)
    .then((x) => {
      const dbName = x.connections[0].name
      console.log(`Connected to Mongo! Database name: "${dbName}"`)
    })
    .catch((err) => {
      console.error('Error connecting to mongo: ', err)
    })
}
