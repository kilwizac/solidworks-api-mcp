---
type: method
interface: IDerivedPatternFeatureData
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
  - iderivedpatternfeaturedata
  - derived
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
  - number
  - instances
  - skipped
  - driving
  - vb
  - net
  - vba
---

# IDerivedPatternFeatureData.ReleaseSelectionAccess

Releases access to the selections that describe this derived pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

IDerivedPatternFeatureData::AccessSelections
and
IDerivedPatternFeatureData::IAccessSelections2
put the model into a rollback state to allow access to the selections that define this feature.
Use this method to restore the rollback state if you did not modify the feature or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did.

## Examples

- Get Number of Instances Skipped in Driving Feature (C#) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_CSharp.htm)
- Get Number of Instances Skipped in Driving Feature (VB.NET) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_VBNET.htm)
- Get Number of Instances Skipped in Driving Feature (VBA) (Get_Number_of_Instances_Skipped_in_Driving_Feature_Example_VB.htm)