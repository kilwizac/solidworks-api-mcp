---
type: method
interface: IRenderMaterial
member: SetVDirection2
returns: void
parameters:
  -
    name: VDir_X
    type: System.Double
    description: X coordinate of the V direction
  -
    name: VDir_Y
    type: System.Double
    description: Y coordinate of the V direction
  -
    name: VDir_Z
    type: System.Double
    description: Z coordinate of the V direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.GetUDirection2
  - IRenderMaterial.GetVDirection2
keywords:
  - setvdirection2
  - irendermaterial
  - render
  - material
  - direction2
  - dir
  - double
  - void
---

# IRenderMaterial.SetVDirection2

Sets the V direction of the texture-based appearance.

## Signature

```csharp
void SetVDirection2( 
   System.Double
VDir_X
,
   System.Double
VDir_Y
,
   System.Double
VDir_Z
)
```
## Parameters

- `VDir_X` (System.Double): X coordinate of the V direction
- `VDir_Y` (System.Double): Y coordinate of the V direction
- `VDir_Z` (System.Double): Z coordinate of the V direction

## Return Value

Unknown.

## Remarks

To specify the V direction in the Y direction, set:
VDir_X to 0.0.
VDir_Y to 1.0.
VDir_Z to 0.0.
The
mapping type
(surface, projection, automatic, etc.) indirectly determines the V direction. This vector is perpendicular to the U direction.
Call
IRenderMaterial::SetUDirection2
to set the U direction.

## See Also

- `IRenderMaterial.GetUDirection2`
- `IRenderMaterial.GetVDirection2`