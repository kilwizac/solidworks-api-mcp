---
type: method
interface: IDrawingDoc
member: DropDrawingViewFromPalette
returns: View
parameters:
  -
    name: Layout
    type: System.Int32
    description: ID of the drawing view to move to the drawing sheet
  -
    name: X
    type: System.Double
    description: x coordinate where to drop the drawing view
  -
    name: Y
    type: System.Double
    description: y coordinate where to drop the drawing view
  -
    name: Z
    type: System.Double
    description: z coordinate where to drop the drawing view ; this coordinate is always 0
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - drawings
  - ui
related: []
keywords:
  - dropdrawingviewfrompalette
  - idrawingdoc
  - drawing
  - doc
  - drop
  - view
  - palette
  - layout
  - int32
  - double
---

# IDrawingDoc.DropDrawingViewFromPalette

Obsolete. Superseded by IDrawingDoc::DropDrawingViewFromPalette2.

## Signature

```csharp
View DropDrawingViewFromPalette( 
   System.Int32
Layout
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

- `Layout` (System.Int32): ID of the drawing view to move to the drawing sheet
- `X` (System.Double): x coordinate where to drop the drawing view
- `Y` (System.Double): y coordinate where to drop the drawing view
- `Z` (System.Double): z coordinate where to drop the drawing view ; this coordinate is always 0

## Return Value

Pointer to the IView object