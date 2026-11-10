# Canzo's Creations Manager

Mobile-friendly business manager for Canzo's Creations. Includes product recipes, per-spool filament tracking, sales, payment fees, expenses, print electricity/labor/material cost estimates, low-filament alerts and JSON backups.

## Deploy with Netlify
1. In Netlify choose **Add new site → Import an existing project**.
2. Connect GitHub and select `vinnycanzo/Canzo-s-Creations-`.
3. Leave build command blank and set publish directory to `.`.
4. Deploy.

## Supabase
Browser configuration is in config.js and uses the public publishable key (never use a service-role key in a browser). Run supabase-schema.sql in Supabase SQL Editor. Row-level security restricts each account to its own data.

## Use
Open the deployed site, create an account, then sign in with that same account on each device. On iPhone Safari use Share → Add to Home Screen.

Note: product sales deduct finished inventory and the assigned spool's filament grams. Add finished stock to a product before recording a sale.
