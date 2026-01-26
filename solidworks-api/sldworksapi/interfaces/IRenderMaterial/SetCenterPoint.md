---
type: method
interface: IRenderMaterial
member: SetCenterPoint
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
  - IRenderMaterial.GetCenterPoint
keywords:
  - setcenterpoint
  - irendermaterial
  - render
  - material
  - center
  - point
  - pt
  - double
  - void
---

# IRenderMaterial.SetCenterPoint

Obsolete. Superseded by IRenderMaterial::SetCenterPoint2.

## Signature

```csharp
void SetCenterPoint( 
   ref System.Double
CenterPt
)
```
## Parameters

- `CenterPt` (System.Double): Array of doubles (x, y, z) representing the centerpoint of the mapping for texture-based appearances

## Return Value

Unknown.

## Remarks

This method is required to properly position a texture-based appearance (e.g., if you need a specific corner of a face to have the black square of a checkered-pattern appearance).

## See Also

- `IRenderMaterial.GetCenterPoint`