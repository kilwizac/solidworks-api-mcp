---
type: property
interface: IRackPinionMateFeatureData
member: DiameterVal
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - features
related: []
keywords:
  - diameterval
  - irackpinionmatefeaturedata
  - rack
  - pinion
  - mate
  - feature
  - data
  - diameter
  - val
  - double
readonly: null
---

# IRackPinionMateFeatureData.DiameterVal

Gets or sets either the pinion pitch diameter or the rack translation distance per pinion revolution.

## Signature

```csharp
System.Double DiameterVal {get; set;}
```
## Parameters

None.

## Return Value

Pinion pitch diameter or rack translation distance per pinion revolution (see Remarks )

## Remarks

For each full rotation of the pinion, the rack translates a distance = (pi * pinion pitch diameter).
If
IRackPinionMateFeatureData::DiameterType
is set to
swRackPinionMateDistanceOptions_e
:
swPinionPitchDiameter, use this property to specify the pinion pitch diameter.
swRackTravelPerRevolution, use this property to specify the rack translation distance per revolution of the pinion.

## Examples

- IRackPinionMateFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRackPinionMateFeatureData)