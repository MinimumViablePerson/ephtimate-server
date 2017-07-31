import Server from 'socket.io'

import {makeStore} from './store'

const PORT = process.env.PORT || 8027

export function startServer(store) {
    const io = new Server().attach(PORT)
    console.log('Listening on port: %d', PORT)

    store.subscribe(
        () => { 
            console.log(store.getState())
            io.emit('state', store.getState().toJS())
        }
    )

    io.on('connection', socket => {
        socket.emit('state', store.getState().toJS())
        socket.on('action', store.dispatch.bind(store))
    })
}