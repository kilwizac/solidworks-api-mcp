---
type: property
interface: IFreePointCurveFeatureData
member: PointArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - pointarray
  - ifreepointcurvefeaturedata
  - free
  - point
  - curve
  - feature
  - data
  - array
  - object
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IFreePointCurveFeatureData.PointArray

Gets or sets the list of X, Y, Z coordinates for the points for this free-point curve.

## Signature

```csharp
System.Object PointArray {get; set;}
```
## Parameters

None.

## Return Value

Array of doubles containing 3 * points (see Remarks )

## Remarks

The ArrayDataIn argument is an array of doubles containing 3 * points:
[
x1, y1, z1, x2, y2, z2, ...
]
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Insert Free Point Curve Feature (C#) (Insert_Free_Point_Curve_Feature_Example_CSharp.htm)
- Insert Free Point Curve Feature (VB.NET) (Insert_Free_Point_Curve_Feature_Example_VBNET.htm)
- Insert Free Point Curve Feature (VBA) (Insert_Free_Point_Curve_Feature_Example_VB.htm)