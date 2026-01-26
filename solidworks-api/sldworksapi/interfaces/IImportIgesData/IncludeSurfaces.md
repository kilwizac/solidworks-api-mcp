---
type: property
interface: IImportIgesData
member: IncludeSurfaces
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportIgesData.ProcessByLevel
keywords:
  - includesurfaces
  - iimportigesdata
  - import
  - iges
  - data
  - include
  - surfaces
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

# IImportIgesData.IncludeSurfaces

Gets or sets whether to import surfaces.

## Signature

```csharp
System.Boolean IncludeSurfaces {get; set;}
```
## Parameters

None.

## Return Value

True to import surfaces, false to not

## Remarks

To import curves, use
IImportIgesData::IncludeCurves
and
IImportIgesData::CurvesAsSketches
.

## Examples

- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)

## See Also

- `IImportIgesData.ProcessByLevel`