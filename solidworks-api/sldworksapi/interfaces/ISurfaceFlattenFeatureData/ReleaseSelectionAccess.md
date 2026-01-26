---
type: method
interface: ISurfaceFlattenFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - isurfaceflattenfeaturedata
  - surface
  - flatten
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

# ISurfaceFlattenFeatureData.ReleaseSelectionAccess

Releases access to the selections for this surface-flatten feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISurfaceFlattenFeatureData::AccessSelections
puts the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
if you did modify the feature.

## Examples

- Get Data for Surface-flatten Feature (C#) (Get_Data_for_Surface_Flatten_Feature_Example_CSharp.htm)
- Get Data for Surface-flatten Feature (VB.NET) (Get_Data_for_Surface_Flatten_Feature_Example_VBNET.htm)
- Get Data for Surface-flatten Feature (VBA) (Get_Data_for_Surface_Flatten_Feature_Example_VB.htm)