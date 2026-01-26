---
type: method
interface: ISectionViewData
member: GetFirstPlaneParameters
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
  - ISectionViewData.GetSecondPlaneParameters
  - ISectionViewData.GetThirdPlaneParameters
  - ISectionViewData.SecondPlane
  - ISectionViewData.ThirdPlane
keywords:
  - getfirstplaneparameters
  - isectionviewdata
  - section
  - view
  - data
  - first
  - plane
  - parameters
  - center
  - math
  - point
  - vector
  - void
---

# ISectionViewData.GetFirstPlaneParameters

Gets the first transformed plane's parameters for this section view.

## Signature

```csharp
void GetFirstPlaneParameters( 
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
- `ISectionViewData.GetSecondPlaneParameters`
- `ISectionViewData.GetThirdPlaneParameters`
- `ISectionViewData.SecondPlane`
- `ISectionViewData.ThirdPlane`