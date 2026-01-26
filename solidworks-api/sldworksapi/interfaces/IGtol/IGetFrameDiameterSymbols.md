---
type: method
interface: IGtol
member: IGetFrameDiameterSymbols
returns: System.Boolean
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
  - IGtol.GetFrameSymbols2
  - IGtol.GetFrameValues
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
  - igetframediametersymbols
  - igtol
  - gtol
  - diameter
  - symbols
  - number
  - int16
  - boolean
---

# IGtol.IGetFrameDiameterSymbols

Gets whether diameter symbols are displayed for the specified frame.

## Signature

```csharp
System.Boolean IGetFrameDiameterSymbols( 
   System.Int16
FrameNumber
)
```
## Parameters

- `FrameNumber` (System.Int16): Frame number to examine (1 or 2)

## Return Value

in-process, unmanaged C++: Pointer to an array of Booleans (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value should be an array of two Booleans, with the following format:
retval
[0] = True if the first tolerance value has a diameter symbol, false if it does not
retval
[1] = True if the second tolerance value has a diameter symbol, false if it does not
Use this method in combination with
IGtol::GetFrameSymbols2
that is used to retrieve the frame symbols.

## See Also

- `IGtol.GetFrameCount`
- `IGtol.GetFrameSymbols2`
- `IGtol.GetFrameValues`
- `IGtol.IGetFrameSymbols2`
- `IGtol.IGetFrameValues`
- `IGtol.SetFrameSymbols2`
- `IGtol.SetFrameValues`