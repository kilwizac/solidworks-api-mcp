---
type: method
interface: IGtol
member: GetFrameValues
returns: System.Object
parameters:
  -
    name: FrameNumber
    type: System.Int16
    description: Frame number to examine (1 or 2)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetFrameCount
  - IGtol.GetFrameDiameterSymbols
  - IGtol.GetFrameSymbols2
  - IGtol.IGetFrameDiameterSymbols
  - IGtol.IGetFrameSymbols2
  - IGtol.IGetFrameValues
  - IGtol.SetFrameSymbols2
  - IGtol.SetFrameValues
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - getframevalues
  - igtol
  - gtol
  - values
  - number
  - int16
  - object
  - text
  - items
  - vba
  - vb
  - net
---

# IGtol.GetFrameValues

Gets an array that describes the text that appears in each of the fields of the specified GTol frame.

## Signature

```csharp
System.Object GetFrameValues( 
   System.Int16
FrameNumber
)
```
## Parameters

- `FrameNumber` (System.Int16): Frame number to examine (1 or 2)

## Return Value

Array (see Remarks )

## Remarks

This method is valid only if this Gtol was created in a version of SOLIDWORKS earlier than 2022.
Format of return array of strings is:
retval
[0] = Tolerance 1
retval
[1] = Tolerance 2
retval
[2] = Datum 1
retval
[3] = Datum 2
retval
[4] = Datum 3

## Examples

- Get Text Items in GTol Frame (VBA) (Get_Text_Items_in_GTol_Frame_VB.htm)
- Get Text Items in GTol Frame (VB.NET) (Get_Text_Items_in_GTol_Frame_Example_VBNET.htm)
- Get Text Items in GTol Frame (C#) (Get_Text_Items_in_GTol_Frame_Example_CSharp.htm)

## See Also

- `IGtol.GetFrameCount`
- `IGtol.GetFrameDiameterSymbols`
- `IGtol.GetFrameSymbols2`
- `IGtol.IGetFrameDiameterSymbols`
- `IGtol.IGetFrameSymbols2`
- `IGtol.IGetFrameValues`
- `IGtol.SetFrameSymbols2`
- `IGtol.SetFrameValues`