---
type: property
interface: ICircularPatternFeatureData
member: Axis
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICircularPatternFeatureData.VarySketch
keywords:
  - axis
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - object
readonly: null
---

# ICircularPatternFeatureData.Axis

Gets or sets the entity used to determine the direction of this circular pattern feature.

## Signature

```csharp
System.Object Axis {get; set;}
```
## Parameters

None.

## Return Value

Direction entity (see Remarks )

## Remarks

This property returns Nothing or null if you do not call
ICircularPatternFeatureData::AccessSelections
before using this property.
If
ICircularPatternFeatureData::GetAxisType
returns reference axis, use
IFeature::GetSpecificFeature2
to get
IRefAxis
.

## See Also

- `ICircularPatternFeatureData.VarySketch`