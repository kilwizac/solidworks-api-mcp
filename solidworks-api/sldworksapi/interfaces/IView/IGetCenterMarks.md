---
type: method
interface: IView
member: IGetCenterMarks
returns: CenterMark
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of center marks that are features in the view
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
  - IView.IGetCenterMarkInfo
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
  - igetcentermarks
  - count
  - int32
  - mark
---

# IView.IGetCenterMarks

Gets all of the center marks that are features in the view.

## Signature

```csharp
CenterMark IGetCenterMarks( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of center marks that are features in the view

## Return Value

in-process, unmanaged C++: Pointer to an array of centermarks that are features in this view VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IView::GetCenterMarkCount2
to get the value for Count.
Center marks are now annotations. Previously, center marks were features. This method returns an empty array for center marks that are annotations; thus, this method is only valid for center marks that are features. See
ICenterMark
for details.

## See Also

- `ICenterMark`
- `IView.AutoInsertCenterMarks`
- `IView.GetCenterMarkInfo`
- `IView.GetCenterMarks`
- `IView.IGetCenterMarkInfo`