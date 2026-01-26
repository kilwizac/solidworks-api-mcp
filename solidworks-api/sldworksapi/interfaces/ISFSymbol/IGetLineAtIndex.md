---
type: method
interface: ISFSymbol
member: IGetLineAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the line where the index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ISFSymbol.GetLineAtIndex
keywords:
  - igetlineatindex
  - isfsymbol
  - isf
  - symbol
  - line
  - index
  - int32
  - double
---

# ISFSymbol.IGetLineAtIndex

Gets information for the specified line.

## Signature

```csharp
System.Double IGetLineAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the line where the index begins at 0

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ISFSymbol::GetLineCount
before calling this method to get the number of lines in this surface finish symbol.
The return value is the following array of doubles :
[
lineType
,
startPt
[3],
endPt
[3]
]
where:
lineType
= Line type as defined in
swLineTypes_e
startPt
[3]
= XYZ line start point
endPt
[3]
= XYZ line end point

## See Also

- `ISFSymbol.GetLineAtIndex`