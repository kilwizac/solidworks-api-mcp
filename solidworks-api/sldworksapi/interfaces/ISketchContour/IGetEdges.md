---
type: method
interface: ISketchContour
member: IGetEdges
returns: Edge
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of edges
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketchContour.GetEdges
keywords:
  - edge
  - see
  - also
  - iedge
  - sketch
  - contours
  - igetedges
  - isketchcontour
  - contour
  - edges
  - count
  - int32
---

# ISketchContour.IGetEdges

Gets the edges in this sketch contour.

## Signature

```csharp
Edge IGetEdges( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of edges

## Return Value

in-process, unmanaged C++: Pointer to an array of the edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchContour::GetEdgesCount
to get the value for Count.

## See Also

- `ISketchContour.GetEdges`