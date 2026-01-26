---
type: method
interface: IGtol
member: GetFrameSymbols3
returns: System.Object
parameters:
  -
    name: FrameNumber
    type: System.Int32
    description: Frame number to examine (1 or 2)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetFrameCount
  - IGtol.GetFrameDiameterSymbols
  - IGtol.GetFrameValues
  - IGtol.IGetFrameDiameterSymbols
  - IGtol.IGetFrameValues
  - IGtol.SetFrameSymbols2
  - IGtol.SetFrameValues2
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - getframesymbols3
  - igtol
  - gtol
  - symbols3
  - number
  - int32
  - object
  - text
  - items
  - vb
  - net
  - vba
---

# IGtol.GetFrameSymbols3

Gets the symbols for the specified frame.

## Signature

```csharp
System.Object GetFrameSymbols3( 
   System.Int32
FrameNumber
)
```
## Parameters

- `FrameNumber` (System.Int32): Frame number to examine (1 or 2)

## Return Value

Array of six strings (see Remarks )

## Remarks

This method is valid only if this Gtol was created in a version of SOLIDWORKS earlier than 2022.
The return array is an array of six strings in the following format:
retval
[0] = Geometric tolerance symbol
retval
[1] = Material condition symbol for first tolerance value
retval
[2] = Material condition symbol for second tolerance value
retval
[3] = Material condition symbol for datum1
retval
[4] = Material condition symbol for datum2
retval
[5] = Material condition symbol for datum3
The character strings returned in the array correspond to symbols defined in
C:\ProgramData\SolidWorks\SolidWorks
20
nn
\lang\english\gtol.sym
. The format of each string is <
LibraryName-SymbolName
> (for example,
<GTOL-ANGULAR>,
which is the angularity symbol from the ASME Geometric Tolerancing Symbols library).
Use this method with
IGtol::GetFrameDiameterSymbols
, which determines whether diameter symbols are displayed.

## Examples

- Get Text Items in GTol Frame (C#) (Get_Text_Items_in_GTol_Frame_Example_CSharp.htm)
- Get Text Items in GTol Frame (VB.NET) (Get_Text_Items_in_GTol_Frame_Example_VBNET.htm)
- Get Text Items in GTol Frame (VBA) (Get_Text_Items_in_GTol_Frame_VB.htm)

## See Also

- `IGtol.GetFrameCount`
- `IGtol.GetFrameDiameterSymbols`
- `IGtol.GetFrameValues`
- `IGtol.IGetFrameDiameterSymbols`
- `IGtol.IGetFrameValues`
- `IGtol.SetFrameSymbols2`
- `IGtol.SetFrameValues2`