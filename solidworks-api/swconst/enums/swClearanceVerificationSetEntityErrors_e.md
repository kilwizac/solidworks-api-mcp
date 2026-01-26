---
type: enum
name: swClearanceVerificationSetEntityErrors_e
description: Error codes when setting entities for clearance verification.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# swClearanceVerificationSetEntityErrors_e

Error codes when setting entities for clearance verification.

## Values

| Member | Value | Description |
|---|---|---|
| `swClearanceVerification_swComponentAlreadySelected` | 2 | = Same component added twice or component added whose face is in face array |
| `swClearanceVerification_swFacesAlreadySelected` | 1 | = Same face added twice |
| `swClearanceVerification_swInsufficientEntities` | 5 | = Face and component arrays are empty |
| `swClearanceVerification_swInvalidComponent` | 3 | = Not a valid SOLIDWORKS component |
| `swClearanceVerification_swInvalidFace` | 4 | = Not a valid SOLIDWORKS face |
| `swClearanceVerification_swSuccess` | 0 |  |
| `swClearanceVerification_Unknown` | -1 |  |