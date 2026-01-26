---
type: method
interface: IDerivedPatternFeatureData
member: ISetSeedComponentArray
returns: void
parameters:
  -
    name: FeatCount
    type: System.Int32
    description: Number of seed features
  -
    name: ArrayDataIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of seed component features (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDerivedPatternFeatureData.GetSeedComponentCount
  - IDerivedPatternFeatureData.IGetSeedComponentArray
  - IDerivedPatternFeatureData.SeedComponentArray
keywords:
  - pattern
  - seed
  - components
  - isetseedcomponentarray
  - iderivedpatternfeaturedata
  - derived
  - feature
  - data
  - component
  - array
  - feat
  - count
  - int32
  - object
  - void
---

# IDerivedPatternFeatureData.ISetSeedComponentArray

Sets an array of the seed component features for this derived pattern feature.

## Signature

```csharp
void ISetSeedComponentArray( 
   System.Int32
FeatCount
,
   ref System.Object
ArrayDataIn
)
```
## Parameters

- `FeatCount` (System.Int32): Number of seed features
- `ArrayDataIn` (System.Object): in-process, unmanaged C++: Pointer to an array of seed component features (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

You can pass a mixed array of
IComponent2
and
IFeature
objects representing components.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDerivedPatternFeatureData.GetSeedComponentCount`
- `IDerivedPatternFeatureData.IGetSeedComponentArray`
- `IDerivedPatternFeatureData.SeedComponentArray`