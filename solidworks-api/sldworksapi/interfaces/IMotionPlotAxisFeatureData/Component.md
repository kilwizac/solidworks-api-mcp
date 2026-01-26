---
type: property
interface: IMotionPlotAxisFeatureData
member: Component
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related:
  - IMotionPlotAxisFeatureData.ReferencePart
keywords:
  - component
  - imotionplotaxisfeaturedata
  - motion
  - plot
  - axis
  - feature
  - data
  - int32
  - create
  - plots
  - values
  - vb
  - net
  - vba
readonly: null
---

# IMotionPlotAxisFeatureData.Component

Gets or sets the component of the result vector quantity.

## Signature

```csharp
System.Int32 Component {get; set;}
```
## Parameters

None.

## Return Value

Component of the result vector quantity as defined in swMotionPlotAxisComponent_e

## Remarks

Some motion study results, such as linear displacement/velocity results, are a 3D vector where x, y, and z can be the component of the quantity. For example, if you want the x component of the result vector, then set this property to swMotionPlotAxisComponent_X.

## Examples

- Create Plots and Get Values (C#) (Create_Plots_and_Get_Values_Example_CSharp.htm)
- Create Plots and Get Values (VB.NET) (Create_Plots_and_Get_Values_Example_VBNET.htm)
- Create Plots and Get Values (VBA) (Create_Plots_and_Get_Values_Example_VB.htm)

## See Also

- `IMotionPlotAxisFeatureData.ReferencePart`