// File: src/app/cart/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/components/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MinusCircle, PlusCircle, Trash2, ShoppingCart } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/components/ui/use-toast';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const { toast } = useToast();
  const [customerPhone, setCustomerPhone] = useState('');
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  const handlePlaceOrder = async () => {
    if (cart.length === 0) {
      toast({
        title: "Cart is Empty",
        description: "Please add items to your cart before placing an order.",
        variant: "destructive",
      });
      return;
    }

    if (!customerPhone) {
      toast({
        title: "Phone Number Required",
        description: "Please enter your phone number to proceed with the order.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessingOrder(true);
    try {
      // Here you would typically send the cart data to your backend
      // For this example, we'll simulate an API call and directly show the contact
      const orderData = {
        items: cart.map(item => ({
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        total: cartTotal,
        customerPhone: customerPhone,
      };

      console.log("Simulating order placement with data:", orderData);

      // In a real application, you'd make a fetch request here:
      // const response = await fetch('/api/order', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(orderData),
      // });
      // const result = await response.json();
      // if (response.ok) {
      //   toast({
      //     title: "Order Placed!",
      //     description: "Thank you for your order. We will contact you shortly.",
      //   });
      //   setShowContactInfo(true);
      //   clearCart(); // Clear cart after successful order
      // } else {
      //   toast({
      //     title: "Order Failed",
      //     description: result.error || "There was an error placing your order.",
      //     variant: "destructive",
      //   });
      // }

      // For now, simulate success:
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      setShowContactInfo(true);
      clearCart(); // Clear cart after showing contact info
      toast({
          title: "Order Submitted!",
          description: "We've received your request. Please call the number below to confirm.",
          variant: "success",
        });

    } catch (error) {
      console.error("Error placing order:", error);
      toast({
        title: "Order Failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingOrder(false);
    }
  };

  if (cart.length === 0 && !showContactInfo) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-lg text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      {showContactInfo ? (
        <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-green-50 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Order Request Submitted!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Thank you for your order. Please call us to confirm your order details and delivery:
          </p>
          <a href="tel:+919876543210" className="text-4xl font-extrabold text-blue-600 hover:underline">
            +91 98765 43210
          </a>
          <p className="text-sm text-gray-500 mt-2">(This is a dummy number for demonstration)</p>
          <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    sizes="80px"
                    className="object-contain rounded"
                  />
                </div>
                <div className="flex-grow">
                  <Link href={`/product/${item.id}`} className="font-semibold text-lg hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                  <p className="text-gray-600 text-sm">{item.category}</p>
                  <p className="font-bold text-md mt-1">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <MinusCircle className="h-5 w-5" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                    className="w-16 text-center"
                    min="1"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <PlusCircle className="h-5 w-5" />
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary and Checkout */}
          <div className="lg:col-span-1 p-6 border rounded-lg shadow-lg bg-white h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between items-center text-lg mb-4">
              <span>Subtotal:</span>
              <span className="font-semibold">₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold border-t pt-4 mt-4">
              <span>Total:</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>

            <div className="mt-6">
              <label htmlFor="phone-input" className="block text-sm font-medium text-gray-700 mb-2">
                Your Phone Number:
              </label>
              <Input
                id="phone-input"
                type="tel"
                placeholder="e.g., +91 9876543210"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="mb-4"
              />
              <Button
                onClick={handlePlaceOrder}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold transition-colors"
                disabled={isProcessingOrder || cart.length === 0}
              >
                {isProcessingOrder ? "Processing Order..." : "Place Order"}
              </Button>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full mt-3">Clear Cart</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently remove all items from your cart.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={clearCart}>Clear</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
