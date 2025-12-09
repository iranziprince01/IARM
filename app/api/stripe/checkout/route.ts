import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, fullName, email, message, paymentMethod } = body;

    // Validate required fields
    if (!amount || !fullName || !email || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate payment method
    if (paymentMethod !== 'credit-debit') {
      return NextResponse.json(
        { error: 'Invalid payment method. Only credit/debit card payments are currently available.' },
        { status: 400 }
      );
    }

    // Convert amount to cents (Stripe uses smallest currency unit)
    const amountInCents = Math.round(parseFloat(amount) * 100);

    // Validate amount (minimum $1)
    if (amountInCents < 100) {
      return NextResponse.json(
        { error: 'Minimum donation amount is $1.00' },
        { status: 400 }
      );
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'cad',
            product_data: {
              name: 'Donation to International Anglican Revival Ministries',
              description: message || 'Thank you for your generous donation',
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      metadata: {
        donorName: fullName,
        donorEmail: email,
        message: message || '',
        paymentMethod: paymentMethod,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/donate?canceled=true`,
    });

    return NextResponse.json(
      { sessionId: session.id, url: session.url },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating Stripe checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

