// =============================================
// Pure JavaScript Redirect Script
// Etsy Personalized Coffee Mug Redirect
// =============================================

(function() {
    "use strict";

    // ===== CONFIGURATION =====
    const OFFER_URL = "https://www.etsy.com/listing/1810415825/personalized-coffee-mug-custom-mug-photo";

    // ===== MAIN REDIRECT FUNCTION =====
    function trackAndRedirect() {
        // বর্তমান পেজের সব query parameters নিয়ে নেওয়া (fbclid, utm_source, gclid ইত্যাদি)
        const queryParams = window.location.search;

        // Final target URL তৈরি করা
        let targetUrl = OFFER_URL;

        if (queryParams && queryParams !== "?") {
            targetUrl += queryParams;
        }

        // Console log (debugging এর জন্য)
        console.log("%c[Redirect] Moving to Etsy...", "color: #3498db; font-weight: bold;");
        console.log("%cTarget URL: " + targetUrl, "color: #2ecc71;");

        // Optional: কিছু tracking pixel বা analytics ফায়ার করতে চাইলে এখানে যোগ করতে পারো
        // Example: fireTrackingPixels();

        // Redirect with small delay (300ms)
        setTimeout(() => {
            window.location.replace(targetUrl);
        }, 0);
    }

    // ===== AUTO RUN =====
    // পেজ লোড হওয়ার সাথে সাথে রান করবে
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", trackAndRedirect);
    } else {
        trackAndRedirect();
    }

    // Extra safety: যদি কোনো কারণে onload না চলে
    window.onload = trackAndRedirect;

})();   // IIFE (Immediately Invoked Function Expression)