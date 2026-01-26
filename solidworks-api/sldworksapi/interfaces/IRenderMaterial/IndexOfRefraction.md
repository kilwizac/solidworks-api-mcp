---
type: property
interface: IRenderMaterial
member: IndexOfRefraction
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - indexofrefraction
  - irendermaterial
  - render
  - material
  - index
  - refraction
  - double
readonly: null
---

# IRenderMaterial.IndexOfRefraction

Gets or sets the index of refraction for illuminating this appearance.

## Signature

```csharp
System.Double IndexOfRefraction {get; set;}
```
## Parameters

None.

## Return Value

Index of refraction

## Remarks

This property controls the bending of light as it passes through a transparent object. Although actually dependent on the ratio of indices between the transparent material entered and the material exited, in practice, the higher the index of refraction, the more the light is bent. Typical values are 1.0 for air, 1.33 for water, and 1.44 for glass.