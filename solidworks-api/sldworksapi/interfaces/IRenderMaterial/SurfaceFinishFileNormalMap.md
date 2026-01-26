---
type: property
interface: IRenderMaterial
member: SurfaceFinishFileNormalMap
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
  - ui
related: []
keywords:
  - surfacefinishfilenormalmap
  - irendermaterial
  - render
  - material
  - surface
  - finish
  - file
  - normal
  - map
  - boolean
readonly: null
---

# IRenderMaterial.SurfaceFinishFileNormalMap

Gets or sets whether to map the surface finish file image to the normal.

## Signature

```csharp
System.Boolean SurfaceFinishFileNormalMap {get; set;}
```
## Parameters

None.

## Return Value

True to map the image to the normal, false to not

## Remarks

This property is valid only if
IRenderMaterial::SurfaceFinishShaderType
is set to
swAppearanceSurfaceFinishShaderTypes_e
.swAppearanceSurfaceFinishShaderType_FromFile.