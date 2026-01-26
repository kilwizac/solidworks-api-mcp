---
type: property
interface: ISketchPoint
member: Layer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPoint.LayerOverride
keywords:
  - layer
  - isketchpoint
  - sketch
  - point
  - string
readonly: null
---

# ISketchPoint.Layer

Gets or sets the layer for this sketch point.

## Signature

```csharp
System.String Layer {get; set;}
```
## Parameters

None.

## Return Value

Name of the layer for this sketch point

## Remarks

Layers are only supported in drawing documents.
Every sketch point is on a layer. Sketch points can be created on a specific layer in drawings.
The return value may be an empty string because an older document may not contain layers. Also, this can occur if sketch points were generated in a new document that has no layers defined.

## See Also

- `ISketchPoint.LayerOverride`