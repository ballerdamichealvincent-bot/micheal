# Accessibility role-review record

**Status:** Review notes made while preparing this assistant-session prototype; not a separately captured Copilot Chat response.

## Review focus

- Semantic landmarks and a clear heading hierarchy
- Native keyboard-operable search, select, and button controls
- Visible focus and a skip link
- Accessible labels for controls and context-aware remove buttons
- Announced search and planner status changes
- Readable single-column layout on narrow screens

## Resulting implementation choices

- The page uses `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks.
- Search and category controls have visible labels, and all actions use native buttons.
- `:focus-visible` styling and a skip link are included.
- Search results and the visit-plan count use `aria-live="polite"`.
- Each remove button names the experience it removes.
- CSS switches the cards, filters, hero, and planner to a narrow-screen layout.

## Verification

Browser checks confirmed that Tab navigation reaches an add button, Enter adds a place, and Enter activates the remove button. A 390 px viewport displayed the cards in one column without document overflow.

Screen-reader announcements and full assistive-technology behavior still need testing. A source review and keyboard check are not a substitute for that testing.
