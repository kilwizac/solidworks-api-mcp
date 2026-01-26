---
type: property
interface: IWeldmentBeadFeatureData
member: BeadType
returns: System.Int32
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
related:
  - IWeldmentBeadFeatureData.UseOtherSide
keywords:
  - beadtype
  - iweldmentbeadfeaturedata
  - weldment
  - bead
  - feature
  - data
  - type
  - side
  - int32
readonly: null
---

# IWeldmentBeadFeatureData.BeadType

Gets or sets the type of weld bead.

## Signature

```csharp
System.Int32 BeadType( 
   System.Int32
Side
) {get; set;}
```
## Parameters

- `Side` (System.Int32): Side as defined in swWeldBeadSide_e

## Return Value

Type as defined in swWeldBeadType_e

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- IWeldmentBeadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentBeadFeatureData)

## See Also

- `IWeldmentBeadFeatureData.UseOtherSide`