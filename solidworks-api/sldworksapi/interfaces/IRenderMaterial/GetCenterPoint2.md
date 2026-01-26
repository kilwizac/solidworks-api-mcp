---
type: method
interface: IRenderMaterial
member: GetCenterPoint2
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
  - IRenderMaterial.SetCenterPoint2
keywords:
  - getcenterpoint2
  - irendermaterial
  - render
  - material
  - center
  - point2
  - pt
  - double
  - void
---

# IRenderMaterial.GetCenterPoint2

Gets the center point of the mapping for texture-based appearances.

## Signature

```csharp
void GetCenterPoint2( 
   out System.Double
CenterPt_X
,
   out System.Double
CenterPt_Y
,
   out System.Double
CenterPt_Z
)
```
## Parameters

- `CenterPt_X` (System.Double): X coordinate of the center point
- `CenterPt_Y` (System.Double): Y coordinate of the center point
- `CenterPt_Z` (System.Double): Z coordinate of the center point

## Return Value

Unknown.

## Examples

- IRenderMaterial (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRenderMaterial)

## See Also

- `IRenderMaterial.SetCenterPoint2`