---
type: enum
name: sw3DInterconnectImportErrors_e
description: 3D Interconnect import errors.
member_count: 7
docset: swconst
categories:
  - constants
used_by: []
---

# sw3DInterconnectImportErrors_e

3D Interconnect import errors.

## Values

| Member | Value | Description |
|---|---|---|
| `sw3DInterconnectImportErrors_AssemblyNotSaved` | 3 |  |
| `sw3DInterconnectImportErrors_BreakLinkUnavailable` | 4 | = Break link is not available for the selected 3D Interconnect feature; break link is only available for top-level assemblies |
| `sw3DInterconnectImportErrors_Disabled` | 1 | = 3D Interconnect is not enabled; to enable set Tools > Options > System Options > Import > Enable 3D Interconnect or call calling ISldWorks::SetUserPreferenceToggle ( swUserPreferenceToggle_e .swMultiCAD_Enable3DInterconnect, True) |
| `sw3DInterconnectImportErrors_IncompatibleType` | 2 | = Specified file type is not correct |
| `sw3DInterconnectImportErrors_None` | 0 |  |
| `sw3DInterconnectImportErrors_ParametersUnavailable` | 5 | = Only top-level 3D Interconnect features can be edited |
| `sw3DInterconnectImportErrors_TransferOptionNeeded` | 6 | = One or more import options need to be specified for this import |