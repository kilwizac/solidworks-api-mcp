---
type: method
interface: IChamferFeatureData2
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
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - release
  - selection
  - access
  - void
  - edge
  - distances
  - vb
  - net
  - vba
---

# IChamferFeatureData2.ReleaseSelectionAccess

Releases access to the selections that created this chamfer feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IChamferFeatureData2::AccessSelections
or
IChamferFeatureData2::IAccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Get Edge Chamfer Distances (C#) (Get_Edge_Chamfer_Distances_Example_CSharp.htm)
- Get Edge Chamfer Distances (VB.NET) (Get_Edge_Chamfer_Distances_Example_VBNET.htm)
- Get Edge Chamfer Distances (VBA) (Get_Edge_Chamfer_Distances_Example_VB.htm)