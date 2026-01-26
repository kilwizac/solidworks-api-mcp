---
type: method
interface: IPMIDimensionData
member: GetDimensionItemAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Zero-based index of the dimension item to get
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getdimensionitematindex
  - ipmidimensiondata
  - ipmi
  - dimension
  - data
  - item
  - index
  - int32
  - object
  - iannotation
  - getpmidata
---

# IPMIDimensionData.GetDimensionItemAtIndex

Gets the PMI dimension item at the specified index.

## Signature

```csharp
System.Object GetDimensionItemAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Zero-based index of the dimension item to get

## Return Value

IPMIDimensionItem

## Remarks

Use
IPMIDimensionData::GetDimensionItemCount
to set Index.

## Examples

- IAnnotation::GetPMIData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAnnotation~GetPMIData)