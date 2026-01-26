---
type: method
interface: ILocalLinearPatternFeatureData
member: IGetSeedComponentArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.GetSeedComponentCount
  - ILocalLinearPatternFeatureData.ISetSeedComponentArray
  - ILocalLinearPatternFeatureData.SeedComponentArray
keywords:
  - seed
  - components
  - pattern
  - igetseedcomponentarray
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - feature
  - data
  - component
  - array
  - object
---

# ILocalLinearPatternFeatureData.IGetSeedComponentArray

Gets an array of seed components for this linear component pattern feature.

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

- `ILocalLinearPatternFeatureData.GetSeedComponentCount`
- `ILocalLinearPatternFeatureData.ISetSeedComponentArray`
- `ILocalLinearPatternFeatureData.SeedComponentArray`