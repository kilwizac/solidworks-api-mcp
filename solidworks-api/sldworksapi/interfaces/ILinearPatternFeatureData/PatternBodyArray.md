---
type: property
interface: ILinearPatternFeatureData
member: PatternBodyArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ILinearPatternFeatureData.GetPatternBodyCount
  - ILinearPatternFeatureData.IGetPatternBodyArray
  - ILinearPatternFeatureData.ISetPatternBodyArray
keywords:
  - patternbodyarray
  - ilinearpatternfeaturedata
  - linear
  - pattern
  - feature
  - data
  - body
  - array
  - object
readonly: null
---

# ILinearPatternFeatureData.PatternBodyArray

Gets or sets the seed bodies in this linear pattern feature.

## Signature

```csharp
System.Object PatternBodyArray {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies to pattern

## Remarks

This property is valid only if:
you have a multilbody part,
- and -
ILinearPatternFeatureData::BodyPattern
is true.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ILinearPatternFeatureData.GetPatternBodyCount`
- `ILinearPatternFeatureData.IGetPatternBodyArray`
- `ILinearPatternFeatureData.ISetPatternBodyArray`