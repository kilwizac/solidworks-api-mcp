---
type: method
interface: IRenderMaterial
member: GetUDirection
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
  - IRenderMaterial.SetUDirection
  - IRenderMaterial.SetVDirection
keywords:
  - getudirection
  - irendermaterial
  - render
  - material
  - direction
  - dir
  - double
  - void
---

# IRenderMaterial.GetUDirection

Obsolete. Superseded by IRenderMaterial::GetUDirection2.

## Signature

```csharp
void GetUDirection( 
   out System.Double
UDir
)
```
## Parameters

- `UDir` (System.Double): Array of doubles representing the U direction for the texture-based appearance (see Remarks )

## Return Value

Unknown.

## Remarks

Call
IRenderMaterial::GetVDirection
to get the V direction of the appearance.

## See Also

- `IRenderMaterial.SetUDirection`
- `IRenderMaterial.SetVDirection`