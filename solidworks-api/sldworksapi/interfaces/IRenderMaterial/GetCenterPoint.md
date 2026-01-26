---
type: method
interface: IRenderMaterial
member: GetCenterPoint
returns: void
parameters:
  -
    name: CenterPt
    type: System.Double
    description: Array of doubles (x, y, z) representing the centerpoint of the mapping for texture-based appearances
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.SetCenterPoint
keywords:
  - getcenterpoint
  - irendermaterial
  - render
  - material
  - center
  - point
  - pt
  - double
  - void
---

# IRenderMaterial.GetCenterPoint

Obsolete. Superseded by IRenderMaterial::GetCenterPoint2.

## Signature

```csharp
void GetCenterPoint( 
   out System.Double
CenterPt
)
```
## Parameters

- `CenterPt` (System.Double): Array of doubles (x, y, z) representing the centerpoint of the mapping for texture-based appearances

## Return Value

Array of doubles (x, y, z) representing the centerpoint of the mapping for texture-based appearances

## See Also

- `IRenderMaterial.SetCenterPoint`