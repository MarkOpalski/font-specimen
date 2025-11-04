/**
 * Google Fonts Loader for Web Font Specimen
 * Allows dynamic loading of Google Fonts via URL
 */

class GoogleFontsLoader {
  constructor() {
    this.loadedFonts = new Set();
    this.fontDatabase = [];
    this.apiKey = null; // We'll use a public endpoint instead
    this.init();
  }

  async init() {
    this.createUI();
    await this.loadFontDatabase();
    this.bindEvents();
    // Initialize with Georgia font and WCAG indicators
    this.resetToDefault();
  }

  createUI() {
    const fontLoaderContainer = document.getElementById(
      "font-loader-container"
    );
    if (!fontLoaderContainer) return;

    const fontLoader = document.createElement("div");
    fontLoader.className = "font-loader grid_16";
    fontLoader.innerHTML = `
            <div class="font-input-section">
                <h2>Google Fonts loader <span>— Dynamic font loading and WCAG compliance</span></h2>
                <div class="input-group">
                    <input 
                        type="text" 
                        id="fontNameInput" 
                        placeholder="Search Google Fonts... (e.g., Inter, Roboto, monospace fonts)"
                        class="font-name-input"
                        autocomplete="off"
                    />
                    <div id="searchResults" class="search-results" style="display: none;"></div>
                    <button id="loadFontByName" class="load-font-btn">Load Font</button>
                </div>
                <div class="quick-fonts">
                    <p style="margin: 18px 0; color: #999; font: normal 13px Verdana, sans-serif;">Popular fonts</p>
                    <button class="quick-font-btn" data-font="Inter">Inter</button>
                    <button class="quick-font-btn" data-font="Roboto">Roboto</button>
                    <button class="quick-font-btn" data-font="Open Sans">Open Sans</button>
                    <button class="quick-font-btn" data-font="Poppins">Poppins</button>
                    <button class="quick-font-btn" data-font="Montserrat">Montserrat</button>
                    <button class="quick-font-btn" data-font="Playfair Display">Playfair Display</button>
                    <button class="quick-font-btn" data-font="Source Code Pro">Source Code Pro</button>
                    <button class="quick-font-btn" data-font="M PLUS Code Latin">M PLUS Code Latin</button>
                </div>
                <div class="advanced-options">
                    <details>
                        <summary>⚙️ Advanced: Load by URL</summary>
                        <div class="url-input-group">
                            <input 
                                type="url" 
                                id="googleFontUrl" 
                                placeholder="Or paste Google Fonts CSS URL"
                                class="font-url-input"
                            />
                            <button id="loadFont" class="load-font-btn-small">Load URL</button>
                        </div>
                    </details>
                </div>
                <div id="loadStatus" class="load-status"></div>
            </div>
        `;

    fontLoaderContainer.appendChild(fontLoader);
  }

  async loadFontDatabase() {
    try {
      this.showStatus("Loading Google Fonts database...", "loading");

      // Using the public Google Fonts API to get all available fonts
      const response = await fetch(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDummyKeyForDemo&sort=popularity"
      );

      // If the API key doesn't work, fall back to a curated list
      if (!response.ok) {
        this.fontDatabase = this.getFallbackFontList();
      } else {
        const data = await response.json();
        this.fontDatabase = data.items || this.getFallbackFontList();
      }

      this.showStatus("", "");
    } catch (error) {
      console.log("Using fallback font list");
      this.fontDatabase = this.getFallbackFontList();
    }
  }

  getFallbackFontList() {
    // Curated list of popular Google Fonts organized by category
    return [
      // Sans Serif
      { family: "Inter", category: "sans-serif" },
      { family: "Roboto", category: "sans-serif" },
      { family: "Open Sans", category: "sans-serif" },
      { family: "Poppins", category: "sans-serif" },
      { family: "Montserrat", category: "sans-serif" },
      { family: "Nunito", category: "sans-serif" },
      { family: "Raleway", category: "sans-serif" },
      { family: "Ubuntu", category: "sans-serif" },
      { family: "Work Sans", category: "sans-serif" },
      { family: "Figtree", category: "sans-serif" },
      { family: "DM Sans", category: "sans-serif" },
      { family: "Lexend", category: "sans-serif" },

      // Serif
      { family: "Playfair Display", category: "serif" },
      { family: "Merriweather", category: "serif" },
      { family: "Lora", category: "serif" },
      { family: "Crimson Text", category: "serif" },
      { family: "Libre Baskerville", category: "serif" },
      { family: "EB Garamond", category: "serif" },
      { family: "Cormorant Garamond", category: "serif" },

      // Monospace
      { family: "Fira Code", category: "monospace" },
      { family: "Source Code Pro", category: "monospace" },
      { family: "JetBrains Mono", category: "monospace" },
      { family: "Inconsolata", category: "monospace" },
      { family: "M PLUS Code Latin", category: "monospace" },
      { family: "Roboto Mono", category: "monospace" },
      { family: "Space Mono", category: "monospace" },

      // Display
      { family: "Oswald", category: "display" },
      { family: "Bebas Neue", category: "display" },
      { family: "Righteous", category: "display" },
      { family: "Fredoka One", category: "display" },
    ];
  }

  bindEvents() {
    const loadByNameBtn = document.getElementById("loadFontByName");
    const fontNameInput = document.getElementById("fontNameInput");
    const loadUrlBtn = document.getElementById("loadFont");
    const urlInput = document.getElementById("googleFontUrl");
    const quickBtns = document.querySelectorAll(".quick-font-btn");
    const searchResults = document.getElementById("searchResults");

    // Font name input events with search
    if (loadByNameBtn && fontNameInput) {
      loadByNameBtn.addEventListener("click", () => this.loadFontByName());

      fontNameInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.loadFontByName();
      });

      // Real-time search as user types
      fontNameInput.addEventListener("input", (e) => {
        this.searchFonts(e.target.value);
      });

      // Hide search results when input loses focus (with delay for clicks)
      fontNameInput.addEventListener("blur", () => {
        setTimeout(() => {
          if (searchResults) searchResults.style.display = "none";
        }, 150);
      });

      // Show search results when input gains focus
      fontNameInput.addEventListener("focus", (e) => {
        if (e.target.value) this.searchFonts(e.target.value);
      });
    }

    // URL input events (advanced)
    if (loadUrlBtn && urlInput) {
      loadUrlBtn.addEventListener("click", () => this.loadFontFromInput());
      urlInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") this.loadFontFromInput();
      });
    }

    // Quick font buttons
    quickBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const fontName = e.target.dataset.font;
        this.loadFontByNameDirect(fontName);
      });
    });

    // Reset button
    this.addResetButton();
  }

  searchFonts(query) {
    const searchResults = document.getElementById("searchResults");
    if (!searchResults || !query || query.length < 2) {
      if (searchResults) searchResults.style.display = "none";
      return;
    }

    const results = this.fontDatabase
      .filter(
        (font) =>
          font.family.toLowerCase().includes(query.toLowerCase()) ||
          font.category.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 10); // Limit to 10 results

    if (results.length === 0) {
      searchResults.style.display = "none";
      return;
    }

    searchResults.innerHTML = results
      .map(
        (font) => `
      <div class="search-result-item" data-font="${font.family}">
        <span class="font-name">${font.family}</span>
        <span class="font-category">${font.category}</span>
      </div>
    `
      )
      .join("");

    // Add click handlers to search results
    searchResults.querySelectorAll(".search-result-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        const fontName = e.currentTarget.dataset.font;
        document.getElementById("fontNameInput").value = fontName;
        searchResults.style.display = "none";
        this.loadFontByNameDirect(fontName);
      });
    });

    searchResults.style.display = "block";
  }

  loadFontByName() {
    const fontNameInput = document.getElementById("fontNameInput");
    const fontName = fontNameInput.value.trim();

    if (!fontName) {
      this.showStatus("Please enter a font name", "error");
      return;
    }

    // Hide search results
    const searchResults = document.getElementById("searchResults");
    if (searchResults) searchResults.style.display = "none";

    this.loadFontByNameDirect(fontName);
  }

  loadFontByNameDirect(fontName) {
    // Generate Google Fonts URL from font name
    const url = this.generateGoogleFontsUrl(fontName);
    this.loadGoogleFont(url, fontName);
  }

  generateGoogleFontsUrl(fontName) {
    // Convert font name to URL-safe format
    const urlSafeName = fontName.replace(/\s+/g, "+");

    // Default weights for good coverage
    const weights = "100..900"; // Variable font weights

    // Construct the Google Fonts CSS URL
    return `https://fonts.googleapis.com/css2?family=${urlSafeName}:wght@${weights}&display=swap`;
  }

  loadFontFromInput() {
    const urlInput = document.getElementById("googleFontUrl");
    const url = urlInput.value.trim();

    if (!url) {
      this.showStatus("Please enter a Google Fonts URL", "error");
      return;
    }

    if (!this.isValidGoogleFontsUrl(url)) {
      this.showStatus("Please enter a valid Google Fonts URL", "error");
      return;
    }

    const fontName = this.extractFontName(url);
    this.loadGoogleFont(url, fontName);
  }

  isValidGoogleFontsUrl(url) {
    return (
      url.includes("fonts.googleapis.com") || url.includes("fonts.google.com")
    );
  }

  extractFontName(url) {
    // Extract font family name from Google Fonts URL
    const match = url.match(/family=([^:&]+)/);
    if (match) {
      let fontName = decodeURIComponent(match[1]).replace(/\+/g, " ");

      // Handle multiple fonts (take the first one)
      if (fontName.includes("|")) {
        fontName = fontName.split("|")[0];
      }

      // Clean up the name
      fontName = fontName.trim();

      return fontName;
    }
    return "Custom Google Font";
  }

  async loadGoogleFont(url, fontName) {
    try {
      if (this.loadedFonts.has(url)) {
        this.showStatus(`${fontName} is already loaded`, "info");
        this.applyFont(fontName);
        return;
      }

      this.showStatus(`Loading ${fontName}...`, "loading");

      // Create and load the font stylesheet
      const link = document.createElement("link");
      link.href = url;
      link.rel = "stylesheet";
      link.onload = () => {
        this.loadedFonts.add(url);
        this.applyFont(fontName);
        this.showStatus(`${fontName} loaded successfully!`, "success");
        this.updateFontDisplay(fontName);
      };
      link.onerror = () => {
        this.showStatus(`Failed to load ${fontName}`, "error");
      };

      document.head.appendChild(link);
    } catch (error) {
      this.showStatus(`Error loading font: ${error.message}`, "error");
    }
  }

  applyFont(fontName) {
    // Update the CSS to use the new font
    const style = document.createElement("style");
    style.id = "dynamic-font-style";

    // Remove any existing dynamic styles
    const existingStyle = document.getElementById("dynamic-font-style");
    if (existingStyle) {
      existingStyle.remove();
    }

    style.textContent = `
            body {
                font-family: "${fontName}", Georgia, serif !important;
            }
        `;

    document.head.appendChild(style);
  }

  updateFontDisplay(fontName) {
    // Update the h1 title and table header
    const h1 = document.querySelector("h1");
    const tableHeader = document.querySelector(".bodysize th");

    if (h1) h1.textContent = fontName;
    if (tableHeader) tableHeader.textContent = fontName;

    // Update page title
    document.title = `${fontName} - Web Font Specimen`;

    // Add WCAG compliance indicators
    this.addWCAGIndicators();
  }

  showStatus(message, type) {
    const status = document.getElementById("loadStatus");
    if (!status) return;

    status.textContent = message;
    status.className = `load-status ${type}`;

    if (type === "success" || type === "info") {
      setTimeout(() => {
        status.textContent = "";
        status.className = "load-status";
      }, 3000);
    }
  }

  addResetButton() {
    const statusDiv = document.getElementById("loadStatus");
    if (!statusDiv) return;

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset to Default";
    resetBtn.className = "reset-font-btn";
    resetBtn.addEventListener("click", () => this.resetToDefault());

    statusDiv.parentNode.appendChild(resetBtn);
  }

  resetToDefault() {
    // Remove dynamic styles
    const dynamicStyle = document.getElementById("dynamic-font-style");
    if (dynamicStyle) {
      dynamicStyle.remove();
    }

    // Reset display text to Georgia (the default font)
    const h1 = document.querySelector("h1");
    const tableHeader = document.querySelector(".bodysize th");

    if (h1) h1.textContent = "Georgia";
    if (tableHeader) tableHeader.textContent = "Georgia";

    document.title = "Georgia - Web Font Specimen";

    // Apply default Georgia font explicitly
    const style = document.createElement("style");
    style.id = "dynamic-font-style";
    style.textContent = `
      body {
        font-family: Georgia, "New Century Schoolbook", "Nimbus Roman No9 L", serif !important;
      }
    `;
    document.head.appendChild(style);

    this.showStatus("Reset to Georgia (default)", "info");
    this.addWCAGIndicators();
  }

  addWCAGIndicators() {
    // WCAG AA compliance thresholds (4.5:1 for normal text, 3:1 for large text)
    const contrastRatios = {
      "#000": { white: 21, black: 1 }, // Black - always passes
      "#333": { white: 12.63, black: 1.66 }, // Dark gray - passes AA
      "#666": { white: 5.74, black: 3.66 }, // Medium gray - passes AA for large text
      "#999": { white: 2.85, black: 7.37 }, // Light gray - fails AA
      "#ccc": { white: 1.61, black: 13.04 }, // Very light gray - fails AA
      "#fff": { white: 1, black: 21 }, // White - fails on white bg
    };

    // Add indicators to grayscale section
    const grayscalePs = document.querySelectorAll(".grayscale p");
    grayscalePs.forEach((p) => {
      const classes = Array.from(p.classList);
      const colorClass = classes.find((c) => c.startsWith("c"));

      if (colorClass) {
        let hex = "#" + colorClass.substring(1).toLowerCase();
        if (hex === "#cccc") hex = "#ccc"; // Handle the cCCC class

        const span = p.querySelector("span");
        if (span && contrastRatios[hex]) {
          // Remove existing indicators
          const existingIndicator = span.querySelector(".wcag-indicator");
          if (existingIndicator) existingIndicator.remove();

          // Determine if this passes WCAG AA (4.5:1 ratio)
          const isOnWhite = p.closest(".white");
          const contrast = isOnWhite
            ? contrastRatios[hex].white
            : contrastRatios[hex].black;
          const passes = contrast >= 4.5;

          const indicator = document.createElement("span");
          indicator.className = `wcag-indicator ${
            passes ? "wcag-pass" : "wcag-fail"
          }`;
          indicator.title = `Contrast ratio: ${contrast.toFixed(
            2
          )}:1 (WCAG AA ${passes ? "Pass" : "Fail"})`;
          span.appendChild(indicator);
        }
      }
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const loader = new GoogleFontsLoader();
});
