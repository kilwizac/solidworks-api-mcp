---
type: enum
name: swComponentSuppressionState_e
description: States for component suppression.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swComponentSuppressionState_e

States for component suppression.

## Values

| Member | Value | Description |
|---|---|---|
| `swComponentFullyLightweight` | 4 | = Fully lightweight - recursively makes the component and any child components lightweight |
| `swComponentFullyResolved` | 2 | = Fully resolved - recursively resolves the component and any child components |
| `swComponentInternalIdMismatch` | 5 |  |
| `swComponentLightweight` | 1 | = Lightweight - makes only the component lightweight |
| `swComponentResolved` | 3 | = Resolved - resolves only the component |
| `swComponentSuppressed` | 0 | = Fully suppressed - recursively suppresses the component and any child components |