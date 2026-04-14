import type { RegionCode, SupportedCurrency } from "./regionalPricing"
import type { CoursePlan } from "./coursePricing"

export interface PaymentRequest {
  courseId: string
  plan: CoursePlan
  region: RegionCode
  currency: SupportedCurrency
  amount: number
}

export interface PaymentGateway {
  createOrder(req: PaymentRequest): Promise<{
    orderId: string
    currency: string
    amount: number
  }>
}

class RazorpayGateway implements PaymentGateway {
  async createOrder(req: PaymentRequest) {
    // This delegates to the existing Razorpay API route
    const response = await fetch("/api/razorpay/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    })

    if (!response.ok) {
      throw new Error("Failed to create Razorpay order")
    }

    return response.json()
  }
}

class StripeGateway implements PaymentGateway {
  async createOrder(req: PaymentRequest) {
    throw new Error("Stripe gateway not yet enabled")
  }
}

export function getPaymentGateway(gatewayType: "razorpay" | "stripe" = "razorpay"): PaymentGateway {
  switch (gatewayType) {
    case "razorpay":
      return new RazorpayGateway()
    case "stripe":
      return new StripeGateway()
    default:
      return new RazorpayGateway()
  }
}
