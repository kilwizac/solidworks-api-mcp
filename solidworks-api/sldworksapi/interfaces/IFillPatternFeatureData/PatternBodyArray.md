---
type: property
interface: IFillPatternFeatureData
member: PatternBodyArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - patternbodyarray
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - body
  - array
  - object
readonly: null
---

# IFillPatternFeatureData.PatternBodyArray

Gets or sets the array of bodies to pattern in this fill pattern feature.

## Signature

```csharp
System.Object PatternBodyArray {get; set;}
```
## Parameters

None.

## Return Value

Array of IBody2 s to pattern

## Remarks

This property is valid only if
IFillPatternFeatureData::PatternElement
is
swPatternElementSelection_e
.swBodiesToPattern.