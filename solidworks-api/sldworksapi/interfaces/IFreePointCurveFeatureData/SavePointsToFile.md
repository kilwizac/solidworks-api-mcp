---
type: method
interface: IFreePointCurveFeatureData
member: SavePointsToFile
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name of the file to which to save the points; you can specify .sldcrv files or .txt as the filename extension
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related: []
keywords:
  - savepointstofile
  - ifreepointcurvefeaturedata
  - free
  - point
  - curve
  - feature
  - data
  - save
  - points
  - file
  - name
  - string
  - boolean
  - insert
  - vb
  - net
  - vba
---

# IFreePointCurveFeatureData.SavePointsToFile

Saves the points for this free-point curve to a file.

## Signature

```csharp
System.Boolean SavePointsToFile( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name of the file to which to save the points; you can specify .sldcrv files or .txt as the filename extension

## Return Value

True if the points are saved to the file, false if not

## Remarks

Exported units, e.g., meters, of the document that owns the feature, and not necessarily those of the active document, are used when data is saved to a file.
See SOLIDWORKS Help for details about free-point curve files.

## Examples

- Insert Free Point Curve Feature (C#) (Insert_Free_Point_Curve_Feature_Example_CSharp.htm)
- Insert Free Point Curve Feature (VB.NET) (Insert_Free_Point_Curve_Feature_Example_VBNET.htm)
- Insert Free Point Curve Feature (VBA) (Insert_Free_Point_Curve_Feature_Example_VB.htm)