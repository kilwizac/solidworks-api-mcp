---
type: method
interface: IDrawingDoc
member: InsertCircularNotePattern
returns: System.Boolean
parameters:
  -
    name: ArcRadius
    type: System.Double
    description: Radius for the circular note pattern
  -
    name: ArcAngle
    type: System.Double
    description: Angle relative to the notes being patterned
  -
    name: PatternNum
    type: System.Int32
    description: Total number of pattern instances, including the seed geometry
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
    description: Number of instances to delete, passed as a string formatted as "( a ) ( b ) ( c ) "
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.InsertLinearNotePattern
keywords:
  - pattern
  - circular
  - note
  - insertcircularnotepattern
  - idrawingdoc
  - drawing
  - doc
  - insert
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
  - linear
  - patterns
  - vb
  - net
  - vba
---

# IDrawingDoc.InsertCircularNotePattern

Inserts a circular note pattern using the selected note.

## Signature

```csharp
System.Boolean InsertCircularNotePattern( 
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

- `ArcRadius` (System.Double): Radius for the circular note pattern
- `ArcAngle` (System.Double): Angle relative to the notes being patterned
- `PatternNum` (System.Int32): Total number of pattern instances, including the seed geometry
- `PatternSpacing` (System.Double): Spacing between pattern instances in radians
- `PatternRotate` (System.Boolean): True to rotate the pattern, false to not
- `DeleteInstances` (System.String): Number of instances to delete, passed as a string formatted as "( a ) ( b ) ( c ) "

## Return Value

True if the circular note pattern is created, false if not

## Examples

- Insert Linear and Circular Note Patterns (C#) (Insert_Linear_and_Circular_Note_Patterns_Example_CSharp.htm)
- Insert Linear and Circular Note Patterns (VB.NET) (Insert_Linear_and_Circular_Note_Patterns_Example_VBNET.htm)
- Insert Linear and Circular Note Patterns (VBA) (Insert_Linear_and_Circular_Note_Patterns_Example_VB.htm)

## See Also

- `IDrawingDoc.InsertLinearNotePattern`