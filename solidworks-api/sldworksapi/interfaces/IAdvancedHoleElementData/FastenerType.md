---
type: property
interface: IAdvancedHoleElementData
member: FastenerType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - fastenertype
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - fastener
  - type
  - int32
readonly: null
---

# IAdvancedHoleElementData.FastenerType

Gets or sets the fastener type for this Advanced Hole element.

## Signature

```csharp
System.Int32 FastenerType {get; set;}
```
## Parameters

None.

## Return Value

Hole fastener type as defined in swWzdHoleStandardFastenerTypes_e

## Remarks

The hole fastener must match the
IAdvancedHoleElementData::Standard
and be appropriate for the
IAdvancedHoleElementData::ElementType
, or an error occurs.
If
IAdvancedHoleElementData::ElementType
is set to
swAdvWzdGeneralHoleTypes_e
.swAdvWzdTaperTap, then this property gets and sets only swWzdHoleStandardFastenerTypes_e.*TaperedPipeTap.

## Examples

- IAdvancedHoleElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleElementData)