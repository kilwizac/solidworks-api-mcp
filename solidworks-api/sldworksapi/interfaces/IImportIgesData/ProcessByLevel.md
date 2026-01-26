---
type: property
interface: IImportIgesData
member: ProcessByLevel
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportIgesData.IncludeAllLevels
  - IImportIgesData.IncludeOnlyLevels
  - IImportIgesData.IncludeSurfaces
  - IImportIgesData.SetLevels
keywords:
  - processbylevel
  - iimportigesdata
  - import
  - iges
  - data
  - process
  - level
  - boolean
  - specify
  - levels
  - values
  - file
  - vb
  - net
  - vba
readonly: null
---

# IImportIgesData.ProcessByLevel

Gets or sets whether to process surfaces together.

## Signature

```csharp
System.Boolean ProcessByLevel {get; set;}
```
## Parameters

None.

## Return Value

True to process surfaces on the same IGES level together in their own folder in the FeatureManager design tree, false to process surfaces to level 0 and not put them in their own folder in the FeatureManager design tree

## Examples

- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)

## See Also

- `IImportIgesData.IncludeAllLevels`
- `IImportIgesData.IncludeOnlyLevels`
- `IImportIgesData.IncludeSurfaces`
- `IImportIgesData.SetLevels`