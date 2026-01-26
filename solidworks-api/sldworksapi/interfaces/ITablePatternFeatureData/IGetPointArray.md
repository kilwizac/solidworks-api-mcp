---
type: method
interface: ITablePatternFeatureData
member: IGetPointArray
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ITablePatternFeatureData.ISetPointArray
  - ITablePatternFeatureData.PointArray
keywords:
  - igetpointarray
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - point
  - array
  - double
---

# ITablePatternFeatureData.IGetPointArray

Gets an array of doubles that describe the x, y, and z locations of the repeating elements in this table-driven pattern feature.

## Signature

```csharp
System.Double IGetPointArray()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles that describe the x, y, and z locations of the repeating elements in this table-driven pattern feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The points returned are based on the table-driven pattern's coordinate system.
The array of doubles, which describe the x, y, and z locations, is the number of repeating elements * 3:
[
point1x, point1y, point1z, point2x, point2y, point2z, ...
]
To get the number of points, call
ITablePatternFeatureData::GetPointCount
.

## See Also

- `ITablePatternFeatureData.ISetPointArray`
- `ITablePatternFeatureData.PointArray`