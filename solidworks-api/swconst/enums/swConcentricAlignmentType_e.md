---
type: enum
name: swConcentricAlignmentType_e
description: Concentric mate alignment types.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swConcentricAlignmentType_e

Concentric mate alignment types.

## Values

| Member | Value | Description |
|---|---|---|
| `swConcentricAlignConcentric` | 0 | ; Align both mates to be exactly concentric; neither mate is misaligned |
| `swConcentricAlignLinkedMate` | 2 | ; Align the linked mate to be exactly concentric, causing the currently edited mate to be misaligned |
| `swConcentricAlignSymmetric` | 3 | ; Misalign both concentric mates, splitting the misalignment deviation evenly between mates |
| `swConcentricAlignThisMate` | 1 | ; Align the mate currently being edited to be exactly concentric, causing the linked mate to be misaligned |