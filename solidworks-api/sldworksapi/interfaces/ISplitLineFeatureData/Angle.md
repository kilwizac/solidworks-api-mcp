---
type: property
interface: ISplitLineFeatureData
member: Angle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISplitLineFeatureData.SplitType
keywords:
  - angle
  - isplitlinefeaturedata
  - split
  - line
  - feature
  - data
  - double
readonly: null
---

# ISplitLineFeatureData.Angle

Gets or sets the angle by which to project the split line feature.

## Signature

```csharp
System.Double Angle {get; set;}
```
## Parameters

None.

## Return Value

Angle in radians by which to project the split line feature

## Remarks

This property is valid only if
ISplitLineFeatureData::GetType
is set to
swSplitLineFeatureType_e
.swSplitLineFeatureType_Draft.

## See Also

- `ISplitLineFeatureData.SplitType`