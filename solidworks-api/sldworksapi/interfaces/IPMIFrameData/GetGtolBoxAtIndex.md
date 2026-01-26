---
type: method
interface: IPMIFrameData
member: GetGtolBoxAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: 0 <= Gtol frame box index <= 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getgtolboxatindex
  - ipmiframedata
  - ipmi
  - frame
  - data
  - gtol
  - box
  - index
  - int32
  - object
  - iannotation
  - getpmidata
---

# IPMIFrameData.GetGtolBoxAtIndex

Gets the specified tolerance box in this Gtol frame.

## Signature

```csharp
System.Object GetGtolBoxAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0 <= Gtol frame box index <= 2

## Return Value

IPMIGtolBoxData

## Remarks

Use
IPMIFrameData::GetGtolBoxCount
to determine Index.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)