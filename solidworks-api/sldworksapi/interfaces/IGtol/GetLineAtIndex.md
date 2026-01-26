---
type: method
interface: IGtol
member: GetLineAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired line where the index begins at zero
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetLineCount
  - IGtol.IGetLineAtIndex
keywords:
  - lines
  - geometric
  - tolerancing
  - getlineatindex
  - igtol
  - gtol
  - line
  - index
  - int32
  - object
---

# IGtol.GetLineAtIndex

Gets the start and end information for the specified line.

## Signature

```csharp
System.Object GetLineAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired line where the index begins at zero

## Return Value

Array of doubles (see Remarks )

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

- `IGtol.GetLineCount`
- `IGtol.IGetLineAtIndex`