---
type: method
interface: ILocalLinearPatternFeatureData
member: GetModifiedInstance
returns: void
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
    name: D1NominalVal
    type: System.Double
    description: Offset from the nominal position of Instance in Direction 1
  -
    name: D2Distance
    type: System.Double
    description: Distance from the pattern seed in Direction 2
  -
    name: D2NominalVal
    type: System.Double
    description: Offset from the nominal position of Instance in Direction 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getmodifiedinstance
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - modified
  - instance
  - int32
  - d1
  - distance
  - double
  - nominal
  - val
  - d2
  - void
---

# ILocalLinearPatternFeatureData.GetModifiedInstance

Gets the modified values for the specified pattern instance in this linear component pattern feature.

## Signature

```csharp
void GetModifiedInstance( 
   System.Int32
Instance
,
   out System.Double
D1Distance
,
   out System.Double
D1NominalVal
,
   out System.Double
D2Distance
,
   out System.Double
D2NominalVal
)
```
## Parameters

- `Instance` (System.Int32): Pattern instance number (see Remarks )
- `D1Distance` (System.Double): Distance from the pattern seed in Direction 1
- `D1NominalVal` (System.Double): Offset from the nominal position of Instance in Direction 1
- `D2Distance` (System.Double): Distance from the pattern seed in Direction 2
- `D2NominalVal` (System.Double): Offset from the nominal position of Instance in Direction 2

## Return Value

Unknown.

## Remarks

To specify Instance, you can use
ILocalLinearPatternFeatureData::GetModifiedInstances
to learn which pattern instances are modified.
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