import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51IcHgdEcDbrWnwR3Y3ewRPVQEqS9wtefXxNqxXRU9aQKz0zBJey7j7DD9PHAtjg2h6tmBnA3fYTXH77NuA5eTwcl00uM5v7799"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
