---
type: enum
name: swDisplayStateCreationChoices_e
description: Display-state preserve options.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swDisplayStateCreationChoices_e

Display-state preserve options.

## Values

| Member | Value | Description |
|---|---|---|
| `swDisplayStateCreation_AskUser` | -1 | ; Display the dialog where the user can select the display states (PhotoWorks material and SOLIDWORKS colors) he or she wants to preserve; however, if swDisplayStateCreation_AskUser is set and the user opens the file using ISldWorks::OpenDoc n (where n is the version number of the method), then both display states are preserved and the dialog is not displayed; valid in documents created in SOLIDWORKS 2009 and earlier |
| `swDisplayStateCreation_BothPWSW` | 3 | ; Preserve both PhotoWorks and SOLIDWORKS display states; valid in documents created in SOLIDWORKS 2009 and earlier |
| `swDisplayStateCreation_PW` | 1 | ; Preserve PhotoWorks material display state only; valid in documents created in SOLIDWORKS 2009 and earlier |
| `swDisplayStateCreation_SW` | 2 | ; Preserve SOLIDWORKS color display state only; valid in documents created in SOLIDWORKS 2009 and earlier |