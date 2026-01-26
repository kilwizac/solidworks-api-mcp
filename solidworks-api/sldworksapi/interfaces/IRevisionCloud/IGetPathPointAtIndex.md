---
type: method
interface: IRevisionCloud
member: IGetPathPointAtIndex
returns: System.Double
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
  - IRevisionCloud.GetPathPointAtIndex
  - IRevisionCloud.SetPathPointAtIndex
keywords:
  - igetpathpointatindex
  - irevisioncloud
  - revision
  - cloud
  - path
  - point
  - index
  - int32
  - double
---

# IRevisionCloud.IGetPathPointAtIndex

Gets the coordinates of a point with the specified index on the path of this revision cloud annotation.

## Signature

```csharp
System.Double IGetPathPointAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of a point on the path of this revision cloud annotation (see Remarks )

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles of x, y, and z coordinates of a point on the path of this revision cloud annotation VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

To get the range of values for Index, call
IRevisionCloud::GetPathPointCount
to get the total number of points on the path of this revision cloud annotation.

## See Also

- `IRevisionCloud.GetPathPointAtIndex`
- `IRevisionCloud.SetPathPointAtIndex`