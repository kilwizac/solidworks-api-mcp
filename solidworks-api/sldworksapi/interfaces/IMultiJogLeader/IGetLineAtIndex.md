---
type: method
interface: IMultiJogLeader
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
  - IMultiJogLeader.GetLineAtIndex
  - IMultiJogLeader.GetLineCount
keywords:
  - igetlineatindex
  - imultijogleader
  - multi
  - jog
  - leader
  - line
  - index
  - int32
  - double
---

# IMultiJogLeader.IGetLineAtIndex

Gets the symbol information for the specified line.

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

The return value is the following array of doubles:
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
= line type. See
swLineTypes_e
.
startPt
[3] = XYZ line start point.
endPt
[3] = XYZ line end point.

## See Also

- `IMultiJogLeader.GetLineAtIndex`
- `IMultiJogLeader.GetLineCount`