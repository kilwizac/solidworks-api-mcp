---
type: method
interface: IRenderMaterial
member: SetCenterPoint2
returns: void
parameters:
  -
    name: CenterPt_X
    type: System.Double
    description: X coordinate of the center point
  -
    name: CenterPt_Y
    type: System.Double
    description: Y coordinate of the center point
  -
    name: CenterPt_Z
    type: System.Double
    description: Z coordinate of the center point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IRenderMaterial.GetCenterPoint2
keywords:
  - setcenterpoint2
  - irendermaterial
  - render
  - material
  - center
  - point2
  - pt
  - double
  - void
---

# IRenderMaterial.SetCenterPoint2

Sets the center point of the mapping for texture-based appearances.

## Signature

```csharp
void SetCenterPoint2( 
   System.Double
CenterPt_X
,
   System.Double
CenterPt_Y
,
   System.Double
CenterPt_Z
)
```
## Parameters

- `CenterPt_X` (System.Double): X coordinate of the center point
- `CenterPt_Y` (System.Double): Y coordinate of the center point
- `CenterPt_Z` (System.Double): Z coordinate of the center point

## Return Value

Unknown.

## Remarks

This method is required to properly position a texture-based appearance (e.g., if you need a specific corner of a face to have the black square of a checkered-pattern appearance).

## See Also

- `IRenderMaterial.GetCenterPoint2`