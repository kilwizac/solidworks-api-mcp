---
type: method
interface: IInstanceToVaryOptions
member: ModifyD1SpacingValue
returns: System.Boolean
parameters:
  -
    name: Instance
    type: System.Int32
    description: Pattern instance number (see Remarks )
  -
    name: Value
    type: System.Double
    description: Spacing value in Direction 1
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - modifyd1spacingvalue
  - iinstancetovaryoptions
  - instance
  - vary
  - options
  - modify
  - d1
  - spacing
  - value
  - int32
  - double
  - boolean
---

# IInstanceToVaryOptions.ModifyD1SpacingValue

Modifies the spacing in Direction 1 of the specified pattern instance.

## Signature

```csharp
System.Boolean ModifyD1SpacingValue( 
   System.Int32
Instance
,
   System.Double
Value
)
```
## Parameters

- `Instance` (System.Int32): Pattern instance number (see Remarks )
- `Value` (System.Double): Spacing value in Direction 1

## Return Value

True if the spacing is modified successfully, false if not

## Remarks

To calculate Instance:
Ensure that the D2PatternSeedOnly property in the pattern feature data object is set to false.
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

## Examples

- IInstanceToVaryOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IInstanceToVaryOptions)