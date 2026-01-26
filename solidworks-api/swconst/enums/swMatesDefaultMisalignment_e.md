---
type: enum
name: swMatesDefaultMisalignment_e
description: Concentric mate misalignment options.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swMatesDefaultMisalignment_e

Concentric mate misalignment options.

## Values

| Member | Value | Description |
|---|---|---|
| `swMatesAlignFirstConcentricMate` | 0 | ; Align this mate; align the mate currently being edited to be exactly concentric, causing the linked mate to be misaligned |
| `swMatesAlignSecondConcentricMate` | 1 | ; Align linked mate; aligns the linked mate to be exactly concentric, causing the currently edited mate to be misaligned |
| `swMatesSymmetric` | 2 | ; Symmetric; misaligns both concentric mates, splitting the deviation evenly between mates |