---
type: property
interface: IRenderMaterial
member: HoleMeshSize
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - holemeshsize
  - irendermaterial
  - render
  - material
  - hole
  - mesh
  - size
  - double
readonly: null
---

# IRenderMaterial.HoleMeshSize

Gets or sets the hole mesh size.

## Signature

```csharp
System.Double HoleMeshSize {get; set;}
```
## Parameters

None.

## Return Value

Hole mesh size

## Remarks

This property is valid only if
IRenderMaterial::SurfaceFinishShaderType
is set to:
swAppearanceSurfaceFinishShaderTypes_e
.swAppearanceSurfaceFinishShaderType_DiamondHoleMesh
- or -
swAppearanceSurfaceFinishShaderTypes_e.swAppearanceSurfaceFinishShaderType_CircularHoleMesh.