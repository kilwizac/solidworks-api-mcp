---
type: method
interface: IGtol
member: IGetSymTextPoints
returns: System.Double
parameters:
  -
    name: SymIdx
    type: System.Int16
    description: Indexed position of the symbol
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetSymArcs
  - IGtol.GetSymCircles
  - IGtol.GetSymDesc
  - IGtol.GetSymEdgeCounts
  - IGtol.GetSymLines
  - IGtol.GetSymName
  - IGtol.GetSymText
  - IGtol.IGetSymArcs
  - IGtol.IGetSymCircles
  - IGtol.IGetSymLines
  - IGtol.IGetSymText
keywords:
  - symbols
  - geometric
  - tolerancing
  - igetsymtextpoints
  - igtol
  - gtol
  - sym
  - text
  - points
  - idx
  - int16
  - double
---

# IGtol.IGetSymTextPoints

Gets the text points for the specified symbol.

## Signature

```csharp
System.Double IGetSymTextPoints( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Indexed position of the symbol

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The size of the return array is based on the number of text pieces in this GTol, which you can determine using the return value from
IGtol::IGetSymEdgeCounts
.
The format of the returned data is an array of doubles:
retval
[0]  - X location of text 1
retval
[1]  - Y location of text 1
retval
[2]  - Z location of text 1
retval
[3]  - X location of text 2
retval
[4]  - Y location of text 2
retval
[5]  - Z location of text 2
retval
[ (n*3-3)] - X location of text n
retval
[ (n*3-2)] - Y location of text n
retval
[ (n*3-1)] - Z location of text n

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymCircles`
- `IGtol.GetSymDesc`
- `IGtol.GetSymEdgeCounts`
- `IGtol.GetSymLines`
- `IGtol.GetSymName`
- `IGtol.GetSymText`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymText`