---
type: method
interface: IWeldSymbol
member: GetLineAtIndex
returns: System.Object
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
  - IWeldSymbol.GetLineCount
  - IWeldSymbol.IGetLineAtIndex
keywords:
  - getlineatindex
  - iweldsymbol
  - weld
  - symbol
  - line
  - index
  - int32
  - object
---

# IWeldSymbol.GetLineAtIndex

Gets information for the specified line.

## Signature

```csharp
System.Object GetLineAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the line where the index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

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
= line type as defined in
swLineTypes_e
startPt[3]
= XYZ line start point
endPt[3]
= XYZ line end point

## See Also

- `IWeldSymbol.GetLineCount`
- `IWeldSymbol.IGetLineAtIndex`