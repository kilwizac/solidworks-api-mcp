---
type: property
interface: IMacroFeatureData
member: FeatureTransform
returns: MathTransform
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetEditTargetTransform
  - IMacroFeatureData.PatternTransform
keywords:
  - featuretransform
  - imacrofeaturedata
  - macro
  - feature
  - data
  - transform
  - math
readonly: null
---

# IMacroFeatureData.FeatureTransform

Gets and sets the macro feature transform.

## Signature

```csharp
MathTransform FeatureTransform {get; set;}
```
## Parameters

None.

## Return Value

Math transform

## Remarks

See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `IMacroFeatureData.GetEditTargetTransform`
- `IMacroFeatureData.PatternTransform`