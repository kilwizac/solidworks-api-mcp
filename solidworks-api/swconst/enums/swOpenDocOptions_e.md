---
type: enum
name: swOpenDocOptions_e
description: How to open documents using ISldWorks::OpenDoc6. Bitmask.
member_count: 14
docset: swconst
categories:
  - constants
used_by: []
---

# swOpenDocOptions_e

How to open documents using ISldWorks::OpenDoc6. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swOpenDocOptions_AdvancedConfig` | 8192 | or 0x2000; Open assembly using an advanced configuration |
| `swOpenDocOptions_AutoMissingConfig` | 32 | or 0x20 = Obsolete; do not use The software automatically uses the last-used configuration of a model when it discovers missing configurations or component references as it silently opens drawings and assemblies. |
| `swOpenDocOptions_DontLoadHiddenComponents` | 256 | or 0x100 = By default, hidden components are loaded when you open an assembly document. Set swOpenDocOptions_DontLoadHiddenComponents to not load hidden components when opening an assembly document |
| `swOpenDocOptions_LDR_EditAssembly` | 2048 | or 0x800 = Open in Large Design Review (resolved) mode with edit assembly enabled; use in combination with swOpenDocOptions_ViewOnly |
| `swOpenDocOptions_LoadExternalReferencesInMemory` | 512 | or 0x200 = Open external references in memory only; this setting is valid only if swUserPreferenceIntegerValue_e .swLoadExternalReferences is not set to swLoadExternalReferences_e .swLoadExternalReferences_None swUserPreferenceToggle_e.swExtRefLoadRefDocsInMemory ( System Options > External References > Load documents in memory only ) is ignored when opening documents through the API because IDocumentSpecification::LoadExternalReferencesInMemory and ISldWorks::OpenDoc6 (swOpenDocOptions_e.swOpenDocOptions_LoadExternalReferencesInMemory) have sole control of reference loading |
| `swOpenDocOptions_LoadLightweight` | 128 | or 0x80 = Open assembly document as lightweight NOTE: The default for whether an assembly document is opened lightweight is based on a registry setting accessed via Tools , Options, Assemblies or with the user preference setting swAutoLoadPartsLightweight To override the default and specify a value with ISldWorks::OpenDoc6 , set swOpenDocOptions_OverrideDefaultLoadLightweight. If set, then you can set swOpenDocOptions_LoadLightweight to open an assembly document as lightweight |
| `swOpenDocOptions_LoadModel` | 16 | or 0x10 = Load Detached model upon opening document (drawings only) |
| `swOpenDocOptions_OpenDetailingMode` | 1024 | or 0x400 = Open document in detailing mode |
| `swOpenDocOptions_OverrideDefaultLoadLightweight` | 64 | or 0x40 = Override default setting whether to open an assembly document as lightweight |
| `swOpenDocOptions_RapidDraft` | 8 | or 0x8 = Convert document to Detached format (drawings only) |
| `swOpenDocOptions_ReadOnly` | 2 | or 0x2 = Open document read only |
| `swOpenDocOptions_Silent` | 1 | or 0x1 = Open document silently |
| `swOpenDocOptions_SpeedPak` | 4096 | or 0x1000 = Open document using the SpeedPak option |
| `swOpenDocOptions_ViewOnly` | 4 | or 0x4 = Open document in Large Design Review mode (assemblies only) |