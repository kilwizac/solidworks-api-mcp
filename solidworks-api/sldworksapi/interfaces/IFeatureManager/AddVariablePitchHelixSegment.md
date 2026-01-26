---
type: method
interface: IFeatureManager
member: AddVariablePitchHelixSegment
returns: System.Boolean
parameters:
  -
    name: Height
    type: System.Double
    description: Helix segment revolution; 1.0 = 360 degrees
  -
    name: Diameter
    type: System.Double
    description: Diameter, which determines how far the variable-pitch helix segment extends
  -
    name: Pitch
    type: System.Double
    description: Pitch, which determines the width of one complete helix turn, measured parallel to the axis of the helix
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
  - addvariablepitchhelixsegment
  - ifeaturemanager
  - manager
  - add
  - segment
  - height
  - double
  - diameter
  - boolean
  - create
  - vb
  - net
  - vba
  - modify
---

# IFeatureManager.AddVariablePitchHelixSegment

Adds a segment to a variable-pitch helix.

## Signature

```csharp
System.Boolean AddVariablePitchHelixSegment( 
   System.Double
Height
,
   System.Double
Diameter
,
   System.Double
Pitch
)
```
## Parameters

- `Height` (System.Double): Helix segment revolution; 1.0 = 360 degrees
- `Diameter` (System.Double): Diameter, which determines how far the variable-pitch helix segment extends
- `Pitch` (System.Double): Pitch, which determines the width of one complete helix turn, measured parallel to the axis of the helix

## Return Value

True if the variable-pitch helix segment is added, false if not

## Remarks

To create and insert a variable-pitch helix, call:
IFeatureManager::InsertVariablePitchHelix
to create it.
IFeatureManager::AddVariablePitchHelixFirstPitchAndDiameter
to add the first segment.
IFeatureManager::AddVariablePitchHelixSegment one or more times to add the remaining segments.
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