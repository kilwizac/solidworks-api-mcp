---
type: method
interface: ISheet
member: GetViews
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - sheet
  - see
  - also
  - isheet
  - views
  - traverse
  - view
  - iview
  - sheets
  - getviews
  - object
  - table
  - anchor
  - hole
  - vb
  - net
  - vba
---

# ISheet.GetViews

Gets the drawing views on this sheet.

## Signature

```csharp
System.Object GetViews()
```
## Parameters

None.

## Return Value

Array of drawing views on this sheet

## Remarks

If this sheet is:
Active, this method returns the drawing views, standard orientation views selected when the view was created, and any named views.
Not active, this method returns only the drawing views.

## Examples

- Get and Set Table Anchor of Hole Table (C#) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_CSharp.htm)
- Get and Set Table Anchor of Hole Table (VB.NET) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VBNET.htm)
- Get and Set Table Anchor of Hole Table (VBA) (Get_and_Set_Table_Anchor_of_Hole_Table_Example_VB.htm)