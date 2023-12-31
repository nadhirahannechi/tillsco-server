let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId })
{
	const hostname = window.location.hostname;

	console.log(`wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`);

	return `wss://${hostname}:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
}
