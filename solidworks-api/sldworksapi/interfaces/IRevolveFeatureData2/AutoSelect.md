---
type: property
interface: IRevolveFeatureData2
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
  - IRevolveFeatureData2.GetFeatureScopeBodiesCount
  - IRevolveFeatureData2.IGetFeatureScopeBodies
keywords:
  - feature
  - scope
  - autoselect
  - irevolvefeaturedata2
  - revolve
  - data2
  - auto
  - select
  - boolean
readonly: null
---

# IRevolveFeatureData2.AutoSelect

Gets or sets whether to automatically select all or only specific bodies for the revolve feature to affect in a multibody body.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific bodies for IRevolveFeatureData2::FeatureScopeBodies or IRevolveFeatureData2::ISetFeatureScopeBodies

## Remarks

This property is only available when the
IRevolveFeatureData2::FeatureScope
property is true. The revolve feature is expanded along the plane on which the feature is created and selects all or only the specified bodies it intersects.

## See Also

- `IRevolveFeatureData2.GetFeatureScopeBodiesCount`
- `IRevolveFeatureData2.IGetFeatureScopeBodies`