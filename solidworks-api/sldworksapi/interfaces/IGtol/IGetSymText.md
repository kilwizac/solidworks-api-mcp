---
type: method
interface: IGtol
member: IGetSymText
returns: System.String
parameters:
  -
    name: SymIdx
    type: System.Int16
    description: Symbol index number used by SOLIDWORKS
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
  - IGtol.GetSymTextPoints
  - IGtol.IGetSymArcs
  - IGtol.IGetSymCircles
  - IGtol.IGetSymLines
  - IGtol.IGetSymTextPoints
keywords:
  - symbols
  - geometric
  - tolerancing
  - igetsymtext
  - igtol
  - gtol
  - sym
  - text
  - idx
  - int16
  - string
---

# IGtol.IGetSymText

Gets the symbol text.

## Signature

```csharp
System.String IGetSymText( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Symbol index number used by SOLIDWORKS

## Return Value

in-process, unmanaged C++: Pointer to an array of strings. The size of the array is based on the number of text pieces in this GTol. This number can be determined using TextCount returned by IGtol::IGetSymEdgeCounts . VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymCircles`
- `IGtol.GetSymDesc`
- `IGtol.GetSymEdgeCounts`
- `IGtol.GetSymLines`
- `IGtol.GetSymName`
- `IGtol.GetSymText`
- `IGtol.GetSymTextPoints`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymTextPoints`