---
type: method
interface: IView
member: GetCenterMarks
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - ICenterMark
  - IView.AutoInsertCenterMarks
  - IView.GetCenterMarkCount2
  - IView.GetCenterMarkInfo
  - IView.GetFirstCenterMark
  - IView.IGetCenterMarkInfo
  - IView.IGetCenterMarks
keywords:
  - view
  - see
  - also
  - iview
  - center
  - marks
  - feature
  - ifeature
  - drawing
  - views
  - getcentermarks
  - object
  - list
  - vba
---

# IView.GetCenterMarks

Gets all of the center marks that are features in the view.

## Signature

```csharp
System.Object GetCenterMarks()
```
## Parameters

None.

## Return Value

Centermarks that are features in this view

## Remarks

Center marks are now annotations. Previously, center marks were features. This method returns an empty array for center marks that are annotations; thus, this method is only valid for center marks that are features. See
ICenterMark
for details.

## Examples

- List Center Marks in Drawing (VBA) (List_Center_Marks_in_Drawing_Example_VB.htm)

## See Also

- `ICenterMark`
- `IView.AutoInsertCenterMarks`
- `IView.GetCenterMarkCount2`
- `IView.GetCenterMarkInfo`
- `IView.GetFirstCenterMark`
- `IView.IGetCenterMarkInfo`
- `IView.IGetCenterMarks`