---
type: property
interface: IMirrorPatternFeatureData
member: FeatureScopeBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMirrorPatternFeatureData.FeatureScope
  - IMirrorPatternFeatureData.GetFeatureScopeBodiesCount
  - IMirrorPatternFeatureData.IGetFeatureScopeBodies
  - IMirrorPatternFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - featurescopebodies
  - imirrorpatternfeaturedata
  - mirror
  - pattern
  - data
  - bodies
  - object
readonly: null
---

# IMirrorPatternFeatureData.FeatureScopeBodies

Gets or sets the solid bodies that the mirror pattern feature affects in a multibody part.

## Signature

```csharp
System.Object FeatureScopeBodies {get; set;}
```
## Parameters

None.

## Return Value

Array of solid bodies that the feature affects

## Remarks

This property is valid only if:
IMirrorPatternFeatureData::GeometryPattern
is true, and
IMirrorPatternFeatureData::FeatureScope
is not
swFeatureScope_e
.swFeatureScope_AllBodies.
You cannot edit this property to null or Nothing after the feature is created with feature scope bodies. If you try,
IFeature::ModifyDefinition
returns true but this property does not change.
For more information, see the
Mirror Feature PropertyManager
topic in the SOLIDWORKS Design user-interface help.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IMirrorPatternFeatureData.FeatureScope`
- `IMirrorPatternFeatureData.GetFeatureScopeBodiesCount`
- `IMirrorPatternFeatureData.IGetFeatureScopeBodies`
- `IMirrorPatternFeatureData.ISetFeatureScopeBodies`