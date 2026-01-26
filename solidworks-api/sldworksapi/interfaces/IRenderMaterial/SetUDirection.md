---
type: method
interface: IRenderMaterial
member: SetUDirection
returns: void
parameters:
  -
    name: UDir
    type: System.Double
    description: Array of doubles representing the U direction for the texture-based appearance (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.GetUDirection
  - IRenderMaterial.GetVDirection
keywords:
  - setudirection
  - irendermaterial
  - render
  - material
  - direction
  - dir
  - double
  - void
---

# IRenderMaterial.SetUDirection

Obsolete. Superseded by IRenderMaterial::SetUDirection2.

## Signature

```csharp
void SetUDirection( 
   ref System.Double
UDir
)
```
## Parameters

- `UDir` (System.Double): Array of doubles representing the U direction for the texture-based appearance (see Remarks )

## Return Value

Unknown.

## Remarks

To specify the U direction in the X direction, set UDir to {1, 0, 0}.
Call
IRenderMaterial::SetVDirection
to set the V direction of the appearance.

## See Also

- `IRenderMaterial.GetUDirection`
- `IRenderMaterial.GetVDirection`