import { useState } from "react";
import {
  ArrowLeft,
  CreditCard,
  Truck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";

interface OrderSummaryItem {
  name: string;
  price: number;
}

// Sample order summary data
const orderSummary: OrderSummaryItem[] = [
  { name: "Intel Core i9-13900K", price: 599.99 },
  { name: "NVIDIA RTX 4090 24GB", price: 1599.99 },
  { name: "ASUS ROG Maximus Z790 Hero", price: 629.99 },
  { name: "G.Skill Trident Z5 RGB 32GB", price: 189.99 },
  { name: "Samsung 990 PRO 2TB", price: 219.99 },
  { name: "NZXT Kraken X73 RGB", price: 199.99 },
  { name: "Corsair HX1000i", price: 249.99 },
  { name: "Lian Li O11 Dynamic EVO", price: 169.99 },
];

export default function Checkout() {
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">(
    "shipping",
  );
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">(
    "standard",
  );
  const [paymentMethod, setPaymentMethod] = useState<"credit" | "paypal">(
    "credit",
  );

  // Currency conversion rate (1 USD = 75 INR)
  const usdToInr = 75;

  // Calculate totals
  const subtotal = orderSummary.reduce((sum, item) => sum + item.price, 0);
  const shippingCost = shippingMethod === "standard" ? 0 : 29.99;
  const tax = subtotal * 0.18; // 18% GST in India
  const total = subtotal + shippingCost + tax;

  // Convert to INR
  const subtotalInr = subtotal * usdToInr;
  const shippingCostInr = shippingCost * usdToInr;
  const taxInr = tax * usdToInr;
  const totalInr = total * usdToInr;

  const handleContinue = () => {
    if (step === "shipping") setStep("payment");
    else if (step === "payment") setStep("confirmation");
  };

  const handleBack = () => {
    if (step === "payment") setStep("shipping");
    else if (step === "confirmation") setStep("payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/component-selection">
            <Button
              variant="ghost"
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 mr-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Builder
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Checkout
          </h1>
        </div>

        {/* Checkout steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center w-full max-w-3xl">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step === "shipping" ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"}`}
              >
                <Truck className="h-5 w-5" />
              </div>
              <span
                className={`mt-2 text-sm ${step === "shipping" ? "text-blue-600 font-medium" : "text-gray-600"}`}
              >
                Shipping
              </span>
            </div>
            <div
              className={`h-1 flex-1 mx-2 ${step === "shipping" ? "bg-gray-200" : "bg-blue-200"}`}
            ></div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step === "payment" ? "bg-blue-600 text-white" : step === "confirmation" ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-400"}`}
              >
                <CreditCard className="h-5 w-5" />
              </div>
              <span
                className={`mt-2 text-sm ${step === "payment" ? "text-blue-600 font-medium" : step === "confirmation" ? "text-gray-600" : "text-gray-400"}`}
              >
                Payment
              </span>
            </div>
            <div
              className={`h-1 flex-1 mx-2 ${step === "confirmation" ? "bg-blue-200" : "bg-gray-200"}`}
            ></div>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${step === "confirmation" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400"}`}
              >
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <span
                className={`mt-2 text-sm ${step === "confirmation" ? "text-blue-600 font-medium" : "text-gray-400"}`}
              >
                Confirmation
              </span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6">
              {step === "shipping" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">
                    Shipping Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="San Francisco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="CA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="94103" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(555) 123-4567" />
                  </div>

                  <Separator className="my-6 bg-blue-100" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-blue-900">
                      Shipping Method
                    </h3>

                    <RadioGroup
                      value={shippingMethod}
                      onValueChange={(value) =>
                        setShippingMethod(value as "standard" | "express")
                      }
                    >
                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-blue-200">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label
                          htmlFor="standard"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex justify-between">
                            <span>Standard Shipping (3-5 business days)</span>
                            <span className="font-medium">Free</span>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-blue-200">
                        <RadioGroupItem value="express" id="express" />
                        <Label
                          htmlFor="express"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex justify-between">
                            <span>Express Shipping (1-2 business days)</span>
                            <span className="font-medium">$29.99</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              )}

              {step === "payment" && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-blue-900 mb-4">
                    Payment Method
                  </h2>

                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={(value) =>
                      setPaymentMethod(value as "credit" | "paypal")
                    }
                  >
                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-blue-200">
                      <RadioGroupItem value="credit" id="credit" />
                      <Label htmlFor="credit" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-blue-600" />
                          <span>Credit or Debit Card</span>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 hover:border-blue-200">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600 font-bold">Pay</span>
                          <span className="text-blue-800 font-bold">Pal</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit" && (
                    <div className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" placeholder="John Doe" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">
                        Secure Payment
                      </p>
                      <p className="text-sm text-blue-600">
                        Your payment information is encrypted and secure. We
                        never store your full card details.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === "confirmation" && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    Order Confirmed!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Your order has been placed successfully. You will receive a
                    confirmation email shortly.
                  </p>

                  <div className="bg-blue-50 rounded-lg p-4 max-w-md mx-auto text-left">
                    <p className="text-sm font-medium text-blue-800 mb-2">
                      Order Number: #PC-12345678
                    </p>
                    <p className="text-sm text-blue-600">
                      Estimated delivery:{" "}
                      <span className="font-medium">
                        {shippingMethod === "standard"
                          ? "May 10-12, 2023"
                          : "May 5-6, 2023"}
                      </span>
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link to="/">
                      <Button className="bg-blue-600 text-white hover:bg-blue-500">
                        Return to Home
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {step !== "confirmation" && (
                <div className="mt-8 flex justify-between">
                  {step === "payment" ? (
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-700 hover:border-blue-500 hover:bg-blue-50"
                      onClick={handleBack}
                    >
                      Back to Shipping
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-500"
                    onClick={handleContinue}
                  >
                    {step === "shipping"
                      ? "Continue to Payment"
                      : "Place Order"}
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white rounded-xl shadow-md border border-blue-100 p-6 sticky top-4">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                {orderSummary.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.name}</span>
                    <span className="text-blue-900 font-medium">
                      ₹{(item.price * usdToInr).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4 bg-blue-100" />

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-blue-900 font-medium">
                    ₹{subtotalInr.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-blue-900 font-medium">
                    {shippingMethod === "standard"
                      ? "Free"
                      : `₹${shippingCostInr.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">GST (18%)</span>
                  <span className="text-blue-900 font-medium">
                    ₹{taxInr.toFixed(2)}
                  </span>
                </div>
              </div>

              <Separator className="my-4 bg-blue-100" />

              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-blue-900">
                  Total
                </span>
                <span className="text-xl font-bold text-blue-900">
                  ₹{totalInr.toFixed(2)}
                </span>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 text-sm text-blue-700 mb-2">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">Secure Checkout</span>
                </div>
                <p className="text-xs text-blue-600">
                  Your order information is encrypted and secure. All
                  transactions are protected by our security protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
