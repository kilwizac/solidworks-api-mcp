---
type: method
interface: IPMIFrameData
member: GetGtolDatumAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: 0 <= Gtol frame datum index <= 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getgtoldatumatindex
  - ipmiframedata
  - ipmi
  - frame
  - data
  - gtol
  - datum
  - index
  - int32
  - object
  - iannotation
  - getpmidata
---

# IPMIFrameData.GetGtolDatumAtIndex

Gets the specified datum box in this Gtol frame.

## Signature

```csharp
System.Object GetGtolDatumAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0 <= Gtol frame datum index <= 2

## Return Value

IPMIGtolFrameDatum

## Remarks

Use
IPMIFrameData::GetGtolDatumCount
to determine Index.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)