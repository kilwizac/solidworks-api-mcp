---
type: method
interface: IFreePointCurveFeatureData
member: ISetPointArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of features
  -
    name: ArrayDataIn
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of doubles containing 3 * points (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - isetpointarray
  - ifreepointcurvefeaturedata
  - free
  - point
  - curve
  - feature
  - data
  - array
  - feat
  - count
  - int32
  - double
  - void
---

# IFreePointCurveFeatureData.ISetPointArray

Sets the list of X, Y, Z coordinates for the points for this free-point curve.

## Signature

```csharp
void ISetPointArray( 
   System.Int32
FeatCount
,
   ref System.Double
ArrayDataIn
)
```
## Parameters

- `FeatCount` (System.Int32): Number of features
- `ArrayDataIn` (System.Double): in-process, unmanaged C++: Pointer to an array of doubles containing 3 * points (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The ArrayDataIn argument is an array of doubles containing 3 * points:
[
x1, y1, z1, x2, y2, z2, ...
]
See
Accessing Selections that Define Features
for additional details on using this method.