---
type: property
interface: IRenderMaterial
member: AnisotropicCylinderDistance
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - anisotropiccylinderdistance
  - irendermaterial
  - render
  - material
  - anisotropic
  - cylinder
  - distance
  - double
readonly: null
---

# IRenderMaterial.AnisotropicCylinderDistance

Gets or sets the anisotropic cylinder distance for illuminating this appearance.

## Signature

```csharp
System.Double AnisotropicCylinderDistance {get; set;}
```
## Parameters

None.

## Return Value

Anisotropic cylinder distance

## Remarks

The anisotropic reflection is modeled by laying (virtual) cylinders along the surface. This property controls the distance between the cylinders. For stronger anisotropic effect, increase the cylinder distance.