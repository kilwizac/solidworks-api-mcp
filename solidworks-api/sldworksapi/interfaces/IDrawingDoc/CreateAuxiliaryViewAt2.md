---
type: method
interface: IDrawingDoc
member: CreateAuxiliaryViewAt2
returns: System.Object
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
  - IDrawingDoc.CreateDetailViewAt3
  - IDrawingDoc.ICreateAuxiliaryViewAt2
  - IDrawingDoc.ICreateDetailViewAt3
keywords:
  - auxiliary
  - views
  - drawing
  - see
  - also
  - iview
  - createauxiliaryviewat2
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
  - object
---

# IDrawingDoc.CreateAuxiliaryViewAt2

Creates an auxiliary view based on a selected edge in a drawing view.

## Signature

```csharp
System.Object CreateAuxiliaryViewAt2( 
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

Newly created auxiliary view

## See Also

- `IDrawingDoc.CreateDetailViewAt3`
- `IDrawingDoc.ICreateAuxiliaryViewAt2`
- `IDrawingDoc.ICreateDetailViewAt3`