---
type: method
interface: ISketchManager
member: CreateLinearSketchStepAndRepeat
returns: System.Boolean
parameters:
  -
    name: NumX
    type: System.Int32
    description: Total number of instances along the x axis, including the seed
  -
    name: NumY
    type: System.Int32
    description: Total number of instances along the y axis, including the seed
  -
    name: SpacingX
    type: System.Double
    description: Spacing between instances along the x axis
  -
    name: SpacingY
    type: System.Double
    description: Spacing between instances along the y axis
  -
    name: AngleX
    type: System.Double
    description: Angle for direction 1 relative to the x axis
  -
    name: AngleY
    type: System.Double
    description: Angle for direction 2 relative to the y axis
  -
    name: DeleteInstances
    type: System.String
    description: Number of instances to delete, passed as a string in the format: "( a ) ( b ) ( c ) "
  -
    name: XSpacingDim
    type: System.Boolean
    description: True to display the spacing between instances dimension along the x axis in the graphics area, false to not
  -
    name: YSpacingDim
    type: System.Boolean
    description: True to display the spacing between instances dimension along the y axis in the graphics area, false to not
  -
    name: AngleDim
    type: System.Boolean
    description: True to display the angle dimension between axes in the graphics area, false to not
  -
    name: CreateNumOfInstancesDimInXDir
    type: System.Boolean
    description: True to display the number of instances in the x direction dimension in the graphics area, false to not
  -
    name: CreateNumOfInstancesDimInYDir
    type: System.Boolean
    description: True to display the number of instances in the y direction dimension in the graphics area, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchManager.CreateCircularSketchStepAndRepeat
  - ISketchManager.EditCircularSketchStepAndRepeat
  - ISketchManager.EditLinearSketchStepAndRepeat
keywords:
  - pattern
  - sketch
  - linear
  - patterns
  - see
  - also
  - isketch
  - createlinearsketchstepandrepeat
  - isketchmanager
  - manager
  - create
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
  - dim
  - boolean
  - dir
  - edit
  - vb
  - net
  - patten
  - vba
---

# ISketchManager.CreateLinearSketchStepAndRepeat

Creates a linear sketch pattern.

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
,
   System.Boolean
XSpacingDim
,
   System.Boolean
YSpacingDim
,
   System.Boolean
AngleDim
,
   System.Boolean
CreateNumOfInstancesDimInXDir
,
   System.Boolean
CreateNumOfInstancesDimInYDir
)
```
## Parameters

- `NumX` (System.Int32): Total number of instances along the x axis, including the seed
- `NumY` (System.Int32): Total number of instances along the y axis, including the seed
- `SpacingX` (System.Double): Spacing between instances along the x axis
- `SpacingY` (System.Double): Spacing between instances along the y axis
- `AngleX` (System.Double): Angle for direction 1 relative to the x axis
- `AngleY` (System.Double): Angle for direction 2 relative to the y axis
- `DeleteInstances` (System.String): Number of instances to delete, passed as a string in the format: "( a ) ( b ) ( c ) "
- `XSpacingDim` (System.Boolean): True to display the spacing between instances dimension along the x axis in the graphics area, false to not
- `YSpacingDim` (System.Boolean): True to display the spacing between instances dimension along the y axis in the graphics area, false to not
- `AngleDim` (System.Boolean): True to display the angle dimension between axes in the graphics area, false to not
- `CreateNumOfInstancesDimInXDir` (System.Boolean): True to display the number of instances in the x direction dimension in the graphics area, false to not
- `CreateNumOfInstancesDimInYDir` (System.Boolean): True to display the number of instances in the y direction dimension in the graphics area, false to not

## Return Value

True if the linear sketch pattern is created, false if not

## Remarks

The spacing instances, angle, and number of instances dimensions displayed in the graphics area can be modified by interactive users.

## Examples

- Create and Edit Linear Sketch Pattern (VB.NET) (Create_and_Edit_Linear_Sketch_Pattern_Example_VBNET.htm)
- Create and Edit Linear Sketch Patten (VBA) (Create_and_Edit_Linear_Sketch_Pattern_Example_VB.htm)
- Create and Edit Linear Sketch Pattern (C#) (Create_and_Edit_Linear_Sketch_Pattern_Example_CSharp.htm)

## See Also

- `ISketchManager.CreateCircularSketchStepAndRepeat`
- `ISketchManager.EditCircularSketchStepAndRepeat`
- `ISketchManager.EditLinearSketchStepAndRepeat`