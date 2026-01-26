---
type: method
interface: IMacroFeatureData
member: IGetParents
returns: void
parameters:
  -
    name: ParentCount
    type: System.Int32
    description: Number of parent features for this macro feature
  -
    name: PFeatures
    type: Feature
    description: in-process, unmanaged C++: Pointer to an array of features of parents of this macro feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - igetparents
  - imacrofeaturedata
  - macro
  - feature
  - data
  - parents
  - parent
  - count
  - int32
  - features
  - void
---

# IMacroFeatureData.IGetParents

Gets the parent features of this macro feature.

## Signature

```csharp
void IGetParents( 
   System.Int32
ParentCount
,
   out Feature
PFeatures
)
```
## Parameters

- `ParentCount` (System.Int32): Number of parent features for this macro feature
- `PFeatures` (Feature): in-process, unmanaged C++: Pointer to an array of features of parents of this macro feature VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

To get the parent features...
Use...
assigned to a macro feature by
IMacroFeatureData::Parents
or
IMacroFeatureData::ISetParents
IMacroFeatureData::Parents or IMacroFeatureData::IGetParents
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
Before calling this method, call
IMacroFeatureData::GetParentsCount
to determine the value of ParentCount.
See
Accessing Selections that Define Features
for additional details on using this method.