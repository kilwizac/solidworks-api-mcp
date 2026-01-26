---
type: property
interface: IRenderMaterial
member: Specular
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - specular
  - irendermaterial
  - render
  - material
  - double
readonly: null
---

# IRenderMaterial.Specular

Gets or sets the intensity of the light surface for illuminating the appearance.

## Signature

```csharp
System.Double Specular {get; set;}
```
## Parameters

None.

## Return Value

Intensity of the light surface

## Remarks

This property depends on the position of the light source and the position of the viewer. Increasing Specular makes the material appear shinier.
IRenderMaterial::SpecularColor
must not be black, and at least one light other than an ambient light must be illuminating the model.