---
type: enum
name: swCreateExplodeStepError_e
description: Return codes when creating an explode step.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# swCreateExplodeStepError_e

Return codes when creating an explode step.

## Values

| Member | Value | Description |
|---|---|---|
| `swCreateExplodeStepError_EditingComponentInContext` | 6 | = A component being edited in context is blocking explode step creation. |
| `swCreateExplodeStepError_Generic` | 1 | = Explode step creation failed. |
| `swCreateExplodeStepError_InvalidRadialAxis` | 4 | = A radial explode step is not allowed using the selected components. |
| `swCreateExplodeStepError_NoComponents` | 3 | = Components to move must be selected. |
| `swCreateExplodeStepError_NoExplodeView` | 2 | = An explode view must be active in the current configuration to create an explode step. |
| `swCreateExplodeStepError_OpenExplodePMP` | 5 | = The open Explode PropertyManager is blocking step creation. |
| `swCreateExplodeStepError_Successful` | 0 |  |