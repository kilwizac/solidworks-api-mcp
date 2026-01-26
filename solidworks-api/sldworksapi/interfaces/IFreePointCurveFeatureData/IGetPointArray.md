---
type: method
interface: IFreePointCurveFeatureData
member: IGetPointArray
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - igetpointarray
  - ifreepointcurvefeaturedata
  - free
  - point
  - curve
  - feature
  - data
  - array
  - double
---

# IFreePointCurveFeatureData.IGetPointArray

Gets the list of X, Y, Z coordinates for the points for this free-point curve.

## Signature

```csharp
System.Double IGetPointArray()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles containing 3 * points (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The ArrayOut argument is an array of doubles containing 3 * points:
[
x1, y1, z1, x2, y2, z2, ...
]
See
Accessing Selections that Define Features
for additional details on using this method.