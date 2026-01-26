---
type: property
interface: IRenderMaterial
member: KnurlHeightCap
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - knurlheightcap
  - irendermaterial
  - render
  - material
  - knurl
  - height
  - cap
  - double
readonly: null
---

# IRenderMaterial.KnurlHeightCap

Gets or sets the maximum knurl height of this appearance.

## Signature

```csharp
System.Double KnurlHeightCap {get; set;}
```
## Parameters

None.

## Return Value

Knurl height cap

## Remarks

This property is valid only if
IRenderMaterial::SurfaceFinishShaderType
is set to
swAppearanceSurfaceFinishShaderTypes_e
.swAppearanceSurfaceFinishShaderType_Knurled.