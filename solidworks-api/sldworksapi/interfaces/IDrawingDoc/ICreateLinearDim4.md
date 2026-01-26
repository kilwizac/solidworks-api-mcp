---
type: method
interface: IDrawingDoc
member: ICreateLinearDim4
returns: DisplayDimension
parameters:
  -
    name: P0
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z), dimension point
  -
    name: P1
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z), dimension end
  -
    name: P2
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z), normal to the plane of sketch
  -
    name: P3
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z), extension line 1 reference point
  -
    name: P4
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z), extension line 2 reference point
  -
    name: TextPoint
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z), position of text
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
  - IDrawingDoc.CreateDetailViewAt3
  - IDrawingDoc.CreateDiamDim4
  - IDrawingDoc.CreateLinearDim4
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.ICreateAngDim4
  - IDrawingDoc.ICreateDiamDim4
  - IDrawingDoc.ICreateOrdinateDim4
keywords:
  - linear
  - dimension
  - see
  - also
  - idimension
  - icreatelineardim4
  - idrawingdoc
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
  - text
  - point
  - val
  - angle
  - height
  - display
---

# IDrawingDoc.ICreateLinearDim4

Creates a non-associative linear dimension.

## Signature

```csharp
DisplayDimension ICreateLinearDim4( 
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

- `P0` (System.Double): Pointer to an array of 3 doubles (x,y,z), dimension point
- `P1` (System.Double): Pointer to an array of 3 doubles (x,y,z), dimension end
- `P2` (System.Double): Pointer to an array of 3 doubles (x,y,z), normal to the plane of sketch
- `P3` (System.Double): Pointer to an array of 3 doubles (x,y,z), extension line 1 reference point
- `P4` (System.Double): Pointer to an array of 3 doubles (x,y,z), extension line 2 reference point
- `TextPoint` (System.Double): Pointer to an array of 3 doubles (x,y,z), position of text
- `Val` (System.Double): Value for the non-associative linear dimension
- `Angle` (System.Double): Inclination angle of the text in radians
- `TextHeight` (System.Double): Text height in meters

## Return Value

Pointer to IDisplayDimension object

## Remarks

SOLIDWORKS creates this type of dimension between the two points you specify. It has no relation to your geometry.

## See Also

- `IDrawingDoc.CreateAngDim4`
- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.CreateDiamDim4`
- `IDrawingDoc.CreateLinearDim4`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.ICreateAngDim4`
- `IDrawingDoc.ICreateDiamDim4`
- `IDrawingDoc.ICreateOrdinateDim4`