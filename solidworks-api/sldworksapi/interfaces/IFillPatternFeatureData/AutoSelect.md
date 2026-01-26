---
type: property
interface: IFillPatternFeatureData
member: AutoSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - autoselect
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - auto
  - select
  - boolean
readonly: null
---

# IFillPatternFeatureData.AutoSelect

Gets or sets whether to automatically select all or only specific bodies in a multibody part to be affected by this fill pattern feature.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific bodies

## Remarks

This property is valid only if:
IFillPatternFeatureData::GeometryPattern
is true,
- and -
IFillPatternFeatureData::FeatureScope
is true.
If IFillPatternFeatureData::FeatureScope is set to false, then this property defaults to false.
If this property is set to false, then specify the affected bodies using
IFillPatternFeatureData::FeatureScopeBodies
.
For more information, see the
Fill Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.