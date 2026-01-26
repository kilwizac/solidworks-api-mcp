---
type: enum
name: swManipulatorOptions_e
description: Manipulator options. Bitmask.
member_count: 2
docset: swconst
categories:
  - constants
used_by: []
---

# swManipulatorOptions_e

Manipulator options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swManipulatorOpts_Default` | 0 | or 0x0; Manipulators created using the SOLIDWORKS API are deleted when a component is modified or deleted in the context of an assembly NOTE: This is the default behavior. |
| `swManipulatorOpts_KeepAfterComponentModify` | 1 | or 0x1; Manipulators are not deleted when a component is modified or deleted in the context of an assembly |