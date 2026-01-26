---
type: method
interface: ISketchRegion
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
  - ISketchRegion.GetEdges
keywords:
  - getedgescount
  - isketchregion
  - sketch
  - region
  - edges
  - count
  - int32
---

# ISketchRegion.GetEdgesCount

Gets the number of edges for this sketch region.

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
ISketchRegion::IGetEdges
to get the size of the array for that method.

## See Also

- `ISketchRegion.GetEdges`