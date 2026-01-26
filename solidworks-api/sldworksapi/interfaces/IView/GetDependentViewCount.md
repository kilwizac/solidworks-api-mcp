---
type: method
interface: IView
member: GetDependentViewCount
returns: System.Int32
parameters:
  -
    name: AllViews
    type: System.Boolean
    description: True to get the number of all of the dependent views in this view, false to get the number of SpecificViewType views in this view
  -
    name: SpecificViewType
    type: System.Int32
    description: Type of dependent view as defined in swDrawingViewTypes_e
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
  - getdependentviewcount
  - count
  - all
  - boolean
  - specific
  - type
  - int32
---

# IView.GetDependentViewCount

Gets the number of all, or only the specified, dependent views (i.e., alternate position, detail, section, etc.) in this view.

## Signature

```csharp
System.Int32 GetDependentViewCount( 
   System.Boolean
AllViews
,
   System.Int32
SpecificViewType
)
```
## Parameters

- `AllViews` (System.Boolean): True to get the number of all of the dependent views in this view, false to get the number of SpecificViewType views in this view
- `SpecificViewType` (System.Int32): Type of dependent view as defined in swDrawingViewTypes_e

## Return Value

Number of dependent views

## Remarks

Call this method before calling
IView::IGetDependentViews
to get the size of the array for that method.

## See Also

- `IView.GetDependentViews`