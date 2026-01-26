---
type: enum
name: swSaveWithReferencesOptions_e
description: Options for saving references while getting the IAdvancedSaveAsOptions object; used by the Options parameter of IModelDocExtension::GetAdvancedSaveAsOptions. Bitmask.
member_count: 4
docset: swconst
categories:
  - constants
used_by: []
---

# swSaveWithReferencesOptions_e

Options for saving references while getting the IAdvancedSaveAsOptions object; used by the Options parameter of IModelDocExtension::GetAdvancedSaveAsOptions. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swSaveWithReferencesOptions_IncludeBrokenReferences` | 4 | = Reference list contains both normal references and components with broken references |
| `swSaveWithReferencesOptions_IncludeToolBoxParts` | 2 | = Reference list contains both normal and ToolBox references |
| `swSaveWithReferencesOptions_IncludeVirtualComponents` | 1 | = Reference list contains both normal and virtual component references |
| `swSaveWithReferencesOptions_None` | 0 | = Reference list contains only normal references |