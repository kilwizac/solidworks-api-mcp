---
type: property
interface: IWeldmentBeadFeatureData
member: BeadSize
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
  - beadsize
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - size
  - side
  - int32
  - double
readonly: null
---

# IWeldmentBeadFeatureData.BeadSize

Gets or sets the length of the leg of the weld bead.

## Signature

```csharp
System.Double BeadSize( 
   System.Int32
Side
) {get; set;}
```
## Parameters

- `Side` (System.Int32): Side as defined by swWeldBeadSide_e

## Return Value

Length of the leg

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- IWeldmentBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentBeadFeatureData)