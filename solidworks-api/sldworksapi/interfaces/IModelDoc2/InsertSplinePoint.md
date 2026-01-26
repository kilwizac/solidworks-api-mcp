---
type: method
interface: IModelDoc2
member: InsertSplinePoint
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: X coordinate of spline point
  -
    name: Y
    type: System.Double
    description: Y coordinate of spline point
  -
    name: Z
    type: System.Double
    description: Z coordinate of spline point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.CreateSpline
keywords:
  - points
  - spline
  - splines
  - insertsplinepoint
  - imodeldoc2
  - model
  - doc2
  - insert
  - point
  - double
  - void
  - vba
  - vb
  - net
---

# IModelDoc2.InsertSplinePoint

Inserts a spline point.

## Signature

```csharp
void InsertSplinePoint( 
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

- `X` (System.Double): X coordinate of spline point
- `Y` (System.Double): Y coordinate of spline point
- `Z` (System.Double): Z coordinate of spline point

## Return Value

Unknown.

## Examples

- Insert Spline Point (VBA) (Insert_Spline_Point_Example_VB.htm)
- Insert Spline Point (VB.NET) (Insert_Spline_Point_Example_VBNET.htm)
- Insert Spline Point (C#) (Insert_Spline_Point_Example_CSharp.htm)

## See Also

- `IModelDoc2.CreateSpline`