---
type: method
interface: ISketchManager
member: EditCircularSketchStepAndRepeat
returns: System.Boolean
parameters:
  -
    name: ArcRadius
    type: System.Double
    description: Radius of the circular sketch pattern
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
    description: Spacing between pattern instances
  -
    name: PatternRotate
    type: System.Boolean
    description: True to rotate the pattern, false to not
  -
    name: DeleteInstances
    type: System.String
    description: Number of instances to delete, passed as a string formatted as: "( a ) ( b ) ( c ) "
  -
    name: RadiusDim
    type: System.Boolean
    description: True to display the radius dimension in the graphics area, false to not
  -
    name: AngleDim
    type: System.Boolean
    description: True to display the angle dimension in the graphics area, false to not
  -
    name: CreateNumOfInstancesDim
    type: System.Boolean
    description: True to display the number of instances dimension in the graphics area, false to not
  -
    name: Seeds
    type: System.String
    description: Array of the names of the entities, separated by the underscore character (_), that comprise the seed pattern (e.g., "Line1_Line2_Line3_Line4" for a rectangular-shaped seed pattern)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateCircularSketchStepAndRepeat
  - ISketchManager.CreateLinearSketchStepAndRepeat
  - ISketchManager.EditLinearSketchStepAndRepeat
keywords:
  - circular
  - patterns
  - pattern
  - sketch
  - see
  - also
  - isketch
  - editcircularsketchstepandrepeat
  - isketchmanager
  - manager
  - edit
  - step
  - repeat
  - arc
  - radius
  - double
  - angle
  - num
  - int32
  - spacing
  - rotate
  - boolean
  - delete
  - instances
  - string
  - dim
  - create
  - seeds
  - vb
  - net
  - vba
---

# ISketchManager.EditCircularSketchStepAndRepeat

Edits a circular sketch pattern.

## Signature

```csharp
System.Boolean EditCircularSketchStepAndRepeat( 
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
,
   System.Boolean
RadiusDim
,
   System.Boolean
AngleDim
,
   System.Boolean
CreateNumOfInstancesDim
,
   System.String
Seeds
)
```
## Parameters

- `ArcRadius` (System.Double): Radius of the circular sketch pattern
- `ArcAngle` (System.Double): Angle relative to the sketch entities being patterned
- `PatternNum` (System.Int32): Total number of instances, including the seed geometry
- `PatternSpacing` (System.Double): Spacing between pattern instances
- `PatternRotate` (System.Boolean): True to rotate the pattern, false to not
- `DeleteInstances` (System.String): Number of instances to delete, passed as a string formatted as: "( a ) ( b ) ( c ) "
- `RadiusDim` (System.Boolean): True to display the radius dimension in the graphics area, false to not
- `AngleDim` (System.Boolean): True to display the angle dimension in the graphics area, false to not
- `CreateNumOfInstancesDim` (System.Boolean): True to display the number of instances dimension in the graphics area, false to not
- `Seeds` (System.String): Array of the names of the entities, separated by the underscore character (_), that comprise the seed pattern (e.g., "Line1_Line2_Line3_Line4" for a rectangular-shaped seed pattern)

## Return Value

True if the circular sketch pattern is successfully edited, false if not

## Remarks

The radius, angle, and number of instances dimensions displayed in the graphics area can be modified by interactive users.

## Examples

- Create and Edit Circular Sketch Pattern (VB.NET) (Create_and_Edit_Circular_Sketch_Pattern_Example_VBNET.htm)
- Create and Edit Circular Sketch Pattern (VBA) (Create_and_Edit_Circular_Sketch_Pattern_Example_VB.htm)
- Create and Edit Circular Sketch Pattern (C#) (Create_and_Edit_Circular_Sketch_Pattern_Example_CSharp.htm)

## See Also

- `ISketchManager.CreateCircularSketchStepAndRepeat`
- `ISketchManager.CreateLinearSketchStepAndRepeat`
- `ISketchManager.EditLinearSketchStepAndRepeat`