---
type: method
interface: IRenderMaterial
member: SetVDirection
returns: void
parameters:
  -
    name: VDir
    type: System.Double
    description: Array of doubles representing the V direction of the texture-based appearance (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.GetUDirection
  - IRenderMaterial.GetVDirection
keywords:
  - setvdirection
  - irendermaterial
  - render
  - material
  - direction
  - dir
  - double
  - void
---

# IRenderMaterial.SetVDirection

Obsolete. Superseded by IRenderMaterial::SetVDirection2.

## Signature

```csharp
void SetVDirection( 
   ref System.Double
VDir
)
```
## Parameters

- `VDir` (System.Double): Array of doubles representing the V direction of the texture-based appearance (see Remarks )

## Return Value

Unknown.

## Remarks

To specify the V direction in the Y direction, set VDir to {0,1,0}.
The
mapping type
(surface, projection, automatic, etc.) indirectly determines the V direction. This vector is perpendicular to the U direction.
Call
IRenderMaterial::SetUDirection
to set the U direction.

## See Also

- `IRenderMaterial.GetUDirection`
- `IRenderMaterial.GetVDirection`