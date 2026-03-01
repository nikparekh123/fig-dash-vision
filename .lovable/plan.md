

## Add News Headlines Section

Add a "Latest News" section to the dashboard displaying the two news headlines as clickable-styled cards with source attribution.

### Implementation

**New file: `src/components/dashboard/NewsSection.tsx`**
- Two news cards with newspaper icon and headline text
- Sources: "Piper Sandler reiterates Figma stock rating on strong guidance" and "Cathie Wood's ARK stock trades: Figma and Teradyne lead activity"
- Styled consistently with the existing dark theme using subtle card borders and backdrop blur

**Modified file: `src/pages/Index.tsx`**
- Import and render `NewsSection` near the top of the dashboard, right after the KPI cards row, to surface timely news prominently
- Add a section heading "Latest News"

### Design
- Each headline in its own card with a `Newspaper` icon from lucide-react
- Muted timestamp/source styling beneath the headline
- Consistent with existing card patterns (border-border/50, bg-card/80, backdrop-blur-sm)

