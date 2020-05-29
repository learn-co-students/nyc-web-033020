// headers --> use these at your own discretion
// const headers = {'Content-Type': 'application/json', 'Accepts': 'application/json'}
// urls
const channelsURL = 'http://localhost:6001/channels'
const channelWithMsgs = (id) => `http://localhost:6001/channels/${id}/messages`
// parse incoming data
const parseData = response => response.json()
// error handler
const catchError = error => console.log(`%c${error}`, 'color: red;')


// GET /channels
export const fetchChannels = () => fetch(channelsURL)
.then(parseData)
.catch(catchError)

// GET /channels/:id/messages
export const fetchChannelMessages = (id) => fetch(channelWithMsgs(id))
.then(parseData)
.catch(catchError)