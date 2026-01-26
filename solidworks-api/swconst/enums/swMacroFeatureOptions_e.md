---
type: enum
name: swMacroFeatureOptions_e
description: Placement of the macro feature in the FeatureManager design tree options. Bitmask.
member_count: 6
docset: swconst
categories:
  - constants
used_by: []
---

# swMacroFeatureOptions_e

Placement of the macro feature in the FeatureManager design tree options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swMacroFeatureAlwaysAtEnd` | 1 | or 0x1 |
| `swMacroFeatureByDefault` | 0 | or 0x0 |
| `swMacroFeatureEmbedMacroFile` | 16 | or 0x10; not supported by programming languages for the Microsoft .NET Framework; for example, not supported by C#, Visual Basic .NET, or Managed C++ |
| `swMacroFeatureIsDragable` | 4 | or 0x4 |
| `swMacroFeatureIsPatternable` | 2 | or 0x2 |
| `swMacroFeatureNoCachedBody` | 8 | or 0x8; do not serialize cached body in macro feature |