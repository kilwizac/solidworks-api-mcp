---
type: property
interface: IFillPatternFeatureData
member: PatternDirection
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - patterndirection
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - direction
  - object
readonly: null
---

# IFillPatternFeatureData.PatternDirection

Gets or sets the direction reference for the layout of this fill pattern feature.

## Signature

```csharp
System.Object PatternDirection {get; set;}
```
## Parameters

None.

## Return Value

Direction reference for the pattern layout

## Remarks

Before calling this property, call
IFillPatternFeatureData::PatternDirectionType
to get the type of pattern direction reference returned by this property. If this property is not specified, SOLIDWORKS chooses an appropriate reference for the specified
IFillPatternFeatureData::PatternLayoutType
.