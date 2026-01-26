---
type: method
interface: IRevisionCloud
member: GetPathPointAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of a point on the path of this revision cloud annotation (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionCloud.IGetPathPointAtIndex
  - IRevisionCloud.SetPathPointAtIndex
keywords:
  - getpathpointatindex
  - irevisioncloud
  - revision
  - cloud
  - path
  - point
  - index
  - int32
  - object
---

# IRevisionCloud.GetPathPointAtIndex

Gets the coordinates of a point with the specified index on the path of this revision cloud annotation.

## Signature

```csharp
System.Object GetPathPointAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of a point on the path of this revision cloud annotation (see Remarks )

## Return Value

Array of doubles of the x, y, and z coordinates of a point on the path of this revision cloud annotation

## Remarks

To get the range of values for Index, call
IRevisionCloud::GetPathPointCount
to get the total number of points on the path of this revision cloud annotation.

## See Also

- `IRevisionCloud.IGetPathPointAtIndex`
- `IRevisionCloud.SetPathPointAtIndex`