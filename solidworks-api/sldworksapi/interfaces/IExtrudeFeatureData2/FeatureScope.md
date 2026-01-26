---
type: property
interface: IExtrudeFeatureData2
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IExtrudeFeatureData2.AutoSelect
  - IExtrudeFeatureData2.FeatureScopeBodies
  - IExtrudeFeatureData2.GetFeatureScopeBodiesCount
  - IExtrudeFeatureData2.IGetFeatureScopeBodies
  - IExtrudeFeatureData2.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - multibody
  - extrude
  - featurescope
  - iextrudefeaturedata2
  - data2
  - boolean
readonly: null
---

# IExtrudeFeatureData2.FeatureScope

Gets or sets whether to use scope for the extrude feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

When: true, only the specified bodies in the multibody part are affected by the extrude feature false, all of the bodies in the multibody part are affected by the extrude feature

## Remarks

The extrude feature is expanded along the plane on which the feature is created and affects all or only the specified bodies it intersects.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IExtrudeFeatureData2.AutoSelect`
- `IExtrudeFeatureData2.FeatureScopeBodies`
- `IExtrudeFeatureData2.GetFeatureScopeBodiesCount`
- `IExtrudeFeatureData2.IGetFeatureScopeBodies`
- `IExtrudeFeatureData2.ISetFeatureScopeBodies`