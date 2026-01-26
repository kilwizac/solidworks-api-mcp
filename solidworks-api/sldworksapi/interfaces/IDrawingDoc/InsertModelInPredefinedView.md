---
type: method
interface: IDrawingDoc
member: InsertModelInPredefinedView
returns: System.Boolean
parameters:
  -
    name: ModelName
    type: System.String
    description: Name of the model to insert into the predefined drawing views in the active drawing sheet
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ActivateView
  - IDrawingDoc.ActiveDrawingView
  - IDrawingDoc.CreateViewport3
  - IDrawingDoc.GetFirstView
  - IDrawingDoc.HideShowDrawingViews
  - IDrawingDoc.IActiveDrawingView
  - IDrawingDoc.IGetFirstView
  - IDrawingDoc.ReplaceViewModel
  - IDrawingDoc.SuppressView
  - IDrawingDoc.UnsuppressView
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - models
  - insertmodelinpredefinedview
  - idrawingdoc
  - doc
  - insert
  - model
  - predefined
  - view
  - name
  - string
  - boolean
---

# IDrawingDoc.InsertModelInPredefinedView

Inserts the model into the predefined drawing views in the active drawing sheet.

## Signature

```csharp
System.Boolean InsertModelInPredefinedView( 
   System.String
ModelName
)
```
## Parameters

- `ModelName` (System.String): Name of the model to insert into the predefined drawing views in the active drawing sheet

## Return Value

True if the model is inserted, false if not

## Remarks

If you...
Then...
Preselect drawing views
This method inserts the model in those predefined drawing views.
Do not preselect any drawing views
This method inserts the model in all predefined views in the drawing.
Specify an empty filename
SOLIDWORKS prompts the user for the desired model's
filename.
Specify a filename
SOLIDWORKS inserts that model into the predefined drawing views, without displaying any dialogs.
If the model is not already open, SOLIDWORKS attempts to open it hidden.

## See Also

- `IDrawingDoc.ActivateView`
- `IDrawingDoc.ActiveDrawingView`
- `IDrawingDoc.CreateViewport3`
- `IDrawingDoc.GetFirstView`
- `IDrawingDoc.HideShowDrawingViews`
- `IDrawingDoc.IActiveDrawingView`
- `IDrawingDoc.IGetFirstView`
- `IDrawingDoc.ReplaceViewModel`
- `IDrawingDoc.SuppressView`
- `IDrawingDoc.UnsuppressView`