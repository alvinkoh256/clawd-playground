#!/bin/bash

# Lobster AI Portfolio Deployment Script
# This script helps deploy the portfolio to Vercel

echo "🦞 Lobster AI Portfolio Deployment"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "1. Building the project..."
npm run build

echo ""
echo "2. Deploying to Vercel..."
echo "   You'll be prompted to:"
echo "   - Login to Vercel (if not already logged in)"
echo "   - Choose a project name"
echo "   - Select deployment settings"
echo ""
echo "Press Enter to continue..."
read

vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "   Your portfolio is now live at: https://[your-project].vercel.app"
echo ""
echo "📊 To check Lighthouse scores:"
echo "   - Open Chrome DevTools"
echo "   - Go to Lighthouse tab"
echo "   - Run performance audit"
echo ""
echo "🔧 To update the site:"
echo "   - Make changes to the code"
echo "   - Run: git add . && git commit -m 'Update'"
echo "   - Run: git push origin main"
echo "   - Vercel will automatically redeploy"