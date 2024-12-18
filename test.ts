import { fetch } from 'undici';

const skey: string = "test";

const stripe = new Stripe(skey, {
  apiVersion: '2024-06-20',
  httpClient: Stripe.createFetchHttpClient(fetch)
});
const invoicesResponse = await stripe.invoices.list({
            customer: props.customerId,
            starting_after: "",
            limit: 10,
});
