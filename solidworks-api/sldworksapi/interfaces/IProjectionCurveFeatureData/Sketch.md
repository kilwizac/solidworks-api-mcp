---
type: property
interface: IProjectionCurveFeatureData
member: Sketch
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related:
  - IProjectionCurveFeatureData.Reverse
keywords:
  - sketch
  - iprojectioncurvefeaturedata
  - projection
  - curve
  - feature
  - data
  - object
readonly: null
---

# IProjectionCurveFeatureData.Sketch

Gets or sets the sketch to project in this projection curve feature.

## Signature

```csharp
System.Object Sketch {get; set;}
```
## Parameters

None.

## Return Value

ISketch

## Remarks

You cannot use this property to get or set the target sketch for sketch-on-sketch projection curve features. You can only pre-select the target sketch before creating the feature. See the
IProjectionCurveFeatureData
Remarks.
Use
IFeature::GetSpecificFeature2
to get the ISketch object from the selected
IFeature
object.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IProjectionCurveFeatureData.Reverse`