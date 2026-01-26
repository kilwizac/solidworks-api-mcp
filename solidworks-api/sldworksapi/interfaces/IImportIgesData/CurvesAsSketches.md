---
type: property
interface: IImportIgesData
member: CurvesAsSketches
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
  - sketches
related: []
keywords:
  - curvesassketches
  - iimportigesdata
  - import
  - iges
  - data
  - curves
  - sketches
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

# IImportIgesData.CurvesAsSketches

Gets or sets whether the curves are imported as sketches or reference curve features.

## Signature

```csharp
System.Boolean CurvesAsSketches {get; set;}
```
## Parameters

None.

## Return Value

True to import curves as sketches, false to import curves as reference curve features

## Remarks

IImportIgesData::IncludeCurves
must be set to true for this property to have an effect.

## Examples

- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)