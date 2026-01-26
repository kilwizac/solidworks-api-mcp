---
type: property
interface: IRenderMaterial
member: Translucency
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - translucency
  - irendermaterial
  - render
  - material
  - double
readonly: null
---

# IRenderMaterial.Translucency

Gets or sets the degree to which the material is able to filter and diffuse light for illuminating the appearance.

## Signature

```csharp
System.Double Translucency {get; set;}
```
## Parameters

None.

## Return Value

Degree to which the material is able to filter and diffuse light

## Remarks

Increasing Translucency gives the material more backlighting.
A light must be behind the model relative to the position of the viewer.