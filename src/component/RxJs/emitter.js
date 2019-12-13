import { Subject } from 'rxjs';

export const subject = new Subject();

export const initializeDummyWebSocket = () => {
	const wsUri = "wss://echo.websocket.org/";
	const websocket = new WebSocket(wsUri);
	websocket.onopen = function (evt) {
		console.log('web socket open');
		websocket.send('Message 1 delivered immidiately');
		setTimeout(() => websocket.send('Message 2 delivered after 3 seconds'), 3000);
		setTimeout(() => websocket.send('Message 3 delivered after 10 seconds'), 10000);
	}
	websocket.onclose = function (evt) { console.log('web socket closed'); };
	websocket.onmessage = function (evt) { subject.next(evt) };
	websocket.onerror = function (evt) { console.log('web socket error'); };
}
