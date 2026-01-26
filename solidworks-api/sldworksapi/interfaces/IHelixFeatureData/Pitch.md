---
type: property
interface: IHelixFeatureData
member: Pitch
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - pitch
  - ihelixfeaturedata
  - helix
  - feature
  - data
  - double
  - change
  - vb
  - net
  - vba
readonly: null
---

# IHelixFeatureData.Pitch

Gets or sets the pitch of this helix feature.

## Signature

```csharp
System.Double Pitch {get; set;}
```
## Parameters

None.

## Return Value

Pitch (see Remarks )

## Remarks

For...
This property sets...
Helixes
Distance between turns
Spirals
Radial distance between revolutions of the curve
NOTES
:
If the
helix is defined
as swHelixDefinedBy_e.swHelixDefinedByHeightAndRevolution, then you cannot change the pitch of the helix.
If setting a value for pitch for the first region only, then you cannot change diameter, height, or revolution.

## Examples

- Change Pitch of Helix (C#) (Change_Pitch_of_Helix_Example_CSharp.htm)
- Change Pitch of Helix (VB.NET) (Change_Pitch_of_Helix_Example_VBNET.htm)
- Change Pitch of Helix (VBA) (Change_Pitch_of_Helix_Example_VB.htm)