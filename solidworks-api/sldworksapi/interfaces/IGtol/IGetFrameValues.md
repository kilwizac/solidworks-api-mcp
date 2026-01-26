---
type: method
interface: IGtol
member: IGetFrameValues
returns: System.String
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
  - IGtol.GetFrameValues
  - IGtol.IGetFrameDiameterSymbols
  - IGtol.IGetFrameSymbols2
  - IGtol.SetFrameSymbols2
  - IGtol.SetFrameValues
keywords:
  - frame
  - see
  - also
  - iframe
  - geometric
  - tolerancing
  - igetframevalues
  - igtol
  - gtol
  - values
  - number
  - int16
  - string
---

# IGtol.IGetFrameValues

Gets an array that describes the text that appears in each of the fields of the specified GTol frame.

## Signature

```csharp
System.String IGetFrameValues( 
   System.Int16
FrameNumber
)
```
## Parameters

- `FrameNumber` (System.Int16): Frame number to examine (1 or 2)

## Return Value

in-process, unmanaged C++: Pointer to an array of strings (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Format of return array of BSTRs is:
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

## See Also

- `IGtol.GetFrameCount`
- `IGtol.GetFrameDiameterSymbols`
- `IGtol.GetFrameSymbols2`
- `IGtol.GetFrameValues`
- `IGtol.IGetFrameDiameterSymbols`
- `IGtol.IGetFrameSymbols2`
- `IGtol.SetFrameSymbols2`
- `IGtol.SetFrameValues`