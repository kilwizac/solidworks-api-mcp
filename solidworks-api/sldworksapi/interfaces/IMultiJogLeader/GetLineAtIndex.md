---
type: method
interface: IMultiJogLeader
member: GetLineAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IMultiJogLeader.GetLineCount
  - IMultiJogLeader.IGetLineAtIndex
keywords:
  - getlineatindex
  - imultijogleader
  - multi
  - jog
  - leader
  - line
  - index
  - int32
  - object
  - data
  - vb
  - net
  - vba
---

# IMultiJogLeader.GetLineAtIndex

Gets the symbol information for the specified line.

## Signature

```csharp
System.Object GetLineAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the line

## Return Value

Array of doubles (see Remarks )

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

## Examples

- Get Multi-jog Leader Data (C#) (Get_Multi-jog_Leader_Data_Example_CSharp.htm)
- Get Multi-jog Leader Data (VB.NET) (Get_Multi-jog_Leader_Data_Example_VBNET.htm)
- Get Multi-jog Leader Data (VBA) (Get_Multi-jog_Leader_Data_Example_VB.htm)

## See Also

- `IMultiJogLeader.GetLineCount`
- `IMultiJogLeader.IGetLineAtIndex`