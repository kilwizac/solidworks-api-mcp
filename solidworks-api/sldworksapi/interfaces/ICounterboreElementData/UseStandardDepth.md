---
type: property
interface: ICounterboreElementData
member: UseStandardDepth
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IAdvancedHoleElementData.OffsetReverseDirection
keywords:
  - usestandarddepth
  - icounterboreelementdata
  - counterbore
  - element
  - data
  - use
  - standard
  - depth
  - boolean
readonly: null
---

# ICounterboreElementData.UseStandardDepth

Gets or sets whether to use the standard offset distance for the end condition of this counterbore hole element.

## Signature

```csharp
System.Boolean UseStandardDepth {get; set;}
```
## Parameters

None.

## Return Value

True to use the standard offset distance, false to not (see Remarks )

## Remarks

This property is valid only if
IAdvancedHoleFeatureData::UseBaselineDimensions
is set to true.
If this property is set to false, then use
IAdvancedHoleElementData::OffsetDistance
to set the custom offset distance.

## See Also

- `IAdvancedHoleElementData.OffsetReverseDirection`