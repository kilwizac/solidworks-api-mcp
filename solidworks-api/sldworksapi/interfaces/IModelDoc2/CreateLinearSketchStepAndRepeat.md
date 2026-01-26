---
type: method
interface: IModelDoc2
member: CreateLinearSketchStepAndRepeat
returns: System.Boolean
parameters:
  -
    name: NumX
    type: System.Int32
    description: Total number of instances along direction 1, including the seed
  -
    name: NumY
    type: System.Int32
    description: Total number of instances along direction 2, including the seed
  -
    name: SpacingX
    type: System.Double
    description: Spacing between instances along direction 1
  -
    name: SpacingY
    type: System.Double
    description: Spacing between instances along direction 2
  -
    name: AngleX
    type: System.Double
    description: Relative to the X axis, the angle for direction 1
  -
    name: AngleY
    type: System.Double
    description: Relative to the X axis, the angle for direction 2
  -
    name: DeleteInstances
    type: System.String
    description: Number of instances to delete passed as a string in the format: "( a ) ( b ) ( c ) "
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - sketches
  - ui
related:
  - IModelDoc2.CreateCircularSketchStepAndRepeat
keywords:
  - createlinearsketchstepandrepeat
  - imodeldoc2
  - model
  - doc2
  - create
  - linear
  - sketch
  - step
  - repeat
  - num
  - int32
  - spacing
  - double
  - angle
  - delete
  - instances
  - string
  - boolean
---

# IModelDoc2.CreateLinearSketchStepAndRepeat

Obsolete. Superseded by ISketchManager::CreateLinearSketchStepAndRepeat.

## Signature

```csharp
System.Boolean CreateLinearSketchStepAndRepeat( 
   System.Int32
NumX
,
   System.Int32
NumY
,
   System.Double
SpacingX
,
   System.Double
SpacingY
,
   System.Double
AngleX
,
   System.Double
AngleY
,
   System.String
DeleteInstances
)
```
## Parameters

- `NumX` (System.Int32): Total number of instances along direction 1, including the seed
- `NumY` (System.Int32): Total number of instances along direction 2, including the seed
- `SpacingX` (System.Double): Spacing between instances along direction 1
- `SpacingY` (System.Double): Spacing between instances along direction 2
- `AngleX` (System.Double): Relative to the X axis, the angle for direction 1
- `AngleY` (System.Double): Relative to the X axis, the angle for direction 2
- `DeleteInstances` (System.String): Number of instances to delete passed as a string in the format: "( a ) ( b ) ( c ) "

## Return Value

True if the sketch pattern was created successfully, false otherwise

## See Also

- `IModelDoc2.CreateCircularSketchStepAndRepeat`