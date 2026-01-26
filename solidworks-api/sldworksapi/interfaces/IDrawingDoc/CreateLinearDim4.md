---
type: method
interface: IDrawingDoc
member: CreateLinearDim4
returns: System.Object
parameters:
  -
    name: P0
    type: System.Object
    description: Array of 3 doubles (x,y,z), dimension point
  -
    name: P1
    type: System.Object
    description: Array of 3 doubles (x,y,z), dimension end
  -
    name: P2
    type: System.Object
    description: Array of 3 doubles (x,y,z), normal to the plane of sketch
  -
    name: P3
    type: System.Object
    description: Array of 3 doubles (x,y,z), extension line 1 reference point
  -
    name: P4
    type: System.Object
    description: Array of 3 doubles (x,y,z), extension line 2 reference point
  -
    name: TextPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z), position of text
  -
    name: Val
    type: System.Double
    description: Value for the non-associative linear dimension
  -
    name: Angle
    type: System.Double
    description: Inclination angle of the text in radians
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
  - IDrawingDoc.CreateAngDim4
  - IDrawingDoc.CreateDiamDim4
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.ICreateAngDim4
  - IDrawingDoc.ICreateDiamDim4
  - IDrawingDoc.ICreateLinearDim4
  - IDrawingDoc.ICreateOrdinateDim4
keywords:
  - linear
  - dimension
  - see
  - also
  - idimension
  - createlineardim4
  - idrawingdoc
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
  - text
  - point
  - val
  - double
  - angle
  - height
---

# IDrawingDoc.CreateLinearDim4

Creates a non-associative linear dimension.

## Signature

```csharp
System.Object CreateLinearDim4( 
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
TextPoint
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

- `P0` (System.Object): Array of 3 doubles (x,y,z), dimension point
- `P1` (System.Object): Array of 3 doubles (x,y,z), dimension end
- `P2` (System.Object): Array of 3 doubles (x,y,z), normal to the plane of sketch
- `P3` (System.Object): Array of 3 doubles (x,y,z), extension line 1 reference point
- `P4` (System.Object): Array of 3 doubles (x,y,z), extension line 2 reference point
- `TextPoint` (System.Object): Array of 3 doubles (x,y,z), position of text
- `Val` (System.Double): Value for the non-associative linear dimension
- `Angle` (System.Double): Inclination angle of the text in radians
- `TextHeight` (System.Double): Text height in meters

## Return Value

Display dimension

## Remarks

SOLIDWORKS creates this type of dimension between the two specified points. The dimension is not related to the geometry.

## See Also

- `IDrawingDoc.CreateAngDim4`
- `IDrawingDoc.CreateDiamDim4`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.ICreateAngDim4`
- `IDrawingDoc.ICreateDiamDim4`
- `IDrawingDoc.ICreateLinearDim4`
- `IDrawingDoc.ICreateOrdinateDim4`