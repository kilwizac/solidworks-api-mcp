---
type: method
interface: IHealEdgesFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
  - selections
related: []
keywords:
  - releaseselectionaccess
  - ihealedgesfeaturedata
  - heal
  - edges
  - feature
  - data
  - release
  - selection
  - access
  - void
  - vb
  - net
  - vba
---

# IHealEdgesFeatureData.ReleaseSelectionAccess

Releases access to the selections that describe this heal edges feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IHealEdgesFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define the heal edges feature.
Use this method to restore the rollback state if you did not modify the fill-surface feature, or use
IFeature::ModifyDefinition
if you did modify the heal edges feature.

## Examples

- Get Heal Edges Feature Data (C#) (Get_Heal_Edges_Feature_Data_Example_CSharp.htm)
- Get Heal Edges Feature Data (VB.NET) (Get_Heal_Edges_Feature_Data_Example_VBNET.htm)
- Get Heal Edges Feature Data (VBA) (Get_Heal_Edges_Feature_Data_Example_VB.htm)