---
type: method
interface: ILocalCircularPatternFeatureData
member: GetModifiedInstance
returns: void
parameters:
  -
    name: Instance
    type: System.Int32
    description: Pattern instance number (see Remarks )
  -
    name: AngleFromSeed
    type: System.Double
    description: Angle from the pattern seed
  -
    name: OffsetFromNominal
    type: System.Double
    description: Degree offset from the nominal position of Instance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getmodifiedinstance
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - modified
  - instance
  - int32
  - angle
  - seed
  - double
  - offset
  - nominal
  - void
---

# ILocalCircularPatternFeatureData.GetModifiedInstance

Gets the modified values for the specified pattern instance in this circular component pattern feature.

## Signature

```csharp
void GetModifiedInstance( 
   System.Int32
Instance
,
   out System.Double
AngleFromSeed
,
   out System.Double
OffsetFromNominal
)
```
## Parameters

- `Instance` (System.Int32): Pattern instance number (see Remarks )
- `AngleFromSeed` (System.Double): Angle from the pattern seed
- `OffsetFromNominal` (System.Double): Degree offset from the nominal position of Instance

## Return Value

Unknown.

## Remarks

To specify Instance, you can use
ILocalCircularPatternFeatureData::GetModifiedInstances
to learn which pattern instances are modified.
To calculate Instance:
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