import { httpServer } from './server'

httpServer.listen(3333, () => {
  console.log('Server running at port 3333')
})
