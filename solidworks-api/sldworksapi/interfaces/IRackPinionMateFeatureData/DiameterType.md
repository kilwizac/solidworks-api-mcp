---
type: property
interface: IRackPinionMateFeatureData
member: DiameterType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - diametertype
  - irackpinionmatefeaturedata
  - rack
  - pinion
  - mate
  - feature
  - data
  - diameter
  - type
  - int32
readonly: null
---

# IRackPinionMateFeatureData.DiameterType

Gets or sets the type of diameter to set.

## Signature

```csharp
System.Int32 DiameterType {get; set;}
```
## Parameters

None.

## Return Value

Type of diameter to set as defined in swRackPinionMateDistanceOptions_e

## Remarks

For each full rotation of the pinion, the rack translates a distance = (pi * pinion pitch diameter). Use this property to set either the pinion pitch diameter or the rack translation distance per pinion revolution.
If this property is set to swRackPinionMateDistanceOptions_e:
swPinionPitchDiameter, then set
IRackPinionMateFeatureData::DiameterVal
with the pinion pitch diameter.
swRackTravelPerRevolution, then set IRackPinionMateFeatureData::DiameterVal with the rack translation distance per revolution of the pinion.

## Examples

- IRackPinionMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRackPinionMateFeatureData)