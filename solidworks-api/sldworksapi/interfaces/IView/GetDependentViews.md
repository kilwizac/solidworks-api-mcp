---
type: method
interface: IView
member: GetDependentViews
returns: System.Object
parameters:
  -
    name: AllViews
    type: System.Boolean
    description: True to get all of the dependent views in this view, false to get only the SpecificViewType views in this view
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
  - IView.GetDependentViewCount
  - IView.IGetDependentViews
keywords:
  - dependent
  - drawing
  - views
  - see
  - also
  - iview
  - view
  - getdependentviews
  - all
  - boolean
  - specific
  - type
  - int32
  - object
---

# IView.GetDependentViews

Gets either all, or only the specified, dependent views in this view.

## Signature

```csharp
System.Object GetDependentViews( 
   System.Boolean
AllViews
,
   System.Int32
SpecificViewType
)
```
## Parameters

- `AllViews` (System.Boolean): True to get all of the dependent views in this view, false to get only the SpecificViewType views in this view
- `SpecificViewType` (System.Int32): Type of dependent view as defined in swDrawingViewTypes_e

## Return Value

Array of dependent views

## See Also

- `IView.GetDependentViewCount`
- `IView.IGetDependentViews`