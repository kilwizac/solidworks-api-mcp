---
type: method
interface: ISketchText
member: GetEdges2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related:
  - ISketchText.EnumEdges
keywords:
  - getedges2
  - isketchtext
  - sketch
  - text
  - edges2
  - object
---

# ISketchText.GetEdges2

Gets the edges for this sketch text.

## Signature

```csharp
System.Object GetEdges2()
```
## Parameters

None.

## Return Value

Array of edges

## Remarks

The difference between this method and the now obsolete ISketchText::GetEdges is this method also gets the edges of sketch text rendered with "stick" or single line fonts such as OLF SimpleSansOC.
The edges returned by this method are transient and should be regarded as read only. They can be used to obtain the underlying
ICurve
objects, but should not be used for manipulation or to obtain any other objects. These pointers should not be saved; if they are needed again, they should be obtained at that time.

## See Also

- `ISketchText.EnumEdges`