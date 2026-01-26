---
type: method
interface: ISketchRegion
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
  - ISketchRegion.GetEdges
keywords:
  - igetedges
  - isketchregion
  - sketch
  - region
  - edges
  - count
  - int32
  - edge
---

# ISketchRegion.IGetEdges

Gets the edges on this sketch region.

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

in-process, unmanaged C++: Pointer to an array of edges VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchRegion::GetEdgesCount
to get the value for Count.

## See Also

- `ISketchRegion.GetEdges`