---
type: property
interface: IWeldmentBeadFeatureData
member: BeadPitch
returns: System.Double
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined by swWeldBeadSide_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - beadpitch
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - pitch
  - side
  - int32
  - double
readonly: null
---

# IWeldmentBeadFeatureData.BeadPitch

Gets or sets the distance between the start of each weld bead.

## Signature

```csharp
System.Double BeadPitch( 
   System.Int32
Side
) {get; set;}
```
## Parameters

- `Side` (System.Int32): Side as defined by swWeldBeadSide_e

## Return Value

Pitch

## Remarks

This property is only valid for intermittent or staggered types of weld beads. Use
IWeldmentBeadFeatureData::BeadType
to determine the type of weld bead.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWeldmentBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentBeadFeatureData)