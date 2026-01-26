---
type: method
interface: IRevisionCloud
member: SetPathPointAtIndex
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of an existing point on the path of this revision cloud annotation; -1 if creating a new point (see Remarks )
  -
    name: X
    type: System.Double
    description: x coordinate of the point
  -
    name: Y
    type: System.Double
    description: y coordinate of the point
  -
    name: Z
    type: System.Double
    description: z coordinate of the point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IRevisionCloud.GetPathPointAtIndex
  - IRevisionCloud.IGetPathPointAtIndex
keywords:
  - setpathpointatindex
  - irevisioncloud
  - revision
  - cloud
  - path
  - point
  - index
  - int32
  - double
  - boolean
---

# IRevisionCloud.SetPathPointAtIndex

Sets the specified coordinates of a point at the specified index on the path of this revision cloud annotation.

## Signature

```csharp
System.Boolean SetPathPointAtIndex( 
   System.Int32
Index
,
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

- `Index` (System.Int32): Index of an existing point on the path of this revision cloud annotation; -1 if creating a new point (see Remarks )
- `X` (System.Double): x coordinate of the point
- `Y` (System.Double): y coordinate of the point
- `Z` (System.Double): z coordinate of the point

## Return Value

True if successful, false if not

## Remarks

To get the range of values for Index, call
IRevisionCloud::GetPathPointCount
to get the total number of points on the path of this revision cloud annotation.
You can create a new path point by calling this method, setting Index to -1. You can create new path points any time after
IDrawingDoc::InsertRevisionCloud
or
IDrawingDoc::IInsertRevisionCloud
is called. You cannot create new path points after
IRevisionCloud::Finalize
is called.
You can call this method at any time to change the position of existing path points.

## Examples

- IRevisionCloud (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRevisionCloud)

## See Also

- `IRevisionCloud.GetPathPointAtIndex`
- `IRevisionCloud.IGetPathPointAtIndex`