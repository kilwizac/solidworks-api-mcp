---
type: enum
name: swUserPreferenceStringListValue_e
description: User-preference enumerators for system options and document properties.
member_count: 3
docset: swconst
categories:
  - constants
used_by: []
---

# swUserPreferenceStringListValue_e

User-preference enumerators for system options and document properties.

## Values

| Member | Value | Description |
|---|---|---|
| `swDxfMappingFiles` | 0 | = This setting is persistent across SOLIDWORKS sessions; you can also interactively get or set the custom map file setting by clicking File, Save As, .dxf or .dwg as Save as type , and Options ; separate each string in the list by a line feed (e.g., the vbLf constant in Visual Basic). |
| `swEmodelAttachmentList` | 2 | = Sets which configurations for which to generate and attach STEP files |
| `swEmodelSelectionList` | 1 | = Sets which configurations or sheets to save when publishing an eDrawings |