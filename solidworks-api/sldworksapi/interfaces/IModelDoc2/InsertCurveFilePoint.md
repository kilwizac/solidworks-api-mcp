---
type: method
interface: IModelDoc2
member: InsertCurveFilePoint
returns: System.Boolean
parameters:
  -
    name: X
    type: System.Double
    description: X value for the point
  -
    name: Y
    type: System.Double
    description: Y value for the point
  -
    name: Z
    type: System.Double
    description: Z value for the point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - file-io
  - ui
related:
  - IModelDoc2.InsertCurveFile
keywords:
  - curve
  - see
  - also
  - icurve
  - reference
  - geometry
  - insertcurvefilepoint
  - imodeldoc2
  - model
  - doc2
  - insert
  - file
  - point
  - double
  - boolean
  - free
  - feature
  - vb
  - net
  - vba
---

# IModelDoc2.InsertCurveFilePoint

Creates a point for a curve.

## Signature

```csharp
System.Boolean InsertCurveFilePoint( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `X` (System.Double): X value for the point
- `Y` (System.Double): Y value for the point
- `Z` (System.Double): Z value for the point

## Return Value

True if this call is successful, false if not

## Remarks

This method:
sets a point for a curve.
is called multiple times after
IModelDoc2::InsertCurveFileBegin
and before
IModelDoc2::InsertCurveFileEnd
.
See the examples.

## Examples

- Insert Free Point Curve Feature (C#) (Insert_Free_Point_Curve_Feature_Example_CSharp.htm)
- Insert Free Point Curve Feature (VB.NET) (Insert_Free_Point_Curve_Feature_Example_VBNET.htm)
- Insert Free Point Curve Feature (VBA) (Insert_Free_Point_Curve_Feature_Example_VB.htm)

## See Also

- `IModelDoc2.InsertCurveFile`