---
type: method
interface: IDrawingDoc
member: ActivateView
returns: System.Boolean
parameters:
  -
    name: ViewName
    type: System.String
    description: Name of the drawing view
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.GetFirstView
  - IDrawingDoc.IGetFirstView
  - IView.GetNextView
  - IView.IGetNextView
keywords:
  - activate
  - drawing
  - views
  - see
  - also
  - iview
  - activateview
  - idrawingdoc
  - doc
  - view
  - name
  - string
  - boolean
  - each
  - current
  - sheet
  - vba
  - create
  - detail
  - insert
  - autoballoons
  - using
  - autoballoon2
  - undo
  - deleted
  - note
  - fire
  - post
  - notify
  - vb
  - net
  - model
  - annotations
---

# IDrawingDoc.ActivateView

Activates the specified drawing view.

## Signature

```csharp
System.Boolean ActivateView( 
   System.String
ViewName
)
```
## Parameters

- `ViewName` (System.String): Name of the drawing view

## Return Value

True if successful, false if not

## Remarks

This method returns false when trying to activate a drawing sheet. To activate a drawing sheet, use
IDrawingDoc::ActivateSheet
.

## Examples

- Activate Each View on Current Sheet (VBA) (Activate_Each_View_on_Current_Sheet_Example_VB.htm)
- Create Detail View (VBA) (Create_Detail_View_Example_VB.htm)
- Insert Autoballoons Using IDrawingDoc::AutoBalloon2 (VBA) (Insert_Autoballoons_Example_VB_AutoBalloon2_VB.htm)
- Undo Deleted Note and Fire Undo Post-Notify Event (VB.NET) (Undo_Deleted_Note_and_Fire_Undo_Post-Notify_Event_Example_VBNET.htm)
- Undo Deleted Note and Fire Undo Post-Notify Event (C#) (Undo_Deleted_Note_and_Fire_Undo_Post-Notify_Event_Example_CSharp.htm)
- Undo Deleted Note and Fire Undo Post-Notify Event (VBA) (Undo_Deleted_Note_and_Fire_Undo_Post-Notify_Event_Example_VB.htm)
- Insert Model Annotations (C#) (Insert_Model_Annotations_Example_CSharp.htm)
- Insert Model Annotations (VB.NET) (Insert_Model_Annotations_Example_VBNET.htm)
- Insert Model Annotations (VBA) (Insert_Model_Annotations_Example_VB.htm)

## See Also

- `IDrawingDoc.GetFirstView`
- `IDrawingDoc.IGetFirstView`
- `IView.GetNextView`
- `IView.IGetNextView`