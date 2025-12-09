# Vercel + Cloudflare DNS Setup Guide

This guide will help you connect your Cloudflare domain to your Vercel deployment.

## Prerequisites
- ✅ Domain purchased from Cloudflare
- ✅ Vercel account with your project deployed
- ✅ Project repository connected to Vercel

## Step 1: Add Domain in Vercel

1. **Go to your Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project: **IARCE** (or your project name)

2. **Navigate to Settings**
   - Click on your project
   - Go to **Settings** tab
   - Click on **Domains** in the left sidebar

3. **Add Your Domain**
   - Enter your domain (e.g., `yourdomain.com`)
   - Click **Add**
   - Vercel will show you DNS records needed

## Step 2: Get DNS Records from Vercel

After adding your domain, Vercel will display DNS records like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Note these values** - you'll need them for Cloudflare.

## Step 3: Configure DNS in Cloudflare

1. **Log into Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com
   - Select your domain

2. **Go to DNS Settings**
   - Click on **DNS** in the left sidebar
   - You'll see your current DNS records

3. **Add Vercel DNS Records**

   **Option A: Using Vercel's Nameservers (Recommended)**
   - In Vercel, you might see an option to use Vercel nameservers
   - If available, use this method (simpler)

   **Option B: Using DNS Records (More Control)**
   
   Add these records in Cloudflare:
   
   **For Root Domain (@):**
   - **Type:** `A`
   - **Name:** `@` (or your root domain)
   - **IPv4 address:** `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)
   - **Proxy status:** 🟠 DNS only (turn off proxy - gray cloud)
   - **TTL:** Auto
   
   **For WWW Subdomain:**
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Target:** `cname.vercel-dns.com`
   - **Proxy status:** 🟠 DNS only (turn off proxy - gray cloud)
   - **TTL:** Auto

4. **Important: Turn OFF Cloudflare Proxy**
   - When adding DNS records, make sure the cloud icon is **gray** (DNS only)
   - If it's **orange** (proxied), click it to turn it off
   - Vercel works best with DNS-only mode

## Step 4: SSL/TLS Settings in Cloudflare

1. **Go to SSL/TLS Settings**
   - In Cloudflare dashboard, click **SSL/TLS**
   - Set encryption mode to: **Full (strict)**
   - This ensures secure connection between Cloudflare and Vercel

## Step 5: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** with Cloudflare
- You can check status in Vercel dashboard

## Step 6: Verify in Vercel

1. **Check Domain Status**
   - Go back to Vercel → Settings → Domains
   - Your domain should show as **Valid** (green checkmark)
   - If it shows "Pending" or "Invalid", wait a bit longer

2. **Test Your Domain**
   - Once valid, visit `https://yourdomain.com`
   - It should load your Vercel deployment
   - Vercel automatically provides SSL certificates

## Common Issues & Solutions

### Issue: Domain shows "Invalid" in Vercel
**Solution:**
- Double-check DNS records are correct
- Ensure proxy is OFF (gray cloud) in Cloudflare
- Wait 15-30 minutes for propagation
- Verify records match exactly what Vercel shows

### Issue: Site loads but shows "Not Secure"
**Solution:**
- Wait for Vercel to issue SSL certificate (usually automatic, takes 5-10 minutes)
- Check SSL/TLS mode in Cloudflare is set to "Full (strict)"

### Issue: Domain redirects to Cloudflare error page
**Solution:**
- Make sure proxy is OFF (gray cloud, not orange)
- Verify A record points to correct Vercel IP
- Check CNAME record is correct

## Quick Checklist

- [ ] Domain added in Vercel dashboard
- [ ] DNS records copied from Vercel
- [ ] A record added in Cloudflare (@ → Vercel IP)
- [ ] CNAME record added in Cloudflare (www → cname.vercel-dns.com)
- [ ] Proxy turned OFF (gray cloud) for both records
- [ ] SSL/TLS mode set to "Full (strict)" in Cloudflare
- [ ] Waited 15-30 minutes for DNS propagation
- [ ] Domain shows "Valid" in Vercel
- [ ] Site loads correctly at your domain

## Additional Tips

1. **Use Cloudflare's CDN** (Optional):
   - After setup, you can enable Cloudflare proxy (orange cloud) for CDN benefits
   - But start with DNS-only first to ensure it works

2. **Subdomains**:
   - If you need subdomains (e.g., `www.yourdomain.com`), add CNAME records
   - Point them to `cname.vercel-dns.com`

3. **Email Records**:
   - If you use email with your domain, keep existing MX records in Cloudflare
   - Don't delete them when adding Vercel records

## Need Help?

- **Vercel Docs:** https://vercel.com/docs/concepts/projects/domains
- **Cloudflare Docs:** https://developers.cloudflare.com/dns/
- **Check DNS Propagation:** https://dnschecker.org

---

**Your domain should be live within 15-30 minutes!** 🚀

