---
type: property
interface: ILocalSketchPatternFeatureData
member: SelectedPoint
returns: SketchPoint
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
  - sketches
related:
  - ILocalSketchPatternFeatureData.GetReferencePointType
keywords:
  - selectedpoint
  - ilocalsketchpatternfeaturedata
  - local
  - sketch
  - pattern
  - feature
  - data
  - selected
  - point
readonly: null
---

# ILocalSketchPatternFeatureData.SelectedPoint

Gets or sets the selected point for this sketch-driven component pattern feature.

## Signature

```csharp
SketchPoint SelectedPoint {get; set;}
```
## Parameters

None.

## Return Value

Point

## Remarks

This property is valid only if
ILocalSketchPatternFeatureData::ReferencePoint
is set to
swLocalSketchPatternReferencePoint_e
.swLocalSketchPatternSelectedPoint.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILocalSketchPatternFeatureData.GetReferencePointType`