---
type: method
interface: ITablePatternFeatureData
member: ISetPointArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of seed features for the table-driven pattern feature
  -
    name: ArrayDataIn
    type: System.Double
    description: in-process, unmanaged C++: Pointer to an array of points that describe the x, y, and z locations of the repeating elements in the table-driven pattern VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ITablePatternFeatureData.GetPointCount
  - ITablePatternFeatureData.IGetPointArray
  - ITablePatternFeatureData.PointArray
keywords:
  - isetpointarray
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - point
  - array
  - feat
  - count
  - int32
  - double
  - void
---

# ITablePatternFeatureData.ISetPointArray

Sets the points that describe the x, y, and z locations of the repeating elements in the table-driven pattern feature.

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

- `FeatCount` (System.Int32): Number of seed features for the table-driven pattern feature
- `ArrayDataIn` (System.Double): in-process, unmanaged C++: Pointer to an array of points that describe the x, y, and z locations of the repeating elements in the table-driven pattern VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

The array of doubles, which describe the x, y, and z locations, is the number of repeating elements * 3:
[
point1x, point1y, point1z, point2x, point2y, point2z, ...
]
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ITablePatternFeatureData.GetPointCount`
- `ITablePatternFeatureData.IGetPointArray`
- `ITablePatternFeatureData.PointArray`