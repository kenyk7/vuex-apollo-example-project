import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'

// YOUR_GRAPH_QL_ENDPOINT_HERE

const wsClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cj0t3bw51vtw60102u1impjua', {
	reconnect: true,
});

const networkInterface = createNetworkInterface({
	uri: 'https://api.graph.cool/simple/v1/cj0t3bw51vtw60102u1impjua'
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
	networkInterface,
	wsClient
)

const client = new ApolloClient({
	networkInterface: networkInterfaceWithSubscriptions,
	dataIdFromObject: o => o.id
});

export default client;