---
type: property
interface: IRenderMaterial
member: DimpleSize
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - dimplesize
  - irendermaterial
  - render
  - material
  - dimple
  - size
  - double
readonly: null
---

# IRenderMaterial.DimpleSize

Gets or sets the dimple size.

## Signature

```csharp
System.Double DimpleSize {get; set;}
```
## Parameters

None.

## Return Value

Dimple size

## Remarks

This property is valid only if
IRenderMaterial::SurfaceFinishShaderType
is set to
swAppearanceSurfaceFinishShaderTypes_e
.swAppearanceSurfaceFinishShaderType_Dimpled.