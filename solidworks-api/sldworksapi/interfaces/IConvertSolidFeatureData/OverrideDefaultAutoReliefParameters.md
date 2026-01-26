---
type: property
interface: IConvertSolidFeatureData
member: OverrideDefaultAutoReliefParameters
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - overridedefaultautoreliefparameters
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - override
  - default
  - auto
  - relief
  - parameters
  - boolean
readonly: null
---

# IConvertSolidFeatureData.OverrideDefaultAutoReliefParameters

Gets or sets whether to override the default sheet metal auto relief parameters such as relief type and relief ratio for this convert solid feature.

## Signature

```csharp
System.Boolean OverrideDefaultAutoReliefParameters {get; set;}
```
## Parameters

None.

## Return Value

True to override the default sheet metal auto relief parameters, false to not

## Remarks

If this property is set to true, you can set:
IConvertSolidFeatureData::ReliefRatio
IConvertSolidFeatureData::ReliefType