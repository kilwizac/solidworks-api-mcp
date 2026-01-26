---
type: method
interface: IMotionPlotFeatureData
member: IGetYAxis
returns: Feature
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of y-axis features
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - IMotionPlotFeatureData.GetXAxis
  - IMotionPlotFeatureData.GetYAxis
keywords:
  - feature
  - see
  - also
  - ifeature
  - motion
  - study
  - plot
  - axis
  - igetyaxis
  - imotionplotfeaturedata
  - data
  - count
  - int32
---

# IMotionPlotFeatureData.IGetYAxis

Gets y-axis features of a plot.

## Signature

```csharp
Feature IGetYAxis( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of y-axis features

## Return Value

in-process, unmanaged C++: Pointer to an array of y-axis features VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `IMotionPlotFeatureData.GetXAxis`
- `IMotionPlotFeatureData.GetYAxis`