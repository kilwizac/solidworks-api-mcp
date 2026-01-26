---
type: property
interface: IMacroFeatureData
member: Parents
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetParentsCount
keywords:
  - parents
  - imacrofeaturedata
  - macro
  - feature
  - data
  - object
readonly: null
---

# IMacroFeatureData.Parents

Gets or sets the parent features for this macro feature.

## Signature

```csharp
System.Object Parents {get; set;}
```
## Parameters

None.

## Return Value

Array of parent features for this macro feature

## Remarks

Parent features set by this property are not persistent when the macro feature is regenerated. Reset the parent features in the
SwComFeature::Regenerate
handler.
To get the parent features...
Use...
assigned to a macro feature by IMacroFeatureData::Parents or IMacroFeatureData::ISetParents
IMacroFeatureData::Parents or
IMacroFeatureData::IGetParents
- or-
IFeature::GetParents
or
IFeature::IGetParents
of a macro feature created by first selecting objects and then calling
IFeatureManager::InsertMacroFeature3
or
IFeatureManager::IInsertMacroFeature3
IMacroFeatureData::GetSelections3
or
IMacroFeatureData::IGetSelections3
- or -
IFeature::GetParents or IFeature::IGetParents
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IMacroFeatureData.GetParentsCount`