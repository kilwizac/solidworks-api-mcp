---
type: enum
name: swSaveAsOptions_e
description: Save As options. Bitmask.
member_count: 13
docset: swconst
categories:
  - constants
used_by: []
---

# swSaveAsOptions_e

Save As options. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swSaveAsOptions_AvoidRebuildOnSave` | 8 | or 0x8 |
| `swSaveAsOptions_Copy` | 2 | or 0x2; Save the document as a copy and continue editing |
| `swSaveAsOptions_CopyAndOpen` | 512 | or 0x200; Save the document as a copy and open it |
| `swSaveAsOptions_DetachedDrawing` |  | Obsolete . |
| `swSaveAsOptions_ExportTo2DPdfFromInspection` | 2048 | or 0x800; Export drawing sheets from Inspection to 2DPdf |
| `swSaveAsOptions_IgnoreBiography` | 256 | or 0x100; Prune a SOLIDWORKS file's revision history to just the current file name |
| `swSaveAsOptions_IncludeVirtualSubAsmComps` | 1024 | or 0x400; Save regular components in virtual subassemblies |
| `swSaveAsOptions_OverrideSaveEmodel` | 32 | or 0x20; Saves eDrawings-related information into a section of the file being saved; specifying this setting overrides the Tools, Options, System Options, General, Save eDrawings data in SOLIDWORKS document setting; not a valid option for IPartDoc::SaveToFile2 |
| `swSaveAsOptions_PropagateVisualProperties` | 4096 | or 0x1000; Export drawing sheets from Inspection to 2DPdf |
| `swSaveAsOptions_SaveEmodelData` |  | Obsolete . |
| `swSaveAsOptions_SaveReferenced` | 4 | or 0x4; Supports parts, assemblies, and drawings; this setting indicates to save all components (sub-assemblies and parts) in both assemblies and drawings; if a part has an external reference, then this setting indicates to save the external reference |
| `swSaveAsOptions_Silent` | 1 | or 0x1 |
| `swSaveAsOptions_UpdateInactiveViews` | 16 | or 0x10; Not a valid option for IPartDoc::SaveToFile2 ; this setting is only applicable for a drawing that has one or more sheets; this setting updates the views on inactive sheets |