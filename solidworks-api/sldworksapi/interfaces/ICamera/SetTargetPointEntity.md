---
type: method
interface: ICamera
member: SetTargetPointEntity
returns: void
parameters:
  -
    name: Point
    type: MathPoint
    description: Pointer to the IMathPoint object indicating the target point for the camera
  -
    name: PercentTarget
    type: System.Double
    description: Target point distance along the entity
  -
    name: TargetPointEntity
    type: System.Object
    description: Entity for the target point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICamera.GetTargetPointEntity
  - ICamera.TargetPointBySelection
  - ICamera.TargetPointPosition
keywords:
  - settargetpointentity
  - icamera
  - camera
  - target
  - point
  - entity
  - math
  - percent
  - double
  - object
  - void
---

# ICamera.SetTargetPointEntity

Gets the target point on the entity for the camera.

## Signature

```csharp
void SetTargetPointEntity( 
   MathPoint
Point
,
   System.Double
PercentTarget
,
   System.Object
TargetPointEntity
)
```
## Parameters

- `Point` (MathPoint): Pointer to the IMathPoint object indicating the target point for the camera
- `PercentTarget` (System.Double): Target point distance along the entity
- `TargetPointEntity` (System.Object): Entity for the target point

## Return Value

Unknown.

## See Also

- `ICamera.GetTargetPointEntity`
- `ICamera.TargetPointBySelection`
- `ICamera.TargetPointPosition`