---
type: property
interface: IWeldmentBeadFeatureData
member: BeadLength
returns: System.Double
parameters:
  -
    name: Side
    type: System.Int32
    description: Side as defined in swWeldBeadSide_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - beadlength
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - length
  - side
  - int32
  - double
readonly: null
---

# IWeldmentBeadFeatureData.BeadLength

Gets or sets the length of each bead segment of the weld bead.

## Signature

```csharp
System.Double BeadLength( 
   System.Int32
Side
) {get; set;}
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e

## Return Value

Length of weld bead

## Remarks

This property is only valid for intermittent or staggered types of weld beads. Use
IWeldmentBeadFeatureData::BeadType
to determine the type of weld bead.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWeldmentBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentBeadFeatureData)