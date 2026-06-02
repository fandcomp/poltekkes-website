# Widget Loading Fix

## Problem
- Widget.js file was loading (404 → 200) but chatbot bubble not appearing
- Script timing issue: widget.js tried to append to `document.body` before it was ready

## Solution
Created a dynamic script loader that:
1. Waits for DOM to be ready (checks `document.readyState`)
2. Waits for `document.body` to exist
3. Dynamically injects widget.js script into body
4. Widget.js then appends the bubble to the ready body element

## Changes
### index.astro
- Removed `<script>` tag approach
- Added `window.PoltekkesChat` config at start of script
- Created `loadWidget()` function with DOMContentLoaded listener
- Script appended to body ensures correct timing

### chat.astro
- Same approach: config + dynamic loading

## Testing
1. Visit `/` (home) - should see green bubble at bottom-right
2. Click bubble to open chat
3. Visit `/chat` - should show fullscreen chat with autoOpen: true
4. Visit `/simple-test` - detailed debug logging

## Console Output
When loaded correctly, you should see:
```
✓ Widget loaded successfully
✓ Launcher visible: true
```

## Files
- `src/pages/index.astro` - Home page with widget
- `src/pages/chat.astro` - Chat page (fullscreen)
- `src/pages/simple-test.astro` - Debug test page
