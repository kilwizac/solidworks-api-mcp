---
type: method
interface: IInstanceToVaryOptions
member: GetModifiedInstances
returns: System.Object
parameters:
  -
    name: ModificationType
    type: System.Int32
    description: Modification type as defined by swInstanceToVaryModificationType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IInstanceToVaryOptions.GetD1ModifiedSpacingValue
  - IInstanceToVaryOptions.GetD2ModifiedSpacingValue
  - IInstanceToVaryOptions.GetModifiedDimensions
keywords:
  - getmodifiedinstances
  - iinstancetovaryoptions
  - instance
  - vary
  - options
  - modified
  - instances
  - modification
  - type
  - int32
  - object
---

# IInstanceToVaryOptions.GetModifiedInstances

Gets instance numbers of modified pattern instances of the specified type.

## Signature

```csharp
System.Object GetModifiedInstances( 
   System.Int32
ModificationType
)
```
## Parameters

- `ModificationType` (System.Int32): Modification type as defined by swInstanceToVaryModificationType_e

## Return Value

Array of pattern instance numbers

## See Also

- `IInstanceToVaryOptions.GetD1ModifiedSpacingValue`
- `IInstanceToVaryOptions.GetD2ModifiedSpacingValue`
- `IInstanceToVaryOptions.GetModifiedDimensions`