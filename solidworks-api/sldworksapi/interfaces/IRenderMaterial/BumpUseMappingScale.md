---
type: property
interface: IRenderMaterial
member: BumpUseMappingScale
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - bumpusemappingscale
  - irendermaterial
  - render
  - material
  - bump
  - use
  - mapping
  - scale
  - boolean
readonly: null
---

# IRenderMaterial.BumpUseMappingScale

Gets or sets whether to use the material's scale and mapping for the surface finish of this appearance.

## Signature

```csharp
System.Boolean BumpUseMappingScale {get; set;}
```
## Parameters

None.

## Return Value

True to use the material's scale and mapping, false to not

## Remarks

If BumpUseMappingScale is set to FALSE, then specify the
scale
and mapping for this surface finish for this appearance.