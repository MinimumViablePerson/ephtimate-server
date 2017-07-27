import Server from 'socket.io'

import {makeStore} from './store'

export function startServer(store) {
    const io = new Server().attach(8027)
    // process.env.PORT ||

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