---
type: property
interface: ITablePatternFeatureData
member: PointArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ITablePatternFeatureData.IGetPointArray
  - ITablePatternFeatureData.ISetPointArray
keywords:
  - pointarray
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - point
  - array
  - object
readonly: null
---

# ITablePatternFeatureData.PointArray

Gets or sets the array of points that describe the x,y, and z locations of the repeating elements in the table-driven pattern feature.

## Signature

```csharp
System.Object PointArray {get; set;}
```
## Parameters

None.

## Return Value

Array of doubles that describe the x, y, and z locations of the repeating elements in the table-driven pattern

## Remarks

The points returned are based on the table-driven pattern's coordinate system.
The array of doubles describe the x, y, and z locations of the repeating elements in the table-driven pattern. The size of the array is the number of repeating elements * 3:
[
point1x, point1y, point1z, point2x, point2y, point2z, ...
]
Use
ITablePatternFeatureData:: GetPointCount
to get the number of points in the array.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ITablePatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITablePatternFeatureData)

## See Also

- `ITablePatternFeatureData.IGetPointArray`
- `ITablePatternFeatureData.ISetPointArray`