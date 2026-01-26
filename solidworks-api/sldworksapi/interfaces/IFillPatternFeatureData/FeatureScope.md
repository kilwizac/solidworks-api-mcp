---
type: property
interface: IFillPatternFeatureData
member: FeatureScope
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillPatternFeatureData.AutoSelect
keywords:
  - featurescope
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - scope
  - boolean
readonly: null
---

# IFillPatternFeatureData.FeatureScope

Gets or sets whether to use scope for this fill pattern feature in a multibody part.

## Signature

```csharp
System.Boolean FeatureScope {get; set;}
```
## Parameters

None.

## Return Value

True if only specified bodies in a multibody part are affected by the fill pattern feature; false if all the bodies are affected

## Remarks

This property is valid only if
IFillPatternFeatureData::GeometryPattern
is true.
If this property is true, you can use
IFillPatternFeatureData::AutoSelect
and
IFillPatternFeatureData::FeatureScopeBodies
to specify affected bodies.
For more information, see the
Fill
Pattern PropertyManager
topic in the SOLIDWORKS Design user-interface help.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IFillPatternFeatureData.AutoSelect`