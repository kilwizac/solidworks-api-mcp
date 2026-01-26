---
type: enum
name: swFileLoadError_e
description: File load errors. Bitmask.
member_count: 25
docset: swconst
categories:
  - constants
used_by: []
---

# swFileLoadError_e

File load errors. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swAddinInteruptError` | 1048576 | or 0x100000: The user attempted to open a file, and then interrupted the open-file routine to open a different file |
| `swApplicationBusy` | 8388608 | or 0x800000: File open is blocked when application is busy |
| `swBasePartNotLoadedWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swConnectedIsOffline` | 16777216 | or 0x1000000 |
| `swDrawingANSIUpdateWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swDrawingSFSymbolConvertWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swDrawingsOnlyRapidDraftWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swFileAlreadyOpenWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swFileCriticalDataRepairError` | 4194304 | or 0x400000 = A document has critical data corruption |
| `swFileNotFoundError` | 2 | or 0x2 = Unable to locate the file; the file is not loaded or the referenced file (that is, component) is suppressed |
| `swFileRequiresRepairError` | 2097152 | or 0x200000 = A document has non-critical custom property data corruption |
| `swFileWithSameTitleAlreadyOpen` | 65536 | or 0x10000 = A document with the same name is already open |
| `swFutureVersion` | 8192 | or 0x2000 = The document was saved in a future version of SOLIDWORKS |
| `swGenericError` | 1 | or 0x1 = Another error was encountered |
| `swIdMatchError` |  | Obsolete; see swFileLoadWarning_e |
| `swInvalidFileTypeError` | 1024 | or 0x400 = File type argument is not valid |
| `swLiquidMachineDoc` | 131072 | or 0x20000 = File encrypted by Liquid Machines |
| `swLowResourcesError` | 262144 | or 0x40000 = File is open and blocked because the system memory is low, or the number of GDI handles has exceeded the allowed maximum |
| `swNeedsRegenWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swNoDisplayData` | 524288 | or 0x80000 = File contains no display data |
| `swReadOnlyWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swSharingViolationWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swSheetScaleUpdateWarn` |  | Obsolete; see swFileLoadWarning_e |
| `swViewMissingReferencedConfig` |  | Obsolete; see swFileLoadWarning_e |
| `swViewOnlyRestrictions` |  | Obsolete; see swFileLoadWarning_e |