---
type: method
interface: IModelDoc2
member: CreateCircularSketchStepAndRepeat
returns: System.Boolean
parameters:
  -
    name: ArcRadius
    type: System.Double
    description: Radius to be used in the circular sketch pattern
  -
    name: ArcAngle
    type: System.Double
    description: Angle relative to the sketch entities being patterned
  -
    name: PatternNum
    type: System.Int32
    description: Total number of instances, including the seed geometry
  -
    name: PatternSpacing
    type: System.Double
    description: Spacing between pattern instances in radians
  -
    name: PatternRotate
    type: System.Boolean
    description: True to rotate the pattern, false to not
  -
    name: DeleteInstances
    type: System.String
    description: Number of instances to delete passed as a string formatted as: "( a ) ( b ) ( c ) "
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.CreateLinearSketchStepAndRepeat
keywords:
  - createcircularsketchstepandrepeat
  - imodeldoc2
  - model
  - doc2
  - create
  - circular
  - sketch
  - step
  - repeat
  - arc
  - radius
  - double
  - angle
  - pattern
  - num
  - int32
  - spacing
  - rotate
  - boolean
  - delete
  - instances
  - string
---

# IModelDoc2.CreateCircularSketchStepAndRepeat

Obsolete. Superseded by ISketchManager::CreateCircularSketchStepAndRepeat.

## Signature

```csharp
System.Boolean CreateCircularSketchStepAndRepeat( 
   System.Double
ArcRadius
,
   System.Double
ArcAngle
,
   System.Int32
PatternNum
,
   System.Double
PatternSpacing
,
   System.Boolean
PatternRotate
,
   System.String
DeleteInstances
)
```
## Parameters

- `ArcRadius` (System.Double): Radius to be used in the circular sketch pattern
- `ArcAngle` (System.Double): Angle relative to the sketch entities being patterned
- `PatternNum` (System.Int32): Total number of instances, including the seed geometry
- `PatternSpacing` (System.Double): Spacing between pattern instances in radians
- `PatternRotate` (System.Boolean): True to rotate the pattern, false to not
- `DeleteInstances` (System.String): Number of instances to delete passed as a string formatted as: "( a ) ( b ) ( c ) "

## Return Value

True if the sketch pattern was created successfully, false otherwise

## See Also

- `IModelDoc2.CreateLinearSketchStepAndRepeat`