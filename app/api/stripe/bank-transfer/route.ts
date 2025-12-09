import { NextRequest, NextResponse } from 'next/server';

// PLACEHOLDER: Bank Transfer API Endpoint
// This endpoint will be implemented when bank account APIs are activated
// 
// Future implementation will handle:
// - ACH Direct Debit (US)
// - SEPA Direct Debit (Europe)
// - Bank Account verification
// - Recurring donations via bank transfer
//
// Stripe supports bank transfers through:
// - Payment Intents with bank transfer as payment method
// - Stripe Connect for marketplace payments
// - ACH Direct Debit (US only, requires additional setup)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, fullName, email, bankAccount, routingNumber } = body;

    // PLACEHOLDER: Return not implemented message
    return NextResponse.json(
      { 
        error: 'Bank transfer payments are not yet available',
        message: 'This feature will be activated soon. Please use credit/debit card for now.',
        placeholder: true
      },
      { status: 501 } // 501 Not Implemented
    );

    // TODO: When bank transfer is activated, implement:
    // 1. Validate bank account details
    // 2. Create Stripe Payment Intent with bank transfer
    // 3. Handle bank account verification
    // 4. Process ACH/SEPA payment
    // 5. Return payment status to client
  } catch (error) {
    console.error('Error processing bank transfer:', error);
    return NextResponse.json(
      { error: 'Failed to process bank transfer request' },
      { status: 500 }
    );
  }
}

