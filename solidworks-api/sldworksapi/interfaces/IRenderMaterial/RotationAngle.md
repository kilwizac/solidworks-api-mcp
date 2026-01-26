---
type: property
interface: IRenderMaterial
member: RotationAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - rotationangle
  - irendermaterial
  - render
  - material
  - rotation
  - angle
  - double
readonly: null
---

# IRenderMaterial.RotationAngle

Gets or sets the angle by which to rotate the texture relative to the axes for mapping this appearance.

## Signature

```csharp
System.Double RotationAngle {get; set;}
```
## Parameters

None.

## Return Value

Angle by which to rotate the texture relative to the axes

## Remarks

This property is only valid when either a spherical or cylindrical
mapping type
is selected.