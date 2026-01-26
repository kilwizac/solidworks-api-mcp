---
type: property
interface: IMotionPlotAxisFeatureData
member: ReferencePart
returns: Component2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - parts
related: []
keywords:
  - referencepart
  - imotionplotaxisfeaturedata
  - motion
  - plot
  - axis
  - feature
  - data
  - reference
  - part
  - component2
readonly: null
---

# IMotionPlotAxisFeatureData.ReferencePart

Gets or sets the result component.

## Signature

```csharp
Component2 ReferencePart {get; set;}
```
## Parameters

None.

## Return Value

Result component

## Remarks

A component is one of the vector elements. To define a vector, you need to specify a coordinate frame. You can select a part or a subassembly to define the vector with regards to the origin coordinate system of the selected part or subassembly. If nothing is selected, then the top assembly's coordinate system is used to define the vector.