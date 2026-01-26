---
type: method
interface: IDrawingDoc
member: CreateOrdinateDim4
returns: System.Object
parameters:
  -
    name: P0
    type: System.Object
    description: Array of 3 doubles (x,y,z); dimension point
  -
    name: P1
    type: System.Object
    description: Array of 3 doubles (x,y,z); unit vector that specifies the direction of the ordinate dimension
  -
    name: P2
    type: System.Object
    description: Array of 3 doubles (x,y,z); extension line start point
  -
    name: P3
    type: System.Object
    description: Array of 3 doubles (x,y,z); extension line end point
  -
    name: P4
    type: System.Object
    description: Array of 3 doubles (x,y,z); unit vector and specifies the orientation of the text; for example, (1, 0, 0) results in horizontal text read from left to right
  -
    name: P5
    type: System.Object
    description: Array of 3 doubles (x,y,z); position of text
  -
    name: Val
    type: System.Double
    description: Value for the ordinate dimension
  -
    name: Angle
    type: System.Double
    description: Inclination angle of the text in radians (character slant)
  -
    name: TextHeight
    type: System.Double
    description: Text height in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.AddOrdinateDimension2
  - IDrawingDoc.CreateAngDim4
  - IDrawingDoc.CreateDiamDim4
  - IDrawingDoc.CreateLinearDim4
  - IDrawingDoc.ICreateAngDim4
  - IDrawingDoc.ICreateDiamDim4
  - IDrawingDoc.ICreateLinearDim4
  - IDrawingDoc.ICreateOrdinateDim4
keywords:
  - ordinate
  - dimensions
  - dimension
  - see
  - also
  - idimension
  - display
  - idisplaydimension
  - drawings
  - idrawingdoc
  - createordinatedim4
  - drawing
  - doc
  - create
  - dim4
  - p0
  - object
  - p1
  - p2
  - p3
  - p4
  - p5
  - val
  - double
  - angle
  - text
  - height
---

# IDrawingDoc.CreateOrdinateDim4

Creates a non-associative ordinate dimension.

## Signature

```csharp
System.Object CreateOrdinateDim4( 
   System.Object
P0
,
   System.Object
P1
,
   System.Object
P2
,
   System.Object
P3
,
   System.Object
P4
,
   System.Object
P5
,
   System.Double
Val
,
   System.Double
Angle
,
   System.Double
TextHeight
)
```
## Parameters

- `P0` (System.Object): Array of 3 doubles (x,y,z); dimension point
- `P1` (System.Object): Array of 3 doubles (x,y,z); unit vector that specifies the direction of the ordinate dimension
- `P2` (System.Object): Array of 3 doubles (x,y,z); extension line start point
- `P3` (System.Object): Array of 3 doubles (x,y,z); extension line end point
- `P4` (System.Object): Array of 3 doubles (x,y,z); unit vector and specifies the orientation of the text; for example, (1, 0, 0) results in horizontal text read from left to right
- `P5` (System.Object): Array of 3 doubles (x,y,z); position of text
- `Val` (System.Double): Value for the ordinate dimension
- `Angle` (System.Double): Inclination angle of the text in radians (character slant)
- `TextHeight` (System.Double): Text height in meters

## Return Value

Display dimension

## Remarks

SOLIDWORKS creates this type of dimension between the two specified points. The dimension is not related to the geometry.

## See Also

- `IDrawingDoc.AddOrdinateDimension2`
- `IDrawingDoc.CreateAngDim4`
- `IDrawingDoc.CreateDiamDim4`
- `IDrawingDoc.CreateLinearDim4`
- `IDrawingDoc.ICreateAngDim4`
- `IDrawingDoc.ICreateDiamDim4`
- `IDrawingDoc.ICreateLinearDim4`
- `IDrawingDoc.ICreateOrdinateDim4`