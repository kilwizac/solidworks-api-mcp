---
type: method
interface: IRenderMaterial
member: GetUDirection2
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
  - IRenderMaterial.SetUDirection2
  - IRenderMaterial.SetVDirection2
keywords:
  - getudirection2
  - irendermaterial
  - render
  - material
  - direction2
  - dir
  - double
  - void
---

# IRenderMaterial.GetUDirection2

Gets the U direction of the texture-based appearance.

## Signature

```csharp
void GetUDirection2( 
   out System.Double
UDir_X
,
   out System.Double
UDir_Y
,
   out System.Double
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

Call
IRenderMaterial::GetVDirection2
to get the V direction of the appearance.

## Examples

- IRenderMaterial (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial)

## See Also

- `IRenderMaterial.SetUDirection2`
- `IRenderMaterial.SetVDirection2`