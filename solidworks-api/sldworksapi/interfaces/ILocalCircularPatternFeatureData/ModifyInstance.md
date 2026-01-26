---
type: method
interface: ILocalCircularPatternFeatureData
member: ModifyInstance
returns: System.Boolean
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
    name: IsOffsetFromNominal
    type: System.Boolean
    description: True if AngleFromSeed is the offset from the nominal position of Instance, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - modifyinstance
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - modify
  - instance
  - int32
  - angle
  - seed
  - double
  - offset
  - nominal
  - boolean
---

# ILocalCircularPatternFeatureData.ModifyInstance

Modifies the specified pattern instance with the specified angle in this circular component pattern feature.

## Signature

```csharp
System.Boolean ModifyInstance( 
   System.Int32
Instance
,
   System.Double
AngleFromSeed
,
   System.Boolean
IsOffsetFromNominal
)
```
## Parameters

- `Instance` (System.Int32): Pattern instance number (see Remarks )
- `AngleFromSeed` (System.Double): Angle from the pattern seed
- `IsOffsetFromNominal` (System.Boolean): True if AngleFromSeed is the offset from the nominal position of Instance, false if not

## Return Value

True if the pattern instance is modified successfully, false if not

## Remarks

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