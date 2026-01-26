---
type: method
interface: IFeatureManager
member: EndVariablePitchHelix
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHelixFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - helix
  - variable
  - pitch
  - ihelixfeaturedata
  - endvariablepitchhelix
  - ifeaturemanager
  - manager
  - end
  - create
  - vb
  - net
  - vba
  - modify
---

# IFeatureManager.EndVariablePitchHelix

Ends and inserts a variable-pitch helix.

## Signature

```csharp
Feature EndVariablePitchHelix()
```
## Parameters

None.

## Return Value

Pointer to the IFeature object

## Remarks

To create and insert a variable-pitch helix, call:
IFeatureManager::InsertVariablePitchHelix
to create it.
IFeatureManager::AddVariablePitchHelixFirstPitchAndDiamenter
to add the first segment.
IFeatureManager::AddVariablePitchHelixSegment
one or more times to add the remaining segments.
IFeatureManager::EndVariablePitchHelix to insert it.

## Examples

- Create Variable-pitch Helix (C#) (Create_Variable_Pitch_Helix_Example_CSharp.htm)
- Create Variable-pitch Helix (VB.NET) (Create_Variable_Pitch_Helix_Example_VBNET.htm)
- Create Variable-pitch Helix (VBA) (Create_Variable_Pitch_Helix_Example_VB.htm)
- Create and Modify Variable-pitch Helix (C#) (Create_and_Modify_Variable-pitch_Helix_Example_CSharp.htm)
- Create and Modify Variable-pitch Helix (VB.NET) (Create_and_Modify_Variable-pitch_Helix_Example_VBNET.htm)
- Create and Modify Variable-pitch Helix (VBA) (Create_and_Modify_Variable-pitch_Helix_Example_VB.htm)

## See Also

- `IHelixFeatureData`