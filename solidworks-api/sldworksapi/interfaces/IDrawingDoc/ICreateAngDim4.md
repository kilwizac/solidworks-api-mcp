---
type: method
interface: IDrawingDoc
member: ICreateAngDim4
returns: DisplayDimension
parameters:
  -
    name: P0
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); dimension end point
  -
    name: P1
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); dimension point
  -
    name: P2
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); extension1 start point
  -
    name: P3
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); extension1 end point
  -
    name: P4
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); extension2 start point
  -
    name: P5
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); extension2 end point
  -
    name: P6
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); plane normal
  -
    name: TextPoint
    type: System.Double
    description: Pointer to an array of 3 doubles (x,y,z); position of text
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
  - IDrawingDoc.ICreateLinearDim4
  - IDrawingDoc.ICreateOrdinateDim4
keywords:
  - dimension
  - see
  - also
  - idimension
  - angular
  - icreateangdim4
  - idrawingdoc
  - drawing
  - doc
  - create
  - ang
  - dim4
  - p0
  - double
  - p1
  - p2
  - p3
  - p4
  - p5
  - p6
  - text
  - point
  - height
  - display
---

# IDrawingDoc.ICreateAngDim4

Creates a non-associative angular dimension.

## Signature

```csharp
DisplayDimension ICreateAngDim4( 
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
   ref System.Double
P6
,
   ref System.Double
TextPoint
,
   System.Double
TextHeight
)
```
## Parameters

- `P0` (System.Double): Pointer to an array of 3 doubles (x,y,z); dimension end point
- `P1` (System.Double): Pointer to an array of 3 doubles (x,y,z); dimension point
- `P2` (System.Double): Pointer to an array of 3 doubles (x,y,z); extension1 start point
- `P3` (System.Double): Pointer to an array of 3 doubles (x,y,z); extension1 end point
- `P4` (System.Double): Pointer to an array of 3 doubles (x,y,z); extension2 start point
- `P5` (System.Double): Pointer to an array of 3 doubles (x,y,z); extension2 end point
- `P6` (System.Double): Pointer to an array of 3 doubles (x,y,z); plane normal
- `TextPoint` (System.Double): Pointer to an array of 3 doubles (x,y,z); position of text
- `TextHeight` (System.Double): Text height in meters

## Return Value

Pointer to IDisplayDimension object

## Remarks

SOLIDWORKS creates this type of dimension between the two points that you specify. It has no relation to your geometry.
This method does not replace
IDrawingDoc::ICreateDiamDim4
; it changes the number of arguments required to construct the
IDisplayDimension
object.

## See Also

- `IDrawingDoc.CreateAngDim4`
- `IDrawingDoc.CreateDiamDim4`
- `IDrawingDoc.CreateLinearDim4`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.ICreateLinearDim4`
- `IDrawingDoc.ICreateOrdinateDim4`