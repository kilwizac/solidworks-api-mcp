---
type: property
interface: ILocalCircularPatternFeatureData
member: SeedComponentArray
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.GetSeedComponentCount
  - ILocalCircularPatternFeatureData.IGetSeedComponentArray
  - ILocalCircularPatternFeatureData.ISetSeedComponentArray
keywords:
  - seed
  - components
  - pattern
  - seedcomponentarray
  - ilocalcircularpatternfeaturedata
  - local
  - circular
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

# ILocalCircularPatternFeatureData.SeedComponentArray

Gets or sets an array of seed component features for this circular component pattern feature.

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
get the
IComponent2
object for each seed component represented by a feature using
IFeature::GetSpecificFeature2
.
pass a mixed array of IComponent2 and
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

- `ILocalCircularPatternFeatureData.GetSeedComponentCount`
- `ILocalCircularPatternFeatureData.IGetSeedComponentArray`
- `ILocalCircularPatternFeatureData.ISetSeedComponentArray`