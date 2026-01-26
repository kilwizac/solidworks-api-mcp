---
type: method
interface: ISketch
member: GetContourEdgeCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketch.GetContourEdges
keywords:
  - sketch
  - see
  - also
  - isketch
  - edges
  - edge
  - iedge
  - getcontouredgecount
  - contour
  - count
  - int32
---

# ISketch.GetContourEdgeCount

Gets the number of edges for this sketch contour.

## Signature

```csharp
System.Int32 GetContourEdgeCount()
```
## Parameters

None.

## Return Value

Number of edges

## Remarks

If the sketch contour is not closed or contains interior non-construction elements, this method returns 0.
Call this method before calling
ISketch::IGetContourEdges
to get the size of the array for that method.

## See Also

- `ISketch.GetContourEdges`