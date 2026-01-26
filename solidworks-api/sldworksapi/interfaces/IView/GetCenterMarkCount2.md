---
type: method
interface: IView
member: GetCenterMarkCount2
returns: System.Int32
parameters:
  -
    name: Size
    type: System.Int32
    description: Not used
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - ICenterMark
  - IView.AutoInsertCenterMarks
  - IView.GetCenterMarkInfo
  - IView.GetCenterMarks
  - IView.GetFirstCenterMark
  - IView.IGetCenterMarkInfo
  - IView.IGetCenterMarks
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - center
  - marks
  - view
  - feature
  - ifeature
  - getcentermarkcount2
  - mark
  - count2
  - size
  - int32
---

# IView.GetCenterMarkCount2

Gets the number of center marks that are features in the view.

## Signature

```csharp
System.Int32 GetCenterMarkCount2( 
   out System.Int32
Size
)
```
## Parameters

- `Size` (System.Int32): Not used

## Return Value

Number of center marks in the view

## Remarks

Center marks are now annotations. Previously, center marks were features. This method is only valid for center marks that are features.
One difference between this method and the now obsolete
IView::GetCenterMarkCount
is that this method also works if this view represents the drawing sheet. The original method always returns 0 if this view is the drawing sheet.
Call this method before calling
IView::IGetCenterMarks
to get the size of the array for that method.

## See Also

- `ICenterMark`
- `IView.AutoInsertCenterMarks`
- `IView.GetCenterMarkInfo`
- `IView.GetCenterMarks`
- `IView.GetFirstCenterMark`
- `IView.IGetCenterMarkInfo`
- `IView.IGetCenterMarks`