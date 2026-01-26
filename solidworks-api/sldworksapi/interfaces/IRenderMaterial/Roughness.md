---
type: property
interface: IRenderMaterial
member: Roughness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - roughness
  - irendermaterial
  - render
  - material
  - double
readonly: null
---

# IRenderMaterial.Roughness

Gets or sets the specular spread (roughness) of the appearance.

## Signature

```csharp
System.Double Roughness {get; set;}
```
## Parameters

None.

## Return Value

Specular spread

## Remarks

This property controls the size of any highlights on a surface. It is also known as the specular exponent. Increasing Roughness makes highlights larger and softer.
The
specular
value must not be zero, the
specular color
must not be black, and at least one light other than an ambient light must be illuminating the model.