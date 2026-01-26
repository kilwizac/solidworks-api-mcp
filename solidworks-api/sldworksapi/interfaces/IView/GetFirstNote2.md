---
type: method
interface: IView
member: GetFirstNote2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - INote.GetNext
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - notes
  - note
  - inote
  - view
  - getfirstnote2
  - first
  - note2
  - object
  - change
  - text
  - vba
  - all
  - template
  - select
  - silhouette
  - edge
  - attached
  - vb
  - net
---

# IView.GetFirstNote2

Gets the first note in the view.

## Signature

```csharp
System.Object GetFirstNote2()
```
## Parameters

None.

## Return Value

First note

## Remarks

This method obsoletes IView::GetFirstNote by supporting inactive sheets.
The sheet must be visible. See
ISheet::SheetFormatVisible
.

## Examples

- Change Note Text (VBA) (Change_Note_Text_Example_VB.htm)
- Get All Notes in Drawing Template (VBA) (Get_All_Notes_in_Drawing_Template_Example_VB.htm)
- Select Silhouette Edge Attached to Note (VBA) (Select_Silhouette_Edge_Attached_to_Note_Example_VB.htm)
- Select Silhouette Edge Attached to Note (VB.NET) (Select_Silhouette_Edge_Attached_to_Note_Example_VBNET.htm)
- Select Silhouette Edge Attached to Note (C#) (Select_Silhouette_Edge_Attached_to_Note_Example_CSharp.htm)

## See Also

- `INote.GetNext`