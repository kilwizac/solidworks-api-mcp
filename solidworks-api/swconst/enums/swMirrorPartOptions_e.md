---
type: enum
name: swMirrorPartOptions_e
description: Options for creating a mirror part. Bitmask.
member_count: 17
docset: swconst
categories:
  - constants
used_by: []
---

# swMirrorPartOptions_e

Options for creating a mirror part. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swMirrorPartOptions_ImportAbsorbedSketchs` | 32 | or 0x20 |
| `swMirrorPartOptions_ImportAxes` | 4 | or 0x4 |
| `swMirrorPartOptions_ImportBodyMaterial` | 32768 | or 0x8000 |
| `swMirrorPartOptions_ImportCoordinateSystem` | 256 | or 0x100 |
| `swMirrorPartOptions_ImportCosmeticThreads` | 16 | or 0x10 |
| `swMirrorPartOptions_ImportCustomProperties` | 128 | or 0x80 |
| `swMirrorPartOptions_ImportCutListProperties` | 2048 | or 0x800 |
| `swMirrorPartOptions_ImportDimXpertAnnotations` | 16384 | or 0x4000 |
| `swMirrorPartOptions_ImportHoleWizardData` | 1024 | or 0x400 |
| `swMirrorPartOptions_ImportIndProps` | 8192 | or 0x2000 = Lets you edit the sheet-metal definition in the mirrored part, which updates the cut-list properties |
| `swMirrorPartOptions_ImportModelDimensions` | 512 | or 0x200 |
| `swMirrorPartOptions_ImportPartMaterial` | 65536 | or 0x10000 |
| `swMirrorPartOptions_ImportPlanes` | 8 | or 0x8 |
| `swMirrorPartOptions_ImportSMInfo` | 4096 | or 0x1000 = Transfers the sheet-metal and flat-pattern information from the original part to the mirrored part; e.g., fixed face, grain direction, bendlines, and bounding box |
| `swMirrorPartOptions_ImportSolids` | 1 | or 0x1 |
| `swMirrorPartOptions_ImportSurfaces` | 2 | or 0x2 |
| `swMirrorPartOptions_ImportUnabsorbedSketchs` | 64 | or 0x40 |