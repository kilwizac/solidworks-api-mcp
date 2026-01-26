---
type: method
interface: IModelDoc2
member: InsertCurveFile
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and file name containing the point data
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDoc2.InsertCurveFileBegin
  - IModelDoc2.InsertCurveFileEnd
  - IModelDoc2.InsertCurveFilePoint
keywords:
  - curve
  - see
  - also
  - icurve
  - reference
  - geometry
  - insertcurvefile
  - imodeldoc2
  - model
  - doc2
  - insert
  - file
  - name
  - string
  - boolean
---

# IModelDoc2.InsertCurveFile

Creates a curve.

## Signature

```csharp
System.Boolean InsertCurveFile( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and file name containing the point data

## Return Value

True if the curve is created successfully, false if not

## Remarks

The curve goes through the points in the specified file.The points in the specified input file can have the X, Y, Z values separated by commas, spaces, or tabs. There should be one point per line.

## See Also

- `IModelDoc2.InsertCurveFileBegin`
- `IModelDoc2.InsertCurveFileEnd`
- `IModelDoc2.InsertCurveFilePoint`