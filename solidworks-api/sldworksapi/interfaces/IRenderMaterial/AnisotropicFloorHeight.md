---
type: property
interface: IRenderMaterial
member: AnisotropicFloorHeight
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - anisotropicfloorheight
  - irendermaterial
  - render
  - material
  - anisotropic
  - floor
  - height
  - double
readonly: null
---

# IRenderMaterial.AnisotropicFloorHeight

Gets or sets the anisotropic floor height for illuminating this appearance.

## Signature

```csharp
System.Double AnisotropicFloorHeight {get; set;}
```
## Parameters

None.

## Return Value

Anisotropic floor height

## Remarks

Anisotropic reflection is modeled by laying (virtual) cylinders along the surface. This property controls the height difference between neighboring cylinders. For a stronger anisotropic effect, decease the floor height.