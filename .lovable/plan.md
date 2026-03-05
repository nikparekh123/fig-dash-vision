

# Plan: Make Ownership Table Collapsible

Wrap the shareholder table in `OwnershipStructure.tsx` with a `Collapsible` component (already available at `@/components/ui/collapsible`). Add a `CollapsibleTrigger` button labeled "View Full Table" with a chevron icon that toggles open/closed state. The table starts collapsed by default.

## File Changed
| File | Change |
|---|---|
| `OwnershipStructure.tsx` | Wrap the table Card in `Collapsible` (default closed), add trigger button above it |

