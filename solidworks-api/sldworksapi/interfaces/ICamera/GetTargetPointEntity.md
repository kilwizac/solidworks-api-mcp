---
type: method
interface: ICamera
member: GetTargetPointEntity
returns: System.Object
parameters:
  -
    name: Point
    type: MathPoint
    description: IMathPoint object indicating the target point for the camera
  -
    name: PercentTarget
    type: System.Double
    description: Target point distance along the entity
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICamera.SetTargetPointEntity
  - ICamera.TargetPointBySelection
  - ICamera.TargetPointPosition
keywords:
  - gettargetpointentity
  - icamera
  - camera
  - target
  - point
  - entity
  - math
  - percent
  - double
  - object
---

# ICamera.GetTargetPointEntity

Gets the target point on the entity for the camera.

## Signature

```csharp
System.Object GetTargetPointEntity( 
   out MathPoint
Point
,
   out System.Double
PercentTarget
)
```
## Parameters

- `Point` (MathPoint): IMathPoint object indicating the target point for the camera
- `PercentTarget` (System.Double): Target point distance along the entity

## Return Value

Entity for the target point

## See Also

- `ICamera.SetTargetPointEntity`
- `ICamera.TargetPointBySelection`
- `ICamera.TargetPointPosition`