---
type: property
interface: IRenderMaterial
member: KnurlAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - knurlangle
  - irendermaterial
  - render
  - material
  - knurl
  - angle
  - double
readonly: null
---

# IRenderMaterial.KnurlAngle

Gets or sets the knurl angle of this appearance.

## Signature

```csharp
System.Double KnurlAngle {get; set;}
```
## Parameters

None.

## Return Value

Knurl angle

## Remarks

This property is valid only if
IRenderMaterial::SurfaceFinishShaderType
is set to
swAppearanceSurfaceFinishShaderTypes_e
.swAppearanceSurfaceFinishShaderType_Knurled.