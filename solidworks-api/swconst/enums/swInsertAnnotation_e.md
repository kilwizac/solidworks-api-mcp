---
type: enum
name: swInsertAnnotation_e
description: Annotation types. Bitmask.
member_count: 26
docset: swconst
categories:
  - constants
used_by: []
---

# swInsertAnnotation_e

Annotation types. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swInsertAxes` | 512 | or 0x200 |
| `swInsertCenterOfMass` | 33554432 | or 0x2000000 |
| `swInsertCThreads` | 1 | or 0x1; insert annotation cosmetic threads |
| `swInsertCurves` | 1024 | or 0x400 |
| `swInsertDatums` | 2 | or 0x2 |
| `swInsertDatumTargets` | 4 | or 0x4 |
| `swInsertDimensions` | 8 | or 0x8 |
| `swInsertDimensionsMarkedForDrawing` | 32768 | or 0x8000 |
| `swInsertDimensionsNotMarkedForDrawing` | 524288 | or 0x80000 |
| `swInsertGTols` | 32 | or 0x20; insert annotation geometric tolerances |
| `swInsertholeCallout` | 1048576 | or 0x100000 |
| `swInsertHoleWizardLocationDimensions` | 131072 | or 0x20000 |
| `swInsertHoleWizardProfileDimensions` | 65536 | or 0x10000 |
| `swInsertInstanceCounts` | 16 | or 0x10; insert dimension instance/revolution counts |
| `swInsertNotes` | 64 | or 0x40 |
| `swInsertOrigins` | 16384 | or 0x4000 |
| `swInsertPlanes` | 2048 | or 0x800 |
| `swInsertPoints` | 8192 | or 0x2000; insert routing points |
| `swInsertRefPoints` | 262144 | or 0x40000; insert reference geometry points |
| `swInsertSFSymbols` | 128 | or 0x80; insert annotation surface finishes |
| `swInsertSketches` | 4194304 | or 0x400000 |
| `swInsertSurfaces` | 4096 | or 0x1000 |
| `swInsertTolerancedDims` | 16777216 | or 0x1000000 |
| `swInsertWeldBeads` | 2097152 | or 0x200000; insert annotation weld bead caterpillars |
| `swInsertWeldBeads_ET` | 8388608 | or 0x800000; insert annotation weld bead end treatments |
| `swInsertWelds` | 256 | or 0x100; insert annotation weld symbols |