---
type: method
interface: IDrawingDoc
member: InsertLinearNotePattern
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
    description: Spacing between pattern instances along the x axis
  -
    name: SpacingY
    type: System.Double
    description: Spacing between pattern instances along the y axis
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
    description: Number of instances to delete, passed as a string in the format "( a ) ( b ) ( c ) "
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.InsertCircularNotePattern
keywords:
  - pattern
  - linear
  - note
  - insertlinearnotepattern
  - idrawingdoc
  - drawing
  - doc
  - insert
  - num
  - int32
  - spacing
  - double
  - angle
  - delete
  - instances
  - string
  - boolean
  - circular
  - patterns
  - vb
  - net
  - vba
---

# IDrawingDoc.InsertLinearNotePattern

Inserts a linear note pattern using the selected note.

## Signature

```csharp
System.Boolean InsertLinearNotePattern( 
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

- `NumX` (System.Int32): Total number of instances along the x axis, including the seed
- `NumY` (System.Int32): Total number of instances along the y axis, including the seed
- `SpacingX` (System.Double): Spacing between pattern instances along the x axis
- `SpacingY` (System.Double): Spacing between pattern instances along the y axis
- `AngleX` (System.Double): Angle for direction 1 relative to the x axis
- `AngleY` (System.Double): Angle for direction 2 relative to the y axis
- `DeleteInstances` (System.String): Number of instances to delete, passed as a string in the format "( a ) ( b ) ( c ) "

## Return Value

True if the linear note pattern is created, false if not

## Examples

- Insert Linear and Circular Note Patterns (C#) (Insert_Linear_and_Circular_Note_Patterns_Example_CSharp.htm)
- Insert Linear and Circular Note Patterns (VB.NET) (Insert_Linear_and_Circular_Note_Patterns_Example_VBNET.htm)
- Insert Linear and Circular Note Patterns (VBA) (Insert_Linear_and_Circular_Note_Patterns_Example_VB.htm)

## See Also

- `IDrawingDoc.InsertCircularNotePattern`