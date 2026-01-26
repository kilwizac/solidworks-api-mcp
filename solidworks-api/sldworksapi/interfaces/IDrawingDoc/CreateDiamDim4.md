---
type: method
interface: IDrawingDoc
member: CreateDiamDim4
returns: System.Object
parameters:
  -
    name: P0
    type: System.Object
    description: Array of 3 doubles (x,y,z); location of dimension point
  -
    name: P1
    type: System.Object
    description: Array of 3 doubles (x,y,z); nearest point on circle
  -
    name: P2
    type: System.Object
    description: Array of 3 doubles (x,y,z); farthest point on circle diametrically opposite to P1
  -
    name: P3
    type: System.Object
    description: Array of 3 doubles (x,y,z); plane normal
  -
    name: TextPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z); position of text
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
  - IDrawingDoc.CreateLinearDim4
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.ICreateAngDim4
  - IDrawingDoc.ICreateDiamDim4
  - IDrawingDoc.ICreateLinearDim4
  - IDrawingDoc.ICreateOrdinateDim4
keywords:
  - diameter
  - dimension
  - see
  - also
  - idimension
  - creatediamdim4
  - idrawingdoc
  - drawing
  - doc
  - create
  - diam
  - dim4
  - p0
  - object
  - p1
  - p2
  - p3
  - text
  - point
  - val
  - double
  - height
  - non
  - associative
  - vba
---

# IDrawingDoc.CreateDiamDim4

Creates a non-associative diameter dimension.

## Signature

```csharp
System.Object CreateDiamDim4( 
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

- `P0` (System.Object): Array of 3 doubles (x,y,z); location of dimension point
- `P1` (System.Object): Array of 3 doubles (x,y,z); nearest point on circle
- `P2` (System.Object): Array of 3 doubles (x,y,z); farthest point on circle diametrically opposite to P1
- `P3` (System.Object): Array of 3 doubles (x,y,z); plane normal
- `TextPoint` (System.Object): Array of 3 doubles (x,y,z); position of text
- `Val` (System.Double): Dimension value in meters
- `TextHeight` (System.Double): Text height in meters

## Return Value

Newly created display dimension

## Remarks

SOLIDWORKS creates this type of dimension between the two points you specify. It has no relation to your geometry.

## Examples

- Create Non-associative Diameter Dimension (VBA) (Create_Non-associative_Diameter_Dimension_Example_VB.htm)

## See Also

- `IDrawingDoc.CreateAngDim4`
- `IDrawingDoc.CreateLinearDim4`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.ICreateAngDim4`
- `IDrawingDoc.ICreateDiamDim4`
- `IDrawingDoc.ICreateLinearDim4`
- `IDrawingDoc.ICreateOrdinateDim4`