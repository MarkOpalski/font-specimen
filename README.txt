Enhanced Web Font Specimen
Version 2.1 - Google Fonts Integration & Modern CSS Grid
Originally created 2010-04-06 by Tim Brown
Enhanced 2025-11-04 by Mark Opalski

🌐 LIVE DEMO: https://markopalski.github.io/font-specimen/

============================================================================

ATTRIBUTION & ACKNOWLEDGMENTS

This repository preserves, enhances, and modernizes the original Web Font 
Specimen v2.0 created by Tim Brown. Tim Brown is Head of Typography at Adobe 
and a leading advocate for web typography who has contributed immensely to 
the craft through tools, education, and community building.

ORIGINAL CREATOR
• Tim Brown - Original Web Font Specimen v2.0 (2010)
  Current: Head of Typography at Adobe
  Website: https://tbrown.org
  Mastodon: @timbrown@mastodon.social
  LinkedIn: https://www.linkedin.com/in/tbrowntype/
  
ORIGINAL RESOURCES (Historical)
• Original Web Font Specimen: http://webfontspecimen.com
• Nice Web Type Blog: http://nicewebtype.com (historical)

2025 ENHANCEMENTS BY
• Mark Opalski - A Font Specimen as the UI, Google Fonts integration, WCAG compliance
  GitHub: https://github.com/MarkOpalski/font-specimen

COMMUNITY CONTRIBUTIONS (Historical)
• Eric Meyer - Compass/Sass port (mirisuzanne/webfontspecimen, 2009)
• Robert Whitney - Sinatra app port (robertjwhitney/web-font-specimen, 2010)
• Various developers who created adaptations keeping this tool accessible

============================================================================

OVERVIEW

Enhanced Web Font Specimen is a systematic font evaluation tool designed for 
typographic testing, not a web application. This comprehensive typography testing 
system evaluates web fonts through methodical specimen display across multiple 
contexts - sizes, character sets, contrast scenarios, and real-world text samples.

Built for systematic font evaluation, this tool provides designers with Tim Brown's 
proven methodology for thorough typeface analysis. The enhanced version adds modern 
font loading capabilities and accessibility compliance tools while preserving 
the elegant, systematic approach to font evaluation that made the original invaluable 
for professional typography work.

ORIGINAL FEATURES (Tim Brown's Web Font Specimen v2.0)

• Text samples at various sizes (9px to 96px) with proper line-height (1.4em)
• Character set display showing uppercase, lowercase, numbers, and symbols
• Body size comparisons against standard web fonts (Arial, Times, Georgia)
• Grayscale testing with different color values (#000 to #FFF) on light and dark backgrounds
• Size specimens with pangram text for comprehensive character testing
• Responsive grid layout using 960.gs framework
• Clean, professional presentation suitable for client presentations

NEW FEATURES (2025 Enhancements)

• 🔍 Dynamic Google Fonts Search - Real-time search with autocomplete suggestions
• ⚡ One-Click Font Loading - Quick access buttons for popular fonts
• 🎨 Seamless Design Integration - Maintains original specimen aesthetics
• ♿ WCAG AA Compliance Indicators - Visual contrast ratio compliance checking
• 📱 Enhanced Mobile Support - Improved responsive design
• 🏃 Instant Font Switching - No page reload required for font changes
• 🎯 Simplified UX - Font name input instead of complex URL management

TECHNICAL STRUCTURE

CORE FILES (Original by Tim Brown)
• index.html - Main specimen display with integrated Google Fonts loader
• css/reset.css - Eric Meyer's CSS reset for consistent cross-browser rendering
• css/wfs.css - Original font specimen layout and typography styling
• css/type/ - Folder for local font files (still supported)
• css/images/ - Background images and grid overlays for visual alignment

MODERNIZED FILES (2025 Updates)
• css/modern-grid.css - Modern CSS Grid system (replaces 960.gs legacy grid)
• css/960.css - Legacy 960.gs grid (preserved but not linked)

NEW FILES (2025 Enhancements)
• js/google-fonts-loader.js - Complete Google Fonts integration system
• css/google-fonts-loader.css - Styling for search interface (matches specimen design)
• demo.html - Usage examples and documentation
• test.html - Server testing utility

DEPENDENCIES & CREDITS
• Eric Meyer's CSS Reset: http://meyerweb.com/eric/tools/css/reset/
• Modern CSS Grid: Replaces legacy 960.gs with native browser grid system
• Google Fonts API: https://fonts.google.com/
• Vite Build Tool: Modern development environment and build system
• Nathan Smith's 960.gs Grid (legacy): http://960.gs/ - preserved for reference

LICENSING
Original files (wfs.css, markup) by Tim Brown are licensed under Creative Commons 
Attribution 3.0: http://creativecommons.org/licenses/by/3.0/us/

2025 enhancements maintain the same Creative Commons Attribution 3.0 license to 
honor Tim Brown's open approach and ensure continued accessibility.

============================================================================

HOW TO USE:

QUICK START GUIDE (New Enhanced Method)

1) Start a local server (required for Google Fonts integration due to CORS policies)

   OPTION A - Python Server (Simple):
   python3 -m http.server 8000
   # OR
   npm run serve
   
   OPTION B - Vite Development Server (Modern):
   npm install
   npm run dev        # Development server with hot reload
   npm run build      # Production build
   npm run preview    # Preview production build
   
   Then open the provided localhost URL in your browser.


2) Use the Google Fonts loader interface

   • Type font names in the search box (e.g., "Inter", "Roboto", "monospace")
   • Select from real-time suggestions dropdown
   • Click quick-access buttons for popular fonts
   • Font loads instantly without page refresh


3) Observe WCAG compliance indicators

   In the grayscale section, look for visual indicators:
   • ✅ Green checkmarks = WCAG AA compliant (good contrast)
   • ❌ Red X marks = Non-compliant (poor contrast)
   • Hover for exact contrast ratios


ORIGINAL METHOD (Still Supported - Local Fonts)

1) Add a typeface to the css/type/ folder
   Supported formats: .otf, .ttf, .woff, .woff2, .eot

2) Edit the embedded CSS in index.html
   Update @font-face declaration and font-family in body selector

3) Update the labels throughout the HTML
   Replace "Font name" with your typeface name

4) Preview in browser
   The specimen displays your font across all test scenarios

PROFESSIONAL USE CASES

• Client presentations with instant font switching
• Design team font evaluation sessions  
• Typography accessibility compliance checking
• Comparative font analysis and documentation
• Style guide development and font selection


============================================================================

BROWSER COMPATIBILITY & MODERN FEATURES:

BROWSER SUPPORT

Enhanced Web Font Specimen works with modern browsers:
• Chrome, Firefox, Safari, Edge (full support including Google Fonts API)
• Modern mobile browsers (iOS Safari, Chrome Mobile)
• Requires JavaScript enabled for Google Fonts integration
• Local font method works in all browsers supporting CSS @font-face

ACCESSIBILITY FEATURES

WCAG AA compliance checking includes:
• Automated contrast ratio calculations
• Visual indicators for text readability
• Support for users evaluating accessible font choices
• Clear pass/fail indicators based on 4.5:1 contrast requirements

WHAT GETS TESTED (Enhanced)

The specimen evaluates fonts across comprehensive scenarios:
• Readability at small sizes (9-13px) for body text
• Display impact at large sizes (24-96px) for headlines  
• Character completeness and spacing
• Contrast performance with WCAG compliance indicators
• Comparison against web-safe system fonts (Arial, Times, Georgia)
• Real-world text samples and pangram testing
• Cross-platform font rendering evaluation

PERFORMANCE

• Google Fonts load dynamically without page refresh
• Fonts are cached by browser after first load
• Search interface provides instant results
• Minimal JavaScript footprint preserves original simplicity

============================================================================

ENHANCED FONT SERVICE INTEGRATION:

GOOGLE FONTS (Now Built-In!)

Google Fonts integration is now seamless with the enhanced interface:
• No manual CSS editing required
• Real-time search of Google Fonts database
• One-click font loading and testing
• Automatic URL generation and font application
• Instant switching between different fonts

ADVANCED: OTHER FONT SERVICES

For services like Adobe Fonts, Typekit, or other providers:
1. Use the "Advanced" section in the Google Fonts loader
2. Paste the service's CSS URL directly
3. Or edit index.html to remove embedded CSS (lines vary by version)
4. Add the service's required code to the HTML <head>
5. Ensure fonts apply to the "body" element selector

CUSTOM FONTS & LOCAL FILES

The original local font method remains fully supported:
• Add font files to css/type/ directory
• Update embedded CSS @font-face declarations
• Perfect for proprietary or licensed fonts
• No internet connection required


============================================================================

CUSTOMIZATION & ADVANCED USAGE:

CUSTOMIZING THE SPECIMEN

You can modify files to customize appearance and functionality:
• wfs.css - Original specimen styling and layout
• google-fonts-loader.css - Search interface styling (matches specimen design)
• google-fonts-loader.js - Search behavior and font database
• index.html - Sample text and specimen sections

SAMPLE TEXT & CONTENT

The specimen includes carefully chosen content:
• Philosophical passages for readability testing at various sizes
• "Pack my box with five dozen liquor jugs" pangram for character coverage
• Complete character set display (A-Z, a-z, 0-9, symbols)
• Real-world text scenarios for practical evaluation

Customize sample text by editing index.html to match your project needs.

WCAG COMPLIANCE CUSTOMIZATION

The WCAG indicators can be customized in google-fonts-loader.js:
• Modify contrast ratio thresholds (currently 4.5:1 for AA)
• Add support for AAA compliance (7:1 ratio)
• Customize visual indicators and tooltips
• Extend to additional color combinations

PROFESSIONAL APPLICATIONS

Enhanced capabilities make this ideal for:
• Client presentations with live font demonstrations
• Accessibility-focused design reviews
• Typography documentation and style guides
• Design system font selection and validation
• Educational workshops on web typography and accessibility
• Comparative analysis of font performance across contexts

============================================================================

RELATED PROJECTS & COMMUNITY ECOSYSTEM:

Tim Brown's Web Font Specimen has inspired numerous adaptations over the years. 
This enhanced version aims to modernize the original while preserving its 
elegant approach to systematic font evaluation.

HISTORICAL ADAPTATIONS (Community Contributions)
• mirisuzanne/webfontspecimen - Compass/Sass port by Eric Meyer (2009)
  https://github.com/mirisuzanne/webfontspecimen
• robertjwhitney/web-font-specimen - Sinatra app port (2010)  
  https://github.com/robertjwhitney/web-font-specimen
• pixelninja/font_trial - Enhanced version with font uploading (2012)
  https://github.com/pixelninja/font_trial

MODERN FONT EVALUATION TOOLS
• mohamdio/Flont - JavaScript font specimen library (2021)
  https://github.com/mohamdio/Flont
• source-foundry/pre-post - Flask + Jinja2 specimen sheets (2018)
  https://github.com/source-foundry/pre-post

WHY THIS ENHANCED VERSION?

While modern font platforms exist, they often prioritize marketing over 
systematic evaluation. This enhanced Web Font Specimen maintains Tim Brown's 
original vision of comprehensive, methodical font testing while adding:
• Real-world workflow integration (Google Fonts)
• Accessibility compliance checking (WCAG)  
• Preserved elegant, professional presentation
• Educational value for typography principles

============================================================================

COMMUNITY & RESOURCES:

CONNECT WITH THE TYPOGRAPHY COMMUNITY

Original Creator - Tim Brown:
• Website: https://tbrown.org  
• Mastodon: @timbrown@mastodon.social
• LinkedIn: https://www.linkedin.com/in/tbrowntype/
• Current Role: Head of Typography at Adobe
• Typography Advisor GPT: https://chatgpt.com/g/g-6747971a14cc819180d3c13f107c317b-typography-advisor

Enhanced Version - Mark Opalski:
• Repository: https://github.com/MarkOpalski/font-specimen
• Issues/Suggestions: https://github.com/MarkOpalski/font-specimen/issues

TYPOGRAPHY RESOURCES & LEARNING

• Tim Brown's Typography Advisor (Custom ChatGPT): Expert typography guidance
• Flexible Typesetting (Tim Brown): https://flexibletypesetting.com/
• Practicing Typography Basics (Video Series): Educational content for all levels
• Adobe Typography Team: Latest developments in digital typography

LICENSING & ATTRIBUTION

This enhanced version maintains Tim Brown's original Creative Commons 
Attribution 3.0 License, ensuring the tool remains open and accessible:
http://creativecommons.org/licenses/by/3.0/us/

When using or adapting this tool, please maintain attribution to:
1. Tim Brown - Original Web Font Specimen creator (2010)  
2. Mark Opalski - Google Fonts integration enhancements (2025)

PRESERVING TYPOGRAPHIC CRAFT

This project exemplifies how foundational design tools can be enhanced while 
preserving their original elegance and educational value. Tim Brown's systematic 
approach to font evaluation remains as relevant today as when he created it, 
and these enhancements aim to make that systematic approach accessible to 
modern workflows.

Thanks for using Enhanced Web Font Specimen. We hope it serves your 
typographic practice well!

---
Original Web Font Specimen v2.0 by Tim Brown, 2010
Enhanced with Google Fonts integration by Mark Opalski, 2025
GitHub Repository: https://github.com/MarkOpalski/font-specimen