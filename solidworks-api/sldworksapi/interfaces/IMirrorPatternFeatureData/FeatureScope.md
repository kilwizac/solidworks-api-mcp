---
type: property
interface: IMirrorPatternFeatureData
member: FeatureScope
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMirrorPatternFeatureData.FeatureScopeBodies
  - IMirrorPatternFeatureData.GetFeatureScopeBodiesCount
  - IMirrorPatternFeatureData.IGetFeatureScopeBodies
  - IMirrorPatternFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescope
  - imirrorpatternfeaturedata
  - mirror
  - pattern
  - data
  - int32
readonly: null
---

# IMirrorPatternFeatureData.FeatureScope

Gets or sets whether to use scope for the mirror pattern feature in a multibody part.

## Signature

```csharp
System.Int32 FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

Feature scope option as defined in swFeatureScope_e

## Remarks

This property is valid only if
IMirrorPatternFeatureData::GeometryPattern
is true.
If this property is set to either swFeatureScope_SelectedBodiesWithAutoSelect or swFeatureScope_SelectedBodiesWithOutAutoSelect, you can use
IMirrorPatternFeatureData::FeatureScopeBodies
to specify affected bodies.
For more information, see the
Mirror Feature PropertyManager
topic in the SOLIDWORKS Design user-interface help.

## See Also

- `IMirrorPatternFeatureData.FeatureScopeBodies`
- `IMirrorPatternFeatureData.GetFeatureScopeBodiesCount`
- `IMirrorPatternFeatureData.IGetFeatureScopeBodies`
- `IMirrorPatternFeatureData.ISetFeatureScopeBodies`