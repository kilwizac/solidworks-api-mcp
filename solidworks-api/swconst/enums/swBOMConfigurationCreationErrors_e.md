---
type: enum
name: swBOMConfigurationCreationErrors_e
description: BOM table configuration creation errors.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# swBOMConfigurationCreationErrors_e

BOM table configuration creation errors.

## Values

| Member | Value | Description |
|---|---|---|
| `swBOMTableCreation_AlreadyExists` | -3 | = BOM table already exists for this drawing view |
| `swBOMTableCreation_ExcelDisabled` | -4 | = BOM table cannot be created because Microsoft Excel is disabled on this system |
| `swBOMTableCreation_Failed` | -5 | = BOM table creation failed because the specified template is not valid |
| `swBOMTableCreation_MustBeDrawingView` | -2 | = BOM tables can only be added to a drawing view |
| `swBOMTableCreation_NoModelForView` | -6 | = No model available for drawing view |
| `swBOMTableCreation_Okay` | 0 | = Table was successfully created |
| `swBOMTableCreation_UnspecifiedError` | -1 | = Table could not be created for unknown reasons |