---
type: method
interface: ILocalCircularPatternFeatureData
member: IGetSeedComponentArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.GetSeedComponentCount
  - ILocalCircularPatternFeatureData.ISetSeedComponentArray
  - ILocalCircularPatternFeatureData.SeedComponentArray
keywords:
  - seed
  - components
  - pattern
  - igetseedcomponentarray
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - feature
  - data
  - component
  - array
  - object
---

# ILocalCircularPatternFeatureData.IGetSeedComponentArray

Gets an array of seed component features for this circular component pattern feature.

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

- `ILocalCircularPatternFeatureData.GetSeedComponentCount`
- `ILocalCircularPatternFeatureData.ISetSeedComponentArray`
- `ILocalCircularPatternFeatureData.SeedComponentArray`