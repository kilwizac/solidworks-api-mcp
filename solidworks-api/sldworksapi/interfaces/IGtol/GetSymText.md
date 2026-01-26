---
type: method
interface: IGtol
member: GetSymText
returns: System.Object
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
  - IGtol.GetSymLines
  - IGtol.GetSymName
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
  - getsymtext
  - igtol
  - gtol
  - sym
  - text
  - idx
  - int16
  - object
---

# IGtol.GetSymText

Gets the symbol text.

## Signature

```csharp
System.Object GetSymText( 
   System.Int16
SymIdx
)
```
## Parameters

- `SymIdx` (System.Int16): Symbol index number used by SOLIDWORKS

## Return Value

Array (see Remarks )

## Remarks

The format of the return data is an array of BSTRs. The size of the array is based on the number of text pieces in this GTol. This number can be determined using TextCount returned by
IGtol::GetSymEdgeCounts
.

## See Also

- `IGtol.GetSymArcs`
- `IGtol.GetSymCircles`
- `IGtol.GetSymDesc`
- `IGtol.GetSymLines`
- `IGtol.GetSymName`
- `IGtol.GetSymTextPoints`
- `IGtol.IGetSymArcs`
- `IGtol.IGetSymCircles`
- `IGtol.IGetSymEdgeCounts`
- `IGtol.IGetSymLines`
- `IGtol.IGetSymText`
- `IGtol.IGetSymTextPoints`