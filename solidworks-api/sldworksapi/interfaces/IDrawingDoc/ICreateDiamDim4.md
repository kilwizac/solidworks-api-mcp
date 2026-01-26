---
type: method
interface: IDrawingDoc
member: ICreateDiamDim4
returns: DisplayDimension
parameters:
  -
    name: P0
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); location of dimension point
  -
    name: P1
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); nearest point on circle
  -
    name: P2
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); farthest point on circle diametrically opposite to P1
  -
    name: P3
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); plane normal
  -
    name: TextPoint
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); position of text
  -
    name: Val
    type: System.Double
    description: Dimension value in meters
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
  - IDrawingDoc.CreateLinearDim4
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.ICreateAngDim4
  - IDrawingDoc.ICreateLinearDim4
  - IDrawingDoc.ICreateOrdinateDim4
keywords:
  - diameter
  - dimension
  - see
  - also
  - idimension
  - icreatediamdim4
  - idrawingdoc
  - drawing
  - doc
  - create
  - diam
  - dim4
  - p0
  - double
  - p1
  - p2
  - p3
  - text
  - point
  - val
  - height
  - display
---

# IDrawingDoc.ICreateDiamDim4

Creates a non-associative diameter dimension.

## Signature

```csharp
DisplayDimension ICreateDiamDim4( 
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
TextPoint
,
   System.Double
Val
,
   System.Double
TextHeight
)
```
## Parameters

- `P0` (System.Double): Pointer to an array of 3 doubles (x,y,z); location of dimension point
- `P1` (System.Double): Pointer to an array of 3 doubles (x,y,z); nearest point on circle
- `P2` (System.Double): Pointer to an array of 3 doubles (x,y,z); farthest point on circle diametrically opposite to P1
- `P3` (System.Double): Pointer to an array of 3 doubles (x,y,z); plane normal
- `TextPoint` (System.Double): Pointer to an array of 3 doubles (x,y,z); position of text
- `Val` (System.Double): Dimension value in meters
- `TextHeight` (System.Double): Text height in meters

## Return Value

Pointer to the new IDisplayDimension

## Remarks

SOLIDWORKS creates this type of dimension between the two points you specify. It has no relation to your geometry.

## See Also

- `IDrawingDoc.CreateAngDim4`
- `IDrawingDoc.CreateDiamDim4`
- `IDrawingDoc.CreateLinearDim4`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.ICreateAngDim4`
- `IDrawingDoc.ICreateLinearDim4`
- `IDrawingDoc.ICreateOrdinateDim4`