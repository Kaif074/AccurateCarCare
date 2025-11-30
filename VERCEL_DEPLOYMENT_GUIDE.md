# Vercel Deployment Guide - Accurate Car Care

## 🚀 Quick Start

This guide will help you deploy the Accurate Car Care website to Vercel in just a few minutes.

---

## 📋 Prerequisites

Before deploying to Vercel, ensure you have:

1. ✅ A GitHub, GitLab, or Bitbucket account
2. ✅ A Vercel account (sign up at [vercel.com](https://vercel.com))
3. ✅ Your code pushed to a Git repository
4. ✅ Node.js 18.x or higher installed locally (for testing)

---

## 🔧 Configuration Files

The following files have been added/updated for Vercel compatibility:

### 1. `vercel.json`

This file configures Vercel deployment settings:

```json
{
  "buildCommand": "npm run build:vercel",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**What it does:**
- **buildCommand**: Specifies the build command for Vercel
- **outputDirectory**: Tells Vercel where the built files are located
- **framework**: Identifies the project as a Vite application
- **rewrites**: Enables client-side routing (all routes redirect to index.html)
- **headers**: Sets cache headers for optimal performance

### 2. `package.json` (Updated)

Added new scripts for Vercel deployment:

```json
"scripts": {
  "build:vercel": "tsc && vite build",
  "preview": "vite preview"
}
```

**What they do:**
- **build:vercel**: Compiles TypeScript and builds the production bundle
- **preview**: Allows you to preview the production build locally

---

## 📦 Deployment Methods

### Method 1: Deploy via Vercel Dashboard (Recommended)

This is the easiest method for first-time deployment.

#### Step 1: Push Code to Git Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit - Accurate Car Care website"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/yourusername/accurate-car-care.git

# Push to repository
git push -u origin main
```

#### Step 2: Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Select your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Vercel to access your repositories
5. Find and select your repository
6. Click **"Import"**

#### Step 3: Configure Project Settings

Vercel will auto-detect your project settings. Verify the following:

**Framework Preset:** Vite  
**Root Directory:** `./` (leave as default)  
**Build Command:** `npm run build:vercel`  
**Output Directory:** `dist`  
**Install Command:** `npm install`

#### Step 4: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll receive a live URL like: `https://your-project.vercel.app`

---

### Method 2: Deploy via Vercel CLI

For developers who prefer command-line deployment.

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

#### Step 3: Deploy

```bash
# Navigate to project directory
cd /path/to/accurate-car-care

# Deploy to Vercel
vercel
```

Follow the prompts:
- **Set up and deploy?** Yes
- **Which scope?** Select your account
- **Link to existing project?** No (for first deployment)
- **Project name?** accurate-car-care (or your preferred name)
- **Directory?** `./` (press Enter)
- **Override settings?** No (press Enter)

#### Step 4: Deploy to Production

```bash
vercel --prod
```

---

## 🌐 Custom Domain Setup

### Adding a Custom Domain

1. Go to your project dashboard on Vercel
2. Click **"Settings"** → **"Domains"**
3. Enter your custom domain (e.g., `accuratecarcare.com`)
4. Click **"Add"**

### DNS Configuration

Vercel will provide DNS records. Add these to your domain registrar:

**For Root Domain (accuratecarcare.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW Subdomain (www.accuratecarcare.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL Certificate:**
Vercel automatically provisions SSL certificates for all domains (HTTPS enabled by default).

---

## 🔐 Environment Variables

If your application uses environment variables, add them in Vercel:

### Via Dashboard

1. Go to **Project Settings** → **Environment Variables**
2. Add each variable:
   - **Name:** `VITE_APP_ID`
   - **Value:** `your-app-id`
   - **Environment:** Production, Preview, Development

### Via CLI

```bash
vercel env add VITE_APP_ID
```

**Common Environment Variables:**
- `VITE_APP_ID` - Application ID
- `VITE_API_ENV` - API environment (production/staging)
- `VITE_SUPABASE_URL` - Supabase URL (if using database)
- `VITE_SUPABASE_ANON_KEY` - Supabase anonymous key

---

## 🔄 Automatic Deployments

### Enable Automatic Deployments

Vercel automatically deploys your site when you push to your Git repository:

**Production Deployments:**
- Triggered by pushes to the `main` or `master` branch
- Deployed to your production domain

**Preview Deployments:**
- Triggered by pushes to any other branch or pull requests
- Each gets a unique preview URL
- Perfect for testing before merging

### Deployment Workflow

```bash
# Make changes to your code
git add .
git commit -m "Update service pricing"
git push origin main

# Vercel automatically detects the push and deploys
# You'll receive a notification when deployment is complete
```

---

## 🧪 Testing Before Deployment

### Local Production Build

Test the production build locally before deploying:

```bash
# Build the project
npm run build:vercel

# Preview the build
npm run preview
```

Open `http://localhost:4173` to test the production build.

### Vercel Preview Deployments

Create a preview deployment without affecting production:

```bash
# Create a new branch
git checkout -b feature/new-service

# Make changes and commit
git add .
git commit -m "Add new service"

# Push to create preview deployment
git push origin feature/new-service
```

Vercel will create a preview URL for testing.

---

## 📊 Performance Optimization

### Build Optimization

The project is already optimized for Vercel with:

✅ **Code Splitting:** Automatic chunk splitting for faster loads  
✅ **Tree Shaking:** Removes unused code  
✅ **Minification:** Compressed JavaScript and CSS  
✅ **Asset Optimization:** Optimized images and fonts  
✅ **Caching:** Aggressive caching for static assets

### Vercel Edge Network

Your site is automatically deployed to Vercel's global Edge Network:

- **100+ Edge Locations** worldwide
- **Automatic CDN** for static assets
- **Smart Routing** to nearest server
- **DDoS Protection** included

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Issue 1: Build Fails with TypeScript Errors

**Solution:**
```bash
# Check for TypeScript errors locally
npm run build:vercel

# Fix any errors shown
# Then commit and push
```

#### Issue 2: 404 Errors on Page Refresh

**Solution:**
Ensure `vercel.json` includes the rewrite rule:
```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

#### Issue 3: Environment Variables Not Working

**Solution:**
- Ensure variable names start with `VITE_`
- Add variables in Vercel dashboard
- Redeploy after adding variables

#### Issue 4: Build Takes Too Long

**Solution:**
- Check build logs in Vercel dashboard
- Ensure no unnecessary dependencies
- Consider upgrading Vercel plan for faster builds

#### Issue 5: WhatsApp Links Not Working

**Solution:**
- Verify phone number format: `+919845552372`
- Ensure URL encoding is correct
- Test on both mobile and desktop

---

## 📈 Monitoring and Analytics

### Vercel Analytics

Enable Vercel Analytics for insights:

1. Go to **Project Settings** → **Analytics**
2. Click **"Enable Analytics"**
3. View real-time visitor data, page views, and performance metrics

### Performance Monitoring

Monitor your site's performance:

1. Go to **Project Dashboard** → **Speed Insights**
2. View Core Web Vitals:
   - **LCP** (Largest Contentful Paint)
   - **FID** (First Input Delay)
   - **CLS** (Cumulative Layout Shift)

---

## 🔒 Security Best Practices

### Recommended Security Settings

1. **HTTPS Only:** Enabled by default on Vercel
2. **Security Headers:** Add to `vercel.json`:

```json
"headers": [
  {
    "source": "/(.*)",
    "headers": [
      {
        "key": "X-Content-Type-Options",
        "value": "nosniff"
      },
      {
        "key": "X-Frame-Options",
        "value": "DENY"
      },
      {
        "key": "X-XSS-Protection",
        "value": "1; mode=block"
      }
    ]
  }
]
```

3. **Environment Variables:** Never commit secrets to Git
4. **Access Control:** Use Vercel's password protection for staging

---

## 💰 Pricing and Limits

### Vercel Free Tier (Hobby)

Perfect for the Accurate Car Care website:

✅ **Unlimited Deployments**  
✅ **100 GB Bandwidth per month**  
✅ **Automatic HTTPS**  
✅ **Global CDN**  
✅ **Preview Deployments**  
✅ **Custom Domains**

### When to Upgrade

Consider upgrading to Pro ($20/month) if you need:
- More bandwidth (1 TB/month)
- Team collaboration
- Password protection
- Advanced analytics
- Priority support

---

## 📞 Support and Resources

### Vercel Documentation

- **Official Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Vite Guide:** [vercel.com/docs/frameworks/vite](https://vercel.com/docs/frameworks/vite)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### Getting Help

1. **Vercel Support:** support@vercel.com
2. **Community Discord:** [vercel.com/discord](https://vercel.com/discord)
3. **Status Page:** [vercel-status.com](https://vercel-status.com)

---

## ✅ Deployment Checklist

Before deploying to production, verify:

- [ ] All services are properly configured
- [ ] WhatsApp number is correct (+91 98455 52372)
- [ ] Address and contact information is accurate
- [ ] All images are loading correctly
- [ ] Calendar booking system works
- [ ] Mobile responsive design is tested
- [ ] All links are functional
- [ ] SEO meta tags are set
- [ ] Favicon is present
- [ ] Error handling is implemented
- [ ] Performance is optimized
- [ ] Code is pushed to Git repository
- [ ] Environment variables are set (if needed)
- [ ] Custom domain is configured (if applicable)
- [ ] SSL certificate is active

---

## 🎉 Post-Deployment

### After Successful Deployment

1. **Test the Live Site:**
   - Visit your Vercel URL
   - Test all features (booking, WhatsApp, calendar)
   - Check on mobile and desktop
   - Verify all services are displayed

2. **Share Your Site:**
   - Update business cards with new URL
   - Share on social media
   - Add to Google My Business
   - Update email signatures

3. **Monitor Performance:**
   - Check Vercel Analytics
   - Monitor Speed Insights
   - Review deployment logs

4. **Set Up Monitoring:**
   - Enable Vercel Analytics
   - Set up uptime monitoring (e.g., UptimeRobot)
   - Configure error tracking (optional)

---

## 🔄 Updating Your Site

### Making Updates

```bash
# Make changes to your code
# Example: Update service pricing

# Test locally
npm run build:vercel
npm run preview

# Commit and push
git add .
git commit -m "Update service pricing"
git push origin main

# Vercel automatically deploys the update
```

### Rollback to Previous Version

If something goes wrong:

1. Go to **Project Dashboard** → **Deployments**
2. Find the previous working deployment
3. Click **"..."** → **"Promote to Production"**

---

## 📱 Mobile App Integration

### Progressive Web App (PWA)

To make your site installable on mobile devices, consider adding PWA support:

1. Add `manifest.json` for app metadata
2. Implement service worker for offline support
3. Add install prompt for users

**Benefits:**
- Home screen icon
- Offline functionality
- App-like experience
- Push notifications (optional)

---

## 🌟 Advanced Features

### Vercel Edge Functions

For advanced functionality, you can add Edge Functions:

```typescript
// api/hello.ts
export default function handler(req: Request) {
  return new Response(
    JSON.stringify({ message: 'Hello from Edge Function!' }),
    {
      headers: { 'content-type': 'application/json' }
    }
  );
}
```

### Serverless Functions

Add serverless API endpoints:

```typescript
// api/booking.ts
export default async function handler(req: Request) {
  // Handle booking logic
  // Send confirmation emails
  // Store in database
}
```

---

## 📊 SEO Optimization

### Vercel SEO Best Practices

1. **Meta Tags:** Already included in `index.html`
2. **Sitemap:** Generate and submit to Google Search Console
3. **Robots.txt:** Add to public folder
4. **Open Graph:** Add social media preview tags
5. **Schema Markup:** Add structured data for local business

### Google Search Console

1. Verify your domain
2. Submit sitemap
3. Monitor search performance
4. Fix any crawl errors

---

## 🎯 Summary

### What You've Accomplished

✅ **Vercel Configuration:** `vercel.json` created  
✅ **Build Scripts:** Added `build:vercel` and `preview`  
✅ **Deployment Ready:** All files configured for Vercel  
✅ **Performance Optimized:** Caching and CDN enabled  
✅ **Documentation:** Complete deployment guide

### Next Steps

1. **Push to Git:** Commit and push your code
2. **Deploy to Vercel:** Follow Method 1 or Method 2
3. **Test Live Site:** Verify all functionality
4. **Add Custom Domain:** (Optional) Configure your domain
5. **Monitor Performance:** Enable analytics and monitoring

---

## 🚀 Ready to Deploy!

Your Accurate Car Care website is now fully configured and ready for Vercel deployment. Follow the steps in this guide to launch your site to the world!

**Deployment URL:** `https://your-project.vercel.app` (after deployment)

**Custom Domain:** Configure after deployment

**Support:** Contact Vercel support or refer to their documentation for any issues

---

**Good luck with your deployment! 🎉**

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Compatible With:** Vercel, Vite 5.x, React 18.x
