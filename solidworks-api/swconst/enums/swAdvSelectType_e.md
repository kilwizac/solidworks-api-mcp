---
type: enum
name: swAdvSelectType_e
description: Conditions of criteria for advanced component selection list. Bitmask.
member_count: 16
docset: swconst
categories:
  - constants
used_by: []
---

# swAdvSelectType_e

Conditions of criteria for advanced component selection list. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swAdvSelectType_And` | 1 | or 0x1 |
| `swAdvSelectType_Contains` | 16 | or 0x10 |
| `swAdvSelectType_Does_Not_Interferes_With` | 128 | or 0x80 |
| `swAdvSelectType_Equals` | 4096 | or 0x1000 |
| `swAdvSelectType_Greater_Than` | 256 | or 0x100 |
| `swAdvSelectType_Greater_Than_OR_Equal` | 1024 | or 0x400 |
| `swAdvSelectType_Interferes_With` | 64 | or 0x40 |
| `swAdvSelectType_Is_Ccontained_By` | 32 | or 0x20 |
| `swAdvSelectType_Is_Exactly` | 4 | or 0x4 |
| `swAdvSelectType_Is_No` | 32768 | or 0x8000 |
| `swAdvSelectType_Is_Not` | 8 | or 0x8 |
| `swAdvSelectType_Is_Not_Equal` | 8192 | or 0x2000 |
| `swAdvSelectType_Is_Yes` | 16384 | or 0x4000 |
| `swAdvSelectType_Less_Than` | 512 | or 0x200 |
| `swAdvSelectType_Less_Than_OR_Equal` | 2048 | or 0x800 |
| `swAdvSelectType_Or` | 2 | or 0x2 |