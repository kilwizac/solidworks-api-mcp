---
type: method
interface: IRenderMaterial
member: SetUDirection2
returns: void
parameters:
  -
    name: UDir_X
    type: System.Double
    description: X coordinate of the U direction
  -
    name: UDir_Y
    type: System.Double
    description: Y coordinate of the U direction
  -
    name: UDir_Z
    type: System.Double
    description: Z coordinate of the U direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.GetUDirection2
  - IRenderMaterial.GetVDirection2
keywords:
  - setudirection2
  - irendermaterial
  - render
  - material
  - direction2
  - dir
  - double
  - void
---

# IRenderMaterial.SetUDirection2

Sets the U direction of the texture-based appearance.

## Signature

```csharp
void SetUDirection2( 
   System.Double
UDir_X
,
   System.Double
UDir_Y
,
   System.Double
UDir_Z
)
```
## Parameters

- `UDir_X` (System.Double): X coordinate of the U direction
- `UDir_Y` (System.Double): Y coordinate of the U direction
- `UDir_Z` (System.Double): Z coordinate of the U direction

## Return Value

Unknown.

## Remarks

To specify the U direction in the X direction, set:
UDir_X to 1.0.
UDir_Y to 0.0.
UDir_Z to 0.0.
Call
IRenderMaterial::SetVDirection2
to set the V direction of the appearance.

## See Also

- `IRenderMaterial.GetUDirection2`
- `IRenderMaterial.GetVDirection2`