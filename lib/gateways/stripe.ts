import type { PaymentGateway, PaymentRequest } from "../paymentGateway"

export class StripePaymentGateway implements PaymentGateway {
  async createOrder(req: PaymentRequest) {
    // Future implementation:
    // 1. Initialize Stripe with API keys
    // 2. Create PaymentIntent with req.amount and req.currency
    // 3. Return orderId (PaymentIntent ID), currency, amount

    throw new Error("Stripe gateway is not yet enabled. Please use Razorpay for now.")
  }
}
