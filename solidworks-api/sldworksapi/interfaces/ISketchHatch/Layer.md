---
type: property
interface: ISketchHatch
member: Layer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchHatch.LayerOverride
keywords:
  - layer
  - isketchhatch
  - sketch
  - hatch
  - string
readonly: null
---

# ISketchHatch.Layer

Gets or sets the layer used by this sketch hatch.

## Signature

```csharp
System.String Layer {get; set;}
```
## Parameters

None.

## Return Value

Name of the layer for this sketch hatch

## Remarks

In drawing documents, sketch hatches can be created on a specific layer. Only drawing documents support layers.
The return value can be an empty string because an old document may not contain layers. This can also occur if sketch hatches have been generated in a new document
in which layers have not been defined.

## Examples

- ISketchHatch (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchHatch)

## See Also

- `ISketchHatch.LayerOverride`