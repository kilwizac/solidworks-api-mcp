---
type: method
interface: IDrawingDoc
member: ICreateAuxiliaryViewAt2
returns: View
parameters:
  -
    name: X
    type: System.Double
    description: X position for the auxiliary view
  -
    name: Y
    type: System.Double
    description: Y position for the auxiliary view
  -
    name: Z
    type: System.Double
    description: Z position for the auxiliary view
  -
    name: NotAligned
    type: System.Boolean
    description: True aligns the view from its owner, false does not
  -
    name: Label
    type: System.String
    description: String that holds label of the auxiliary view
  -
    name: Showarrow
    type: System.Boolean
    description: True shows the arrow, false hides the arrow
  -
    name: Flip
    type: System.Boolean
    description: True flips the side shown in the auxiliary view, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.CreateAuxiliaryViewAt2
  - IDrawingDoc.CreateDetailViewAt3
  - IDrawingDoc.ICreateDetailViewAt3
keywords:
  - auxiliary
  - views
  - drawing
  - see
  - also
  - iview
  - icreateauxiliaryviewat2
  - idrawingdoc
  - doc
  - create
  - view
  - at2
  - double
  - not
  - aligned
  - boolean
  - label
  - string
  - showarrow
  - flip
---

# IDrawingDoc.ICreateAuxiliaryViewAt2

Creates an auxiliary view based on a selected edge in a drawing view.

## Signature

```csharp
View ICreateAuxiliaryViewAt2( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Boolean
NotAligned
,
   System.String
Label
,
   System.Boolean
Showarrow
,
   System.Boolean
Flip
)
```
## Parameters

- `X` (System.Double): X position for the auxiliary view
- `Y` (System.Double): Y position for the auxiliary view
- `Z` (System.Double): Z position for the auxiliary view
- `NotAligned` (System.Boolean): True aligns the view from its owner, false does not
- `Label` (System.String): String that holds label of the auxiliary view
- `Showarrow` (System.Boolean): True shows the arrow, false hides the arrow
- `Flip` (System.Boolean): True flips the side shown in the auxiliary view, false does not

## Return Value

Pointer to the newly created auxiliary view

## See Also

- `IDrawingDoc.CreateAuxiliaryViewAt2`
- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.ICreateDetailViewAt3`