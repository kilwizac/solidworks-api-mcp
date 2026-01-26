---
type: property
interface: IDerivedPatternFeatureData
member: SeedPosition
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - seedposition
  - iderivedpatternfeaturedata
  - derived
  - pattern
  - feature
  - data
  - seed
  - position
  - int32
  - create
  - vb
  - net
  - vba
readonly: null
---

# IDerivedPatternFeatureData.SeedPosition

Gets or sets which pattern instance to use as the seed feature for this derived pattern feature.

## Signature

```csharp
System.Int32 SeedPosition {get; set;}
```
## Parameters

None.

## Return Value

Pattern instance to use as the seed feature (see Remarks )

## Remarks

The seed position is the index of a pattern instance, feature, or component that is part of an existing pattern and is used to drive the derived pattern feature.
The total number of seed positions = total number of pattern instances in the pattern used to create the derived pattern feature.
If the pattern used to create the derived pattern has pattern instances in Direction 1 and Direction 2, then the total number of seed positions = ((Number pattern instances in Direction 1) * (Number pattern instances in Direction 2) - 1).
Setting the seed position outside of the range of pattern instances is silently rejected, and the seed position remains unchanged.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Create Derived Pattern Feature (C#) (Create_Derived_Pattern_Feature_Example_CSharp.htm)
- Create Derived Pattern Feature (VB.NET) (Create_Derived_Pattern_Feature_Example_VBNET.htm)
- Create Derived Pattern Feature (VBA) (Create_Derived_Pattern_Feature_Example_VB.htm)