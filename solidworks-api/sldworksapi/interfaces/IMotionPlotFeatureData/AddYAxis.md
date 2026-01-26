---
type: method
interface: IMotionPlotFeatureData
member: AddYAxis
returns: System.Boolean
parameters:
  -
    name: YAxis
    type: MotionPlotAxisFeatureData
    description: Y-axis feature data
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - IMotionPlotFeatureData.GetYAxis
  - IMotionPlotFeatureData.IGetYAxis
keywords:
  - addyaxis
  - imotionplotfeaturedata
  - motion
  - plot
  - feature
  - data
  - add
  - axis
  - boolean
---

# IMotionPlotFeatureData.AddYAxis

Adds y-axis feature to a plot.

## Signature

```csharp
System.Boolean AddYAxis( 
   MotionPlotAxisFeatureData
YAxis
)
```
## Parameters

- `YAxis` (MotionPlotAxisFeatureData): Y-axis feature data

## Return Value

True if y-axis feature is added to the plot, false if not

## See Also

- `IMotionPlotFeatureData.GetYAxis`
- `IMotionPlotFeatureData.IGetYAxis`