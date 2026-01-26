---
type: method
interface: IRenderMaterial
member: GetVDirection2
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
  - IRenderMaterial.SetUDirection2
  - IRenderMaterial.SetVDirection2
keywords:
  - getvdirection2
  - irendermaterial
  - render
  - material
  - direction2
  - dir
  - double
  - void
---

# IRenderMaterial.GetVDirection2

Gets the V direction of the texture-based appearance.

## Signature

```csharp
void GetVDirection2( 
   out System.Double
VDir_X
,
   out System.Double
VDir_Y
,
   out System.Double
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

The
mapping type
(surface, projection, automatic, etc.) indirectly determines the V direction. This vector is perpendicular to the U direction.
Call
IRenderMaterial::GetUDirection2
to get the U direction of the appearance.

## Examples

- IRenderMaterial (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial)

## See Also

- `IRenderMaterial.SetUDirection2`
- `IRenderMaterial.SetVDirection2`