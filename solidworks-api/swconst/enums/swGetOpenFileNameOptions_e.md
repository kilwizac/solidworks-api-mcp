---
type: enum
name: swGetOpenFileNameOptions_e
description: Options for opening a file returned by ISldWorks::GetOpenFileName2. Bitmask.
member_count: 16
docset: swconst
categories:
  - constants
used_by: []
---

# swGetOpenFileNameOptions_e

Options for opening a file returned by ISldWorks::GetOpenFileName2. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swGetOpenFileNameOptions_AdvancedConfig` | 0 | x2000; "<Advanced>" selected in configuration dropdown |
| `swGetOpenFileNameOptions_AutoMissingConfig` | 0 | x20; Reserved for internal use |
| `swGetOpenFileNameOptions_DontLoadHiddenComponents` | 0 | x100; Does not load hidden components (assemblies only) |
| `swGetOpenFileNameOptions_LDR_EditAssembly` | 0 | x800; Reserved for internal use |
| `swGetOpenFileNameOptions_LoadExternalReferencesInMemory` | 0 | x200; Reserved for internal use |
| `swGetOpenFileNameOptions_LoadLightweight` | 0 | x80; Opens the document in lightweight mode |
| `swGetOpenFileNameOptions_LoadModel` | 0 | x10; Reserved for internal use |
| `swGetOpenFileNameOptions_OpenDetailingMode` | 0 | x400; Opens the document in detailing mode without part and assembly data (drawings only) |
| `swGetOpenFileNameOptions_OverrideDefaultLoadLightweight` | 0 | x40; Reserved for internal use |
| `swGetOpenFileNameOptions_RapidDraft` | 0 | x8; Reserved for internal use |
| `swGetOpenFileNameOptions_ReadOnly` | 0 | x2; Opens the document read only |
| `swGetOpenFileNameOptions_SelectedSheets` | 0 | x8000; "Selected" is checked in Select Sheet to load dialog |
| `swGetOpenFileNameOptions_Silent` | 0 | x1; Reserved for internal use |
| `swGetOpenFileNameOptions_SpeedPak` | 0 | x1000; Uses Speedpak (assemblies only) |
| `swGetOpenFileNameOptions_UseLargeAssemblySettings` | 0 | x4000; Uses large assembly settings (assemblies only) |
| `swGetOpenFileNameOptions_ViewOnly` | 0 | x4; Opens the document view only; returned if "None" is selected in Select Sheet to load dialog |