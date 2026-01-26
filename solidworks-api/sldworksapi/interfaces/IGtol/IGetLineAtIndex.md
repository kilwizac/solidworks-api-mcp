---
type: method
interface: IGtol
member: IGetLineAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: 0-based index of the line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetLineAtIndex
  - IGtol.GetLineCount
keywords:
  - lines
  - geometric
  - tolerancing
  - igetlineatindex
  - igtol
  - gtol
  - line
  - index
  - int32
  - double
---

# IGtol.IGetLineAtIndex

Gets the start and end information for the specified line.

## Signature

```csharp
System.Double IGetLineAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): 0-based index of the line

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

The return value is the following array of doubles:
[
lineType, startPt[3], endPt[3]
]
where:
lineType
= the
line type
startPt
[3] = the XYZ line start point
endPt
[3] = the XYZ line end point

## See Also

- `IGtol.GetLineAtIndex`
- `IGtol.GetLineCount`