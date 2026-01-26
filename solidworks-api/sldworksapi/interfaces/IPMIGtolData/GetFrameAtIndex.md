---
type: method
interface: IPMIGtolData
member: GetFrameAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the frame to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getframeatindex
  - ipmigtoldata
  - ipmi
  - gtol
  - data
  - frame
  - index
  - int32
  - object
  - iannotation
  - getpmidata
---

# IPMIGtolData.GetFrameAtIndex

Gets the data of the frame at the specified index of this PMI Gtol.

## Signature

```csharp
System.Object GetFrameAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the frame to get

## Return Value

IPMIFrameData

## Remarks

Use
IPMIGtolData::GetFrameCount
to determine Index.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)