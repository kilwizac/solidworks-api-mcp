---
type: property
interface: IRenderMaterial
member: Direction2RotationAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - direction2rotationangle
  - irendermaterial
  - render
  - material
  - direction2
  - rotation
  - angle
  - double
readonly: null
---

# IRenderMaterial.Direction2RotationAngle

Gets or sets the angle at which to rotate the texture relative to the vertical axis for mapping this appearance.

## Signature

```csharp
System.Double Direction2RotationAngle {get; set;}
```
## Parameters

None.

## Return Value

Angle at which to rotate the texture relative to the vertical axis

## Remarks

This property affects spheres only.
Call
IRenderMaterial::Direction1RotationAngle
to get or set the angle to rotate the texture to the horizontal axis.