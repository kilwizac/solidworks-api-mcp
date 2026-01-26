---
type: method
interface: ISketchText
member: EnumEdges
returns: EnumEdges
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketchText.GetEdges
keywords:
  - enumedges
  - isketchtext
  - sketch
  - text
  - edges
---

# ISketchText.EnumEdges

Gets the edges in this sketch text.

## Signature

```csharp
EnumEdges EnumEdges()
```
## Parameters

None.

## Return Value

Edges enumeration

## Remarks

The edges returned by this method are transient and should be regarded as read only. They can be used to obtain the underlying
ICurve
objects, but should not be used for manipulation or to obtain any other objects through them. These pointers should not be saved; if they are needed again, they should be obtained at that time.

## See Also

- `ISketchText.GetEdges`