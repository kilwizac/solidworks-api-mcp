---
type: method
interface: ILocalLinearPatternFeatureData
member: ModifyInstance
returns: System.Boolean
parameters:
  -
    name: Instance
    type: System.Int32
    description: Pattern instance number (see Remarks )
  -
    name: D1Distance
    type: System.Double
    description: Distance from the pattern seed in Direction 1
  -
    name: IsD1OffsetFromNominal
    type: System.Boolean
    description: True if D1Distance is the offset from the nominal position of Instance, false if not
  -
    name: D2Distance
    type: System.Double
    description: Distance from the pattern seed in Direction 2
  -
    name: IsD2OffsetFromNominal
    type: System.Boolean
    description: True if D2Distance is the offset from the nominal position of Instance, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - modifyinstance
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - modify
  - instance
  - int32
  - d1
  - distance
  - double
  - offset
  - nominal
  - boolean
  - d2
---

# ILocalLinearPatternFeatureData.ModifyInstance

Modifies the specified pattern instance with the specified distances in Directions 1 and 2 in this linear component pattern feature.

## Signature

```csharp
System.Boolean ModifyInstance( 
   System.Int32
Instance
,
   System.Double
D1Distance
,
   System.Boolean
IsD1OffsetFromNominal
,
   System.Double
D2Distance
,
   System.Boolean
IsD2OffsetFromNominal
)
```
## Parameters

- `Instance` (System.Int32): Pattern instance number (see Remarks )
- `D1Distance` (System.Double): Distance from the pattern seed in Direction 1
- `IsD1OffsetFromNominal` (System.Boolean): True if D1Distance is the offset from the nominal position of Instance, false if not
- `D2Distance` (System.Double): Distance from the pattern seed in Direction 2
- `IsD2OffsetFromNominal` (System.Boolean): True if D2Distance is the offset from the nominal position of Instance, false if not

## Return Value

True if the pattern instance is modified successfully, false if not

## Remarks

To calculate Instance:
Ensure that
ILocalLinearPatternFeatureData::D2PatternSeedOnly
is set to false.
Calculate:
For a bi-directional pattern:
I
=
n2
* (
i
- 1) + (
j
- 1)
For a uni-directional pattern:
I
=
i
- 1
where:
I
= pattern instance number
n2
= number of instances in Direction 2
i
= index for Direction 1
j
= index for Direction 2
In the pattern's PropertyManager, find
n2
in the
Direction 2
> Spacing and Instances > Number of instances
field and find [
i,j
] in the
Modified Instances
section.