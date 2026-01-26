---
type: method
interface: IGtol
member: IGetFrameSymbols2
returns: System.String
parameters:
  -
    name: FrameNumber
    type: System.Int16
    description: Frame number to examine (1 or 2)
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetFrameCount
  - IGtol.GetFrameDiameterSymbols
  - IGtol.GetFrameSymbols2
  - IGtol.GetFrameValues
  - IGtol.IGetFrameDiameterSymbols
  - IGtol.IGetFrameValues
  - IGtol.SetFrameSymbols2
  - IGtol.SetFrameValues
keywords:
  - igetframesymbols2
  - igtol
  - gtol
  - frame
  - symbols2
  - number
  - int16
  - string
---

# IGtol.IGetFrameSymbols2

Obsolete. Superseded by IGtol::GetFrameSymbols3.

## Signature

```csharp
System.String IGetFrameSymbols2( 
   System.Int16
FrameNumber
)
```
## Parameters

- `FrameNumber` (System.Int16): Frame number to examine (1 or 2)

## Return Value

in-process, unmanaged C++: Pointer to an array of strings (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return array is an array of six strings in the following format:
retval
[0] = Geometric characteristic symbol
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
IGtol::IGetFrameDiameterSymbols
, which determines whether diameter symbols are displayed.

## See Also

- `IGtol.GetFrameCount`
- `IGtol.GetFrameDiameterSymbols`
- `IGtol.GetFrameSymbols2`
- `IGtol.GetFrameValues`
- `IGtol.IGetFrameDiameterSymbols`
- `IGtol.IGetFrameValues`
- `IGtol.SetFrameSymbols2`
- `IGtol.SetFrameValues`