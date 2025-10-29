Web Font Specimen
Version 2.0
2010-04-06

Created by Tim Brown
http://webfontspecimen.com
http://nicewebtype.com

============================================================================

OVERVIEW

Web Font Specimen is a comprehensive testing and showcase system for 
evaluating web fonts using CSS @font-face. This tool provides designers 
with a systematic way to test typefaces across different sizes, contexts, 
and background conditions.

Thanks for downloading Web Font Specimen! Enclosed you will find example 
HTML, CSS, and image files, plus an empty folder in which to put your type.

FEATURES

• Text samples at various sizes (9px to 96px) with proper line-height (1.4em)
• Character set display showing uppercase, lowercase, numbers, and symbols
• Body size comparisons against standard web fonts (Arial, Times, Georgia)
• Grayscale testing with different color values (#000 to #FFF) on light and dark backgrounds
• Size specimens with pangram text for comprehensive character testing
• Responsive grid layout using 960.gs framework
• Clean, professional presentation suitable for client presentations

TECHNICAL STRUCTURE

• index.html - Main specimen display template with placeholder "Font name"
• css/reset.css - Eric Meyer's CSS reset for consistent cross-browser rendering
• css/960.css - Part of Nathan Smith's 960.gs grid system for layout
• css/wfs.css - Custom styling for the font specimen layout and typography
• css/type/ - Empty folder where you add your font files
• css/images/ - Background images and grid overlays for visual alignment

One of the CSS files is Eric Meyer's reset.css; if you prefer a different 
stylesheet for resetting default browser styling, swap it out. Another of 
the CSS files is part of Nathan Smith's 960.gs, used for layout.

http://meyerweb.com/eric/tools/css/reset/
http://960.gs/

Feel free to edit and re-release wfs.css and the markup that uses it. They 
are licensed under a Creative Commons Attribution 3.0 License:
http://creativecommons.org/licenses/by/3.0/us/

============================================================================

HOW TO USE:

QUICK START GUIDE

1) Add a typeface to the css/type/ folder

   Make sure the typeface you want to try is licensed for use with the CSS 
   @font-face property. (Not sure? Check the typeface's EULA.) The typefaces 
   featured at http://webfontspecimen.com are okay to use.

   Supported formats: .otf, .ttf, .woff, .woff2, .eot


2) Edit index.html

   In the HTML's embedded CSS (lines 12-15), update the @font-face property 
   and font stack. The value "Font name" is arbitrary, but must be the same 
   in both spots (@font-face declaration and body declaration).

   Example:
   @font-face {
       font-family: "Helvetica Neue";
       src: url(css/type/helvetica-neue.otf) format("opentype");
   }
   body { font-family: "Helvetica Neue", Georgia; }


3) Label the HTML with your typeface's name

   - Line 6, <title>Font name - Web Font Specimen</title>
   - Line 31, <h1>Font name</h1>
   - Line 67, <th>Font name</th>
   

4) Preview index.html in a browser!

   The specimen will display your font across multiple test scenarios:
   • Various font sizes with sample text
   • Complete character set display
   • Color contrast testing on light and dark backgrounds
   • Side-by-side comparison with system fonts


============================================================================

BROWSER COMPATIBILITY & ADDITIONAL READING:

BROWSER SUPPORT

Web Font Specimen is designed to be quick and easy. The tool works with 
modern browsers that support CSS @font-face:
• Chrome, Firefox, Safari (full support)
• Internet Explorer 9+ (with proper font formats)
• Edge (full support)

For older Internet Explorer support, you may need additional font formats 
(.eot) and browser-specific CSS. With a little extra effort and some advice 
from the pros, we can improve browser compatibility.

"How to use CSS @font-face" walks you through the concepts:
http://nicewebtype.com/x/u

WHAT GETS TESTED

The specimen evaluates fonts across key typographic scenarios:
• Readability at small sizes (9-13px) for body text
• Display impact at large sizes (24-96px) for headlines  
• Character completeness and spacing
• Contrast performance in various color combinations
• Comparison against web-safe system fonts

============================================================================

USING WITH TYPE DELIVERY SERVICES:

INTEGRATION WITH FONT SERVICES

If you're using Web Font Specimen to try out typefaces from a type delivery 
service like Typekit, Adobe Fonts, Google Fonts, or Kernest, you'll need to 
remove the embedded CSS (the CSS in index.html) on lines 10-18 and add 
whatever code your service requires.

Just be sure the type delivered by your service is being applied to 
the "body" HTML element selector.

Example for Google Fonts:
1. Remove lines 10-18 from index.html
2. Add Google Fonts link in <head>: 
   <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
3. Update body CSS: body { font-family: "Open Sans", Georgia; }


============================================================================

CUSTOMIZATION & ADVANCED USAGE:

CUSTOMIZING THE SPECIMEN

You can modify wfs.css to customize the specimen's appearance:
• Change background colors and layout
• Adjust font size ranges and sample text
• Modify color contrast testing values
• Add your own branding or client information

SAMPLE TEXT OPTIONS

The default specimen uses:
• Philosophical text for readability testing at various sizes
• "Pack my box with five dozen liquor jugs" pangram for character coverage
• Complete character set display (A-Z, a-z, 0-9, symbols)

You can replace these with your own sample text relevant to your project.

PROFESSIONAL USE

This tool is ideal for:
• Client presentations and font recommendations
• Internal design team font evaluations  
• Comparative font analysis and selection
• Typography documentation and style guides

============================================================================

QUESTIONS & COMMUNITY:

GETTING HELP

Join Nice Web Type in the trenches. Let me know what you're working on via 
@nicewebtype reply on Twitter. I'll add you to a growing list of folks who 
are working for the betterment of typographic style and practice:
http://twitter.com/nicewebtype/trenches

ADDITIONAL RESOURCES

• Original Web Font Specimen site: http://webfontspecimen.com
• Nice Web Type blog: http://nicewebtype.com  
• CSS @font-face guide: http://nicewebtype.com/x/u
• Creative Commons License: http://creativecommons.org/licenses/by/3.0/us/

Thanks for checking out Web Font Specimen. I hope you enjoy it!

Tim Brown
Nice Web Type
2010-2025