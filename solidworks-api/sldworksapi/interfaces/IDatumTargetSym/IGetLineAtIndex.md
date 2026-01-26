---
type: method
interface: IDatumTargetSym
member: IGetLineAtIndex
returns: System.Double
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the line; index begins at 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IDatumTargetSym.GetLineAtIndex
  - IDatumTargetSym.GetLineCount
keywords:
  - igetlineatindex
  - idatumtargetsym
  - datum
  - target
  - sym
  - line
  - index
  - int32
  - double
---

# IDatumTargetSym.IGetLineAtIndex

Gets information for the specified line.

## Signature

```csharp
System.Double IGetLineAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the line; index begins at 0

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
lineType, startPt[3], endPt[3]
]
where:
lineType
Line type as defined in
swLineTypes_e
startPt[3]
XYZ line start point
endPt[3]
XYZ line end point

## See Also

- `IDatumTargetSym.GetLineAtIndex`
- `IDatumTargetSym.GetLineCount`