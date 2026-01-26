---
type: property
interface: ISketchSegment
member: Layer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchSegment.Color
  - ISketchSegment.LayerOverride
  - ISketchSegment.Style
  - ISketchSegment.Width
keywords:
  - layer
  - isketchsegment
  - sketch
  - segment
  - string
readonly: null
---

# ISketchSegment.Layer

gets or sets the layer used by this sketch segment.

## Signature

```csharp
System.String Layer {get; set;}
```
## Parameters

None.

## Return Value

Name of the layer used for this sketch segment

## Remarks

Layers are only supported in drawing documents.
Sketch segments can be created on a specific layer. This property gets or sets the layer used by this sketch segment.
The return value may be an empty string because an old document may not contain layers. This also occurs if sketch segments have been generated in a new document that has no layers defined.

## See Also

- `ISketchSegment.Color`
- `ISketchSegment.LayerOverride`
- `ISketchSegment.Style`
- `ISketchSegment.Width`