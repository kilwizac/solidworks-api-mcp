---
type: method
interface: IView
member: IGetDependentViews
returns: View
parameters:
  -
    name: AllViews
    type: System.Boolean
    description: True to get all of the dependent views in this view, false to get only the SpecificViewType views in this view
  -
    name: SpecificViewType
    type: System.Int32
    description: Type of dependent view as defined in swDrawingViewTypes_e
  -
    name: DependentViewCount
    type: System.Int32
    description: Number of dependent views
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.GetDependentViews
keywords:
  - dependent
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - igetdependentviews
  - all
  - boolean
  - specific
  - type
  - int32
  - count
---

# IView.IGetDependentViews

Gets either all, or only the specified, dependent views in this view.

## Signature

```csharp
View IGetDependentViews( 
   System.Boolean
AllViews
,
   System.Int32
SpecificViewType
,
   System.Int32
DependentViewCount
)
```
## Parameters

- `AllViews` (System.Boolean): True to get all of the dependent views in this view, false to get only the SpecificViewType views in this view
- `SpecificViewType` (System.Int32): Type of dependent view as defined in swDrawingViewTypes_e
- `DependentViewCount` (System.Int32): Number of dependent views

## Return Value

Array of dependent views

## Remarks

Call
IView::GetDependentViewCount
before calling this method to get the value of DependentViewCount.

## See Also

- `IView.GetDependentViews`