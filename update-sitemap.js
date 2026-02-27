#!/usr/bin/env node

/**
 * Sitemap Date Updater
 * Updates all lastmod dates in sitemap.xml to today's date
 * Run with: node update-sitemap.js
 */

const fs = require('fs');
const path = require('path');

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Path to sitemap.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');

try {
  // Read the sitemap file
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // Count current lastmod entries
  const currentMatches = sitemap.match(/<lastmod>.*?<\/lastmod>/g);
  const currentCount = currentMatches ? currentMatches.length : 0;
  
  // Replace all lastmod dates with today's date
  const updatedSitemap = sitemap.replace(
    /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );
  
  // Write the updated sitemap back
  fs.writeFileSync(sitemapPath, updatedSitemap, 'utf8');
  
  // Count updated entries
  const updatedMatches = updatedSitemap.match(/<lastmod>.*?<\/lastmod>/g);
  const updatedCount = updatedMatches ? updatedMatches.length : 0;
  
  console.log('✅ Sitemap updated successfully!');
  console.log(`📅 All ${updatedCount} lastmod dates set to: ${today}`);
  console.log(`📍 File: ${sitemapPath}`);
  
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}
