---
type: property
interface: IRenderMaterial
member: Direction1RotationAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - direction1rotationangle
  - irendermaterial
  - render
  - material
  - direction1
  - rotation
  - angle
  - double
readonly: null
---

# IRenderMaterial.Direction1RotationAngle

Gets or sets the angle at which to rotate the texture relative to the horizontal axis for mapping this appearance.

## Signature

```csharp
System.Double Direction1RotationAngle {get; set;}
```
## Parameters

None.

## Return Value

Angle at which to rotate the texture to the horizontal axis

## Remarks

This property affects spheres only.
Call
IRenderMaterial::Direction2RotationAngle
to get or set the angle to rotate the texture to the vertical axis.