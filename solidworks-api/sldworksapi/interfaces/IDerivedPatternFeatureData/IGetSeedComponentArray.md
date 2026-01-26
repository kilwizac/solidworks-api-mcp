---
type: method
interface: IDerivedPatternFeatureData
member: IGetSeedComponentArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDerivedPatternFeatureData.GetSeedComponentCount
  - IDerivedPatternFeatureData.ISetSeedComponentArray
  - IDerivedPatternFeatureData.SeedComponentArray
keywords:
  - pattern
  - seed
  - components
  - igetseedcomponentarray
  - iderivedpatternfeaturedata
  - derived
  - feature
  - data
  - component
  - array
  - object
---

# IDerivedPatternFeatureData.IGetSeedComponentArray

Gets the seed component features for this derived pattern feature.

## Signature

```csharp
System.Object IGetSeedComponentArray()
```
## Parameters

None.

## Return Value

in-process, unmanaged C++: Pointer to an array of seed component features (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

You can use
IFeature::GetSpecificFeature2
to get the
IComponent2
object for each seed component represented by a feature.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IDerivedPatternFeatureData.GetSeedComponentCount`
- `IDerivedPatternFeatureData.ISetSeedComponentArray`
- `IDerivedPatternFeatureData.SeedComponentArray`