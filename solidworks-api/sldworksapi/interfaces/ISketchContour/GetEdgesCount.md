---
type: method
interface: ISketchContour
member: GetEdgesCount
returns: System.Int32
parameters: []
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
  - getedgescount
  - isketchcontour
  - contour
  - edges
  - count
  - int32
---

# ISketchContour.GetEdgesCount

Gets the number of edges in this sketch contour.

## Signature

```csharp
System.Int32 GetEdgesCount()
```
## Parameters

None.

## Return Value

Number of edges

## Remarks

Call this method before calling
ISketchContour::IGetEdges
to get the size of the array for that method.

## See Also

- `ISketchContour.GetEdges`