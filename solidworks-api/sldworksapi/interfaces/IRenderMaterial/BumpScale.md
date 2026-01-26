---
type: property
interface: IRenderMaterial
member: BumpScale
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - bumpscale
  - irendermaterial
  - render
  - material
  - bump
  - scale
  - double
readonly: null
---

# IRenderMaterial.BumpScale

Gets or sets the scale for the surface-finish pattern incidence for this appearance.

## Signature

```csharp
System.Double BumpScale {get; set;}
```
## Parameters

None.

## Return Value

Scale

## Remarks

Scale controls the pattern of surface finish elements. A higher scale decreases the pattern incidence, and a lower scale increases the incidence of pattern elements.
Scale if more pronounced for low
amplitude
values.
Radius
also affects the pattern incidence for dimpled surface finishes.