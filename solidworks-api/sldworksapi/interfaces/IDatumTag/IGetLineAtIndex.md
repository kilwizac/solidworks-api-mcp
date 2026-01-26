---
type: method
interface: IDatumTag
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
  - IDatumTag.GetLineCount
keywords:
  - igetlineatindex
  - idatumtag
  - datum
  - tag
  - line
  - index
  - int32
  - double
---

# IDatumTag.IGetLineAtIndex

Gets information for the specified line in this datum tag.

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
Line type as defined in
swLineTypes_e
startPt
[3]
XYZ line start point
endPt
[3]
XYZ line end point
Call
IDatumTag::GetLineCount
before calling this method.

## See Also

- `IDatumTag.GetLineCount`