---
type: property
interface: IPropertyManagerPageSelectionbox
member: Mark
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - mark
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - int32
  - select
  - multiple
  - objects
  - selection
  - boxes
  - vb
  - net
  - vba
readonly: null
---

# IPropertyManagerPageSelectionbox.Mark

Gets or sets the mark used on selected items in this selection box.

## Signature

```csharp
System.Int32 Mark {get; set;}
```
## Parameters

None.

## Return Value

Number to use as a mark; this number is used by methods or properties that require ordered entity selection

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.
It is easiest to use the Mark property as a read-only property. If this property is not set before the PropertyManager is shown, then the Mark value is automatically set. Once the PropertyManager page is displayed, then the application can query the Mark for its value.
If the application must rely on specific mark values for specific selection boxes, then the set the Mark value before the PropertyManager page is shown. In this case, ensure that each selection box contains a different value. Otherwise, the user's selection is displayed in the selection boxes that have the same Mark value.
Mark values (whether set by the SOLIDWORKS Design application or by your application) must be powers of two (for example, 1, 2, 4, 8).

## Examples

- Select Multiple Objects for Selection Boxes (C#) (Select_Multiple_Objects_for_Selection_Boxes_Example_CSharp.htm)
- Select Multiple Objects for Selection Boxes (VB.NET) (Select_Multiple_Objects_for_Selection_Boxes_Example_VBNET.htm)
- Select Multiple Objects for Selection Boxes (VBA) (Select_Multiple_Objects_for_Selection_Boxes_Example_VB.htm)