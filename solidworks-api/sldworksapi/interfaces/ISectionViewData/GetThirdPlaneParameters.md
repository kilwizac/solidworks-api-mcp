---
type: method
interface: ISectionViewData
member: GetThirdPlaneParameters
returns: void
parameters:
  -
    name: PlaneCenter
    type: MathPoint
    description: Plane center point
  -
    name: PlaneVector
    type: MathVector
    description: Plane normal vector
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related:
  - ISectionViewData.FirstPlane
  - ISectionViewData.GetFirstPlaneParameters
  - ISectionViewData.GetSecondPlaneParameters
  - ISectionViewData.SecondPlane
  - ISectionViewData.ThirdPlane
keywords:
  - getthirdplaneparameters
  - isectionviewdata
  - section
  - view
  - data
  - third
  - plane
  - parameters
  - center
  - math
  - point
  - vector
  - void
---

# ISectionViewData.GetThirdPlaneParameters

Gets the third transformed plane's parameters for this section view.

## Signature

```csharp
void GetThirdPlaneParameters( 
   out MathPoint
PlaneCenter
,
   out MathVector
PlaneVector
)
```
## Parameters

- `PlaneCenter` (MathPoint): Plane center point
- `PlaneVector` (MathVector): Plane normal vector

## Return Value

Unknown.

## See Also

- `ISectionViewData.FirstPlane`
- `ISectionViewData.GetFirstPlaneParameters`
- `ISectionViewData.GetSecondPlaneParameters`
- `ISectionViewData.SecondPlane`
- `ISectionViewData.ThirdPlane`