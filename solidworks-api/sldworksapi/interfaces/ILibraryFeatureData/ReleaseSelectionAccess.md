---
type: method
interface: ILibraryFeatureData
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
  - ilibraryfeaturedata
  - library
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

# ILibraryFeatureData.ReleaseSelectionAccess

Releases access to the selections that created this library feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ILibraryFeatureData::AccessSelections
puts the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)