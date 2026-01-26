---
type: property
interface: IBoundaryBossFeatureData
member: FeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBoundaryBossFeatureData.AutoSelect
  - IBoundaryBossFeatureData.FeatureScopeBodies
keywords:
  - featurescopebodiescount
  - iboundarybossfeaturedata
  - boundary
  - boss
  - feature
  - data
  - scope
  - bodies
  - count
  - int32
readonly: true
---

# IBoundaryBossFeatureData.FeatureScopeBodiesCount

Gets the number of bodies that this boundary feature affects in a multibody part.

## Signature

```csharp
System.Int32 FeatureScopeBodiesCount {get;}
```
## Parameters

None.

## Return Value

Number of bodies

## Remarks

This property is only available when
IBoundaryBossFeatureData::FeatureScope
is true.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IBoundaryBossFeatureData.AutoSelect`
- `IBoundaryBossFeatureData.FeatureScopeBodies`