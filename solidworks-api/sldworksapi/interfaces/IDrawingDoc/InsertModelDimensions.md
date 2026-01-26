---
type: method
interface: IDrawingDoc
member: InsertModelDimensions
returns: void
parameters:
  -
    name: Option
    type: System.Int32
    description: 0 - All dimensions in the view 1 - All dimensions of the currently selected component (for assembly drawings) 2 - All dimensions of the currently selected feature 3 - All dimensions of the assembly
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
  - IDrawingDoc.DragModelDimension
  - IDrawingDoc.HideShowDimensions
  - IDrawingDoc.InsertModelAnnotations3
  - IDrawingDoc.InsertRefDim
keywords:
  - dimension
  - see
  - also
  - idimension
  - drawings
  - idrawingdoc
  - dimensions
  - drawing
  - views
  - iview
  - insertmodeldimensions
  - doc
  - insert
  - model
  - option
  - int32
  - void
---

# IDrawingDoc.InsertModelDimensions

Inserts model dimensions into the selected drawing view according to the option specified.

## Signature

```csharp
void InsertModelDimensions( 
   System.Int32
Option
)
```
## Parameters

- `Option` (System.Int32): 0 - All dimensions in the view 1 - All dimensions of the currently selected component (for assembly drawings) 2 - All dimensions of the currently selected feature 3 - All dimensions of the assembly

## Return Value

Unknown.

## Remarks

The
Insert Model Items
dialog is not displayed.

## See Also

- `IDrawingDoc.Dimensions`
- `IDrawingDoc.DragModelDimension`
- `IDrawingDoc.HideShowDimensions`
- `IDrawingDoc.InsertModelAnnotations3`
- `IDrawingDoc.InsertRefDim`