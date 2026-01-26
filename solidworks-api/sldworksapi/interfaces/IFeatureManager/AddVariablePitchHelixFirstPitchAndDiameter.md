---
type: method
interface: IFeatureManager
member: AddVariablePitchHelixFirstPitchAndDiameter
returns: System.Boolean
parameters:
  -
    name: FirstPitch
    type: System.Double
    description: Pitch, which determines the width of one complete helix turn, measured parallel to the axis of the helix
  -
    name: FirstDiameter
    type: System.Double
    description: Diameter, which determines how far the variable-pitch helix segment extends
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHelixFeatureData
keywords:
  - variable
  - pitch
  - helix
  - feature
  - see
  - also
  - ifeature
  - ihelixfeaturedata
  - addvariablepitchhelixfirstpitchanddiameter
  - ifeaturemanager
  - manager
  - add
  - first
  - diameter
  - double
  - boolean
  - create
  - vb
  - net
  - vba
  - modify
---

# IFeatureManager.AddVariablePitchHelixFirstPitchAndDiameter

Adds the first segment to a variable-pitch helix.

## Signature

```csharp
System.Boolean AddVariablePitchHelixFirstPitchAndDiameter( 
   System.Double
FirstPitch
,
   System.Double
FirstDiameter
)
```
## Parameters

- `FirstPitch` (System.Double): Pitch, which determines the width of one complete helix turn, measured parallel to the axis of the helix
- `FirstDiameter` (System.Double): Diameter, which determines how far the variable-pitch helix segment extends

## Return Value

True if the first segment of the helix is added, false if not

## Remarks

To create and insert a variable-pitch helix, call:
IFeatureManager::InsertVariablePitchHelix
to create it.
IFeatureManager::AddVariablePitchHelixFirstPitchAndDiamenter to add the first segment.
IFeatureManager::AddVariablePitchHelixSegment
one or more times to add the remaining segments.
IFeatureManager::EndVariablePitchHelix
to insert it.

## Examples

- Create Variable-pitch Helix (C#) (Create_Variable_Pitch_Helix_Example_CSharp.htm)
- Create Variable-pitch Helix (VB.NET) (Create_Variable_Pitch_Helix_Example_VBNET.htm)
- Create Variable-pitch Helix (VBA) (Create_Variable_Pitch_Helix_Example_VB.htm)
- Create and Modify Variable-pitch Helix (C#) (Create_and_Modify_Variable-pitch_Helix_Example_CSharp.htm)
- Create and Modify Variable-pitch Helix (VB.NET) (Create_and_Modify_Variable-pitch_Helix_Example_VBNET.htm)
- Create and Modify Variable-pitch Helix (VBA) (Create_and_Modify_Variable-pitch_Helix_Example_VB.htm)

## See Also

- `IHelixFeatureData`