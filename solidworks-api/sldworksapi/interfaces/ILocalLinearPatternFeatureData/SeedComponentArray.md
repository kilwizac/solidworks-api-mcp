---
type: property
interface: ILocalLinearPatternFeatureData
member: SeedComponentArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalLinearPatternFeatureData.GetSeedComponentCount
  - ILocalLinearPatternFeatureData.IGetSeedComponentArray
  - ILocalLinearPatternFeatureData.ISetSeedComponentArray
keywords:
  - pattern
  - seed
  - components
  - seedcomponentarray
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - feature
  - data
  - component
  - array
  - object
  - vba
  - vb
  - net
readonly: null
---

# ILocalLinearPatternFeatureData.SeedComponentArray

Gets or sets the seed components for this linear component pattern feature.

## Signature

```csharp
System.Object SeedComponentArray {get; set;}
```
## Parameters

None.

## Return Value

Array of seed component features

## Remarks

You can:
use
IFeature::GetSpecificFeature2
to get the
IComponent2
object for each seed component.
pass a mixed array of
IComponent2
objects and
IFeature
objects representing components.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Get and Set Seed Components (VBA) (Get_and_Set_Seed_Components_Example_VB.htm)
- Get and Set Seed Components (VB.NET) (Get_and_Set_Seed_Components_Example_VBNET.htm)
- Get and Set Seed Components (C#) (Get_and_Set_Seed_Components_Example_CSharp.htm)

## See Also

- `ILocalLinearPatternFeatureData.GetSeedComponentCount`
- `ILocalLinearPatternFeatureData.IGetSeedComponentArray`
- `ILocalLinearPatternFeatureData.ISetSeedComponentArray`