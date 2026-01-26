---
type: enum
name: swCloseReopenOption_e
description: File close and reopen options. Bitmask.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swCloseReopenOption_e

File close and reopen options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swCloseReopenOption_DiscardChanges` | 2 | or 0x2; include this option to discard any changes to the document before reopening it; if you exclude this option and there are changes, ISldWorks::CloseAndReopen fails and returns swCloseReopenError_e.swCloseReopenModifiedError |
| `swCloseReopenOption_ExitDetailingMode` | 8 | or 0x8; include this option to reopen model drawings as resolved; if excluded by ISldWorks::CloseAndReopen2, keeps a model drawing in detailing mode on reopen |
| `swCloseReopenOption_MatchSheet` | 4 | or 0x4; include this option to open the same sheet that was active during closing |
| `swCloseReopenOption_ReadOnly` | 1 | or 0x1; include this option to open the drawing document in read-only mode |