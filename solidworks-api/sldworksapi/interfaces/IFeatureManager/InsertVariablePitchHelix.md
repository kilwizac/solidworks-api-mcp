---
type: method
interface: IFeatureManager
member: InsertVariablePitchHelix
returns: System.Boolean
parameters:
  -
    name: Reversed
    type: System.Boolean
    description: True to reverse the variable-pitch helix, false to not
  -
    name: Clockwise
    type: System.Boolean
    description: True to create the variable-pitch helix in a clockwise direction, false to create in a counter-clockwise direction
  -
    name: Helixdef
    type: System.Int32
    description: Definition of variable-pitch helix as defined in swHelixDefinedBy_e ; valid enumerators are: swHelixDefinedByPitchAndRevolution swHelixDefinedByHeightandRevolution swHelixDefinedByHeightAndPitch
  -
    name: Startangle
    type: System.Double
    description: Angle at which to start the variable-pitch helix
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
  - insertvariablepitchhelix
  - ifeaturemanager
  - manager
  - insert
  - reversed
  - boolean
  - clockwise
  - helixdef
  - int32
  - startangle
  - double
  - create
  - vb
  - net
  - vba
  - modify
---

# IFeatureManager.InsertVariablePitchHelix

Starts a variable-pitch helix using the selected sketch containing an arc.

## Signature

```csharp
System.Boolean InsertVariablePitchHelix( 
   System.Boolean
Reversed
,
   System.Boolean
Clockwise
,
   System.Int32
Helixdef
,
   System.Double
Startangle
)
```
## Parameters

- `Reversed` (System.Boolean): True to reverse the variable-pitch helix, false to not
- `Clockwise` (System.Boolean): True to create the variable-pitch helix in a clockwise direction, false to create in a counter-clockwise direction
- `Helixdef` (System.Int32): Definition of variable-pitch helix as defined in swHelixDefinedBy_e ; valid enumerators are: swHelixDefinedByPitchAndRevolution swHelixDefinedByHeightandRevolution swHelixDefinedByHeightAndPitch
- `Startangle` (System.Double): Angle at which to start the variable-pitch helix

## Return Value

True if the variable-pitch helix is started, false if not

## Remarks

To create and insert a variable-pitch helix, call:
IFeatureManager::InsertVariablePitchHelix to create it.
IFeatureManager::AddVariablePitchHelixFirstPitchAndDiamenter
to add the first segment.
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