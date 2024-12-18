import Stripe from "stripe";

const skey: string = "sk_test_xxxx3i";

const stripe = new Stripe(skey, {
  apiVersion: "2024-06-20",
  httpClient: Stripe.createFetchHttpClient(fetch),
});
const invoicesResponse = await stripe.invoices.list({
  customer: "cus_RIhjpxDIcl7LJe",
  starting_after: "",
  limit: 10,
});
