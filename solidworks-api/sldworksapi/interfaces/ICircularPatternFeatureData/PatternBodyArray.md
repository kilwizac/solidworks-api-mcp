---
type: property
interface: ICircularPatternFeatureData
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
  - ICircularPatternFeatureData.BodyPattern
  - ICircularPatternFeatureData.GetPatternBodyCount
  - ICircularPatternFeatureData.IGetPatternBodyArray
  - ICircularPatternFeatureData.ISetPatternBodyArray
keywords:
  - patternbodyarray
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - body
  - array
  - object
readonly: null
---

# ICircularPatternFeatureData.PatternBodyArray

Gets or sets a list of bodies to pattern in a multibody part for this circular pattern feature.

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
ICircularPatternFeatureData::BodyPattern
is true.
See
Accessing Selections that Define Features
for additional details on using this property.

## See Also

- `ICircularPatternFeatureData.BodyPattern`
- `ICircularPatternFeatureData.GetPatternBodyCount`
- `ICircularPatternFeatureData.IGetPatternBodyArray`
- `ICircularPatternFeatureData.ISetPatternBodyArray`