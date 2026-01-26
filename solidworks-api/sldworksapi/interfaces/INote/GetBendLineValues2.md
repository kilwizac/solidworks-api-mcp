---
type: method
interface: INote
member: GetBendLineValues2
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
    name: Points
    type: System.Object
    description: Array of doubles (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IMathPoint
keywords:
  - bend
  - line
  - notes
  - note
  - see
  - also
  - inote
  - sheet
  - metal
  - isheetmetalfeaturedata
  - getbendlinevalues2
  - values2
  - up
  - boolean
  - angle
  - double
  - radius
  - points
  - object
---

# INote.GetBendLineValues2

Gets the values of a bend line note.

## Signature

```csharp
System.Boolean GetBendLineValues2( 
   out System.Boolean
Up
,
   out System.Double
Angle
,
   out System.Double
Radius
,
   out System.Object
Points
)
```
## Parameters

- `Up` (System.Boolean): True if the bend is up, false if the bend is down
- `Angle` (System.Double): Angle of the bend
- `Radius` (System.Double): Radius of the bend
- `Points` (System.Object): Array of doubles (see Remarks )

## Return Value

True if the note is a bend note, false if not

## Remarks

Points will contain six (6) doubles (three (3) each for the start point and endpoint), one set for each segment in the bend line:
[
x, y, z,
x, y, z
]

## See Also

- `IMathPoint`