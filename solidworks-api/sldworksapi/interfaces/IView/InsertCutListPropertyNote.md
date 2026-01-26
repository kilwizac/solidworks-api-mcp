---
type: property
interface: IView
member: InsertCutListPropertyNote
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate of the note
  -
    name: Y
    type: System.Double
    description: y coordinate of the note
  -
    name: Z
    type: System.Double
    description: z coordinate of the note
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related: []
keywords:
  - cut
  - lists
  - note
  - see
  - also
  - inote
  - sheet
  - metal
  - isheetmetalfeaturedata
  - insertcutlistpropertynote
  - iview
  - view
  - insert
  - list
  - double
  - void
  - item
  - vba
  - vb
  - net
readonly: null
---

# IView.InsertCutListPropertyNote

Inserts a note that contains all of the cut list item properties of a sheet metal part.

## Signature

```csharp
void InsertCutListPropertyNote( 
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

- `X` (System.Double): x coordinate of the note
- `Y` (System.Double): y coordinate of the note
- `Z` (System.Double): z coordinate of the note

## Return Value

Unknown.

## Remarks

This method requires a flat pattern drawing view.

## Examples

- Insert Cut List Item Property Note (VBA) (Insert_Cut_List_Item_Property_Note_Example_VB.htm)
- Insert Cut List Item Property Note (VB.NET) (Insert_Cut_List_Item_Property_Note_Example_VBNET.htm)
- Insert Cut List Item Property Note (C#) (Insert_Cut_List_Item_Property_Note_Example_CSharp.htm)