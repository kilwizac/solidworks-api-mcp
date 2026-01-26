---
type: method
interface: IInstanceToVaryOptions
member: ModifyDimensions
returns: System.Boolean
parameters:
  -
    name: Instance
    type: System.Int32
    description: Pattern instance number (see Remarks )
  -
    name: Dimensions
    type: System.Object
    description: Array of dimensions
  -
    name: Values
    type: System.Object
    description: Array of values
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related: []
keywords:
  - modifydimensions
  - iinstancetovaryoptions
  - instance
  - vary
  - options
  - modify
  - dimensions
  - int32
  - object
  - values
  - boolean
---

# IInstanceToVaryOptions.ModifyDimensions

Modifies the specified dimensions of the specified pattern instance.

## Signature

```csharp
System.Boolean ModifyDimensions( 
   System.Int32
Instance
,
   System.Object
Dimensions
,
   System.Object
Values
)
```
## Parameters

- `Instance` (System.Int32): Pattern instance number (see Remarks )
- `Dimensions` (System.Object): Array of dimensions
- `Values` (System.Object): Array of values

## Return Value

True if dimensions modified successfully, false if not

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