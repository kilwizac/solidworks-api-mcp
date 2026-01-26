---
type: method
interface: ISurfaceOffsetFeatureData
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
  - isurfaceoffsetfeaturedata
  - surface
  - offset
  - feature
  - data
  - release
  - selection
  - access
  - void
  - vba
  - vb
  - net
---

# ISurfaceOffsetFeatureData.ReleaseSelectionAccess

Releases access to the selections for this surface offset feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ISurfaceOffsetFeatureData::AccessSelections
and
ISurfaceOffsetFeatureData::IAccessSelections
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- Get Offset Surface Data (VBA) (Get_Offset_Surface_Data_Example_VB.htm)
- Get Offset Surface Data (VB.NET) (Get_Offset_Surface_Data_Example_VBNET.htm)
- Get Offset Surface Data (C#) (Get_Offset_Surface_Data_Example_CSharp.htm)