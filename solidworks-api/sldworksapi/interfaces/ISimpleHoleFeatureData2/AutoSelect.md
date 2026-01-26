---
type: property
interface: ISimpleHoleFeatureData2
member: AutoSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ISimpleHoleFeatureData2.GetFeatureScopeBodiesCount
  - ISimpleHoleFeatureData2.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - autoselect
  - isimpleholefeaturedata2
  - simple
  - hole
  - data2
  - auto
  - select
  - boolean
readonly: null
---

# ISimpleHoleFeatureData2.AutoSelect

Gets or sets whether to automatically select all or only specific bodies for the simple hole feature to affect in a multibody body.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific kadov_tag{{</spaces>}} bodies for ISimpleHoleFeatureData2::FeatureScopeBodies or ISimpleHoleFeatureData2::IGetFeatureScopeBodies EndOLEPropertyRow

## Remarks

Th property is only available when
ISimpleHoleFeatureData2::FeatureScope
is true.

## See Also

- `ISimpleHoleFeatureData2.GetFeatureScopeBodiesCount`
- `ISimpleHoleFeatureData2.IGetFeatureScopeBodies`