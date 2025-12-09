# Stripe Donation Integration Setup Guide

This guide will help you set up Stripe for processing credit/debit card donations on your website.

## ✅ What's Already Implemented

- ✅ Stripe Checkout integration for credit/debit cards
- ✅ Donation form with payment method selection
- ✅ Success page after payment
- ✅ Placeholder APIs for bank transfer and Interac (to be activated later)
- ✅ Webhook endpoint for payment events

## 📋 Prerequisites

1. **Stripe Account**: Create a free account at https://stripe.com
2. **Domain**: Your site should be live (for webhook URLs)

## 🔧 Step 1: Get Your Stripe API Keys

1. Log into your Stripe Dashboard: https://dashboard.stripe.com
2. Go to **Developers** → **API keys**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`)

### Test Mode vs Live Mode

- **Test Mode**: Use `pk_test_` and `sk_test_` keys for testing
- **Live Mode**: Use `pk_live_` and `sk_live_` keys for real payments

**Start with Test Mode** to test without processing real payments.

## 🔧 Step 2: Add Environment Variables

Add these to your `.env` file (or Vercel Environment Variables):

```env
# Stripe API Keys (get these from Stripe Dashboard)
STRIPE_SECRET_KEY=sk_test_YOUR_SECRET_KEY_HERE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_PUBLISHABLE_KEY_HERE

# Stripe Webhook Secret (get this after setting up webhook)
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET_HERE

# Your site URL (for redirects)
NEXT_PUBLIC_BASE_URL=https://iarmministries.org
```

### For Vercel:

1. Go to your project → **Settings** → **Environment Variables**
2. Add each variable above
3. Make sure to add them for **Production**, **Preview**, and **Development**

## 🔧 Step 3: Install Dependencies

The Stripe packages are already added to `package.json`. Run:

```bash
npm install
```

This will install:
- `stripe` - Server-side Stripe SDK
- `@stripe/stripe-js` - Client-side Stripe SDK (for future use)

## 🔧 Step 4: Test the Integration

1. **Start your development server:**
   ```bash
   npm run dev
   ```

2. **Go to the donation page:**
   - Visit: `http://localhost:3000/donate`

3. **Fill out the form:**
   - Select a country
   - Enter donation amount
   - Select "Credit/Debit Card" as payment method
   - Enter your name and email
   - Click "Continue to Payment"

4. **Test with Stripe test cards:**
   - Use: `4242 4242 4242 4242`
   - Any future expiry date
   - Any 3-digit CVC
   - Any ZIP code

5. **Complete the payment:**
   - You'll be redirected to Stripe Checkout
   - Complete the payment
   - You'll be redirected back to the success page

## 🔧 Step 5: Set Up Webhooks (Optional but Recommended)

Webhooks allow Stripe to notify your server about payment events.

### For Local Development:

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Login: `stripe login`
3. Forward webhooks: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
4. Copy the webhook signing secret (starts with `whsec_`)
5. Add it to your `.env` as `STRIPE_WEBHOOK_SECRET`

### For Production:

1. Go to Stripe Dashboard → **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Enter URL: `https://iarmministries.org/api/stripe/webhook`
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Copy the **Signing secret** and add to your environment variables

## 🎯 How It Works

### Credit/Debit Card Flow:

1. User fills donation form
2. Selects "Credit/Debit Card"
3. Clicks "Continue to Payment"
4. Form sends data to `/api/stripe/checkout`
5. Server creates Stripe Checkout session
6. User is redirected to Stripe Checkout page
7. User enters card details and pays
8. Stripe processes payment
9. User is redirected to success page
10. Webhook notifies your server (if configured)

### Bank Transfer & Interac (Placeholders):

- Currently return "Not Implemented" errors
- Will be activated when you're ready
- APIs are ready at:
  - `/api/stripe/bank-transfer`
  - `/api/stripe/interac`

## 📝 API Endpoints

### POST `/api/stripe/checkout`
Creates a Stripe Checkout session for credit/debit card payments.

**Request Body:**
```json
{
  "amount": "100",
  "fullName": "John Doe",
  "email": "john@example.com",
  "message": "Optional message",
  "paymentMethod": "credit-debit"
}
```

**Response:**
```json
{
  "sessionId": "cs_test_...",
  "url": "https://checkout.stripe.com/..."
}
```

### POST `/api/stripe/webhook`
Handles Stripe webhook events (payment confirmations, etc.)

### POST `/api/stripe/bank-transfer` (Placeholder)
Returns 501 Not Implemented. Ready for future activation.

### POST `/api/stripe/interac` (Placeholder)
Returns 501 Not Implemented. Ready for future activation.

## 🔒 Security Notes

- ✅ Payment details never touch your server
- ✅ Stripe handles PCI compliance
- ✅ All card data is encrypted
- ✅ Webhook signature verification prevents fraud
- ✅ HTTPS required for production

## 💰 Pricing

Stripe charges:
- **2.9% + $0.30** per successful card charge
- No monthly fees
- No setup fees
- No fees for failed payments

Example: $100 donation = $3.20 fee, you receive $96.80

## 🚀 Going Live

1. **Switch to Live Mode:**
   - Get live API keys from Stripe Dashboard
   - Update environment variables
   - Test with a small real payment first

2. **Update Webhook URL:**
   - Change webhook endpoint to production URL
   - Update `NEXT_PUBLIC_BASE_URL` to your live domain

3. **Test Everything:**
   - Make a real small donation
   - Verify payment appears in Stripe Dashboard
   - Check webhook events are received

## 🆘 Troubleshooting

### "Failed to create checkout session"
- Check `STRIPE_SECRET_KEY` is set correctly
- Verify key starts with `sk_test_` or `sk_live_`
- Check server logs for detailed error

### "Invalid payment method"
- Only "credit-debit" is currently active
- Bank transfer and Interac are placeholders

### Webhook not working
- Verify webhook URL is correct
- Check `STRIPE_WEBHOOK_SECRET` is set
- Use Stripe Dashboard to view webhook events
- Check server logs for errors

### Payment succeeds but no webhook
- Webhooks are optional for basic functionality
- Check webhook endpoint is accessible
- Verify webhook secret matches

## 📚 Additional Resources

- **Stripe Docs**: https://stripe.com/docs
- **Stripe Checkout**: https://stripe.com/docs/payments/checkout
- **Stripe Testing**: https://stripe.com/docs/testing
- **Webhooks Guide**: https://stripe.com/docs/webhooks

## 🎉 You're All Set!

Once you add your Stripe API keys to the environment variables, your donation system will be ready to accept credit/debit card payments!

---

**Need Help?** Check the Stripe Dashboard for detailed logs and transaction history.

