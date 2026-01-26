---
type: method
interface: ISketchText
member: GetEdges
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketchText.EnumEdges
keywords:
  - getedges
  - isketchtext
  - sketch
  - text
  - edges
  - object
---

# ISketchText.GetEdges

Obsolete. Superseded by ISketchText::GetEdges2.

## Signature

```csharp
System.Object GetEdges()
```
## Parameters

None.

## Return Value

Array of edges

## Remarks

The edges returned by this method are transient and should be regarded as read only. They can be used to obtain the underlying
ICurve
objects, but should not be used for manipulation or to obtain any other objects through them. These pointers should not be saved; if they are needed again, they should be obtained at that time.

## See Also

- `ISketchText.EnumEdges`