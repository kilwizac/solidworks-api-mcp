---
type: property
interface: IImportIgesData
member: IncludeCurves
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related: []
keywords:
  - includecurves
  - iimportigesdata
  - import
  - iges
  - data
  - include
  - curves
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

# IImportIgesData.IncludeCurves

Gets or sets whether or not to import curves.

## Signature

```csharp
System.Boolean IncludeCurves {get; set;}
```
## Parameters

None.

## Return Value

True to import curves, false to not

## Remarks

If this property is True, then you can use
IImportIgesData::CurvesAsSketches
to specify whether to import curves as sketches or as reference curve features.
Use
IImportIgesData::IncludeSurfaces
to indicate whether or not to import surfaces.

## Examples

- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)