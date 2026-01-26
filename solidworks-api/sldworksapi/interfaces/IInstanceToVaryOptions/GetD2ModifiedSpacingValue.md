---
type: method
interface: IInstanceToVaryOptions
member: GetD2ModifiedSpacingValue
returns: System.Double
parameters:
  -
    name: Instance
    type: System.Int32
    description: Pattern instance number (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getd2modifiedspacingvalue
  - iinstancetovaryoptions
  - instance
  - vary
  - options
  - d2
  - modified
  - spacing
  - value
  - int32
  - double
---

# IInstanceToVaryOptions.GetD2ModifiedSpacingValue

Gets the modified spacing in Direction 2 of the specified pattern instance.

## Signature

```csharp
System.Double GetD2ModifiedSpacingValue( 
   System.Int32
Instance
)
```
## Parameters

- `Instance` (System.Int32): Pattern instance number (see Remarks )

## Return Value

Spacing value in Direction 2

## Remarks

To specify Instance, you can use
IInstanceToVaryOptions::GetModifiedInstances
to learn which pattern instances are modified.
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