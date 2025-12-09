import { NextRequest, NextResponse } from 'next/server';

// PLACEHOLDER: Interac e-Transfer API Endpoint
// This endpoint will be implemented when Interac integration is activated
//
// Future implementation options:
// - Integrate with Interac e-Transfer API (if available)
// - Use third-party payment processor that supports Interac
// - Manual processing workflow with email notifications
//
// Note: Interac e-Transfer typically requires manual processing
// as it's a bank-to-bank transfer system in Canada

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, fullName, email, message } = body;

    // PLACEHOLDER: Return not implemented message
    return NextResponse.json(
      { 
        error: 'Interac e-Transfer is not yet available',
        message: 'This feature will be activated soon. Please use credit/debit card for now.',
        placeholder: true,
        // When implemented, this will include:
        // - Instructions for manual e-Transfer
        // - Email address to send transfer to
        // - Security question/answer setup
      },
      { status: 501 } // 501 Not Implemented
    );

    // TODO: When Interac is activated, implement:
    // 1. Generate unique security question/answer
    // 2. Send email with e-Transfer instructions
    // 3. Provide email address for transfer
    // 4. Track pending transfers
    // 5. Confirm receipt of transfer
  } catch (error) {
    console.error('Error processing Interac e-Transfer:', error);
    return NextResponse.json(
      { error: 'Failed to process Interac e-Transfer request' },
      { status: 500 }
    );
  }
}

