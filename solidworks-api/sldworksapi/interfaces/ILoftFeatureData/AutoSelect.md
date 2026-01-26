---
type: property
interface: ILoftFeatureData
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
  - ILoftFeatureData.GetFeatureScopeBodiesCount
  - ILoftFeatureData.IGetFeatureScopeBodies
keywords:
  - autoselect
  - iloftfeaturedata
  - loft
  - feature
  - data
  - auto
  - select
  - boolean
readonly: null
---

# ILoftFeatureData.AutoSelect

Gets or sets whether to automatically select all or only specific bodies for the loft feature to affect in a multibody part.

## Signature

```csharp
System.Boolean AutoSelect {get; set;}
```
## Parameters

None.

## Return Value

True to automatically select all bodies, false to select specific bodies for ILoftFeatureData::FeatureScopeBodies or ILoftFeatureData::ISetFeatureScopeBodies

## Remarks

This property is only available when the
ILoftFeatureData::FeatureScope
property is true. The loft feature is expanded along the plane on which the feature is created and selects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `ILoftFeatureData.GetFeatureScopeBodiesCount`
- `ILoftFeatureData.IGetFeatureScopeBodies`