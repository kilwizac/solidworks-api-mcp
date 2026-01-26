---
type: method
interface: IRenderMaterial
member: GetVDirection
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
  - IRenderMaterial.SetUDirection
  - IRenderMaterial.SetVDirection
keywords:
  - getvdirection
  - irendermaterial
  - render
  - material
  - direction
  - dir
  - double
  - void
  - mapping
  - type
  - getudirection
---

# IRenderMaterial.GetVDirection

Obsolete. Superseded by IRenderMaterial::GetVDirection2.

## Signature

```csharp
void GetVDirection( 
   out System.Double
VDir
)
```
## Parameters

- `VDir` (System.Double): Array of doubles representing the V direction of the texture-based appearance (see Remarks )

## Return Value

Unknown.

## Examples

- mapping type (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial~MappingType)
- IRenderMaterial::GetUDirection (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial~GetUDirection)

## See Also

- `IRenderMaterial.SetUDirection`
- `IRenderMaterial.SetVDirection`