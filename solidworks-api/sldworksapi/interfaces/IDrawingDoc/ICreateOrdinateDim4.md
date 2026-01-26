---
type: method
interface: IDrawingDoc
member: ICreateOrdinateDim4
returns: DisplayDimension
parameters:
  -
    name: P0
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); dimension point
  -
    name: P1
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); unit vector that specifies the direction of the ordinate dimension
  -
    name: P2
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); extension line start point
  -
    name: P3
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); extension line end point
  -
    name: P4
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); unit vector and specifies the orientation of the text; for example, (1, 0, 0) results in horizontal text read from left to right
  -
    name: P5
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); position of text
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
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.ICreateAngDim4
  - IDrawingDoc.ICreateDiamDim4
  - IDrawingDoc.ICreateLinearDim4
keywords:
  - dimension
  - see
  - also
  - idimension
  - ordinate
  - dimensions
  - drawings
  - idrawingdoc
  - display
  - idisplaydimension
  - icreateordinatedim4
  - drawing
  - doc
  - create
  - dim4
  - p0
  - double
  - p1
  - p2
  - p3
  - p4
  - p5
  - val
  - angle
  - text
  - height
---

# IDrawingDoc.ICreateOrdinateDim4

Creates a non-associative ordinate dimension.

## Signature

```csharp
DisplayDimension ICreateOrdinateDim4( 
   ref System.Double
P0
,
   ref System.Double
P1
,
   ref System.Double
P2
,
   ref System.Double
P3
,
   ref System.Double
P4
,
   ref System.Double
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

- `P0` (System.Double): Pointer to an array of 3 doubles (x,y,z); dimension point
- `P1` (System.Double): Pointer to an array of 3 doubles (x,y,z); unit vector that specifies the direction of the ordinate dimension
- `P2` (System.Double): Pointer to an array of 3 doubles (x,y,z); extension line start point
- `P3` (System.Double): Pointer to an array of 3 doubles (x,y,z); extension line end point
- `P4` (System.Double): Pointer to an array of 3 doubles (x,y,z); unit vector and specifies the orientation of the text; for example, (1, 0, 0) results in horizontal text read from left to right
- `P5` (System.Double): Pointer to an array of 3 doubles (x,y,z); position of text
- `Val` (System.Double): Value for the ordinate dimension
- `Angle` (System.Double): Inclination angle of the text in radians (character slant)
- `TextHeight` (System.Double): Text height in meters

## Return Value

Display dimension

## Remarks

SOLIDWORKS creates this type of dimension between the two points you specify. It has no relation to your geometry.

## See Also

- `IDrawingDoc.AddOrdinateDimension2`
- `IDrawingDoc.CreateAngDim4`
- `IDrawingDoc.CreateDiamDim4`
- `IDrawingDoc.CreateLinearDim4`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.ICreateAngDim4`
- `IDrawingDoc.ICreateDiamDim4`
- `IDrawingDoc.ICreateLinearDim4`