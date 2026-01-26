---
type: enum
name: swEditPartCommandStatus_e
description: Return values during the activation of a part.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# swEditPartCommandStatus_e

Return values during the activation of a part.

## Values

| Member | Value | Description |
|---|---|---|
| `swEditPartAsmMustBeSaved` | -2 |  |
| `swEditPartCompMustBeResolved` | -4 |  |
| `swEditPartCompMustBeSelected` | -3 |  |
| `swEditPartCompMustHaveWriteAccess` | -5 |  |
| `swEditPartCompNotPositioned` | 1 | or 0x1 |
| `swEditPartFailure` | -1 |  |
| `swEditPartSuccessful` | 0 |  |