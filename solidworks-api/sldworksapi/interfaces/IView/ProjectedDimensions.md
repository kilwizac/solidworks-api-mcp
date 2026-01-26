---
type: property
interface: IView
member: ProjectedDimensions
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - ui
related:
  - IView.GetDimensionCount4
  - IView.GetDimensionIds4
  - IView.GetDimensionInfo6
  - IView.GetDimensionString4
  - IView.IGetDimensionIds4
  - IView.IGetDimensionInfo6
  - IView.IGetDimensionString4
keywords:
  - dimension
  - see
  - also
  - idimension
  - drawing
  - views
  - iview
  - dimensions
  - view
  - projecteddimensions
  - projected
  - boolean
readonly: null
---

# IView.ProjectedDimensions

Gets or sets whether dimensions in this view are true or projected.

## Signature

```csharp
System.Boolean ProjectedDimensions {get; set;}
```
## Parameters

None.

## Return Value

True if the dimensions in this drawing view are projected measurements, false if the dimensions in this drawing view are true measurements

## Remarks

Existing dimensions in this drawing view are deleted when this property is changed.

## See Also

- `IView.GetDimensionCount4`
- `IView.GetDimensionIds4`
- `IView.GetDimensionInfo6`
- `IView.GetDimensionString4`
- `IView.IGetDimensionIds4`
- `IView.IGetDimensionInfo6`
- `IView.IGetDimensionString4`