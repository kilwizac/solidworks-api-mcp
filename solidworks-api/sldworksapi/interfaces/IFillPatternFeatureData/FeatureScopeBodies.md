---
type: property
interface: IFillPatternFeatureData
member: FeatureScopeBodies
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - featurescopebodies
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - scope
  - bodies
  - object
readonly: null
---

# IFillPatternFeatureData.FeatureScopeBodies

Gets or sets the solid bodies that the fill pattern feature affects in a multibody part.

## Signature

```csharp
System.Object FeatureScopeBodies {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies that the fill pattern feature affects

## Remarks

This property is valid only if:
IFillPatternFeatureData::GeometryPattern
is true,
IFillPatternFeatureData::FeatureScope
is true,
- and -
IFillPatternFeatureData::AutoSelect
is false.
You cannot edit this property to null or Nothing after the feature is created with feature scope bodies. If you try,
IFeature::ModifyDefinition
returns true but this property does not change.
For more information, see the
Fill Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.
See
Accessing Selections that Define Features
for additional details.