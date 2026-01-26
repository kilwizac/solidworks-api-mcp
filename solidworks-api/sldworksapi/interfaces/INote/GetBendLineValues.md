---
type: method
interface: INote
member: GetBendLineValues
returns: System.Boolean
parameters:
  -
    name: Up
    type: System.Boolean
    description: True if the bend is up, false if the bend is down
  -
    name: Angle
    type: System.Double
    description: Angle of the bend
  -
    name: Radius
    type: System.Double
    description: Radius of the bend
  -
    name: StartPt
    type: MathPoint
    description: Start point of the bend line
  -
    name: EndPt
    type: MathPoint
    description: End point of the bend line
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - INote.IsBendLineNote
keywords:
  - getbendlinevalues
  - inote
  - note
  - bend
  - line
  - values
  - up
  - boolean
  - angle
  - double
  - radius
  - start
  - pt
  - math
  - point
  - end
  - vba
---

# INote.GetBendLineValues

Obsolete. Superseded by INote::GetBendLineValues2.

## Signature

```csharp
System.Boolean GetBendLineValues( 
   out System.Boolean
Up
,
   out System.Double
Angle
,
   out System.Double
Radius
,
   out MathPoint
StartPt
,
   out MathPoint
EndPt
)
```
## Parameters

- `Up` (System.Boolean): True if the bend is up, false if the bend is down
- `Angle` (System.Double): Angle of the bend
- `Radius` (System.Double): Radius of the bend
- `StartPt` (MathPoint): Start point of the bend line
- `EndPt` (MathPoint): End point of the bend line

## Return Value

True if the note is a bend note, false if not

## Examples

- Get Bend Line Note Values (VBA) (Get_Bend_Line_Note_Values_Example_VB.htm)

## See Also

- `INote.IsBendLineNote`