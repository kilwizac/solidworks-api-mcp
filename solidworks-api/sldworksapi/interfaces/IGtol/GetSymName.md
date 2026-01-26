---
type: method
interface: IGtol
member: GetSymName
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
  - IGtol.GetSymText
  - IGtol.GetSymTextPoints
  - IGtol.IGetSymArcs
  - IGtol.IGetSymCircles
  - IGtol.IGetSymEdgeCounts
  - IGtol.IGetSymLines
  - IGtol.IGetSymText
  - IGtol.IGetSymTextPoints
keywords:
  - symbols
  - geometric
  - tolerancing
  - getsymname
  - igtol
  - gtol
  - sym
  - name
  - idx
  - int16
  - string
---

# IGtol.GetSymName

Gets the symbol name based on the specified index number that SOLIDWORKS uses to identify the symbol.

## Signature

```csharp
System.String GetSymName( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Symbol index number used by SOLIDWORKS

## Return Value

Symbol name

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymCircles`
- `IGtol.GetSymDesc`
- `IGtol.GetSymEdgeCounts`
- `IGtol.GetSymLines`
- `IGtol.GetSymText`
- `IGtol.GetSymTextPoints`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymEdgeCounts`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymText`
- `IGtol.IGetSymTextPoints`