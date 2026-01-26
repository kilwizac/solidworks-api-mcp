---
type: method
interface: IDrawingDoc
member: DragModelDimension
returns: void
parameters:
  -
    name: ViewName
    type: System.String
    description: Name of the drawing view to which you want to copy or move the selected model dimension
  -
    name: DropEffect
    type: System.Int16
    description: Copy = 1 Move = 2
  -
    name: X
    type: System.Double
    description: X location in sheet space for the newly copied or moved dimension
  -
    name: Y
    type: System.Double
    description: Y location in sheet space for the newly copied or moved dimension
  -
    name: Z
    type: System.Double
    description: Z location in sheet space for the newly copied or moved dimension; set to 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - drawings
  - ui
related:
  - IDrawingDoc.Dimensions
keywords:
  - dimension
  - see
  - also
  - idimension
  - drawings
  - idrawingdoc
  - dimensions
  - dragmodeldimension
  - drawing
  - doc
  - drag
  - model
  - view
  - name
  - string
  - drop
  - effect
  - int16
  - double
  - void
---

# IDrawingDoc.DragModelDimension

Copies or moves dimensions to a different drawing view.

## Signature

```csharp
void DragModelDimension( 
   System.String
ViewName
,
   System.Int16
DropEffect
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `ViewName` (System.String): Name of the drawing view to which you want to copy or move the selected model dimension
- `DropEffect` (System.Int16): Copy = 1 Move = 2
- `X` (System.Double): X location in sheet space for the newly copied or moved dimension
- `Y` (System.Double): Y location in sheet space for the newly copied or moved dimension
- `Z` (System.Double): Z location in sheet space for the newly copied or moved dimension; set to 0

## Return Value

The ViewName argument cannot be the current view for the dimension.

## See Also

- `IDrawingDoc.Dimensions`