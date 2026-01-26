---
type: property
interface: ILoftFeatureData
member: FeatureScopeBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftFeatureData.AutoSelect
  - ILoftFeatureData.FeatureScope
  - ILoftFeatureData.GetFeatureScopeBodiesCount
  - ILoftFeatureData.IGetFeatureScopeBodies
  - ILoftFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescopebodies
  - iloftfeaturedata
  - loft
  - data
  - bodies
  - object
readonly: null
---

# ILoftFeatureData.FeatureScopeBodies

Gets or sets the solid bodies that the loft feature affects in a multibody part.

## Signature

```csharp
System.Object FeatureScopeBodies {get; set;}
```
## Parameters

None.

## Return Value

Array of solid bodies that the feature affects

## Remarks

See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILoftFeatureData.AutoSelect`
- `ILoftFeatureData.FeatureScope`
- `ILoftFeatureData.GetFeatureScopeBodiesCount`
- `ILoftFeatureData.IGetFeatureScopeBodies`
- `ILoftFeatureData.ISetFeatureScopeBodies`