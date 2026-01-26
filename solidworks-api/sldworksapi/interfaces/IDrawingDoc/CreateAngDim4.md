---
type: method
interface: IDrawingDoc
member: CreateAngDim4
returns: System.Object
parameters:
  -
    name: P0
    type: System.Object
    description: Array of 3 doubles (x,y,z); dimension end point
  -
    name: P1
    type: System.Object
    description: Array of 3 doubles (x,y,z); dimension point
  -
    name: P2
    type: System.Object
    description: Array of 3 doubles (x,y,z); extension1 start point
  -
    name: P3
    type: System.Object
    description: Array of 3 doubles (x,y,z); extension1 end point
  -
    name: P4
    type: System.Object
    description: Array of 3 doubles (x,y,z); extension2 start point
  -
    name: P5
    type: System.Object
    description: Array of 3 doubles (x,y,z); extension2 end point
  -
    name: P6
    type: System.Object
    description: Array of 3 doubles (x,y,z); plane normal
  -
    name: TextPoint
    type: System.Object
    description: Array of 3 doubles (x,y,z); position of text
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
  - IDrawingDoc.CreateLinearDim4
  - IDrawingDoc.CreateOrdinateDim4
  - IDrawingDoc.ICreateAngDim4
  - IDrawingDoc.ICreateLinearDim4
  - IDrawingDoc.ICreateOrdinateDim4
keywords:
  - dimension
  - see
  - also
  - idimension
  - angular
  - createangdim4
  - idrawingdoc
  - drawing
  - doc
  - create
  - ang
  - dim4
  - p0
  - object
  - p1
  - p2
  - p3
  - p4
  - p5
  - p6
  - text
  - point
  - height
  - double
---

# IDrawingDoc.CreateAngDim4

Creates a non-associative angular dimension.

## Signature

```csharp
System.Object CreateAngDim4( 
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
   System.Object
P6
,
   System.Object
TextPoint
,
   System.Double
TextHeight
)
```
## Parameters

- `P0` (System.Object): Array of 3 doubles (x,y,z); dimension end point
- `P1` (System.Object): Array of 3 doubles (x,y,z); dimension point
- `P2` (System.Object): Array of 3 doubles (x,y,z); extension1 start point
- `P3` (System.Object): Array of 3 doubles (x,y,z); extension1 end point
- `P4` (System.Object): Array of 3 doubles (x,y,z); extension2 start point
- `P5` (System.Object): Array of 3 doubles (x,y,z); extension2 end point
- `P6` (System.Object): Array of 3 doubles (x,y,z); plane normal
- `TextPoint` (System.Object): Array of 3 doubles (x,y,z); position of text
- `TextHeight` (System.Double): Text height in meters

## Return Value

Newly created display dimension

## Remarks

SOLIDWORKS creates this type of dimension between the two points that you specify. It has no relation to your geometry.
This method does not replace
IDrawingDoc::CreateDiamDim4
or
IDrawingDoc::ICreateDiamDim4
; it changes the number of arguments required to construct the
IDisplayDimension
object.

## See Also

- `IDrawingDoc.CreateLinearDim4`
- `IDrawingDoc.CreateOrdinateDim4`
- `IDrawingDoc.ICreateAngDim4`
- `IDrawingDoc.ICreateLinearDim4`
- `IDrawingDoc.ICreateOrdinateDim4`