---
type: property
interface: ICircularPatternFeatureData
member: VarySketch
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - varysketch
  - icircularpatternfeaturedata
  - circular
  - pattern
  - feature
  - data
  - vary
  - sketch
  - boolean
readonly: null
---

# ICircularPatternFeatureData.VarySketch

Gets or sets whether to allow pattern instances of a seed sketch to vary in relation to the base part in this circular pattern.

## Signature

```csharp
System.Boolean VarySketch {get; set;}
```
## Parameters

None.

## Return Value

True to allow the pattern instances of a seed sketch to vary in relation to enclosing geometry, false to not

## Remarks

This property is valid only when creating a pattern from a seed sketch.
The seed sketch has:
An enclosing boundary of base geometry.
Fully defined relations.
Dimensions only for measurements that will not vary in the pattern instances.
A driving dimension that is used to specify the direction of the circular pattern.
If this property is true:
Specify
ICircularPatternFeatureData::Axis
with a driving dimension of the seed sketch.
Pattern instances vary with and are constrained by the enclosing geometry.
See the
SOLIDWORKS Help > Parts and Features > Features > Patterns and Mirroring > Control and Modify Patterns >
Vary Sketch
topic.
See
Accessing Selections that Define Features
for additional details on using this property.