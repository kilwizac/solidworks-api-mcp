---
type: method
interface: IDisplayData
member: GetArrowHeadAtIndex
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired arrow head where the index begins at zero
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetArrowHeadCount
  - IDisplayData.IGetArrowHeadAtIndex
keywords:
  - getarrowheadatindex
  - idisplaydata
  - display
  - data
  - arrow
  - head
  - index
  - int32
  - object
---

# IDisplayData.GetArrowHeadAtIndex

Obsolete. Superseded by IDisplayData::GetArrowheadAtIndex2.

## Signature

```csharp
System.Object GetArrowHeadAtIndex( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired arrow head where the index begins at zero

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
arrowHeadPt[3], arrowHeadDir[3], arrowHeadWidth, arrowHeadHeight, arrowHeadStyle
]
where:
arrowHeadPt[3]
XYZ arrow head tip location
arrowHeadDir[3]
XYZ arrow head direction
arrowHeadWidth
Arrow head width measured along the arrow head direction
arrowHeadHeight
Arrow head height
arrowHeadStyle
Arrow head style as defined in
swArrowStyle_e

## See Also

- `IDisplayData.GetArrowHeadCount`
- `IDisplayData.IGetArrowHeadAtIndex`