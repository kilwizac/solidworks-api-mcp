---
type: method
interface: IDrawingDoc
member: GetFirstView
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ActivateSheet
  - IDrawingDoc.ActivateView
  - IDrawingDoc.ActiveDrawingView
  - IDrawingDoc.IActiveDrawingView
  - IDrawingDoc.IGetFirstView
  - IView.GetNextView
  - IView.IGetNextView
keywords:
  - view
  - see
  - also
  - iview
  - first
  - drawing
  - views
  - drawings
  - idrawingdoc
  - traverse
  - getfirstview
  - doc
  - object
  - change
  - note
  - text
  - vba
  - create
  - section
  - specified
  - location
  - dimension
  - edge
  - crosshatches
  - names
  - types
  - select
  - entity
  - featuremanager
  - design
  - tree
  - notes
  - new
  - existing
  - title
  - block
  - vb
  - net
  - bounding
  - box
  - position
---

# IDrawingDoc.GetFirstView

Gets the first drawing view on the current sheet.

## Signature

```csharp
System.Object GetFirstView()
```
## Parameters

None.

## Return Value

First drawing view in this drawing document

## Remarks

This method might be useful for starting an iteration through all the drawing views on the current sheet.
Because the drawing sheet also has sketch geometry, notes, GTols, and so on, this method returns the current drawing sheet. The next view returned by
IView::GetNextView
is the first drawing view in the current sheet.

## Examples

- Change Note Text (VBA) (Change_Note_Text_Example_VB.htm)
- Create Section View at Specified Location (VBA) (Create_Section_View_at_Specified_Location_Example_VB.htm)
- Dimension Edge in Drawing (VBA) (Dimension_Edge_in_Drawing_Example_VB.htm)
- Get Crosshatches on View (VBA) (Get_Crosshatches_on_View_Example_VB.htm)
- Get Drawing View Names and Types (VBA) (Get_Drawing_View_Names_and_Types_Example_VB.htm)
- Select Entity in Drawing View (VBA) (Select_Entity_in_Drawing_View_Example_VB.htm)
- Traverse Drawing FeatureManager Design Tree (VBA) (Traverse_Drawing_FeatureManager_Design_Tree_Example_VB.htm)
- Get Notes from New or Existing Title Block (C#) (Get_Notes_from_New_or_Existing_Title_Block_Example_CSharp.htm)
- Get Notes from New or Existing Title Block (VB.NET) (Get_Notes_from_New_or_Existing_Title_Block_Example_VBNET.htm)
- Get Notes from New or Existing Title Block (VBA) (Get_Notes_from_New_or_Existing_Title_Block_Example_VB.htm)
- Get View Bounding Box and Position (C#) (Get_View_Bounding_Box_and_Position_Example_CSharp.htm)
- Get View Bounding Box and Position (VB.NET) (Get_View_Bounding_Box_and_Position_Example_VBNET.htm)
- Get View Bounding Box and Position (VBA) (Get_View_Bounding_Box_and_Position_Example_VB.htm)

## See Also

- `IDrawingDoc.ActivateSheet`
- `IDrawingDoc.ActivateView`
- `IDrawingDoc.ActiveDrawingView`
- `IDrawingDoc.IActiveDrawingView`
- `IDrawingDoc.IGetFirstView`
- `IView.GetNextView`
- `IView.IGetNextView`