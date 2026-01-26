---
type: enum
name: swPMContainer_e
description: Docking states of PropertyManager page.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swPMContainer_e

Docking states of PropertyManager page.

## Values

| Member | Value | Description |
|---|---|---|
| `swPMFloating` | 3 | = True floating state where PropertyManager page lives inside new docking pane; a single floating window owns all PropertyManager pages of all open documents |
| `swPMInTabsWithFM` | 0 | = Old-style PropertyManager page embedded in tabs at top |
| `swPMPinnedAboveFM` | 1 | = Quasi floating state where PropertyManager page automatically displays, resizes itself in the lower-left corner of model frame window, and covers the FeatureManager design tree; one window for each open document |
| `swPMPinnedLowerRight` | 4 | = Quasi floating state where PropertyManager page automatically displays, resizes itself in the lower-right corner of the model frame window, covers the graphic area, and has full height; one window for each open document |
| `swPMPinnedNextToFM` | 2 | = Quasi floating state where PropertyManager page automatically displays, resizes itself to the right of the FeatureManager design tree, covers the graphics area, and has full height.; one window for each open document |