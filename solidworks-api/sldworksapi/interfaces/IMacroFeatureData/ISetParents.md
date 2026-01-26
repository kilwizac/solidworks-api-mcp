---
type: method
interface: IMacroFeatureData
member: ISetParents
returns: void
parameters:
  -
    name: ParentCount
    type: System.Int32
    description: Number of parent features for this macro feature
  -
    name: PFeatures
    type: Feature
    description: in-process, unmanaged C++: Pointer to an array of parent features VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetParentsCount
  - IMacroFeatureData.IGetParents
  - IMacroFeatureData.Parents
keywords:
  - isetparents
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

# IMacroFeatureData.ISetParents

Sets the parent features for this macro feature.

## Signature

```csharp
void ISetParents( 
   System.Int32
ParentCount
,
   ref Feature
PFeatures
)
```
## Parameters

- `ParentCount` (System.Int32): Number of parent features for this macro feature
- `PFeatures` (Feature): in-process, unmanaged C++: Pointer to an array of parent features VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Parent features set by this method are not persistent when the macro feature is regenerated. Reset the parent features in the
SwComFeature::Regenerate
handler.

## See Also

- `IMacroFeatureData.GetParentsCount`
- `IMacroFeatureData.IGetParents`
- `IMacroFeatureData.Parents`